
Vue.component('booth-calculator', {
    data() {
      return {
      }
    },
    watch:{
      value(){console.log('value')}
    },
    computed: {

      the_value: {
        // getter
        get: function () {
          return this.value
        },
        // setter
        set: function (newValue) {
    
          this.$emit('input', newValue)
        }
      }



   
    },
    
    props: ['booths','value','label','lang','rules','prebooked'],
    template: ` 
    <!--=include booth_calculator.html --> 
    `,
    methods:{

      filterBooth(item,queryText,itemText){
  
        queyText_without_space=queryText.toLocaleLowerCase();
        queyText_without_space=queyText_without_space.replace(/\s/g, "").replace("-","");

        queyText_without_space=queyText_without_space.replace("hall5","h5");
        queyText_without_space=queyText_without_space.replace("hall6","h6");
        queyText_without_space=queyText_without_space.replace("hall7","h7");
        queyText_without_space=queyText_without_space.replace("entrance","en");


        itemText_without_space=itemText.replace(/\s/g, "").replace("-","");

        return itemText_without_space.toLocaleLowerCase().indexOf(queyText_without_space) > -1;
      },
      ShellOrSpace(_booth){
        console.log(_booth.type.toLowerCase());
        if(_booth.type.toLowerCase().includes('space only')==false ){return "SHELL SCHEME BOOTH"}
        else{ return "SPACE ONLY BOOTH"}
        
        
              },
        
              canCalculatePriceForAllBooth(_booths_array){
                the_return_value=true;
                if(_booths_array.length<2){the_return_value=false}
                for(i=0;i<_booths_array.length;i++){
                  console.log("getPrice",this.getPrice(_booths_array[i]));
                  if(typeof this.getPrice(_booths_array[i])=="undefined" || !(this.getPrice(_booths_array[i])) ){the_return_value=false}
                }
        
              return  the_return_value;
              },
        
               //=include numberWithCommas.js
              //=include getPrice.js
              //=include total_price.js
        
              boothName(item){
        
                var the_name="";
                if( item.hall=="Ground" ){the_name+="G"}
                else if (item.hall=="Mezzanine"){the_name+="M"}

                if(item.id){the_name+=" - "+item.id}else { the_name+=Math.random()}
        
                return {id:item.id,hall:item.hall,name:the_name};
              },
        
              removeItemFromListOfItems(the_item,the_array){
                const index = the_array.indexOf(the_item);
        
        if (index > -1) { the_array.splice(index, 1); }
              },


    },
  });
  