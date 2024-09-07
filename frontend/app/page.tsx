'use client';

import React, { useEffect } from 'react';
import TaskList from '@/components/TaskList';
import axios from '@/utils/axios';

export default function Home() {
  const [tasks, setTasks] = React.useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/task');
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen">
      {tasks.length && <TaskList tasks={tasks}/>}
    </div>
  );
}

