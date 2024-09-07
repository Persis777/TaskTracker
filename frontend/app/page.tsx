import React from 'react';
import TaskList from '@/components/TaskList';
import api from '@/api';

export default async function Home() {
  let tasks;
  try {
    console.log('Fetching tasks...');

    const response = await api.task.getTasks();
    tasks = response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }

  return (
    <div className="min-h-screen">
      <TaskList tasks={tasks}/>
    </div>
  );
}

