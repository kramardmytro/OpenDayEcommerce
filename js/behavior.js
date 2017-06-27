$(document).ready(function() {
  // Disable Bootstrap on Enter form sending
  $('#answer').keydown(function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  // Password checking and animated section
  function submitting(){
    var password = 'test';
    password = password.toUpperCase();
    var inputValue = $('#answer').val().toUpperCase();
    if ( password === inputValue) {
      var animFlash = 'animated flash';
      var animEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      document.getElementById('audio').play();
      $('div.checkpw-content').fadeOut('fast');
      $('#gradient').removeClass('gradient').addClass('pixelBg');
      $('#gradient').addClass(animFlash).one(animEnd, function(){
        $(this).removeClass(animFlash);
      });
          
      function successMessage() {
        var animFadeDown = 'animated fadeInDownBig';
        $('div.success-message').fadeIn();
        $('#sm1').fadeIn(0).addClass(animFadeDown).delay(2500).fadeOut('slow');
        $('#sm2').delay(3000).fadeIn(0).addClass(animFadeDown).delay(2500).fadeOut('slow');
        $('#sm3').delay(6000).fadeIn(0).addClass(animFadeDown).delay(2500).fadeOut('slow');
        $('#sm4').delay(9000).fadeIn(0).addClass(animFadeDown).delay(2500).fadeOut('slow');  
        $('div.success-message').delay(12000).fadeOut(0);
      };
      setTimeout(successMessage, 2500);

      $('#answer').val('');
      $('#dance').delay(15000).fadeIn(0).addClass('animated fadeInUpBig');
      $('#dance').delay(23500).fadeOut(0);
      
      function pixelBg() {
        $('#gradient').removeClass('pixelBg').addClass('gradient');
        };
      setTimeout(pixelBg, 39000);
      
      $('div.checkpw-content').delay(39500).fadeIn('slow');
      } else {
        $('#error').removeClass('error').addClass('error-out');
        $('#answer').focus(function(){
          $('#error').removeClass('error-out').addClass('error');
          });
        };
  };
  // Cheking password on button click
  $('#submitButton').click(function() {
    submitting();
  });
  // Cheking password on Enter press
  $('#answer').keydown(function(event){
    if(event.keyCode == 13) {
      submitting();
    }
  });
});