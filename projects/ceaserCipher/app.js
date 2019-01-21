const submit_div = document.getElementById("submit");
const output_div = document.getElementById("output");

function main(){
    let userInput = document.getElementById("textInput").value;
    let shiftInput = document.getElementById("shiftInput").value;
    let output = encrypt(userInput, shiftInput);
    output_div.innerHTML = `${output}`;   
}
function encrypt(str,shift){
  let obj = str.split('');
  let output= '';
  for(let i =0; i < obj.length; i++){
    let c = obj[i];
    if(c.match(/[a-z]/i)){
      let asciiCode = str.charCodeAt(i)

      if((asciiCode >= 65)&& (asciiCode <=90)){
        c = String.fromCharCode(((asciiCode - 65 + shift) % 26) + 65);
      }
      if((asciiCode >= 97)&& (asciiCode <=122)){
        c = String.fromCharCode(((asciiCode - 97 + shift) % 26) + 97);
      }
    }

  output += c;
  }
  return output;
}
