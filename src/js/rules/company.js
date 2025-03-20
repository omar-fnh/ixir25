company_name:[

    value => {
        const regex = /[\u0600-\u06FF]+/;
        const isArabic = regex.test(value);

        if(typeof value !='string' || value.trim().length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else if (isArabic) {return this.exform.language=='en'?'Company name in english':'اسم الشركة بالإنجليزية   '}
        else if(typeof value=='string' && value.trim().length>2){return true}
        else {return true};



    


    },
    
  ],


  company_name_ar:[

    value => {

        const regex = /[\u0600-\u06FF]+/;
        const isArabic = regex.test(value);

        if(typeof value !='string' || value.trim().length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else if (!isArabic) {return this.exform.language=='en'?'Company name in arabic':'اسم الشركة بالعربية   '}
        else if(typeof value=='string' && value.trim().length>2){return true}
        else {return true};


    },



    
  ],



  brand:[

    value => {

        if(this.exform.company.brand.different==false){return true}
        else if(typeof value !='string' || value.trim().length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else if(typeof value=='string' && value.trim().length>2){return true}
        else {return true};


    },


    
    
  ],


  company_address:[

    value => {

        if(typeof value !='string' || value.trim().length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else if(typeof value=='string' && value.trim().length<15){return this.exform.language=='en'?'Please enter the full address':'الرجاء ادخال العنوان كاملا'}
        else if(typeof value=='string' && value.trim().length>=15){return true}
        else {return true};



    


    },
    
  ],



  
  instagram:[

    value => {

        if(typeof value !='string' || value.trim().length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else if(typeof value=='string' && value.trim().length>3){return true}
        else {return true};

    },
    
  ],

  instagram:[

    value => {

        if(typeof value !='string' || value.trim().length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else if(typeof value=='string' && value.trim().length>3){return true}
        else {return true};

    },
    
  ],

  phone:[

    value => {
      const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
      const isPhone = regex.test(value);

        if(typeof value !='string' || value.trim().length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else if (!isPhone) {return this.exform.language=='en'?'please enter a valid number':'الرجاء إدخال رقم صحيح'}
        else if(typeof value=='string' && value.trim().length>3){return true}
        else {return true};

    },
    
  ],

