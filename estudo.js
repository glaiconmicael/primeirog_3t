
function total(){
    let c = document.getElementById("capital").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if (!Number(c)){
       alert("o valor do capital deve ser um numero");
       document.getElementById("capital").value = "";
       document.getElementById("capital").focus(); 
      return
    }
  if (!Number(j)){
      alert("o valor do juros deve ser um numero");
      document.getElementById("juros").value = "";
      document.getElementById("juros").focus(); 
     return
  }
  if (!Number(t)){
    alert("o valor do meses deve ser um numero");
    document.getElementById("meses").value = "";
    document.getElementById("meses").focus(); 
   return
}
    let m = 0;
   for (let i = 1; m <= t; i ++){
    m = c * (1 + (j/100));
    document.write("valor do mes " + i + " = " + m + "<br>");
    c = m;
   }
 document.write("montante: " + m)
}
