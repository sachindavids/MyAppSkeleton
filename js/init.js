(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function gotoStep(num){

	switch (num) {
      case 1: 

      	break;
      case 2: 
      	$(".step-1").addClass('step-done');
        $(".step-2").addClass('active-step');
      	break;
      case 3:
      	$(".enter-name").animate({"left":"-100%"}, function(){
          $(this).slideUp('slow', function(){
            $(".enter-email").slideDown('fast');
          });
        });

      	$(".step-2").addClass('step-done');
        $(".step-3").addClass('active-step');
      	break;
      case 4:
      	$(".enter-email").animate({"left":"-100%"}, function(){
          $(this).slideUp('slow', function(){
            $(".select-category").slideDown('fast');
          });
        });

      	$(".step-3").addClass('step-done');
        $(".step-4").addClass('active-step');
        break;

      case 5:
        $(".select-category").animate({"left":"-100%"}, function(){
          $(this).slideUp('slow', function(){
            $(".bulid-resume").slideDown('fast');
          });
        });

        $(".step-4").addClass('step-done');
        $(".step-5").addClass('active-step');
      	break;
      default: return
    }

}