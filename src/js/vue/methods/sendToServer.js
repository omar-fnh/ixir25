sendToServer(){
    console.log('senT To Server');

    axios.post('php/form.php',this.exform)
    .then( (response)=> { 
       if(!response.data){
         VueApp.form_sent="error";
          //alert('File not uploaded.'); 
       } else { 
         if(response.data.form_sent==true){VueApp.form_sent="sent"}
         if(response.data.form_sent==false){VueApp.form_sent="error"}
         
          }
    })

    .catch(function (error) { VueApp.form_sent="error"});
 },