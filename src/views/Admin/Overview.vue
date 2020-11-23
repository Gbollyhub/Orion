<template>
    <div>
        
        	<div class="dashboard-row">
				<div class="dashboard-col-1">
					<app-leftbar></app-leftbar>
				</div>
				<div class="dashboard-col-2">
                    <div style="margin-bottom:30px;" class="heading">
  <div style="font-weight:700; font-size:15px;">Dashboard</div>
                 <div style="font-size:12px">Monday, 30 June 2020</div>
                    </div>

                    <div style="position:relative;background:#D9D7E2;padding:25px;border-radius:20px">
                      <div style="font-size:22px;font-weight:600;margin-bottom:10px;">Hello Binary</div>
                      <div style="width:400px;font-size:13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </div>
                    <img width="200px" style="position:absolute;right:30px;top:-20px;" src="../.././assets/welcomedash.svg" alt="">
                    </div>
                    <br><br>

                    <div class="profile-bar-header">Metrics</div>

                    <div style="margin-bottom:30px;" class="metrics">
                    <v-row>
                        <v-col cols="12" sm="12" md="4">
                            <div class="metrics-card">
                              <v-row>
                                  <v-col cols="4">
                                     <div style="border-radius:8px;background:#3D317A;padding: 20px 15px;">
                                    <v-icon dark>mdi-account-group</v-icon> 
                                     </div>
                                  </v-col>
                                  <v-col cols="8">
                                      <div>Total users</div>
                                      <div style="font-weight:700;font-size:20px;">10,000</div>
                                  </v-col>
                              </v-row>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="4">
                            <div class="metrics-card">
                              <v-row>
                                  <v-col cols="4">
                                     <div style="border-radius:8px;background:#CC6AC9;padding: 20px 15px;">
                                    <v-icon dark>mdi-bank-transfer</v-icon> 
                                     </div>
                                  </v-col>
                                  <v-col cols="8">
                                      <div>Transactions</div>
                                      <div style="font-weight:700;font-size:20px;">10,000</div>
                                  </v-col>
                              </v-row>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="12" md="4">
                            <div class="metrics-card">
                              <v-row>
                                  <v-col cols="4">
                                     <div style="border-radius:8px;background:#FAA722;padding: 20px 15px;">
                                    <v-icon dark>mdi-handshake</v-icon> 
                                     </div>
                                  </v-col>
                                  <v-col cols="8">
                                      <div>Escrows</div>
                                      <div style="font-weight:700;font-size:20px;">10,000</div>
                                  </v-col>
                              </v-row>
                            </div>
                        </v-col>
                    </v-row>
                    </div>

                    <div class="analytics">
                     <div class="profile-bar-header">Transactions</div>
                    </div>
              
				</div>
                	<div class="dashboard-col-3">       
				        <app-rightbar></app-rightbar> 
				</div>
        	</div>
    </div>
</template>

<script>
import LeftSidebar from '../../components/Admin/LeftSideBar'
import RightSidebar from '../../components/Admin/RightSideBar'
export default {
    components: {
        'app-leftbar' : LeftSidebar,
        'app-rightbar' : RightSidebar
    }
}
</script>

<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
@mixin clearfix {
    &::after {
      content: "";
    display: table;
    clear: both;  
    } 
}

.analytics{
    padding: 20px;
    background: white;
    border-radius: 10px;
    height: 300px;
}

.metrics-card{
    background: white;
    padding: 15px;
    border-radius: 8px;
}

.profile-bar-header{
    font-weight: 500px;
    font-size: 18px;
}

.welcome-dash {
   background:red;
   padding:20px;
   border-radius:10px;
   position: relative;
}

.dashboard-row {

    .dashboard-col-1{
        background-color: #3D317A;
        width: 17%;
       left:0;
       top:0;
        height: 100vh;
        position: fixed;
        padding: 40px 20px;
        // @include respond(phone){ display: none; } ;
        // @include respond(tablet){ display: none;  } ;


    }
    .dashboard-col-2{
        padding: 30px;
        position: relative;
        background-color: #F2F2F2;
        width: 62%;
        height: 100vh;
        margin: 0 0 0 17%;
        overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        // @include respond(phone){ width:100%; float: none; display: block;  } ;
        // @include respond(tablet){  width:100%; float: none; display: block;  } ;
    }
        .dashboard-col-3{
            box-sizing: border-box;
        background-color: #ffffff;
              width: 21%;
        right: 0;
        top:0;
        height: 100vh;
        position: fixed;
        padding: 20px 30px;
        // @include respond(phone){ display: none; } ;
        // @include respond(tablet){ display: none;  } ;


    }
}
</style>

