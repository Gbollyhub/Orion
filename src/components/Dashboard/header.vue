<template>
<div>
     <v-app-bar
      color="#F7F7F7"
      dark
      flat
      class="nav-bar"
    >
    <v-btn style="margin-right:20px;" @click= "drawer = true" icon class="sanitize hidden-md-and-up">
					<v-icon style="font-size:35px;" color="#2C125C">mdi-menu</v-icon>
				</v-btn>
      <v-spacer></v-spacer>
	  <div style="font-size:18px;color:#2C125C;margin-right:80px">Dashboard</div>
	   <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
		    <v-btn  
        icon
        class="sanitize nav-btn  hidden-sm-and-down"
        color="#1F0E3E"
        style="margin-right:60px;"
		 v-bind="attrs"
          v-on="on"
      >
        <v-icon style="font-size:30px">mdi-star-circle-outline</v-icon>
      </v-btn>
      </template>
      <v-list width="250px">
        <v-list-item>
          <v-list-item-title style="font-size:12px;"><v-icon style="margin-right:10px;" color='red'>mdi-send-circle</v-icon>Wallet Top-Up------Credit <br> <span style="margin-left:40px;font-size:10px">2 days ago</span>  </v-list-item-title>
        </v-list-item>
		 <v-list-item>
          <v-list-item-title style="font-size:12px;"><v-icon style="margin-right:10px;" color='red'>mdi-send-circle</v-icon>Wallet Top-Up------Credit <br> <span style="margin-left:40px;font-size:10px">2 days ago</span>  </v-list-item-title>
        </v-list-item>
		 <v-list-item>
          <v-list-item-title style="font-size:12px;"><v-icon style="margin-right:10px;" color='red'>mdi-send-circle</v-icon>Wallet Top-Up------Credit <br> <span style="margin-left:40px;font-size:10px">2 days ago</span>  </v-list-item-title>
        </v-list-item>
        <v-list-item  style="text-align:center;">
			<v-divider></v-divider>
          <v-list-item-title style="font-size:12px;">See all activities</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  <v-avatar size="50px" style="cursor:pointer" @click="toProfile">
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
    </v-app-bar>  


        <transition name="slide-x-reverse-transition">
       <div v-show="drawer" class="left-menu-div">
         <v-btn @click="drawer = false" style="float:right" icon><v-icon style="font-size:40px;" color="#1F0E3E">mdi-close</v-icon></v-btn>
         <br><br>
        <div class="greeting">Hello</div>
        <div class="user-name">KolaBinary</div>
        <br>
       <nav class="navigation">
  <ul class="mainmenu">
   <li class="mainmenu-li"><router-link to="/user/overview"><v-icon class="nav-icon">mdi-apps</v-icon>Dashboard</router-link></li>
    <li class="mainmenu-li"><router-link to="/user/escrow"><v-icon class="nav-icon">mdi-handshake</v-icon>Escrow</router-link></li>
     <li class="mainmenu-li"><router-link to="/user/transactions"><v-icon class="nav-icon">mdi-bank-transfer</v-icon>Transactions</router-link></li>
    <li  class="mainmenu-li"><router-link to="/user/wallet"><v-icon class="nav-icon">mdi-wallet</v-icon>Wallet</router-link></li>
     <li  class="mainmenu-li"><router-link to="/user/notifications"><v-icon class="nav-icon">mdi-bell</v-icon>Notification</router-link></li>
    <li class="mainmenu-li"><router-link to="/"><v-icon class="nav-icon">mdi-power</v-icon>Logout</router-link></li>
  </ul>
</nav>
    </div>
        </transition>
   

</div>

</template>

<script>
export default {
  data(){
    return{
      drawer: false
    }
  },
    created() {
		$(function() {
			$('.mainmenu a')
				.filter(function() {
					return this.href == location.href;
				})
				.parent()
				.addClass('activeNav')
				.siblings()
				.removeClass('activeNav');
			$('.mainmenu a').click(function() {
				$(this)
					.parent()
					.addClass('activeNav')
					.siblings()
					.removeClass('activeNav');
			});
		});
		
	},
	methods:{
		toProfile(){
			this.$router.push({path: '/user/profile'})
		}
	}
}
</script>

<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
.nav-bar{padding: 9px 4%;height: 12vh !important;}
.left-menu-div{padding: 20px 40px;background: #F7F7F7; position: fixed;width: 100%; height: 100%;z-index: 9999999;}
.greeting{font-size:15px;color: #1F0E3E;}
.user-name{font-size:25px;color: #68558A;}
.side-bar-header{
 color: white;
 text-align:center;
 font-size:23px;
 margin-bottom: 40px;
 font-weight:700;
}

@mixin clearfix {
    &::after {
      content: "";
    display: table;
    clear: both;  
    } 
}

.activeNav {
	background-color: #ECE9F2;
	border-radius: 5px;
}

.activeNav .mainmenu-li a {
	color: #ffffff;
}

.activeNav .mainmenu-li a .nav-icon {
	color: #ffffff;
}

.mainmenu {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
.mainmenu-li {
	margin-bottom: 20px;
    padding: 10px;
}
.mainmenu-li a {
	letter-spacing: 1px;
	color: #2C125C;
	font-weight: 500;
	font-size: 13px;
	text-decoration: none;
}

.mainmenu-li a:hover {
	color: rgb(16, 16, 16);
}

.mainmenu-li a:hover .nav-icon {
	color: rgb(12, 12, 12);
}
.nav-icon {
	color: #2C125C;
	font-size: 19px;
	margin-top: -3px;
	margin-right: 7px;
}

.submenu {
	margin-top: 10px;
	list-style-type: none;
}

.submenu-li {
	margin-bottom: 5px;
}

.submenu-li a {
	letter-spacing: 1px;
	color: #adb0b4;
	font-size: 12px;
	text-decoration: none;
}

.submenu-li a:hover {
	color: rgb(51, 51, 51);
}

.nav-arrow {
	color: #adb0b4;
	font-size: 15px;
	margin-top: -3px;
	margin-right: 7px;
}


@media (max-width: 991px) {

}
@media (max-width: 767px) {

}
@media (max-width: 479px) {
  .nav-bar{padding: 5px 2%;height: 10vh !important;}
.left-menu-div{padding: 40px 40px;background: #f7f7f7; position: absolute;top:0;width: 100%; height: 100%;z-index: 9999999;}
.greeting{font-size:15px;color: #1F0E3E;}
.user-name{font-size:25px;color: #68558A;}
.side-bar-header{
 color: white;
 text-align:center;
 font-size:23px;
 margin-bottom: 40px;
 font-weight:700;
}

@mixin clearfix {
    &::after {
      content: "";
    display: table;
    clear: both;  
    } 
}

.activeNav {
	background-color: #ECE9F2;
	border-radius: 5px;
}

.activeNav .mainmenu-li a {
	color: #ffffff;
}

.activeNav .mainmenu-li a .nav-icon {
	color: #ffffff;
}

.mainmenu {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
.mainmenu-li {
	margin-bottom: 20px;
    padding: 10px;
}
.mainmenu-li a {
	letter-spacing: 1px;
	color: #2C125C;
	font-weight: 500;
	font-size: 13px;
	text-decoration: none;
}

.mainmenu-li a:hover {
	color: rgb(255, 255, 255);
}

.mainmenu-li a:hover .nav-icon {
	color: rgb(255, 255, 255);
}
.nav-icon {
	color: #2C125C;
	font-size: 19px;
	margin-top: -3px;
	margin-right: 7px;
}

.submenu {
	margin-top: 10px;
	list-style-type: none;
}

.submenu-li {
	margin-bottom: 5px;
}

.submenu-li a {
	letter-spacing: 1px;
	color: #adb0b4;
	font-size: 12px;
	text-decoration: none;
}

.submenu-li a:hover {
	color: rgb(51, 51, 51);
}

.nav-arrow {
	color: #adb0b4;
	font-size: 15px;
	margin-top: -3px;
	margin-right: 7px;
}
}
</style>