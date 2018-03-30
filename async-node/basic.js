console.log('hello async node');
setTimeout(()=>{
  console.log('inside callback function(1-order)');
},200)

console.log('outside(2-order)');
