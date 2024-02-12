import Navigation from "../components/Navigation"

const DeleteTask =({state})=>{
    const {contract,account}= state;

    const deleteTask=async(event)=>{
        event.preventDefault();
        const taskId= document.querySelector("#taskId").value;
        try {
            const res = await fetch(`http://localhost:8000/api/ethereum/delete-task/${taskId}`,{
                method:"DELETE",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({taskId:taskId})
            })
            // console.log(account)
            const data = await res.json()
            if(data.status===200){
                if(contract && contract.methods){
                     await contract.methods.deleteTask(taskId).send({from:account})
                }
            }else{
                alert("Task cannot be deleted")
            }
        } catch (error) {
            console.error(error)
        }

        


    }
    return<>
    <Navigation/>
    <div className="create_task todo_btn">
    <form onSubmit={deleteTask}>
        <label>
            Delete ID:
            <input id="taskId"/>
        </label>
        
        <button type="submit">Delete Task</button>
    </form>
    </div>
    </>
}
export default DeleteTask