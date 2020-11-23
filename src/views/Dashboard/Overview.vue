<template>
    <div>
        <app-header></app-header>
    <v-row class = "d-row" no-gutters>
        <v-col class = "hidden-sm-and-down d-col-1" cols="12" sm="12" md="2">
        <app-leftmenu></app-leftmenu>
        </v-col>
         <v-col style="background:#F7F7F7" cols="12" sm="12" md="10">
            <div class = "d-col-2">
    
                    <img class="floating-spiral hidden-sm-and-down" src="../.././assets/spiral.svg" alt="">
                <div class="wallet-div">
                <div class="wallet-header">Wallet Balance</div>
                 <div class="wallet-value">
                     <span style="font-size:15px;">₦</span>0<span style="font-size:15px;">.00</span>
                 </div>
                </div>

                <div class="escrow-div">
                    <div class="escrow-header">Escrow</div>
                <v-row> 
                    <v-col cols="12" sm="12" md="4">
                        <div class="escrow escrow-col">
                            <div>In Progress</div>
                             <div class="escrow-col-2-s2">
                                 0
                             </div>
                             <v-divider></v-divider>
                             <v-btn style="margin-top:10px;" small text class="sanitize" color="#D594AF"> <v-icon style="margin-right:5px;" small color="#D594AF">mdi-plus-circle</v-icon>Create Escrow</v-btn>
                        </div>
                    </v-col>
                     <v-col cols="12" sm="12" md="4">
                        <div class="escrow escrow-col-2">
                             <div>Completed</div>
                             <div class="escrow-col-2-s2">
                                 0
                             </div>
                        </div>
                    </v-col>
                </v-row>
                </div>
                 <div class="escrow-div">
                    <div class="escrow-header">Transaction</div>
                <v-row> 
                    <v-col cols="12" sm="12" md="4">
                        <div class="escrow escrow-col-3">
                            <div>Pending</div>
                             <div class="escrow-col-2-s2">
                                 0
                             </div>
                    
                        </div>
                    </v-col>
                     <v-col cols="12" sm="12" md="4">
                        <div class="escrow escrow-col-4">
                             <div>Completed</div>
                             <div class="escrow-col-2-s2">
                                 0
                             </div>
                        </div>
                    </v-col>
                </v-row>
                </div>

                <div class="overview-table">
                 <v-row>
                     <v-col cols="12" sm="12" md="8">
                <div class="table-1">
                <div style="color: #1F0E3E;margin-bottom:10px">Escrow Analytics</div>  <v-divider></v-divider>
                </div>
                     </v-col>
                     <v-col cols="12" sm="12" md="4">
                         <div class="table-2">
                  <div style="color: #1F0E3E;margin-bottom:10px">Transactions</div>
                  <v-divider></v-divider>
                </div>
                     </v-col>
                 </v-row>
                </div>
                
                 
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

}
</script>


<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
.d-col-2{padding:50px 70px;background:white;height:88vh;border-radius: 30px 0 0 0 !important;overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        
        }
.wallet-div{ margin-bottom: 50px;}
.wallet-header{font-size:18px; color: #2c125c8e;}
.wallet-value{background:#ECE9F2;color:#2C125C;text-align: center;width: 20%;border-radius: 10px;height: 100px;line-height: 100px;margin-top:20px;font-size:40px;}

.escrow-div{ margin-bottom: 50px;}
.escrow{border-radius:10px;padding:25px;height: 160px}
.escrow-col{  background: #F7E1EA; color: #1F0E3E;}
.escrow-col-2{  background: #F3FAD2; color: #1F0E3E;}
.escrow-col-3{  background: #E3E4FA; color: #1F0E3E;}
.escrow-col-4{  background: #E6EBFA; color: #1F0E3E;}
.escrow-header{font-size:18px; color: #2c125c8e;}
.escrow-col-2-s2{ font-size: 40px;}

.floating-spiral{ height: 270px; position: absolute; right:-150px;top:35%;}
.table-1{background:white;border-radius: 10px; border: 1px solid rgb(205, 205, 205); padding:30px;height:300px}
.table-2{background:white;border-radius: 10px; border: 1px solid rgb(205, 205, 205); padding:30px;height:300px}


@media (max-width: 991px) {

}
@media (max-width: 767px) {

}
@media (max-width: 479px) {

.d-col-2{padding:50px 20px;background:white;height:90vh;border-radius: 30px 30px 0 0 !important;overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        
        }
.wallet-div{ margin-bottom: 50px;}
.wallet-header{font-size:18px; color: #2c125c8e;}
.wallet-value{background:#ECE9F2;color:#2C125C;text-align: center;width: 100%;border-radius: 10px;height: 100px;line-height: 100px;margin-top:20px;font-size:40px;}

.escrow-div{ margin-bottom: 50px;}
.escrow{border-radius:10px;padding:25px;height: 160px}
.escrow-col{  background: #F7E1EA; color: #1F0E3E;}
.escrow-col-2{  background: #F3FAD2; color: #1F0E3E;}
.escrow-col-3{  background: #E3E4FA; color: #1F0E3E;}
.escrow-col-4{  background: #E6EBFA; color: #1F0E3E;}
.escrow-header{font-size:20px; color: #2c125c8e;}
.escrow-col-2-s2{ font-size: 40px;}

.floating-spiral{ height: 270px; position: absolute; right:-150px;top:35%;}
.table-1{background:white;border-radius: 10px; border: 1px solid rgb(205, 205, 205); padding:30px;height:300px}
.table-2{background:white;border-radius: 10px; border: 1px solid rgb(205, 205, 205); padding:30px;height:300px}

}
</style>