'use client'

import React from 'react'

type CreateProductFormProps = {
    id:string 
}

const CreateProductForm = ({id}: CreateProductFormProps) => {
    const { onCreateNewProduct , register,errors,loading } = useProducts(id)
  return (
    <div>CreateProductForm</div>
  )
}

export default CreateProductForm