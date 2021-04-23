<template>
  <transition name="fade">
    <div class="bod" v-if="classes.view">
      <div class="prompt" v-for="(msg, index) in classes.prompts" :key="index">
        <transition-group name="prompt">
          <div v-if="classes.prompts">{{ msg }}</div>
        </transition-group>
      </div>

      <transition name="form">
        <form novalidate @submit.prevent="send()" v-if="classes.individual">
          <header>
            <h1>Register</h1>
            <h1
              @click="
                (classes.individual = !classes.individual),
                  (classes.school = !classes.school)
              "
            >
              as individual >
            </h1>
          </header>

          <div class="input">
            <input
              type="text"
              required
              placeholder="Name"
              v-model="classes.reg.name"
            />
            <input
              type="text"
              required
              placeholder="Guardian's name"
              v-model="classes.reg.gName"
            />
            <input
              type="number"
              required
              placeholder="Phone number"
              v-model="classes.reg.number"
            />
            <input
              type="text"
              required
              placeholder="Email address"
              v-model="classes.reg.email"
            />
          </div>

          <span>
            <p @click="classes.close_view()">Cancel</p>
            <button>
              <p>Enter</p>
              <span><i class="fas fa-angle-right"></i></span>
            </button>
          </span>
        </form>
      </transition>

      <transition name="form">
        <form novalidate @submit.prevent="send2()" v-if="classes.school">
          <header>
            <h1>Register</h1>
            <h1
              @click="
                (classes.individual = !classes.individual),
                  (classes.school = !classes.school)
              "
            >
              as school >
            </h1>
          </header>

          <div class="input">
            <input
              type="text"
              v-model="classes.regSchool.sName"
              required
              placeholder="School name"
            />
            <input
              type="text"
              v-model="classes.regSchool.email"
              required
              placeholder="Email address"
            />
            <input
              type="text"
              v-model="classes.regSchool.class"
              required
              placeholder="Classes"
            />
            <input
              type="number"
              v-model="classes.regSchool.studentNo"
              min="1"
              required
              placeholder="Number of students"
            />
            <input
              type="number"
              v-model="classes.regSchool.phone"
              required
              placeholder="Phone number"
            />
          </div>

          <span>
            <p @click="classes.close_view()">Cancel</p>
            <button>
              <p>Enter</p>
              <span><i class="fas fa-angle-right"></i></span>
            </button>
          </span>
        </form>
      </transition>
    </div>
  </transition>
</template>

<script>
import emailjs from "emailjs-com";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const classes = ref({
      view: computed(() => store.state.toggle_reg),
      individual: true,
      school: false,
      forgot_password: false,
      validEmail: (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      close_view: () => store.dispatch("toggle_false"),
      reg: {
        name: "",
        gName: "",
        number: "",
        email: "",
      },
      regSchool: {
        sName: "",
        email: "",
        class: "",
        studentNo: "",
        phone: "",
      },
      prompts: [],
    });

    const send = () => {
      if (
        classes.value.reg.name == "" &&
        classes.value.reg.gName == "" &&
        classes.value.reg.number == "" &&
        classes.value.reg.email == ""
      ) {
        classes.value.prompts.push("Enter details to continue");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else if (!classes.value.reg.name || classes.value.reg.name == "") {
        classes.value.prompts.push("Name cannot be blank");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else if (!classes.value.reg.gName || classes.value.reg.gName == "") {
        classes.value.prompts.push("Guardian's name cannot be blank");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else if (!classes.value.reg.number || classes.value.reg.number == "") {
        classes.value.prompts.push("Phone number cannot be blank");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else if (
        !classes.value.validEmail(classes.value.reg.email) ||
        classes.value.reg.email == ""
      ) {
        classes.value.prompts.push("Invalid email address");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else {
        sendMail();
      }
    };

    const send2 = () => {
      if (
        classes.value.regSchool.sName == "" &&
        classes.value.regSchool.email == "" &&
        classes.value.regSchool.class == "" &&
        classes.value.regSchool.studentNo == "" &&
        classes.value.regSchool.phone == ""
      ) {
        classes.value.prompts.push("Enter details to continue");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else if (
        !classes.value.regSchool.sName ||
        classes.value.regSchool.sName == ""
      ) {
        classes.value.prompts.push("School name cannot be blank");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else if (
        !classes.value.regSchool.class ||
        classes.value.regSchool.class == ""
      ) {
        classes.value.prompts.push("Class cannot be blank");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else if (
        !classes.value.regSchool.studentNo ||
        classes.value.regSchool.studentNo == ""
      ) {
        classes.value.prompts.push("Number of students cannot be blank");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else if (
        !classes.value.regSchool.phone ||
        classes.value.regSchool.phone == ""
      ) {
        classes.value.prompts.push("Phone number cannot be blank");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else if (
        !classes.value.validEmail(classes.value.regSchool.email) ||
        classes.value.regSchool.email == ""
      ) {
        classes.value.prompts.push("Invalid email address");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 2500);
      } else {
        sendMail2();
      }
    };

    const sendMail = () => {
      try {
        emailjs
          .send(
            "soft-kode",
            "register",
            {
              from_name: classes.value.reg.name,
              g_name: "Guardian's name: " + classes.value.reg.gName,
              phone: classes.value.reg.number,
              email: classes.value.reg.email,
            },
            "user_seAFh8PbzY2Nky73pYLQJ"
          )
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              classes.value.prompts.push("Sent successfully");
              setTimeout(() => {
                classes.value.prompts.pop();
              }, 3000);
              // location.reload();
            }
          })
          .catch((err) => {
            console.log(err);
            classes.value.prompts.push("an error occured, please try again");
            setTimeout(() => {
              classes.value.prompts.pop();
            }, 3000);
          });
      } catch (error) {
        classes.value.prompts.push("an error occured, please try again");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 3000);
      }
      classes.value.reg.name = "";
      classes.value.reg.gName = "";
      classes.value.reg.number = "";
      classes.value.reg.email = "";
    };

      const sendMail2 = () => {
      try {
        emailjs
          .send(
            "soft-kode",
            "register",
            {
              from_name: classes.value.regSchool.sName,
              g_name: 'Number of classes: ' + classes.value.regSchool.class,
              studentNo: 'Number of students: ' + classes.value.regSchool.studentNo,
              phone: classes.value.regSchool.phone,
              email: classes.value.regSchool.email,
            },
            "user_seAFh8PbzY2Nky73pYLQJ"
          )
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              classes.value.prompts.push("Sent successfully");
              setTimeout(() => {
                classes.value.prompts.pop();
              }, 3000);
              // location.reload();
            }
          })
          .catch((err) => {
            console.log(err);
            classes.value.prompts.push("an error occured, please try again");
            setTimeout(() => {
              classes.value.prompts.pop();
            }, 3000);
          });
      } catch (error) {
        classes.value.prompts.push("an error occured, please try again");
        setTimeout(() => {
          classes.value.prompts.pop();
        }, 3000);
      }
      classes.value.regSchool.sName = "";
      classes.value.regSchool.email = "";
      classes.value.regSchool.class = "";
      classes.value.regSchool.studentNo = "";
      classes.value.regSchool.phone = "";
    };
    return { classes, send, send2, sendMail, sendMail2 };
  },
};
</script>

<style scoped>
#h {
  position: relative;
  color: red;
  animation: try 1s ease;
}
@keyframes try {
  0% {
    top: 0px;
  }
  100% {
    top: 300px;
  }
}
.bod {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: linear-gradient(115.59deg, #1ee4f0 4.05%, #12b6da 107.24%);
  z-index: 998;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.prompt {
  width: 100%;
  height: 30%;
  position: fixed;
  top: 0px;
  height: 100px;
  padding-top: 20px;
  z-index: 99;
}
.prompt div {
  width: 55%;
  text-align: center;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
}
.prompt-enter-active,
.prompt-leave-active,
.form-enter-active,
.form-leave-active {
  transition: all 0.4s ease-in-out;
}
.prompt-enter-from,
.prompt-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
.prompt-enter-to,
.prompt-leave-from {
  transform: translateY(0px);
  opacity: 1;
}
.form-enter-from,
.form-leave-to {
  opacity: 0;
}
.form-enter-to,
.form-leave-from {
  opacity: 1;
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
  font-size: 16px;
  opacity: 0.6;
  cursor: pointer;
}
form .input {
  display: grid;
  width: 85%;
  height: 200px;
  margin: auto;
  grid-template-columns: 40% 40%;
  justify-content: space-between;
  align-items: center;
  grid-row-gap: 20px;
  padding: 35px 0px 50px 0px;
}
form .input input {
  width: 100%;
  /* background: #f3f3f3; */
  /* border-radius: 30px; */
  padding: 10px 15px;
  outline: 0;
  border: none;
  border-bottom: 1px solid black;
}
/* form .input input::placeholder {
} */
form .input input:focus {
  outline: 0;
}
/* form span p {
  font-size: 12px;
  color: #3f9dd1;
  text-align: right;
  padding-right: 100px;
  padding-bottom: 35px;
  cursor: pointer;
} */
/* form .small {
  width: 84%;
  margin: auto;
  font-size: 10px;
  padding-bottom: 50px;
} */
form > span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: auto;
}
form > span > p {
  font-size: 14px;
  cursor: pointer;
}
form span button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  width: 110px;
  border-radius: 20px;
  padding: 8px 15px;
  outline: 0;
  border: none;
  background: linear-gradient(115.59deg, #fc9f31 4.05%, #ee4e4e 107.24%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.02);
  border-radius: 30px;
}
form button > p {
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
  form .input {
    display: flex !important;
    flex-direction: column;
    height: auto;
  }
  form span p {
    text-align: center;
    padding-right: 0px;
  }
}
</style>