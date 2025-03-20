 
 
 //=include booths.js

 //=include vue\components\booth_calculator\booth_calculator.js
 //=include vue\components\booths_plan\booths_plan.js
//=include vue\components\categories\categories.js
 

 VueApp=new Vue({
    el: '#app',
    data(){ 
        return {
        showThisBooth:showThisBooth?showThisBooth:null,
        
        mainColor:"#057150",
        formIsValid:false,
        accept_dialog:false,
        server_send_dialog:false,
        form_sent:null,
        //=include vue\categories.js
        //=include rules\rules.js
        booths:booths,
        exform:{
          language:'en',
          prebooked:false,
          company:{name:"",name_ar:"",brand:{different:false,name:""},},
          contact:{name:"",designation:"",email:""},
          contact2:false,
            industry:[],
            address:"",
            website:"",
            instagram:"",
            email:"",
            phone:"",
            mob:"",
            correspondence:{name:"",designation:"",mob:"",email:""},
            booths1:[],
		        booths2:[],
        		booths3:[],
            selectedPaymentMethod:"",
            files:{
              company_profile:{file:null,server:null,status:null},
              company_license:{file:null,server:null,status:null},
              authorized_signatory:{file:null,server:null,status:null},
              civil_id:{file:null,server:null,status:null},
              logo:{file:null,server:null,status:null},
            },

        },
        currentchoices:'booths1',

    }},

    //=include vue\computed.js
    //=include vue\vuetify.js
    methods: {

    //=include vue\methods\uploadFile.js
    //=include vue\methods\sendToServer.js

    sendForm(){
      console.log('send Form');
      this.form_sent=null;
      this.accept_dialog = false;
      this.server_send_dialog=true;

      if( this.exform.files['company_license'].status=='loaded' && this.exform.files['authorized_signatory'].status=='loaded' &&  this.exform.files['civil_id'].status=='loaded' && this.exform.files['logo'].status=='loaded')
      {
        if( !this.is_food_and_beverage || (this.is_food_and_beverage && this.exform.files['company_profile'].status=='loaded') ){this.sendToServer();}
      } else {setTimeout(VueApp.sendForm,1000)}
    },
    valideForm(){
      const isValid=this.$refs.form.validate();

      if(!isValid){
        setTimeout(()=>{
        const el = document.querySelector(".v-messages.error--text:first-of-type");
        el.parentNode.scrollIntoView({ behavior: 'smooth',block: 'center' });
        console.log(el)
      },100);
      

        
    }

    if(isValid){this.accept_dialog = true}
    

    },
      change_language(lang){
        this.exform.language=lang;
        if(lang=='ar'){this.$vuetify.rtl=true} else {this.$vuetify.rtl=false}
       

      },



      selectOnMap(event){
      


      },
        removeCategorie (item) {
        var index;
         if(typeof item=='object'){ index = this.exform.industry.indexOf(item.name)}
         if(typeof item!='object'){ index = this.exform.industry.indexOf(item)}
          if (index >= 0) this.exform.industry.splice(index, 1)
        },
      },
    
    mounted() {
        document.getElementById('intro').remove();
        this.change_language('en');
      }
  }) 


  getDataFromSpreadsheet(SpreadSheetURL,callbackFn);
