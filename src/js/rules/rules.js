rules: {
//=include company.js
//=include contact.js   


categories:[

    value => {

        if(typeof value !='object' || value.length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else {return true};

    },
    
  ],

  doc:[

    value => {
      
        if(!value || value.length==0){return this.exform.language=='en'?'required':'مطلوب'}
        else if (value.size > 1048576) {return this.exform.language=='en'?'File size should be less than 1 MB':'يجب أن يكون حجم الملف أقل من 1 ميغا بايت'}
        else {return true};

    },
    
  ],


  choices:[

    value => {

      if(typeof value !='object' || value.length==0){return this.exform.language=='en'?'Please select one or more booths':'الرجاء اختيار جناح أو أكثر'}
      else {return true};

  },
    
  ],


  payment_methods:[

    value => {

      if(typeof value !='string' || value.trim()==""){return this.exform.language=='en'?'required':'مطلوب'}
        else {return true};

  },
    
  ],

},