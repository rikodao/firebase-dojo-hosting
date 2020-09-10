<template>
  <div class="app">
    <h2 v-if="!isLogin">ログインフォーム</h2>
    <Login v-if="!isLogin"></Login>

    <h2 v-if="isLogin">ログアウトフォーム</h2>
    <Logout v-if="isLogin" :loginUser="loginUser"></Logout>

    <div v-if="isLogin">
      <div>{{ loginUser.displayName }} さん</div>
      <div>
        <img :src="loginUser.photoURL" />
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import firebaseAuth from "@/firebase/auth/firebase-auth";
import Login from "@/components/Login.vue";
import Logout from "@/components/Logout.vue";

export default {
  name: "home",
  components: {
    Login,
    Logout
  },
  data() {
    return {
      isLogin: false,
      loginUser: null
    };
  },
  beforeRouteEnter(route, redirect, next) {
    console.log("Home_beforeRouteEnter"); // eslint-disable-line
    firebaseAuth.onStateChanged(user => {
      console.log("onAuthStateChanged", user); // eslint-disable-line
      next(vm => { // eslint-disable-line
        var user = firebaseAuth.getCurrentUser();

        if (!user) {
          return;
        }

        vm.isLogin = true; // eslint-disable-line
        vm.loginUser = user; // eslint-disable-line
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    var vm = this; // eslint-disable-line
    console.log("Home_beforeRouteUpdate"); // eslint-disable-line
    vm.isLogin = false;
    vm.loginUser = null;
    firebaseAuth.onStateChanged(user => {
      console.log("onAuthStateChanged", user); // eslint-disable-line
      if (!user) {
        next();
        return;
      }
      vm.isLogin = true; // eslint-disable-line
      vm.loginUser = user; // eslint-disable-line
      next();
    });
  }
};
</script>
