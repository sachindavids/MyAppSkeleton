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
        $(".template-cards").animate({"left":"-100%"}, function(){
          $(this).slideUp('slow', function(){
            $(".enter-name").slideDown('fast');
          });
        });
        
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
            $(".bulid-resume").slideDown('fast', function(){
              fnRenderBuilderResumeComponents();
            });
          });
        });

        $(".step-4").addClass('step-done');
        $(".step-5").addClass('active-step');



      default: return
    }

}

function  fnRenderBuilderResumeComponents(){
  var $obj = $('.table-of-contents');
  var top = $obj.offset().top - parseFloat($obj.css('marginTop').replace(/auto/, 0));

  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= top) {
      $obj.addClass('fixed');
    } else {
      $obj.removeClass('fixed');
    }
  });

  $(".build-section .edit-btn").click(function(event) {
    $(this).addClass('hide');
    $(this).parent().find('.viewable').addClass('hide');
    $(this).parent().find('.editable, .actions').removeClass('hide');
  });

  $(".build-section .cancel-btn").click(function(event) {
    $(this).parent().parent().find('.viewable, .edit-btn').removeClass('hide');
    $(this).parent().parent().find('.editable, .actions').addClass('hide');
  });

  $('#editor_summary, #editor_school_1, #editor_job_desc, #editor_hobbies, #editor_ref_desc').trumbowyg({
    btns: ['viewHTML',
    '|', 'formatting',
    '|', 'btnGrp-design',
    '|', 'link',
    '|', 'btnGrp-justify',
    '|', 'btnGrp-lists',
    '|', 'horizontalRule'],
    autogrow:true
  });
  
}