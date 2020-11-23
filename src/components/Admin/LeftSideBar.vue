<template>
	<div>

        <div class="side-bar-heading">
           <h4 class="side-bar-header">LOGO</h4>
        </div>

    <nav class="navigation">
  <ul class="mainmenu">
    <li class="mainmenu-li"><router-link to="/admin/overview"><v-icon class="nav-icon">mdi-home</v-icon>Overview</router-link></li>
    <li class="mainmenu-li"><router-link to="/admin/users"><v-icon class="nav-icon">mdi-account-group</v-icon>Users</router-link></li>
    <li class="mainmenu-li"><router-link to="/admin/escrow"><v-icon class="nav-icon">mdi-handshake</v-icon>Escrow</router-link></li>
     <li class="mainmenu-li"><router-link to="/admin/transactions"><v-icon class="nav-icon">mdi-bank-transfer</v-icon>Transactions</router-link></li>
    <li  class="mainmenu-li"><router-link to="/admin/push-message"><v-icon class="nav-icon">mdi-cellphone-message</v-icon>Push Messages</router-link></li>
     <li  class="mainmenu-li"><router-link to="/admin/refund-requests"><v-icon class="nav-icon">mdi-cached</v-icon>Refund Requests</router-link></li>
    <li class="mainmenu-li"><router-link to="/admin/login"><v-icon class="nav-icon">mdi-power</v-icon>Logout</router-link></li>
  </ul>
</nav>
        </div>


</template>


<script>


export default {

	data: () => ({
		
	}),
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



};
</script>

<style src="../../App.css" scoped></style>

<style lang="scss" scoped>

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
	background-color: rgba(255, 255, 255, 0.283);
	border-radius: 5px;
    color:white;
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
	color: #adb0b4;
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
	color: #adb0b4;
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
