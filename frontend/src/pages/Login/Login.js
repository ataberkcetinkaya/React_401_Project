import React, { useState } from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from '@chakra-ui/react'
import { useFormik } from 'formik'
import validationSchema from './validations'
import { fetchLogin } from '../../api'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values,bag) => {
      try {
        const response = await fetchLogin({ email: values.email, password: values.password })
        login(response)
        navigate('/profile')
      }
      catch (error) {
        bag.setErrors({ general: error.response.data.message })
      }
    }
  })

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={5} textAlign="center">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} isInvalid={formik.touched.email && formik.errors.email}></Input>
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} isInvalid={formik.touched.password && formik.errors.password}></Input>
              </FormControl>

              <Button mt="4" width="50%" type="submit" colorScheme='red'>
                Login
              </Button>

              <Box mt="4">
                {formik.errors.general && (
                  <Alert status="error" colorScheme='red'>
                    {formik.errors.general}
                  </Alert>
                )}
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}
