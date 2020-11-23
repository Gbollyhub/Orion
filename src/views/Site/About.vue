<template>
  <div class="home">
    <app-header></app-header>
    <v-row class="form-content">
           <v-col cols="12" sm="12" md="6">
           <div class="banner-form">
               <h2 class="contact-header">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </h2>
            
           </div>
        </v-col>
         <v-col cols="12" sm="12" md="6">
            <div class="banner-form">
              <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
           </div>
        </v-col>
    </v-row>
    <div class="section-2">

    </div>

    <div class="section-3">
       <div class="section-3-header">Meet the Team</div>
       <br>
       <v-row>
           <v-col v-for="(item,index) in 8" :key="index" cols="12" sm="12" md="3" style="margin-bottom:30px;">
           <div class="team-div">
            <v-avatar
                  size="120px"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
                <div style="font-size:18px; color:#2C125C;margin-top:10px">John Doe</div>
                <div style="font-size:14px; color:#5D30AF">Operations</div>
           </div>
           </v-col>
       </v-row>
       <br>
       <v-divider></v-divider>
       <br>
       <div class="end-header">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</div>
         <div class="end-sub">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing</div>
    </div>
   
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
      'app-footer': Footer,
  },
  data(){
    return{
    
    }
  }
    
}
</script>

<style lang="scss" scoped>
.end-header { font-weight: 600;font-size: 18px;margin-bottom: 20px;}
.end-sub {font-size: 15px;}
.team-div{text-align:center;}
.img-div2{ border-radius: 0 0 100px 100px; text-align: center; padding: 70px 0 0 0; background: #6338B2; position: relative;}
.img-div{ padding: 60px 0 0 0}
.contact-header{font-size:30px;margin-bottom:20px;}
.banner-form{ padding:60px 140px;}
.section-info{background: #E3E4FA;padding:20px;text-align: center;}

.section-2{ background-position: bottom; background-size: cover; background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'); height:400px}

.section-3 {text-align:center; padding:50px}
.section-3-header {font-size:28px;color: #311342;font-weight:600}
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