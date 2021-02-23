import React, {useEffect} from 'react'
import styled from 'styled-components'
import { TabBodyContainer } from './components/tab-body-container'

const ListItem = styled.div`
    padding: 8px 16px;

    &:nth-child(n+2) {
        border-top: 1px solid #d9d8de
    }
`

export const List = ({langs}) => {

    useEffect(() => {
        // console.log("List.js: useEffect")

        return () =>  {
            // console.log('List.js: unmount')
        }
    })

    return (
      <TabBodyContainer title="Languages">
          <div>
            {
                langs.map((lang, index) => {
                    return <ListItem key={index}>{lang}</ListItem>
                })
            }
          </div>
      </TabBodyContainer>
    )
  }