import React, { useContext } from 'react'
import { RichUtils } from 'draft-js'

import EditorContext from '../../context'

import { Container } from './styles'

const ControlBlock: React.FC = () => {
  const { editorState, setEditorState } = useContext(EditorContext)

  const BLOCK_TYPES = [
    { label: 'Título 1', style: 'header-one' },
    { label: 'Título 2', style: 'header-two' },
    { label: 'Título 3', style: 'header-three' },
    { label: 'Título 4', style: 'header-four' },
    { label: 'Título 5', style: 'header-five' },
    { label: 'Título 6', style: 'header-six' }
  ]

  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  function onChangeBlockType(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault()
    const { value } = event.currentTarget

    setEditorState(RichUtils.toggleBlockType(editorState, value))
  }

  return (
    <Container>
      <select value={blockType} onChange={onChangeBlockType}>
        <option value=''>Normal</option>
        {BLOCK_TYPES.map(({ label, style }) => (
          <option key={style} value={style}>
            {label}
          </option>
        ))}
      </select>
    </Container>
  )
}

export default ControlBlock
