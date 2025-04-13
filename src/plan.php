 <!DOCTYPE html>
<html>
<head>
	<title>Ixir Expo Plan</title>
	<!--
 		+--------+										
       /        /|		             ixir 2025 Registration								
      /        / |     https://github.com/omar-fnh/ixir-registration-24/tree/2025
     +--------+  |                
     |        |  +                       OMAR SEDKI
     |        | /                   omar.sedki@gmail.com
     |        |/                https://github.com/omar-sedki
     +--------+
	-->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
	<meta name="author" content="Omar Sedki">
	<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  	<link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
 	 <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
	  <link href="css/main.css" rel="stylesheet">
	<meta charset="utf-8"/>
	<style>
.v-card__actions{display:none!important}
.x_in_Booth {
  stroke: rgb(231, 103, 120)!important;
  stroke-width: 2px!important;
}

#showThisBooth{
	stroke: #98515C;
  fill: #98515Cb3;
  stroke-dasharray: 5 3;
  animation: dash 5s linear;
    animation-iteration-count: 1;
  animation-iteration-count: infinite;
  stroke-width: 1.5px;
  pointer-events: none;
}

@keyframes dash {
  to {
    stroke-dashoffset: 50;
  }
}

@keyframes borderRotate {
	100% {
		--angle: 420deg;
	}
}

@keyframes borderRadial {
	20% {
		--gradX: 100%;
		--gradY: 50%;
	}
	40% {
		--gradX: 100%;
		--gradY: 100%;
	}
	60% {
		--gradX: 50%;
		--gradY: 100%;
	}
	80% {
		--gradX: 0%;
		--gradY: 50%;
	}
	100% {
		--gradX: 50%;
		--gradY: 0%;
	}
}
	</style>

<script>
			
				function start_load_scripts(){
					setTimeout(function(){
						var my_script = document.createElement('script');
						my_script.setAttribute('src','js/main.js');
						document.body.appendChild(my_script);
					},3000)
				}

				//start_load_scripts();
							</script>

</head>


	<body>
		<!--=include html/loading/map_loading.html -->

			<v-app v-cloak id="app"  class="Map" fluid :class="exform.language=='en'?'langEN':'langAR'">
				<v-main>
					<v-container fluid fill-height>
						<booths-plan img="images/ixir25-plan.svg"   :show-this-booth="showThisBooth"  :lang="exform.language" :currentchoices="exform[currentchoices]" :booths="booths"></booths-plan>
					</v-container>
				</v-main>
			</v-app>
	
		<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
  		<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
		<!--script src="https://unpkg.com/axios/dist/axios.min.js"></script-->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.8/axios.min.js" integrity="sha512-v8+bPcpk4Sj7CKB11+gK/FnsbgQ15jTwZamnBf/xDmiQDcgOIYufBo6Acu1y30vrk8gg5su4x0CG3zfPaq5Fcg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
		
		<script>


function autoZoomOut(zoomLevel){
	if(zoomLevel==1){return false;}
	document.getElementById('showThisBooth').scrollIntoView({behavior: 'instant',block: 'center',inline: 'center'});
	document.getElementById('plan_img_container').style.scale=zoomLevel;
	if(zoomLevel>=1.01){setTimeout(function(){autoZoomOut(zoomLevel-0.05)}, 1);}else{if(zoomLevel<=1){setTimeout(function(){autoZoomOut(1)}, 100)};
	}
}	

function scrollToTheBooth(){

if(window.booths_data_availble==true){	
	document.getElementById("plan_img_container").style.visibility="visible"; 
	document.getElementById('plan_img_container').style.top=0;
	document.getElementById('plan_img_container').style.left=0;
	_centerPoint=document.getElementById('showThisBooth').getBoundingClientRect();
	document.getElementById('plan_img_container').style.transformOrigin=_centerPoint.x+"px "+_centerPoint.y+"px"; 
	document.getElementById('plan_img_container').style.scale=10;
document.getElementById('showThisBooth').scrollIntoView({behavior: 'instant',block: 'center',inline: 'center'});

autoZoomOut(10); 



}else {
	setTimeout(function(){scrollToTheBooth()}, 500);
console.log("wait plan image to be full loaded");
}
}


	showThisBooth=<?php
 if (!empty($_GET['name'])){
	 echo '"'.$_GET['name'].'"';
	 } else {
		 echo "null";
	}?>

</script>
		<!--script src="js/main.js"></script-->	
		
	</body>
	
</html> 