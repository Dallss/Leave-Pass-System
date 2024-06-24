<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import MyHeader from './components/MyHeader.vue'
import NavBar from './components/NavBar.vue'

const links = ref([])
console.log(links)

const userinfo = reactive({
  name: '',
  section: null,
  sex: null,
  type: null,
  destination: '',
  purpose: '',
  time_out: null,
  est_time_in: null
})

const sections = {
  ruby: '7-Ruby',
  diamond: '7-Diamond',
  emerald: '7-Emerald',
  jasmine: '8-Jasmine',
  camia: '8-Camia'
}

function clear() {
  userinfo.name = ''
  userinfo.section = null
  userinfo.sex = null
  userinfo.type = null
  userinfo.destination = ''
  userinfo.purpose = ''
  userinfo.time_out = null
  userinfo.est_time_in = null
}

function isNotValid() {
  //do this
  //date validation

  //location destination using gmaps

  if (
    userinfo.name == '' ||
    userinfo.section == null ||
    userinfo.sex == null ||
    userinfo.type == null ||
    userinfo.destination == '' ||
    userinfo.purpose == '' ||
    userinfo.time_out == null ||
    userinfo.est_time_in == null
  ) {
    return true
  } else {
    return false
  }
}
function submitForm() {
  if (isNotValid()) {
    alert('Please fill all fields')
  } else {
    //submit logic
    console.log('form submision below ')
    console.log(userinfo)
    clear()
  }
}
console.log(userinfo)
</script>

<template>
  <MyHeader></MyHeader>
  <NavBar :links="links"></NavBar>
  <div class="content">
    <form @submit.prevent="submitForm">
      <button class="submit">Submit</button>
      <a href="#" class="login">Login</a>
      <button class="clear" @click="clear">Clear</button>
    </form>
  </div>
</template>

<style>
body {
  flex-direction: column;
}
#app {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: rgba(235, 232, 232);
}
form {
  display: flex;
  flex-direction: column;

  width: 550px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  margin-top: 80px;
  padding: 8vh 6vw 8vh 6vw;
}
.title {
  align-self: center;
  color: rgba(125, 125, 125, 1);
  font-weight: bold;
}
.row-container {
  display: flex;
  margin-bottom: 5px;
}
.column-container {
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  margin-bottom: 20px;
}
input[type='text'] {
  border-radius: 5px;
  border: none;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: rgba(235, 232, 232);
  margin-bottom: 20px;
}
input[type='time'] {
  border-radius: 5px;
  border: none;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: rgba(235, 232, 232);
  margin: 10px;
}

.login {
  align-self: center;
  text-decoration: none;
}

label {
  margin-bottom: 10px;
}
select {
  color: rgba(0, 0, 0, 0.459);
  border: none;
  border-radius: 5px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.623);
  background-color: rgba(235, 232, 232);
}

.submit {
  color: white;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: rgba(13, 58, 90, 1);
}
.clear {
  border: none;
  width: 80px;
  background-color: white;
}
.clear:hover {
  font-size: medium;
  font-weight: bold;
}
</style>
