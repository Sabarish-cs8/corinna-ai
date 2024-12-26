'use server'

import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: '2024-04-10',
})

export const onCreateCustomerPaymentIntentSecret = async (
    amount: number,
    stripeId: string
  ) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create(
        {
          currency: 'usd',
          amount: amount * 100,
          automatic_payment_methods: {
            enabled: true,
          },
        },
        { stripeAccount: stripeId }
      )
  
      if (paymentIntent) {
        return { secret: paymentIntent.client_secret }
      }
    } catch (error) {
      console.log(error)
    }
  }

  export const onUpdateSubscription = async (
    plan:'STANDARD'|'PRO'|'ULTIMATE'
  ) => {
    try {
      const user = await currentUser()
    if (!user) return
    const update = await client.user.update({
      where: {
        clerkId: user.id,
      },
      data: {
        subscription: {
          update: {
            data: {
              plan,
              credits: plan == 'PRO' ? 50 : plan == 'ULTIMATE' ? 500 : 10,
            },
          },
        },
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    })
    if (update) {
      return {
        status: 200,
        message: 'subscription updated',
        plan: update.subscription?.plan,
      }
    }
    } catch (error) {
      console.log(error)
    }
  }