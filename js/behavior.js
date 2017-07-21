$(document).ready(function() {
  // Set height for animation container
  var gradientHeignt = $('#gradient').height();
  $('#animation').css({height: gradientHeignt});
  $('#instructions').css({top: gradientHeignt});
  $(window).resize(function() {
    var resizeHeignt = $('#gradient').height();
    $('#animation').css({height: resizeHeignt});
    $('#instructions').css({top: resizeHeignt});
  });
  // Disable Bootstrap on Enter form sending
  $('#answer').keydown(function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  // Password checking and animated section
  function submitting(){
    var password = '9';
    password = password.toUpperCase();
    var inputValue = $('#answer').val().toUpperCase();

    if ( password === inputValue) {
      var bounceIn = 'animated bounceIn';
      var bounceOut = 'animated bounceOutUp';
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      $('div.checkpw-content').addClass('animated fadeOutUpBig').delay(2000).queue(function() {
        $(this).removeClass('animated fadeOutUpBig');
      });

      document.getElementById('audio').play();

      $('#gradient').delay(750).fadeOut('slow', function() {
        $('#animation').fadeIn().addClass('animated flash').delay(2000).queue(function() {
          $(this).removeClass('animated flash');
        });
      });

      $('div.success-message').delay(2000).fadeIn(0);

      $('#sm1').delay(2500).fadeIn(0).addClass(bounceIn).delay(2500).queue(function() {
        $(this).removeClass(bounceIn).addClass(bounceOut);
      });

      $('#sm2').delay(6000).fadeIn(0).addClass(bounceIn).delay(2500).queue(function() {
        $(this).removeClass(bounceIn).addClass(bounceOut);
      });

      $('#sm3').delay(9500).fadeIn(0).addClass(bounceIn).delay(2500).queue(function() {
        $(this).removeClass(bounceIn).addClass(bounceOut);
      });

      $('#answer').val('');

      $('#dance').delay(13000).fadeIn(0).addClass('animated bounceInDown');

      $('#dance').delay(27000).fadeOut('slow').delay(1000).queue(function() {
        $(this).removeClass('animated bounceInDown');
      });

      $('div.success-message').delay(40000).fadeOut(0);

      //$('#animation').delay(40000).fadeOut('slow', function() {
        //$('#gradient').fadeIn('slow');
      //});

      setTimeout(location.reload.bind(location), 43000);

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