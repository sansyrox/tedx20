<template>
  <div>
    <div class="stagger-visualizer"></div>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
<script src="https://codepen.io/juliangarnier/pen/75efae7724dbc3c055e918057fc4aca5.js"></script>
<script>
export default {
  name: "Animation2",
  components: {},
  mounted: function() {
    const staggerVisualizerEl = document.querySelector(".stagger-visualizer");
    const fragment = document.createDocumentFragment();
    const numberOfElements = 81;

    for (let i = 0; i < numberOfElements; i++) {
      fragment.appendChild(document.createElement("div"));
    }

    staggerVisualizerEl.appendChild(fragment);

    const staggersAnimation = this.$anime
      .timeline({
        targets: ".stagger-visualizer div",
        easing: "easeInOutSine",
        delay: this.$anime.stagger(50),
        loop: true,
        autoplay: false,
        duration: 600,
        loopComplete: a => console.log("end")
        //update: () => console.log(staggersAnimation.progress)
      })
      .add({
        scale: this.$anime.stagger([2.5, 1], { from: "center", grid: [9, 9] }),
        translateX: this.$anime.stagger([-100, 100]),
        rotate: this.$anime.stagger([-45, 45]),
        easing: "easeInOutCirc",
        delay: this.$anime.stagger(10, { from: "center" })
      })
      .add({
        scale: this.$anime.stagger([2.5, 1], {
          from: "center",
          easing: "easeInOutCirc"
        }),
        translateX: this.$anime.stagger([-200, 200]),
        translateY: this.$anime.stagger([-200, 200]),
        rotate: 0,
        delay: this.$anime.stagger(1, { from: "last" })
      })
      .add({
        rotate: this.$anime.stagger(2, {
          from: "center",
          direction: "reverse",
          easing: "easeInSine"
        }),
        translateX: 0,
        translateY: 0,
        delay: this.$anime.stagger(10, { from: "center" })
      })
      .add({
        scale: this.$anime.stagger([2, 1], { grid: [9, 9], axis: "y" }),
        translateY: this.$anime.stagger([-100, 200], {
          grid: [9, 9],
          axis: "y"
        }),
        rotate: 0,
        delay: this.$anime.stagger(1, { from: "last" })
      })
      .add({
        translateX: () => this.$anime.random(-100, 100),
        translateY: () => this.$anime.random(-100, 100),
        scale: this.$anime.stagger([1.5, 0.5], { from: "center" }),
        rotate: this.$anime.stagger([10, -10], { from: "last" }),
        delay: this.$anime.stagger(50, { from: "center", grid: [9, 9] })
      })
      .add({
        translateX: () => this.$anime.random(-100, 100),
        translateY: () => this.$anime.random(-100, 100),
        rotate: this.$anime.stagger([-10, 10], { from: "last" }),
        scale: 1,
        delay: this.$anime.stagger(50, { from: "center", grid: [9, 9] })
      })
      .add({
        translateX: 0,
        translateY: this.$anime.stagger(6, {
          from: "center",
          direction: "reverse"
        }),
        rotate: 0,
        delay: this.$anime.stagger(50, { from: "center", grid: [9, 9] })
      })
      .add({
        translateX: this.$anime.stagger("1rem", {
          grid: [9, 9],
          from: "center",
          axis: "x"
        }),
        //translateY: anime.stagger('1rem', {grid: [9, 9], from: 'center', axis: 'y'}),
        delay: this.$anime.stagger(200, {
          grid: [9, 9],
          from: "center",
          direction: "reverse"
        })
      })
      .add({
        translateX: this.$anime.stagger([25, -25], { from: "first" }),
        translateY: 0,
        rotate: this.$anime.stagger([40, -40], { from: "first" }),
        delay: this.$anime.stagger(10, { from: "first" })
      })
      .add({
        translateY: this.$anime.stagger([-240, 240]),
        rotate: () => this.$anime.random(-100, 100),
        scale: this.$anime.stagger([1, 3], { from: "center" }),
        delay: this.$anime.stagger(10, { from: 0 })
      })
      .add({
        translateX: 0,
        translateY: 0,
        scale: 1,
        rotate: 360,
        duration: 2000,
        delay: 0
      });

    staggersAnimation.play();
  }
};
</script>
<style lang="scss">
body,
html {
  position: absolute;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #000000;
}

.stagger-visualizer {
  display: -webkit-box;
  display: flex;
  /*flex-wrap: wrap;*/
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 450px;
  height: 450px;
}

.stagger-visualizer div {
  /*position: absolute;*/
  width: 64px;
  height: 128px;
  border: 1px solid #373535;
  background-color: #f6f4f2;
}
</style>
