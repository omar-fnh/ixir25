getPrice(_booth,withCommas){
   
 const  numberWithCommas= function(x) {return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}  
var price;
area=Number(_booth.width*_booth.height);


if( _booth.category.toLowerCase().includes("standard") && area==6 ){price=1100}
if(  _booth.category.toLowerCase().includes("standard") && area==9 ){price=1600}
if(  _booth.category.toLowerCase().includes("standard") && area==12 ){price=2100}

if( _booth.category.toLowerCase().includes("prime") && area==6 ){price=1350}
if(  _booth.category.toLowerCase().includes("prime") && area==9 ){price=2000}
if(  _booth.category.toLowerCase().includes("prime") && area==12 ){price=2600}

if( _booth.category.toLowerCase().includes("f&b")  ){return null}
if( _booth.category.toLowerCase().includes("partner")  ){return null}
if( _booth.category.toLowerCase().includes("sponsor")  ){return null}


return  withCommas?numberWithCommas(price):price;

  },