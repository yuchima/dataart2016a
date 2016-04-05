var table2;
var productCodes;
var ages;
var comp;
var total;
var body;
var m = 40;
var diam = 2;
var h = 100,
  s = 360,
  b = 360,
  y = 0;


function preload() {
  backPic = loadImage("assets/body2.jpg");
  table2 = loadTable("assets/nss2-3.tsv", "tsv", "header");
}

function setup() {
  colorMode(HSB, 360);
  productCodes = table2.getColumn("prod1");
  total = table2.getRowCount();
  ages = table2.getColumn("age");
  body = table2.getColumn("body_part");


  // console.log(body);


  // **most frequent product**
  // var frequency = {}; // array of frequency.
  // var max = 0; // holds the max frequency.
  // var result; // holds the max frequency element.
  // for (var v in productCodes) {
  //   frequency[productCodes[v]] = (frequency[productCodes[v]] || 0) + 1; // increment frequency.
  //   if (frequency[productCodes[v]] > max) { // is this frequency > max so far ?
  //     max = frequency[productCodes[v]]; // update max.
  //     result = productCodes[v]; // update result.
  //   }
  // }
  // console.log(productCodes);
  // console.log(ages);
  // console.log(result + ": " + max + " injuries in " + total + " total injuries.");


}

function draw() {
  var x = width / 2;

  var head = getCases(75);
  var lowerArm = getCases(33);
  var ankle = getCases(37);
  var upperArm = getCases(80);
  var ear = getCases(94);
  var elbow = getCases(32);
  var eyeball = getCases(77);
  var face = getCases(76);
  var finger = getCases(92);
  var foot = getCases(83);
  var hand = getCases(82);
  var knee = getCases(35);
  var lowerLeg = getCases(36);
  var upperLeg = getCases(81);
  var mouth = getCases(88);
  var neck = getCases(89);
  var shoulder = getCases(30);
  var toe = getCases(93);
  var lowerTrunk = getCases(79);
  var upperTrunk = getCases(31);
  var wrist = getCases(34);
  var halfbody = getCases(84);
  var wholeBody = getCases(85);


  createCanvas(620, 380);
  // background(0, 0, 360);
  background(280, 80, 60,300);
  image(backPic, 0, 0);

  //drawing dots
  noStroke();

  fill(m - (head / body.length) * h, s, b);
  ellipse(x - 10, y + 40, diam, diam);
  ellipse(x + 10, y + 40, diam, diam);
  ellipse(x - 3, y + 38, diam, diam);
  ellipse(x + 3, y + 38, diam, diam);
  ellipse(x - 6, y + 36, diam, diam);
  ellipse(x + 6, y + 36, diam, diam);
  ellipse(x, y + 34, diam, diam);
  ellipse(x, y + 30, diam, diam);
  ellipse(x - 7, y + 32, diam, diam);
  ellipse(x + 7, y + 32, diam, diam);

  fill(m - (eyeball / body.length) * h, s, b);
  ellipse(x - 5, y + 42, diam, diam);
  ellipse(x + 5, y + 42, diam, diam);


  fill(m - (ear / body.length) * h, s, b);
  ellipse(x - 12, y + 52, diam, diam);
  ellipse(x + 12, y + 52, diam, diam);
  ellipse(x - 12, y + 44, diam, diam);
  ellipse(x + 12, y + 44, diam, diam);
  ellipse(x - 12, y + 50, diam, diam);
  ellipse(x + 12, y + 50, diam, diam);


  fill(m - (face / body.length) * h, s, b);
  ellipse(x - 6, y + 54, diam, diam);
  ellipse(x + 6, y + 54, diam, diam);
  ellipse(x, y + 46, diam, diam);
  ellipse(x - 8, y + 56, diam, diam);
  ellipse(x + 8, y + 56, diam, diam);
  ellipse(x - 6, y + 46, diam, diam);
  ellipse(x + 6, y + 46, diam, diam);

  fill((mouth / body.length) * h, s, b);
  ellipse(x - 2, y + 58, diam, diam);
  ellipse(x + 2, y + 58, diam, diam);

  fill(m - (neck / body.length) * h, s, b);
  ellipse(x - 10, y + 62, diam, diam);
  ellipse(x + 10, y + 62, diam, diam);
  ellipse(x - 7, y + 61, diam, diam);
  ellipse(x + 7, y + 61, diam, diam);
  ellipse(x - 15, y + 67, diam, diam);
  ellipse(x + 15, y + 67, diam, diam);
  ellipse(x - 6, y + 70, diam, diam);
  ellipse(x + 6, y + 70, diam, diam);
  ellipse(x + 0, y + 65, diam, diam);

  fill(m - (shoulder / body.length) * h, s, b);
  ellipse(x - 21, y + 72, diam, diam);
  ellipse(x + 21, y + 72, diam, diam);
  ellipse(x - 26, y + 75, diam, diam);
  ellipse(x + 26, y + 75, diam, diam);
  ellipse(x - 31, y + 79, diam, diam);
  ellipse(x + 31, y + 79, diam, diam);

  fill(m - (upperArm / body.length) * h, s, b);
  ellipse(x - 40, y + 88, diam, diam);
  ellipse(x + 40, y + 88, diam, diam);
  ellipse(x - 42, y + 96, diam, diam);
  ellipse(x + 42, y + 96, diam, diam);
  ellipse(x - 34, y + 94, diam, diam);
  ellipse(x + 34, y + 94, diam, diam);
  ellipse(x - 30, y + 100, diam, diam);
  ellipse(x + 30, y + 100, diam, diam);
  ellipse(x - 30, y + 110, diam, diam);
  ellipse(x + 30, y + 110, diam, diam);
  ellipse(x - 36, y + 106, diam, diam);
  ellipse(x + 36, y + 106, diam, diam);
  ellipse(x - 46, y + 108, diam, diam);
  ellipse(x + 46, y + 108, diam, diam);
  ellipse(x - 42, y + 116, diam, diam);
  ellipse(x + 42, y + 116, diam, diam);


  fill(m - (upperTrunk / body.length) * h, s, b);
  ellipse(x - 20, y + 92, diam, diam);
  ellipse(x + 20, y + 92, diam, diam);
  ellipse(x - 20, y + 82, diam, diam);
  ellipse(x + 20, y + 82, diam, diam);
  ellipse(x - 10, y + 76, diam, diam);
  ellipse(x + 10, y + 76, diam, diam);
  ellipse(x - 10, y + 88, diam, diam);
  ellipse(x + 10, y + 88, diam, diam);
  ellipse(x - 0, y + 87, diam, diam);
  ellipse(x + 0, y + 77, diam, diam);
  ellipse(x - 0, y + 97, diam, diam);
  ellipse(x + 0, y + 107, diam, diam);
  ellipse(x - 16, y + 98, diam, diam);
  ellipse(x + 16, y + 98, diam, diam);
  ellipse(x - 21, y + 103, diam, diam);
  ellipse(x + 21, y + 103, diam, diam);
  ellipse(x - 19, y + 105, diam, diam);
  ellipse(x + 19, y + 105, diam, diam);


  fill(m - (elbow / body.length) * h, s, b);
  ellipse(x - 50, y + 122, diam, diam);
  ellipse(x + 50, y + 122, diam, diam);
  ellipse(x - 46, y + 116, diam, diam);
  ellipse(x + 46, y + 116, diam, diam);

  fill(m - (lowerTrunk / body.length) * h, s, b);
  ellipse(x - 10, y + 122, diam, diam);
  ellipse(x + 10, y + 122, diam, diam);
  ellipse(x - 11, y + 115, diam, diam);
  ellipse(x + 11, y + 115, diam, diam);
  ellipse(x - 17, y + 113, diam, diam);
  ellipse(x + 17, y + 113, diam, diam);
  ellipse(x - 0, y + 111, diam, diam);
  ellipse(x + 0, y + 121, diam, diam);
  ellipse(x + 0, y + 131, diam, diam);
  ellipse(x + 0, y + 151, diam, diam);
  ellipse(x + 0, y + 157, diam, diam);
  ellipse(x + 0, y + 164, diam, diam);
  ellipse(x - 17, y + 125, diam, diam);
  ellipse(x + 17, y + 125, diam, diam);
  ellipse(x - 23, y + 128, diam, diam);
  ellipse(x + 23, y + 128, diam, diam);
  ellipse(x - 25, y + 122, diam, diam);
  ellipse(x + 25, y + 122, diam, diam);
  ellipse(x - 19, y + 135, diam, diam);
  ellipse(x + 19, y + 135, diam, diam);
  ellipse(x - 9, y + 136, diam, diam);
  ellipse(x + 9, y + 136, diam, diam);
  ellipse(x - 14, y + 140, diam, diam);
  ellipse(x + 14, y + 140, diam, diam);
  ellipse(x - 5, y + 145, diam, diam);
  ellipse(x + 5, y + 145, diam, diam);
  ellipse(x - 23, y + 145, diam, diam);
  ellipse(x + 23, y + 145, diam, diam);
  ellipse(x - 17, y + 146, diam, diam);
  ellipse(x + 17, y + 146, diam, diam);
  ellipse(x - 10, y + 150, diam, diam);
  ellipse(x + 10, y + 150, diam, diam);
  ellipse(x - 8, y + 154, diam, diam);
  ellipse(x + 8, y + 154, diam, diam);
  ellipse(x - 15, y + 155, diam, diam);
  ellipse(x + 15, y + 155, diam, diam);
  ellipse(x - 24, y + 156, diam, diam);
  ellipse(x + 24, y + 156, diam, diam);
  ellipse(x - 16, y + 166, diam, diam);
  ellipse(x + 16, y + 166, diam, diam);


  fill(m - (lowerArm / body.length) * h, s, b);
  ellipse(x - 60, y + 142, diam, diam);
  ellipse(x + 60, y + 142, diam, diam);
  ellipse(x - 56, y + 132, diam, diam);
  ellipse(x + 56, y + 132, diam, diam);
  ellipse(x - 40, y + 128, diam, diam);
  ellipse(x + 40, y + 128, diam, diam);
  ellipse(x - 42, y + 138, diam, diam);
  ellipse(x + 42, y + 138, diam, diam);
  ellipse(x - 48, y + 146, diam, diam);
  ellipse(x + 48, y + 146, diam, diam);
  ellipse(x - 60, y + 150, diam, diam);
  ellipse(x + 60, y + 150, diam, diam);
  ellipse(x - 54, y + 155, diam, diam);
  ellipse(x + 54, y + 155, diam, diam);

  fill(m - (wrist / body.length) * h, s, b);
  ellipse(x - 64, y + 164, diam, diam);
  ellipse(x + 64, y + 164, diam, diam);
  ellipse(x - 56, y + 168, diam, diam);
  ellipse(x + 56, y + 168, diam, diam);

  fill(m - (hand / body.length) * h, s, b);
  ellipse(x - 64, y + 180, diam, diam);
  ellipse(x + 64, y + 180, diam, diam);
  ellipse(x - 60, y + 186, diam, diam);
  ellipse(x + 60, y + 186, diam, diam);
  ellipse(x - 54, y + 182, diam, diam);
  ellipse(x + 54, y + 182, diam, diam);

  fill(m - (finger / body.length) * h, s, b);
  ellipse(x - 52, y + 192, diam, diam);
  ellipse(x + 52, y + 192, diam, diam);

  fill(m - (upperLeg / body.length) * h, s, b);
  ellipse(x - 14, y + 188, diam, diam);
  ellipse(x + 14, y + 188, diam, diam);
  ellipse(x - 4, y + 184, diam, diam);
  ellipse(x + 4, y + 184, diam, diam);
  ellipse(x - 6, y + 182, diam, diam);
  ellipse(x + 6, y + 182, diam, diam);
  ellipse(x - 28, y + 182, diam, diam);
  ellipse(x + 28, y + 182, diam, diam);
  ellipse(x - 30, y + 202, diam, diam);
  ellipse(x + 30, y + 202, diam, diam);
  ellipse(x - 6, y + 200, diam, diam);
  ellipse(x + 6, y + 200, diam, diam);
  ellipse(x - 6, y + 211, diam, diam);
  ellipse(x + 6, y + 211, diam, diam);
  ellipse(x - 7, y + 231, diam, diam);
  ellipse(x + 7, y + 231, diam, diam);
  ellipse(x - 27, y + 227, diam, diam);
  ellipse(x + 27, y + 227, diam, diam);
  ellipse(x - 28, y + 221, diam, diam);
  ellipse(x + 28, y + 221, diam, diam);
  ellipse(x - 11, y + 220, diam, diam);
  ellipse(x + 11, y + 220, diam, diam);
  ellipse(x - 31, y + 212, diam, diam);
  ellipse(x + 31, y + 212, diam, diam);
  ellipse(x - 19, y + 204, diam, diam);
  ellipse(x + 19, y + 204, diam, diam);
  ellipse(x - 19, y + 237, diam, diam);
  ellipse(x + 19, y + 237, diam, diam);



  fill(m - (knee / body.length) * h, s, b);
  ellipse(x - 10, y + 242, diam, diam);
  ellipse(x + 10, y + 242, diam, diam);
  ellipse(x - 27, y + 242, diam, diam);
  ellipse(x + 27, y + 242, diam, diam);
  ellipse(x - 19, y + 242, diam, diam);
  ellipse(x + 19, y + 242, diam, diam);

  fill(m - (lowerLeg / body.length) * h, s, b);
  ellipse(x - 14, y + 282, diam, diam);
  ellipse(x + 14, y + 282, diam, diam);
  ellipse(x - 32, y + 282, diam, diam);
  ellipse(x + 32, y + 282, diam, diam);
  ellipse(x - 14, y + 272, diam, diam);
  ellipse(x + 14, y + 272, diam, diam);
  ellipse(x - 32, y + 268, diam, diam);
  ellipse(x + 32, y + 268, diam, diam);
  ellipse(x - 34, y + 262, diam, diam);
  ellipse(x + 34, y + 262, diam, diam);
  ellipse(x - 18, y + 265, diam, diam);
  ellipse(x + 18, y + 265, diam, diam);
  ellipse(x - 11, y + 261, diam, diam);
  ellipse(x + 11, y + 261, diam, diam);
  ellipse(x - 21, y + 255, diam, diam);
  ellipse(x + 21, y + 255, diam, diam);
  ellipse(x - 12, y + 249, diam, diam);
  ellipse(x + 12, y + 249, diam, diam);
  ellipse(x - 27, y + 248, diam, diam);
  ellipse(x + 27, y + 248, diam, diam);
  ellipse(x - 22, y + 275, diam, diam);
  ellipse(x + 22, y + 275, diam, diam);
  ellipse(x - 24, y + 285, diam, diam);
  ellipse(x + 24, y + 285, diam, diam);
  ellipse(x - 19, y + 289, diam, diam);
  ellipse(x + 19, y + 289, diam, diam);
  ellipse(x - 31, y + 290, diam, diam);
  ellipse(x + 31, y + 290, diam, diam);
  ellipse(x - 31, y + 308, diam, diam);
  ellipse(x + 31, y + 308, diam, diam);
  ellipse(x - 19, y + 306, diam, diam);
  ellipse(x + 19, y + 306, diam, diam);
  ellipse(x - 19, y + 316, diam, diam);
  ellipse(x + 19, y + 316, diam, diam);
  ellipse(x - 31, y + 318, diam, diam);
  ellipse(x + 31, y + 318, diam, diam);
  ellipse(x - 25, y + 300, diam, diam);
  ellipse(x + 25, y + 300, diam, diam);

  fill(m - (foot / body.length) * h, s, b);
  ellipse(x - 20, y + 332, diam, diam);
  ellipse(x + 20, y + 332, diam, diam);
  ellipse(x - 26, y + 326, diam, diam);
  ellipse(x + 26, y + 326, diam, diam);
  ellipse(x - 26, y + 336, diam, diam);
  ellipse(x + 26, y + 336, diam, diam);

  fill(m - (toe / body.length) * h, s, b);
  ellipse(x - 34, y + 332, diam, diam);
  ellipse(x + 34, y + 332, diam, diam);



  //drawing lines

  strokeWeight(0.5);

  stroke(m - (head / body.length) * h, s, b);
  line(x - 10, y + 40, x - 3, y + 38);
  line(x + 10, y + 40, x + 3, y + 38);
  line(x - 6, y + 36, x - 7, y + 32);
  line(x + 6, y + 36, x + 7, y + 32);
  line(x, y + 34, x, y + 30);
  line(x, y + 30, x - 10, y + 40);
  line(x, y + 30, x + 10, y + 40);
  line(x, y + 30, x - 7, y + 32);
  line(x, y + 30, x + 7, y + 32);
  line(x - 10, y + 40, x - 7, y + 32);
  line(x + 10, y + 40, x + 7, y + 32);
  line(x, y + 30, x, y + 34);
  line(x, y + 34, x - 3, y + 38);
  line(x, y + 34, x + 3, y + 38);



  stroke(m - (eyeball / body.length) * h, s, b);
  line(x - 5, y + 42, x + 5, y + 42);


  stroke(m - (ear / body.length) * h, s, b);
  line(x - 12, y + 52, x - 12, y + 44);
  line(x + 12, y + 52, x + 12, y + 44);
  line(x - 12, y + 52, x - 12, y + 50);
  line(x + 12, y + 52, x + 12, y + 50);


  stroke(m - (face / body.length) * h, s, b);
  line(x - 10, y + 40, x - 12, y + 44);
  line(x + 10, y + 40, x + 12, y + 44);


  stroke((mouth / body.length) * h, s, b);
  line(x - 2, y + 58, x + 2, y + 58);

  stroke(m - (neck / body.length) * h, s, b);
  line(x - 10, y + 62, x + 10, y + 62);


  stroke(m - (shoulder / body.length) * h, s, b);
  line(x - 20, y + 72, x + 20, y + 72);


  stroke(m - (upperArm / body.length) * h, s, b);
  line(x - 40, y + 92, x + 40, y + 92);


  stroke(m - (upperTrunk / body.length) * h, s, b);
  line(x - 20, y + 92, x + 20, y + 92);



  stroke(m - (elbow / body.length) * h, s, b);
  line(x - 50, y + 122, x + 50, y + 122);


  stroke(m - (lowerTrunk / body.length) * h, s, b);
  line(x - 10, y + 122, x + 10, y + 122);


  stroke(m - (upperArm / body.length) * h, s, b);
  line(x - 60, y + 142, x + 60, y + 142);


  stroke(m - (wrist / body.length) * h, s, b);
  line(x - 64, y + 164, x + 64, y + 164);


  stroke(m - (hand / body.length) * h, s, b);
  line(x - 64, y + 180, x + 64, y + 180);

  stroke(m - (finger / body.length) * h, s, b);
  line(x - 52, y + 192, x + 52, y + 192);


  stroke(m - (upperLeg / body.length) * h, s, b);
  line(x - 52, y + 192, x + 52, y + 192);




}



function getCases(a) {
  var number = 0;
  for (var i = 0; i < body.length; i++) {
    if (body[i] == a) {
      number = number + 1;
    }
  }
  return number;
}