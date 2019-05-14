function mostProfitableDepartment(param){
    //console.log(param)
  var profit = 0;
  var results  = [];
  for (var i=0; i<param.length;i++){
   var mostSales = param[i].sales;
   var department = param[i].department;
    if(results  < mostSales){
      results = mostSales
    profit = department
     }
   }
    return profit
    console.log(department)
  }
  
  
  function mostProfitableDay(param){
    //console.log(param)
  var profit = 0;
  var results  = [];
  for (var i=0; i<param.length;i++){
   var mostSales = param[i].sales;
   var day = param[i].day;
    if(results < mostSales){
      results= mostSales
    profit = day
     }
   }
    //console.log(day)
    return day
  }