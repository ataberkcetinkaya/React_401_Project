import React from 'react'
import Card from '../../components/Card/Card'
import { Grid } from '@chakra-ui/react'

export default function Products() {
  return (
    <div>
        <Grid templateColumns="repeat(4,1fr)">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Grid>
    </div>
  )
}
