<template>
<div>
     <v-app-bar
      color="#2C125C"
      dark
      flat
      fixed
      class="nav-bar"
    >
      <div>
      <h2 class="nav-header" style="font-size:20px;color:white">ORION</h2>
      </div>
       <v-btn
        
        text
        class="sanitize nav-btn  hidden-sm-and-down"
        color="white"
      >
        Sell Here
      </v-btn>
       <v-btn
        
        text
        class="sanitize nav-btn  hidden-sm-and-down"
        color="white"
      >
        Help
      </v-btn>
      <v-spacer></v-spacer>
  <input style="width:450px;margin-top:20px" type="text" class="app-text-field-search2 hidden-sm-and-down" placeholder="Search for products">
      <v-btn
      style="margin-left:-63px;padding-right:5px;padding-left:5px;"
        class="sanitize nav-btn  hidden-sm-and-down"
        color="#FAA722"
        depressed
      >
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>
            <v-btn
            style="font-weight:600;margin-left:50px"
        class="sanitize nav-btn  hidden-sm-and-down"
        depressed
        color='transparent'
      >
       <v-icon style="margin-right:5px;">mdi-wallet</v-icon>
       N1,000,000
      </v-btn>
  <v-btn  
        icon
        class="sanitize nav-btn  hidden-sm-and-down"
        color="white"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
        <v-btn  
        icon
        class="sanitize nav-btn  hidden-sm-and-down"
        color="white"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn @click="drawer = !drawer" icon class="sanitize hidden-md-and-up">
					<v-icon style="font-size:35px;" color="white">mdi-menu</v-icon>
				</v-btn>
    </v-app-bar>  
    <transition name="slide-x-reverse-transition">
    <div v-show="drawer" class="mobile-nav"> 
      <v-card-actions style="margin:0; padding:0; color:white">
         <div style="font-size:20px">ORION</div> <v-spacer></v-spacer> 
         <div><v-icon @click="drawer = false" style="font-size:40px" color="white">mdi-close-circle</v-icon></div></v-card-actions>
      <br><br><br>
      <div>
        <li>Lorem</li>
         <li>Lorem</li>
          <li>Lorem</li>
           <li>Lorem</li>
      </div>
    
      <div style="position:absolute;bottom:0">
        <v-btn
        
        class="sanitize banner-btn"
        color="white"
        large
        text
        style="font-size:18px;font-weight:600;"
        @click="login"
        >
      Log in
      </v-btn>

        <v-btn
        class="sanitize banner-btn"
        color="white"
        large
        outlined
         style="font-size:18px;font-weight:600;"
          @click="signUp" 
        >
      Get Started
      </v-btn>
      </div>
     
    </div>
     </transition>


         <transition name="slide-x-reverse-transition">
    <div v-show="authShow" class="authentication-bg">
      <div class="authentication-div">
       <v-icon @click="authShow = false" class="form-close" color="#180A35">mdi-close</v-icon>
       <div v-show="auth">
 <v-row v-if="newUser">
         <v-col cols="12" sm="12" md="6">
            <div>
              <div class="form-header">Lets get you all set up!</div>
              <p class="form-sub">Kindly fill in the details below</p>
              <br>
               <v-text-field color="#180A35" label="Email Address" placeholder="kolabinary@gmail.com" outlined></v-text-field>
               <v-text-field color="#180A35" label="Phone Number" placeholder="070893672448" outlined></v-text-field>
               <v-text-field color="#180A35" label="Username" placeholder="kolabinary" outlined></v-text-field>
                <v-text-field color="#180A35" label="Password" placeholder="*********"  @click:append="show2 = !show2"  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'" outlined></v-text-field>
                <v-btn
        class="sanitize banner-btn hidden-sm-and-down"
        color="#FAA722"
        x-large
        depressed
        dark
        >
       Next
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn>
       <v-btn
        block
        class="sanitize banner-btn hidden-md-and-up"
        color="#FAA722"
        x-large
        depressed
        dark
        >
       Next
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn>
      <br>
                 <div class="hidden-md-and-up" style="text-align:center;color:grey; font-size:13px"><span @click="signUp" style="cursor:pointer;">New here? Signup now</span>  | <span style="cursor:pointer;" @click="login">Already a user login</span> </div>

            </div>
         </v-col>
          <v-col class="hidden-sm-and-down" cols="12" sm="12" md="6">
            <div style="text-align:center;border-left: 1px solid #eaeaea;padding:20px;">
              <p>Already have an account</p>
        <v-btn
        class="sanitize"
        color="#FAA722"
        outlined
        dark
        @click="newUser = false"
        >
       Log in
      </v-btn>
      
              </div>
          </v-col>
       </v-row>
         <v-row v-else>
         <v-col  cols="12" sm="12" md="6">
            <div>
              <div class="form-header">Welcome back!</div>
              <p class="form-sub">Kindly enter your credentials to continue</p>
              <br>
               <v-text-field color="#180A35" label="Email Address" placeholder="kolabinary" outlined></v-text-field>
                <v-text-field color="#180A35" label="Password" placeholder="kolabinary@gmail.com" outlined  @click:append="show2 = !show2"  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'"></v-text-field>
                <div style="cursor:pointer;font-size:13px;color:#FAA722;" @click="forgotPass">Forgot Password</div>
                <br><br>
                <v-btn
        class="sanitize banner-btn hidden-sm-and-down"
        color="#FAA722"
        x-large
        depressed
        dark
        >
       Next
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn>
        <v-btn
        block
        class="sanitize banner-btn hidden-md-and-up"
        color="#FAA722"
        x-large
        depressed
        dark
        >
       Next
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn>
      <br>
           <div class="hidden-md-and-up" style="text-align:center;color:grey; font-size:13px"><span @click="signUp" style="cursor:pointer;">New here? Signup now</span>  | <span style="cursor:pointer;" @click="login">Already a user login</span> </div>
            </div>
         </v-col>
          <v-col class="hidden-sm-and-down" cols="12" sm="12" md="6">
            <div style="text-align:center;border-left: 1px solid #eaeaea;padding:20px;">
              <p>Don't have an account??</p>
        <v-btn
        class="sanitize"
        color="#FAA722"
        outlined
        dark
        @click="newUser = true"
        >
       Signup
      </v-btn>
              </div>
          </v-col>
       </v-row>
       </div>
      

       <div v-show="forgotPassword" class="forgotPass">
           <div class="form-header">Forgot Password</div>
              <p class="form-sub">Kindly enter your credentials to reset your password</p>
              <br>
 <v-text-field color="#180A35" label="Email Address" placeholder="kolabinary" outlined></v-text-field>               
  <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
        block
        >
       Reset Password
      </v-btn>
      <br>
     <div style="text-align:center;color:grey; font-size:13px"><span @click="signUp" style="cursor:pointer;">New here? Signup now</span>  | <span style="cursor:pointer;" @click="login">Already a user login</span> </div>
       </div>
    </div>
    </div>
     </transition>

</div>

</template>

<script>
export default {
  data(){
    return{
      drawer: false,
      newUser:true,
      auth:true,
      forgotPassword: false,
      show1: false,
      show2: false,
      authShow: false
    }
  },
  methods:{
    login(){
      this.drawer = false
      this.authShow = true
      this.auth = true
      this.newUser = false
      this.forgotPassword = false
    },
    signUp(){
       this.drawer = false
      this.authShow = true
      this.auth = true
      this.newUser = true
      this.forgotPassword = false
    },
    forgotPass(){
      this.auth = false
      this.forgotPassword = true
    }
  }
}
</script>

<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
 .app-text-field-search2 {
  height: 35px;
  padding: 10px;
  font-size: 15px;
  transition: all .2s;
  border-radius: 2px;
  background: rgb(255, 255, 255);
  margin-bottom:20px;
  &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #FAA722;
    outline: none;
  }

 } 
.nav-header{margin-right:50px;}
a{ text-decoration: none;}
.forgotPass{ padding: 0 100px;}
.form-close{ margin-top:-70px;float:right;font-size:40px !important;}
.form-header{font-size:30px;color:#180A35;}
.form-sub{color:#FAA722}
.authentication-bg {  position: absolute;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; }
.authentication-div {  right:0; position: fixed;width: 70%; height: 100%; padding: 100px 150px;background:#ffffff;z-index: 99999999; }
li{list-style-type: none;color:#A599BD;margin-bottom: 50px;font-size:20px}
.mobile-nav{ position: fixed;width: 100%; height: 100%; padding: 20px; text-align: center;background:#2C125C;z-index: 9999999;}
.green-star{position: absolute;top: -40px;left: 54%;width: 80px;}
.green-oval{position: absolute;top: 20px;left: 5%;width: 30px;}
.pink-oval{position: absolute;top: 23%;left: 50%;width: 30px;}
.blue-circle{position: absolute;top: 40%;right: 2%;width: 30px;}
.purple-oval{position: absolute;bottom: 20%;left: 50%;width: 30px;}
.yellow-circle{position: absolute;bottom: 1%;left: -15px;width: 30px;}
.nav-bar{padding: 0 4%;}
.nav-btn{font-size:13px !important;}
.header-banner {background: #2C125C;height: 100vh;padding: 14% 8% 0 8%;position: relative;}
.header-banner-header{font-size:60px;font-weight: 900;color: white;width: 400px;line-height: 70px;margin-bottom:20px;}
.header-banner-sub{font-size:17px;font-weight: 400;color: #A599BD; width: 500px; margin-bottom: 30px;}
.banner-btn{ padding:30px 60px !important; margin-bottom:30px;}

@media (max-width: 991px) {

}
@media (max-width: 767px) {
.forgotPass{ padding: 0 20px;}
.form-close{ margin-top:-50px;float:right;font-size:30px !important;}
.form-header{font-size:30px;color:#180A35;}
.form-sub{color:#FAA722}
.authentication-bg {  position: absolute;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; }
.authentication-div {  right:0; position: fixed;width: 100%; height: 100%; padding: 60px 30px 30px 30px;background:#ffffff;z-index: 99999999; }
.green-star{position: absolute;top: -40px;left: 54%;width: 80px;}
.green-oval{position: absolute;top: 20px;left: 5%;width: 30px;}
.pink-oval{position: absolute;top: 23%;left: 50%;width: 30px;}
.blue-circle{position: absolute;top: 40%;right: 2%;width: 30px;}
.purple-oval{position: absolute;bottom: 20%;left: 50%;width: 30px;}
.yellow-circle{position: absolute;bottom: 1%;left: -15px;width: 30px;}
.nav-bar{padding: 0 2%;}
.nav-btn{font-size:13px !important;}
.header-banner {background: #2C125C;height: auto;padding: 30% 20px 0 20px;position: relative;}
.header-banner-header{font-size:30px;font-weight: 900;color: white;width: auto;line-height: 70px;margin-bottom:20px;}
.header-banner-sub{font-size:14px;font-weight: 400;color: #A599BD; width: auto; margin-bottom: 30px;}
.banner-btn{ padding:30px 60px !important; margin-bottom:30px;}
}
@media (max-width: 479px) {
.forgotPass{ padding: 0 20px;}
.form-close{ margin-top:-50px;float:right;font-size:30px !important;}
.form-header{font-size:30px;color:#180A35;}
.form-sub{color:#FAA722}
.authentication-bg {  position: absolute;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; }
.authentication-div {  right:0; position: fixed;width: 100%; height: 100%; padding: 60px 30px 30px 30px;background:#ffffff;z-index: 99999999; }
.green-star{position: absolute;top: -40px;left: 54%;width: 80px;}
.green-oval{position: absolute;top: 20px;left: 5%;width: 30px;}
.pink-oval{position: absolute;top: 23%;left: 50%;width: 30px;}
.blue-circle{position: absolute;top: 40%;right: 2%;width: 30px;}
.purple-oval{position: absolute;bottom: 20%;left: 50%;width: 30px;}
.yellow-circle{position: absolute;bottom: 1%;left: -15px;width: 30px;}
.nav-bar{padding: 0 2%;}
.nav-btn{font-size:13px !important;}
.header-banner {background: #2C125C;height: auto;padding: 30% 20px 0 20px; position: relative;}
.header-banner-header{font-size:30px;font-weight: 900;color: white;width: auto;line-height: 70px;margin-bottom:20px;}
.header-banner-sub{font-size:14px;font-weight: 400;color: #A599BD; width: auto; margin-bottom: 30px;}
.banner-btn{ padding:30px 60px !important; margin-bottom:30px;}
}
</style>