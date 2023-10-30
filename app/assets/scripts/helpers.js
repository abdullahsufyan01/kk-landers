export function getReChargeCheckout(data = {}) {
  if (data.discountCode === "GIFT**&") {
    var message_combined = `From: ${data.lastName}\n\n ${data.message}`
    data = {
      discountCode: "GIFT**&",
      note: message_combined,
      price: data.price,
    };
  }

  console.log('updated data', data)

  

  document.getElementsByClassName("overlay")[0].style.display = "flex";
  document.getElementsByClassName("container")[0].style.display = "flex";
  document.getElementsByClassName("loader2")[0].style.display = "flex";

  fetch("https://cryptic-dusk-55032-bb1865d4f858.herokuapp.com/rechargeCheckout", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.getElementsByClassName("overlay")[0].style.display = "none";
      document.getElementsByClassName("container")[0].style.display = "none";
      document.getElementsByClassName("loader2")[0].style.display = "none";
      const url = `https://checkout.ketokrate.com/r/checkout/${data.token}`;
      window.location.href = url;
    });

  //response.json().then(data => console.log('here', data))
}
