import React from 'react';

export default function TaskList() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <ul className="space-y-4">
        <li className="bg-gray-900 shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold">Task Title</h3>
          <p className="text-gray-700">Description of the task.</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-gray-500">Due Date: 2024-09-15</span>
            <div>
              <button className="text-blue-500 hover:text-blue-600 mr-2">Edit</button>
              <button className="text-red-500 hover:text-red-600">Delete</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
