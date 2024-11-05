const cartButton = document.querySelectorAll(".cart-button");
console.log(cartButton);

cartButton.forEach(cartButton => {
    let quantity = 0;
    const cartContentNormal = cartButton.querySelector(".cart-content-normal");
    const cartContentHover = cartButton.querySelector(".cart-content-hover");
    const finalQuantity = cartButton.querySelector(".quantity");
    const increase = cartButton.querySelector(".increase");
    const decrease = cartButton.querySelector(".decrease");

    cartButton.addEventListener("mouseenter", () => {
        if (cartContentNormal) {
            cartContentHover.style.display = "flex";
            cartContentNormal.style.display = "none";
        } 
    })

    cartButton.addEventListener("mouseleave", () => {
        if (quantity > 0) {
            cartButton.classList.add("hover");
            cartContentHover.style.display = "flex";
        } else {
            cartButton.classList.remove("hover");
            cartContentHover.style.display = "none";
            cartContentNormal.style.display= "flex";
        }
    })

    increase.addEventListener("click", () => {
        quantity++;
        console.log(quantity)
        finalQuantity.innerHTML = quantity
    })

    decrease.addEventListener("click", () => {
        if (quantity > 0) {
            quantity--;
            console.log(quantity)
            finalQuantity.innerHTML = quantity
        }
    })
})



