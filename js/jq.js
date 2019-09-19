$(document).ready(function () {
     $("#btnSubmit").on('click', function (event) {
           event.preventDefault();
           var el = $(this);
           el.prop('disabled', true);
           window.open("https://www.github.com");
           setTimeout(function(){el.prop('disabled', false); }, 3000);
     });
});