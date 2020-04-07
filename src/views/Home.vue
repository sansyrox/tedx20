<template
  ><div>
    <section class="hero is-fullheight is-bold is-white round">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            TedXDTU
          </h1>
          <h2 class="subtitle">
            Independently Organised Ted Event
          </h2>
        </div>
      </div>
    </section>
    <section>
      Section for testing animation
      <Animation1 />
    </section>
    <section id="sec1" class="section is-large">
      <div class="container">
        <h1 class="title">Section1</h1>
        <h2 class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eum necessitatibus similique amet deserunt totam nemo id porro laborum
          velit, expedita fugit delectus recusandae tenetur corrupti deleniti
          pariatur eos adipisci!
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Animation1 from "@/components/static/Animation1.vue";
export default {
  name: "Home",
  components: {
    Animation1
  }
};
</script>

<style lang="scss">
.round {
  border-radius: 2rem 2rem 0px 0px;
}
#sec1 {
  background-color: whitesmoke;
}
</style>
