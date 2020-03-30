<script>

export default {
  name: 'UserController',
  mounted: function () {
    this.userName = localStorage.getItem('userName')
    this.userPresent = this.userName
  },
  data: function () {
    return {
      userName: '',
      userPresent: false
    }
  },
  methods: {
    changeUser: function () {
      this.userPresent = false
    },
    setUser: function () {
      localStorage.setItem('userName', this.userName)
      this.userPresent = this.userName
    }
  }
}
</script>

<template>
  <div class="user-controller">
    <div v-if="userPresent">
      {{$t('¡Hola usuario!', [userName])}}
      <button v-on:click="changeUser()">{{ $t('Soy otra persona') }}</button>
    </div>
    <div v-if="!userPresent">
    <button v-on:click="setUser()">{{ $t('Soy') }}</button>
      <input v-model="userName"/>
    </div>
  </div>
</template>
