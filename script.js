//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImg(imgArr){
	imgArr.forEach(img => {
		output.innerHTML += `<img src=${img} >`
	})
}

let promises = images.map(img => {
	return new Promise(res => res(img.url))
})

Promise.all(promises).then(downloadImg)



