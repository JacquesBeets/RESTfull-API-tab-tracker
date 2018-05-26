<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div class="card shadow">
          <div class="card-body">
            <div class="card-title">
              <h3>Register</h3>
              <hr>
            </div>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address:</label>
                <input 
                  v-model="email" 
                  type="email" 
                  class="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password:</label>
                <input 
                  v-model="password" 
                  type="password" 
                  class="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="Password">
              </div>
              <hr>
              <button @click.prevent="register" type="submit" class="btn btn-success btn-block">Submit</button>
            </form>
              <br v-if="error">
              <div class="alert alert-danger" role="alert" v-html="error" v-if="error"></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
   async register() {
     try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
     } catch (error) {
       this.error = error.response.data.error
     }

    }
  },
  computed: {
    
  }
}
</script>

<style scoped>

.container{
  margin-top: 70px;
}

h3 {
  text-align: center;
  font-family: 'Yellowtail';
  font-size: 5em;
}

.card {
  background-color: rgb(250, 250, 250);
}

hr {
  margin: 30px 0;
}

.error{
  color: red;
}
</style>
