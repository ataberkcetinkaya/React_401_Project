import React from 'react'
import Card from '../../components/Card/Card'
import { Grid } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { getAllProducts } from '../../api'

export default function Products() {

  const { isLoading, error, data } = useQuery('products', getAllProducts)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
        <Grid templateColumns="repeat(4,1fr)">
            {
              data.map((product, key) => {
                return (
                  <Card key={key} product={product} />
                )
              })
            }
        </Grid>
    </div>
  )
}
