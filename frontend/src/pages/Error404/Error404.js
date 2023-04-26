import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react'
import React from 'react'

export default function Error404() {
  return (
    <div>
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle mr={2}>404</AlertTitle>
            <AlertDescription>Page not found.</AlertDescription>
            <CloseButton position='absolute' right='8px' top='8px' />
        </Alert>
    </div>
  )
}
