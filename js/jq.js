$(document).ready(function () {
    $("#btnSubmit").on('click', function (event) {
        event.preventDefault();
        var el = $(this);
        el.prop('disabled', true);
        //window.open("https://www.github.com");
        $.get('https://api.github.com/users/adbose', function( data ) {
            alert( "Data Loaded!\nUsername is: " + data['login'] );
            setTimeout(function(){el.prop('disabled', false); }, 1000);
        });
    });
           //setTimeout(function(){el.prop('disabled', false); }, 3000);
});