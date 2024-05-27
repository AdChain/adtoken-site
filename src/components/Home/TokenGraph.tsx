import { useBalancesQuery } from '@/generated/graphql'
import React from 'react'

const TokenGraph = () => {
    const { data, loading, refetch}:any = useBalancesQuery({endpoint: 'https://api.studio.thegraph.com/proxy/65652/testing-adtoken/version/latest'})

    console.log(data , "data::::::::::")
  return (
    <div>TokenGraph</div>
  )
}

export default TokenGraph