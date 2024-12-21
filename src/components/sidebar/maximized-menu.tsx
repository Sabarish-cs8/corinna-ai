import { SIDE_BAR_MENU } from '@/constants/menu'
import { LogOut, Menu, MonitorSmartphone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DomainMenu from './domain-menu'
import MenuItem from './menu-item'

type Props = {
    onExpand(): void
    current: string
    onSignOut(): void
    domains:
      | {
          id: string
          name: string
          icon: string | null
        }[]
      | null
      | undefined
  }

const MaxMenu = ({ current, domains, onExpand, onSignOut }: Props)  => {
  return (
    <div className="py-3 px-4 flex flex-col h-full">
    <div className="flex justify-between items-center">
      <Image
        src="/images/logo.png"
        alt="LOGO"
        sizes="100vw"
        className="animate-fade-in opacity-0 delay-300 fill-mode-forwards"
        style={{
          width: '50%',
          height: 'auto',
        }}
        width={0}
        height={0}
      />
       <Menu
          className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards"
          onClick={onExpand}
        />
      </div>
      </div>
  )
}

export default MaxMenu