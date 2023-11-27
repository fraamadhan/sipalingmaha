'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

const UserAccountNav = () => {
    return (
        <a className="bg-white text-black p-2 rounded hover:bg-red-900
                                hover:text-red-200 hover" onClick={() => signOut({
                                    redirect: true,
                                    callbackUrl: `${window.location.origin}/`
                                })}>Sign-out</a>
    )
}


export default UserAccountNav
