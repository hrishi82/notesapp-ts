import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import { NewNote } from "./NewNote";
import {useLocalStorage} from "./useLocalStorage"

export type Tag = { id: string; label: string };

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type RawNote = {
  id: string,
  markdown: string,
  tagIds: string[]
} 

export type Note = {
  id: string;
} & NoteData;

function App() {

  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', [])
  const [tags, setTags] = useLocalStorage<RawNote[]>('NOTES', [])
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route index element={<h1>Show</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
