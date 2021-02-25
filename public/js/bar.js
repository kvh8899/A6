function openMenu() {
  document.getElementById("sidebar").classList.toggle("show");
}
function graph() {
  document.getElementById("options").classList.toggle("show");
}
$(document).ready(function () {
  $('.group').hide();
  $('#recsleep').show();
  $('#subject').change(function () {
    $('.group').hide();
    $('#'+$(this).val()).show();

  })
  $('#saved').click(function(e){
    e.preventDefault();
    $(".cancel").hide();
    $(".save").hide();
    $(".finish").show();
  });
});
