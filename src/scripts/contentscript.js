import ext from "./utils/ext";

function extractImages() {
  let output = [];
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    output.push(images[i].src);
  }
  return output;
}

// function onRequest(request, sender, sendResponse) {
//   if (request.action === "process-page") {
//     sendResponse(extractImages());
//   }
// }

// ext.runtime.onMessage.addListener(onRequest);

console.log("hello");
const images = extractImages();
console.log(images);
const req = fetch("https://google.com").then(data => console.log(data));
