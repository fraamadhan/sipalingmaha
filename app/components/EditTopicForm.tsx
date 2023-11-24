import React from 'react'

export default function EditTopicForm() {
    return (
        <div>
            <form className='flex flex-col gap-3 w-full'>
                <input
                    className='border border-slate-500 px-8 py-2 w-full rounded-xl'
                    type='text'
                    placeholder='Topic Title'
                />
                <input
                    className='border border-slate-500 px-8 py-2 w-full rounded-xl'
                    type='text'
                    placeholder='Topic Description'
                />
                <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-xl'>
                    Update Topic
                </button>
            </form>
        </div>
    )
}
