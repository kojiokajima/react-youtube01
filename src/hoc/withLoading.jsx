import styled from 'styled-components'
import React, {useEffect, useState, useStyles} from 'react'

const LoadDiv = styled.div`
    padding: 36px;
`

export const withLoading = (WrappedComponent, fetchData) => {
    return () => {
        const [data, setData] = useState(null)

        useEffect(() => {
            fetch()
        }, [])

        const fetch = async () => {
            const data = await fetchData();
            setData(data)
        }

        const Loading = (
            <LoadDiv>Now Loading...</LoadDiv>
        )

        return data ? <WrappedComponent data={data} /> : Loading
    }
}