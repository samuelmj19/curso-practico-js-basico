
function calculateDiscount(price, discount, coupon){
    let newPrice =(price * (100 - (discount + coupon)))/ 100;
    return newPrice
}

function calculate(){
    let originalPrice = document.querySelector('#original-price').value;
    let discountValue = document.querySelector('#discount-input').value ||0;
    let discount = parseInt(discountValue);
    let couponValue = document.querySelector('#coupons').value;
    let coupon = parseInt(couponValue);
    let result = calculateDiscount(originalPrice, discount, coupon)
    let moneySaved = originalPrice - result;
    let resultDiscountPercent = discount + coupon;
    let newPrice =result;
    let oldPrice = originalPrice;
    let saved =document.querySelector('.saved').innerHTML = "You have saved $" + moneySaved;
    let display =document.querySelector('#display');
    if (originalPrice == 2000){
        display.innerHTML = ` 
        <div class="product-card card1">
            <h5>Laptop</h5>
            <p class="Result-discount-percent">-${resultDiscountPercent}%</p>
            <p class="product-price-old" value="1000">$${oldPrice}</p>
            <p class="product-price-new">$${newPrice}</p>
        </div>`
    }
    else if(originalPrice == 1500){
        display.innerHTML = ` 
        <div class="product-card card2">
            <h5>Laptop</h5>
            <p class="Result-discount-percent">-${resultDiscountPercent}%</p>
            <p class="product-price-old" value="1000">$${oldPrice}</p>
            <p class="product-price-new">$${newPrice}</p>
        </div>`
    }
    else if(oldPrice == 1000){
        display.innerHTML = ` 
        <div class="product-card card3">
            <h5>Laptop</h5>
            <p class="Result-discount-percent">-${resultDiscountPercent}%</p>
            <p class="product-price-old" value="1000">$${oldPrice}</p>
            <p class="product-price-new">$${newPrice}</p>
        </div>`
    }
}