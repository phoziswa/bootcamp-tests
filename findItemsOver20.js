function findItemsOver20(list){
    console.log(list)
  var items = [];
  for(var i=0; i<list.length;i++){
   var products = list[i].qty
   if(products>20){
     items.push(list[i])
  }
  }
    return items
  }
  
  