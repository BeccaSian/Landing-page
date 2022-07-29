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

// carousel project
var pictures;


pictures = ['https://i.imgur.com/1AhHHDU.jpg', 'https://i.imgur.com/OhYZSsa.jpg', 'https://i.imgur.com/NZauML6.jpg', 'https://i.imgur.com/RXSmRkz.jpg', 'https://i.imgur.com/Jx6GByr.jpg', 'https://i.imgur.com/RLknkT7.jpg', 'https://i.imgur.com/hXmoYh8.jpg'];
let element_bec = document.getElementById('bec');
pictures.push(pictures[0]);
element_bec.setAttribute("src", pictures.shift());


document.getElementById('btn_next').addEventListener('click', (event) => {
  let element_bec2 = document.getElementById('bec');
  pictures.push(pictures[0]);
  element_bec2.setAttribute("src", pictures.shift());

});

document.getElementById('btn_previous').addEventListener('click', (event) => {
  let element_bec3 = document.getElementById('bec');
  pictures.unshift(pictures.slice(-1)[0]);
  element_bec3.setAttribute("src", pictures.pop());

});

//commenting project
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


document.getElementById('btn_submit').addEventListener('click', (event) => {
  let element_comment_list = document.getElementById('comment_list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('comment').value);

  element_comment_list.appendChild(new_li);

});
//commenting project end

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