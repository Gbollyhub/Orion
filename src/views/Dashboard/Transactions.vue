<template>
    <div>
        <app-header></app-header>
    <v-row class = "d-row" no-gutters>
        <v-col class = "hidden-sm-and-down d-col-1" cols="12" sm="12" md="2">
        <app-leftmenu></app-leftmenu>
        </v-col>
         <v-col style="background:#F7F7F7" cols="12" sm="12" md="10">
            <div class = "d-col-2">
    
    
                <div class="transaction-div">
                <v-row v-show="transactionType"> 
                    <v-col cols="12" sm="12" md="4">
                        <div class="transaction transaction-col" @click="openIncoming">
                            <div>Incoming Transactions</div>
                             <div class="transaction-col-2-s2">
                                 0
                             </div>
                             <v-divider color="white"></v-divider>
                             <div style="color:white;font-size:12px">
                                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                             </div>
                        </div>
                    </v-col>
                     <v-col cols="12" sm="12" md="4">
                        <div class="transaction transaction-col-2">
                             <div>Initiated Transactions</div>
                             <div class="transaction-col-2-s2">
                                 0
                             </div>
                              <v-divider color="white"></v-divider>
                             <div style="color:white;font-size:12px">
                                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                             </div>
                        </div>
                    </v-col>
                </v-row>

             <div v-show="IncomingTransac">
                     <div @click="closeIncoming" style="cursor:pointer;color:#5D30AF;font-size:13px;margin-bottom:10px;">< Back</div>
                     <v-tabs show-arrows  color="#6338B2" background-color="transparent">
    <v-tab class="sanitize">In Progress</v-tab>
        <v-tab class="sanitize">Pending</v-tab>
    <v-tab class="sanitize">Completed</v-tab>
    <v-tab-item style="border-radius:20px">
        <v-card flat>
            <div class="table-div" id="scroll">
                     <table>
					<thead>
						<tr>
							<th v-for="header in headers" :key="header.id">{{ header }}</th>
						</tr>
					</thead>

					<tbody>
						<tr  v-for="(item,index) in 5" :key="index" >
							<td>1</td>
							<td> <v-avatar
                  size="36px"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
                <div style="margin-left:15px;display:inline-block">Sage 45</div></td>
							<td>Heavy Metal on flip</td>
							<td>Lagos</td>
                            <td>1</td>
							<td>7000</td>
                            	<td><v-btn class="sanitize" dark style="border-radius:15px" depressed color="#58D329">Continue Negotiating</v-btn></td>
                            <td>
                                 <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          color="#6338B2"
        >
         mdi-dots-horizontal
        </v-icon>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Edit</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Delete</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
                            </td>
						</tr>
					</tbody>
				</table>
                     </div>
        </v-card>
    </v-tab-item>
      <v-tab-item style="border-radius:20px">
        <v-card flat>
            <div class="table-div" id="scroll">
                     <table>
					<thead>
						<tr>
							<th v-for="header in headers2" :key="header.id">{{ header }}</th>
						</tr>
					</thead>

					<tbody>
						<tr  v-for="(item,index) in 5" :key="index" >
							<td>1</td>
							<td> <v-avatar
                  size="36px"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
                <div style="margin-left:15px;display:inline-block">Sage 45</div></td>
							<td>Heavy Metal on flip</td>
							<td>Lagos</td>
                            <td>1</td>
							<td>7000</td>
                            	<td style="color:#2BC448">Active</td>
                                <td style="color:#2BC448"><v-icon color="orange">mdi-minus-circle</v-icon></td>
                            <td>
                                 <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          color="#6338B2"
        >
         mdi-dots-horizontal
        </v-icon>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Edit</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Delete</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
                            </td>
						</tr>
					</tbody>
				</table>
                     </div>
        </v-card>
    </v-tab-item>

      <v-tab-item style="border-radius:20px">
        <v-card flat>
            <div class="table-div" id="scroll">
                     <table>
					<thead>
						<tr>
							<th v-for="header in headers3" :key="header.id">{{ header }}</th>
						</tr>
					</thead>

					<tbody>
						<tr  v-for="(item,index) in 5" :key="index" >
							<td>1</td>
							<td> <v-avatar
                  size="36px"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
                <div style="margin-left:15px;display:inline-block">Sage 45</div></td>
							<td>Heavy Metal on flip</td>
							<td>Lagos</td>
                            <td>1</td>
							<td>7000</td>
                            	    	<td style="color:#2BC448">Active</td>
                                <td style="color:#2BC448"><v-icon color="green">mdi-check-circle</v-icon></td>
                            <td>
                                 <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          color="#6338B2"
        >
         mdi-dots-horizontal
        </v-icon>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Edit</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Delete</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
                            </td>
						</tr>
					</tbody>
				</table>
                     </div>
        </v-card>
    </v-tab-item>
</v-tabs> 

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
          transactionType: true,
          IncomingTransac: false,
          headers: [
				'#',
				'Seller',
                'Name',
                'Location',
				'Qty',
                'Price',
                '.',
                '.'
            ],
             headers2: [
				'#',
				'Buyer',
                'Name',
                'Location',
				'Qty',
                'Price',
                'Status',
                'Transaction',
                '.'
            ],
             headers3: [
				'#',
				'Seller',
                'Name',
                'Location',
				'Qty',
                'Price',
                'Status',
                'Transaction',
                '.'
			]
      }
  },
  methods: {
      closeIncoming(){
          this.IncomingTransac = false
          this.transactionType = true
      },
      openIncoming(){
          this.IncomingTransac = true
          this.transactionType = false
      },

  }

}
</script>


<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
a {text-decoration: none;}
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

.transaction-div{ margin-bottom: 50px;}
.transaction{border-radius:10px;padding:25px;height: 180px; transition: all .2s;cursor: pointer;}
.transaction:hover {box-shadow:0 0px 17px -5px rgba(0, 0, 0, 0.51);}


.transaction-col{  background: #CC6AC9; color: #ffffff;}
.transaction-col-2{  background: #610F7F; color: #ffffff;}
.transaction-header{font-size:18px; color: #2c125c8e;}
.transaction-col-2-s2{ font-size: 40px;}

.floating-spiral{ height: 270px; position: absolute; right:-150px;top:35%;}
.table-1{background:white;border-radius: 10px; border: 1px solid rgb(205, 205, 205); padding:30px;height:300px}
.table-2{background:white;border-radius: 10px; border: 1px solid rgb(205, 205, 205); padding:30px;height:300px}

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

.transaction-div{ margin-bottom: 50px;}
.transaction{border-radius:10px;padding:25px;height: 180px}
.transaction-col{  background: #CC6AC9; color: #ffffff;}
.transaction-col-2{  background: #610F7F; color: #ffffff;}

.transaction-header{font-size:20px; color: #2c125c8e;}
.transaction-col-2-s2{ font-size: 40px;}

.floating-spiral{ height: 270px; position: absolute; right:-150px;top:35%;}
.table-1{background:white;border-radius: 10px; border: 1px solid rgb(205, 205, 205); padding:30px;height:300px}
.table-2{background:white;border-radius: 10px; border: 1px solid rgb(205, 205, 205); padding:30px;height:300px}

}
</style>