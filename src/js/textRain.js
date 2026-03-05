import { remToPx, isMobile } from '@/js/utils';

export default () => {
  let canvas;
  if (!document.getElementById('text-rain-container')) {
    const div = document.createElement('div');
    div.id = 'text-rain-container';
    div.style = `
      width: 100vw;
      height: 100vh;
      background-color: #000;
      position: fixed;
      top: 0;
      left: 0;
      overflow: hidden;
      pointer-events: none;
    `
    document.body.prepend(div);
    canvas = document.createElement('canvas');
    canvas.style = `
      position: absolute;
      top: 0;
      left: 0;
    `
    div.appendChild(canvas);
  } else {
    canvas = document.getElementById('text-rain-container').querySelector('canvas');
  }

  const ctx = canvas.getContext('2d');
  let fontSize, cols, rows, arr, timer, drawTimer;

  window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      init();
    }, 50)
  });

  init();

  function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // 文字大小
    fontSize = isMobile ? remToPx(60) : remToPx(20);
    // 总列数
    cols = Math.ceil(document.documentElement.clientWidth / fontSize);
    // 总行数
    rows = Math.ceil(document.documentElement.clientHeight / fontSize);
    // 每列的当前所在的行坐标
    arr = new Array(cols).fill(0);
    clearInterval(drawTimer);
    drawTimer = setInterval(() => {
      draw();
    }, 30)
  }

  // 绘制
  function draw() {
    ctx.fillStyle = 'rgba(0,0,0,.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < arr.length; i++) {
      let x = i * (fontSize + (isMobile ? remToPx(9) : remToPx(3)));
      let y = arr[i] * fontSize;
      ctx.fillStyle = getColor()
      ctx.font = `${fontSize}px serif`;
      ctx.fillText(getText(), x, y);

      if (arr[i] >= rows && Math.random() > 0.95) {
        arr[i] = 0;
      } else {
        arr[i]++;
      }
    }
  }

  // 随机颜色
  function getColor() {
    let colorArr = [
      '#3498db',
      '#2ecc71',
      '#e74c3c',
      '#f39c12',
      '#1abc9c',
      '#9b59b6',
      '#e67e22',
      '#27ae60',
      '#d35400',
      '#2c3e50',
      '#8e44ad',
      '#f1c40f',
      '#16a085',
      '#e74c3c',
      '#3498db'
    ];

    return colorArr[Math.floor(Math.random() * colorArr.length)];
  }

  // 随机文字
  function getText() {
    let text = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // 去掉空格
    text = text.replace(/\s/g, '');
    return text.split('')[Math.floor(Math.random() * text.length)];
  }
}