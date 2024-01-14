document.addEventListener("DOMContentLoaded", function() {

    const scrollButton = document.querySelector(".scroll-button a");

    scrollButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Calculate the destination section's top position
        const targetSection = document.querySelector(this.getAttribute("href"));
        const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;

        // Smooth scroll to the destination
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    });

    const addToCartButtons = document.querySelectorAll(".addToCartBtn");
    let cartItems = [];
    const cartCount = document.getElementById("cartCount");
    const cartModalBody = document.getElementById("cartModalBody");

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            const coffeeName = document.querySelectorAll(".card-title")[index].textContent;
            cartItems.push(coffeeName);
            cartCount.textContent = cartItems.length;
            alert(`${coffeeName} added to cart.`);
        });
    });

    function displayCartItems() {
        cartModalBody.innerHTML = ""; // Clear previous content

        if (cartItems.length === 0) {
            cartModalBody.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            const cartList = document.createElement("ul");
            cartItems.forEach(item => {
                const cartItem = document.createElement("li");
                cartItem.textContent = item;
                cartList.appendChild(cartItem);
            });
            cartModalBody.appendChild(cartList);
        }
    }

    const cartButton = document.querySelector("#cartModal");
    cartButton.addEventListener("show.bs.modal", displayCartItems);
    
});