
import { checkPayment , cartPicker, status } from "./Saved-data/stepTwo.js";
import { stepTwo } from "./Saved-data/stepTwo.js";
import { stepOne } from "./stepOne.js";
import { stepThree, checkOption } from "./Saved-data/stepThree.js";
import { finalStep } from "./Saved-data/final-page.js";
import { checkedOne ,checkedTwo , checkedThree } from "./Saved-data/stepThree.js";
import { saveResult } from "./Saved-data/stepTwo.js";
import { thanks } from "./Saved-data/thankYou.js";
// All of the stuying of step-One page will go here.


const phoneInput = document.querySelector('.phone-input');

function checkEmpty(value) {
    if (phoneInput.value === "") {
        document.querySelector('.error-text').classList.add('error-text-visible')
        phoneInput.classList.add('phone-input-error')
    }else{
        document.querySelector('.error-text').classList.remove('error-text-visible')
        phoneInput.classList.remove('phone-input-error')
        
        
        document.querySelector('.multiple-pages-div').innerHTML = `${value}`
        document.getElementById('step-one-number-div').classList.add('step-one-number-div-unselected');
        document.getElementById('step-two-number-div').classList.add('step-two-number-div-selected');
        console.log('done');
        
        
        
        
    }   

    
}

document.querySelector('.next-step-btn').addEventListener('click' , () => {
    
    gotoTwo()
    
})




function gotoTwo(){
    
    
    checkEmpty(stepTwo);
    checkPayment();
    cartPicker();
    goBackStepTwo();
    
    gotoThird();
    

    
}



function goBackStepTwo() {
    document.querySelector(('.go-back-btn-two')).addEventListener('click' , () => {
        
        if(document.querySelector('.multiple-pages-div').innerHTML = stepOne) {
            document.querySelector('.multiple-pages-div').innerHTML = stepOne;

            gotoTwo()
            document.getElementById('step-one-number-div').classList.remove('step-one-number-div-unselected');
            document.getElementById('step-two-number-div').classList.remove ('step-two-number-div-selected');
            console.log('this is working')
            
        }
        console.log('hi')
        
    })

}

let oneD = 10
let twoD = 20
let threeD = 30
let one = 1
let two = 2
let three = 3
function stepThreeStatus (){
    if(status === 1) {
        
        document.querySelector('#oneDollar').innerHTML = `+$${oneD}/yr`
        document.querySelector('#twoDollar').innerHTML = `+$${twoD}/yr`
        document.querySelector('#threeDollar').innerHTML = `+$${twoD}/yr`
        
    }else{
        
        document.querySelector('#oneDollar').innerHTML = `+$${one}/mo`
        document.querySelector('#twoDollar').innerHTML = `+$${two}/mo`
        document.querySelector('#threeDollar').innerHTML = `+$${two}/mo`
    }
}



function gotoThird() {
    document.querySelector('.next-step-btn-two').addEventListener('click' , () => {
        document.querySelector('.multiple-pages-div').innerHTML = stepThree;
        document.getElementById('step-one-number-div').classList.add('step-one-number-div-unselected');
        document.getElementById('step-two-number-div').classList.remove ('step-two-number-div-selected');
        document.getElementById('step-three-number-div').classList.add ('step-three-number-div-selected');
        checkOption()
        goTwofThree()
        stepThreeStatus()
        goToFinall()
        
        
    })

    
}


function goTwofThree() {
    document.querySelector('#goToTwoFt').addEventListener('click' , () => {
        document.querySelector('.multiple-pages-div').innerHTML = stepTwo;
        checkPayment();
        cartPicker();
        gotoThird();
        goBackStepTwo();
        document.getElementById('step-three-number-div').classList.remove ('step-three-number-div-selected');
        document.getElementById('step-two-number-div').classList.add ('step-two-number-div-selected');



    })
}




function goThreefFinal() {
    document.querySelector('#go-back-to-three').addEventListener('click' , () =>{
        document.querySelector('.multiple-pages-div').innerHTML = stepThree;
        document.getElementById('step-three-number-div').classList.add ('step-three-number-div-selected');
        document.querySelector('#step-four-number-div').classList.remove('step-three-number-div-selected');
        checkOption()
        goTwofThree()
        stepThreeStatus()
        goToFinall()
        
        
    })
}

let total = 0


function checkFinallPaymentAndStatus() {
    
    let newst = status
    
    if (!checkedOne) {
        document.querySelector('#ser-1').classList.add('box-unchecked');
        
    }
    
    if(checkedOne) {
        if(newst === 1) {
            document.querySelector('#spanNum').innerHTML = "10";
            total += 10
        }else {
            document.querySelector('#spanNum').innerHTML = "1";
            total += 1

        }
    }

    
    
    if(!checkedTwo) {
        document.querySelector('#ser-2').classList.add('box-unchecked');
    }

    if(checkedTwo) {
        if(newst === 1) {
            document.querySelector('#spanNum2').innerHTML = "20";
            total += 20
        }else {
            document.querySelector('#spanNum2').innerHTML = "2";
            total += 2

        }
    }
    
    if(!checkedThree) {
        document.querySelector('#ser-3').classList.add('box-unchecked');

    }

    if(checkedThree) {
        if(newst === 1) {
            document.querySelector('#spanNum3').innerHTML = "20";
            total += 20

        }else {
            document.querySelector('#spanNum3').innerHTML = "2"
            total += 2
        }
    }

    

    let finalP = document.querySelector('.number').innerHTML = saveResult;

    if(finalP === 9 || finalP === 90) {
        document.querySelector('.Arcade').innerHTML = "Arcade"
    }else if(finalP === 12 || finalP === 120) {
        document.querySelector('.Arcade').innerHTML = "Advaced"
    }else if(finalP === 15 || finalP === 150) {
        document.querySelector('.Arcade').innerHTML = "Pro"
    }

    

    
    
    
   
    total += saveResult
    console.log(total)

    document.querySelector('.finalll').innerHTML = total;
    
    if(status === 1) {
        document.querySelector('.p-type').innerHTML = '(yearly)'
        document.querySelectorAll('.mo').forEach((index) => {
            index.innerHTML = "/yr"
        })
        document.querySelector('#lastTotal').innerHTML = "year"
    }else {
        document.querySelector('.p-type').innerHTML = '(Monthly)'
    }
    
    
}







function goToFinall() {
    document.querySelector('#goTofour').addEventListener('click' , () => {
        document.querySelector('.multiple-pages-div').innerHTML = finalStep;
        document.getElementById('step-three-number-div').classList.remove ('step-three-number-div-selected');
        document.querySelector('#step-four-number-div').classList.add('step-three-number-div-selected');
        goThreefFinal()
        checkFinallPaymentAndStatus()
        confirm()
        
        
    })

    
    
}

 
function confirm() {
    document.querySelector('#confirm').addEventListener('click' , () => {
        document.querySelector('.multiple-pages-div').innerHTML = thanks;
        console.log('done')

    })
}