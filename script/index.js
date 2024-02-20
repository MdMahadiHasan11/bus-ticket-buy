let array = [];
document.getElementById("nextButton").disabled = true;




// scroll in buy ticket
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scrollBtn');
    const mainSection = document.getElementById('main');


    function scrollToLastSection() {
        mainSection.scrollIntoView({ behavior: 'smooth' });
    }

    scrollButton.addEventListener('click', scrollToLastSection);
});







function selectSeat(btn) {
    const seatId = btn.id;



    // Create array  and set backgroundColor and  Display  ticket info
    let newArray = setOfArray(seatId);
    let tepArray = newArray;


    // seat count by array length
    const totalSeat = newArray.length;




    // update all seat
    seatCount(totalSeat);


    // check mobile number && seat was Clicked

    var lengthDisplay = document.getElementById("phone");

    lengthDisplay.addEventListener("keyup", function () {
        var length = lengthDisplay.value.length;
        if (length => 1) {
            document.getElementById("nextButton").disabled = false;
        }

    });


}



// Coupon calculation Function Call
function couponCall() {
    const cost = couponCalculation(4);
    const costGrand = document.getElementById('grandTotal');
    costGrand.innerText = cost;

}



// Next Button Function ( Successfully Display)
function nextDiv() {
    const nextDis = document.getElementById('bigDi');
    nextDis.classList.add('hidden');

    const successDis = document.getElementById('successDiv');
    successDis.classList.remove('hidden');
}