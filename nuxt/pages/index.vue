<template>
  <div class="container">
    <span v-if="$apollo.queries.users.loading">Loading...</span>
    <div v-for="(user, index) in users" :key="index">{{ user.name }}</div>
  </div>
</template>

<script>
import query from './query'

export default {
  apollo: {
    users: {
      query
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
