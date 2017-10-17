function forLoop(array) {
const t = 25;
//var s = i=1;

for ( let i = 0; i < t; i++ ) {
  if (i === 0) {
       array.push( "I am 1 strange loop.")
  } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
     return array
}


//=============================================



function whileLoop(number) {

  while ( number > 0 ) {
     console.log(--number);
}
return "done"
}

//=================================================


function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  var l = array.length

  //Math.random() >= l
  do{
    array.pop(l--)
  }while ( array.length > 0 && maybeTrue())

  return array
}
