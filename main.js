

let age = document.getElementById("age");  
let height = document.getElementById("height");  
let weight = document.getElementById("weight");  
let male = document.getElementById("m");  
let female = document.getElementById("f");  
let form = document.getElementById("form");  
function validateForm(){  
 if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){  
  alert("All fields are required!");  
  document.getElementById("submit").removeEventListener("click", countBmi);  
 }else{  
  countBmi();  
 }  
}  
document.getElementById("submit").addEventListener("click", validateForm);  
function countBmi(){  
 let p = [age.value, height.value, weight.value];  
 if(male.checked){  
  p.push("male");  
 }else if(female.checked){  
  p.push("female");  
 }  
 form.reset();  
 let bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);  
 let result = '';  
 if(bmi<18.5){  
  result = 'Bajo peso';  
   }else if(18.5<=bmi&&bmi<=24.9){  
  result = 'Saludable';  
   }else if(25<=bmi&&bmi<=29.9){  
  result = 'Sobre peso';  
   }else if(30<=bmi&&bmi<=34.9){  
  result = 'Obeso';  
   }else if(35<=bmi){  
  result = 'Obesidad Extrema';  
   }  
 let h1 = document.createElement("h1");  
 let h2 = document.createElement("h2");  
 let t = document.createTextNode(result);  
 let b = document.createTextNode('BMI: ');  
 let r = document.createTextNode(parseFloat(bmi).toFixed(2));  
 h1.appendChild(t);  
 h2.appendChild(b);  
 h2.appendChild(r);  
 document.body.appendChild(h1);  
 document.body.appendChild(h2);  
 document.getElementById("submit").removeEventListener("click", countBmi);  
 document.getElementById("submit").removeEventListener("click", validateForm);  
}  
document.getElementById("submit").addEventListener("click", countBmi);  

// document.addEventListener('DOMContentLoaded', function(){
  //   let formulario = document.getElementById('formul');
  //   formulario.addEventListener('reset', function() {
    //     formulario.reset();
    //   });
    // });
    
let btnReset = document.querySelector('#reset');
btnReset.addEventListener("click",()=>{
    document.location.reload();

})
