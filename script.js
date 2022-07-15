$('#login-btn').click(function(){
    $('#login-btn').fadeOut('slow', function(){
        $('#container').fadeIn()
    })
})
$('.closs-btn').click(function(){
    $('#container, #container-olvidado').fadeOut(800, function(){
        $('#login-btn').fadeIn(800);
    })
})
$('#olvidado').click(function(){
    $('#container').fadeOut(function(){
        $('#container-olvidado').fadeIn();
    })
})