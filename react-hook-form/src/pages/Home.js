import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Stack, PinInput, PinInputField, HStack, Heading} from "@chakra-ui/react"
import {
    Alert,
    AlertIcon
} from "@chakra-ui/react"

const PIN_DEFAULT = 35710

const WrongPass = () => {
    return(
        <Alert status="error" width="300px">
            <AlertIcon />
            Pin yang Anda masukkan salah!
        </Alert>
    )
}

const Home = () => {
    const [ input, setInput ] = useState("")
    const [ valid, setValid ] = useState(false)
    const handleInput = event => {
        setInput(event)
    }
    const history = useHistory()
    const handleComplete = event => {
        if(Number(event) === PIN_DEFAULT){
            history.push(`/welcome`)
        }
        else setValid(true)
    }

    return(
        <div>
            <Stack spacing={3}>
                <Heading>Masukkan PIN dulu ngab</Heading>
                <HStack>
                    <PinInput
                        size="lg" type="number" mask
                        onChange={ handleInput }
                        onComplete={ handleComplete }
                    >
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
                {valid ? <WrongPass/> : null}
            </Stack>
        </div>
    )
}

export default Home