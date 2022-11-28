export function getReChargeCheckout(data = {}) {
  if (data.discountCode === "GIFT**&") {
    data = {
      discountCode: "GIFT**&",
      note: data.message,
      price: data.price,
    };
  }

  console.log('updated data', data)

  

  document.getElementsByClassName("overlay")[0].style.display = "flex";
  document.getElementsByClassName("container")[0].style.display = "flex";
  document.getElementsByClassName("loader2")[0].style.display = "flex";

  fetch("http://localhost:80/rechargeCheckout", {
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
