// Hover + scale up paragraphs
$("p").on("mouseenter", function() {
  $el = $(this);
  console.log($el);
  // TODO: Fill in velocity animation below to scale up
  $el.velocity();
})

$("p").on("mouseout", function() {
  $el = $(this);
  console.log($el);
  // TODO: Fill in velocity animation below to scale it back down
  $el.velocity();
})



// Ambient paragraph movement
// Paragraph 1
var $element1 = $("#p1");
var mySequence1 = [
    { e: $element1, p: {position: "relative"}, o: {visibility: "visible", delay: 400}},
    { e: $element1, p: {translateX: -500, translateY: 800}, o: {duration: 100}},
    { e: $element1, p: {position: "relative"}, o: {visibility: "visible", delay: 100}},
    { e: $element1, p: {position: "relative"}, o: {visibility: "visible", delay: 500}},
    { e: $element1, p: {translateX: 0, translateY: 0}, o: {duration: 100}},
    { e: $element1, p: {position: "relative"}, o: {visibility: "visible", delay: 100}}
  ];
$.Velocity.RunSequence(mySequence1);
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence1);
}, 1300);

// Paragraph 2
var $element2 = $("#p2");
var mySequence2 = [
  { e: $element2, p: {position: "relative"}, o: {visibility: "hidden", delay: 6000}},
  { e: $element2, p: {translateX: -200, translateY: -200}, o: {duration: 1000}},
  { e: $element2, p: {position: "relative"}, o: {visibility: "visible", delay: 1000}},
  { e: $element2, p: {position: "relative"}, o: {visibility: "hidden", delay: 5000}},
  { e: $element2, p: {translateX: 0, translateY: 0}, o: {duration: 1000}},
  { e: $element2, p: {position: "relative"}, o: {visibility: "visible", delay: 1000}}
];
$.Velocity.RunSequence(mySequence2);
var interval = setInterval(() => {
  $.Velocity.RunSequence(mySequence2);
}, 15000);


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

