<template>
  <div class="bod">
    <form novalidate @submit.prevent v-if="classes.register">
      <header>
        <h1>Login</h1>
        <h1>Sign-up</h1>
      </header>

      <div class="input">
        <input type="text" required placeholder="Name" />
        <input type="text" required placeholder="Guardian's name" />
        <input type="text" required placeholder="Phone number" />
        <input type="text" required placeholder="Password" />
      </div>

      <span> <p @click="classes.register = false, classes.forgot_password = true">Forgot password?</p> </span>

      <button>
        <p>Login to account</p>
        <span><i class="fas fa-angle-right"></i></span>
      </button>
    </form>


    <form novalidate @submit.prevent v-if="classes.forgot_password">
        <header>Forgot Password</header>

        <div class="input">
            <input type="text" required placeholder="Enter email address">
        </div>
        <p class="small">A one time password (OTP) will be sent to your email address. Click on it.</p>

              <button>
        <p>Continue</p>
        <span><i class="fas fa-angle-right"></i></span>
      </button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
      const classes = ref({
          register: true,
          forgot_password: false,
      })
    return {classes};
  },
};
</script>

<style scoped>
.bod {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: linear-gradient(115.59deg, #1ee4f0 4.05%, #12b6da 107.24%);
  z-index: 998;
}
form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  width: 80%;
  padding: 25px 0px;
  background: #fff;
}
form header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.5);
  padding-bottom: 15px;
  margin-left: 50px;
}
form header h1 {
  font-weight: lighter;
  font-size: 26px;
}
form header h1:first-of-type {
  padding-right: 20px;
}
form header h1:last-of-type {
    font-size: 18px;
    opacity: .6;
}
form .input {
  display: grid;
  width: 85%;
  margin: auto;
  grid-template-columns: 40% 40%;
  justify-content: space-between;
  align-items: center;
  grid-row-gap: 20px;
  padding: 35px 0px 25px 0px;
}
form .input input {
  width: 100%;
  background: #f3f3f3;
  border-radius: 30px;
  padding: 10px;
  outline: 0;
  border: none;
}
form .input input::placeholder {
padding-left: 20px;
}
form .input input:focus {
  outline: 0;
}
form span p {
  font-size: 12px;
  color: #3f9dd1;
  text-align: right;
  padding-right: 100px;
  padding-bottom: 35px;
  cursor: pointer;
}
form .small {
    width: 84%;
    margin: auto;
    font-size: 10px;
    padding-bottom: 50px;
}
form button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 170px;
  border-radius: 20px;
  padding: 8px 15px;
  outline: 0;
  border: none;
  background: linear-gradient(115.59deg, #fc9f31 4.05%, #ee4e4e 107.24%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.02);
  border-radius: 30px;
}
form button p {
  font-weight: 700;
  color: #fff;
}
form button span {
  background: #f3f7fc;
  color: #fff;
  padding: 5px 10px;
  border-radius: 50px;
}
form button span i {
  color: #fc9f31;
}
@media only screen and (max-width: 700px) {
    .input {
        display: flex !important;
        flex-direction: column;
    }
    form span p {
        text-align: center;
        padding-right: 0px;
    }
}
</style>