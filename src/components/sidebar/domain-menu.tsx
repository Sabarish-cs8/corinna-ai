import { useDomain } from '@/hooks/sidebar/use-domain'
import { cn } from '@/lib/utils'
import React from 'react'
import AppDrawer from '../drawer'
import { Plus } from 'lucide-react'
import { Loader } from '../loader'
import FormGenerator from '../forms/form-generator'
import { Button } from '../ui/button'

type Props = {
    min?: boolean
    domains:
      | {
          id: string
          name: string
          icon: string | null
        }[]
      | null
      | undefined
}

const DomainMenu = ({ domains, min }: Props) => {
    const { register , onAddDomain , loading , errors,isDomain} = useDomain()
    
  return (
    <div className={cn('flex flex-col gap-3' , min ? 'mt-6' : 'mt-3')}>
        <div className="flex justify-between w-full items-center">
            {!min && <p className="text-xs text-gray-500">DOMAINS</p>}
            <AppDrawer
             description="add in your domain address to integrate your chatbot"
             title="Add your business domain"
             onOpen={
                <div className = " cursor-pointer text-gray-500 rounded-full border-2">
                    <Plus />
                </div>
             }
            >
                <Loader loading={loading}>
                    <form className="mt-3 w-6/12 flex flex-col gap-3"
                    onSubmit={onAddDomain}
                    >
                        <FormGenerator 
                        inputType='input'
                        register={register}
                        label="Domain"
                        name="Domain"
                        errors={errors}
                        placeholder="mydomain.com"
                        type="text"
                        />
                        <UploadButton 
                          register={register}
                          label="Upload Icon"
                          errors={errors}
                          />
                          <Button type="submit" className="w-full"
                          >
                            Add Domain
                          </Button>
                    </form>
                </Loader>



            </AppDrawer>
        </div>
    </div>
  )
}

export default DomainMenu