import { onGetAllAccountDomains } from '@/actions/settings'
import React from 'react'

type Props = {}

const ConversationPage = async (props: Props) => {
    const domains = await onGetAllAccountDomains()
  return (
    <div>ConversationPage</div>
  )
}

export default ConversationPage