//touch start
document.addEventListener("touchstart", (event) => {
    this.lastX = event.touches[0].clientX
    this.lastY = event.touches[0].clientY
    this.dragging = true;
    event.preventDefault();

  });



  //touch move

document.addEventListener('touchmove', (event) => {
    if (this.dragging) {
    
  
      const canvas_width=this.$el.offsetWidth;
      const canvas_height=this.$el.offsetHeight;
      const img_width=this.$el.querySelector('.plan_img_container').offsetWidth;
      const img_height=this.$el.querySelector('.plan_img_container').offsetHeight;
  
  
      const deltaX = event.touches[0].clientX - this.lastX;
      const deltaY = event.touches[0].clientY - this.lastY;


      

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
  
      this.lastX =event.touches[0].clientX;
      this.lastY =event.touches[0].clientY;
    }
    event.preventDefault();
  });
  
  // touch End
  
  document.addEventListener('touchend', (event) => {
    this.dragging = false;
    
  });