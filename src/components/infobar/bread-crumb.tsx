'use client'
import useSideBar from '@/context/use-sidebar'
import React from 'react'
import { Loader } from '../loader'

type Props = {}

const BreadCrumb = (props: Props) => {
    //WIP : Set up Use side bar for real time chat and bot stuff
    //WIP : setup the description and the switch

    const {chatRoom , expand ,loading , onActivateRealtime , onExpand ,page , onSignOut,realtime} = useSideBar()
  return (
    <div className="flex flex-col">
        <div className="flex gap-5 items-center">
            <h2 className="text-3xl font-bold capitalize">{page}</h2>
            {page === 'conversation' && chatRoom && (
              <Loader loading={loading} className="p-0 inline"></Loader>
            )}
        </div>
        <p className="text-gray-500 text-sm">
            Modify domain settings, change chatbot options, enter sales questions and train your bot to do what you want it to.
        </p>
    </div>
  )
}

export default BreadCrumb