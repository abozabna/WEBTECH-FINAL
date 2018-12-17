
    $('#pay').hide();
    $('#done').hide();


$('#book').submit(function(ev) {
    ev.preventDefault(); // to stop the form from submittinga
    $('#book').hide();
    alert("Thanks for booking with us!");
    $('#pay').show();

});

$('#pay').submit(function(ev) {
    ev.preventDefault(); // to stop the form from submittinga
    $('#pay').hide();
    $('#done').show();

});