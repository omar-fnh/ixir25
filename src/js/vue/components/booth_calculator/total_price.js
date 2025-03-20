total_price(_booths_array){
   the_total=0;
    for(i=0;i<_booths_array.length;i++)
    {
     the_total+=this.getPrice(_booths_array[i]);

    }

   return the_total;
  },