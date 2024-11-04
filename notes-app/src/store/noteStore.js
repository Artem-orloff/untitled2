import { defineStore } from 'pinia';
import axios from 'axios';

export const useNoteStore = defineStore('noteStore', {
    state: () => ({
        notes: [],
    }),
    actions: {
        async fetchNotes() {
            const { data } = await axios.get('http://localhost:5000/notes');
            this.notes = data;
        },
        async addNote(note) {
            const { data } = await axios.post('http://localhost:5000/notes', note);
            this.notes.push(data);
        },
        async deleteNote(id) {
            await axios.delete(`http://localhost:5000/notes/${id}`);
            this.notes = this.notes.filter(note => note.id !== id);
        },
        async updateNote(id, updatedNote) {
            await axios.put(`http://localhost:5000/notes/${id}`, updatedNote);
            const index = this.notes.findIndex(note => note.id === id);
            if (index !== -1) this.notes[index] = { ...this.notes[index], ...updatedNote };
        },
    },
});
