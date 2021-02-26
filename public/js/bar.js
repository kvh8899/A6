
function openMenu() {
  document.getElementById("sidebar").classList.toggle("show");
}
function graph() {
  document.getElementById("options").classList.toggle("show");
}
function data(obj) {
  this.date = obj.date;
  this.title = obj.title;
  this.subject = obj.subject;
  this.input = obj.input;
}
$(document).ready(function () {
  $('#subject').change(function() {
    $('#dates').val('');
    $('#titleRecord').val('');
  });
  $('.group').hide();
  $('#Sleep').show();
  $('#subject').change(function () {
    $('.group').hide();
    $('#'+$(this).val()).show();

  });
  $('#logout').click(function(e){
    if(confirm('Are you sure you want to logout?')){
      location.href = '/';
      return true;
    }else{
      return false
    }
  });
});
