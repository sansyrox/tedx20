<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <!-- <img
          src="./TedX.png"
          alt="TedXDTU"
        /> -->
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-dropdown hoverable label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: 'SpeakerFrom' }">
          Speaker
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons are-medium">
          <a class="button is-primary">
            <user-icon class="icon" />
            <strong>Sign up</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { UserIcon } from "vue-feather-icons";
export default {
  components: {
    UserIcon
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  height: 70px;
}
</style>
