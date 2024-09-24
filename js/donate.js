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

      // time zone and mentioned
      const title1 = document.getElementById("title-1").innerText;
      const time = new Date();

      //  transaction history
      const div = document.createElement("div");
      div.classList.add(
        "container",
        "border-2",
        "rounded-xl",
        "mt-10",
        "p-5",
        "space-y-2"
      );
      div.innerHTML = `
      <p class="text-lg font-semibold" > ${inputValue1} Taka is Donated  ${title1}</p>
      <p> ${time}</p>

    `;
      document.getElementById("history-container").appendChild(div);
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

      // time zone and mentioned
      const title2 = document.getElementById("title-2").innerText;
      const time = new Date();

      //  transaction history
      const div = document.createElement("div");
      div.classList.add(
        "container",
        "border-2",
        "rounded-xl",
        "mt-10",
        "p-5",
        "space-y-2"
      );
      div.innerHTML = `
     <p class="text-lg font-semibold" > ${inputValue2} Taka is Donated  ${title2}</p>
     <p> ${time}</p>

   `;
      document.getElementById("history-container").appendChild(div);
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
      // time zone and mentioned
      const title3 = document.getElementById("title-3").innerText;
      const time = new Date();

      //  transaction history
      const div = document.createElement("div");
      div.classList.add(
        "container",
        "border-2",
        "rounded-xl",
        "mt-10",
        "p-5",
        "space-y-2"
      );
      div.innerHTML = `
     <p class="text-lg font-semibold" > ${inputValue3} Taka is Donated  ${title3}</p>
     <p> ${time}</p>

   `;
      document.getElementById("history-container").appendChild(div);
    } else {
      alert("Invalid Donation Amount");
    }
  });

//  donate clicked event
document.getElementById("donate-btn").addEventListener("click", function () {
  showHistoryById("donate-container");
});

// history click event
document.getElementById("history-btn").addEventListener("click", function () {
  showHistoryById("history-container");
});

// feature
document.getElementById("donate-btn").addEventListener("click", function () {
  const donateButton = document.getElementById("donate-btn");
  donateButton.classList.add("bg-primary");
  const historyButton = document.getElementById("history-btn");
  historyButton.classList.remove("bg-primary");
});
document.getElementById("history-btn").addEventListener("click", function () {
  const historyButton = document.getElementById("history-btn");
  historyButton.classList.add("bg-primary");
  const donateButton = document.getElementById("donate-btn");
  donateButton.classList.remove("bg-primary");
});
