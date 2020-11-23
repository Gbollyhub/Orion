<template>
  <div class="home">
    <app-header></app-header>
    <v-row class="form-content">
          <v-col cols="12" sm="12" md="6" class="hidden-md-and-up">
             <div class="img-div2">
                   <h2 style="color:white">Contact Us</h2>
             <img style="position:absolute;bottom:0;left:20%;" width="70%"  src="../.././assets/contact-2.svg" alt="">
             </div>
        </v-col>
        <v-col cols="12" sm="12" md="6">
           <div class="banner-form">
               <h2 class="contact-header">Get in touch with us</h2>
                       <v-text-field style="height:70px" color="#180A35" label="Name" placeholder="Lorem" outlined></v-text-field>
                         <v-text-field style="height:70px" color="#180A35" label="Email Address" placeholder="Lorem" outlined></v-text-field>
                        <v-text-field style="height:70px" color="#180A35" label="Subject" placeholder="Lorem" outlined></v-text-field>
        <v-textarea
          outlined
          name="input-7-4"
          label="Massage"
          value="Type here"
        ></v-textarea>
            <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
         block
        >
       Send
      </v-btn> 
           </div>
        </v-col>
         <v-col cols="12" sm="12" md="6" class="hidden-sm-and-down">
             <div class="img-div">
             <img  src="../.././assets/contact.svg" alt="">
             </div>
        </v-col>
    </v-row>
   
    <div class="section-info"> 
     <span style="margin-right:20px"><v-icon color="#190936" style="margin-right:10px">mdi-gmail</v-icon>contact@orion5.com</span>
       <span><v-icon color="#190936" style="margin-right:10px">mdi-phone</v-icon>+234 8012345678, +234 8012345678</span>
    </div>
    <app-footer></app-footer>

  </div>
</template>

<style src="../../App.css" scoped></style>
<script>
import Header from '../../components/Site/header3'
import Footer from '../../components/Site/footer'
export default {
  name: 'Home',
  components: {
      'app-header': Header,
      'app-footer': Footer
  },
  data(){
    return{
     
    }
  }
    
}
</script>

<style lang="scss" scoped>
.img-div2{ border-radius: 0 0 100px 100px; text-align: center; padding: 70px 0 0 0; background: #6338B2; position: relative;}
.img-div{ padding: 60px 0 0 0}
.contact-header{font-size:30px;margin-bottom:20px;}
.banner-form{ padding:60px 140px;}
.section-info{background: #E3E4FA;padding:20px;text-align: center;}


@media (max-width: 991px) {

}
@media (max-width: 767px) {

.section-info{background: #E3E4FA;padding:10px;text-align: center;}
}
@media (max-width: 479px) {
    .img-div2{  border-radius: 0 0 50px 50px; text-align: center; padding: 70px 0 0 0; background: #6338B2;height: 300px;}
.img-div{ padding: 60px 0 0 0}
.contact-header{font-size:30px;margin-bottom:20px;}
.banner-form{ padding:20px 20px;}
.section-info{background: #E3E4FA;padding:20px 0;text-align: center;}
}
</style>