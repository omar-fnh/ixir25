contact_name:[

    value => {
 
        if(typeof value !='string' || value.trim().length==0){return this.exform.language=='en'?'required':'مطلوب'}
       else if(value.trim().split(" ").length<2 ){return this.exform.language=='en'?'Enter Full Name':'الرجاء إدخال الاسم بالكامل'}
        else if(typeof value=='string' && value.trim().length>2){return true}
        else {return true};

    },
    
  ],


  contact_designation:[

    value => {
 
        if(typeof value !='string' || value.trim().length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else if(typeof value=='string' && value.trim().length>2){return true}
        else {return true};

    },
    
  ],


  contact_email:[

    value => {
 
        const regex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        const isEmail = regex.test(value.trim());

        if(typeof value !='string' || value.trim().length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else if (!isEmail) {return this.exform.language=='en'?'Please enter a valid email':'الرجاء إدخال بريد إلكتروني صحيح'}
        else if(typeof value=='string' && value.trim().length>2){return true}
        else {return true};

    },
    
  ],