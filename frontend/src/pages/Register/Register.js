import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import validationSchema from './validations'

export default function Register() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: async (values,bag) => {
      console.log(values);
    }
  })

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Register</Heading>
          </Box>
          <Box my={5} textAlign="center">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></Input>
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}></Input>
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Confirm Password</FormLabel>
                <Input name="confirmPassword" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}></Input>
              </FormControl>

              <Button mt="4" width="50%" type="submit" colorScheme='red'>
                Register
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}
