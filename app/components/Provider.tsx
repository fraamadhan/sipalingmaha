'use client'

import React, { FC, ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface ProviderProps {
    children: ReactNode 
}

export const Provider: FC<ProviderProps> = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}
