// Selected seat in array function
function setOfArray(id) {

    const num = array.length;
    if (num === 4) {
        return array;
    }

    let flag = 0;

    for (let i = 0; i <= num; i++) {

        if (array[i] == id) {
            flag = 1;

        }

    }
    if (flag === 0) {
        array.push(id);

        // set ticket information
        seatInformation(id);


        // set background
        setBackground(id);


        // call the coupon function
        if (array.length == 4) {
            const cuponId = document.getElementById('couponContainer');
            cuponId.classList.remove('hidden');
        }



        // total cost buying by ticket and Display Total Price
        const cost1 = calculatePrice(array.length);
        const costShow = document.getElementById('totalPrice');
        costShow.innerText = cost1;


        // set grand total cost without discount
        const costGrand = document.getElementById('grandTotal');
        costGrand.innerText = cost1;



    }

    return array;
}
// Selected seat in array function end






// BackgroundColor function
function setBackground(id) {
    const seat = document.getElementById(id);
    seat.classList.remove('bg-gray-200');
    seat.classList.add('bg-[#1DD100]');
}



// seat update function
function seatCount(num) {
    let selectSeatText = document.getElementById('countSeat');
    let availableSeatText = document.getElementById('availableSeat');

    // total seat update
    let selectSeatNo = selectSeatText.innerText;
    let totalSelectSeatNo = parseInt(selectSeatNo);
    totalSelectSeatNo = num;
    selectSeatText.innerHTML = totalSelectSeatNo;


    //available seat update
    let availableSelectSeat = availableSeatText.innerHTML;
    let totalAvailableSeatNo = parseInt(availableSelectSeat);
    totalAvailableSeatNo = 40 - totalSelectSeatNo;
    availableSeatText.innerHTML = totalAvailableSeatNo;
}




// seat info set function
function seatInformation(id) {

    const trows = document.createElement('tr');
    const tCol1 = document.createElement('td');
    const tCol2 = document.createElement('td');
    const tCol3 = document.createElement('td');

    const seatNo = document.getElementById('id');


    tCol1.innerText = id;
    tCol2.innerText = 'Economy';
    tCol3.innerText = 550;

    trows.appendChild(tCol1);
    trows.appendChild(tCol2);
    trows.appendChild(tCol3);


    const t_Container = document.getElementById('tcontainer');

    t_Container.appendChild(trows);
}



// calculation Seat price function
function calculatePrice(totalSeat) {
    const cost = 550 * totalSeat
    return cost;
}


// coupon calculation
function couponCalculation(seat) {
    let textCoupons = document.getElementById('couponInput');
    const textCoupon = textCoupons.value;
    if (textCoupon === 'NEW15') {

        const cuponId = document.getElementById('couponContainer');
        const dis1 = document.getElementById('discount');

        const newText1 = document.createElement('h1');

        // discount calculate
        const dcost1 = 0.15 * seat * 550;
        const totalCost = seat * 550 - dcost1;

        // discount display
        newText1.innerText = 'Discount     -' + dcost1;
        newText1.classList.add('ml-[350px]');
        dis1.appendChild(newText1);


        cuponId.classList.add('hidden');

        return totalCost;

    }
    else if (textCoupon === 'Couple 20') {

        const cuponId = document.getElementById('couponContainer');

        const dis = document.getElementById('discount');
        const newText = document.createElement('h1');


        // Calculation discount
        const dcost = 0.20 * 4 * 550;
        const totalCostAfterDiscount = seat * 550 - dcost;


        // discount display
        newText.innerText = 'Discount     - ' + dcost;
        newText.classList.add('ml-[350px]');
        dis.appendChild(newText);

        cuponId.classList.add('hidden');
        return totalCostAfterDiscount;
    }
    else {
        alert("Invalid Coupon!");
        return seat * 550;
    }
}