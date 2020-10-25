<template>
  <section>
<h1 class="text-center text-white">Welcome to Lita Jodoh Finder!, Please login!</h1>
<div class="container">
        <div class="row justify-content-center align-items-center" style="height:100vh">
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="custlogin">
                            <div class="form-group">
                                <input v-model="email" type="text" name="email" id="email" class="form-control" placeholder="email">
                            </div><br>
                            <div class="form-group">
                                <input v-model="password" type="password" name="password" id="password" class="form-control" placeholder="password">
                            </div><br>
                              <input type="submit" value="Login" class="btn btn-primary button1">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    naSe : "login",
    data() {
        return {
            email : '',
            password :''
        }
    },
    methods : {
        custlogin () {
            let payload = {
                email : this.email,
                password : this.password
            }
            console.log(payload);
            this.$store.dispatch('custlogin', payload)

        }
    }
}
</script>

<style>
body {
    background-image: url('https://i.pinimg.com/originals/86/54/e2/8654e24e3700d309eef3a26665f5a088.jpg');
    background-size: cover;
    background-repeat: repeat;
}

h1 {
    font-family: 'Roboto', sans-serif;
}

#email, #password {
    font-size: 20px;
}

.button1 {
    padding: 12px 28px;
    font-size: 15px;
}

.button1:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>