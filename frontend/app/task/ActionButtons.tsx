'use client';

import api from '@/api';
import { ITask } from '@/models/Task';
import { GoPencil, GoTrash } from 'react-icons/go';
import { redirect } from 'next/navigation';

export default function ActionButtons({
  task
}: { task: ITask }) {
  const deleteTask = async () => {
    await api.task.deleteTask(task.id);
    redirect('/task');
  };

  return (<div className="flex gap-2 justify-end">
    <GoPencil className="text-gray-400 cursor-pointer"/>
    <GoTrash className="text-gray-400 cursor-pointer" onClick={deleteTask}/>
  </div>);
}
