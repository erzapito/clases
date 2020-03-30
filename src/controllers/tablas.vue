/* eslint-disable eqeqeq */
<script>
export default {
  name: 'Tablas',
  data: function () {
    return {
      maxRow: 1,
      current: 0,
      values: [],
      results: []
    }
  },
  methods: {
    range: function () {
      return Array.from(new Array(this.maxRow), (x, i) => i + 1)
    },
    changeTabla: function (n) {
      this.maxRow = 1
      this.current = n
      this.values = []
      this.results = []
    },
    comprobar: function (n) {
      var v = this.values[n]
      var ex = n * this.current
      this.results[n] = (v == ex) ? 'OK' : 'NO'
      if (v == ex && this.maxRow < 10) {
        this.maxRow++
      }
      this.$forceUpdate()
    }
  }
}
</script>

<template>
  <div class="tablas">
    <h1>Tablas de multiplicar</h1>
    <div class="tabla-selector">
      <button v-on:click="changeTabla(2)">{{ $t('Tabla del N', [2]) }}</button>
      <button v-on:click="changeTabla(3)">{{ $t('Tabla del N', [3]) }}</button>
      <button v-on:click="changeTabla(4)">{{ $t('Tabla del N', [4]) }}</button>
    </div>
    <div class="tabla" v-if="current > 0">
      <div v-for="n in range()" v-bind:key="n">
        {{ current }} X {{ n }} =
        <input v-model="values[n]" :disabled="results[n] == 'OK'"/>
        <button v-on:click="comprobar(n)" v-if="results[n] != 'OK'">{{ $t('Comprobar') }}</button>
        <span>{{ results[n] }}</span>
      </div>
    </div>
  </div>
</template>
