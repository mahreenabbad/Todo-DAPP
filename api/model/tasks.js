const {contract} =require('../contract/contract')

const dateclashCheck =async(taskDate)=>{
    const tasks = await contract.methods.allTasks().call();//tasks is array
    const foundTask = tasks.find(task=>task.date===taskDate)//checking through array

    if(foundTask){
        return foundTask.name;
    }
    return "No task found"
}

const priorityCheck=async(taskId)=>{
    const tasks = await contract.methods.allTasks().call();
    const result= tasks[taskId].name.includes("priority");
    return result;

}
module.exports={dateclashCheck,priorityCheck}