import React from 'react'
import { Button } from './styled/Button.styles'

const Playground = () => {
  return(
    <div>
      <h1>Hello World!</h1>
      <Button>Action</Button>
      <Button color="black">Action</Button>
      <Button color="#F32121">Action</Button>
      <Button variant="ghost">Action</Button>
      <Button variant="squared">Action</Button>
    </div>
  )
}

export default Playground;
