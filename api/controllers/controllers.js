const {dateclashCheck,priorityCheck} =require('../model/tasks')
const {contract} =require('../contract/contract')

const createTask =async(req,res)=>{
    const {taskDate}= req.body;
    const task = await dateclashCheck(taskDate);

    try {
        if(task !== "No task found"){
            res.status(409).json({status:409,message:"Date clash:Task cannot be added"})
        }else{
            res.status(200).json({status:200,message:"Task can be added"})
        }  
    } catch (error) {
        console.error(error)
    }
}


const updateTask =async(req,res)=>{
    const {taskDate}= req.body;
    const task = await dateclashCheck(taskDate);

    try {
        if(task !== "No task found"){
            res.status(409).json({status:409,message:"Date clash:Task cannot be updated"})
        }else{
            res.status(200).json({status:200,message:"Task can be updated"})
        }  
    } catch (error) {
        console.error(error)
    }

}


const deleteTask =async(req,res)=>{
    try {
        const {taskId}= req.params;
        const istrue = await priorityCheck(taskId);
        if(istrue){
            res.status(403).json({status:403,message:"Task cannot be deleted"})
        }else{
            res.status(200).json({status:200,message:"Task can be deleted"})
        }
        
    } catch (error) {
        console.error(error)
    }

}


const viewTask =async(req,res)=>{
    try {
        const {taskId}=req.params;
    const task = await contract.methods.viewTask(taskId).call();
    const {id,name,date} =task;
    const numId= Number(id);//convert bigInt into number format
    const taskObj ={
     numId,name,date
    }
    // console.log(task)
    res.status(200).json({status:200,taskObj,message:"Task exist"})
     } catch (error) {
        res.status(500).json({status:500,message:"Task Id not exist"})
    }  

}


const allTask =async(req,res)=>{
    try {
        const tasks = await contract.methods.allTasks().call();
        if(tasks.length<0){
            res.status(404).json({status:404,message:"task not exist"})
        }
        else{
            const taskList= tasks.map(({id,name,date})=>{
           const taskId = Number(id);
           return {taskId,name,date}
            })
            res.status(200).json({status:200,taskList,message:"Tasks exist"})
        }
    } catch (error) {
        res.status(500).json({status:500,message:"Task Id not exist"})
        console.log(error)
    }

}
module.exports={
    createTask,
    viewTask,
    allTask,
    deleteTask,
    updateTask
}