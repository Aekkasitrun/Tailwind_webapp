import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="flex justify-end">
      <div className="flex items-stretch ">
        <span className="p-3 border-solid border-2 border-gray-600 rounded-md">{task.taskName}</span>
        <span className="p-3 border-solid border-2 border-gray-600 rounded-md">{task.deadline}</span>
        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
      </div>
      
    </div>
  );
};

export default TodoTask;