import React from 'react';
import TaskItem from '@/components/TaskList/TaskItem';
import { ITask } from '@/models/Task';

function TaskList({ tasks = [] }: { tasks: ITask[] }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <ul className="space-y-4">
        {tasks.map(task => <TaskItem task={task} key={task.id}/>)}
      </ul>
    </section>
  );
}

export default TaskList;
