<template>
    <div class="login-bg">
        <div class="logo-header">LOGO</div>
      <div class="login-div">
        <div class="form-header">Welcome, kindly login</div>
<br>
 <v-text-field color="#180A35" label="Email Address" placeholder="kolabinary@gmail.com" outlined></v-text-field>   
  <v-text-field color="#180A35" label="Password" type="password" placeholder="*******" outlined></v-text-field>  
   <br>
  <v-btn
  href="/admin/overview"
        class="sanitize banner-btn"
        color="#FAA722"
        large
        depressed
        dark
        block
        >
       Login
      </v-btn>
      </div>
    </div>
</template>
<style src="../../App.css" scoped></style>

<script>
export default {
    
}
</script>

<style scoped>
.logo-header{font-weight: 600;color:white;margin-bottom: 30px; font-size:30px}
.form-header{font-size:20px;color:#180A35;text-align: center; }
.login-bg {   position: fixed;width: 100%; height: 100%;background:#3D317A;z-index: 9999999; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.login-div { position: relative; border-radius:8px; width: 36%; height:55vh; padding: 50px 50px;background:#ffffff;z-index: 99999999;}

@media (max-width: 991px) {

}
@media (max-width: 767px) {


}
@media (max-width: 479px) {
.logo-header{font-weight: 600;color:white;margin-bottom: 30px; font-size:25px}
.form-header{font-size:20px;color:#180A35;text-align: center; }
.login-bg {   position: fixed;width: 100%; height: 100%;background:#3D317A;z-index: 9999999; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.login-div { position: relative; border-radius:8px; width: 90%; height:55vh; padding: 50px 20px;background:#ffffff;z-index: 99999999;}

}
</style>