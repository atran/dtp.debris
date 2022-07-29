var $element1 = $(".p1");

var mySequence = [
  { e: $element1, p: {position: "relative"}, o: {visibility: "hidden", delay: 4000}},
  { e: $element1, p: {translateX: -500, translateY: 800}, o: {duration: 1000}},
  { e: $element1, p: {position: "relative"}, o: {visibility: "visible", delay: 1000}},
  { e: $element1, p: {position: "relative"}, o: {visibility: "hidden", delay: 5000}},
  { e: $element1, p: {translateX: 0, translateY: 0}, o: {duration: 1000}},
  { e: $element1, p: {position: "relative"}, o: {visibility: "visible", delay: 1000}}
];

 $.Velocity.RunSequence(mySequence);


var $element2 = $(".p2");

var mySequence2 = [
  { e: $element2, p: {position: "relative"}, o: {visibility: "hidden", delay: 6000}},
  { e: $element2, p: {translateX: -200, translateY: -200}, o: {duration: 1000}},
  { e: $element2, p: {position: "relative"}, o: {visibility: "visible", delay: 1000}},
  { e: $element2, p: {position: "relative"}, o: {visibility: "hidden", delay: 5000}},
  { e: $element2, p: {translateX: 0, translateY: 0}, o: {duration: 1000}},
  { e: $element2, p: {position: "relative"}, o: {visibility: "visible", delay: 1000}}
];

 $.Velocity.RunSequence(mySequence2);



// var interval = setInterval(() => {
//   $.Velocity.RunSequence(mySequence);
// }, 6000);


// $body.velocity(
//   {backgroundColor: "#ff0000"}, {duration: 5000});


var $cursor = $('.cursor');

function moveCursor(e) {
  $cursor.addClass('is-moving');
  $cursor.css({"top": e.pageY, "left": e.pageX});
  clearTimeout(timer2);
   var timer2 = setTimeout(function() {
       $cursor.removeClass('is-moving');
   }, 300);
}

$(window).on('mousemove', moveCursor);

