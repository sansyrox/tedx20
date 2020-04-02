<template>
<div>
  <section class="about" id="sec2">


      <div class="container">

        <div style="display:inline-flex;" id="about-speakers" class="row">

        <span class=" content col-lg-6 ">
          <h2 class="capitalise">About TED</h2>
          <p data-aos="fade-up" style="text-align:justify">TED is a global platform with an annual conference that brings together the world’s leading thinkers, social entrepreneurs and change makers to share ideas that matter in any discipline—technology, entertainment, design, science, environment, business. The talks at the conference, “TED Talks,” are then made available for free online at TED.com. Over 100 million people view TED videos.</p>
          <hr data-aos="fade-up" >
        </span>

        <span class=" content col-lg-6 ">
          <h2 class="capitalise">About TEDx</h2>
          <p data-aos="fade-up" style="text-align:justify">Re-established in the year 2015, our team has worked tirelessly to  deliver  one  of    the  highest  quality  TEDx  events  in  India.  Our  previous  event,  held  on  the  6th  of  April  2019,  was  witnessed  by an audience of 150+, consisting of designers, entrepreneurs, professionals,  technology  enthusiasts  and  motivated  students  alike;  the  top  faculty  of  Delhi  Technological  University  and  representatives from various media organisations.The  organising  team  put  together  a  revolutionary  line-up  of  speakers consisting of  artists, celebrities, industrialists, visionaries and  motivators  have  inspired  thousands  of  people  with  their  words of change.</p>
          <hr data-aos="fade-up">
        </span>
        <br>
      </div>

      <div class=" content col-sm-12" style="display:block !important;">
          <h2 class="capitalise">About Delhi Technological University</h2>
          <p data-aos="fade-up" style="text-align:justify">Established in the year 1941 as Delhi Polytechnic, Delhi Technological University is the mother institute of a number of national institutes, including Indian Institute of Technology Delhi, Netaji Subhas Institute of Technology, School of Planning and Architecture, Delhi, College of Art, Delhi and Faculty of Management Studies. Housing some of the brilliant minds in this country, lakhs of students compete every year to get admission to this coveted institution. The graduates from this institute are now pioneers in their field.</p>
          <hr data-aos="fade-up">
          </div>
      </div>
  </section>

</div>

</template>

<script>

export default {
  name: "About",
  components: {}
};
</script>


<style lang="scss">
h2 {
  width: 80%;
  margin: auto;
  font-family: "EB Garamond",serif;
  font-size: 1.8em;
  font-weight: 700;
  color: #000000;
  letter-spacing: 1.5px;
  text-align: center; }

    .content {
      width: 50%;
      margin: auto;
     }

     .about {
    padding-top: 75px;
    }

  .capitalise {
    letter-spacing: 0px;
    text-transform: none;
  }

  .content {
    width: 50%;
    margin: auto;
   }

  .content p {
    padding: 20px;
    h2 {
  width: 80%;
  margin: auto;
  font-family: "EB Garamond",serif;
  font-size: 1.8em;
  font-weight: 700;
  color: #000000;
  letter-spacing: 1.5px;
  text-align: center; }

    .content {
      width: 50%;
      margin: auto;
     }

     .about {
    padding-top: 75px;
    }

  .capitalise {
    letter-spacing: 0px;
    text-transform: none;
  }

  .content {
    width: 50%;
    margin: auto;
   }

  .content p {
    padding: 20px;
    font-size: 1em;
    font-family:"Quicksand",sans-serif;
    text-align: center;
    color: #777;
    line-height: 1.8; }

    hr {
    width: 60px;
    border: 1px solid #fa163f;
    background: red;
    margin-bottom: 45px;
    }
</style>
