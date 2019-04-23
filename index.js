/* var katzDeliLine = [];
function takeANumber (katzDeliLine,name){
 katzDeliLine.push(name);
 return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  }*/
  
  let counter = 0; 
  function takeANumber(katzDeliLine){
    counter ++;
    katzDeliLine.push(counter);
    return (`${counter}`);
    
  }
  
  
  
  function nowServing(katzDeliLine){
   if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!";
  }else{
   
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

var katzDeliLine = [];
function currentLine(deliLine){
  for (let i = 0; i < deliLine.length; i++){
   katzDeliLine.push(` `+[i+1]+`. `  + deliLine[i]) 
  }
  
  if (deliLine.length === 0){
   return "The line is currently empty.";
  
  }else
 
  return (`The line is currently:${katzDeliLine}`);
  
}

