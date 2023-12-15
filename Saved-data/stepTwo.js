export let stepTwo = `<div class="second-step-page">
          
    <div>
      <div class="first-stp-header">
        <p class="personal">Select your plan</p>
        <p class="personal-info">You have the option of monthly or yearly billing.</p>
      </div>
      <div class="choose-type-container"> 
    
        <div id="cart-1" class="choose-cart">
          <div class="type-img">
            <img class="pro-img" src="assets/images/icon-arcade.svg" alt="arcade">
          </div>
          <div class="type-price">
            <p class="p-text">Arcade</p>
            <p id="nine" class="p-price">$9/mo</p>
            <p id="display" class="two-month-free">2 month free</p>
          </div>
        </div>
    
        <div id="cart-2" class="choose-cart">
          <div class="type-img">
            <img class="pro-img" src="assets/images/icon-advanced.svg" alt="arcade">
          </div>
          <div class="type-price">
            <p class="p-text">Advanced</p>
            <p id="twelve" class="p-price">$12/mo</p>
            <p id="display"  class="two-month-free">2 month free</p>
          </div>
        </div>
    
        <div id="cart-3" class="choose-cart">
          <div class="type-img">
            <img  class="pro-img" src="assets/images/icon-pro.svg" alt="arcade">
          </div>
          <div class="type-price">
            <p class="p-text">Pro</p>
            <p id="fifteen" class="p-price">$15/mo</p>
            <p id="display"  class="two-month-free">2 month free</p>
          </div>
        </div>
        
        
      </div>
      <div class="choose-monthly-yearly-container">
        <div class="make-center">
          <p class="monthly" id="monthly">Monthly</p>
          <input  type="checkbox" name="year" id="check" class="year-month">
          <label for="check" class="button"></label>
          <p class="yearly" id="yearly">Yearly</p>
        </div>
        
      </div>
    </div>
    
    <div class="bottom-buttons-div-two">
      <button class="go-back-btn-two" onClick="window.location.reload()">GO Back</button>
      <div class="next-position-two">
        <button class="next-step-btn-two" >Next Step</button>
      </div>
    </div>
    
    </div>`



export let saveResult = 0
export let status = 0;

export let arcade = false;
export let advanced = false;
export let pro = false;


export function cartPicker(){

    const cartN1 = document.getElementById('cart-1');
    const cartN2 = document.getElementById('cart-2');
    const cartN3 = document.getElementById('cart-3');
    
    cartN1.addEventListener('click' , () => {
        //console.log('hello world');
        cartN1.classList.add('choose-cart-selected');
        if(cartN2.classList.contains('choose-cart-selected')) {
            cartN2.classList.remove('choose-cart-selected');
        }else if(cartN3.classList.contains('choose-cart-selected')) {
            cartN3.classList.remove('choose-cart-selected');
        }

        

        
        const choosePaymentType = document.querySelector('.year-month');
        
        if(choosePaymentType.checked === true) {
          saveResult = 90
          status = 1;
          console.log(saveResult)
        }else {
          saveResult = 9;
          status = 0;
          console.log(saveResult);
        }
        

    })

    cartN2.addEventListener('click' , () => {
        //console.log('hello , hi');
        cartN2.classList.add('choose-cart-selected');
        if(cartN1.classList.contains('choose-cart-selected')) {
            cartN1.classList.remove('choose-cart-selected');
        }else if(cartN3.classList.contains('choose-cart-selected')) {
            cartN3.classList.remove('choose-cart-selected');
        }

        

        

        const choosePaymentType = document.querySelector('.year-month');
        if(choosePaymentType.checked === true) {
          saveResult = 120
          status = 1;
          console.log(saveResult)
        }else {
          saveResult = 12
          status = 0;
          console.log(saveResult)
        }
    })


    cartN3.addEventListener('click' , () => {
        //console.log('hello , hi');
        cartN3.classList.add('choose-cart-selected');
        if(cartN1.classList.contains('choose-cart-selected')) {
            cartN1.classList.remove('choose-cart-selected');
        }else if(cartN2.classList.contains('choose-cart-selected')) {
            cartN2.classList.remove('choose-cart-selected');
        }

        

        const choosePaymentType = document.querySelector('.year-month');
        if(choosePaymentType.checked === true) {
          saveResult = 150
          status = 1;
          console.log(saveResult)
        }else{
          saveResult = 15
          console.log(saveResult);
          status = 0 ;
        }
    })

    


    

    
}











export function checkPayment() {
    const monthly = document.getElementById('monthly');
    const yearly = document.getElementById('yearly');
    const massage = document.querySelectorAll('.two-month-free');
    const choosePaymentType = document.querySelector('.year-month');
    var selected = document.querySelector(
        'input[name="year"]:checked'
    );

    choosePaymentType.addEventListener('click' , () => {
        if(choosePaymentType.checked === true) {
            yearly.classList.add('yearly-selected')
            monthly.classList.add('monthly-selected')
            console.log('not-selected')
            document.getElementById('nine').innerHTML= "$90/yr"
            document.getElementById('twelve').innerHTML= "$120/yr"
            document.getElementById('fifteen').innerHTML= "$150/yr"
            
            massage.forEach((index) => {
                index.classList.remove('two-month-free-none')
            })

            
            
            console.log('selected')
        }else{
            yearly.classList.remove('yearly-selected')
            monthly.classList.remove('monthly-selected')
            document.getElementById('nine').innerHTML= "$9/mo"
            document.getElementById('twelve').innerHTML= "$12/mo"
            document.getElementById('fifteen').innerHTML= "$15/mo"
            
            massage.forEach((index) => {
                index.classList.add('two-month-free-none')
            })

            
            
            
        }

        


        
    })
}

  


