
// Donate for Flood at Noakhali, Bangladesh


document
  .getElementById("donate-button1")
  .addEventListener("click", function () {
    const inputValue1 = getInputFieldValueById("input-button1");
    const mainBalance = getTextFieldValueById("main-balance");

    if (!isNaN(inputValue1) && inputValue1 > 0 && inputValue1 < mainBalance) {
      const balance1 = getTextFieldValueById("balance-1");
      //   donate balance
      const newBalance1 = inputValue1 + balance1;
      document.getElementById("balance-1").innerText = newBalance1;
      //  remaining balance
      const remainingBalance = mainBalance - inputValue1;
      document.getElementById("main-balance").innerText = remainingBalance;
      const modal = document.getElementById("my_modal_1");
      modal.showModal();
      document.getElementById("input-button1").value = "";
    } else {
      alert("Invalid Donation Amount");
    }
  });




// Donate for Flood Relief in Feni,Bangladesh

document
  .getElementById("donate-button2")
  .addEventListener("click", function () {
    const inputValue2 = getInputFieldValueById("input-button2");
    const mainBalance = getTextFieldValueById("main-balance");

    if (!isNaN(inputValue2) && inputValue2 > 0 && inputValue2 < mainBalance) {
      const balance2 = getTextFieldValueById("balance-2");
      //   donate balance
      const newBalance2 = inputValue2 + balance2;
      document.getElementById("balance-2").innerText = newBalance2;
      //   remaining balance
      const remainingBalance = mainBalance - inputValue2;
      document.getElementById("main-balance").innerText = remainingBalance;
      const modal = document.getElementById("my_modal_1");
      modal.showModal();
      document.getElementById("input-button2").value = "";
    } else {
      alert("Invalid Donation Amount");
    }
  });



// Aid for Injured in the Quota Movement

document
  .getElementById("donate-button3")
  .addEventListener("click", function () {
    const inputValue3 = getInputFieldValueById("input-button3");
    const mainBalance = getTextFieldValueById("main-balance");

    if (!isNaN(inputValue3) && inputValue3 > 0 && inputValue3 < mainBalance) {
      const balance3 = getTextFieldValueById("balance-3");
      //   donate balance
      const newBalance3 = inputValue3 + balance3;
      document.getElementById("balance-3").innerText = newBalance3;
      // remaining balance
      const remainingBalance = mainBalance - inputValue3;
      document.getElementById("main-balance").innerText = remainingBalance;
      const modal = document.getElementById("my_modal_1");
      modal.showModal();
      document.getElementById("input-button3").value = "";
    } else {
      alert("Invalid Donation Amount");
    }
  });
