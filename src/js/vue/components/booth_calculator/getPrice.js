getPrice(_booth,withCommas){
  console.log('getPrice',_booth);
   
 const  numberWithCommas= function(x) {return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}  
var price;
area=Number(_booth.width*_booth.height);


if( _booth.category.toLowerCase().includes("standard") && area==6 ){price=720}
if(  _booth.category.toLowerCase().includes("standard") && area==9 ){price=1080}
if(  _booth.category.toLowerCase().includes("standard") && area==12 ){price=1800}
if(  _booth.category.toLowerCase().includes("standard") && area==16 ){price=1760}
if(  _booth.category.toLowerCase().includes("standard") && area==20 ){price=2200}



if( _booth.category.toLowerCase().includes("prime") && area==9 ){price=1260}
if( _booth.category.toLowerCase().includes("prime") && area==16 ){price=1920}
if( _booth.category.toLowerCase().includes("prime") && area==40 ){price=4800}
if( _booth.category.toLowerCase().includes("prime") && area==64 ){price=7700}


if( _booth.category.toLowerCase().includes("prime") &&  _booth.category.toLowerCase().includes("entrance") && area==9 ){price=1450}
if( _booth.category.toLowerCase().includes("prime") &&  _booth.category.toLowerCase().includes("entrance") && area==15 ){price=2400}
if( _booth.category.toLowerCase().includes("prime") &&  _booth.category.toLowerCase().includes("entrance") && area==40 ){price=6400}



if( _booth.category.toLowerCase().includes("f&b")  ){return null}
if( _booth.category.toLowerCase().includes("partner")  ){return null}
if( _booth.category.toLowerCase().includes("sponsor")  ){return null}


return  withCommas?numberWithCommas(price):price;

  },

