<template>
    <div>
          
         <div v-show="bankModal" class="edit-bg">
        <div class="edit-div">
            <v-icon @click="bankModal = false" class="form-close" style="font-size:25px" color="black">mdi-close</v-icon>
            <br><br>
 <div class="form-header">Add Bank Account</div>
<br>
    <v-text-field color="#180A35" label="Amount" placeholder="N8000" outlined></v-text-field>
        <v-text-field color="#180A35" label="Bank" placeholder="Wema" outlined></v-text-field>

    <br>
  <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        large
        depressed
        dark
        block
        >
       Proceed
      </v-btn>
        </div>
    </div>
        <app-header></app-header>
    <v-row class = "d-row" no-gutters>
        <v-col class = "hidden-sm-and-down d-col-1" cols="12" sm="12" md="2">
        <app-leftmenu></app-leftmenu>
        </v-col>
         <v-col style="background:#F7F7F7" cols="12" sm="12" md="10">
            <div class = "d-col-2">
     <v-tabs show-arrows color="#6338B2" background-color="transparent">
    <v-tab class="sanitize">Account Settings</v-tab>
        <v-tab class="sanitize">Bank Details</v-tab>
    <v-tab class="sanitize">Security</v-tab>
    <v-tab-item style="border-radius:20px">
        <v-card class="profile-card" flat>
        <br>
        <div class="profile-div">
              <v-avatar
                  size="66px"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
                <div style="font-size:20px;color:#6338B2;margin-left:20px;display:inline-block">Kola Binary</div>
        <br><br>
        <div style="color:#5D30AF;font-size:16px;">Full Name</div>
                   <div style="color:grey;font-size:12px;margin-bottom:20px">Lorem ipsum corat quis supodl hudi mols</div>
                   <v-row>
                       <v-col cols="12" sm="12" md="6">
        <v-text-field style="height:70px" color="#180A35" label="First Name" placeholder="Kola" outlined></v-text-field>
                       </v-col>
                       <v-col cols="12" sm="12" md="6">
        <v-text-field style="height:70px" color="#180A35" label="Last Name" placeholder="Binary" outlined></v-text-field>
                       </v-col>
                   </v-row>
        
             <div style="color:#5D30AF;font-size:16px;">Gender</div>
                     <v-radio-group v-model="row" row>
      <v-radio label="Male" value="radio-1"></v-radio>
      <v-radio label="Female" value="radio-2"></v-radio>
    </v-radio-group>
    <br>
      <div style="color:#5D30AF;font-size:16px;">Address</div>
                   <div style="color:grey;font-size:12px;margin-bottom:20px">Lorem ipsum corat quis supodl hudi mols</div>
                           <v-text-field style="height:70px" color="#180A35" label="Address" placeholder="Address" outlined></v-text-field>
                   <v-row>
                       <v-col cols="12" sm="12" md="6">
        <v-text-field style="height:70px" color="#180A35" label="City" placeholder="Ikeja" outlined></v-text-field>
                       </v-col>
                       <v-col cols="12" sm="12" md="6">
        <v-text-field style="height:70px" color="#180A35" label="State" placeholder="Lagos" outlined></v-text-field>
                       </v-col>
                         <v-col cols="12" sm="12" md="6">
        <v-text-field style="height:70px" color="#180A35" label="Country" placeholder="Nigeria" outlined></v-text-field>
                       </v-col>
                         <v-col cols="12" sm="12" md="6">
        <v-text-field style="height:70px" color="#180A35" label="Zip Code" placeholder="11010" outlined></v-text-field>
                       </v-col>
                   </v-row>
        </div>
        <br>
          <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
        >
       Save Changes
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn> 
        
        </v-card>
    </v-tab-item>
        <v-tab-item>
            <v-card class="profile-card" flat>
                <div class="profile-div2">
                      <div style="font-size:18px;color:#2C125C;font-weight:600">Bank Details</div>
                <br>
                                   <div class="wallet-card">
                                    
                                      <div class="wallet-header">KOLA BINARY</div>
                                       <div class="wallet-sub">2839-2929-9292</div>
                                       <div style="float:right" class="wallet-header">UBA BANK</div>
                                       <img  class="wallet-img" src="../.././assets/walletcard.svg" alt=""> 
                                  </div>
                                  <br>
                                     <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
        @click="bankModal = true"
        > 
        <v-icon dark>mdi-plus</v-icon>
      Add Account
      
      </v-btn> 
                </div>
              
            </v-card>
        </v-tab-item>
     </v-tabs>
                 
            </div>
        </v-col>
    </v-row>
    </div>
</template>

<script>
import Header from '../../components/Dashboard/header'
import LeftMenu from '../../components/Dashboard/LeftMenu'
export default {
  name: 'Overview',
  components: {
      'app-header': Header,
      'app-leftmenu': LeftMenu
  },
  data(){
      return{
          bankModal:false
      }
  }

}
</script>


<style src="../../App.css" scoped></style>

<style lang="scss" scoped>

.form-header{ font-size: 20px; color: #2C125C;}
.edit-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.edit-div { position: relative; border-radius:8px; width: 45%; height: 70vh; padding: 50px 120px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }

.wallet-card { background: #B848B6;padding: 40px 30px 0 30px;border-radius:10px; color: white; height:170px;position: relative;margin-bottom:10px}
.wallet-header { font-size: 12px; z-index:999;}
.wallet-sub { font-size: 30px;z-index:999;font-weight: 700;}
.wallet-img { position: absolute; bottom: 0; left: 0;z-index:10;}
.profile-div{ width: 60%;}
.profile-div2{ width: 40%;}
.d-col-2{padding:50px 70px;background:white;height:88vh;border-radius: 30px 0 0 0 !important;overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        
        }

.profile-card{ padding:20px}


@media (max-width: 991px) {

}
@media (max-width: 767px) {

}
@media (max-width: 479px) {


.edit-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.edit-div { position: relative; border-radius:8px; width: 90%; height: auto; padding: 50px 20px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }

    .wallet-card { background: #B848B6;padding: 40px 30px 0 30px;border-radius:10px; color: white; height:170px;position: relative;margin-bottom:10px}
.wallet-header { font-size: 12px; z-index:999;}
.wallet-sub { font-size: 20px;z-index:999;font-weight: 700;}
.wallet-img { position: absolute; bottom: 0; left: 0;z-index:10;}

.d-col-2{padding:50px 20px;background:white;height:90vh;border-radius: 30px 30px 0 0 !important;overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        
        }
.profile-div{ width: 100%;}
.profile-div2{ width: 100%;}
.profile-card{ padding:20px}

}
</style>