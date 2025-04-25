// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol"; // 引入 OpenZeppelin 的 Ownable 合约

contract MedicalRecords is Ownable {

    // 定义病例记录结构体
    struct Record {
        uint timestamp;         // 记录时间戳
        string recordReference; // 病例内容的引用 (例如 IPFS CID 或描述性文字)
        address recordedBy;     // 记录者 (医生地址)
    }

    // 存储每个病人的病例历史 (病人ID -> 病例记录数组)
    // 注意：真实的系统可能需要更复杂的病人标识符管理
    mapping(uint => Record[]) public patientRecords;

    // 存储被授权的医生地址
    mapping(address => bool) public isDoctor;

    // 事件：当新记录被添加时触发
    event RecordAdded(
        uint indexed patientId,
        uint version,
        string recordReference,
        address indexed recordedBy
    );

    // 事件：当医生被添加或移除时触发
    event DoctorStatusChanged(address indexed doctor, bool isAuthorized);

    // 修改器：确保只有授权的医生才能执行操作
    modifier onlyDoctor() {
        require(isDoctor[msg.sender], "Caller is not an authorized doctor");
        _;
    }

    // 构造函数：在部署时设置合约所有者
    constructor() Ownable(msg.sender) {} // 将部署者设置为所有者

    // --- 管理功能 (仅限所有者) ---

    /**
     * @notice 授权或撤销一个地址的医生权限
     * @param _doctor 要授权/撤销的地址
     * @param _isAuthorized true 表示授权, false 表示撤销
     */
    function setDoctorAuthorization(address _doctor, bool _isAuthorized) public onlyOwner {
        require(_doctor != address(0), "Invalid doctor address");
        isDoctor[_doctor] = _isAuthorized;
        emit DoctorStatusChanged(_doctor, _isAuthorized);
    }

    // --- 核心功能 (医生操作) ---

    /**
     * @notice 为指定病人添加一条新的病例记录 (或更新版本)
     * @param _patientId 病人ID
     * @param _recordReference 病例内容的引用 (例如 "ipfs://Qm...")
     */
    function addRecord(uint _patientId, string memory _recordReference) public onlyDoctor {
        require(_patientId > 0, "Patient ID must be greater than 0");
        require(bytes(_recordReference).length > 0, "Record reference cannot be empty");

        Record memory newRecord = Record({
            timestamp: block.timestamp,
            recordReference: _recordReference,
            recordedBy: msg.sender
        });

        patientRecords[_patientId].push(newRecord);

        // 获取新记录的版本号（即数组长度）
        uint version = patientRecords[_patientId].length;

        emit RecordAdded(_patientId, version, _recordReference, msg.sender);
    }

    // --- 查询功能 (任何人都可以调用) ---

    /**
     * @notice 获取指定病人的最新病例记录
     * @param _patientId 病人ID
     * @return 返回最新的 Record 结构体
     */
    function getLatestRecord(uint _patientId) public view returns (Record memory) {
        Record[] storage records = patientRecords[_patientId];
        require(records.length > 0, "No records found for this patient");
        return records[records.length - 1];
    }

    /**
     * @notice 获取指定病人的所有病例记录历史
     * @param _patientId 病人ID
     * @return 返回包含所有 Record 结构体的数组
     */
    function getRecordHistory(uint _patientId) public view returns (Record[] memory) {
        return patientRecords[_patientId];
    }

    /**
     * @notice 获取指定病人记录的总数 (版本数)
     * @param _patientId 病人ID
     * @return 病例记录的数量
     */
    function getRecordCount(uint _patientId) public view returns (uint) {
        return patientRecords[_patientId].length;
    }

    // --- OpenZeppelin 引入 ---
    // Remix 会自动处理 OpenZeppelin 的导入，如果本地开发需要 npm install @openzeppelin/contracts
}