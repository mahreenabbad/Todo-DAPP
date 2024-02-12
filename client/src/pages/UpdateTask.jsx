import Navigation from "../components/Navigation"
import { useState } from "react";

const UpdateTask =({state})=>{
    const[modalVisible,setModalVisible]= useState(false)
    const[modalContet,setModalContent] =useState("")
    const closeModal =()=>{
        setModalVisible(false)
        setModalContent("")
    }
    const {contract,account}= state;
    const updateTask=async(event)=>{
        event.preventDefault();
        const taskId =document.querySelector("#taskId").value;
        const taskName= document.querySelector("#taskName").value;
        const taskDate= document.querySelector("#taskDate").value;

        try {
            const res = await fetch("http://localhost:8000/api/ethereum/update-task",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({taskDate:taskDate}),
            })
            const data = await res.json();
            if(data.status===200){
                await contract.methods.updateTask(taskId,taskName,taskDate).send({from:account})
                setModalContent(`Task ID ${taskId} updated with task name${taskName} and date ${taskDate}`);
                setModalVisible(true)
            }else{
                throw new error("task cannot b updated")
            }
            
        } catch (error) {
            setModalContent("Task cannot be updated")
            setModalVisible(true)
        }
    }
    return<>
    <Navigation/>
    <div className="update_task todo_btn">
        <form onSubmit={updateTask}>
          <label>
            ID:
            <input id="taskID" />
          </label>
          <label>
            Name:
            <input id="taskName" />
          </label>
          <label>
            Date:
            <input id="taskDate" type="date" />
          </label>
          <button type="submit">Update Task</button>
        </form>

        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </div>
    
    </>
}
export default UpdateTask