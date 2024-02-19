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



