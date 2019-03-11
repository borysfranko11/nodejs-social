$(document).ready(function () {

  $('#tags').tagsInput({
    'height':'60px',
    'width':'280px'
  });

});


function showConfirmModal(elem){
  var $confirmModal = $("#confirmModal");
  $confirmModal.modal().attr('data-target',elem.getAttribute("data-url"));
}


function checkAgeConfirmation(){
  var $confirmModal = $("#confirmModal");
  if($confirmModal.find('input[name=confirmage]').prop('checked')&&$confirmModal.find('input[name=confirmcountry]').prop('checked')){
    $confirmModal.modal('hide');
    window.location = $confirmModal.attr('data-target');
  }
}