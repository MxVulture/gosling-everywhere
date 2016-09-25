function Gosling(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getGosling = {
  init: function(myGosling){
    this.myGosling = myGosling;
  },

  horizontal: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "vertical";
    });
  }, 

  square: function (){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "square";
    });  
  }
 };


/**
 * @return {number}
 */
function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var myGosling = [ 
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("horizontal", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("vertical", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg"),
new Gosling("square", "https://farm8.staticflickr.com/7133/7074773425_3555c32a94_q_d.jpg")

]

function imageRatio(image) {
  var proportion = image.height/image.width;

  if(proportion > 1) {
    return "vertical";
  } else if(proportion === 1) {
    return "square";
  } else if(proportion < 1) {
    return "horizontal";
  }

  return "square";
}

function gimmeGosling(){
    var images = [].slice.call(document.getElementsByTagName('img')).filter(mustBeRyan), length = images.length

    for (var i = 0; i < length; i++) {
        var ratio = imageRatio(images[i]);
        var number = Randomize(getGosling[ratio]());
        var img = getGosling[ratio]()[number];
        images[i].src = img.imageurl
        images[i].className += " heygirl";
    }
}

function mustBeRyan(domElement){
    return domElement.className.search("heygirl") === -1;
}
           
(function (document) {
  
  getGosling.init(myGosling);
    gimmeGosling();

    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function(mutations, observer) {
        // fired when a mutation occurs
        if (mutations[0]['addedNodes'].length > 0){
            gimmeGosling();
        }

        // ...
    });

    observer.observe(document, {
        subtree: true,
        childList: true
        //...
    });

})(document);
