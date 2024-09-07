import React from 'react';
import { ITask } from '@/models/Task';

function TaskItem({ task }: { task: ITask }) {
  return (
    <li className="bg-gray-900 shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-700">{task.description}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-gray-500">Due Date: {task.endDate}</span>
        <div>
          <button className="text-blue-500 hover:text-blue-600 mr-2">Edit</button>
          <button className="text-red-500 hover:text-red-600">Delete</button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
