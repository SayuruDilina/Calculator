function calc(){
   let num1=""; 
  num1 = new Number(document.getElementById("number01"). value) ;
  let num2="";
  num2=  new Number(document.getElementById("number02").value);
  let opretor= document.getElementById("oprator").value
   let lblOutput= document.getElementById("Output");
   
    let result;
  if (opretor=="+"){
      result=num1 + num2;
  }
  if (opretor=="-"){
    result=num1 - num2;
}
if (opretor=="*"){
    result=num1 * num2;
}
if (opretor=="/"){
    result=num1 / num2;
}
    lblOutput.innerHTML=result;
}