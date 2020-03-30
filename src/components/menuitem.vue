<script>
export default {
  name: 'MenuItem',
  props: ['label', 'route']
}
</script>

<template>
  <div class="menu-item">
    <router-link v-bind:to="route">{{ $t(label) }}</router-link>
  </div>
</template>
