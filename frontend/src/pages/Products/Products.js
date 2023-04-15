import React from 'react'
import Card from '../../components/Card/Card'
import { Grid, Box, Flex } from '@chakra-ui/react'
import { useQuery, useInfiniteQuery } from 'react-query'
import { getAllProducts } from '../../api'

export default function Products() {

  const { isLoading, error, data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery('products', getAllProducts, {
    getNextPageParam: (lastGroup, allGroups) => { // pagination with useInfiniteQuery
      const morePagesExist = lastGroup.length === 12; // same with backend (what comes from api)
      if (!morePagesExist) {
        return;
      }
      return allGroups.length + 1;
    }
  })

  if (status === 'loading') return 'Loading...'

  if (status === 'error') return 'An error has occurred: ' + error.message

  return (
    <div>
      <Grid templateColumns="repeat(4,1fr)">
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((product) => (
              <Box key={product.id}>
                <Card product={product} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Flex mt="10" justifyContent="center">
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </Flex>
    </div>
  );
}


