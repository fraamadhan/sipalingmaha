'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditTopicForm({ id, title, description }: any) {


    const [newtitle, setNewTitle] = useState(title)
    const [newdescription, setNewDescription] = useState(description)
    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {

            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newTitle: newtitle, newDescription: newdescription }),
            });

            if (!res.ok) {
                throw new Error("Data failed to update data")
            }
            alert("Data updated")
            router.push('/dashboard')
            router.refresh()
        
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <form className='flex flex-col gap-3 w-full text-black'>
                <input
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newtitle}
                    className='border border-slate-500 px-8 py-2 w-full rounded-xl'
                    type='text'
                    placeholder='Topic Title'
                />
                <input
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newdescription}
                    className='border border-slate-500 px-8 py-2 w-full rounded-xl'
                    type='text'
                    placeholder='Topic Description'
                />
                <button
                    onClick={handleSubmit}
                    className='bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-xl'>
                    Update Topic
                </button>
            </form>
        </div>
    )
}
