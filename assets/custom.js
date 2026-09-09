document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".product-card").forEach(function (card) {
    console.log('card', card);
    const variants = JSON.parse(card.querySelector(".variants-json").textContent);
    console.log('variants', variants);
    const image = card.querySelector(".product-image");
    console.log('image', image)
    const bottomPrice = card.querySelector(".bottom-price");
    const variantInput = card.querySelector(".variant-id");
    let selectedOptions = [];
    let currentVariant = variants.find(v => v.available) || variants[0];
    if (currentVariant) {
      selectedOptions = [...currentVariant.options];
      updateVariant(currentVariant);
    }
    card.querySelectorAll(".color-option").forEach(function (button) {
      button.addEventListener("click", function () {
        const optionIndex = Number(button.dataset.optionIndex) - 1;
        selectedOptions[optionIndex] = button.dataset.value;
        findVariant();
      });
    });
    card.querySelectorAll(".size-option").forEach(function (button) {
      button.addEventListener("click", function () {
        const optionIndex = Number(button.dataset.optionIndex) - 1;
        selectedOptions[optionIndex] = button.dataset.value;
        findVariant();
      });
    });
    function findVariant() {
      const variant = variants.find(function (v) {
        return v.options.every(function (value, index) {
          return value === selectedOptions[index];
        });
      });
      if (!variant) return;
      currentVariant = variant;
          updateVariant(currentVariant);
        }
        function updateVariant(variant) {
         if (!variant) return;
      if (variantInput) {
        variantInput.value = variant.id;
      }
      if (bottomPrice && variant.formatted_price) {
        bottomPrice.innerHTML = variant.formatted_price;
      }
      if (image && variant.image) {
        image.src = variant.image;
        image.removeAttribute("srcset");
        image.setAttribute("src", variant.image);
      }
      card.querySelectorAll(".color-option").forEach(function (btn) {
        console.log('btn', btn)
        btn.classList.remove("twcss-ring-2","twcss-ring-black","twcss-scale-110");
        const optionIndex = Number(btn.dataset.optionIndex) - 1;
        if (selectedOptions[optionIndex] === btn.dataset.value) {
          btn.classList.add("twcss-ring-2","twcss-ring-black","twcss-scale-110");
        }
      });
      card.querySelectorAll(".size-option").forEach(function (btn) {
        btn.classList.remove("twcss-bg-black","twcss-text-white","twcss-border-black");
        const optionIndex = Number(btn.dataset.optionIndex) - 1;
        if (selectedOptions[optionIndex] === btn.dataset.value) {
          btn.classList.add("twcss-bg-black","twcss-text-white","twcss-border-black");
        }
      });
    }
  });
});