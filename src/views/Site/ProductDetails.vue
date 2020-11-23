<template>
  <div class="home">
    <app-header></app-header>
    <div class="nav-support hidden-sm-and-down">
        <li>Lorem</li>
         <li>Lorem</li>
          <li>Lorem</li>
           <li>Lorem</li>
    </div>
        <div class="product-details-content">
            <div class="bread-crumbs">
             <b> <p class="bread-crumbs-p"><span style="color:grey;" class="bread-crumbs-p"> breadcrumb > breadcrumb2 > breadcrumb3 </span></p></b>
            </div>
        
            <div class="product-details-content-div">
                  <input  style="float:left;width:100%" type="text" class="app-text-field-search hidden-md-and-up" placeholder="Search for products">
             <div class="product-row-1">
                <div  class="product-row-1-col-1">
                     <v-carousel hide-delimiters class="hidden-sm-and-down">
                        <v-carousel-item v-for="(item,index) in images" :key="index" :src="item" hide-delimiters></v-carousel-item>
                    </v-carousel>
                     <v-carousel hide-delimiters class="hidden-md-and-up" height="300">
                        <v-carousel-item v-for="(item,index) in images" :key="index" :src="item" hide-delimiters></v-carousel-item>
                    </v-carousel>
                </div>
                <div class="product-row-1-col-2">
                    <h3 class="product-row-1-col-2-product-name">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</h3>
                   <br>
                   <div class="product-row-1-col-2-product-div"> 
                  <!-- <p class="product-row-1-col-2-product-rated-by">250 people rated this product</p> -->

                    <h3 class="product-row-1-col-2-product-price">N10000</h3>
                       <br><br>
                       
                
                    <div class="escrow-terms">Stock: 100</div>
                     <div class="escrow-terms">Payment Delivery: Yes</div>
                      <div class="escrow-terms">Delivery Days: 6</div>
                       <div class="escrow-terms">Location: Lagos</div>
                  </div>
                   <br><br>
                               <div>Sold by <span style="color:#6338B2">Orion5 Cadets</span></div>
            <v-rating dense size="18" color="orange" background-color="orange lighten-3" v-model="ratings" readonly></v-rating>
            <br><br>
                <v-btn
                href="/negotiation"
                class="hidden-sm-and-down"
                 x-large
                 style="text-transform:none;margin-right:20px;"
                 depressed
                 dark
                color="#FAA722">Negotiate</v-btn>

                <v-btn
                  class="hidden-sm-and-down"
                x-large
                 style="text-transform:none;"
                 depressed
                 dark
                color="#6338B2">Accept terms</v-btn>
                     <v-btn
                     class="hidden-md-and-up"
                     block
                 x-large
                 style="text-transform:none;margin-bottom:20px"
                 depressed
                 dark
                color="#FAA722">Negotiate</v-btn>

                <v-btn
                class="hidden-md-and-up"
                block
                x-large
                 style="text-transform:none;"
                 depressed
                 dark
                color="#6338B2">Accept terms</v-btn>
                <v-btn  class="wish-icon-btn focus-btn hidden-sm-and-down" :style='{color: wishColor}' icon><v-icon class="wish-icon">mdi-heart</v-icon></v-btn>
                  <br><br><br>
                <div style="color:#180A35;font-size:16px;margin-bottom:15px;">Share with friends</div>
                        <a  target="_blank"><v-icon style="font-size:30px;margin-right:10px;" color="#68558A" dark>mdi-facebook</v-icon></a>
        <a  target="_blank"><v-icon style="font-size:30px;margin-right:10px;" color="#68558A" dark>mdi-twitter</v-icon></a>
        <a  target="_blank"><v-icon style="font-size:30px;margin-right:10px;" color="#68558A" dark>mdi-instagram</v-icon></a>
                </div>
            </div> 
            </div>
        <v-divider></v-divider>
        <div class="product-details-div">
           <v-tabs slider-color="#6338B2" color="#6338B2" show-arrows>
    <v-tab class="product-details-tab">Overview</v-tab>
    <v-tab class="product-details-tab">Seller Review</v-tab>
    <v-tab class="product-details-tab">Additional Information</v-tab>
    <v-tab-item class="product-details-tab-item">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</v-tab-item>
    <v-tab-item class="product-details-tab-item">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
    </v-tab-item>
    <v-tab-item class="product-details-tab-item">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</v-tab-item>
  </v-tabs>
        </div>
           <div>
               <div class="related-product">
                    <p class="related-product-p">You might also like</p>
               </div>
              <div class="related-product-slide-group">
                 <v-slide-group show-arrows >
                    <v-slide-item v-for="(pro,index) in 7" :key="index" v-slot:default="{ active, toggle }">

                       <v-card class="new-product-card2" flat>
               <div class="new-product-card-col-1">
                   <div  class="new-product-card-col-1-img-div">
                      <img class="new-product-card-col-1-img" src="../.././assets/PS4.svg" alt="product">
                      <v-btn icon color="white" style= "position:absolute;right:0;bottom:0;font-size:30px">
                          <v-icon color="white" style= "font-size:30px">mdi-heart-circle</v-icon> 
                      </v-btn>
                     
                  </div>
               </div>
               <div class="new-product-card-col-2">
                   <div class="new-product-card-col-2-div">
                 <p class="new-product-name">Product Name</p>
                     <v-card-actions style="margin:0;padding:0"><p class="new-product-price">N1000</p><v-spacer></v-spacer> <p class="new-product-price">Lagos</p></v-card-actions>
               
                <p style="text-align:justify;font-size:13px;color:#575260;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                   </div>

                <v-btn large block class="focus-btn outline-btn" style="text-transform:none;" outlined color="#FAA722">View Details</v-btn>
                   </div>
                </v-card>

                
                    </v-slide-item>
                </v-slide-group>
            </div>
            <br>
              </div>
			
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
            ratings: 3   
    
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


.product-details-tab-item{
    padding: 20px 0;
    font-size:14px;
    color: rgb(111, 111, 111);
}

.product-details-tab{
    text-transform: none;
    font-size: 16px;
}

.product-details-div{
    padding: 50px 8%;
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

   .product-details-content{
       padding: 20px 0 100px 0;
       .bread-crumbs{
           padding: 0 5%;
        //    @include respond(phone){ padding: 0 20px; } ;
        //    @include respond(tablet){ padding: 0 20px; } ;

           .bread-crumbs-p {
            font-size: 15px;
            font-weight: 600;
        
            // @include respond(phone){ font-size: 12px; } ;
            // @include respond(tablet){ font-size: 12px; } ;
            
        }

           .bread-crumbs-p a{
        font-size: 15px;
        font-weight: 600;
    
        // @include respond(phone){ font-size: 12px; } ;
        // @include respond(tablet){ font-size: 12px; } ;
        
    }
       }
       

      .product-details-content-div{
        padding: 0 100px 20px 100px;
        // @include respond(phone){ padding: 0 10px; } ;
        // @include respond(tablet){ padding: 0 10px; } ;
       .product-row-1{
        padding: 30px;
        background-color: white;
        @include clearfix;
        max-width: 100%;
        margin: 0 auto;

        // @include respond(phone){ padding: 10px; } ;
        // @include respond(tablet){ padding: 10px; } ;

        .product-row-1-col-1{
            padding: 25px;
            float: left;
            width: 48%;
            margin-right: 4%;

        //     @include respond(phone){ width: 100%; margin-right: 0;} ;
        // @include respond(tablet){ width: 100%; margin-right: 0;} ;
        }

      .product-row-1-col-2{
         position: relative;
         padding: 0 70px ;
         float: left;
         width: 48%;
        //  @include respond(phone){ width: 100%; padding: 0; } ;
        // @include respond(tablet){ width: 100%; padding: 0;} ;

         .product-row-1-col-2-product-name{
              font-weight: 700;
              font-size: 25px;
          }
        .product-row-1-col-2-product-company{
            font-size: 15px;
            font-weight: 600;
            color: #FAA722;
        }
      .product-row-1-col-2-product-div{
        line-height: 15px;
      }
     .product-row-1-col-2-product-rated-by{
        font-size: 13px;
        font-weight: 600;
        color: #aaaaaa;
     }
     .product-row-1-col-2-product-discount{
        font-size: 13px;
        font-weight: 600;
        color: #aaaaaa;
     }
     .product-row-1-col-2-product-price{
            color: #180A35;
            font-size: 30px;
            font-weight: bold;
     }
      }
    }
       .product-row-2{
        @include clearfix;
        max-width: 100%;
        margin: 0 auto;
        
        .product-row-2-col-1{
            border: 2px solid #e3e3e9;
            padding: 20px 30px;
            background-color: white;
            float: left;
            width: 61%;
            margin-right: 4%;

            // @include respond(phone){ width: 100%; margin-right: 0; padding: 20px 20px;margin-bottom: 30px;} ;
            // @include respond(tablet){ width: 100%; margin-right: 0; padding: 20px 20px;margin-bottom: 30px;} ;
    

        .product-row-2-header{
            font-size: 20px;
            font-weight: 600;
            color: #1b1b1b;
        }
        .product-row-2-text{
            text-align: justify;
            font-size: 14px;
            color: rgb(104, 104, 104);
        }
        .product-listing{
            font-size: 15px;
            color: #686868;
            margin-bottom:10px;
        }
        }
        .product-row-2-col-2{
            border: 2px solid #e3e3e9;
            padding: 20px 30px;
            background-color: white;
            float: left;
            width: 35%;

            // @include respond(phone){ width: 100%;  padding: 20px 20px;} ;
            // @include respond(tablet){ width: 100%; padding: 20px 20px;} ;


            .product-row-2-header{
                font-size: 20px;
                font-weight: 600;
                color: 
                #1b1b1b;
            }
            
            .product-row-2-company{
                font-size: 18px;
                font-weight: 600;
                color: #FAA722;
                text-transform: capitalize;
            }
            .product-row-2-location{
                font-size: 15px;
                font-weight: 600;
                color: #686868;
                text-transform: capitalize;
            }
        }
       
    }
      }
  
   }

   .related-product{
       width: 100%;
       display: block;
       padding: 0 100px;
       
    //    @include respond(phone){ padding: 0px 20px;} ;
    //    @include respond(tablet){  padding: 0px 20px;} ;
       
      .related-product-p{
       font-size: 25px;
       font-weight: 600;
       color: #1b1b1b;
       margin-bottom: 30px;

   } 
   }
   
   .related-product-slide-group{
       padding: 0 20px;
    //    @include respond(phone){ padding: 0} ;
    //    @include respond(tablet){  padding: 0} ;
   }

   .wish-icon-btn{
  margin-left:20px
   }

    .new-product-card2{
        background-color: white;
        position: relative;
            &:hover .new-product-details-top{
                display: block;
            }
        }
.new-product-card-col-1{ width: 100%;height: 70%;padding: 10px 0;
.new-product-card-col-1-img-div{position:relative;margin: 0 auto;width: 170px;height: 170px;object-fit: scale-down;
.new-product-card-col-1-img{width: 100%;height: 170px; }
            } }
.new-product-card-col-2{padding: 10px 10px;width: 100%;height: 30%;
 .new-product-card-col-2-div{line-height: 1.1;
 .new-product-name{color:#575260; display: block; font-weight: 700; font-size: 16px; width: 90%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.new-product-price{float: left;color:#575260;font-size: 14px; }}
        }
.section-info{background: #E3E4FA;padding:20px;text-align: center;}
.escrow-terms { margin-bottom: 10px; font-size:14px;}



@media (max-width: 991px) {

}
@media (max-width: 767px) {


}
@media (max-width: 479px) {


.product-details-tab-item{
    padding: 20px 0;
    font-size:14px;
    color: rgb(111, 111, 111);
}

.product-details-tab{
    text-transform: none;
    font-size: 14px;
}

.product-details-div{
    padding: 0px 20px;
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

   .product-details-content{
       padding: 20px 0 100px 0;
       .bread-crumbs{
           padding: 0 5%;
        //    @include respond(phone){ padding: 0 20px; } ;
        //    @include respond(tablet){ padding: 0 20px; } ;

           .bread-crumbs-p {
            font-size: 15px;
            font-weight: 600;
        
            // @include respond(phone){ font-size: 12px; } ;
            // @include respond(tablet){ font-size: 12px; } ;
            
        }

           .bread-crumbs-p a{
        font-size: 15px;
        font-weight: 600;
    
        // @include respond(phone){ font-size: 12px; } ;
        // @include respond(tablet){ font-size: 12px; } ;
        
    }
       }
       

      .product-details-content-div{
        padding: 0 10px;
        // @include respond(phone){ padding: 0 10px; } ;
        // @include respond(tablet){ padding: 0 10px; } ;
       .product-row-1{
        padding: 30px;
        background-color: white;
        @include clearfix;
        max-width: 100%;
        margin: 0 auto;

        // @include respond(phone){ padding: 10px; } ;
        // @include respond(tablet){ padding: 10px; } ;

        .product-row-1-col-1{
          width: 100%; margin-right: 0;

        //     @include respond(phone){ width: 100%; margin-right: 0;} ;
        // @include respond(tablet){ width: 100%; margin-right: 0;} ;
        }

      .product-row-1-col-2{
      width: 100%; padding: 0;
        //  @include respond(phone){ width: 100%; padding: 0; } ;
        // @include respond(tablet){ width: 100%; padding: 0;} ;

         .product-row-1-col-2-product-name{
              font-weight: 700;
              font-size: 20px;
          }
        .product-row-1-col-2-product-company{
            font-size: 15px;
            font-weight: 600;
            color: #FAA722;
        }
      .product-row-1-col-2-product-div{
        line-height: 15px;
      }
     .product-row-1-col-2-product-rated-by{
        font-size: 13px;
        font-weight: 600;
        color: #aaaaaa;
     }
     .product-row-1-col-2-product-discount{
        font-size: 13px;
        font-weight: 600;
        color: #aaaaaa;
     }
     .product-row-1-col-2-product-price{
            color: #180A35;
            font-size: 17apx;
            font-weight: bold;
     }
      }
    }
       .product-row-2{
        @include clearfix;
        max-width: 100%;
        margin: 0 auto;
        
        .product-row-2-col-1{
            border: 2px solid #e3e3e9;
            padding: 20px 30px;
            background-color: white;
            float: left;
            width: 61%;
            margin-right: 4%;

            // @include respond(phone){ width: 100%; margin-right: 0; padding: 20px 20px;margin-bottom: 30px;} ;
            // @include respond(tablet){ width: 100%; margin-right: 0; padding: 20px 20px;margin-bottom: 30px;} ;
    

        .product-row-2-header{
            font-size: 20px;
            font-weight: 600;
            color: #1b1b1b;
        }
        .product-row-2-text{
            text-align: justify;
            font-size: 14px;
            color: rgb(104, 104, 104);
        }
        .product-listing{
            font-size: 15px;
            color: #686868;
            margin-bottom:10px;
        }
        }
        .product-row-2-col-2{
            border: 2px solid #e3e3e9;
            padding: 20px 30px;
            background-color: white;
            float: left;
            width: 35%;

            // @include respond(phone){ width: 100%;  padding: 20px 20px;} ;
            // @include respond(tablet){ width: 100%; padding: 20px 20px;} ;


            .product-row-2-header{
                font-size: 20px;
                font-weight: 600;
                color: 
                #1b1b1b;
            }
            
            .product-row-2-company{
                font-size: 18px;
                font-weight: 600;
                color: #FAA722;
                text-transform: capitalize;
            }
            .product-row-2-location{
                font-size: 15px;
                font-weight: 600;
                color: #686868;
                text-transform: capitalize;
            }
        }
       
    }
      }
  
   }

   .related-product{
       width: 100%;
       display: block;
       padding: 0 100px;
       
    //    @include respond(phone){ padding: 0px 20px;} ;
    //    @include respond(tablet){  padding: 0px 20px;} ;
       
      .related-product-p{
       font-size: 25px;
       font-weight: 600;
       color: #1b1b1b;
       margin-bottom: 30px;

   } 
   }
   
   .related-product-slide-group{
       padding: 0 20px;
    //    @include respond(phone){ padding: 0} ;
    //    @include respond(tablet){  padding: 0} ;
   }

   .wish-icon-btn{
  margin-left:20px
   }

    .new-product-card2{
        background-color: white;
        position: relative;
            &:hover .new-product-details-top{
                display: block;
            }
        }
.new-product-card-col-1{ width: 100%;height: 70%;padding: 10px 0;
.new-product-card-col-1-img-div{position:relative;margin: 0 auto;width: 170px;height: 170px;object-fit: scale-down;
.new-product-card-col-1-img{width: 100%;height: 170px; }
            } }
.new-product-card-col-2{padding: 10px 10px;width: 100%;height: 30%;
 .new-product-card-col-2-div{line-height: 1.1;
 .new-product-name{color:#575260; display: block; font-weight: 700; font-size: 16px; width: 90%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.new-product-price{float: left;color:#575260;font-size: 14px; }}
        }
.section-info{background: #E3E4FA;padding:20px;text-align: center;}
.escrow-terms { margin-bottom: 10px; font-size:14px;}


}
</style>