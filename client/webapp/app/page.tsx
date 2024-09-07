import React from 'react';

export default async function Home() {

  const links = [
    {
      title: 'Tasks',
      href: '/task',
    },
  ];
// Main menu, its hub for all pages
  return (<div className="flex items-center justify-center h-1/2">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Task Manager</h1>
        <p className="text-gray-600">This is a simple task manager, where you can add, edit, delete
          and mark tasks as completed. You can navigate to the task page using the link below.</p>
        <ul className="mt-4">
          {links.map(link => (
            <li key={link.title} className="mt-2">
              <a href={link.href} className="text-blue-500 hover:underline">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

