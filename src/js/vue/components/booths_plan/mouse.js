    
    const img=this.$el.querySelector('.plan_img_container');


  //stop scrolling on mouse wheel

img.addEventListener("wheel", (event) => {
  event.preventDefault();
  event.stopPropagation();
  this.menu.visible = false;
  const prevZoom=this.zoom.value;
  this.zoom.prev=prevZoom;
  if(this.zoom.value-event.deltaY*0.01>1 && this.zoom.value-event.deltaY*0.01<10 ){this.zoom.value-=event.deltaY*0.01}
  else if(this.zoom.value-event.deltaY*0.01<1){this.zoom.value=1}
  else if (this.zoom.value-event.deltaY*0.01>10){this.zoom.value=10}
 
  
  const rect = this.$el.getBoundingClientRect();
  
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;


  const offsetX = (event.offsetX * (this.zoom.value/prevZoom))-mouseX;
  const offsetY =(event.offsetY * (this.zoom.value/prevZoom))-mouseY;
 this.left=-offsetX;
 this.top= -offsetY;




  return false;
  } ,{passive: false});

//mouse down
this.$el.addEventListener("mousedown", (event) => {
    this.lastX = event.clientX;
    this.lastY = event.clientY;
    this.dragging = true; this.menu.visible = false;
    event.preventDefault();
  });


//mouse move

this.$el.addEventListener('mousemove', (event) => {
    if (this.dragging) {
      this.pan=true;
      this.menu.visible = false;
  
      const canvas_width=this.$el.offsetWidth;
      const canvas_height=this.$el.offsetHeight;
      const img_width=this.$el.querySelector('.plan_img_container').offsetWidth;
      const img_height=this.$el.querySelector('.plan_img_container').offsetHeight;
  
  
      const deltaX = event.clientX - this.lastX;
      const deltaY = event.clientY - this.lastY;
  
      this.left= this.left+ deltaX;
      this.top= this.top+ deltaY;
  
      const maxleft=canvas_width/5;
      const maxright=canvas_width-img_width-maxleft;
  
      const maxtop=canvas_height/5;
      //const maxbottom=canvas_height-img_height-maxtop;
      const maxbottom=-img_height+canvas_height/5;
  
      if(this.left>maxleft){this.left=maxleft}
      if(this.left<maxright){this.left=maxright}
  
      if(this.top>maxtop){this.top=maxtop}
      if(this.top<maxbottom){this.top=maxbottom}

  
      this.lastX = event.clientX;
      this.lastY = event.clientY;
    }
  });
  
  // mouse Up
  
  document.addEventListener('mouseup', (event) => {
    if( this.pan == true && this.dragging==true){setTimeout(()=>{this.menu.visible = false}, 10);}
    this.dragging = false;
    this.pan=false;
    
    
  });
  