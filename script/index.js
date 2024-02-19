let array = [];
document.getElementById("nextButton").disabled = true;



function selectSeat(btn) {
    const seatId = btn.id;
    

    let newArray = setOfArray(seatId);
    for (const value of newArray) {

        // set background
        setBackground(value);

        
        

    }
    // show seat info
    seatInformation(B1);



    // seat count
    const totalSeat = newArray.length;


    // total cost buying by ticket
    const cost = calculatePrice(totalSeat);
    const costShow=document.getElementById('totalPrice');
    costShow.innerText=cost;

    // grand total
    const costGrand=document.getElementById('grandTotal');
    costGrand.innerText=cost;

    // coupon  calculation
    if(totalSeat == 4){

        const cuponId = document.getElementById('couponContainer');
        cuponId.classList.remove('hidden');
    }
    // couponCalculation(4);



    // update all seat
    seatCount(totalSeat);


    // check mobile number && seat
    document.getElementById("nextButton").disabled = false;


}




function couponCall(){
   const cost= couponCalculation(4);

    const costGrand=document.getElementById('grandTotal');
    costGrand.innerText=cost;

}



// nextButton
// const costGrand=document.getElementById('grandTotal');
// console.log(costGrand.innerText);
// if(totalSeat !== 0){
//     document.getElementById("nextButton").disabled = false;
// }