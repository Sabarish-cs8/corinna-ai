import React from 'react'

type Props = {
    children : React.ReactNode
}

const OwnerLayout = async ({ children }: Props) => {
    const authenticated = await onLoginUser()
  return (
    <div>OwnerLayout</div>
  )
}

export default OwnerLayout