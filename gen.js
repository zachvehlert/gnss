function setup() {
  createCanvas(window.screen.width, window.screen.height);
  $('#dialog').on('click', () => $('#dialog').fadeOut(300, () => $('#dialog').css('display', 'none')))
}

function draw() {
  background("#1E1B1B");

  let $xOffset = $("#xOffset");
  let $yOffset = $("#yOffset");
  let $segments = $("#segments");
  let $numLines = $("#numLines");
  let $frameRateVal = $('#frameRateVal');

  let color1 = $('color1')
  let color2 = $("color2");
  let color3 = $("color3");
  let color4 = $("color4");
  let color5 = $("color5");

  $xOffset.attr('max', width / 2.2)
  $yOffset.attr("max", height / 4);
  $segments.attr('max', 200);
  $numLines.attr('max', 80);

  let xOffset = parseInt($xOffset.val());
  let yOffset = parseInt($yOffset.val());
  let segments = parseInt($segments.val());
  let numLines = parseInt($numLines.val());
  let frameRateVal = parseInt($frameRateVal.val());
  
  if (frameRateVal == 1) {
    noLoop();
    $frameRateVal.on('change', () => loop())
  }

  frameRate(frameRateVal);

  lines(width, height, numLines, xOffset, yOffset, segments);

}
// ["#ffc14d", "#b39836", "#fff6d3", "#ffeca6", "#ffffff"];
function randomColor(color1, color2, color3, color4, color5) {
  let colors = [
    color1.value,
    color2.value,
    color3.value,
    color4.value,
    color5.value,
  ];
  return random(colors);
}

function lines(width, height, numLines, xOffset, yOffset, segments) {
  let yInc = height / numLines;

  for (
    let yStep = height / numLines + yOffset;
    yStep <= height - height / numLines - yOffset;
    yStep += height / numLines
  ) {
    let tracker = 0;
    stroke(randomColor(color1, color2, color3, color4, color5));

    for (
      let x = xOffset;
      x < width - xOffset;
      x += (width - xOffset * 2) / segments
    ) {
      let percentage = ((x * yStep) / (width * height)) ** 1.5;
      let yOffsetNum = random(yInc * percentage, yInc * -1 * percentage);

      line(
        x,
        yStep + tracker,
        x + (width - xOffset * 2) / segments,
        yStep + yOffsetNum
      );

      tracker = yOffsetNum;
    }
  }
}











