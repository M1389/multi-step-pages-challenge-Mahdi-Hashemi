export let finalStep = `
<div class='final-con'>
<div class="first-stp-header">
<p class="personal">Finishing-up</p>
<p class="step-three-header">Double check everything looks OK before confirming.</p>
</div>

<div class="big-box">
<div class="finall-check-container">
  <div class="payment-check-page">

    
      <div class="payment-header">
        <div>
          <p class="Arcade">Arcade </p><span class="p-type" id='y-m'>(Monthly)</span>
          <a href="#" class='changerL' onClick="window.location.reload()">change</a>
        </div>
        <p class="price-tag">$<span class= 'number'>9</span><span class='mo' id='mo'>/mo</span></p>
      </div>

      <div class="box" id='ser-1'>
        <p class="service">online service</p>
        <p class="service-price">+$<span id='spanNum'>1</span><span class='mo' id='mo'>/mo</span></p>
      </div>

      <div class="box" id='ser-2'>
        <p class="service">Larger storage</p>
        <p class="service-price">+$<span id='spanNum2'>2</span><span class='mo'>/mo</span></p>
      </div>

      <div class="box" id='ser-3'>
        <p class="service">Customize profile</p>
        <p class="service-price">+$<span id='spanNum3'>2</span><span class='mo'>/mo</span></p>
      </div>
    </div>

    <div class="box">
      <p class="service">Total (per <span id='lastTotal'>month</span>)</p>
      <p class="total">+$<span class='finalll'>0</span><span class='mo' id='mo'>/mo</span></p>
      
    </div>
  


</div>

<div class="bottom-buttons-div-four">
  <button id='go-back-to-three' class="go-back-btn-two">GO Back</button>

  <button id='confirm' class="next-step-btn-two" id='confirm'>Confirm</button>
  
</div>
</div>
</div>
`

