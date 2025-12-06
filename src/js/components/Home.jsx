import React from "react";
import { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState(["Hacer ejercicios", "Tocar Música", "Estudiar React"]);
	function addTask() {
		setTaskList([...taskList, task])

	}
	{/* Esta es la funcion para borrar las tareas en tasklist, es llamada desde el onClick del btn-close */}
	const deleteCurrentTask = (currentItem) => {
		let newlistTask = taskList.filter( (item) => item != currentItem)
		setTaskList(newlistTask)
		}	

	return (
		<div className="text-center d-flex flex-column">           

			<h1 className="text-center mt-5" style={{ fontSize:"55px", userSelect:"none"}} >Todo List</h1>
			<input 
				type="text" 
				className="form-control w-25 mx-auto" 
				onChange={(e) =>  setTask(e.target.value)}  
				onKeyUp={(e) => {
					if(e.target.key=="enter") {
						setTaskList([...taskList, task])
					}
				}}				
				/>
			
			<div className="d-flex justify-content-center my-3" >
				<button className="btn p-0" style={{width:"80px", height:"40px", backgroundColor:"#070707ff", color:"#fff", borderRadius:"3px"}} onClick={(addTask) }>Add Task</button>
			</div>
			
			<p>{task}</p>
			
			{taskList.map((taskItem, index) => {
				return (
				<div className="my-1 col-6 mx-auto d-flex justify-content-center align-items-center p-0" >
					<p className="text-secondary p-0" key={index} 
						style={{width:"85%", minWidth:"200px", maxWidth:"300px", borderRadius:"3px", border:"1px solid #000", fontWeight:"bold", userSelect:"none"}}> 
						{taskItem} 
					</p>

					<div className="p-0 h-0">
						<button 
						type="button" 
						className="btn btn-close text-center p-3 mb-3" 
						style={{ width:"15%", height:"3px", fontSize:"18px" }}  
						onClick={() => deleteCurrentTask(taskItem)}
						></button>
					</div>			
				</div>
				)
				
			})}
			
		</div>
	);
};

export default Home;