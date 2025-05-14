function updateAmount(value) {
  document.getElementById("amount-value").textContent = value;
}



  let counter = 0;

  function resetForm() {
    // Reset radio buttons
    document.querySelector('input[name="site-type"][value="business"]').checked = true;

    // Reset range slider
    const range = document.getElementById("amount");
    range.value = 1;
    document.getElementById("amount-value").textContent = range.value;

    // Reset select dropdown
    document.getElementById("response").value = "yes";

    // ✅ Reset counter and display
    counter = 0;
    document.getElementById("price-result").textContent = "Total Price: $0";
  }

  function calculatePrice() {
    counter = 0;

    const siteType = document.querySelector('input[name="site-type"]:checked').value;
    if (siteType === "business") counter += 1000;
    else if (siteType === "store") counter += 2000;
    else if (siteType === "blog") counter += 1500;

    const pages = parseInt(document.getElementById("amount").value);
    counter += pages * 200;

    const response = document.getElementById("response").value;
    if (response === "yes") counter += 1000;

    document.getElementById("price-result").textContent = `Total Price: $${counter}`;
  }

  function updateAmount(value) {
    document.getElementById("amount-value").textContent = value;
  }

