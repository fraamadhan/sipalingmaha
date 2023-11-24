'use client'

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddTopic() {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required")
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({title, description})
      });

      if (res.ok) {
        router.push('/dashboard')
        alert("Topic added successfully")
      } else {
        throw new Error("Failed to create a topic")
      }
    } catch(err) {
        console.log(err);
        
    }

  }

  return (
    <div className='mt-28 p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full text-black'>
        <input
          className='border border-slate-500 px-8 py-2 w-full rounded-xl'
          type='text'
          placeholder='Topic Title'
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          className='border border-slate-500 px-8 py-2 w-full rounded-xl'
          type='text'
          placeholder='Topic Description'
        />
        <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-xl'>
          Add Topic
        </button>
      </form>
    </div>
  );
}
