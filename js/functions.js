// Global variables — accessible to getHeartPoint() and inline script
let offsetX, offsetY;
let gardenCtx, gardenCanvas, garden;
let $garden, $loveHeart;
const clientWidth = $(window).width();
const clientHeight = $(window).height();

$(function () {
  // Setup garden
  $loveHeart = $("#loveHeart");
  offsetX = $loveHeart.width() / 2;
  offsetY = $loveHeart.height() / 2 - 55;
  $garden = $("#garden");
  gardenCanvas = $garden[0];

  // Responsive canvas sizing
  gardenCanvas.width = $loveHeart.width();
  gardenCanvas.height = $loveHeart.height();
  gardenCtx = gardenCanvas.getContext("2d");
  gardenCtx.globalCompositeOperation = "lighter";
  garden = new Garden(gardenCtx, gardenCanvas);

  // Render loop using requestAnimationFrame (stops when no blooms left)
  function renderLoop() {
    garden.render();
    if (garden.blooms.length > 0) {
      requestAnimationFrame(renderLoop);
    }
  }
  // Expose for restarting after new blooms are added
  window.startRenderLoop = function () {
    requestAnimationFrame(renderLoop);
  };
  requestAnimationFrame(renderLoop);
});

// Only reload on actual orientation change, not every resize (2.1)
window.addEventListener("orientationchange", function () {
  location.reload();
});

function getHeartPoint(angle) {
  const t = angle / Math.PI;
  // Scale heart to fit the container width
  const scale = Math.min($("#loveHeart").width() / 670, 1);
  const x = 19.5 * scale * (16 * Math.pow(Math.sin(t), 3));
  const y = -20 * scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  return [offsetX + x, offsetY + y];
}

function startHeartAnimation() {
  const interval = 50;
  let angle = 10;
  const heart = [];
  const animationTimer = setInterval(function () {
    const bloom = getHeartPoint(angle);
    let draw = true;
    for (let i = 0; i < heart.length; i++) {
      const p = heart[i];
      const distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
      if (distance < Garden.options.bloomRadius.max * 1.3) {
        draw = false;
        break;
      }
    }
    if (draw) {
      heart.push(bloom);
      garden.createRandomBloom(bloom[0], bloom[1]);
      // Restart render loop since new blooms were added
      if (window.startRenderLoop) window.startRenderLoop();
    }
    if (angle >= 30) {
      clearInterval(animationTimer);
      showMessages();
    } else {
      angle += 0.2;
    }
  }, interval);
}

function timeElapse(date) {
  const current = Date();
  let seconds = (Date.parse(current) - Date.parse(date)) / 1000;
  const days = Math.floor(seconds / (3600 * 24));
  seconds = seconds % (3600 * 24);
  let hours = Math.floor(seconds / 3600);
  if (hours < 10) hours = "0" + hours;
  seconds = seconds % 3600;
  let minutes = Math.floor(seconds / 60);
  if (minutes < 10) minutes = "0" + minutes;
  seconds = seconds % 60;
  if (seconds < 10) seconds = "0" + seconds;

  const result =
    '<span class="digit">' + days + '</span> days ' +
    '<span class="digit">' + hours + '</span> hrs<br>' +
    '<span class="digit">' + minutes + '</span> min ' +
    '<span class="digit">' + seconds + '</span> sec';
  $("#elapseClock").html(result);
}

function showMessages() {
  $('#messages').fadeIn(1500);
  $('#loveu').fadeIn(1500);
}