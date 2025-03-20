
 //=include alloy_finger.js
 //=include svgPathToPoints.js

Vue.component('booths-plan', {

  mounted() {

// enable zoom gesture on touch screen 

    var pinchImg = document.getElementById("plan_img_container");
    if(!showThisBooth){document.getElementById("plan_img_container").style.visibility="visible"}

    new AlloyFinger(pinchImg, {

      start_zoom_value:1,
      _offsetX:0,
      _offsetY:0,
      _left:this.left,
      _top:this.top,

        multipointStart: (event)=> {
          console.log();
          start_zoom_value=this.zoom.value;
          _left=this.left;
          _top=this.top;

          const rect = this.$el.getBoundingClientRect();
          const rect2 = event.target.getBoundingClientRect();
            mouseX = ((event.touches[0].clientX +event.touches[1].clientX )/2)- rect2.left;
            mouseY = ((event.touches[0].clientY+event.touches[1].clientY)/2) - rect2.top;
           
            _offsetX =event.targetTouches[0].clientX - rect2.left;
            _offsetY= event.targetTouches[0].clientY - rect2.top;



        },
        pinch: (event)=> {

          this.zoom.value=event.zoom*start_zoom_value;
          const offsetX = (_offsetX * (this.zoom.value/start_zoom_value))-mouseX;
          const offsetY =(_offsetY * (this.zoom.value/start_zoom_value))-mouseY;

         this.left=_left-offsetX;
         this.top=_top-offsetY;
          
        }
    });


//=include mouse.js
//=include touch.js

      },
    

      
    data() {
      return {
        menu:{visible:false,x:0,y:0},
        selected_booth:null,
        lastX:0,
        lastY:0,
        left:0,
        top:0,
        width:'100',
        dragging:false,pan:false,
        zoom:{prev:1,value:1, origin:{x:50,y:50}}
      }
    },

    computed: {
zoomValue(){return this.zoom.value},
categoryColor(){
if(this.selected_booth.category=="Standard"){return"#e1d3b1"}
if(this.selected_booth.category=="F&B"){return"rgb(245, 205, 224)"}
if(this.selected_booth.category=="Prime"){return"rgb(168, 221, 234)"}
if(this.selected_booth.category=="Partner"){return"rgb(181, 212, 157)"}
if(this.selected_booth.category=="Sponsor"){return"rgb(30, 75, 129)"}

return "white";
}
    },
    
    props: ['img','booths','currentchoices','id','lang','showThisBooth',],
    template: ` 
    <!--=include booths_plan.html --> 
    `,

    watch:{
      zoomValue(newValue, oldValue) { this.zoom.prev=oldValue}
    },
    methods:{



      //=include ../booth_calculator/getPrice.js

      createXPathinBoth(_booth){
        let x_path="";
         //=include getCornerPoints.js

        if(typeof _booth.path!="undefined" && _booth.path!="" ){
          
          const points=svgPathToPoints(_booth.path);
   
          const corner_Points=getTheCorner(points);



              x_path  ="M "+corner_Points[0].x+" "+corner_Points[0].y;
              x_path +=" L "+corner_Points[2].x+" "+ corner_Points[2].y;
              x_path +=" M "+corner_Points[1].x+" "+ corner_Points[1].y;
              x_path +=" L "+corner_Points[3].x+" "+ corner_Points[3].y;

        };
        console.log(x_path);
        return x_path;
      },

      isBoothSelected(boothID){
        
        let _the_return=false;
        for(i=0;i<this.currentchoices.length;i++){
          if(this.boothName(this.currentchoices[i]).name.toLowerCase().replace(/ /g,'')==boothID.toLowerCase().replace(/ /g,'')){ _the_return=true}
                                                  }
          return  _the_return;
          
       
      },
      addToChoices(selected_booth){
    let _add_it=true
        for(i=0;i<this.currentchoices.length;i++){if(this.currentchoices[i]==selected_booth){_add_it=false}}
      
        return _add_it;


      },
      add_booth_toChoices(selected_booth){
        //on double click add booth to list
        if(selected_booth.reserved==false)
        {
        if(this.addToChoices(selected_booth)){this.menu.visible = false;this.currentchoices.push(selected_booth)}
        else {this.menu.visible = false;this.remove_item(selected_booth)}
        }
      },

      remove_item(_the_item)
      { 
        const index = this.currentchoices.indexOf(_the_item);
        this.currentchoices.splice(index, 1);
        console.log(_the_item);
      },
      selecttheBoothObject(boothID){
        for(i=0;i<booths.length;i++){
         
          if(this.boothName(booths[i]).name.toLowerCase().replace(/ /g,'')==boothID.toLowerCase().replace(/ /g,'')){this.selected_booth=booths[i]}
  
        }
        

      },

      show($event,_booth){
        console.log( $event.type);
 
          if( !this.dragging || $event.type=="mouseover" || $event.type=="mouseover"|| $event.type=="touchend"){


            setTimeout(()=>{

              this.selecttheBoothObject($event.target.id);

              this.menu.x=$event.clientX;
              this.menu.y=$event.clientY;
              
              if($event.type=="touchend"){
                this.menu.x=$event.changedTouches[0].clientX;
                this.menu.y=$event.changedTouches[0].clientY;
              }
              this.menu.visible=true;
              },200);

        //this.$root.selectOnMap($event)
            }
      },
      select($event,_booth){
     
          if( !this.dragging ){
        this.selecttheBoothObject($event.target.id);
        this.menu.x=$event.clientX;
        this.menu.y=$event.clientY;
        this.menu.visible=true;


        }

        //this.$root.selectOnMap($event)
      
      },
      zoom_the_map(){
        console.log(this.zoom.value);
        const rect = this.$el.getBoundingClientRect();
        const img=this.$el.querySelector('.plan_img_container');
        const img_rect = img.getBoundingClientRect();

        this.dragging = false;
        console.log('zoom the Map');
        

        const prevZoom=this.zoom.value.prev;
        
        
        
        const mouseX = (rect.width/2);
        const mouseY = (rect.height/2);
        

        const offsetX =  ((rect.width/2 -img.offsetLeft) * (this.zoom.value/this.zoom.prev))-mouseX;
        const offsetY =((rect.height/2- img.offsetTop ) * (this.zoom.value/this.zoom.prev))-mouseY;


       this.left=-offsetX;
       this.top= -offsetY;

      
      },
      zoomInOut(_the_value){
        this.zoom.prev=this.zoom.value;
        this.zoom.value=_the_value;
       this.zoom_the_map();
      },
      zoomIn(){
        this.zoom.prev=this.zoom.value;
        if(this.zoom.value+0.5<10){this.zoom.value +=0.5;} else{this.zoom.value=10}
        
        this.zoom_the_map();
      },
      zoomOut(){
        this.zoom.prev=this.zoom.value
        if(this.zoom.value-0.5>1){this.zoom.value -=0.5;} else{this.zoom.value=1}
        
        this.zoom_the_map();
      },
     
     
      ShellOrSpace(_booth){
        console.log(_booth.type.toLowerCase());
        if(_booth.type.toLowerCase().includes('space only')==false ){return "SHELL SCHEME BOOTH"}
        else{ return "SPACE ONLY BOOTH"}
        
        
              },
      boothName(item){
        
        var the_name="";
        if( item.hall=="Ground" ){the_name+="G"}else {the_name+="M";}
        if(item.id){the_name+=" - "+item.id}else { the_name+=Math.random()}

        return {id:item.id,hall:item.hall,name:the_name};
      },
    },


  });

  



    

 


  