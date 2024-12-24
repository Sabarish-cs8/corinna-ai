import { onGetAllBookingsForCurrentUser } from '@/actions/appointment'
import InfoBar from '@/components/infobar'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
    const user = await currentUser()

    if (!user) return null
  const domainBookings = await onGetAllBookingsForCurrentUser(user.id)
  const today = new Date()

  return (
    <>
    <InfoBar />
    </>
  )
}

export default Page