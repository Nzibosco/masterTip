$(document).ready(function () {

    //define global variables
    let tip;
    let share;

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
        
        $("#bill-final").text(bill);
        $("#tip-final").text(tipPercent);
        $("#table-final").text(peopleOnTable);

        //calculate tip
        // ...first check if the tip will be splitted then split the tip among table members
        if ($("#radio-yes").checked = true) {
            console.log("checked");

            function tipToPay() {
                tip = bill * tipPercent / 100;
                console.log(tip);
                // now share the tip among table members
                share = tip / peopleOnTable;
                console.log(share);

                // assign tip and share values to tthe page
                $("#amount").text(tip);
                $("#share-final").text(share);
                
            };
            tipToPay();
        } else {
            // if no split needed, we will go straight to calculating tip only
            function tipToPay() {
                tip = bill * tipPercent / 100;
                console.log(tip);
                share = tip;

                // assign tip and share values to tthe page
                $("#amount").text(tip);
                $("#share-final").text(share);

                // set people on the table to one
                $("#table-final").text(1);
                
            };
            tipToPay();
        }
    })


})