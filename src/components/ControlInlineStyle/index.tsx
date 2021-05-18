import React, { useContext } from 'react'
import { FaBold, FaItalic, FaUnderline } from 'react-icons/fa'
import { RichUtils } from 'draft-js'

import EditorContext from '../../context'

import { Container } from './styles'
import { Button } from '../../styles'

const ControlInlineStyle: React.FC = () => {
  const { editorState, setEditorState } = useContext(EditorContext)

  const INLINE_STYLES = ['BOLD', 'ITALIC', 'UNDERLINE']

  function onToggle(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(event)
    event.preventDefault()
    const { style }: { style?: string } = event.currentTarget.dataset

    setEditorState(RichUtils.toggleInlineStyle(editorState, style!))
  }

  function inlineStyleIcon(style: string) {
    switch (style) {
      case 'BOLD':
        return <FaBold />

      case 'ITALIC':
        return <FaItalic />

      case 'UNDERLINE':
        return <FaUnderline />

      default:
        throw Error('type invalid')
    }
  }

  return (
    <Container>
      {INLINE_STYLES.map((style) => (
        <Button key={style} onMouseDown={onToggle} data-style={style}>
          {inlineStyleIcon(style)}
        </Button>
      ))}
    </Container>
  )
}

export default ControlInlineStyle
