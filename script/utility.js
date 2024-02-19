// Selected seat in array
function setOfArray(id) {

    const num = array.length;
    if (num === 4) {
        return array;
    }

    if (array.length === 0) {
        array.push(id);
        return array;
    }

    let flag = 0;

    for (let i = 0; i < num; i++) {

        if (array[i] == id) {
            // array.push(id);
            flag = 1;

        }

    }
    if (flag === 0) {
        array.push(id);

    }

    return array;
}



// bg
function setBackground(id) {
    const seat = document.getElementById(id);
    seat.classList.remove('bg-gray-200');
    seat.classList.add('bg-[#1DD100]');
}


// seat update
function seatCount(num) {
    let selectSeatText = document.getElementById('countSeat');
    let availableSeatText = document.getElementById('availableSeat');

    // total seat update
    let selectSeatNo = selectSeatText.innerText;
    let totalSelectSeatNo = parseInt(selectSeatNo);
    totalSelectSeatNo = num;
    selectSeatText.innerHTML = totalSelectSeatNo;


    //    available seat update
    let availableSelectSeat = availableSeatText.innerHTML;
    let totalAvailableSeatNo = parseInt(availableSelectSeat);
    totalAvailableSeatNo = 40 - totalSelectSeatNo;
    availableSeatText.innerHTML = totalAvailableSeatNo;
}


// seat info
function seatInformation(id) {

    const trows = document.createElement('tr');
    const tCol1 = document.createElement('td');
    const tCol2 = document.createElement('td');
    const tCol3 = document.createElement('td');

    // const seatNo = document.getElementById('id');
    // const seatName = seatNo.innerText;

    tCol1.innerText=id.innerHTML;
    tCol2.innerText='Economy';
    tCol3.innerText=550;

    trows.appendChild(tCol1);
    trows.appendChild(tCol2);
    trows.appendChild(tCol3);


    const t_Container =document.getElementById('tcontainer');

    t_Container.appendChild(trows);
    // console.log(trows);
    

    // seatInfoTexts.innerHTML = `
    //       <div class="flex justify-between mx-8 py-6">
    //       <div>
    //       <p id="seatChange" class="pl-5">C2</p>
    //       </div>
    //       <p>Economy</p>
    //       <p>550</p>
    //       </div>`;

        //   const seatChanges = document.getElementById('seatChange');
        //   seatChanges.innerText=id;


    // console.log(seatInfoText);


    // const seatInfoText = document.getElementById('seatInfoContainer');
    // seatInfoText.appendChild(seatInfoTexts);

}


// calculation
function calculatePrice (totalSeat){
    const cost = 550 * totalSeat
    return cost;
}


// coupon calculation
function couponCalculation(seat) {
    let textCoupons=document.getElementById('couponInput');
    const textCoupon= textCoupons.value;
    if(textCoupon === 'NEW15' )
    {
       
       const cuponId = document.getElementById('couponContainer');

       const dis1 = document.getElementById('discount');
        const newText1 = document.createElement('h1');

        const dcost1=0.15*4*550 ;
        newText1.innerText='Discount     -' + dcost1;
        newText1.classList.add('ml-[250px]');
        // newText.innerText=;

        dis1.appendChild(newText1);

        
        cuponId.classList.add('hidden');
        return 4*550 - 0.15*4*550 ;

    }
    else if(textCoupon === 'Couple 20'){
        
        const cuponId = document.getElementById('couponContainer');
        
        const dis = document.getElementById('discount');
        const newText = document.createElement('h1');

        const dcost=0.20*4*550 ;
        newText.innerText='Discount     -' + dcost;
        newText.classList.add('ml-[250px]');
        // newText.innerText=;

        dis.appendChild(newText);


        
        cuponId.classList.add('hidden');
        return 4*550 - 0.20*4*550 ;
    }
    else{
        alert("Invalid Coupon!");
        return 4*550;
    }
}