

function getpin(){
    
    const pin= (Math.random() * 10000);
     const pinNumber=Math.round(pin) + '';
    //  console.log("out", pinNumber)

     if(pinNumber.length === 4){

         const pinInput = document.getElementById("generate-input");
         pinInput.value = pinNumber;

     }
     else{
        getpin();
     }

    // console.log(pinNumber)

}

document.getElementById("generate-btn").addEventListener("click", function(){

    const pin = getpin(); 
   
})

// type pin in button 


document.getElementById("calculator").addEventListener('click', function(even){

    const numberText = even.target.innerText;
 let showNumber;
  const pinInputFeiled = document.getElementById("pin-match-input");
  const prevenPin = document.getElementById("pin-match-input").value;
    if(isNaN(numberText)){

        if(numberText == "C"){
            pinInputFeiled.value="";
             const successMassage = document.getElementById("notify-success");
             successMassage.style.display = "none";
             const errorMassage = document.getElementById("notify-error");
             errorMassage.style.display = "none";
        }
        else if( numberText  == "<"){
            const splitNumber= prevenPin.split('');
            const updateNumber=splitNumber.pop();
            const splitShow=splitNumber.join('');
            pinInputFeiled.value= splitShow;
            console.log(pinInputFeiled);
             const successMassage = document.getElementById("notify-success");
             successMassage.style.display = "none";
             const errorMassage = document.getElementById("notify-error");
             errorMassage.style.display = "none";
            
        }

    }
    else{

     
          const updatePin = prevenPin + numberText;
            pinInputFeiled.value = updatePin;
          console.log(updatePin)        

    }
    
    
});

document.getElementById("submit-btn").addEventListener("click",function(){
    const generatePin= document.getElementById("generate-input").value;

    const matchPin = document.getElementById("pin-match-input").value;

    if( generatePin == matchPin ){

        const successMassage = document.getElementById("notify-success");
        successMassage.style.display="block";
        const errorMassage= document.getElementById("notify-error");
         errorMassage.style.display="none";
    }
    else{
        const errorMassage = document.getElementById("notify-error");
        errorMassage.style.display = "block";
       const successMassage = document.getElementById("notify-success");
       successMassage.style.display = "none";
    }





});