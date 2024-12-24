'use client'

import { useEmailMarketing } from '@/hooks/email-marketing/use-marketing'
import React from 'react'


type Props = {
    domains: {
      customer: {
        Domain: {
          name: string
        } | null
        id: string
        email: string | null
      }[]
    }[]
    campaign: {
      name: string
      id: string
      customers: string[]
      createdAt: Date
    }[]
    subscription: {
      plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
      credits: number
    } | null
  }
  

const EmailMarketing = ({ campaign, domains, subscription }: Props) => {
    const {
      onSelectedEmails,
      isSelected,
      onCreateCampaign,
      register,
      errors,
      loading,
      onSelectCampaign,
      processing,
      onAddCustomersToCampaign,
      campaignId,
      onBulkEmail,
      onSetAnswersId,
      isId,
      registerEmail,
      emailErrors,
      onCreateEmailTemplate,
      setValue,
    } = useEmailMarketing()

    return <div>EmailMarketing</div>
}
export default EmailMarketing