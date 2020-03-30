<script>
import MenuItem from './menuitem.vue'
import UserController from './user-controller.vue'

export default {
  name: 'Header',
  components: {
    MenuItem,
    UserController
  }
}
</script>

<template>
  <div class="header">
    <div class="logo">MATES</div>
    <div class="menu">
      <menu-item label="Tablas de multiplicar" route="/tablas" />
    </div>
    <user-controller></user-controller>
  </div>
</template>

<style lang="scss">
.header {
  background: #DDDDDD;
  border-bottom: 1px solid black;
}
</style>
