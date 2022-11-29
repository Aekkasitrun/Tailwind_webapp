import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header bg-red-100">
        <div className="text-6xl lg:text-7xl xl:text-8xl text-gray-500 tracking-wider font-bold font-serif mt-12 text-left">ToDoList</div>
        <div className="grid grid-rows-3 grid-flow-col w-10 ">
          <input className="col-span-2 py-2 border-solid border-2 border-gray-600 rounded-md"
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
        
          <input className="col-span-2 py-2 border-solid border-2 border-gray-600 rounded-md"
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
          <button className="row-span-2 col-span-2 flex-no-shrink p-8 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500" onClick={addTask}>Add Task</button>
        </div>
        
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;