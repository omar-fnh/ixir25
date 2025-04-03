watch:{

  showPlan(){
const remove_unavailble_booths=[];

for(i=0;i<this.exform.booths1.length;i++){
  if(this.exform.booths1[i].hall==this.showPlan){
    remove_unavailble_booths.push(this.exform.booths1[i])
  }
}
this.exform.booths1=remove_unavailble_booths;


  }

},
computed: {

  showPlan: function(){
    if(this.exform.industry.length==0){retun="none";}
    let  show_mezzanine = false;
    for(i=0;i<this.exform.industry.length;i++)
    {
     if(this.exform.industry[i].value=='GARMENT & ATTIRE' || this.exform.industry[i].value=='FRAGRANCES' || this.exform.industry[i].value=='JEWELRY' ){ show_mezzanine = true ; } 
    }

    if(show_mezzanine == false && this.exform.industry.length>0 ){return 'Ground'}
    if(show_mezzanine == true && this.exform.industry.length>0 ){ return 'Mezzanine'}

  },

is_food_and_beverage: function (){
  let the_return_value=false;
  for(i=0;i<this.exform.industry.length;i++){if(this.exform.industry[i].value=="FOOD & BEVERAGE"){the_return_value=true}}
  return the_return_value;
},

currentFloorBooths:function(){
  removeotherfloorbooth=(item) =>{ if (item.hall=="Ground" ){ return true } else {return false} }

return  this.booths.filter(removeotherfloorbooth);
},
availbleBooths:function (){
   
//removereservedbooth=(item) =>{ if (item.reserved==0 && this.showPlan==item.hall ){ return true } else {return false} }
removereservedbooth=(item) =>{ if (item.reserved==0  ){ return this.exform.prebooked?false:true } else {return this.exform.prebooked?true:false} }

return  this.booths.filter(removereservedbooth);


  },






  },