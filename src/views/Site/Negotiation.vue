<template>
  <div class="home">
      <div v-show="editModal" class="edit-bg">
        <div class="edit-div">
            <v-icon @click="editModal = false" class="form-close" style="font-size:25px" color="black">mdi-close</v-icon>
 <div class="form-header">Edit Escrow Details</div>
<br>
 <v-text-field color="#180A35" label="Location" placeholder="Lagos" outlined></v-text-field>   
  <v-text-field color="#180A35" label="Amount" placeholder="2000" outlined></v-text-field>  
    <v-text-field color="#180A35" label="Delivery Days" placeholder="10" outlined></v-text-field>     
    <v-btn text small class="sanitize" color="#5D30AF"> <v-icon color="#5D30AF">mdi-plus</v-icon> Add More Details</v-btn> 
    <br><br><br>
  <v-btn
        class="sanitize banner-btn"
        color="#FAA722"
        large
        depressed
        dark
        block
        >
       Save
      </v-btn>
        </div>
    </div>
    
    <app-header></app-header>
    
    <div class="nav-support hidden-sm-and-down">
        <li>Lorem</li>
         <li>Lorem</li>
          <li>Lorem</li>
           <li>Lorem</li>
    </div>

    <div class="product-details">
        <h2 class="product-details-header">Negotiation</h2>
      <v-row no-gutters>
          <v-col cols="12" sm="12" md="2">
          <div class="product-details-col-1">
          <img width="100%" src="https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph" alt=""/>
          <div class="product-details-name">Lorem ipsum dolor sit amet</div>
          <div class="product-details-price">N20,000</div>
          <br>
          <div style="color:#5D30AF;font-size:20px;margin-bottom:10px">Seller</div>
                 <v-avatar
                  size="36px"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
                <div style="color:#6338B2;margin-left:20px;display:inline-block">Sage 45</div>
          </div>
          </v-col>
           <v-col cols="12" sm="12" md="10">
                <div class="product-details-col-2">
                    <div class="chat-left">
            <v-avatar
                  size="36px"
                   class="hidden-sm-and-down"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
                <div class="chat-box-pack">
                   <span style="color:#2C125C;font-size:14px">Sage 45</span>  
                    <span style="margin-left:15px;color:#6338B2;font-size:14px;">Tue, 25th May, 2020</span>
                    <div class="chat-box">
                     <div style="font-size:14px;">Location: Lagos</div>
                     <div style="font-size:14px;">Amount: N25,000</div>
                    </div>
                
                    <v-btn style="margin-left:10px" depressed small class="sanitize" dark color="#58D329">Accept</v-btn>
                     <v-btn @click="editModal = true" style="margin-left:10px" depressed small class="sanitize" dark color="#FAA722">Edit</v-btn>
                      <v-btn style="margin-left:10px" outlined small class="sanitize" dark color="#FF0202">Decline</v-btn>
                       <v-btn style="margin-left:10px" depressed small class="sanitize" dark color="#6338B2">Pay</v-btn>
                </div>     
                    </div>


            <div class="chat-right">
                <div class="chat-box-pack-2">
                   <span style="color:#2C125C;font-size:14px">Sage 45</span>  
                    <span style="margin-left:15px;color:#6338B2;font-size:14px;">Tue, 25th May, 2020</span>
                    <div class="chat-box-2">
                     <div style="font-size:14px;">Location: Lagos</div>
                     <div style="font-size:14px;">Amount: N25,000</div>
                    </div>
                
                    <v-btn style="margin-left:10px" text small class="sanitize" color="#5D30AF"> <v-icon color="#5D30AF">mdi-plus</v-icon> Add More Details</v-btn>
                </div> 

             <v-avatar
                  size="36px"
                   style="margin-left:10px"
                   class="hidden-sm-and-down"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>  
               
              
                    </div>

                   

          </div>
           </v-col>
      </v-row>  
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
import Header from '../../components/Site/header2'
import Footer from '../../components/Site/footer'
export default {
  name: 'Home',
  components: {
      'app-header': Header,
      'app-footer': Footer
  },
  data(){
    return{
            images:['https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph'],
            wishColor: '',
            ratings: 3 ,  
            editModal: false
    }
  },
  methods:{
       
  }
    
}
</script>

<style lang="scss" scoped>
@mixin clearfix {
    &::after {
      content: "";
    display: table;
    clear: both;  
    } 
}
.form-close{ top:20px;right:30px;position:absolute;}
a{ text-decoration: none;}
.forgotPass{ padding: 0 100px;}
.form-header{font-size:20px;color:#180A35;text-align: center; }
.form-sub{color:#FAA722}

.edit-bg { margin-top:-64px;  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.edit-div { position: relative; border-radius:8px; width: 45%; height: 80vh; padding: 50px 120px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }

.chat-left{margin-bottom: 40px;display: block; overflow: hidden;}
.chat-right{margin-bottom: 40px;float: right;display: block;overflow: hidden;}
.chat-box-pack{display:inline-block}
.chat-box-pack-2{display:inline-block}
.chat-box{background:#DDDDDD;padding:20px;border-radius: 0 10px 10px 10px;margin-bottom:10px;width:300px;}
.chat-box-2{background: #2C125C;padding:20px;border-radius: 10px 0 10px 10px;margin-bottom:10px;color:white;width:300px;}
.product-details{padding: 30px 5%;}
.product-details-name{margin-bottom: 10px;}
.product-details-price{color:#2C125C;font-size:17px}
.product-details-header{font-size:30px;margin-bottom:20px;}
.product-details-col-1{padding:20px}
.product-details-col-2{padding:40px;background:#EFEFEF; border-radius: 10px;min-height:500px; }

 .app-text-field-search {
  height: 40px;
  width: 100%;  
  padding: 10px;
  font-size: 15px;
  transition: all .2s;
  border-radius: 5px;
  background: rgb(234, 234, 234);
  margin-bottom:20px;
  margin-top: 15px;
  &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #FAA722;
    outline: none;
  }

 } 


.nav-support{
    margin-top:64px;
    background: #68558A;
    line-height: 50px;
    height: 50px;
    padding: 0 5%;

    li{
        margin-right:20px;
        display: inline-block;
        color: white;
    }
}

.section-info{background: #E3E4FA;padding:20px;text-align: center;}
.escrow-terms { margin-bottom: 10px; font-size:14px;}



@media (max-width: 991px) {

}
@media (max-width: 767px) {

.form-close{ top:20px;right:20px;position:absolute;}
a{ text-decoration: none;}
.forgotPass{ padding: 0 100px;}
.form-header{font-size:20px;color:#180A35;text-align: center; }
.form-sub{color:#FAA722}

.edit-bg { margin-top:0;  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.edit-div { position: relative; border-radius:8px; width: 85%; height: 80vh; padding: 30px 20px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }

.chat-left{margin-bottom: 30px;display: block; overflow: hidden;}
.chat-right{margin-bottom: 30px;float: right;display: block;overflow: hidden;}
.chat-box-pack{display:inline-block}
.chat-box-pack-2{display:inline-block}
.chat-box{background:#DDDDDD;padding:20px;border-radius: 0 10px 10px 10px;margin-bottom:10px;width:300px;}
.chat-box-2{background: #2C125C;padding:20px;border-radius: 10px 0 10px 10px;margin-bottom:10px;color:white;width:300px;}
.product-details{padding: 70px 5%;}
.product-details-name{margin-bottom: 10px;}
.product-details-price{color:#2C125C;font-size:17px}
.product-details-header{font-size:30px;margin-bottom:20px;}
.product-details-col-1{padding:20px}
.product-details-col-2{padding:20px;background:#EFEFEF; border-radius: 10px;min-height:500px; }

 .app-text-field-search {
  height: 40px;
  width: 100%;  
  padding: 10px;
  font-size: 15px;
  transition: all .2s;
  border-radius: 5px;
  background: rgb(234, 234, 234);
  margin-bottom:20px;
  margin-top: 15px;
  &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #FAA722;
    outline: none;
  }

 } 



.nav-support{
    margin-top:64px;
    background: #68558A;
    line-height: 50px;
    height: 50px;
    padding: 0 5%;

    li{
        margin-right:20px;
        display: inline-block;
        color: white;
    }
}

.section-info{background: #E3E4FA;padding:20px;text-align: center;}
.escrow-terms { margin-bottom: 10px; font-size:14px;}

}
@media (max-width: 479px) {

.form-close{ top:20px;right:20px;position:absolute;}
a{ text-decoration: none;}
.forgotPass{ padding: 0 100px;}
.form-header{font-size:20px;color:#180A35;text-align: center; }
.form-sub{color:#FAA722}

.edit-bg { margin-top:0;  position: fixed;width: 100%; height: 100%;background:#070707a3;z-index: 9999999; display: flex; justify-content: center; align-items: center; }
.edit-div { position: relative; border-radius:8px; width: 85%; height: 80vh; padding: 30px 20px;background:#ffffff;z-index: 99999999; overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}

 }

.chat-left{margin-bottom: 30px;display: block; overflow: hidden;}
.chat-right{margin-bottom: 30px;float: right;display: block;overflow: hidden;}
.chat-box-pack{display:inline-block}
.chat-box-pack-2{display:inline-block}
.chat-box{background:#DDDDDD;padding:20px;border-radius: 0 10px 10px 10px;margin-bottom:10px;width:300px;}
.chat-box-2{background: #2C125C;padding:20px;border-radius: 10px 0 10px 10px;margin-bottom:10px;color:white;width:300px;}
.product-details{padding: 70px 5%;}
.product-details-name{margin-bottom: 10px;}
.product-details-price{color:#2C125C;font-size:17px}
.product-details-header{font-size:30px;margin-bottom:20px;}
.product-details-col-1{padding:20px}
.product-details-col-2{padding:20px;background:#EFEFEF; border-radius: 10px;min-height:500px; }

 .app-text-field-search {
  height: 40px;
  width: 100%;  
  padding: 10px;
  font-size: 15px;
  transition: all .2s;
  border-radius: 5px;
  background: rgb(234, 234, 234);
  margin-bottom:20px;
  margin-top: 15px;
  &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #FAA722;
    outline: none;
  }

 } 



.nav-support{
    margin-top:64px;
    background: #68558A;
    line-height: 50px;
    height: 50px;
    padding: 0 5%;

    li{
        margin-right:20px;
        display: inline-block;
        color: white;
    }
}

.section-info{background: #E3E4FA;padding:20px;text-align: center;}
.escrow-terms { margin-bottom: 10px; font-size:14px;}


}
</style>