<template>
  <div>
    <div id="lineDrawing">
      <svg viewBox="0 0 792 512">
        <g class="lines">
          <path
            class="my-path"
            d="M196.7,240.8l-2.7,22.2h-25.9l-10,69.9h-15l10,-69.9h-25l2.7,-22.2z"
          />
          <path
            class="my-path"
            d="M232.2,256.6l-2.7,22.2h26l-2,15.3h-25.9l-2.8,22.8h34.3l-2,15.9h-55l11.4-92.1h54.8l-2,15.9H232.2z"
          />
          <path
            class="my-path"
            d="M280.8,240.8l-11.4,92.1c71.6,0 76.6,-76.05 11.4,-92.1z M290.8,260.8l-7.9,57.1c31.6,0 36.6,-46.6 7.9,-57.1z"
          />
          <path
            class="my-path"
            d="M365.6,266.85h10l4.7,25l13.7,-25h10l-17.7,38l10.7,26.05h-10l-9.7,-18.05l-13.7,18.05h-10l16.7,-28.05z"
          />
          <path
            class="my-path"
            d="M480.8,240.8l-11.4,92.1c71.6,0 76.6,-76.05 11.4,-92.1z M490.8,260.8l-7.9,57.1c31.6,0 36.6,-46.6 7.9,-57.1z"
          />
          <path
            class="my-path"
            d="M606.7,240.8l-2.7,22.2h-25.9l-10,69.9h-15l10,-69.9h-25l2.7,-22.2z"
          />
          <path
            class="my-path"
            d="M626.7,240.8h15l-8.9,67.1c-2.5,25 30,25 40,0l8.9,-67.1h15l-9.9,72.1c-1.5,20 -60,45 -70,0z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
<script src="./script.js"></script>
<script>
export default {
  components: {},
  mounted: function() {
    this.$anime({
      targets: "#lineDrawing .lines path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: function(el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true
    });
  }
};
</script>
<style lang="scss">
body {
  background: #050505;
}

.my-path {
  fill: none;
  stroke: #cfc33a;
  stroke-width: 4;
}
</style>
