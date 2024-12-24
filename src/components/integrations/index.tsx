'use client'

import React from 'react'

type Props = {
    connections: {
      stripe: boolean
    }
  }

  const IntegrationsList = ({ connections }: Props) => {
    return (
        <div className="flex-1 h-0 grid grid-cols-1 content-start lg:grid-cols-3 xl:grid-cols-4 gap-3">
        hello
        </div>
    )
}

export default IntegrationsList