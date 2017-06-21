$(document).ready(function() {
  $('#answer').keydown(function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

function submitting(){
	var password = 'Решетилівка';
	password = password.toUpperCase();
	var inputValue = $('#answer').val();
	inputValue = inputValue.toUpperCase();
	if ( password === inputValue) {
	  $('div.checkpw-content').fadeOut('fast');
	  $('#gradient').removeClass( 'gradient' ).addClass('animated flash pinkBg');
	  document.getElementById('audio1').play();
	  
	  function audio2() {
		  document.getElementById('audio2').play();
		};
	  setTimeout(audio2, 1500);
	  
	  function successMessage() {
		  $('div.success-message').fadeIn(0);
		  $('#sm1').fadeIn(0).addClass('animated fadeInDownBig').delay(2500).fadeOut('slow');
		  $('#sm2').delay(3000).fadeIn(0).addClass('animated fadeInDownBig').delay(2500).fadeOut('slow');
		  $('#sm3').delay(6500).fadeIn(0).addClass('animated fadeInDownBig').delay(4500).fadeOut('slow');
		  $('#sm4').delay(11500).fadeIn(0).addClass('animated fadeInDownBig').delay(4000).fadeOut('slow');  
		  $('div.success-message').delay(16000).fadeOut(0);
		};
	  setTimeout(successMessage, 1500);
	  
    $('#dance').delay(18000).fadeIn(0).addClass('animated fadeInUpBig');
	  $('#answer').val('');
    $('#dance').delay(20500).fadeOut(0);
	  
	  function pinkBg() {
			$('#gradient').removeClass('pinkBg animated flash').addClass('gradient');
		  };
	  setTimeout(pinkBg, 39000);
	  
	  $('div.checkpw-content').delay(39500).fadeIn('slow');
	  } else {
		  $('#error').removeClass('error').addClass('error-out');
		  $('#answer').focus(function(){
			  $('#error').removeClass('error-out').addClass('error');
			  });
		  };
	};

$('#submitButton').click(function() {
	submitting();
});

$('#answer').keydown(function(event){
  if(event.keyCode == 13) {
	  submitting();
  }
});