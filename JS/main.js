// custom javascript 

$("#slider1").owlCarousel({      // main slider
  loop: true,
  margin: 10,
  nav: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1     // showing one image on full screen
    }
  }
});

$("#slider2").owlCarousel({    // second multi-images slider
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 5     // showing five images on full screen
    }
  }
});

var owl1 = $(".slider2");      // second multi-images slider arrow
owl1.owlCarousel();
// Go to the next item
$(".next1").click(function() {
  owl1.trigger("next.owl.carousel", [700]);   // speed of moving images
});
// Go to the previous item
$(".prev1").click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl1.trigger("prev.owl.carousel", [700]);
});

$("#slider3").owlCarousel({     // third multi-images slider 
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 5
    }
  }
});


var owl = $(".slider3");        // third multi-images slider arrow
owl.owlCarousel();
// Go to the next item
$(".next3").click(function() {
  owl.trigger("next.owl.carousel", [700]);
});
// Go to the previous item
$(".prev3").click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [700]);
});



$("#menu").slicknav({         // for responsive navigation
  label: "",
  duration: 1400,
  easingOpen: "easeOutBounce" //available with jQuery UI
});

// End  -by Niraj Narkhede
