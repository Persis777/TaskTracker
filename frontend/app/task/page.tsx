'use client';

import React, { useEffect } from 'react';
import TaskItem from '@/app/task/TaskItem';
import api from '@/api';
import { GoPaste } from 'react-icons/go';

import { ITask } from '@/models/Task';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

function TaskList() {
  const router = useRouter();
  const [tasks, setTasks] = React.useState<ITask[]>([]);
  const TaskDetail = dynamic(() => import('@/app/task/TaskDetail'));

  const emptyTask = {
    'title': 'string',
    'description': 'string',
    'deadline': '2024-09-07T08:01:19.923Z',
    'priority': 'string',
    'status': 'string'
  };

  const getTasks = async () => {
    const { data } = await api.task.getAll();
    setTasks(data);
  };
  const createTask = async () => {
    const { data } = await api.task.create(emptyTask as ITask);
    if (data.id) router.push(`/task?id=${data.id}`);
    await getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <section className="w-full flex flex-shrink-0 ">
      <div className="w-1/5 bg-gray-700 ml-4 mt-4">
        <ul className="space-y-1 mx-2 py-1 overflow-hidden">
          <button
            onClick={createTask}
            className="bg-gray-600 text-sm shadow-md py-1 items-center gap-4 flex justify-center w-full">
            <GoPaste/> New
          </button>
          {tasks.map(task => <TaskItem task={task} key={task.id}/>)
            .reverse()}
        </ul>
      </div>
      <div className="w-full">
        <TaskDetail/>
      </div>
    </section>
  );

}

export default TaskList;
