<template>
  <div class="home">
    <app-header></app-header>

        <div class="category-content">
           <div class="category-row">
               <div class="category-col-1">
                  <v-card flat class="category1-card">
					  <div> 
<p  class="category1-card-header">Categories</p>
								<v-row v-for="(item, index) in 9" :key="index" no-gutters  style="height:24px;">
								<v-col style="height:24px" cols="6" sm="9" md="9">
							   <p class="category-break" style="color:#7a7a7a;font-size:13px !important;margin:0 !important;"><v-icon style="font-size:12px;color:#7a7a7a;">mdi-chevron-right</v-icon>Lorem ipsum</p>
								</v-col>
								<v-col cols="6" sm="3" md="3" >
								<p style="font-size:13px">-(100)</p>
								</v-col>
							</v-row>
						<br>
                        <div>
						<div class="price-range">
							 <p style="float:left;font-size:15px;">Price Range</p>
							 <p @click="priceRange" style="cursor:pointer;float:right;color:#FAA722;font-size:13px;font-weight:600;"> <v-icon x-small color="#FAA722">mdi-checkbox-marked-circle-outline</v-icon>Apply</p>
						</div>
						
						 <div>
							<input v-model.number="minPrice" style="float:left;width:43%" type="number" class="app-text-field-range" placeholder="₦Min">
							<span style="margin-top:-30px;margin-left:6px;"><v-icon  style="margin-top:5px;" small color="#acacac">mdi-minus</v-icon></span>
							<input v-model.number="maxPrice" style="float:right;width:43%" type="number" class="app-text-field-range" placeholder="₦Max">
						 </div>
						 <br>
						  <p v-show="priceRangeStatus" @click="resetCategory" style="text-align:center;cursor:pointer;color:#FAA722;font-size:13px;font-weight:600;text-decoration:underline;">Reset</p>
                        </div>
                           <br>
                          <div>
						<div class="price-range">
							 <p style="float:left;font-size:15px;">Date</p>
							 <p @click="priceRange" style="cursor:pointer;float:right;color:#FAA722;font-size:13px;font-weight:600;"> <v-icon x-small color="#FAA722">mdi-checkbox-marked-circle-outline</v-icon>Apply</p>
						</div>
						
						 <div>
							<input v-model.number="minPrice" style="float:left;width:43%" type="date" class="app-text-field-range" placeholder="₦Min">
							<span style="margin-top:-30px;margin-left:6px;"><v-icon  style="margin-top:5px;" small color="#acacac">mdi-minus</v-icon></span>
							<input v-model.number="maxPrice" style="float:right;width:43%" type="date" class="app-text-field-range" placeholder="₦Max">
						 </div>
						 <br>
						  <p v-show="priceRangeStatus" @click="resetCategory" style="text-align:center;cursor:pointer;color:#FAA722;font-size:13px;font-weight:600;text-decoration:underline;">Reset</p>
                        </div>

					  </div>
                  </v-card>
                 
               </div>
               <div class="category-col-2">
                   <input  style="float:left;width:100%" type="text" class="app-text-field-search hidden-md-and-up" placeholder="Search for products">
                   <div class="category-col-2-div">
                      <p class="category-col-2-header">Product Lists</p>
                   </div>
                <!-- Mobile Filter and Sort -->
				   <div class="mobile-filter hidden-md-and-up">
					   <div @click="filterdrawer = true" class="mobile-filter-col-1">
						FILTER
					   </div>
					   <div @click="sortdrawer = true" class="mobile-filter-col-2">
						SORT
					   </div>
				   </div>
				   <!-- filter modal for mobile -->
				              	<transition name="slide-x-reverse-transition">
			<div v-show="filterdrawer"  class="sidenav hidden-md-and-up">
				 <div> 
					 	<a class="closebtn" @click="filterdrawer = false">&times;</a>
						 <h4 style="font-weight:600;margin-bottom:15px">Filter By</h4>
						 <v-divider></v-divider>
                         <br>
                   <p  style="font-size:15px;font-weight:600;">Category</p>
                       
								<v-row  v-for="(item, index) in 9" :key="index" no-gutters style="height:24px;">
								<v-col cols="12" style="height:24px;">
							   <p class="category-break" style="color:#7a7a7a;font-size:13px !important;margin:0 !important;"><v-icon style="font-size:12px;color:#7a7a7a;">mdi-chevron-right</v-icon>Lorem Ipsum</p>
								</v-col>
							</v-row>
                         <br>
						<v-divider></v-divider>
                        <br>
					                       <div>
						<div class="price-range">
							 <p style="float:left;font-size:15px;">Price Range</p>
							 <p @click="priceRange" style="cursor:pointer;float:right;color:#FAA722;font-size:13px;font-weight:600;"> <v-icon x-small color="#FAA722">mdi-checkbox-marked-circle-outline</v-icon>Apply</p>
						</div>
						
						 <div>
							<input v-model.number="minPrice" style="float:left;width:43%" type="number" class="app-text-field-range" placeholder="₦Min">
							<span style="margin-top:-30px;margin-left:6px;"><v-icon  style="margin-top:5px;" small color="#acacac">mdi-minus</v-icon></span>
							<input v-model.number="maxPrice" style="float:right;width:43%" type="number" class="app-text-field-range" placeholder="₦Max">
						 </div>
						 <br>
						  <p v-show="priceRangeStatus" @click="resetCategory" style="text-align:center;cursor:pointer;color:#FAA722;font-size:13px;font-weight:600;text-decoration:underline;">Reset</p>
                        </div>
                           <br>
                          <div>
						<div class="price-range">
							 <p style="float:left;font-size:15px;">Date</p>
							 <p @click="priceRange" style="cursor:pointer;float:right;color:#FAA722;font-size:13px;font-weight:600;"> <v-icon x-small color="#FAA722">mdi-checkbox-marked-circle-outline</v-icon>Apply</p>
						</div>
						
						 <div>
							<input v-model.number="minPrice" style="float:left;width:43%" type="date" class="app-text-field-range" placeholder="₦Min">
							<span style="margin-top:-30px;margin-left:6px;"><v-icon  style="margin-top:5px;" small color="#acacac">mdi-minus</v-icon></span>
							<input v-model.number="maxPrice" style="float:right;width:43%" type="date" class="app-text-field-range" placeholder="₦Max">
						 </div>
						 <br>
						  <p v-show="priceRangeStatus" @click="resetCategory" style="text-align:center;cursor:pointer;color:#FAA722;font-size:13px;font-weight:600;text-decoration:underline;">Reset</p>
                        </div>
					  </div>
		
			</div>
           	</transition>

			   <!-- Sort for Mobile -->

			     	<transition name="slide-x-reverse-transition">
			<div v-show="sortdrawer"  class="sidenav2">
				<a class="closebtn" @click="sortdrawer = false">&times;</a>
				<h4 style="font-weight:600;margin-bottom:15px">Sort By</h4>
				   <div @click="sortMobile(sortitem)" v-for="(sortitem, index) in sortitems" :key="index" class="drawer-links">{{ sortitem }}<v-icon small style="margin-top:7px;float:right">mdi-chevron-right</v-icon></div>
			</div>
			   </transition>
                 <div>
				  <v-row >
                  <v-col cols="12" sm="6" md="3" v-for="(pro,index) in 8" :key="index">
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
                     <v-card-actions style="margin:0;padding:0">  <p class="new-product-price">N1000</p><v-spacer></v-spacer> <p class="new-product-price">Lagos</p></v-card-actions>
               
                <p style="text-align:justify;font-size:13px;color:#575260;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                   </div>

            <router-link to="/product-details"><v-btn large block class="focus-btn outline-btn" style="text-transform:none;" outlined color="#FAA722">View Details</v-btn></router-link>    
                </div>
                </v-card>
                  </v-col>
              </v-row> 
				 </div>

				  <div>
				 
				 </div>
                
               <br /><br />
			<div class="text-center">
			 Pagination
			</div>
               </div>
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
                    size:['S','M','L'],
            quantity1: ['1','2','3','4'],
            snackbar: false,
            products:[],
            currency:{},
            quantity: null,
			category:{},
			subCategories:[],
			categories:[],
			currentPage: 1,
			borderradius:'15px',
			items:["Popular","Recent",],
			sortitems: ['Alphabetically-Asc', 'Alphabetically-Dsc', 'Price-Asc', 'Price-Dsc'],
			filterdrawer: false,
            sortdrawer: false,
            minPrice: "",
            maxPrice: "",
            priceRangeArray : [],
            priceRangeStatus: false,
    
    }
  },
  methods:{
        resetCategory(){
            this.minPrice = "";
            this.maxPrice = ""
            this.priceRangeStatus = false;
            this.priceRangeArray = []
        },
        priceRange() {
            const fromDate = this.minPrice;
			const toDate = this.maxPrice;
			this.priceRangeArray = this.products.filter(product => {
				return product.price >= fromDate && product.price <= toDate;
			});
            this.priceRangeStatus = true;
            this.filterdrawer = false;
        },
        sortMobile(sortby){
            this.sortdrawer = false;
            if (sortby == "Alphabetically-Asc" || sortby == "Alphabetically-Dsc") return this.sortByName(sortby);
            if (sortby == 'Price-Dsc' || sortby == 'Price-Asc') return this.sortByPrice(sortby);
        },
        sortByName(event) {
			this.products.sort((a, b) => {
				var nameA = a.name.toUpperCase();
				var nameB = b.name.toUpperCase();
				if (event == "Alphabetically-Asc") {
					if (nameA > nameB) return 1;
					if (nameA < nameB) return -1;
					return 0;
				} else if (event == "Alphabetically-Dsc") {
					if (nameA > nameB) return -1;
					if (nameA < nameB) return 1;
					return 0;
				}
			});
		},

		sortByPrice(event) {
			this.products.sort((a, b) => {
				let priceA = a ? Number(a.price) : 1;
				let priceB = a ? Number(b.price) : 1;
				if (event == "Price-Asc") {
					if (priceA > priceB) return 1;
					if (priceA < priceB) return -1;
					return 0;
				} else if (event == "Price-Dsc") {
					if (priceA > priceB) return -1;
					if (priceA < priceB) return 1;
					return 0;
				}
			});
		},

		sortCategory(event) {
			if (event == "Alphabetically-Asc" || event == "Alphabetically-Dsc") return this.sortByName(event);
			if (event == 'Price-Dsc' || event == 'Price-Asc') return this.sortByPrice(event);
		}
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


.app-text-field-range {
  height: 35px;
  width: 43%;  
  padding: 10px;
  font-size: 15px;
  transition: all .2s;
  border-radius: 5px;
  border: 1px solid #acacac;

  &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #FAA722;
    outline: none;
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
  &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #FAA722;
    outline: none;
  }

 } 


 .new-product-card2{background-color: white; position: relative;
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
.categoryModal {color: #000000; }
.page-item a{color: #FAA722;}
a { text-decoration:none; color: #FAA722;}
.drawer-links{border-top: 1px solid rgb(239, 239, 239);padding: 20px;font-size: 14px;font-weight: 600;}
.drawer-links-div{padding: 10px 10px;}
.sidenav {height: 100%;width: 100%;position: fixed;z-index: 999;top: 0;left: 0;background-color: #ffffff;overflow-x: hidden;transition: 0.5s;padding: 30px 20px;}
.sidenav2 {height: 100%;width: 100%;position: fixed;z-index: 999;top: 0;left: 0;background-color: #ffffff;overflow-x: hidden;transition: 0.5s;padding: 30px 20px;}
.closebtn {position: absolute;top: 0;right: 25px;font-size: 50px;margin-left: 50px;color: #1b1b1b;}
.category-box {padding: 10px;}
.category-name{width: 120px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;text-decoration: none;}
.category-img {width: 80%;}
.category-card{text-align: center;}
.category-img-pack{width: 100%; text-align: center;}
.category-row{
	@include clearfix;
    width: 100%;
	margin: 0 auto;

	// @include respond(phone){padding: 30px;} ;
    // @include respond(tablet){padding: 30px;} ;
}

.category-col-1{width: 20%;float: left;margin-right: 2%;
	// @include respond(phone){display: none;} ;
    // @include respond(tablet){display: none;} ;
}

.category-col-2{width: 78%;float: left;
	// @include respond(phone){width: 100%;} ;
    // @include respond(tablet){width: 100%; } ;
}

.category-break{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.category-content{ padding: 100px 50px;

    // @include respond(phone){  padding: 80px 0;
    // } ;
	// @include respond(tablet){  padding: 80px 0;
    // } ;
}

.category1-card{padding: 20px;margin-bottom: 30px;}
.category1-card-header{font-size: 15px;border-bottom: 1px solid rgb(239, 239, 239) !important;display: block;padding-bottom:10px;}
.category-col-2-div{text-align: center;}

  .category-col-2-header{font-size: 25px;
    // @include respond(phone){ display: block;  text-align: center;} ;
	// @include respond(tablet){  text-align: center;} ;
}
.category-col-bar{ margin:0 !important; padding: 0 10px 0 10px !important;}
    .category-col-bar-header{font-size: 16px;font-weight: bold;float: left;}
.price-range{
&::after {
        content: "";
      display: table;
      clear: both;  
      } 
}

.mobile-filter{@include clearfix;width: 100%;margin: 0 auto;background: white;color: #FAA722;padding: 10px;}
.mobile-filter-col-1{float: left;width: 50%;border-right: .5px solid #FAA722;text-align: center;font-size:14px;font-weight: 600;}
.mobile-filter-col-2{float: left;width: 50%;border-left: .5px solid #FAA722;text-align: center;font-size:14px;font-weight: 600;}
.section-info{background: #E3E4FA;padding:20px;text-align: center;}


@media (max-width: 991px) {

}
@media (max-width: 767px) {

.app-text-field-range {
  height: 35px;
  width: 43%;  
  padding: 10px;
  font-size: 15px;
  transition: all .2s;
  border-radius: 5px;
  border: 1px solid #acacac;

  &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #FAA722;
    outline: none;
  }

 } 


 .new-product-card2{background-color: white; position: relative;
            &:hover .new-product-details-top{
                display: block;
            }
        }
.new-product-card-col-1{ width: 100%;height: 70%;padding: 10px 0;
.new-product-card-col-1-img-div{margin: 0 auto;width: 170px;height: 170px;object-fit: scale-down;
.new-product-card-col-1-img{width: 100%;height: 170px; }
            } }
.new-product-card-col-2{padding: 10px 10px;width: 100%;height: 30%;
 .new-product-card-col-2-div{line-height: 1.1;
 .new-product-name{color:#575260; display: block; font-weight: 700; font-size: 16px; width: 90%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.new-product-price{float: left;color:#575260;font-size: 14px; }}
        }
.categoryModal {color: #000000; }
.page-item a{color: #FAA722;}
a { color: #FAA722;}
.drawer-links{border-top: 1px solid rgb(239, 239, 239);padding: 20px;font-size: 14px;font-weight: 600;}
.drawer-links-div{padding: 10px 10px;}
.sidenav {height: 100%;width: 100%;position: fixed;z-index: 999;top: 0;left: 0;background-color: #ffffff;overflow-x: hidden;transition: 0.5s;padding: 30px 20px;}
.sidenav2 {height: 100%;width: 100%;position: fixed;z-index: 999;top: 0;left: 0;background-color: #ffffff;overflow-x: hidden;transition: 0.5s;padding: 30px 20px;}
.closebtn {position: absolute;top: 0;right: 25px;font-size: 35px;margin-left: 50px;color: #1b1b1b;}
.category-box {padding: 10px;}
.category-name{width: 120px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;text-decoration: none;}
.category-img {width: 80%;}
.category-card{text-align: center;}
.category-img-pack{width: 100%; text-align: center;}
.category-row{padding: 30px;
}

.category-col-1{display: none;
}

.category-col-2{width: 100%;}

.category-break{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.category-content{padding: 80px 0;}
.category1-card{padding: 20px;margin-bottom: 30px;}
.category1-card-header{font-size: 15px;border-bottom: 1px solid rgb(239, 239, 239) !important;display: block;padding-bottom:10px;}
.category-col-2-div{text-align: center;}

  .category-col-2-header{font-size: 25px; display: block;  text-align: center;
}
.category-col-bar{ margin:0 !important; padding: 0 10px 0 10px !important;}
    .category-col-bar-header{font-size: 16px;font-weight: bold;float: left;}
.price-range{
&::after {
        content: "";
      display: table;
      clear: both;  
      } 
}

.mobile-filter{@include clearfix;width: 100%;margin: 0 auto;background: white;color: #FAA722;padding: 10px;}
.mobile-filter-col-1{float: left;width: 50%;border-right: .5px solid #FAA722;text-align: center;font-size:14px;font-weight: 600;}
.mobile-filter-col-2{float: left;width: 50%;border-left: .5px solid #FAA722;text-align: center;font-size:14px;font-weight: 600;}
.section-info{background: #E3E4FA;padding:20px;text-align: center;}


}
@media (max-width: 479px) {


.app-text-field-range {
  height: 35px;
  width: 43%;  
  padding: 10px;
  font-size: 15px;
  transition: all .2s;
  border-radius: 5px;
  border: 1px solid #acacac;

  &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #FAA722;
    outline: none;
  }

 } 


 .new-product-card2{background-color: white; position: relative;
            &:hover .new-product-details-top{
                display: block;
            }
        }
.new-product-card-col-1{ width: 100%;height: 70%;padding: 10px 0;
.new-product-card-col-1-img-div{margin: 0 auto;width: 170px;height: 170px;object-fit: scale-down;
.new-product-card-col-1-img{width: 100%;height: 170px; }
            } }
.new-product-card-col-2{padding: 10px 10px;width: 100%;height: 30%;
 .new-product-card-col-2-div{line-height: 1.1;
 .new-product-name{color:#575260; display: block; font-weight: 700; font-size: 16px; width: 90%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.new-product-price{float: left;color:#575260;font-size: 15px; }}
        }
.categoryModal {color: #000000; }
.page-item a{color: #FAA722;}
a { color: #FAA722;}
.drawer-links{border-top: 1px solid rgb(239, 239, 239);padding: 20px;font-size: 14px;font-weight: 600;}
.drawer-links-div{padding: 10px 10px;}
.sidenav {height: 100%;width: 100%;position: fixed;z-index: 999;top: 0;left: 0;background-color: #ffffff;overflow-x: hidden;transition: 0.5s;padding: 30px 20px;}
.sidenav2 {height: 100%;width: 100%;position: fixed;z-index: 999;top: 0;left: 0;background-color: #ffffff;overflow-x: hidden;transition: 0.5s;padding: 30px 20px;}
.closebtn {position: absolute;top: 0;right: 25px;font-size: 35px;margin-left: 50px;color: #1b1b1b;}
.category-box {padding: 10px;}
.category-name{width: 120px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;text-decoration: none;}
.category-img {width: 80%;}
.category-card{text-align: center;}
.category-img-pack{width: 100%; text-align: center;}
.category-row{padding: 30px;
}

.category-col-1{display: none;
}

.category-col-2{width: 100%;}

.category-break{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.category-content{padding: 40px 0;}
.category1-card{padding: 20px;margin-bottom: 30px;}
.category1-card-header{font-size: 15px;border-bottom: 1px solid rgb(239, 239, 239) !important;display: block;padding-bottom:10px;}
.category-col-2-div{text-align: center;}

  .category-col-2-header{border-top:1px solid #cdcdcd;  font-size: 20px; display: block;  text-align: center; padding-top:20px;
}
.category-col-bar{ margin:0 !important; padding: 0 10px 0 10px !important;}
    .category-col-bar-header{font-size: 16px;font-weight: bold;float: left;}
.price-range{
&::after {
        content: "";
      display: table;
      clear: both;  
      } 
}

.mobile-filter{@include clearfix;width: 100%;margin: 0 auto;background: white;color: #1f1f1f;padding: 15px 10px; border-top:1px solid  #cdcdcd;border-bottom:1px solid #cdcdcd; }
.mobile-filter-col-1{float: left;width: 50%;border-right: .5px solid #1f1f1f;text-align: center;font-size:14px;font-weight: 600;}
.mobile-filter-col-2{float: left;width: 50%;border-left: .5px solid #1f1f1f;text-align: center;font-size:14px;font-weight: 600;}
.section-info{background: #E3E4FA;padding:20px;text-align: center;}

}
</style>