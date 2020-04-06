<template>
  <section
    id="sec3"
    class="theme"
    style=" margin-top: 10px;background-image:url('https://uploads-ssl.webflow.com/5a9f02ce6e90d20001b22474/5aa18b573ee9510001161d18_slant_attend_top.svg'); background-size:cover; background-repeat:no-repeat;"
  >
    <div>
      <h2 style="font-size:2.5rem;">Theme</h2>
      <hr style="border:2px solid #c00; width:5rem; margin-top:20px;" />
      <h1 style="color:rgb(0,0,0);margin-top:8%;">Virtue of Magnanimity</h1>
    </div>
    <div class="gallery-wrapper">
      <p data-aos="fade-up" style="text-align:justify">
        When faced with integral life choices, do you tend to pursue the choice
        which is going to propel you to greatness and is beneficial for
        everybody around you or do you fear failure and tend to stay away from
        those choices that will push you out of your comfort zone, even though
        they are the most beneficial and more honourable.
      </p>
      <hr style="border:1px solid #c00; width:2.5rem;" />
      <p>
        Magnanimity means “Nobility or Greatness of one’s soul”. It's known
        basically as the virtue with which man pursues the choice that is most
        difficult but is also the most honourable. Basically the stretching
        forth of mind to achieve great and noble things also such that a person
        achieves great things keeping his ability in check.
      </p>
    </div>
    <div class="row">
      <div class="col-md-4">
        <iframe
          style="width:80%; margin:auto; border:solid #c00 1.5px;"
          height="400px"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Theme",
  components: {}
};
</script>

<style lang="scss">
.theme {
  text-align: center;
  padding: 40px 0px;
}

.gallery-wrapper {
  width: 90%;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
p {
  font-family: "Quicksand", sans-serif;
  line-height: normal;
  font-size: 1.1em;
}

h1 {
  width: 80%;
  margin: auto;
  padding: 40px 0px;
  font-family: "EB Garamond", sans-serif;
  font-size: 4.5em;
  font-weight: 700;
  color: #fff;
  letter-spacing: 10px;
  text-shadow: 10px 10px 40px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  text-align: center;
}
h2 {
  width: 80%;
  margin: auto;
  font-family: "EB Garamond", serif;
  font-weight: 700;
  color: #000000;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  text-align: center;
}
iframe {
  align-self: justify;
}
</style>
