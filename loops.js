function forLoop(array){
  for(let i = 0; i < 27; i++){
    if(i === 1){
    array[i] = `I am ${i} strange loop.`;
    }else{
      array[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`;
    }
  }
  return array;
}