import 'es6-shim'

import React from 'react'
// eslint-disable-next-line no-unused-vars
import { DraftEditorCommand, Editor, EditorState, RichUtils } from 'draft-js'

import Control from './components/Control'

import EditorContext from './context'

import { Container, ControlContainer } from './styles'

function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  )

  function handleKeyCommand(
    command: DraftEditorCommand,
    editorState: EditorState
  ) {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      setEditorState(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  return (
    <EditorContext.Provider value={{ editorState, setEditorState }}>
      <Container>
        <ControlContainer>
          <Control />
        </ControlContainer>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </Container>
    </EditorContext.Provider>
  )
}

export default MyEditor
