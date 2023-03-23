function vaxTrail(arr = []) {
  const valueObj = {
    A: [],
    B: [],
    C: [],
    D: []
  };

  function validation(obj) {
    if (obj.temperature >= 100) {
      valueObj.D.push(obj);

    } else if (obj.age > 19 && obj.age < 31 && obj.temperature < 100) {
      valueObj.A.push(obj)
        ;
    } else if (obj.age > 30 && obj.age < 41 && obj.temperature < 100) {
      valueObj.B.push(obj);

    } else if (obj.age > 40 && obj.age < 51 && obj.temperature < 100) {
      valueObj.C.push(obj)
    }

  }

  arr.map(elm => {
    return validation(elm);
  });

  return valueObj
};
