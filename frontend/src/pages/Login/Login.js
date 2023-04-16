import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel } from '@chakra-ui/react'

export default function Login() {
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Log In</Heading>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}
