
$(document).ready(function(){
});

$(function(){
  $('#apply').on('keypress click', function(e){
    color = $('#color_input').val();
    if (e.which === 13 || e.type === 'click') {
      event.preventDefault();
      $('.brush-color').css('color', color);
      console.log('Changing color to ' + color);
    }
  });
});

for (var i = 0; i<8000; i++) {
  $('body').append($("<div class='square'></div>"));
}

$('.square').mouseover(function(){
  $(this).css('background-color', color);
  console.log('Drawing');
});
