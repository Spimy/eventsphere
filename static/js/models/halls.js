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
    type: ['Annual Dinner', 'Wedding', 'Conference'],
    description: `
      ## The true definition of luxury is through the very essence of genuine hospitality. Imagine extraordinary and captivating enclaves, exquisite fine dining, and well-designed spaces in which to retire.

      
      <br />
      ## **Amenities**
      ✓ Restaurant
      ✓ Spa
      ✓ Fitness Center
      ✓ Outdoor Pool
      ✓ 24-Hour Room Service
      ✓ Daily Housekeeping
      ✓ Turndown Service
      ✓ Meeting Space
      ✓ Gift Shop
      ✓ Dry Cleaning Service
      ✓ Laundry
      ✓ Room Service
      ✓ Hair Salon
      ✓ Wake-Up Calls
      ✓ Free Wi-Fi
      ✓ Kitchenette

      
      ## **Add-On Services**
      * Private Limousine/Van Service
      * Babysitting
    
    `
  },
  {
    slug: 'glasshouse-seputeh',
    name: 'Glasshouse Seputeh',
    locale: 'Seputeh',
    location: 'Kuala Lumpur',
    pricePerPax: 500,
    maxPax: 300,
    image: 'static/img/halls/glasshouse-seputeh/main.jpg',
    gallery: [
      'static/img/halls/glasshouse-seputeh/main.jpg',
      'static/img/halls/glasshouse-seputeh/gallery/1.jpeg',
      'static/img/halls/glasshouse-seputeh/gallery/2.jpeg',
      'static/img/halls/glasshouse-seputeh/gallery/3.webp'
    ],
    type: ['Wedding', 'Function Hall', 'Conference'],
    description: `
      ## Enjoy the tranquil luxury of Bangi Resort Hotel, located at the peak of Bandar Baru Bangi. This 5-star resort is accorded with superb views, where every guest is guaranteed a memorable stay, be it business or pleasure.


      <br />
      ## **Amenities**
      ✓ Free Wi-Fi
      ✓ Restaurants 
      ✓ Spa 
      ✓ Fitness Center
      ✓ Outdoor Pool
      ✓ Golf Course
      ✓ Meeting Rooms
      ✓ Ballroom
      ✓ Daily Housekeeping
      ✓ Laundry Service

      ## **Add-On Services**
      * Celebrity Chef Dining
      * Event Hosting
    `
  },
  {
    slug: 'st-regis-kl',
    name: 'St. Regis KL',
    locale: 'KL Sentral',
    location: 'Kuala Lumpur',
    pricePerPax: 300,
    maxPax: 1500,
    image: 'static/img/halls/st-regis/main.jpg',
    gallery: [
      'static/img/halls/st-regis/main.jpg',
      'static/img/halls/st-regis/gallery/1.jpg',
      'static/img/halls/st-regis/gallery/2.jpg',
      'static/img/halls/st-regis/gallery/3.jpg'
    ],
    type: ['Exhibition', 'Wedding', 'Annual Dinner'],
    description: `
      ## Experience luxury like never before where sophistication meets comfort. Located in the pulsating core of the city, offering facilities that are just out of this world.


      
      <br />
      ## **Amenities**
      ✓ Free Wi-Fi
      ✓ Restaurants
      ✓ Fitness Center
      ✓ Outdoor Pool
      ✓ Iridium Spa
      ✓ Daily Housekeeping
      ✓ Meeting Space
      ✓ Drawing Rooms
      ✓ Bar
      ✓ Daily Housekeeping
      ✓ Turndown Service
      ✓ Dry Cleaning Service
      ✓ Laundry
      ✓ Kitchen
      ✓ Room Service
      ✓ Mobile Key
      ✓ Service Request

      ## **Add-On Services**
      * Event Management
      * Experimental Dining 
      * Wake up Calls
      * 24 Hour Room Service
    `
  },
  {
    slug: 'klcc',
    name: 'KL Convention Centre',
    locale: 'KLCC',
    location: 'Kuala Lumpur',
    pricePerPax: 250,
    maxPax: 5000,
    image: 'static/img/halls/klcc/main.jpg',
    gallery: [
      'static/img/halls/klcc/main.jpg',
      'static/img/halls/klcc/gallery/1.jpg',
      'static/img/halls/klcc/gallery/2.jpg'
    ],
    type: ['Exhibition', 'Conference', 'Annual Dinner'],
    description: `
      ## Malaysia's flagship for events, and an award-winning, purpose-built venue, located in the heart of the city with state-of-the-art facilities for conferences, exhibitions, and events/ Dine around its world-class dining outlets.

      
      <br />
      ## **Amenities**
      ✓ Free Wi-Fi
      ✓ Exhibition Halls 
      ✓ Meeting Rooms 
      ✓ Banquet Facilities
      ✓ Auditoriums
      ✓ Conference Roomsf
      ✓ VIP Lounges
      ✓ Business Centre
      ✓ On-site Dining availablity
      ✓ On-site Parking

      ## **Add-On Services**
      * Event Planning and Management
      * Catering Services
      * Audio-Visual Equipment Rental
      * Technical Support
      * Decoration Services
      * Security
      * Concierge
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
    type: ['Exhibition', 'Fashion Shows', 'Function Hall'],
    description: `
      ## You don't need to search any more for a distinctive location for your performance, gathering, festival, or photo session. Welcome to KLPAC, an award-winning heritage building

      
      <br />
      ## **Amenities**
      ✓ Theatres
      ✓ Studio Space 
      ✓ Gallery Space 
      ✓ Lawn and Deck Areas
      ✓ 35-Acre Park
      ✓ Lake

      ## **Add-On Services**
      * Audio Visual Equipment
      * Event Crew
      * Photo Booth
      * Billboard Advertising
    `
  },
  {
    slug: 'doubletree',
    name: 'DoubleTree Putrajaya',
    locale: '-',
    location: 'Putrajaya',
    pricePerPax: 319,
    maxPax: 1200,
    image: 'static/img/halls/doubletree/main.jpg',
    gallery: [
      'static/img/halls/doubletree/main.jpg',
      'static/img/halls/doubletree/gallery/1.webp',
      'static/img/halls/doubletree/gallery/2.png'
    ],
    type: ['Exhibition', 'Conference'],
    description: `
      ## DoubleTree is a modern comfort that meets scenic tranquillity. Be taken away by its top-tiered amenities. Enjoy local and international cuisine. The ideal hotel for business and leisure, it offers vast event spaces and family-friendly activities.


      
      <br />
      ## **Amenities**
      ✓ Free Wi-Fi
      ✓ Connecting Room 
      ✓ Digital Key 
      ✓ Spa
      ✓ EV Charging
      ✓ Executive Lounge
      ✓ On-site Restaurant
      ✓ Outdoor Pool
      ✓ Fitness Center
      ✓ Room Service
      ✓ Meeting Rooms
      ✓ Laundry and Dry Cleaning Services

      ## **Add-On Services**
      * Event Planning and Management
      * Catering Services
      * Technical Support
      * Babysitting
    `
  },
  {
    slug: 'spcc',
    name: 'Pyramid Convention Centre',
    locale: 'Sunway',
    location: 'Selangor',
    pricePerPax: 400,
    maxPax: 6000,
    image: 'static/img/halls/spcc/main.jpg',
    gallery: [
      'static/img/halls/spcc/main.jpg',
      'static/img/halls/spcc/gallery/1.jpg',
      'static/img/halls/spcc/gallery/2.jpg',
      'static/img/halls/spcc/gallery/3.jpg'
    ],
    type: ['Conference', 'Wedding'],
    description: `
      ## Situated in the heart of Sunway, right above Sunway Shopping mall, and near Sunway Resort Hotel & Spa, Sunway Hotel Pyramid and Sunway Lagoon Hotel, this venue is the most convenient and ideal space for a large audience of people.

      
      <br />
      ## **Amenities**
      ✓ 7.157 Sq meter Open-plan Convention Centre
      ✓ Function Rooms
      ✓ Ballroom 
      ✓ Air Conditions
      ✓ Tables and Chairs
      ✓ Free Wi-Fi

      ## **Add-On Services**
      * Huge Parking Space
      * 24/7 Security 
      * PlugPoints
      * Coffee Machine
    `
  },
  {
    slug: 'dewan-budaya',
    name: 'Dewan Budaya',
    locale: '-',
    location: 'Ipoh',
    pricePerPax: 220,
    maxPax: 480,
    image: 'static/img/halls/dewan-budaya/main.jpeg',
    gallery: [
      'static/img/halls/dewan-budaya/main.jpeg',
      'static/img/halls/dewan-budaya/gallery/1.jpg',
      'static/img/halls/dewan-budaya/gallery/2.jpg',
      'static/img/halls/dewan-budaya/gallery/3.jpg'
    ],
    type: ['Exhibition', 'Function Hall'],
    description: `
      ## This newly renovated historical venue showcases the history of Ipoh through its amazing architecture and design. It exudes a feeling of antiquity and is perfect for concert productions, weddings and more.

      
      <br />
      ## **Amenities**
      ✓ Free Wi-Fi
      ✓ Basic PA System 
      ✓ Tables and Chairs 
      ✓ Air Conditions

      ## **Add-On Services**
      * 24/7 Security
      * Free Parking 
    `
  },
  {
    slug: 'pulai-spring-resort',
    name: 'Pulai Spring Resort',
    locale: 'Johor Bahru',
    location: 'Johor',
    pricePerPax: 309,
    maxPax: 800,
    image: 'static/img/halls/pulai-spring-resort/main.webp',
    gallery: [
      'static/img/halls/pulai-spring-resort/main.webp',
      'static/img/halls/pulai-spring-resort/gallery/1.webp',
      'static/img/halls/pulai-spring-resort/gallery/2.jpg',
      'static/img/halls/pulai-spring-resort/gallery/3.jpg'
    ],
    type: ['Wedding', 'Annual Dinner'],
    description: `
      ## Located in Johor, the southernmost state of West Malaysia, Pulai Springs Resort is a recreational area tucked away in the magnificent Malaysian flora and fauna at the base of Mount Pulai.

      
      <br />
      ## **Amenities**
      ✓ 9 Venue Sections
      ✓ Gymnasium
      ✓ Tables and Chairs 
      ✓ Air Conditions
      ✓ Swimming Pools
      ✓ The Pulai Spa
      ✓ Sports & Recreation

      ## **Add-On Services**
      * Event Crew
      * Audio Visual Equipment
      * Catering
      * Free Parking
      * Overnight Stays
    `
  },
  {
    slug: 'db-ratt',
    name: "David Brown's Restaurant & Tea Terrace",
    locale: 'Penang Hill',
    location: 'Penang',
    pricePerPax: 199,
    maxPax: 150,
    image: 'static/img/halls/db-ratt/main.png',
    gallery: [
      'static/img/halls/db-ratt/main.png',
      'static/img/halls/db-ratt/gallery/1.jpg',
      'static/img/halls/db-ratt/gallery/2.jpg',
      'static/img/halls/db-ratt/gallery/3.jpg'
    ],
    type: ['Annual Dinner', 'Conference', 'Wedding'],
    description: `
      ## For a business function or dinner, seminar, product launch, training, management meeting, yearly or family meal, David Brown's is the perfect venue. Outside, David Brown's offers an amazing view of all the major sites on the Pearl of the Orient as it is situated on top of Penang Hill.

      
      <br />
      ## **Amenities**
      ✓ Free Wi-Fi
      ✓ Pond 
      ✓ Tables and Chairs 
      ✓ Garden Area

      ## **Add-On Services**
      * Catering
      * Event Mood-Lighting 
      * Audio Visual Equipment
      * Free Parking
      * 24/7 Security
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
