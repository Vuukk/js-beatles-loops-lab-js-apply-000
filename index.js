<<<<<<< HEAD
function theBeatlesPlay(musicians,instruments) {
  var x = []
  for (var i = 0; i < musicians.length; i++) {
    x.push(musicians[i] + ' plays ' + instruments[i])
  }
  return x;
}
  function johnLennonFacts(array){
     var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}
function iLoveTheBeatles (number){
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;

=======
function theBeatlesPlay (musicians, instruments) {
    var array = []
    for (var step = 0; step < musicians.length; step++) {
        array.push (musicians [step] + " plays " + instruments [step])
      
    }
  
 return array   
>>>>>>> 07c962702ee2b205a091fdee0978be8047c138b2
}