<template>
  <div class="container">
    <section>
      <div class="body">
        <div class="container">
          <h1 class="title">
            SPEAKER FORM
          </h1>
          <hr style="border:3px solid #c00; margin-left:35%; width: 27vw;" />
        </div>
      </div>
      <form @submit="submission">
        <input type="text" placeholder="Full Name" required />
        <input type="number" placeholder="Contact Number" required />
        <input type="email" placeholder="E-mail" required />
        <input type="text" placeholder="Link to Bio" required />
        <input
          type="text"
          placeholder="Who is your target audience?"
          required
        />
        <input type="text" placeholder="Why TEDxDTU?" required />
        <div class="block">
          <b-radio
            id="sponsor"
            v-model="radio"
            name="choice"
            native-value="Sponsor"
            @click.native="show"
          >
            Sponsor
          </b-radio>
          <b-radio
            v-model="radio"
            name="choice"
            native-value="Speaker"
            @click.native="hide"
          >
            Speaker
          </b-radio>
        </div>
        <div v-if="sponsor" class="sponsor">
          <input type="text" placeholder="Company Name" />
          <input
            type="text"
            placeholder="The amount of money willing to provide as a sponosor"
          />
          <input
            type="text"
            placeholder="Requirements and Deliverables From TEDxDTU"
          />
        </div>
        <input class="login-button" type="submit" value="Send" />
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "SpeakerForm",
  data() {
    return {
      radio: "Speaker",
      sponsor: false
    };
  },
  methods: {
    show() {
      this.sponsor = true;
    },
    hide() {
      this.sponsor = false;
    },
    submission: function(e) {
      e.preventDefault();
      console.log("submitted");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.sponsor {
  margin-bottom: 1.5rem;
}
input {
  width: 85vw;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  border-style: none;
  background-color: rgb(231, 235, 235);
}
input:focus,
textarea:focus {
  outline: none;
}
form {
  margin: 1rem;
}
.login-button {
  background-color: #c00;
  color: white;
  font-size: larger;
}
.block {
  margin-top: 1rem;
  margin-left: 1rem;
}
</style>
