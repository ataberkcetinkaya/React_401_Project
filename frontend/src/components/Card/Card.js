import React from 'react'
import { Box, Image, Button } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Card() {
  return (
    <div className={styles.theMargin}>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Link to='/product/1'>
                <Image src='https://bit.ly/sage-adebayo' alt='product' />

                <Box p='6'>
                    <Box d='flex' alignItems='baseline'>
                        Apple
                    </Box>
                    <Box mt="1" fontWeight="semibold" fontSize='xl'>
                        iPhone 14 Pro Max
                    </Box>
                    <Box mt="1" fontWeight="semibold" fontSize='xl'>
                        999.99$
                    </Box>
                </Box>
            </Link>

            <Button colorScheme='blue' variant='outline'>Add to cart</Button>
        </Box>
    </div>
  )
}
