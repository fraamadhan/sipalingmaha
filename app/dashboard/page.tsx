import React from 'react'
import TopicsList from '../components/topicsList'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'

export default async function Dashboard() {

    const session = await getServerSession(authOptions)
    
    if (session?.user) {
        return (
            <div className='mt-28 mx-16'>
                <TopicsList />
            </div>
        )
    }

    return (

        <div className='mt-28 mx-16 text-center'>
            <h2 className='text-2xl'>Please login heula</h2>
        </div>
    )
}
