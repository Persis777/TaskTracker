'use client';

import LIInput from '@/app/ui/LIInput';
import LITextArea from '@/app/ui/LITextArea';
import api from '@/api';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TaskDetail() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const id = params.get('id');

  useEffect(() => {
    if (id) {
      api.task.getById(Number(id))
        .then(({ data }) => {
          setTitle(data.title);
          setDescription(data.description);

        });
    }
  }, [id]);

  return (<div className="bg-gray-700 m-4 h-full w-auto">

    <div className="p-2"><LIInput value={title} onInput={(e) => setTitle(e.target.value)}
                                  label="Title task" placeholder="Complete some..."/></div>
    <div className="p-2"><LITextArea
      value={description} onInput={(e) => setDescription(e.target.value)}
      label="Description"
      placeholder="Write description about task"/></div>

  </div>);

}
