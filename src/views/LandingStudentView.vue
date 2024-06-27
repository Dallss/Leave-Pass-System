<script setup>
const passes = [
  { id: 1, destination: 'jabee', time_out: '9:00AM', time_in: '6:00PM', penalty: '4' }
]
</script>

<template>
  <div></div>
  <div class="history">
    <div class="header"><h3>History</h3></div>
    <div class="pass" v-for="pass in passes" :key="pass.id">
      <p style="flex-grow: 3">Destination: {{ pass.destination }}</p>
      <p style="flex-grow: 1">Time out: {{ pass.time_out }}</p>
      <p style="flex-grow: 1">Time in: {{ pass.time_in }}</p>
      <p style="flex-grow: 1">Penalty incurred: {{ pass.penalty }}</p>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  padding: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.753);
}
.history {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
}

.pass {
  display: flex;
  padding: 10px;
}
</style>
