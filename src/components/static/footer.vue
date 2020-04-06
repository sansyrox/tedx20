<template>
  <footer>
    <section
      class="contact"
      style="background: url('https://images.wallpapersden.com/image/download/simple-red-texture-pattern_64555_1920x1080.jpg'); background-color: #000;  background-size:cover; background-repeat:no-repeat;"
    >
      <h2
        style="color: #fff;padding-bottom: 20px;letter-spacing: 4px;font-size: 2em;"
      >
        CONNECT
      </h2>
      <div class="contact-wrapper">
        <div class="contact-card">
          <div class="title" style="color:#fff;">Address</div>
          <div class="details" style="color:#fff;text-align:left;">
            Delhi Technological University, Shahbad Daulatpur, Main Bawana Road
            Delhi, 110042 Nearest Metro Station - Samaypur Badli
          </div>
        </div>
        <div class="contact-card">
          <div class="title" style="color:#fff;">Write to us</div>
          <a href="mailto:support@tedxdtu.in">
            <div style="color:#fff;" class="details">support@tedxdtu.in</div>
          </a>
          <a href="mailto:contact@tedxdtu.in">
            <div style="color:#fff;" class="details">contact@tedxdtu.in</div>
          </a>
        </div>
        <div class="contact-card">
          <div class="title" style="color:#fff;">Social Media</div>
          <div class="details social">
            <a href="https://www.facebook.com/tedxdtu/" target="_blank"
              ><i
                style="color:#fff;"
                class="fa fa-facebook fa-lg"
                aria-hidden="true"
              ></i
            ></a>
            <a href="https://www.instagram.com/tedxdtu/" target="_blank"
              ><i
                style="color:#fff;"
                class="fa fa-instagram fa-lg"
                aria-hidden="true"
              ></i
            ></a>
            <a href="https://twitter.com/tedxdtuofficial" target="_blank"
              ><i
                style="color:#fff;"
                class="fa fa-twitter fa-lg"
                aria-hidden="true"
              ></i
            ></a>
          </div>
        </div>
        <div class="contact-card">
          <div class="title" style="color:#fff;">Location</div>
          <div class="details location">
            <a
              href="https://www.google.com/maps/place/Dr.+B.R.+Ambedkar+Auditorium,+Delhi+Technological+University,+Shahbad+Daulatpur+Village,+Rohini,+Delhi,+110042/@28.7502522,77.1164258,15z/data=!4m5!3m4!1s0x0:0xa1fd4ac59ff8950!8m2!3d28.7502522!4d77.1164258"
              target="_blank"
              ><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </div>
    </section>

    <section class="foot">
      <p>
        This independent <strong class="ted">TEDx</strong> event is operated
        under license from <strong class="ted">TED</strong>
      </p>
      <p><strong class="ted">TEDxDTU</strong> 2020 &middot; Official Website</p>
    </section>
  </footer>
</template>

<script>
import {} from "";
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.foot {
  width: 100%;
  background: #000;
  padding: 25px 0px;
}

.foot p {
  font-size: 0.9em;
  color: #aaa;
  font-family: "Quicksand", sans-serif;
  width: 80%;
  padding: 0px;
  margin: auto;
  text-align: center;
  line-height: 2;
}

.ted {
  color: #c00;
}

.contact {
  background: #f7f7f7;
  overflow: hidden;
  text-align: center;
  padding: 80px 0px;
  font-family: "Quicksand", sans-serif;
}

.contact .contact-wrapper {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.contact .contact-wrapper .contact-card {
  padding: 25px;
  width: 240px;
}

.contact .contact-wrapper .contact-card .title {
  color: #d12838;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-size: 1em;
  font-weight: 600;
  font-family: "Quicksand", sans-serif;
}

.contact .contact-wrapper .contact-card .details {
  color: #555;
  font-size: 0.9em;
  font-weight: 200;
  font-family: "Quicksand", sans-serif;
}

.contact .contact-wrapper .contact-card .social {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.contact .contact-wrapper .contact-card .social .fa {
  padding-left: 50px;

  color: #000;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
  cursor: pointer;
}
.contact .contact-wrapper .contact-card .location .fa {
  color: #000;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
  cursor: pointer;
}

.contact .contact-wrapper .contact-card .social .fa:hover {
  color: #010101;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fa-lg {
  font-size: 1.3333em;
  line-height: 0.75em;
  vertical-align: -15%;
}
.fa-facebook::before {
  content: "\f09a";
}
.fa-instagram::before {
  content: "\f16d";
}
.fa-twitter::before {
  content: "\f099";
}
.fa-map-marker::before {
  content: "\f3c5";
  color: white;
}
</style>
