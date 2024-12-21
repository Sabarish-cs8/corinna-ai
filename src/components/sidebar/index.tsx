'use client'
import useSidebar from '@/context/use-sidebar'
import React from 'react'

type Props = {
    domains: 
    | {
        id:string 
        name:string 
        icon : string 
    }[] 
    | null 
    | undefined
}

const SideBar = ({domains}: Props) => {
    const { expand , onExpand , page, onSignOut } = useSidebar()
  return (
    <div>SideBar</div>
  )
}

export default SideBar