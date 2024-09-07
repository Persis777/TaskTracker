'use client';

import LIInput from '@/app/ui/LIInput';
import LITextArea from '@/app/ui/LITextArea';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import PriorityLevels from '@/app/task/PriorityLevels';
import TaskStatusSelector from '@/app/task/TaskStatusSelector';
import { TTaskStatus } from '@/models/Task';
import api from '../../api';

export default function TaskDetail() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Low');
  const [status, setStatus] = useState<TTaskStatus>('Pending');

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams!.toString());
  const id = params.get('id');

  const updateTask = async () => {
    if (id) {
      await api.task.update({
        id: Number(id),
        title,
        description,
        priority,
        status
      });
    }
  };

  const deleteTask = async () => {
    if (id) {
      await api.task.deleteById(Number(id));
    }
  };

  useEffect(() => {
    if (id) {
      api.task.getById(Number(id))
        .then(({ data }) => {
          setTitle(data.title!);
          setDescription(data.description!);
          setPriority(data.priority!);
          setStatus(data.status!);
        });
    }
  }, [id]);

  return (<div className="m-4 w-auto">

    <div className="p-2 flex gap-10 w-full items-end">
      <LIInput value={title}
               onInput={(e: any) => setTitle(e.target.value as string)}
               label="Title task" placeholder="Complete some..." id="title"/>
      <PriorityLevels value={priority} onClick={e => setPriority(e)}/>
      <TaskStatusSelector onStatusChange={(e: TTaskStatus) => setStatus(e)} value={status}/>
    </div>
    <div className="p-2">
      <LITextArea
        value={description}
        onInput={(e: any) => setDescription(e.target.value as string)}
        label="Description"
        placeholder="Write description about task" id="description"/>
    </div>

    <div className="p-2 flex gap-10">
      <button
        onClick={updateTask}
        className="bg-gray-600 text-sm shadow-md py-1 items-center gap-4 flex justify-center rounded w-full">
        Save
      </button>

      <button
        onClick={deleteTask}
        className="bg-red-600 text-sm shadow-md py-1 items-center gap-4 flex justify-center rounded w-full">
        Delete
      </button>
    </div>
  </div>);
}
