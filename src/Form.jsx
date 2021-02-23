import React, {useState} from 'react'
import styled from 'styled-components'
import {Button} from './components/button'

const Container = styled.div`
    padding: 12px 64px;
`

const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`

const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black
`

const ButtonContainer = styled.div`
    margin-top: 24px;
`

const FormButton = styled(Button)`
    width: 120px;
`

export const Form = ({onAddLang}) => {
    const [text, setText] = useState('')

    const submitForm = (event) => {
        event.preventDefault()
        onAddLang(text)
    }

    return (
        <Container>
            <h4>Add new languages</h4>
            <form onSubmit={submitForm}>
                <div>
                    <Label>Language</Label>
                    <Input 
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <ButtonContainer>
                    <FormButton>Add</FormButton>
                </ButtonContainer>
            </form>
        </Container>
    )
}