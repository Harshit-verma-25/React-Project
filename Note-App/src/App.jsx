import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./components/data"
import Split from "react-split"
import { nanoid } from "nanoid"
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from 'firebase/firestore'
import { noteCollection, db } from './Firebase'
import "./components/style.css"

export default function App() {
    
  const [notes, setNotes] = React.useState([])
  const [currentNoteId, setCurrentNoteId] = React.useState("")
  const currentNote = notes.find(note => note.id === currentNoteId ) || notes[0]
  const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt)
  const [tempNoteText, setTempNoteText] = React.useState("")
  
  React.useEffect(() => {
    const unsubscribe = onSnapshot(noteCollection, function(snapshot) {
      const notesArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setNotes(notesArr)
    })
    return unsubscribe
  }, [])

  React.useEffect(() => {
    if (!currentNoteId){
      setCurrentNoteId(notes[0]?.id)
    }
  }, [notes])

  React.useEffect(() => {
    if(currentNote) {
      setTempNoteText(currentNote.body)
    }
  }, [currentNote])

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateNote(tempNoteText)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [tempNoteText])
  
  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    const newNotesRef = await addDoc(noteCollection, newNote)
    setCurrentNoteId(newNotesRef.id)
  }

  async function updateNote(text) {
    const docRef = doc(db, "notes", currentNoteId)
    await setDoc(
        docRef, 
        { body: text, updatedAt: Date.now() }, 
        { merge: true }
    )
  }
  
  async function deleteNote(noteId) {
    const docRef = doc(db, "notes", noteId)
    await deleteDoc(docRef)
  }
  
  return (
    <main>
      {
        notes.length > 0 ?
        <Split 
          sizes={[20, 80]} 
          direction="horizontal" 
          className="split"
        >
          <Sidebar
            notes={sortedNotes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {
          <Editor 
            tempNoteText={tempNoteText} 
            setTempNoteText={setTempNoteText} 
          />
          }
        </Split> :
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button 
            className="first-note" 
            onClick={createNewNote}
          >
          Create one now
          </button>
        </div>  
      }
    </main>
  )
}