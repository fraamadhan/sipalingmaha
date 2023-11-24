import EditTopicForm from '@/app/components/EditTopicForm'
import React from 'react'

const getTopicById = async(id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("Data failed to update");
    }

    return res.json()
  } catch (err) {
    console.log(err);
    
  }
}

export default async function editTopic({params}: any) {
  const {id} = params;
  const {topic} = await getTopicById(id);
  const {topicTitle, topicDescription} = topic;
  return (
    <div className='mt-28 p-4'>
      <EditTopicForm id={id} title={topicTitle} description={topicDescription}/>
    </div>
  )
}
