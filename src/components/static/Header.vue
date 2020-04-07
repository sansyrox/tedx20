<template>
  <b-navbar>
    <template slot="brand">
      <div class="logo">
        <img alt="TEDxDTU" src="images/logoWhite.png" />
      </div>
    </template>

    <template slot="end">
      <b-navbar-item class="link" href="#">
        Home
      </b-navbar-item>
      <b-navbar-item class="link" href="#">
        About
      </b-navbar-item>
      <b-navbar-item class="link" href="#">
        Theme
      </b-navbar-item>
      <b-navbar-item class="link" href="#">
        Speakers
      </b-navbar-item>
      <b-navbar-item class="link" href="#">
        Past Events
      </b-navbar-item>
      <b-navbar-item class="link" href="#">
        Partners
      </b-navbar-item>
      <b-navbar-item
        class="link"
        tag="router-link"
        :to="{ path: 'SpeakerFrom' }"
      >
        Speaker Form
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons are-medium">
          <a class="button is-primary">
            <user-icon class="icon" />
            <strong>Register</strong>
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
  height: 90px;
  top: 0;
  background: #111;
  z-index: 10000;
}
.link {
  color: #fff;
  font-size: 0.9em;
  font-weight: 600;
  padding: 15px 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.075);
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.link:hover {
  color: #f3f9fb;
  background: #ba0f12;
}

.logo {
  position: absolute;
  left: 5%;
  height: 60px;
  width: 150px;
  top: 60%;
  transform: translate(0, -50%);
}
img {
  height: 60px;
  width: 150px;
}
</style>
