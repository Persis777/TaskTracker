import React from 'react';

interface TaskStatusSelectorProps {
  onStatusChange: (status: TTaskStatus) => void;
  value: TTaskStatus;
}

export type TTaskStatus = 'InProgress' | 'Completed' | 'Pending';

const statuses = [
  {
    value: 'InProgress',
    color: 'bg-blue-500'
  },
  {
    value: 'Completed',
    color: 'bg-green-500'
  },
  {
    value: 'Pending',
    color: 'bg-yellow-500'
  },
];

export default function TaskStatusSelector({
  onStatusChange,
  value
}: TaskStatusSelectorProps) {
  return (
    <div className="flex flex-row gap-4 p-4">
      {statuses.map((status) => (
        <div
          key={status.value}
          className={`flex flex-col items-center justify-center cursor-pointer p-4 rounded-lg shadow-md transition-transform transform ${
            value === status.value ? 'bg-opacity-80 scale-105 text-white' : 'bg-gray-200 text-black'
          } ${status.color}`}
          onClick={() => onStatusChange(status.value as TTaskStatus)}
        >
          <div className={`w-6 h-6 rounded-full ${status.color} mb-2`}/>
          <p className="text-sm font-medium">{status.value}</p>
        </div>
      ))}
    </div>
  );
}
