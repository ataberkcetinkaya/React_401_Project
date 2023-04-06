import React from 'react'
import { Box, Image, Button } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Card({product}) {
  return (
    <div className={styles.theMargin}>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Link to='/product/1'>
                <Image src={product.photos[0]} alt='product' loading="lazy" />

                <Box p='6'>
                    <Box d='flex' alignItems='baseline'>
                        {product.title}
                    </Box>
                    <Box mt="1" fontWeight="semibold" fontSize='xl'>
                        {product.description}
                    </Box>
                    <Box mt="1" fontWeight="semibold" fontSize='xl'>
                        {product.price}
                    </Box>
                </Box>
            </Link>

            <Button colorScheme='blue' variant='outline'>Add to cart</Button>
        </Box>
    </div>
  )
}
