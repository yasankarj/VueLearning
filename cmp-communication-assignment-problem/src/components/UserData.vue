<template>
  <section class="card">
    <div class="form-group">
      <label class="form-label">Name</label>
      <input v-model="enteredName" type="text" class="form-input" />
    </div>
    <div class="form-group">
      <label class="form-label">Age</label>
      <input v-model="enteredAge" type="number" min="0" class="form-input" />
    </div>
    <button class="btn-primary" @click="submitData">Update User</button>
  </section>
</template>

<script>
export default {
  name: 'UserData',
  emits: ['update-user'],
  data() {
    return {
      enteredName: '',
      enteredAge: ''
    }
  },
  methods: {
    submitData() {
      this.$emit('update-user', {
        name: this.enteredName.trim() || 'Anonymous',
        age: Number(this.enteredAge) || 0
      })
    }
  }
}
</script>
