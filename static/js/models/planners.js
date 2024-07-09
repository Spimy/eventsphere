const planners = [
  {
    slug: 'lai-yung-wei',
    name: 'Lai Yung Wei',
    profilePhoto: 'static/img/planners/lai-yung-wei/profile.jpg',
    banner: 'static/img/planners/lai-yung-wei/profile.jpg',
    rating: 4,
    locale: 'Bukit Bintang',
    location: 'Kuala Lumpur',
    type: ['Annual Dinner'],
    pricePerHour: 50,
    socials: [
      {
        icon: 'static/img/icons/socials/linkedin.svg',
        url: 'https://www.linkedin.com/in/lai-yung-wei-a5110a2a6/'
      },
      {
        icon: 'static/img/icons/socials/instagram.svg',
        url: 'https://www.instagram.com/__laiyw__'
      }
    ],
    description:
      'Crafted unforgettable experiences for over 5 years, transforming vision boards into sold-out conferences, award-winning galas, and engaging product launches. Successfully managed budgets exceeding $200,000, consistently delivering events within budget and on time.'
  },
  {
    slug: 'william-law',
    name: 'William Law',
    profilePhoto: 'static/img/planners/william-law/profile.png',
    banner: 'static/img/planners/william-law/banner.jpg',
    rating: 3,
    locale: 'Bukit Bintang',
    location: 'Kuala Lumpur',
    type: ['Function Hall', 'Exhibition'],
    pricePerHour: 50,
    socials: [
      {
        icon: 'static/img/icons/socials/linkedin.svg',
        url: 'https://www.linkedin.com/in/william-law-hong-waye/'
      },
      {
        icon: 'static/img/icons/socials/instagram.svg',
        url: 'https://www.instagram.com/william3001_lhw/'
      }
    ],
    description:
      'Crafted unforgettable experiences for over 5 years, transforming vision boards into sold-out conferences, award-winning galas, and engaging product launches. Successfully managed budgets exceeding $200,000, consistently delivering events within budget and on time.'
  },
  {
    slug: 'joshua-bonham',
    name: 'Joshua Bonham',
    profilePhoto: 'static/img/planners/joshua-bonham/profile.png',
    banner: 'static/img/planners/joshua-bonham/banner.png',
    rating: 3,
    locale: 'Bukit Bintang',
    location: 'Kuala Lumpur',
    type: ['Wedding'],
    pricePerHour: 50,
    socials: [
      {
        icon: 'static/img/icons/socials/linkedin.svg',
        url: 'https://www.linkedin.com/in/joshuabonham03/'
      },
      {
        icon: 'static/img/icons/socials/instagram.svg',
        url: 'https://www.instagram.com/jb_bru/'
      }
    ],
    description:
      'Crafted unforgettable experiences for over 5 years, transforming vision boards into sold-out conferences, award-winning galas, and engaging product launches. Successfully managed budgets exceeding $200,000, consistently delivering events within budget and on time.'
  },
  {
    slug: 'justin-yong',
    name: 'Justin Yong',
    profilePhoto: 'static/img/planners/justin-yong/profile.jpg',
    banner: 'static/img/planners/justin-yong/profile.jpg',
    rating: 5,
    locale: 'Bukit Bintang',
    location: 'Kuala Lumpur',
    type: ['Exhibition'],
    pricePerHour: 50,
    socials: [
      {
        icon: 'static/img/icons/socials/x.svg',
        url: 'https://x.com/justin_yww11'
      },
      {
        icon: 'static/img/icons/socials/linkedin.svg',
        url: 'https://www.linkedin.com/in/justinyongww/'
      },
      {
        icon: 'static/img/icons/socials/instagram.svg',
        url: 'https://www.instagram.com/justin_yww'
      }
    ],
    description:
      'Crafted unforgettable experiences for over 5 years, transforming vision boards into sold-out conferences, award-winning galas, and engaging product launches. Successfully managed budgets exceeding $200,000, consistently delivering events within budget and on time.'
  }
];

let filteredPlanners = [...planners];

const loadPlanners = (amount = filteredPlanners.length) => {
  const grid = document.getElementById('planners-list');
  grid.innerHTML = '';

  if (filteredPlanners.length === 0) {
    grid.innerHTML = '<h2>No planners found...<h2>';
  }

  filteredPlanners.slice(0, amount).forEach((planner) => {
    const card = document.createElement('article');
    card.classList.add('card');

    card.innerHTML = `
          <header class="card__image">
            <img src="${planner.profilePhoto}" alt="${planner.name}" />
          </header>

          <main class="card__content">
            <h3>${planner.name}</h3>
            <p class="rating">
              ${'★'.repeat(planner.rating)}${'☆'.repeat(5 - planner.rating)}
            </p>
            <p class="highlight">${planner.locale} | ${planner.location}</p>
            <a href="planner.html?slug=${planner.slug}" class="btn">
              Learn More
            </a>
          </main>
      `;

    grid.appendChild(card);
  });
};
