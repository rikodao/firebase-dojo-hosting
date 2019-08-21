<template>
  <div>
    <button @click="accountDelete()">アカウント削除</button>
    <button @click="logout()">ログアウト</button>
  </div>
</template>

<script>
import firebaseAuth from "@/firebase/auth/firebase-auth";
export default {
  name: "Logout",
  props: ["isLogin", "loginUser"],
  methods: {
    // ログアウト
    logout() {
      var vm = this;
      if (!firebaseAuth.getCurrentUser()) {
        alert("ログインしてください。");
        return;
      }
      firebaseAuth
        .signOut()
        .then(function(res) {
          console.log("signOut", res); // eslint-disable-line
          alert("ログアウトしました。");
          vm.$router.go();
        })
        .catch(function(error) {
          console.log(error); // eslint-disable-line
        });
    },
    accountDelete() {
      var vm = this;
      // アカウント削除
      if (!firebaseAuth.getCurrentUser()) {
        alert("ログインしてください。");
        return;
      }
      firebaseAuth
        .delteAccout()
        .then(function(res) {
          console.log("currentUser.delete", res); // eslint-disable-line
          alert("アカウントを削除しました。");
          vm.$router.go();
        })
        .catch(function(error) {
          console.log(error); // eslint-disable-line
        });
    }
  }
};
</script>
