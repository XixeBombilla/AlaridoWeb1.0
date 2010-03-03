$(document).ready(function(){
    $('#boton_registro').click(function(){
	$("#registro").toggle();
	
    if($('#registro').is(':none')) {
      $('#registro').hide();
    } else {
      $('#registro').show();
    }
  });
});