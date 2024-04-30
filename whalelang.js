let input = "Go back to December all the time for the summer";
const vowels = ["a","e","i","o","u"];
let resultArray = [];

for(let i=0;i<input.length;i++){
  if(input[i]==="e"){
    resultArray.push(input[i]);
  }
  if(input[i]==="u"){
    resultArray.push(input[i]);
  }

  if(input[i] === vowels[i]){
    resultArray.push(input[i]);
  }     
}
  const resultString = resultArray.join('').toUpperCase();
  console.log(resultString);
