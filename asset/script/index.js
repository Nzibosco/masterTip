$(document).ready(function () {

    //define tip
    let tip;

    // var to grab user inputs 
    let bill = $("#bill").val();
    let tipPercent = $("#tip-share").val();
    let peopleOnTable = $("#split").val();

    //assign values to the Dashboard 
    $("#amount").text(tip);
    $("").text(bill);
    $("").text(tipPercent);
    $("").text(peopleOnTable);

    //  Submit form
    $("form").on("submit", function (event) {
        event.preventDefault();

        // Vars to grab user inputs 
        let bill = $("#bill").val();
        let tipPercent = $("#tip-share").val();
        let peopleOnTable = $("#split").val();

        console.log("tip: " + tip + " bill: " + bill + " tip %: " + tipPercent + " people on table: " + peopleOnTable);

        //assign values to the Dashboard 
        $("#amount").text(tip);
        $("#bill-final").text(bill);
        $("#tip-final").text(tipPercent);
        $("#table-final").text(peopleOnTable);



    })

    //calculate tip


})