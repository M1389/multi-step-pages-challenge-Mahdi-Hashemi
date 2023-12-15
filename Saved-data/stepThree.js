


export let stepThree = `
<div class="seprater">
    <div class="first-stp-header">
    <p class="personal">Pick add-ons</p>
    <p class="step-three-header">Add-ons help enhance your gaming experience.</p>
    </div>

    <div class="add-ons-container">
    
    <div class="option-1" id="option-1">

        <div>
        <input class="online-sevice-check" type="checkbox" id="input-1">
        </div>

        <div class="inside-div">
        <div class="option-middle-text">
            <p class="middle-header">Online-sevice</p>
            <p class="middle-text">Access to multiplayer games</p>
        </div>
        <div>
            <p id='oneDollar' class="price-option">+1$/mo</p>
        </div>
        </div>

    </div>

    <div class="option-1" id="option-2">

        <div>
        <input class="online-sevice-check" type="checkbox" id="input-2">
        </div>

        <div class="inside-div">
        <div class="option-middle-text">
            <p class="middle-header">Larger storage</p>
            <p class="middle-text">Extra 1TB of cloud save</p>
        </div>
        <div>
            <p id='twoDollar' class="price-option">+2$/mo</p>
        </div>
        </div>
    </div>

    <div class="option-1" id="option-3">

        <div>
        <input class="online-sevice-check" type="checkbox" id="input-3">
        </div>

        <div class="inside-div">
        <div class="option-middle-text">
            <p class="middle-header">Customize profile</p>
            <p class="middle-text">Custom theme on your profile</p>
        </div>
        <div>
            <p id='threeDollar' class="price-option">+2$/mo</p>
        </div>
        
        </div>
    </div>

    

    </div>
    <div class="bottom-buttons-div-two">
    <button class="go-back-btn-two" id='goToTwoFt'>GO Back</button>
    <div class="next-position-two">
        <button class="next-step-btn-two" id='goTofour'>Next Step</button>
    </div>
    </div>
</div>`






export let checkedOne = false;
export let checkedTwo = false;
export let checkedThree = false;

   


export function checkOption() {
    document.querySelector('#input-1').addEventListener('click' , () => {
        let checkOptionOne = document.querySelector('#input-1')
    
        if(checkOptionOne.checked){
            document.querySelector('#option-1').classList.add('option-1-selected')
            checkedOne = true
            console.log(checkedOne)
        }else{
            document.querySelector('#option-1').classList.remove('option-1-selected')
            checkOptionOne = false
            console.log(checkOptionOne)

        }
    })


    document.querySelector('#input-2').addEventListener('click' , () => {
        let checkOptionOne = document.querySelector('#input-2')
    
        if(checkOptionOne.checked){
            document.querySelector('#option-2').classList.add('option-1-selected')
            checkedTwo = true
        }else{
            document.querySelector('#option-2').classList.remove('option-1-selected')
            checkedTwo = false
        }
    })


    document.querySelector('#input-3').addEventListener('click' , () => {
        let checkOptionOne = document.querySelector('#input-3')
    
        if(checkOptionOne.checked){
            document.querySelector('#option-3').classList.add('option-1-selected')
            checkedThree = true
        }else{
            document.querySelector('#option-3').classList.remove('option-1-selected')
            checkedThree = false
        }
    })
}

