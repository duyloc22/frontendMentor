const toggleBtn = document.querySelector(".toggle-btn");
const toggleArea = document.querySelector(".toggle-area");
const basicPrice = document.querySelector(".price-1");
const profPrice = document.querySelector(".price-2");
const masterPrice = document.querySelector(".price-3");

toggleArea.addEventListener("click", function (e) {
    e.preventDefault();
    if (toggleArea.classList.contains("monthly")) {
        toggleArea.classList.remove("monthly");
        basicPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>199.99`;
        profPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>249.99`;
        masterPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>399.99`;
    } else {
        toggleArea.classList.add("monthly");
        basicPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>19.99`;
        profPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>24.99`;
        masterPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>39.99`;
    }
});
