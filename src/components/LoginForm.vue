<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable no-unused-vars -->
<script>
export default {
  name: 'leaveForm',
  data() {
    return {
      userinfo: {
        email: '',
        name: ''
      }
    }
  },
  methods: {
    clear() {
      console.log('cls')
      this.userinfo = {
        email: '',
        password: ''
      }
    },
    isValid() {
      if (this.userinfo.email && this.userinfo.password) {
        return true
      } else {
        return false
      }
    },
    submitForm() {
      console.log('this.userinfo')
      if (!this.isValid()) {
        alert('Please fill all fields')
      } else {
        //submit logic
        this.clear()
      }
    }
  },
  mounted() {
    console.log('Component is mounted!')
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <h3 class="title">Form</h3>

    <input class="field" type="text" placeholder="Email" v-model="userinfo.email" />

    <input class="field" type="password" placeholder="Password" v-model="userinfo.password" />

    <button class="submit">Submit</button><br /><br />
    <button class="clear" @click="this.clear" type="button">Clear</button>
  </form>
</template>

<style scoped>
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
.field {
  border-radius: 5px;
  border: none;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: rgba(235, 232, 232);
  margin-bottom: 20px;
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
