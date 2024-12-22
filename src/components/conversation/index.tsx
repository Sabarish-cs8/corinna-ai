'use client'
import { useConversation } from '@/hooks/conversation/use-conversation'
import React from 'react'

type Props = {
    domains?:
    |{
        name:string 
        id:string 
        icon:string 
    }[]
    | undefined
}

const ConversationMenu = ({domains}: Props) => {
    const { register ,chatRooms,loading,onGetActiveChatMessages } = useConversation()
  return (
    <div>ConversationMenu</div>
  )
}

export default ConversationMenu