  	$(".title").youHue({
  		"colors": ['#000','#FFF','#34459e','#AAA'],
  		myRandom: true,
  	});

    $(".myexample").youHue({
      "colors": ['#f1c40f','#000','#7F8C8D'],
      myBackground: true
    });

     $(".myexample2").youHue({
      "colors": ['#f1c40f','#000','#7F8C8D'],
      myForeground: true
    });

      $(".myexample3").youHue({
      "colors": ['#f1c40f','#000','#7F8C8D'],
      myRandom: true
    });

    $(".myexample4").youHue({
      "colors": ['#f1c40f','#000','#7F8C8D'],
      myRandom: true,
      myForeground: true
    });

    $(".example1").youHue({
      backgroundColor: true
    });

    $(".example2").youHue({
      foregroundColor: true
    });

    $(".example3").youHue({
      backgroundColor: true,
      foregroundColor: true,
      randomize: true
    });

    $(".box").youHue({
      backgroundColor: true
    });

    $(".box2").youHue({
      foregroundColor: true
    });

    $(".new-part").youHue({
      "colors": ['#1abc9c', '#2ecc71', '#34495e', '#16a085', "#27ae60", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c"],
      myBackground: true,
      myRandom: true
    });

    $('.top').click(function(){
      $('html, body').animate({
      scrollTop: $('h1').offset().top
    }, 400);
  });
  
  $('.title-btn').click(function(){
    $(".title").youHue({
  		"colors": ['#000','#FFF','#34459e','#AAA'],
  		myRandom: true,
  	});
  });
