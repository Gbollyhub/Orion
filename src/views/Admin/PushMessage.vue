<template>
    <div>
        
        	<div class="dashboard-row">
				<div class="dashboard-col-1">
					<app-leftbar></app-leftbar>
				</div>
				<div class="dashboard-col-2">
                    <div style="margin-bottom:30px;" class="heading">
  <div style="font-weight:700; font-size:15px;">Push Message</div>
                 <div style="font-size:12px">Monday, 30 June 2020</div>
                    </div>

                    <div style="position:relative;background:white;padding:30px;border-radius:20px">
                      <div style="color:#3D317A;font-size:18px;font-weight:600;margin-bottom:10px;">Kindly Note</div>
                      <div style="font-size:13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </div>
                    </div>
                    <br><br>

                    <div class="analytics">
                    
                    <input class="app-text-field" type="text" placeholder="Subject">
                    <textarea class="app-textarea" name="" id="" cols="4" rows="10" placeholder="Write your message here"></textarea>
                                    <v-btn
                class="hidden-sm-and-down"
                 style="text-transform:none;"
                 depressed
                 dark
                 large
                color="#3D317A">Send <v-icon style="margin-left:10px;font-size:15px;" color="white">mdi-send</v-icon></v-btn>
                    </div>
                    <br>
                     <div class="analytics">
                     <div style="font-size:18px;">Messages History</div>
                     <br>
                    <input class="app-text-field2" type="text" placeholder="Subject">
                      <div style="position:relative;background:#F5F5FA;padding:25px;border:1px solid #E3E4FA;border-radius:10px;margin-bottom:30px;">
                      <div style="color:#3D317A;font-size:18px;font-weight:600;margin-bottom:10px;">Kindly Note</div>
                      <div style="font-size:13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </div>
                    </div>
                    <div style="position:relative;background:#F5F5FA;padding:25px;border:1px solid #E3E4FA;border-radius:10px;margin-bottom:30px;">
                      <div style="color:#3D317A;font-size:18px;font-weight:600;margin-bottom:10px;">Kindly Note</div>
                      <div style="font-size:13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </div>
                    </div>
                    <div style="position:relative;background:#F5F5FA;padding:25px;border:1px solid #E3E4FA;border-radius:10px;margin-bottom:30px;">
                      <div style="color:#3D317A;font-size:18px;font-weight:600;margin-bottom:10px;">Kindly Note</div>
                      <div style="font-size:13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </div>
                    </div>
                    
                   
                    </div>
              
				</div>
                	<div class="dashboard-col-3">       
				        <app-rightbar></app-rightbar> 
				</div>
        	</div>
    </div>
</template>

<script>
import LeftSidebar from '../../components/Admin/LeftSideBar'
import RightSidebar from '../../components/Admin/RightSideBar'
export default {
    components: {
        'app-leftbar' : LeftSidebar,
        'app-rightbar' : RightSidebar
    }
}
</script>

<style src="../../App.css" scoped></style>

<style lang="scss" scoped>
@mixin clearfix {
    &::after {
      content: "";
    display: table;
    clear: both;  
    } 
}

.app-textarea{
     width: 100%;  
  padding: 10px;
      border-radius: 5px;
  background-color: rgb(237, 237, 237);
  border: 1px solid #d5d5d5;
    margin-bottom: 40px;
    &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #bbbee2;
    outline: none;
  }
}

.app-text-field{
      height: 50px;
  width: 100%;  
  padding: 10px;
  font-size: 15px;
  transition: all .2s;
  border-radius: 5px;
  background-color: rgb(237, 237, 237);
  border: 1px solid #d5d5d5;
  margin-bottom: 40px;
  &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #bbbee2;
    outline: none;
  }
}

.app-text-field2{
      height: 50px;
  width: 100%;  
  padding: 10px;
  font-size: 15px;
  transition: all .2s;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  border: 1px solid #d5d5d5;
  margin-bottom: 40px;
  &:hover{
    border: 1px solid #464646;
  }
  &:focus {
    border: 1.5px solid #bbbee2;
    outline: none;
  }
}


.analytics{
    padding: 40px 30px;
    background: white;
    border-radius: 10px;
    height: auto;
}

.metrics-card{
    background: white;
    padding: 15px;
    border-radius: 8px;
}

.profile-bar-header{
    font-weight: 500px;
    font-size: 18px;
}

.welcome-dash {
   background:red;
   padding:20px;
   border-radius:10px;
   position: relative;
}

.dashboard-row {

    .dashboard-col-1{
        background-color: #3D317A;
        width: 17%;
       left:0;
       top:0;
        height: 100vh;
        position: fixed;
        padding: 40px 20px;
        // @include respond(phone){ display: none; } ;
        // @include respond(tablet){ display: none;  } ;


    }
    .dashboard-col-2{
        padding: 30px;
        position: relative;
        background-color: #F2F2F2;
        width: 62%;
        height: 100vh;
        margin: 0 0 0 17%;
        overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar { display: none;}

        /*Hide scrollbar for mozilla */
        & { overflow: -moz-scrollbars-none; }

        /* Hide scrollbar for IE and Edge */
        & {-ms-overflow-style: none;}
        // @include respond(phone){ width:100%; float: none; display: block;  } ;
        // @include respond(tablet){  width:100%; float: none; display: block;  } ;
    }
        .dashboard-col-3{
            box-sizing: border-box;
        background-color: #ffffff;
              width: 21%;
        right: 0;
        top:0;
        height: 100vh;
        position: fixed;
        padding: 20px 30px;
        // @include respond(phone){ display: none; } ;
        // @include respond(tablet){ display: none;  } ;


    }
}
</style>

