const array = [3,4,8,10];

const [x,,y,,z = 999] = array;
console.log(x,y,z);

/* const x = array[0];
const y = array[2];
const z = array[4] || 999;
console.log(x,y,z); */