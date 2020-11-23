<template>
    <div>
     <v-stepper flat depressed v-model="e1" v-if="escrowForm">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
        color="#5D30AF"
      >
        Name of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
         color="#5D30AF"
      >
        Name of step 2
      </v-stepper-step>

      <v-divider></v-divider>

     <v-stepper-step
        :complete="e1 > 3"
        step="3"
         color="#5D30AF"
      >
        Name of step 2
      </v-stepper-step>
            <v-divider></v-divider>
      <v-stepper-step  color="#5D30AF" step="4">
        Name of step 3
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="transparent"
          height="auto"
          flat
        >
       <a href="#"><div style="color:#5D30AF;font-size:13px;margin-bottom:10px;">< Back to Escrow</div></a> 
      <div class="create-escrow-div">
                 <div class="stepper-title">What's the service name?</div>
        <v-text-field style="height:70px" color="#180A35" label="Email Address" placeholder="kolabinary" outlined></v-text-field>
        <div style="color:#5D30AF;font-size:11px;">Example: Heavy metal on Flip</div>
        <br>
         <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
         @click="e1 = 2"
        >
       Next
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn> 
      </div>

        
        </v-card>

      </v-stepper-content>

      <v-stepper-content step="2">
         <v-card
          class="mb-12"
          color="transparent"
          height="auto"
          flat
        >
       <a href="#"><div style="color:#5D30AF;font-size:13px;margin-bottom:10px;">< Back</div></a> 
      <div class="create-escrow-div">
                 <div class="stepper-title">Location, Price & Quantity</div>
                 <div style="color:#5D30AF;font-size:18px;">Location</div>
                   <div style="color:grey;font-size:14px;margin-bottom:20px">Lorem ipsum corat quis supodl hudi mols</div>

                   <v-row>
                       <v-col cols="12" sm="12" md="6">
        <v-text-field style="height:70px" color="#180A35" label="City" placeholder="Ikeja" outlined></v-text-field>
                       </v-col>
                       <v-col cols="12" sm="12" md="6">
        <v-text-field style="height:70px" color="#180A35" label="State" placeholder="Lagos" outlined></v-text-field>
                       </v-col>
                   </v-row>
                     <div style="color:#5D30AF;font-size:18px;">Quantity</div>
                   <div style="color:grey;font-size:14px;margin-bottom:20px">Lorem ipsum corat quis supodl hudi mols</div>
        <v-text-field style="height:70px" color="#180A35" label="Qty" placeholder="10" outlined></v-text-field>
           <div style="color:#5D30AF;font-size:18px;">Price</div>
                   <div style="color:grey;font-size:14px;margin-bottom:20px">Lorem ipsum corat quis supodl hudi mols</div>
        <v-text-field style="height:70px" color="#180A35" label="Amount" placeholder="N20000" outlined></v-text-field>
       
        <br>
         <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
         @click="e1 = 3"
        >
       Next
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn> 
      </div>

        
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
  <v-card
          class="mb-12"
          color="transparent"
          height="auto"
          flat
        >
       <a href="#"><div style="color:#5D30AF;font-size:13px;margin-bottom:10px;">< Back</div></a> 
      <div class="create-escrow-div-2">
                 <div class="stepper-title">Delivery Options</div>
                    <v-row>
                       <v-col cols="12" sm="12" md="6" style="padding:20px">
      
  <div style="color:#5D30AF;font-size:18px;">Delivery Locations</div>
                     <v-radio-group v-model="row" row>
      <v-radio label="Lagos" value="radio-1"></v-radio>
      <v-radio label="Lagos & Other areas" value="radio-2"></v-radio>
    </v-radio-group>
        <v-text-field style="height:70px" color="#180A35" label="Specify" placeholder="Lorem" outlined></v-text-field>
           <div style="color:#5D30AF;font-size:18px;margin-bottom:10px">Delivery Days</div>
        <v-text-field style="height:70px" color="#180A35" label="Days" placeholder="10" outlined></v-text-field>
             
  <div style="color:#5D30AF;font-size:18px;">Payment on Delivery</div>
                     <v-radio-group v-model="row2" row>
      <v-radio label="Yes" value="radio-1"></v-radio>
      <v-radio label="No" value="radio-2"></v-radio>
    </v-radio-group>
                       </v-col>

                       <v-col cols="12" sm="12" md="6" style="border-left:1px solid #f0f0f0;padding:20px">
            <div style="color:#5D30AF;font-size:18px;">Add more details</div>
                 <v-row>
                       <v-col cols="12" sm="12" md="4">
        <v-text-field style="height:70px" color="#180A35" label="Value" placeholder="Value" outlined></v-text-field>
                       </v-col>
                       <v-col cols="12" sm="12" md="8">
        <v-text-field style="height:70px" color="#180A35" label="Description" placeholder="Description" outlined></v-text-field>
                       </v-col>
                   </v-row>

             <v-btn
        class="sanitize banner-btn"
        color="#5D30AF"
        depressed
        dark
        >
         <v-icon dark>mdi-plus</v-icon>
       Add Details
      
      </v-btn> 

                       </v-col>
                    </v-row>
        <br>
         <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        outlined
        dark
         @click="e1 = 4"
         style="margin-right:15px;"
        >
       Skip
      </v-btn> 
         <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
         @click="e1 = 4"
        >
       Next
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn> 
      </div>

        
        </v-card>
      </v-stepper-content>
       <v-stepper-content step="4">
         <v-card
          class="mb-12"
          color="transparent"
          height="auto"
          flat
        >
       <a href="#"><div style="color:#5D30AF;font-size:13px;margin-bottom:10px;">< Back</div></a> 
      <div class="create-escrow-div-3">
                 <div class="stepper-title">Upload Pictures</div>
                <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
       
        <br>
         <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
         @click="escrowForm = false"
        >
       Finish
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn> 
      </div>

        
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  <div v-else class="success-div">
   <div class="success-header">Sucessful</div>
    <div class="success-sub">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</div>
    <div class="img-div">
        <img  class="success-img" src="../.././assets/sucess-img.svg" alt=""> 
    </div>
   
     <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
        block
        >
       Back to Escrow
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn> 
  </div>
    </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
  export default {
       components: {
    vueDropzone: vue2Dropzone
  },
    data () {
      return {
        row: null,
        row2: null,
          escrowForm: true,
        e1: 1,
        dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }
      }
    },
  }
</script>
<style src="../../App.css" scoped></style>
<style lang="scss" scoped>
a{text-decoration: none;;}
.stepper-title{color:#2C125C;font-size:30px;margin-bottom: 20px;}
.create-escrow-div{ width: 40%;}
.create-escrow-div-2{ width: 100%;}
.create-escrow-div-3{ width: 60%;}
.success-div {padding: 20px;margin: 0 auto; width: 50%;text-align: center;}
.success-header {color: #2C125C;font-size:30px;margin-bottom: 30px;}
.success-sub {color: #2C125C;font-size:15px;margin-bottom: 20px;}
.success-img {width:50%}
.img-div{ width: 80%; height: 350px;margin: 0 auto;text-align: center;}

@media (max-width: 991px) {

}
@media (max-width: 767px) {

}
@media (max-width: 479px) {
a{text-decoration: none;;}
.stepper-title{color:#2C125C;font-size:25px;margin-bottom: 20px;}
.create-escrow-div{ width: 100%;}
.create-escrow-div-2{ width: 100%;}
.create-escrow-div-3{ width: 100%;}
.success-div {padding: 20px;margin: 0 auto; width: 100%;text-align: center;}
.success-header {color: #2C125C;font-size:30px;margin-bottom: 30px;}
.success-sub {color: #2C125C;font-size:15px;margin-bottom: 20px;}
.success-img {width:50%}
.img-div{ width: 80%; height: 350px;margin: 0 auto;text-align: center;}

}
</style>