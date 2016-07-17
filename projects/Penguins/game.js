$(document).ready( function() {

  $('.penguin').mouseenter(function () {
    $(this).css('background-image', 'url("' + 'penguin_pngs/mound_' + String((Math.floor(Math.random() * (8 - 1 + 1))) + 1) + '_hover.png' + '")')
  })

  $('.penguin').mouseleave(function () {
    $(this).css('background-image', 'url("' + 'penguin_pngs/mound_' + String((Math.floor(Math.random() * (8 - 1 + 1))) + 1) + '.png' + '")')
  })

  $('.penguin').mousedown(function () {
    $(this).css('background-image', 'url("' + 'penguin_pngs/penguin_' + String((Math.floor(Math.random() * (8 - 1 + 1))) + 1) + '.png' + '")')
  })


  $('.yeti').mouseenter(function() {
    $(this).css('background-image', 'url("' + 'penguin_pngs/mound_9_hover.png' + '")')
  })

  $('.yeti').mouseleave(function() {
    $(this).css('background-image', 'url("' + 'penguin_pngs/mound_9.png' + '")')
  })

  $('.yeti').mousedown(function() {
    $(this).css('background-image', 'url("' + 'penguin_pngs/yeti.png' + '")')
    alert('Yaaaarrrr!')
  })

});
