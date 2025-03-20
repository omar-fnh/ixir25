 <!DOCTYPE html>
<html>
<head>
	<title>IXIR 2025 Registration Form</title>
	<!--
 		+--------+										
       /        /|		             IXIR 2025 Registration								
      /        / |     https://github.com/omar-fnh/
     +--------+  |                
     |        |  +                       OMAR SEDKI
     |        | /                   omar.sedki@gmail.com
     |        |/                https://github.com/omar-sedki
     +--------+
	-->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

	<meta property="og:site_name" content="Ixir 25 expo">
	<meta property="og:title" content="Ixir Expo 2025" />
	<meta property="og:description" content="Registration Form" />
	<meta property="og:image" itemprop="image" content="https://ixirexpo.com/images/logo-en.png">
	
	<meta name="author" content="Omar Sedki">
 	<link rel="icon" type="image/jpeg" sizes="64x64" href="https://ixirexpo.com/icon.jpg">
	<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  	<link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
 	 <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
	  <link href="css/main.css" rel="stylesheet">
	<meta charset="utf-8"/>

	<script>
			
			function start_load_scripts(){
				setTimeout(function(){
					var my_script = document.createElement('script');
					my_script.setAttribute('src','js/main.js');
					document.body.appendChild(my_script);
				},100)
			}


			
	</script>

</head>

	
	<body>
		<!--=include html/loading/loading.html -->

			<h3   class="pageTitle" style="font-family:roboto;"><div>Exhibitor Registration Form</div></h3>
			<v-app v-cloak id="app" :class="exform.language=='en'?'langEN':'langAR'">
				<v-main>
					<v-container>
						<v-row class="justify-center">
							<v-btn-toggle rounded  >
								<v-btn small  style="font-weight:bold;font-family:roboto;" text :color="exform.language=='en'?'primary':null" @click="change_language('en')">English</v-btn>
								<v-btn style="font-weight:bold;font-family:'GE SS Text Light'" text :color="exform.language=='ar'?'primary':null" small @click="change_language('ar')">عربي</v-btn>
							</v-btn-toggle>
						</v-row>

						<v-row >
								<img src="images/logo.png"  class="mirzaamLogo EN_Text"/>
								<img src="images/logo-ar.png"  class="mirzaamLogo AR_Text"/>	
						</v-row>
						<v-row  style="flex-direction:column">
							<div style="align-self: center;background-color: #057150;padding: 2px 10px;color: white;font-weight: bold;border-radius: 4px;">
								<span class='EN_Text'>MAY 22<sup>TH</sup> – 24<sup>TH</sup> 2025</span>
								<span class='AR_Text' style="font-size:120%"> 22 - 24 مايو  2025</span>
							</div>
						</v-row>

						<v-row  v-if="showPlan=='Mezzanine' ||showPlan=='Ground'"> <v-col class="text-center">
							<v-btn  onclick="document.getElementById('ixir2025-plan').scrollIntoView({behavior: 'smooth'})" elevation="2" large rounded :color="mainColor" dark>
								<span class='EN_Text'>View Ixir plan</span>
								<span class='AR_Text'>عرض مخطط إكسير</span>
					</v-btn></v-col></v-row>

						<v-form v-model="formIsValid" @submit.prevent ref="form" lazy-validation> 
							
							<!--=include html/form/form.html -->
						</v-form>

					</v-container>
				</v-main>
			</v-app>
	
		<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
  		<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
		<!--script src="https://unpkg.com/axios/dist/axios.min.js"></script-->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.8/axios.min.js" integrity="sha512-v8+bPcpk4Sj7CKB11+gK/FnsbgQ15jTwZamnBf/xDmiQDcgOIYufBo6Acu1y30vrk8gg5su4x0CG3zfPaq5Fcg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
		
		<script>
showThisBooth=null;
		</script>

		<!--script src="js/main.js"></script-->	
	</body>
</html> 