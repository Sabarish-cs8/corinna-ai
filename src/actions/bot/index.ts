'use server'

import { client } from '@/lib/prisma'

export const onStoreConversations = async (
    id: string,
    message: string,
    role: 'assistant' | 'user'
  ) => {
    await client.chatRoom.update({
      where: {
        id,
      },
      data: {
        message: {
          create: {
            message,
            role,
          },
        },
      },
    })
  }

  export const onGetCurrentChatBot = async (id: string) => {
    try {
      const chatbot = await client.domain.findUnique({
        where: {
          id,
        },
        select: {
          helpdesk: true,
          name: true,
          chatBot: {
            select: {
              id: true,
              welcomeMessage: true,
              icon: true,
              textColor: true,
              background: true,
              helpdesk: true,
            },
          },
        },
      })
  
      if (chatbot) {
        return chatbot
      }
    } catch (error) {
      console.log(error)
    }
  }