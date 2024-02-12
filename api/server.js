const express =require('express');
const tasks = require('./routes/routes')
const cors = require('cors');

const app =express();

app.use(cors());

app.use(express.json());
//user-/api/ethereum/create-task -> server.js -> routes.js -> controller.js -> tasks.js

app.use('/api/ethereum',tasks)

const PORT =8000

app.listen(PORT,()=>{
    console.log(`server running at Port 8000`)
})


 
// const ABI = require('./ABI.json');
// const {Web3}= require('web3');
// const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/IMp3T02reLtxb60xFUqqUopG1khMRbbc")
// const contractAddress ="0x6be21d2dfa017b8bd55a446bd7e8252060fd5bdf"
// const contract = new web3.eth.Contract(ABI,contractAddress)

// const dateclashCheck =async(taskDate)=>{
//     const tasks = await contract.methods.allTasks().call();//tasks is array
//     const foundTask = tasks.find(task=>task.date===taskDate)//checking through array

//     if(foundTask){
//         return foundTask.name;
//     }
//     return "No task found"
// }


// app.post("/api/ethereum/create-task",async(req,res)=>{
    // const {taskDate}= req.body;
    // const task = await dateclashCheck(taskDate);

    // try {
    //     if(task !== "No task found"){
    //         res.status(409).json({status:409,message:"Date clash:Task cannot be added"})
    //     }else{
    //         res.status(200).json({status:200,message:"Task can be added"})
    //     }  
    // } catch (error) {
    //     console.error(error)
    // }
// })


// app.get("/api/ethereum/view-task/:taskId",async(req,res)=>{
    
    // try {
    //     const {taskId}=req.params;
    // const task = await contract.methods.viewTask(taskId).call();
    // const {id,name,date} =task;
    // const numId= Number(id);//convert bigInt into number format
    // const taskObj ={
    //  numId,name,date
    // }
    // // console.log(task)
    // res.status(200).json({status:200,taskObj,message:"Task exist"})
    // } catch (error) {
    //     res.status(500).json({status:500,message:"Task Id not exist"})
    // }   
// })

// app.get("/api/ethereum/view-all-task",async(req,res)=>{
    // try {
    //     const tasks = await contract.methods.allTasks().call();
    //     if(tasks.length<0){
    //         res.status(404).json({status:404,message:"task not exist"})
    //     }
    //     else{
    //         const taskList= tasks.map(({id,name,date})=>{
    //        const taskId = Number(id);
    //        return {taskId,name,date}
    //         })
    //         res.status(200).json({status:200,taskList,message:"Tasks exist"})
    //     }
        
    // } catch (error) {
    //     res.status(500).json({status:500,message:"Task Id not exist"})
    //     console.log(error)
    // }
// })

// app.post("/api/ethereum/update-task",async(req,res)=>{
//     const {taskDate}= req.body;
//     const task = await dateclashCheck(taskDate);

//     try {
//         if(task !== "No task found"){
//             res.status(409).json({status:409,message:"Date clash:Task cannot be updated"})
//         }else{
//             res.status(200).json({status:200,message:"Task can be updated"})
//         }  
//     } catch (error) {
//         console.error(error)
//     }
// })

// const priorityCheck=async(taskId)=>{
//     const tasks = await contract.methods.allTasks().call();
//     const result= tasks[taskId].name.includes("priority");
//     return result;

// }

// app.delete("/api/ethereum/delete-task/:taskId",async(req,res)=>{
    // try {
    //     const {taskId}= req.params;
    //     const istrue = await priorityCheck(taskId);
    //     if(istrue){
    //         res.status(403).json({status:403,message:"Task cannot be deleted"})
    //     }else{
    //         res.status(200).json({status:200,message:"Task can be deleted"})
    //     }
        
    // } catch (error) {
    //     console.error(error)
    // }
// })

