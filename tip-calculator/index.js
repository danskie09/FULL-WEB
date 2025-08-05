let btn = document.getElementById("button");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  // ✅ Get the values *when* the button is clicked
  let bill = Number(document.getElementById("billAmount").value);
  let percentage = Number(document.getElementById("tipPercentage").value);

  // ✅ Validate input (optional but good practice)
  if (isNaN(bill) || isNaN(percentage)) {
    result.innerText = "Please enter valid numbers.";
    return;
  }

  // ✅ Calculate tip
  let calc = percentage / 100;
  let tip = bill * calc;
  let total = tip + bill

  // ✅ Show result
  result.innerText = total.toFixed(2);
});
