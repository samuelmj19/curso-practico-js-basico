
function calculateDiscount(price, discount, coupon){
    let newPrice =(price * (100 - (discount + coupon)))/ 100;
    return newPrice
}

function calculate(){
    let originalPrice = document.querySelector('#original-price').value;
    let discountValue = document.querySelector('#discount-input').value;
    let discount = parseInt(discountValue);
    let couponValue = document.querySelector('#coupons').value;
    let coupon = parseInt(couponValue);
    let result = calculateDiscount(originalPrice, discount, coupon)
    let moneySaved = originalPrice - result;
    let resultDiscountPercent =document.querySelector('.Result-discount-percent').innerHTML = "- " + (discount + coupon) + "%";
    let newPrice =document.querySelector('.product-price-new').innerHTML = "$" + result;
    let oldPrice =document.querySelector('.product-price-old').innerHTML = "$" + originalPrice;
    let saved =document.querySelector('.saved').innerHTML = "You have saved $" + moneySaved;
}