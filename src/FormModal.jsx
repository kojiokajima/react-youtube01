import { Modal } from "./components/modal"
import styled from 'styled-components'
import {Button} from './components/button'

const Container = styled.div`
    width: 240px;
    border-radius: 10px;
    padding: 24px;
    background-color: white;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    mergin-top: 24px;
`

export const FormModal = ({confirm, cancel}) => {
    return (
        <Modal>
            <Container>
                <div>Add the language?</div>
                <ButtonWrapper>
                    <Button onClick={cancel}>Cancel</Button>
                    <Button onClick={confirm}>OK</Button>
                </ButtonWrapper>
            </Container>
        </Modal>
    )
}