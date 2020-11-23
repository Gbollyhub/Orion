<template>
    <div>
        <app-header></app-header>
    <v-row class = "d-row" no-gutters>
        <v-col class = "hidden-sm-and-down d-col-1" cols="12" sm="12" md="2">
        <app-leftmenu></app-leftmenu>
        </v-col>
         <v-col style="background:#F7F7F7" cols="12" sm="12" md="10">
            <div class = "d-col-2">
                <div v-show="escrowList">
                        <div @click="toCreateEscrow" class="create-escrow">
              <v-icon style="font-size:20px;margin-right:5px" color="white">mdi-book-plus-multiple</v-icon>
              Create Escrow
            </div>
            <br>
<v-tabs  show-arrows  color="#6338B2" background-color="transparent">
    <v-tab class="sanitize">In Progress</v-tab>
    <v-tab class="sanitize">Finalized</v-tab>
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
							<td>Sage 45</td>
							<td>Lagos</td>
							<td>20</td>
                            <td>7000</td>
							<td style="color:#2BC448">Active</td>
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

            <app-create-escrow v-show="createEscrow"></app-create-escrow>  

            </div>
        </v-col>
    </v-row>
    </div>
</template>

<script>
import Header from '../../components/Dashboard/header'
import LeftMenu from '../../components/Dashboard/LeftMenu'
import CreateEscrow from './CreateEscrow'
export default {
  name: 'Escrow',
  components: {
      'app-header': Header,
      'app-leftmenu': LeftMenu,
      'app-create-escrow': CreateEscrow
  },
   data() {
		return {
            escrowList:true,
            createEscrow:false,
			headers: [
				'#',
				'Name',
				'Location',
				'Qty',
                'Price',
                'Status',
                '.'
			]
        }
        
    },
    methods: {
        toCreateEscrow(){
         this.escrowList = false
         this.createEscrow = true
        }
    }


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
.create-escrow{cursor:pointer;color:white;line-height:80px;text-align: center;border-radius:5px;background: #6338B2;height: 80px;width: 20%;font-size:14px;}

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

    .create-escrow{cursor:pointer;color:white;line-height:80px;text-align: center;border-radius:5px;background: #6338B2;height: 80px;width: 100%;font-size:14px;}


.d-col-2{padding:50px 20px;background:white;height:90vh;border-radius: 30px 30px 0 0 !important;overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        
        }


}

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

</style>