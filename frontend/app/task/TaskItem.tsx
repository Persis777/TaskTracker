'use client';

import React, { useMemo } from 'react';
import { ITask } from '@/models/Task';
import { formatDate } from '@/app/task/utils/dateFormat';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Props {
  task: ITask;
}

function TaskItem({
  task
}: Props) {

  const searchParams = useSearchParams();

  const isTaskSelected = useMemo(() => {
    const params = new URLSearchParams(searchParams!.toString());
    const id = params.get('id');
    if (!id) return false;
    return +id === task.id;
  }, [searchParams, task.id]);

  return (
    <li
      className={`text-sm shadow-md p-1 grid grid-cols-2 justify-between items-center gap-4 ${isTaskSelected ? 'bg-gray-500' : 'bg-gray-800'}`}>
      <Link href={`/task?id=${task.id}`}> <span className="font-semibold">{task.title}</span>
      </Link>
      <span className="text-gray-400 text-right text-xs">{formatDate(task.deadline!)}</span>
    </li>
  );
}

export default TaskItem;
