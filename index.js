let touchstartX = 0;
let touchendX = 0;
let position = 0;
const data = [
  {
    country: 'Brazil',
    imageUrl: './cover.jpeg',
    mapPosition: 'translate(16vw, -16vw)',
    trips: 18,
  },
  {
    country: 'Africa',
    imageUrl: './cover.jpeg',
    mapPosition: 'translate(16vw, -16vw)',
    trips: 18,
  },
  {
    country: 'England',
    imageUrl: './cover.jpeg',
    mapPosition: 'translate(16vw, -16vw)',
    trips: 18,
  },
];

function handleGesure() {
  const swiped = 'swiped: ';

  if (touchendX < touchstartX && position > 0) {
    console.log(`${swiped}left!`);
    position--;
  }
  if (touchendX > touchstartX && position <= data.length) {
    console.log(`${swiped}right!`);
    position++;
  }
}

setTimeout(() => {
  document.getElementById('pointer').setAttribute('class', 'active');
}, 250);

const renderCards = () => {
  let HTML = '';

  data.forEach(({ country, imageUrl, trips }, index) => {
    HTML += `
    <div class="item ${position === index ? 'selected' : ''}">
      <img src="${imageUrl}" alt="${country} image" />
      <h1>${country}</h1>
      <p>${trips} trips</p>
    </div>
    `;
  });

  document.getElementById('carrousel').innerHTML = HTML;
  document.getElementById('carrousel').setAttribute('class', 'carrousel-container');
  document.getElementById('carrousel').style.width = `calc(${data.length} * (329px + 12px))`;
  document.getElementById('carrousel').style.transform = `translateX(-${position * (329 + 12)}px)`;
};

const prepare = () => {
  const gesuredZone = document.getElementById('carrousel');
  renderCards();

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

  setTimeout(() => {
    document.getElementById('pointer').setAttribute('class', 'active');
  }, 250);
};

window.prepare = prepare;
