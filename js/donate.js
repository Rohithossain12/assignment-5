
// Donate for Flood at Noakhali, Bangladesh


document
  .getElementById("donate-button1")
  .addEventListener("click", function () {
    const inputValue1 = getInputFieldValueById("input-button1");

    if (!isNaN(inputValue1) && inputValue1 > 0) {
    const balance1 =getTextFieldValueById('balance-1');
    const newBalance1 =inputValue1+balance1;
    document.getElementById('balance-1').innerText =newBalance1;
    const modal = document.getElementById("my_modal_1");
    modal.showModal();
    document.getElementById('input-button1').value =""
    } else {
      alert("Invalid Donation Amount");
    }
  });


// Donate for Flood Relief in Feni,Bangladesh
document
  .getElementById("donate-button2")
  .addEventListener("click", function () {
    const inputValue2 = getInputFieldValueById("input-button2");
    if (!isNaN(inputValue2) && inputValue2 > 0) {
        const balance2 =getTextFieldValueById('balance-2');
        const newBalance2 =inputValue2+balance2;
        document.getElementById('balance-2').innerText =newBalance2;
      const modal = document.getElementById("my_modal_1");
      modal.showModal();
       document.getElementById('input-button2').value =""
    } else {
      alert("Invalid Donation Amount");
    }
  });


// Aid for Injured in the Quota Movement
document
  .getElementById("donate-button3")
  .addEventListener("click", function () {
    const inputValue3 = getInputFieldValueById("input-button3");
    if (!isNaN(inputValue3) && inputValue3 > 0) {
        const balance3 =getTextFieldValueById('balance-3');
        const newBalance3 =inputValue3+balance3;
        document.getElementById('balance-3').innerText =newBalance3;  
      const modal = document.getElementById("my_modal_1");
      modal.showModal();
       document.getElementById('input-button3').value =""
    } else {
      alert("Invalid Donation Amount");
    }
  });


 