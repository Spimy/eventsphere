const planners = [
  {
    slug: 'lai-yung-wei',
    name: 'Lai Yung Wei',
    profilePhoto: 'static/img/planners/lai-yung-wei/profile.jpg',
    banner: 'static/img/planners/lai-yung-wei/banner.jpg',
    rating: 4,
    locale: 'Bukit Bintang',
    location: 'Kuala Lumpur',
    type: ['Fashion Shows', 'Function Hall'],
    pricePerHour: 80,
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
      '### Lai started his career by organizing frequent shows, he paid great attention to details in arranging runways and coordinating with designer access and model management to get the best result from his shows. He also concurrently organized different events in function halls such as corporate functions and social events. He handled the setup of the venue including seating arrangement and stage setup, catering, and entertainment. Through this, he has gained vast experience organizing fashion shows and events in function halls, making him suitable for planning events related to fashion shows or when a function hall is needed.'
  },
  {
    slug: 'william-law',
    name: 'William Law',
    profilePhoto: 'static/img/planners/william-law/profile.png',
    banner: 'static/img/planners/william-law/banner.jpg',
    rating: 3,
    locale: 'Bukit Bintang',
    location: 'Kuala Lumpur',
    type: ['Conference', 'Annual Dinner'],
    pricePerHour: 100,
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
      '### With an overall experience of over 12 years in the pharmaceutical industry, William has won his spurs for organizing high-stakes conferences and exhibitions. Being a senior event coordinator, he has been responsible for the planning and delivery of substantial pharmaceutical conferences. His responsibilities included detailed planning and managing complex scheduling to enable the effective transfer of knowledge and networking opportunities making him extremely suitable for event planning.'
  },
  {
    slug: 'joshua-bonham',
    name: 'Joshua Bonham',
    profilePhoto: 'static/img/planners/joshua-bonham/profile.png',
    banner: 'static/img/planners/joshua-bonham/banner.png',
    rating: 3,
    locale: 'Bukit Bintang',
    location: 'Kuala Lumpur',
    type: ['Wedding', 'Fashion Shows'],
    pricePerHour: 150,
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
      '### Joshua leverages over 12 years of experience in the film industry, where he honed his skills as a shot coordinator, to orchestrate unforgettable events. He brings a further 5 years of expertise from the wedding planning industry and 2 years managing Sunway Got Talent, solidifying his reputation as a world-renowned event planner.'
  },
  {
    slug: 'justin-yong',
    name: 'Justin Yong',
    profilePhoto: 'static/img/planners/justin-yong/profile.jpg',
    banner: 'static/img/planners/justin-yong/banner.png',
    rating: 5,
    locale: 'Bukit Bintang',
    location: 'Kuala Lumpur',
    type: ['Exhibition', 'Annual Dinner'],
    pricePerHour: 120,
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
      '### Justin is an Award-Winning Politician turned event manager. He spent 10 years with the Ministry of Finance before it went bankrupt as a result of too many high-end events. As someone with experience in politics, he is an ideal candidate to plan your next debate or to launch your political campaign.'
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
