//

var ourServ = [
  {
    src: 'http://www.fillmurray.com/800/400',
    capHead: 'New Construction',
    capBody: 'Additions? fuck yeah we\'ll build yours',
    alt: 'new-construction'
  },
  {
    src: 'http://www.fillmurray.com/800/401',
    capHead: 'Roofing and Exterior',
    capBody: 'We can fix your roof',
    alt: 'roofing-exterior'
  },
  {
    src: 'http://www.fillmurray.com/801/401',
    capHead: 'Kitchen & Bathroom',
    capBody: 'Tile and grout, we\'re there',
    alt: 'kitchen-and-bath'
  },
  {
    src: 'http://www.fillmurray.com/801/402',
    capHead: 'Basement Remodels',
    capBody: 'We can finish your basement',
    alt: 'basement-remodel'
  },
  {
    src: 'http://www.fillmurray.com/802/405',
    capHead: 'Concrete Construction',
    capBody: 'Patios? Driveways? Basketball Court?',
    alt: 'conrete-construction'
  }
];

function drawIndicators(){
  var $container = $('ol.carousel-indicators');
  for (var i = 0; i < ourServ.length; i++) {
    var $el = $('<li data-target="#dantes-carousel" data-slide-to="'+i+'"></li>');
    if (i === 0){
      $el.addClass('active');
    }
    $container.append($el);
  }
}

function drawSlides(){
  console.log('drawing!');
  var $carousel = $('#dantes-inner');
  for (var i = 0; i < ourServ.length; i++) {
    var $el = $('<div class="item">');
    var current = ourServ[i];
    if (i === 0){
      $el.addClass('active');
    }
    $el.append( $('<img src="'+ current.src +'" alt="'+ current.alt+'">') );
    $el.append( $('<div class="carousel-caption"><h3>'+current.capHead+'</h3><p>'+current.capBody+'</p></div>') );
    console.log($el);
    $carousel.append($el);
    console.log($carousel);
  }
};
// .item
//   img(src="" alt="")
//   .carousel-caption
//     h3 Text
//     p Text

// function startHide(){
//   $('#about').hide();
//   $('#estimate').hide();
//   $('#contact').hide();
//   $('#banner').show();
//   $('#home').show();
// };

function init(){
  // estimateFormHandler();
  drawIndicators();
  drawSlides();
  // startHide();
  // clickHeaderHandler();
  // clickBrandHandler();
}

// function homeDisplay(){
//   startHide();
// }

// function aboutDisplay(){
//   $('#about').show();
//   $('#estimate').hide();
//   $('#contact').hide();
//   // $('#banner').hide();
//   $('#home').hide();
// }
//
// function estimateDisplay(){
//   $('#about').hide();
//   $('#estimate').show();
//   $('#contact').hide();
//   // $('#banner').hide();
//   $('#home').hide();
// }
//
// function contactDisplay(){
//   $('#about').hide();
//   $('#estimate').hide();
//   $('#contact').show();
//   // $('#banner').hide();
//   $('#home').hide();
// }


// function clickHeaderHandler(){
//   $('#dantes-navbar ul li').click(function(){
//     var id = $(this).attr('id');
//     $('#dantes-navbar ul li').removeClass('active');
//     $(this).addClass('active');
//     if (id === 'about-nav'){
//       aboutDisplay();
//     } else if (id === 'estimate-nav'){
//       estimateDisplay();
//     } else if (id === 'contact-nav'){
//       contactDisplay();
//     }
//   })
// }
//
// function clickBrandHandler(){
//   $('#logo').click(function(){
//     console.log('hi');
//     $('#dantes-navbar ul li').removeClass('active');
//     homeDisplay();
//   })
// }



$(function() {
  // console.log('ready!');
  init();
});


//
