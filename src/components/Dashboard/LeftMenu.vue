<template>
    <div class="left-menu-div">
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
</template>


<script>
export default {
    data(){
        return{

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
}
</script>

<style lang="scss" scoped>
.left-menu-div{height: 88vh;padding: 20px 40px;background: #F7F7F7;}
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
	color: #000000;
}

.activeNav .mainmenu-li a .nav-icon {
	color: #000000;
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
	color: rgb(0, 0, 0);
}

.mainmenu-li a:hover .nav-icon {
	color: rgb(0, 0, 0);
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
</style>