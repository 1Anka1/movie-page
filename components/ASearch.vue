<template>
  <div>
    <form @submit.prevent="">
      <input type="search" class="search-form" placeholder="What do you want to watch?" />
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
.search-form {
  padding: 10px;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
}

.search-form::placeholder {
  color: #999;
}

.search-form:focus {
  border-color: #ff002bc4;
}
</style>
