<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable no-unused-vars -->
<script>
export default {
  name: 'leaveForm',
  data() {
    return {
      userinfo: {
        name: '',
        section: null,
        sex: null,
        type: null,
        destination: '',
        purpose: '',
        time_out: null,
        est_time_in: null
      },
      sections: {
        ruby: '7-Ruby',
        diamond: '7-Diamond',
        emerald: '7-Emerald',
        jasmine: '8-Jasmine',
        camia: '8-Camia'
      }
    }
  },
  methods: {
    clear() {
      this.userinfo = {
        name: '',
        section: null,
        sex: null,
        type: null,
        destination: '',
        purpose: '',
        time_out: null,
        est_time_in: null
      }
    },
    isNotValid() {
      //do this
      //date validation

      //location destination using gmaps

      if (
        this.userinfo.name == '' ||
        this.userinfo.section == null ||
        this.userinfo.sex == null ||
        this.userinfo.type == null ||
        this.userinfo.destination == '' ||
        this.userinfo.purpose == '' ||
        this.userinfo.time_out == null ||
        this.userinfo.est_time_in == null
      ) {
        return true
      } else {
        return false
      }
    },
    submitForm() {
      console.log(this.userinfo)
      if (this.isNotValid()) {
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

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="userinfo.name" />

    <div class="row-container">
      <div class="column-container">
        <label for="Section">Grade & Section</label>
        <select name="section" id="section" v-model="userinfo.section">
          <option v-for="section in sections" :value="section" :key="section">
            {{ section }}
          </option>
        </select>
      </div>
      <div class="column-container">
        <p style="margin-left: 10%">Sex</p>
        <div>
          <input
            v-model="userinfo.sex"
            type="radio"
            name="sex"
            value="Male"
            id="male"
            style="margin-left: 10%"
          />
          <label for="sex" style="margin-left: 5%">Male</label>
          <input
            v-model="userinfo.sex"
            type="radio"
            name="sex"
            id="female"
            value="Female"
            style="margin-left: 8%"
          />
          <label for="sex" style="margin-left: 5%">Female</label>
        </div>
      </div>
    </div>

    <div class="row-container">
      <label for="type" style="display: flex; align-items: center; margin-right: 25%">Type:</label>
      <input
        v-model="userinfo.type"
        type="radio"
        name="type"
        id="regular"
        style="margin: 5px"
        value="Regular"
      />
      <label for="type" style="display: flex; align-items: center; margin-right: 10%"
        >Regular</label
      >
      <input
        v-model="userinfo.type"
        type="radio"
        name="type"
        id="home"
        style="margin: 5px"
        value="Home"
      />
      <label for="type" style="display: flex; align-items: center; margin-right: 10%">Home</label>
    </div>

    <label for="destination">Destination</label>
    <input type="text" name="destination" id="destination" v-model="userinfo.destination" />

    <label for="purpose">Purpose</label>
    <input type="text" name="purpose" id="purpose" v-model="userinfo.purpose" />

    <div class="row-container">
      <div class="column-container">
        <label for="">Time of departure</label>
        <input type="time" name="timeout" id="time_out" v-model="userinfo.time_out" />
      </div>
      <div class="gap"></div>
      <div class="column-container">
        <label for="purpose">Time of arrival</label>
        <input type="time" name="timein" id="est_time_in" v-model="userinfo.est_time_in" />
      </div>
    </div>
    <button class="submit">Submit</button>
    <RouterLink class="login" to="/login">Login</RouterLink>

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
