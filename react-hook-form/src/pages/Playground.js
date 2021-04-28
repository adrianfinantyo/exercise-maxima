import React from 'react'
import { Heading, HStack, Stack } from "@chakra-ui/layout"
import { Button } from '../styled/Button.styles'

const Playground = () => {
  return (
    <div>
      <Stack direction="column">
        <Heading>Hello World!</Heading>
        <HStack>
          <Button>Action</Button>
          <Button color="black">Action</Button>
          <Button color="#F32121">Action</Button>
          <Button variant="ghost">Action</Button>
          <Button variant="squared">Action</Button>
        </HStack>
      </Stack>
    </div>
  )
}

export default Playground;
