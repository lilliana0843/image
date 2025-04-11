const images = document.querySelectorAll(".carousel img");
const caption = document.getElementById("caption");
const thumbnailBar = document.getElementById("thumbnailBar");

let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
    thumbnailBar.children[i].classList.toggle("active", i === index);
  });
  caption.textContent = `第 ${index + 1} 張 / 共 ${images.length} 張`;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// 動態生成縮圖
images.forEach((img, i) => {
  const thumb = document.createElement("img");
  thumb.src = img.src;
  if (i === 0) thumb.classList.add("active");
  thumb.addEventListener("click", () => {
    currentIndex = i;
    showImage(currentIndex);
  });
  thumbnailBar.appendChild(thumb);
});
