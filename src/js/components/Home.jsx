import React from "react";
import { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState(["Hacer la tarea", "Tocar Bajo", "Estudiar React"]);
	function addTask() {
		setTaskList([...taskList, task])
	}

	return (
		<div className="text-center d-flex flex-column">           

			<h1 className="text-center mt-5 text-success" style={{fontSize:"55px"}} >Todo List</h1>
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
				<button className="btn btn-success p-0" style={{width:"80px", height:"40px"}} onClick={(addTask) }>Add Task</button>
			</div>
			
			<p>{task}</p>
			
			{taskList.map((taskItem, indexAdd) => {
				return <div className="d-flex alig-items-center justify-content-center " >
					
					<p className="mt-3 text-success" key={taskItem} style={{border:"2px solid #000", width:"20%", borderRadius:"15px", fontWeight:"bold"}}> {taskItem} </p>
					
					<button 
						className="btn-close" 
						onClick={() => taskList.filter((taskkItem, indexDel) => {
							indexDel != indexAdd
							
						})} >
				 	</button>
				</div>
				
			})}
			
		</div>
	);
};

export default Home;