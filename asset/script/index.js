$(document).ready(function () {

    //define global variables
    let tip;
    let share;
    let finalBill;

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

        //assign values to the Dashboard        
        $("#tip-final").text(tipPercent);
        $("#table-final").text(peopleOnTable);

        //calculate tip
        // ...first check if the tip will be splitted then split the tip among table members
        if ($("#radio-yes").is(":checked")) {
            console.log("checked");
            function tipToPay() {
                // the toFixed method will round decimals and restricts them to only two.
                tip = +(bill * tipPercent / 100).toFixed(2); // the + sign will convert it back to a number
                console.log(tip);

                // now share the tip among table members
                share = +(tip / peopleOnTable).toFixed(2);
                console.log(share);
                finalBill = +(parseFloat(bill) + parseFloat(tip)).toFixed(2);

                // assign tip and share values to tthe page
                $("#amount").text(tip);
                $("#share-final").text(share);
                $("#bill-final").text(finalBill);
                console.log("tip: " + tip + " bill: " + bill + " tip %: " + tipPercent + " people on table: " + peopleOnTable);
            };
            tipToPay();
        } else {
            // if no split needed, we will go straight to calculating the tip only
            function tipToPay() {
                tip = +(bill * tipPercent / 100).toFixed(2);
                console.log(tip);
                finalBill = +(parseFloat(bill) + parseFloat(tip)).toFixed(2);

                // assign tip, final bill and share values to the page
                $("#amount").text(tip);
                $("#share-final").text(tip);
                $("#bill-final").text(finalBill);
                $("#table-final").text(1);
                console.log("tip: " + tip + " bill: " + bill + " tip %: " + tipPercent + " people on table: " + peopleOnTable);

            };
            tipToPay();
        };

        // clear the form after submitting 
        $("#bill").val("");
        $("#tip-share").val("");
        $("#split").val("");
    });
})