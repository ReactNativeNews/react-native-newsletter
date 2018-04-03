$(function() {
  $('a').attr('target', '_blank');
  var $headerImage = $('[alt="Logo for React Native Newsletter"]');
  $headerImage.click(function() {
    window.location.href = 'http://reactnative.cc';
  });

  $headerImage.css('cursor', 'pointer');
});
