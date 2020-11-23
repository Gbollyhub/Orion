<template>
<div>
<div class="footer">
  <div class="contain">
  <div class="col">
    <h1>HELP AND INFO</h1>
    <ul>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
    </ul>
  </div>
  <div class="col">
     <h1>ABOUT ORION5</h1>
    <ul>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
       <li>Lorem Ipsum</li>
    </ul>
  </div>
  <div class="col">
   <h1>BUYING ON ORION5</h1>
    <ul>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
    </ul>
    </div>
      <div class="col-large">
    <h1>DOWNLOAD THE APP</h1>
      <div class="store">
        <img style="margin-right:20px" src="../.././assets/app-store.svg" alt="" width="120px">
        <img src="../.././assets/google-play.svg" alt="" width="120px">
    </div>
    <br>
     <br>
    <div class="social-media">
        <p>CONNECT WITH US</p>
        <a  target="_blank"><v-icon style="font-size:20px;margin-right:10px;" color="white" dark>mdi-facebook</v-icon></a>
        <a  target="_blank"><v-icon style="font-size:20px;margin-right:10px;" color="white" dark>mdi-twitter</v-icon></a>
        <a  target="_blank"><v-icon style="font-size:20px;margin-right:10px;" color="white" dark>mdi-instagram</v-icon></a>
    </div>


  </div>
     <div class="clearfix"></div>
</div>
</div>
  <v-card-actions style="margin:0;" class="footer-2"> 
     <div>ORION</div>
     <v-spacer></v-spacer>
      <div>Privacy & Cookies | Terms and Conditons</div>
     </v-card-actions>
</div>

</template>

<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
.footer-2{
  background: #68558A;
  padding: 20px 50px;
  color: white;
  font-size: 13px;
}

  /* STYLES SPECIFIC TO FOOTER  */
  .footer {
    width: 100%;
    position: relative;
    height: 300px;
    background-color: #190936;
    padding: 20px;
  }
  .footer .col {
    width: 18.3%;
    height: auto;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 20px 20px 20px;

  }
  .footer .col-large {
    text-align: right;
    width: 45%;
    height: auto;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 20px 20px 20px;
  }
  .footer .col-large h1 {
    margin-bottom: 10px;
    padding: 0;
    font-family: inherit;
    font-size: 13px;
    line-height: 17px;
    padding: 20px 0px 5px 0px;
    color: rgb(255, 255, 255);
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.250em;
  }
  .footer .col-large p {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: 13px;
    line-height: 17px;
    padding: 20px 0px 5px 0px;
    color: rgb(255, 255, 255);
    letter-spacing: 0.1em;
  }
  .footer .col h1 {
    margin-bottom: 20px;
    padding: 0;
    font-family: inherit;
    font-size: 13px;
    line-height: 17px;
    padding: 20px 0px 5px 0px;
    color: rgb(255, 255, 255);
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.250em;
  }
  .footer .col ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .footer .col ul li {
    color: #f5f5f5;
    font-size: 13px;
    font-family: inherit;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
  }
  .social ul li {
    display: inline-block;
    padding-right: 5px !important;
  }
  
  .footer .col ul li:hover {
    color: #df3b3b;
    transition: .1s;
    -webkit-transition: .1s;
    -moz-transition: .1s;
  }
  .clearfix {
    clear: both;
  }
  .store{
    color: white;
  }
  .social-media{
    color: white;
  }
  .social-media-store{
    padding: 0 5%;
  }

  .footer-bottom-div{
     border-top: 1px solid white;
     border-bottom: 1px solid white;
      text-align: center;
      display: block;
      color: white;
      background: #252525;
      height: 70px;
      &-text{
        line-height: 70px;
      }
  }



  @media only screen and (min-width: 1280px) {
    .contain {
      width: 1200px;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 1139px) {
    .contain .social {
      width: 1000px;
      display: block;
    }
    .social h1 {
      margin: 0px;
    }
  }
  @media only screen and (max-width: 950px) {
          .footer {
    width: 100%;
    position: relative;
    height: auto;
    background-color: #190936;
    padding: 20px;
  }
    .footer .col {
      width: 33%;
    }
    .footer .col h1 {
      font-size: 14px;
    }
    .footer .col ul li {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 500px) {

    .footer-2{
  background: #68558A;
  padding: 20px 10px;
  color: white;
  font-size: 13px;
}
  
  .footer .col-large {
    text-align: left;
    width: 100%;
  }
          .footer {
    width: 100%;
    position: relative;
    height: auto;
    background-color: #190936;
    padding: 20px;
  }
      .footer .col {
        width: 100%;
      }
      .footer .col h1 {
        font-size: 14px;
      }
      .footer .col ul li {
        font-size: 13px;
      }
  }
  @media only screen and (max-width: 340px) {
    .footer-2{
  background: #68558A;
  padding: 20px 10px;
  color: white;
  font-size: 13px;
}
      .footer {
    width: 100%;
    position: relative;
    height: auto;
    background-color: #190936;
    padding: 20px;
  }
    .footer .col {
      width: 100%;
    }

  .footer .col-large {
    text-align: left;
    width: 100%;
  }
  }
</style>