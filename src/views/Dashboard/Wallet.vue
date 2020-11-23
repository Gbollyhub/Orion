<template>
    <div>
        
         <div v-show="fundModal" class="edit-bg">
        <div class="edit-div">
            <v-icon @click="fundModal = false" class="form-close" style="font-size:25px" color="black">mdi-close</v-icon>
            <br><br>
 <div class="form-header">How much do you want to fund your wallet with?</div>
<br>
    <v-text-field color="#180A35" label="Amount" placeholder="N8000" outlined></v-text-field>
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


 <div v-show="transferModal" class="transfer-bg">
        <div class="transfer-div">
            <v-icon @click="transferModal = false" class="form-close" style="font-size:25px" color="black">mdi-close</v-icon>
            <br><br>
 <div class="form-header">Transfer the sum of N8000 to</div>
<br>
      <div class="card-card2"> 
                                        <div style="color:white;font-size:12px;margin-bottom:10px;"> 
                                               RECIPIENT NAME
                                               <br>
                                               <span style="fonts-size:18px;"> Kola Binary </span>
                                              </div>
                                              
                                              <div style="color:white;font-size:12px"> 
                                               WALLET ID
                                               <br>
                                               <span style="fonts-size:18px;">29393939</span>
                                              </div>
                                      <br>
                        
              </div>
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
        <v-col class="hidden-sm-and-down d-col-1" cols="12" sm="12" md="2">
        <app-leftmenu></app-leftmenu>
        </v-col>
         <v-col style="background:#F7F7F7" cols="12" sm="12" md="10">
            <div class="d-col-2">
    
                <v-row v-show="walletView">
                    <v-col cols="12" sm="12" md="6">
                       <v-btn @click="toWithdraw" class="sanitize" style="margin-right:10px;padding-top:25px;padding-bottom:25px;" dark outlined color="#2C125C">Withdraw Funds</v-btn>
                         <v-btn @click="toTransfer" class="sanitize" style="padding-top:25px;padding-bottom:25px;" dark outlined color="#2C125C">Transfer Funds</v-btn>
                         <br><br>
                         <v-row>
                             <v-col cols="12" sm="12" md="8">
                                  <div class="wallet-card">
                                    
                                      <div class="wallet-header">WALLET BALANCE</div>
                                       <div class="wallet-sub">N5,000,000</div>
                                       <img  class="wallet-img" src="../.././assets/walletcard.svg" alt=""> 
                                  </div>
                             </v-col>
                              <v-col cols="12" sm="12" md="4">
                                       <div style="cursor:pointer" @click="fundModal = true" class="fund-card">
                                           <v-icon color="white">mdi-plus-circle-outline</v-icon>
                                           <br>
                                                Fund Wallet
                                       </div>
                             </v-col>
                         </v-row>

                         <v-divider></v-divider>

          <div class="table-div" id="scroll">
                     <table>
					<thead>
						<tr>
							Recent Transactions
						</tr>
					</thead>

					<tbody>
						<tr  v-for="(item,index) in 5" :key="index" >
							<td>
                         <v-icon color="black">mdi-send-circle</v-icon>
                <div style="margin-left:5px;display:inline-block">Wallet Top Up</div> <div style="margin-left:30px;font-size:12px">Credit</div></td>
							<td>-N7000</td>
						</tr>
					</tbody>
				</table>
                     </div>

                    </v-col>
                    <v-col cols="12" sm="12" md="6" style="border-left:1px solid #f0f0f0">
                      <v-tabs show-arrows  color="#6338B2" background-color="transparent">
    <v-tab class="sanitize">Cards</v-tab>
        <v-tab class="sanitize">Banks</v-tab>
    <v-tab-item>
        <v-card style = "padding:20px;" flat>
            <br>
              <div class="card-card"> 
                                      <div class="card-header">**** **** **** 5674</div>
                                      <br>
                                      <v-row>
                                          <v-col cols="6"> 
                                              <div style="color:white;font-size:8px"> 
                                               CARD HOLDER
                                               <br>
                                               Kola Binary
                                              </div>
                                              </v-col>
                                                <v-col cols="6"> 
                                              <div style="color:white;font-size:8px"> 
                                               EXPIRES
                                               <br>
                                               09/22
                                              </div>
                                              </v-col>
                                      </v-row>
                                       <img  class="card-img" src="../.././assets/mastercard.svg" alt=""> 
              </div>
              <br>
        </v-card>
    </v-tab-item>
                      </v-tabs>
                         <br>
              <v-divider></v-divider>
               <div style="padding:20px;color:#6338B2">Additional Stuff</div>
                    </v-col>
                </v-row>


                <div v-show="withdrawFund">
                     <div @click="toWallet" style="cursor:pointer;color:#5D30AF;font-size:13px;margin-bottom:10px;">< Back </div>
                      <div class="create-escrow-div">
                 <div class="stepper-title">How much do you want to withdraw?</div>
        <v-text-field style="" color="#180A35" label="Amount" placeholder="N6000" outlined></v-text-field>
         <v-text-field style="height:70px" color="#180A35" label="Bank" placeholder="Uba bank" outlined></v-text-field>
         <v-btn style="" text small class="sanitize" color="#5D30AF"> <v-icon color="#5D30AF">mdi-plus</v-icon> Add Bank Account</v-btn>
        <br>
         <br><br>
         <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
        >
       Next
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn> 
      </div>

                </div>

                 <div v-show="transferFund">
             <div @click="toWallet"  style="cursor:pointer;color:#5D30AF;font-size:13px;margin-bottom:10px;">< Back </div>
                      <div class="create-escrow-div">
                 <div class="stepper-title">How much do you want to transfer?</div>
        <v-text-field style="" color="#180A35" label="Amount" placeholder="N6000" outlined></v-text-field>
         <v-text-field style="height:70px" color="#180A35" label="Wallet ID" placeholder="OR-39384283" outlined></v-text-field>
         <br><br>
         <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        x-large
        depressed
        dark
        @click= "transferModal = true"
        >
       Next
       <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn> 
      </div>

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
  data(){
      return{
          fundModal: false,
          walletView: true,
          withdrawFund: false,
          transferFund: false,
          transferModal: false,
      }
  },
  methods:{
      toWallet(){
          this.withdrawFund = false
          this.transferFund = false
          this.walletView = true
      },
       toWithdraw(){
          this.withdrawFund = true
          this.transferFund = false
          this.walletView = false
      },
       toTransfer(){
          this.withdrawFund = false
          this.transferFund = true
          this.walletView = false
      }
  }
}
</script>


<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
a{text-decoration: none;;}
.stepper-title{color:#2C125C;font-size:30px;margin-bottom: 20px;}
.create-escrow-div{ width: 40%;}
.form-header{ font-size: 20px; color: #2C125C;}
.d-col-2{padding:50px 70px;background:white;height:88vh;border-radius: 30px 0 0 0 !important;overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        
        }

.edit-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.edit-div { position: relative; border-radius:8px; width: 45%; height: 60vh; padding: 50px 120px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }

 
.transfer-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.transfer-div { text-align:center; position: relative; border-radius:8px; width: 45%; height: 65vh; padding: 50px 120px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

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

.card-card { width:60%; background: #68558A;padding: 40px 30px 0 30px;border-radius:10px; color: white; height:130px;position: relative;margin-bottom:10px}
.card-card2 {text-align: left; width:60%; background: #68558A;padding: 20px 30px 0 30px;border-radius:10px; color: white; height:130px;position: relative;margin:0 auto;}

.card-header { font-size: 12px; z-index:999;}
.card-sub { font-size: 10px;z-index:999;font-weight: 700;}
.card-img { position: absolute; top: 10px; right: 10px;z-index:10;}


.fund-card { height: 100px;background: #2C125C;text-align: center; border-radius: 10px; color: white;padding-top:30px;font-size:14px}

 #scroll::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	background-color: #f5f5f5;
	height: 5px;
}

#scroll::-webkit-scrollbar {
	width: 5px;
	background-color: #f5f5f5;
	height: 5px;
}

#scroll::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: #6338B2;
	height: 5px;
}
.table-div {
	overflow-y: hidden;
	overflow-x: scroll;
	width: 100%;
    padding: 20px 0;

}
table {
	min-width: 100%;
	border-collapse: collapse;
	margin: 0 auto;
	border-radius: 10px;
    background:white;
}

/* Zebra striping */
/* tr:nth-of-type(odd) {
	background: #eee;
	} */

th {
	background: #F8F8F8;
	color: #211C3C;
	padding: 15px;
	font-size: 11px;
    text-transform: uppercase;
    font-weight: 400;
     text-align: left;
}
td {
	color: rgb(54, 54, 54);
	border-bottom: 0.5px solid #efefef;
	padding: 20px;
	transition: all 0.2s;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 13px;
    text-align: left;
}
tr {
	background: transparent;
     cursor: pointer;
}

@media (max-width: 991px) {

}
@media (max-width: 767px) {

}
@media (max-width: 479px) {
a{text-decoration: none;;}
.stepper-title{color:#2C125C;font-size:20px;margin-bottom: 20px;}
.create-escrow-div{ width: 100%;}
.form-header{ font-size: 20px; color: #2C125C;}

.transfer-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.transfer-div { text-align:center; position: relative; border-radius:8px; width: 90%; height: auto; padding: 50px 20px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }


.edit-bg {  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.edit-div { position: relative; border-radius:8px; width: 90%; height: auto; padding: 50px 20px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }

.d-col-2{padding:50px 20px;background:white;height:90vh;border-radius: 30px 30px 0 0 !important;overflow-y: scroll;

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

.card-card { width:100%; background: #68558A;padding: 40px 30px 0 30px;border-radius:10px; color: white; height:130px;position: relative;margin-bottom:10px}
.card-header { font-size: 12px; z-index:999;}
.card-sub { font-size: 10px;z-index:999;font-weight: 700;}
.card-img { position: absolute; top: 10px; right: 10px;z-index:10;}


.fund-card { height: 100px;background: #2C125C;text-align: center; border-radius: 10px; color: white;padding-top:30px;font-size:14px}

 #scroll::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	background-color: #f5f5f5;
	height: 5px;
}

#scroll::-webkit-scrollbar {
	width: 5px;
	background-color: #f5f5f5;
	height: 5px;
}

#scroll::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: #6338B2;
	height: 5px;
}
.table-div {
	overflow-y: hidden;
	overflow-x: scroll;
	width: 100%;
    padding: 20px 0;

}
table {
	min-width: 100%;
	border-collapse: collapse;
	margin: 0 auto;
	border-radius: 10px;
    background:white;
}

/* Zebra striping */
/* tr:nth-of-type(odd) {
	background: #eee;
	} */

th {
	background: #F8F8F8;
	color: #211C3C;
	padding: 15px;
	font-size: 11px;
    text-transform: uppercase;
    font-weight: 400;
     text-align: left;
}
td {
	color: rgb(54, 54, 54);
	border-bottom: 0.5px solid #efefef;
	padding: 20px;
	transition: all 0.2s;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 13px;
    text-align: left;
}
tr {
	background: transparent;
     cursor: pointer;
}




}
</style>