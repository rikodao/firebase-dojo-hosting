<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebaseUI from "@/firebase/ui/firabaseui";
export default {
  name: "Login",
  mounted() {
    firebaseUI.getUIByID("#firebaseui-auth-container");
  }
};
</script>
