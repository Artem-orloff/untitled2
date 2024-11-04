<template>
  <div>
    <h1>Notes</h1>
    <button @click="addNewNote">Add Note</button>
    <ul>
      <li v-for="note in notes" :key="note.id">
        <router-link :to="{ name: 'NoteDetail', params: { id: note.id } }">{{ note.title }}</router-link>
        <button @click="deleteNote(note.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useNoteStore } from '../store/noteStore';

export default {
  setup() {
    const noteStore = useNoteStore();
    noteStore.fetchNotes();

    return {
      notes: noteStore.notes,
      deleteNote: noteStore.deleteNote,
      addNewNote: () => noteStore.addNote({ title: 'New Note', description: '' }),
    };
  },
};
</script>
