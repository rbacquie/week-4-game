
$(document).ready(function () {

    var randomScore = 0;
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var totalGem = 0;

    randomScore = Math.floor(Math.random() * 100 + 9);

    $("#randomNum").text(randomScore);

    var gem1 = Math.floor(Math.random() * 75 + 1);

    var gem2 = Math.floor(Math.random() * 25 + 1);

    var gem3 = Math.floor(Math.random() * 50 + 1);

    var gem4 = Math.floor(Math.random() * 15 + 1);

    $('#w-score').text(wins);

    $('#l-score').text(losses);



    function reset() {

        randomScore = Math.floor(Math.random() * 100 + 9);

        var gem1 = Math.floor(Math.random() * 20 + 1);

        var gem2 = Math.floor(Math.random() * 10 + 1);

        var gem3 = Math.floor(Math.random() * 25 + 1);

        var gem4 = Math.floor(Math.random() * 5 + 1);

        totalGem = 0;

        $("#randomNum").text(randomScore);
        $("#userTotal").text(totalGem);
        
    }

    function winning() {
        $("#status").text( "Your a WINNER!" )
        wins++;
        $('#w-score').text(wins);
        reset();
    }
   
    function losing() {
        $("#status").text("Your a Losser!")
        losses++;
        $('#l-score').text(losses);
        reset()
    }
    
    $('#gem1').on('click', function () {
        totalGem = totalGem + gem1;

        $('#userTotal').text(totalGem);
        
        if (totalGem === randomScore) {
            winning();
        }
        else if (totalGem > randomScore) {
            losing();
        }
    })
    $('#gem2').on('click', function () {
        totalGem = totalGem + gem2;

        $('#userTotal').text(totalGem);
        if (totalGem === randomScore) {
            winning();
        }
        else if (totalGem > randomScore) {
            losing();
        }
    })
    $('#gem3').on('click', function () {
        totalGem = totalGem + gem3;

        $('#userTotal').text(totalGem);

        if (totalGem === randomScore) {
            winning();
        }
        else if (totalGem > randomScore) {
            losing();
        }
    })
    $('#gem4').on('click', function () {
        totalGem = totalGem + gem4;

        $('#userTotal').text(totalGem);

        if (totalGem === randomScore) {
            winning();
        }
        else if (totalGem > randomScore) {
            losing();
        }
    });


});