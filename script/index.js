let array = [];

function selectSeat(btn) {
    const seatId = btn.id;

    let newArray = setOfArray(seatId);
    for (const value of newArray) {

        // set background
        setBackground(value);

    }

    // seat count
    const totalSeat = newArray.length;


    // update all seat
    seatCount(totalSeat);

}