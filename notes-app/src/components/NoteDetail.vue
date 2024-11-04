<template>
  <div>
    <h2>Edit Note</h2>
    <input v-model="note.title" placeholder="Title" />
    <textarea v-model="note.description" placeholder="Description"></textarea>
    <button @click="saveNote">Save</button>
    <button @click="$router.back()">Back</button>
  </div>
</template>

<script>
import { useNoteStore } from '../store/noteStore';
import { ref, onMounted } from 'vue';

export default {
  props: ['id'],
  setup(props) {
    const noteStore = useNoteStore();
    const note = ref(null);

    onMounted(async () => {
      await noteStore.fetchNotes();
      note.value = noteStore.notes.find(n => n.id === parseInt(props.id));
    });

    return {
      note,
      saveNote: () => noteStore.updateNote(props.id, note.value),
    };
  },
};
</script>
