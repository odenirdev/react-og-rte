import React from 'react'

import ControlBlock from '../ControlBlock'
import ControlInlineStyle from '../ControlInlineStyle'
import ControlLists from '../ControlLists'

import { Container } from './styles'

const Control: React.FC = () => {
  return (
    <Container>
      <ControlBlock />
      <ControlInlineStyle />
      <ControlLists />
    </Container>
  )
}

export default Control
