import React from 'react';
import TaskItem from '@/app/task/TaskItem';
import api from '@/api';
import { GoPaste } from 'react-icons/go';
import TaskDetail from '@/app/task/TaskDetail';

export const dynamic = 'force-dynamic';

async function TaskList() {
  const { data: tasks } = await api.task.getAll();

  return (
    <section className="h-screen w-full flex flex-shrink-0">
      <div className="h-full w-1/5 bg-gray-700 ml-4 mt-4">
        <ul className="space-y-1 h-full mx-2 py-1">
          <li
            className="bg-gray-600 text-sm shadow-md py-1 items-center gap-4 flex justify-center gap-4">
            <GoPaste/> New
          </li>
          {tasks.map(task => <TaskItem task={task} key={task.id}/>)}
        </ul>

      </div>
      <div className="bg-gray-900/20 h-full w-full">
        <TaskDetail/>
      </div>
    </section>
  );
}

export default TaskList;
