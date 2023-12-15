


export function checkEmpty1(value) {
    
    const stepOneBtn = document.querySelector('.next-step-btn');
    const phoneInput = document.querySelector('.phone-input');
    
    if (phoneInput.value === "") {
        document.querySelector('.error-text').classList.add('error-text-visible')
        phoneInput.classList.add('phone-input-error')
    }else{
        document.querySelector('.error-text').classList.remove('error-text-visible')
        phoneInput.classList.remove('phone-input-error')
        
        stepOneBtn.addEventListener('click' , () => {
            document.getElementById('step-one-number-div').classList.add('step-one-number-div-unselected');
            document.getElementById('step-two-number-div').classList.add('step-two-number-div-selected');
            console.log('done');
            
        });
       
        
    }

    document.querySelector('.next-step-btn').addEventListener('click' , () => {
        document.querySelector('.multiple-pages-div').innerHTML = `${value}`
    })      
}



export let stepOne = `        
<div class="first-step-page">
          
<div class="up-div">
  <div class="first-stp-header">
    <h3 class="personal">Personal Info</h3>
    <p class="personal-info">Please provide your name, email address, and phone number.</p>
  </div>

  <div class="name-input-div">
    <p class="name-text">Name</p>
    <input type="text" placeholder="e.g.Stephen King" class="name-input">
  </div>

  <div class="email-address-div">
    <p class="name-text">Email Address</p>
    <input type="email" placeholder="e.g.StephenKing@lorem.com" class="email-input">
  </div>

  <div class="phone-number-div">
    <div class="error-text-div">
      <p class="name-text">Phone Number</p>
      <p class="error-text">This field is required</p>
    </div>
    <input type="text" placeholder="e.g. +1 234 567 890" class="phone-input">
  </div>
</div>


<div class="bottom-buttons-div">
  <button class="go-back-btn">GO Back</button>
  <div class="next-position">
    <button class="next-step-btn" >Next Step</button>
  </div>
</div>


</div>`

