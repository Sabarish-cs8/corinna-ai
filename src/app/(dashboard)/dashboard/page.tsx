import { getUserAppointments } from '@/actions/appointment'
import { getUserBalance, getUserClients, getUserPlanInfo, getUserTotalProductPrices, getUserTransactions } from '@/actions/dashboard'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
  const clients = await getUserClients()
  const sales = await getUserBalance()
  const bookings = await getUserAppointments()
  const plan = await getUserPlanInfo()
  const transactions = await getUserTransactions()
  const products = await getUserTotalProductPrices()
  return (
    <div>Page</div>
  )
}

export default Page