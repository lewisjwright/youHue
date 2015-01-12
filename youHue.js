$.fn.youHue = function(options) {


  
  var settings = $.extend({
    randomize: false,
    backgroundColor: false,
    foregroundColor: false,
    colors: '',
    myForeground: false,
    myBackground: false,
    myRandom: false 
  }, options);

  /*--------------------------------------------- Start Color array function ---------------------------------------------------------*/
  var color_function = function(arr) {
      var test = arr[Math.floor(Math.random()*arr.length)];

      arr.splice(arr.indexOf(test),1);

      return test;
    } 

  if (settings.myRandom && settings.myBackground) {
     $(this).each(function(){
        var user_colors = $.merge([],settings.colors);
      

        var single = color_function(user_colors);
        var single_two = color_function(user_colors);

        $(this).css({
          "background": single
        });    
      });
    }   //Background randomized

  else if (settings.myRandom && settings.myForeground) {
     $(this).each(function(){
        var user_colors = $.merge([],settings.colors);
      

        var single = color_function(user_colors);
        var single_two = color_function(user_colors);

        $(this).css({
          "color": single
        });    
      });
     }   //Foreground randomized

  else if (settings.myBackground && settings.myForeground) {

    $(this).css({
      "background": single,
      "color": single_two
    });
  }   //1 colour for both foreground and 1 colour for background

 else if (settings.myRandom) {
   
      $(this).each(function(){
        var user_colors = $.merge([],settings.colors);

        var single = color_function(user_colors);
        var single_two = color_function(user_colors);

        $(this).css({
          "background": single,
          "color": single_two
        });   
      });
     }   //Everything randomized

  else if (settings.myBackground) {

var user_colors = $.merge([],settings.colors);

        var single = color_function(user_colors);
        var single_two = color_function(user_colors);

    $(this).css({
      "background": single,
    });
  } // Just Background colour

  else if (settings.myForeground) {

var user_colors = $.merge([],settings.colors);

        var single = color_function(user_colors);
        var single_two = color_function(user_colors);

    $(this).css({
      "color": single
    });
  };   //Just foreground colours

  /*--------------------------------------------- Start Foreground colour Functions --------------------------------------------------*/

  if (settings.foregroundColor) {

      var firstNum = Math.floor((Math.random() * 256) + 0);   

      var secondNum = Math.floor((Math.random() * 256) + 0);

      var thirdNum = Math.floor((Math.random() * 256) + 0);

        $(this).css({
            "color": "rgb("+firstNum+","+secondNum+","+thirdNum+")"
        });
      }; //End of default font color function

  if (settings.randomize && settings.foregroundColor) {
    $(this).each(function(){

      var firstNum = Math.floor((Math.random() * 256) + 0);   

      var secondNum = Math.floor((Math.random() * 256) + 0);

      var thirdNum = Math.floor((Math.random() * 256) + 0);
        $(this).css({
          "color": "rgb("+firstNum+","+secondNum+","+thirdNum+")"
       });
    });
  };  //End of random font color function

  /*--------------------------------------------- Start Background colour Functions --------------------------------------------------*/

  if (settings.backgroundColor) {

      var firstNum = Math.floor((Math.random() * 256) + 0);   

      var secondNum = Math.floor((Math.random() * 256) + 0);

      var thirdNum = Math.floor((Math.random() * 256) + 0);

        $(this).css({
            "background": "rgb("+firstNum+","+secondNum+","+thirdNum+")"
        });    
      }; //End default background color function

  if (settings.randomize && settings.backgroundColor) {
    $(this).each(function(){

      var firstNum = Math.floor((Math.random() * 256) + 0);   

      var secondNum = Math.floor((Math.random() * 256) + 0);

      var thirdNum = Math.floor((Math.random() * 256) + 0);
        $(this).css({
          "background": "rgb("+firstNum+","+secondNum+","+thirdNum+")"
       });
    });
  };  //End of random font color function

  /*--------------------------------------------- End Background colour Functions ----------------------------------------------------*/

}; //End of colorfy function
