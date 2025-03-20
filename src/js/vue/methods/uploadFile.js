uploadFile(ref){
const _file =this.$refs[ref].$el.querySelector('input');
const is_valid=this.$refs[ref].validate();
const rename_file_name=this.exform.company.name+"-"+ref;

    if(_file.files.length==0 ||( _file.files.length==1 && this.exform.files[ref].file==null) ){
      this.exform.files[ref].status=null;
      this.exform.files[ref].server=null;
       return false
      }

 

    if(_file.files.length==1 && this.exform.files[ref].file!=null && is_valid){
      console.log("upload File");
      this.exform.files[ref].status='loading';
      let formData = new FormData();
      formData.append('file',_file.files[0]);
      formData.append('file_name',rename_file_name);

      axios.post('php/ajaxfile.php', formData,{headers: {'Content-Type': 'multipart/form-data'}})
      .then( (response)=> { 
         if(!response.data){
            VueApp.exform.files[ref].status=null;
            //alert('File not uploaded.'); 
         } else { 
           if(response.data.uploaded==true){

            this.exform.files[ref].server=response.data.file_name_on_server
            VueApp.exform.files[ref].status='loaded';
           }

           if(response.data.uploaded==false){VueApp.exform.files[ref].status=null;}


           
            }
      })

      .catch(function (error) {VueApp.exform.files[ref].status=null; console.log(error)});
   }
      

},