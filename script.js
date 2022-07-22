// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myImg");
var images = document.getElementsByClassName("gallery-img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
//img.onclick = function(){
//  modal.style.display = "block";
// modalImg.src = this.src;
//captionText.innerHTML = this.alt;
//}
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.getAttribute("data-caption");
  };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

//code blocks function story test
var story;


story = ['I have a dog', 'Her name is Nancy', 'My mum gives her a lot of treats', 'So she is quite chonky'];
let element_text = document.getElementById('text');
element_text.innerText = story[0];


document.getElementById('next').addEventListener('click', (event) => {
  let element_text2 = document.getElementById('text');
  story.push(story[0]);
  element_text2.innerText = story.shift();

});

document.getElementById('back').addEventListener('click', (event) => {
  let element_text3 = document.getElementById('text');
  story.unshift(story.slice(-1)[0]);
  element_text3.innerText = story.pop();

});

document.getElementById('click').addEventListener('click', (event) => {
  let element_nancy = document.getElementById('nancy');
  element_nancy.setAttribute("src", 'https://i.imgur.com/Y19K17N.jpg');

});

/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);

  let element_caption = document.getElementById('caption');
element_caption.style.color = 'yellow';