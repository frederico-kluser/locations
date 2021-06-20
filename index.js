setTimeout(() => {
  document.getElementById('pointer').setAttribute('class', 'active');
}, 250);

let touchstartX = 0;
let touchendX = 0;
function handleGesure() {
  const swiped = 'swiped: ';
  if (touchendX < touchstartX) {
    console.log(`${swiped}left!`);
  }
  if (touchendX > touchstartX) {
    console.log(`${swiped}right!`);
  }
}

const gesuredZone = document.getElementById('carrousel');

gesuredZone.addEventListener(
  'touchstart',
  (event) => {
    touchstartX = event.changedTouches[0].screenX;
  },
  false,
);
gesuredZone.addEventListener(
  'mousedown',
  (event) => {
    touchstartX = event.screenX;
  },
  false,
);

gesuredZone.addEventListener(
  'touchend',
  (event) => {
    touchendX = event.changedTouches[0].screenX;
    handleGesure();
  },
  false,
);
gesuredZone.addEventListener(
  'mouseup',
  (event) => {
    touchendX = event.screenX;
    handleGesure();
  },
  false,
);
