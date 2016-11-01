$(document).ready(function () {
  var theButton = $("#registerBtn");
  $("#registerBtn").on('click', function () {
    console.log('the button was click');
    var request = $.ajax({
      method: 'GET',
      url: '/adduserprocess',
    });
  })
});
