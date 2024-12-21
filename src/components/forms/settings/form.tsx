'use client'
import { useSettings } from '@/hooks/settings/use-settings'
import React from 'react'

type Props = {
    id: string
    name: string
    plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
    chatBot: {
      id: string
      icon: string | null
      welcomeMessage: string | null
    } | null
  }

const SettingsForm = ({ id, name,chatBot,plan}: Props) => {
    const {register,onUpdateSettings,errors,onDeleteDomain,deleting,loading} = useSettings(id)
  return (
    <div>SettingsForm</div>
  )
}

export default SettingsForm