//

function startHide(){
  $('#about').hide();
  $('#estimate').hide();
  $('#contact').hide();
  $('#banner').show();
  $('#home').show();
};

function init(){
  estimateFormHandler();
  startHide();
  clickHeaderHandler();
  clickBrandHandler();
}

function homeDisplay(){
  startHide();
}

function aboutDisplay(){
  $('#about').show();
  $('#estimate').hide();
  $('#contact').hide();
  // $('#banner').hide();
  $('#home').hide();
}

function estimateDisplay(){
  $('#about').hide();
  $('#estimate').show();
  $('#contact').hide();
  // $('#banner').hide();
  $('#home').hide();
}

function contactDisplay(){
  $('#about').hide();
  $('#estimate').hide();
  $('#contact').show();
  // $('#banner').hide();
  $('#home').hide();
}


function clickHeaderHandler(){
  $('#dantes-navbar ul li').click(function(){
    var id = $(this).attr('id');
    $('#dantes-navbar ul li').removeClass('active');
    $(this).addClass('active');
    if (id === 'about-nav'){
      aboutDisplay();
    } else if (id === 'estimate-nav'){
      estimateDisplay();
    } else if (id === 'contact-nav'){
      contactDisplay();
    }
  })
}

function clickBrandHandler(){
  $('#logo').click(function(){
    console.log('hi');
    $('#dantes-navbar ul li').removeClass('active');
    homeDisplay();
  })
}



$(function() {
  console.log('ready!');
  init();
});


//
