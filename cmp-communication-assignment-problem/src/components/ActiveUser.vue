<template>
  <section class="card">
    <h2 class="user-name">{{ username }}</h2>
    <h3 class="user-age">{{ age }} years old</h3>
  </section>
</template>

<script>
export default {
  name: 'ActiveUser',
  props: {
    username: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  }
}
</script>
