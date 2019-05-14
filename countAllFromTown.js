function countAllFromTown(reg,location){
    //console.log(reg)
      var numberOfRegs = [];
    var splittedRegs = reg.split(',');
    //console.log(splittedRegs)
     for (var i=0; i<splittedRegs.length;i++){
       var allRegs = splittedRegs[i];
       var allRegsTrimmed = allRegs.trim();
       //console.log(allRegsTrimmed)
       if (allRegsTrimmed.startsWith(location))
         numberOfRegs.push(allRegsTrimmed);
       }
       return(numberOfRegs.length);
     }
     