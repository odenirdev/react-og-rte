import React, { useContext } from 'react'
import { RichUtils } from 'draft-js'
import { AiOutlineUnorderedList, AiOutlineOrderedList } from 'react-icons/ai'

import EditorContext from '../../context'

import { Container } from './styles'
import { Button } from '../../styles'

const ControlBlock: React.FC = () => {
  const { editorState, setEditorState } = useContext(EditorContext)

  const BLOCK_TYPES_LISTS = ['unordered-list-item', 'ordered-list-item']

  // const selection = editorState.getSelection()
  // const blockType = editorState
  //   .getCurrentContent()
  //   .getBlockForKey(selection.getStartKey())
  //   .getType()

  function onToggleBlockType(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault()
    const { style }: { style?: string } = event.currentTarget.dataset

    setEditorState(RichUtils.toggleBlockType(editorState, style!))
  }

  function renderIcon(style: string) {
    switch (style) {
      case 'unordered-list-item':
        return <AiOutlineUnorderedList />

      case 'ordered-list-item':
        return <AiOutlineOrderedList />

      default:
        throw Error('type invalid')
    }
  }

  return (
    <Container>
      {BLOCK_TYPES_LISTS.map((style) => (
        <Button data-style={style} key={style} onMouseDown={onToggleBlockType}>
          {renderIcon(style)}
        </Button>
      ))}
    </Container>
  )
}

export default ControlBlock
