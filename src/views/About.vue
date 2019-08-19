<template>
  <div class="about">
    <h1>This is about you</h1>
    <table border="1">
      <tbody>
        <tr>
          <td bgcolor="#F0F0E8" align="left" nowrap>uid</td>
          <td bgcolor="#FFFFFF" width="150">{{ loginUser.uid }}</td>
        </tr>
        <tr>
          <td bgcoloår="#F0F0E8" align="left" nowrap>displayName</td>
          <td bgcolor="#FFFFFF" width="150">{{ loginUser.displayName }}</td>
        </tr>

        <tr>
          <td bgcolor="#F0F0E8" align="left" nowrap>photoURL</td>
          <td bgcolor="#FFFFFF" width="150">
            <img :src="loginUser.photoURL" />
          </td>
        </tr>
        <tr>
          <td bgcolor="#F0F0E8" align="left" nowrap>email</td>
          <td bgcolor="#FFFFFF" width="150">{{ loginUser.email }}</td>
        </tr>
        <tr>
          <td bgcolor="#F0F0E8" align="left" nowrap>emailVerified</td>
          <td bgcolor="#FFFFFF" width="150">{{ loginUser.emailVerified }}</td>
        </tr>
        <tr>
          <td bgcolor="#F0F0E8" align="left" nowrap>isAnonymous</td>
          <td bgcolor="#FFFFFF" width="150">{{ loginUser.isAnonymous }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// @ is an alias to /src
import firebaseAuth from "@/firebase/auth/firebase-auth";
export default {
  name: "home",
  data() {
    return {
      loginUser: {}
    };
  },
  mounted() {
    console.log("About_beforeRouteUpdate");
    this.loginUser = firebaseAuth.getCurrentUser();
  }
};
</script>

<style scoped>
table {
  margin: 0 auto;
}
</style>
