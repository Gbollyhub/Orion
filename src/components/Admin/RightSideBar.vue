<template>
<div>

  <div class="profile-bar-header">My Profile</div>
  <br>
   <div class="user-photo" >
 <v-avatar
                  size="100px"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar> 
                <br><br>
                <div class="user-name">Adekolawole Olabinary</div>
     <div class="user-type">Super Admin</div>
   </div>
   
     <div class="profile-bar-header">Notifications</div>
      <br>
      <div v-for="(item,index) in  3" :key="index" style="margin-bottom:15px">
            <v-avatar
                  size="38px"
                >
                  <img
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                </v-avatar>
                <div style="color:#6338B2;margin-left:15px;display:inline-block">
                    <div style="font-size:12px">Adekolawole Olabinary</div>
                    <div style="font-size:11px;color:grey;">Has a complaint</div>
                    </div>
      </div>

       <div style="margin-top:10px;overflow:hidden;float:right;font-size:12px;color:grey;">View All</div>
       <br><br>
       <div style="display:block;margin-bottom:15px;" class="profile-bar-header">Add On</div>
      <div style="border-radius:10px;background:#E3E4FA;padding:10px">
       Lorem Ipsum ronete
        <v-btn color="#FAA722" icon><v-icon color="#FAA722">mdi-plus</v-icon></v-btn>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
             
            }
        },

    }

</script>

<style scoped>
.profile-bar-header{
    font-weight: 500px;
    font-size: 18px;
}
.profile-bar {
    width: 25%;
    position: fixed;
    top: 0;
    right: 0;
    padding: 20px 30px;
    z-index: 9999;
    background-color: white;
    height: 100vh;
    box-shadow:  -1px 0px 10px 1px rgba(0, 0, 0, 0.101) !important;
    display: block;
}
.user-photo{
    text-align: center;
    margin-bottom: 20px;
}

.user-icon{
  height: 100px;
  margin-bottom: 20px;
}
.user-name{
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
}
.user-type{
    font-size: 13px;
    color: rgb(172, 172, 172);
    margin-bottom: 20px;
}

input::placeholder { color: red; font-size: 1.2em; font-style: italic; }
.close-btn {
    font-size: 20px;
    position: absolute;
    right: 30px;
    top: 35px;
}
</style>
