// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Todo{
    struct Task{
        uint id;
        string name;
        string date;
    }
    Task task;

    address owner;
    
    uint taskId =1;
    event taskCreate(uint taskId, string name);
    event taskUpdate(uint taskId, string name);
    event taskDelete(uint taskId);
    mapping (uint=>Task) tasks;

    modifier checkId(uint id){
        require(id>0 && id<taskId,"invalid Id");
        _;
    }

    constructor(){
        owner= msg.sender;
    }
    function createTask(string calldata _taskName, string calldata _date) public {
        tasks[taskId]= Task(taskId,_taskName,_date);
        taskId++;
        emit taskCreate(taskId,_taskName);
    }
    function updateTask(uint _taskId,string calldata _taskName,string calldata _date)public checkId(_taskId){
        tasks[_taskId]= Task(_taskId,_taskName,_date);
         emit taskUpdate(taskId,_taskName);
    }
    function allTasks()public  view returns (Task[] memory){
        Task[] memory taskList = new Task[](taskId-1);
        for(uint i=0;i<taskId-1;i++){
            taskList[i] = tasks[i+1];//using tasks mapping ,pushing mapping data inti array,we cannot return whole mapping
        }
        return taskList;
    }
    function viewTask(uint _taskId) checkId(_taskId)view public  returns (Task memory){
        return tasks[_taskId];
    }
    function deleteTask(uint _taskId) checkId(_taskId) public{
        delete tasks[_taskId];
        emit taskDelete(_taskId);
    }

}