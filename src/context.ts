import { createContext } from 'react'
import { EditorState } from 'draft-js'

interface Props {
  editorState: EditorState
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
}

export default createContext<Props>({
  editorState: EditorState.createEmpty(),
  setEditorState: () => {}
})
