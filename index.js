let touchstartX = 0;
let touchendX = 0;
let position = 0;
const data = [
  {
    country: 'Brazil',
    imageUrl: './cover.jpeg',
    mapPosition: 'translate(16vw, -16vw)',
    trips: 5,
  },
  {
    country: 'Africa',
    imageUrl: './cover.jpeg',
    mapPosition: 'translate(16vw, -16vw)',
    trips: 10,
  },
  {
    country: 'England',
    imageUrl: './cover.jpeg',
    mapPosition: 'translate(16vw, -16vw)',
    trips: 18,
  },
];

const moveCards = (pos) => {
  const carrousel = document.getElementById('carrousel');
  carrousel.setAttribute('class', 'carrousel-container moviment');
  carrousel.style.transform = `translateX(-${pos * (329 + 12)}px)`;
  Object.values(document.getElementsByClassName('item')).forEach((item, index) => {
    item.setAttribute('class', index === pos ? 'item selected' : 'item');
  });
  setTimeout(() => {
    carrousel.setAttribute('class', 'carrousel-container');
  }, 250);
};

const handleGesure = () => {
  let active = false;

  if (touchendX > touchstartX && position > 0) {
    position--;
    active = true;
  }
  if (touchendX < touchstartX && position <= data.length) {
    position++;
    active = true;
  }

  if (active) {
    moveCards(position);
  }
};

const renderCards = () => {
  let HTML = '';
  const carrousel = document.getElementById('carrousel');

  data.forEach(({ country, imageUrl, trips }, index) => {
    HTML += `
    <div class="item ${position === index ? 'selected' : ''}">
      <img src="${imageUrl}" alt="${country} image" />
      <h1>${country}</h1>
      <p>${trips} trips</p>
    </div>
    `;
  });

  carrousel.innerHTML = HTML;
  carrousel.setAttribute('class', 'carrousel-container');
  carrousel.style.width = `calc(${data.length} * (329px + 12px))`;
  carrousel.style.transform = `translateX(-${position * (329 + 12)}px)`;
  document.getElementById('world-map').style.transform = `scale(6) ${data[position].mapPosition}`;
  setTimeout(() => {
    document.getElementById('pointer').setAttribute('class', 'active');
  }, 1000);
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
};

window.prepare = prepare;
