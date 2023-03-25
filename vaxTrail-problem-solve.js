const sortArray = (prevArr,current) => {
    const prevVal = prevArr;
    return [...prevVal,current].sort((x,y)=>x.age - y.age);
};

function vaxTrail (arr=[]) {
  const valueObj = {
    A: [],
    B: [],
    C: [],
    D: []
  };
  
  function validation(obj) {
    if(obj.temperature >= 100) { valueObj.D = sortArray(valueObj.D,obj)
    } else if (obj.age >= 20 && obj.age <= 30 && obj.temperature < 100) {
      valueObj.A = sortArray(valueObj.A,obj)
      ;
    } else if (obj.age >= 31 && obj.age <= 40 && obj.temperature < 100) {
      valueObj.B = sortArray(valueObj.B,obj)
      
    } else if  (obj.age >= 41 && obj.age <= 50 && obj.temperature < 100){
      sortArray(valueObj.C,obj)
    }
    
  }
  
  arr.map(elm => {
    return validation(elm);
  });
  
  return valueObj
};
