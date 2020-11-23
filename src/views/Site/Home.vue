<template>
  <div class="home">
    <app-header></app-header>
    <div class="section-category">
        <h2 class="section-category-header">Bring your Business here!</h2>
        <v-card-actions style="margin:0;padding:0;">
           <p class="section-category-sub">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
           <v-spacer></v-spacer>
           <v-btn style="margin-top:-20px" class="sanitize hidden-sm-and-down" text color="#FAA722">Explore More <v-icon color="#FAA722">mdi-arrow-right</v-icon></v-btn>
        </v-card-actions>
        <div>

          <v-row>
            <v-col v-for="(item,index) in categories" :key="index" cols="12" sm="12" md="3">
              <v-card :color="item.color" class="section-category-card" flat>
               <img width="80%" height="80%" :src= "item.img" alt="img">
               <p>{{ item.name }}</p>
              </v-card>
            </v-col>
          </v-row>
          <br>
            <v-btn style="margin-top:-20px" class="sanitize hidden-md-and-up" dark depressed large block color="#FAA722">Explore More <v-icon color="white">mdi-arrow-right</v-icon></v-btn>
        </div>
       
    </div>

     <div class="section-2">
        <h2 class="section-2-header">Take the step towards us</h2>
        <div>
          <v-row>
            <v-col v-for="(item,index) in 4" :key="index" cols="12" sm="12" md="3">
              <v-card color="transparent"  class="section-2-card" flat>
              <v-icon style="font-size:50px;margin-bottom:20px">mdi-account-box-outline</v-icon>
              <h3 style="margin-bottom:10px">Log on to our platform</h3>
              <p style="font-size:13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              </v-card>
            </v-col>
          </v-row>
        </div>
       
    </div>

    <div class="section-3">
   <v-row>
     <v-col class="section-3-col" cols="12" sm="12" md="6">
       <img style="box-shadow:0 17px 38px -11px rgba(0, 0, 0, 0.18)" width="100%" src="../.././assets/section3.png" alt="section3">
     </v-col>
          <v-col class="section-3-col" cols="12" sm="12" md="6">
       <h1 class="section-3-header">Lorem ipsum meridum melis</h1>
       <p  class="section-3-sub">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
       <br>
       <v-btn style="margin-top:-20px" class="sanitize" text color="#FAA722">Explore More <v-icon color="#FAA722">mdi-arrow-right</v-icon></v-btn>
     </v-col>
   </v-row>
    </div>
    <div class="section-4">
      <div class="section-4-heading">
         <h2 class="section-4-header">Lorem ipsum dolor sit amet, consetetur sadipscing</h2>
      <p class="section-4-sub">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
      </div>
     
      <br>
       <v-btn style="padding: 0 40px" large depressed class="sanitize" color="#6338B2" dark>Join Now</v-btn>
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
import Header from '../../components/Site/header'
import Footer from '../../components/Site/footer'
export default {
  name: 'Home',
  components: {
      'app-header': Header,
      'app-footer': Footer
  },
  data(){
    return{
      categories:[
        {
          name: 'Games & Accessories',
          img: require('../.././assets/PS4.svg'),
          color: '#E3E4FA'
        },
         {
          name: 'Audio Equipment',
          img: require('../.././assets/Audio.svg'),
          color: '#FCE4BD'
        },
         {
          name: 'Phones & Accessories',
          img: require('../.././assets/phone.svg'),
          color: '#DAFACD'
        },
         {
          name: 'Body Care',
          img: require('../.././assets/cream.svg'),
          color: '#F7E1EA'
        }
      ]
    }
  }
    
}
</script>

<style lang="scss" scoped>
.section-category{padding: 100px;}
.section-category-header{color: #2C125C;font-size:35px;}
.section-category-sub{color: #68558A;font-size: 18px;width:70%;}
.section-category-card{height: 300px;padding: 30px; text-align: center;}
.section-2{padding: 50px 100px;background: #E3E4FA;}
.section-2-header{color: #2C125C;font-size:30px;margin-bottom: 20px;}
.section-2-sub{color: #68558A;font-size: 18px;width:70%;}
.section-2-card{height: auto;padding: 10px;text-align: justify;}
.section-3{padding: 100px;}
.section-3-header{width: 350px;color: #2C125C;font-size:35px;margin-bottom: 20px;}
.section-3-sub{width: 350px;color: #68558A;font-size: 18px;}
.section-3-col{padding: 30px;}
.section-4{text-align: center;padding: 100px;background: rgb(250, 250, 250);}
.section-4-heading{width:700px;margin: 0 auto;}
.section-4-header{color: #2C125C;font-size:30px;margin-bottom: 20px;}
.section-4-sub{color: #68558A;font-size: 15px;}
.section-info{background: #E3E4FA;padding:20px;text-align: center;}


@media (max-width: 991px) {

}
@media (max-width: 767px) {
.section-category{padding: 20px;}
.section-category-header{color: #2C125C;font-size:30px;}
.section-category-sub{color: #68558A;font-size: 14px;width:auto;}
.section-category-card{height: 300px;padding: 30px; text-align: center;}
.section-2{padding: 30px 20px;background: #E3E4FA;}
.section-2-header{color: #2C125C;font-size:30px;margin-bottom: 20px;}
.section-2-sub{color: #68558A;font-size: 14px;width:auto;}
.section-2-card{height: auto;padding: 10px;text-align: justify;}
.section-3{padding: 20px;}
.section-3-header{width:auto;color: #2C125C;font-size:30px;margin-bottom: 20px;}
.section-3-sub{width: auto;color: #68558A;font-size: 14px;}
.section-3-col{padding: 20px;}
.section-4{text-align: center;padding: 20px;background: rgb(250, 250, 250);}
.section-4-heading{width:auto;margin: 0;}
.section-4-header{color: #2C125C;font-size:30px;margin-bottom: 20px;}
.section-4-sub{color: #68558A;font-size: 14px;}
.section-info{background: #E3E4FA;padding:10px;text-align: center;}
}
@media (max-width: 479px) {
.section-category{padding: 20px;}
.section-category-header{color: #2C125C;font-size:30px;}
.section-category-sub{color: #68558A;font-size: 14px;width:auto;}
.section-category-card{height: 300px;padding: 30px; text-align: center;}
.section-2{padding: 30px 20px;background: #E3E4FA;}
.section-2-header{color: #2C125C;font-size:30px;margin-bottom: 20px;}
.section-2-sub{color: #68558A;font-size: 14px;width:auto;}
.section-2-card{height: auto;padding: 10px;text-align: justify;}
.section-3{padding: 20px;}
.section-3-header{width:auto;color: #2C125C;font-size:30px;margin-bottom: 20px;}
.section-3-sub{width: auto;color: #68558A;font-size: 14px;}
.section-3-col{padding: 20px;}
.section-4{text-align: center;padding: 20px;background: rgb(250, 250, 250);}
.section-4-heading{width:auto;margin: 0;}
.section-4-header{color: #2C125C;font-size:30px;margin-bottom: 20px;}
.section-4-sub{color: #68558A;font-size: 14px;}
.section-info{background: #E3E4FA;padding:20px 0;text-align: center;}
}
</style>