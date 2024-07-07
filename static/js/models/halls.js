const halls = [
  {
    slug: 'ritz-carlton-kl',
    name: 'Ritz-Carlton KL',
    locale: 'Bukit Bintang',
    location: 'Kuala Lumpur',
    pricePerPax: 420,
    maxPax: 450,
    image: 'static/img/halls/ritz-carlton/main.jpg',
    gallery: [
      'static/img/halls/ritz-carlton/main.jpg',
      'static/img/halls/ritz-carlton/gallery/1.jpg',
      'static/img/halls/ritz-carlton/gallery/2.jpeg',
      'static/img/halls/ritz-carlton/gallery/3.jpeg'
    ],
    type: 'Annual Dinner',
    description: `
      The Ritz-Carlton is a nice hotel... blah blah

      
      <br />
      **Amenities**
      ✓ Complementary WiFi
      ✓ Basic PA System 
      ✓ Tables and Chairs 
      ✓ Air Conditions
      
      **Add-On Services**
      * Event Crew
      * Event Management 
      * Photo Booth
    `
  },
  {
    slug: 'glasshouse-seputeh',
    name: 'Glasshouse Seputeh',
    locale: 'Seputeh',
    location: 'Kuala Lumpur',
    pricePerPax: 420,
    maxPax: 450,
    image: 'static/img/halls/glasshouse-seputeh/main.jpg',
    gallery: [
      'static/img/halls/glasshouse-seputeh/main.jpg',
      'static/img/halls/glasshouse-seputeh/gallery/1.jpeg',
      'static/img/halls/glasshouse-seputeh/gallery/2.jpeg',
      'static/img/halls/glasshouse-seputeh/gallery/3.webp'
    ],
    type: 'Wedding',
    description: `
      The Glasshouse is a nice hotel... blah blah


      <br />
      **Amenities**
      * ✓ Complementary WiFi
      * ✓ Basic PA System 
      * ✓ Tables and Chairs 
      * ✓ Air Conditions

      **Add-On Services**
      * Event Crew
      * Event Management 
      * Photo Booth
    `
  },
  {
    slug: 'st-regis-kl',
    name: 'St. Regis KL',
    locale: 'KL Sentral',
    location: 'Kuala Lumpur',
    pricePerPax: 420,
    maxPax: 450,
    image: 'static/img/halls/st-regis/main.jpg',
    gallery: [
      'static/img/halls/st-regis/main.jpg',
      'static/img/halls/st-regis/gallery/1.jpg',
      'static/img/halls/st-regis/gallery/2.jpg',
      'static/img/halls/st-regis/gallery/3.jpg'
    ],
    type: 'Exhibition',
    description: `
      The St. Regis is a nice hotel... blah blah

      
      <br />
      **Amenities**
      * ✓ Complementary WiFi
      * ✓ Basic PA System 
      * ✓ Tables and Chairs 
      * ✓ Air Conditions

      **Add-On Services**
      * Event Crew
      * Event Management 
      * Photo Booth
    `
  },
  {
    slug: 'klcc',
    name: 'KL Convention Centre',
    locale: 'KLCC',
    location: 'Kuala Lumpur',
    pricePerPax: 420,
    maxPax: 450,
    image: 'static/img/halls/klcc/main.jpg',
    gallery: [
      'static/img/halls/klcc/main.jpg',
      'static/img/halls/klcc/gallery/1.jpg',
      'static/img/halls/klcc/gallery/2.jpg'
    ],
    type: 'Exhibition',
    description: `
      The St. Regis is a nice hotel... blah blah

      
      <br />
      **Amenities**
      * ✓ Complementary WiFi
      * ✓ Basic PA System 
      * ✓ Tables and Chairs 
      * ✓ Air Conditions

      **Add-On Services**
      * Event Crew
      * Event Management 
      * Photo Booth
    `
  },
  {
    slug: 'klpac',
    name: 'KL Performing Arts Centre',
    locale: 'Sentul Park',
    location: 'Kuala Lumpur',
    pricePerPax: 420,
    maxPax: 450,
    image: 'static/img/halls/klpac/main.jpg',
    gallery: [
      'static/img/halls/klpac/main.jpg',
      'static/img/halls/klpac/gallery/1.jpg',
      'static/img/halls/klpac/gallery/2.jpg',
      'static/img/halls/klpac/gallery/3.jpg'
    ],
    type: 'Exhibition',
    description: `
      The St. Regis is a nice hotel... blah blah

      
      <br />
      **Amenities**
      * ✓ Complementary WiFi
      * ✓ Basic PA System 
      * ✓ Tables and Chairs 
      * ✓ Air Conditions

      **Add-On Services**
      * Event Crew
      * Event Management 
      * Photo Booth
    `
  },
  {
    slug: 'doubletree',
    name: 'DoubleTree Putrajaya',
    locale: '-',
    location: 'Putrajaya',
    pricePerPax: 420,
    maxPax: 450,
    image: 'static/img/halls/doubletree/main.jpg',
    gallery: [
      'static/img/halls/doubletree/main.jpg',
      'static/img/halls/doubletree/gallery/1.webp',
      'static/img/halls/doubletree/gallery/2.png'
    ],
    type: 'Exhibition',
    description: `
      The St. Regis is a nice hotel... blah blah

      
      <br />
      **Amenities**
      * ✓ Complementary WiFi
      * ✓ Basic PA System 
      * ✓ Tables and Chairs 
      * ✓ Air Conditions

      **Add-On Services**
      * Event Crew
      * Event Management 
      * Photo Booth
    `
  },
  {
    slug: 'spcc',
    name: 'Pyramid Convention Centre',
    locale: 'Sunway',
    location: 'Selangor',
    pricePerPax: 420,
    maxPax: 450,
    image: 'static/img/halls/spcc/main.jpg',
    gallery: [
      'static/img/halls/spcc/main.jpg',
      'static/img/halls/spcc/gallery/1.jpg',
      'static/img/halls/spcc/gallery/2.jpg',
      'static/img/halls/spcc/gallery/3.jpg'
    ],
    type: 'Exhibition',
    description: `
      The St. Regis is a nice hotel... blah blah

      
      <br />
      **Amenities**
      * ✓ Complementary WiFi
      * ✓ Basic PA System 
      * ✓ Tables and Chairs 
      * ✓ Air Conditions

      **Add-On Services**
      * Event Crew
      * Event Management 
      * Photo Booth
    `
  },
  {
    slug: 'dewan-budaya',
    name: 'Dewan Budaya',
    locale: '-',
    location: 'Ipoh',
    pricePerPax: 420,
    maxPax: 450,
    image: 'static/img/halls/dewan-budaya/main.jpeg',
    gallery: [
      'static/img/halls/dewan-budaya/main.jpeg',
      'static/img/halls/dewan-budaya/gallery/1.jpg',
      'static/img/halls/dewan-budaya/gallery/2.jpg',
      'static/img/halls/dewan-budaya/gallery/3.jpg'
    ],
    type: 'Exhibition',
    description: `
      The St. Regis is a nice hotel... blah blah

      
      <br />
      **Amenities**
      * ✓ Complementary WiFi
      * ✓ Basic PA System 
      * ✓ Tables and Chairs 
      * ✓ Air Conditions

      **Add-On Services**
      * Event Crew
      * Event Management 
      * Photo Booth
    `
  },
  {
    slug: 'pulai-spring-resort',
    name: 'Pulai Spring Resort',
    locale: 'Johor Bahru',
    location: 'Johor',
    pricePerPax: 420,
    maxPax: 450,
    image: 'static/img/halls/pulai-spring-resort/main.webp',
    gallery: [
      'static/img/halls/pulai-spring-resort/main.webp',
      'static/img/halls/pulai-spring-resort/gallery/1.webp',
      'static/img/halls/pulai-spring-resort/gallery/2.jpg',
      'static/img/halls/pulai-spring-resort/gallery/3.jpg'
    ],
    type: 'Exhibition',
    description: `
      The St. Regis is a nice hotel... blah blah

      
      <br />
      **Amenities**
      * ✓ Complementary WiFi
      * ✓ Basic PA System 
      * ✓ Tables and Chairs 
      * ✓ Air Conditions

      **Add-On Services**
      * Event Crew
      * Event Management 
      * Photo Booth
    `
  },
  {
    slug: 'db-ratt',
    name: "David Brown's Restaurant & Tea Terrace",
    locale: 'Penang Hill',
    location: 'Penang',
    pricePerPax: 420,
    maxPax: 450,
    image: 'static/img/halls/db-ratt/main.png',
    gallery: [
      'static/img/halls/db-ratt/main.png',
      'static/img/halls/db-ratt/gallery/1.jpg',
      'static/img/halls/db-ratt/gallery/2.jpg',
      'static/img/halls/db-ratt/gallery/3.jpg'
    ],
    type: 'Exhibition',
    description: `
      The St. Regis is a nice hotel... blah blah

      
      <br />
      **Amenities**
      * ✓ Complementary WiFi
      * ✓ Basic PA System 
      * ✓ Tables and Chairs 
      * ✓ Air Conditions

      **Add-On Services**
      * Event Crew
      * Event Management 
      * Photo Booth
    `
  }
];

let filteredHalls = [...halls];

const loadHalls = (amount = filteredHalls.length) => {
  const grid = document.getElementById('halls-list');
  grid.innerHTML = '';

  if (filteredHalls.length === 0) {
    grid.innerHTML = '<h2>No halls found...<h2>';
  }

  filteredHalls.slice(0, amount).forEach((hall) => {
    const card = document.createElement('article');
    card.classList.add('card');

    card.innerHTML = `
          <header class="card__image">
            <img src="${hall.image}" alt="${hall.name}" />
          </header>

          <main class="card__content">
            <div class="card__content__info">
              <h2>${hall.name}</h2>
              <p class="highlight">${hall.locale} | ${hall.location}</p>
              <p>MYR ${hall.pricePerPax} per pax</p>
              <p style="display: flex; align-items: center; gap: 0.2rem;"><img src="static/img/icons/pax.svg" alt="pax-icon" /> ${hall.maxPax}</p>
            </div>

            <a href="hall.html?slug=${hall.slug}" class="btn">View More</a>
          </main>
      `;

    grid.appendChild(card);
  });
};
