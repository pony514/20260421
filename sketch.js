let capture;

function setup() {
  // 產生一個全螢幕的畫布
  createCanvas(windowWidth, windowHeight);
  // 擷取攝影機影像
  capture = createCapture(VIDEO);
  // 隱藏預設產生的 HTML 影片元件，只在畫布上繪製
  capture.hide();
}

function draw() {
  background('#e7c6ff');
  
  // 計算顯示影像的寬高 (整個畫布寬高的 60%)
  let w = width * 0.6;
  let h = height * 0.6;
  
  // 擷取影像並顯示在畫布中間
  image(capture, (width - w) / 2, (height - h) / 2, w, h);
}
