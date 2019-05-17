function findItemsOver(list,threshold){
    // console.log(threshold)
   var items = [];
   for(var i=0; i<list.length;i++){
    var products = list[i].qty
    if(products > threshold){
      items.push(list[i])
   }
   }
     return items
   }
