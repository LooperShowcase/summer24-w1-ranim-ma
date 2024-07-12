function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
console.log(realPic());

const fakePic = "https://thispersondoesnotexist.com/";
//showing the imges
const imgContainer = document.getElementById("images");

const resContainer = document.getElementById("result");
function draw() {
imgContainer.innerHTML = "";
resContainer.innerHTML = "";


  const randomBool = Math.random() > 0.5;
  const arr = [randomBool, !randomBool];
  const agin = document.createElement("button");
  agin.innerHTML = "play agin!"
agin.onclick = draw;
  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? realPic() : fakePic;
    img.onclick = function () {
      if (isReal) {
        resContainer.innerHTML = "Mabrook :D";
      } else {
        resContainer.innerHTML = "Try agin :(";
      }
      resContainer.appendChild(agin);
    };
    imgContainer.appendChild(img);
  }
}
draw();
