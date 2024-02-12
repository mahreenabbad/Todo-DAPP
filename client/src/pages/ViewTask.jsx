import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

const ViewTask =()=>{
   const[task,setTask] =useState({taskId:null,name:null,date:null})
   const[modalVisible,setModalVisible] =useState(false)
   const[modalContent,setModalContent] =useState("")

   const viewTask =async(event)=>{
    try {
        event.preventDefault();
        const taskId =document.querySelector("#taskId").value;
        const res = await fetch(`http://localhost:8000/api/ethereum/view-task/${taskId}`,{
            method:"GET",
                headers:{
                    "Accept":"application/json"
                },
        })
        const data= await res.json();
        if(data.status===200){
            setTask(data.taskObj)
        }else{
            throw new Error()
        }
        //  console.log(data)
        
    } catch (error) {
        setModalContent("TASK DOES NOT EXIST")
        setModalVisible(true)
    }
   }
   const closeModal=()=>{
    setModalVisible(false)
    setModalContent("")
   }

    return<>
    <Navigation/>
    <div className="view_task todo_btn">
    {task.numId!==null && task.name!==null && task.date!==null ? (
            <div className="view_task_by_id  view_all_tasks_card">
             <p>Task ID:{task.numId}</p>
             <p>Task Name:{task.name}</p>
             <p>Task Date:{task.date}</p>
            </div>
            ) : (
          <div className="empty_div"></div>
        )}

    <form onSubmit={viewTask}>
        <label>
            ID:
            <input id="taskId"/>
        </label>
        <button type="submit">View Task</button>
    </form>
    {modalVisible && (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}> &times</span>
                <p>{modalContent}</p>
            </div>
            </div>
    )

    }
    </div>
    </>
}

export default ViewTask