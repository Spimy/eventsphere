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
      'Lai has vast experience in event planning with a finance background. He started his career in finance, overseeing high-stakes corporate and investor meetings for his company, which made him acquire a very high sense of precision and organisation. He later moved to the technology industry working on planning for large-scale product launches and international conferences. Only when he spent time as a project manager with one of the top advertising agencies did he develop truly creative and strategic planning skills. With his wide-ranging knowledge, Lai ensures that every event is produced with perfection, hence amazed by all the people in attendance.'
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
      'William started with a career as an executive chef, spending seven years in culinary arts to understand the essence of proper presentation of exquisite details. He then changed over to hospitality management by heading a grand resort for cultivating guest experiences and a larger event organisation. Experience as a public relations manager developed his effective communication and brand management skills. With a mix of culinary, hospitality, and PR expertise, William makes sure that every event is perfectly organised and will remain truly unforgettable.'
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
      'Joshua leverages over 12 years of experience in the film industry, where he honed his skills as a shot coordinator, to orchestrate unforgettable events. He brings a further 5 years of expertise from the wedding planning industry and 2 years managing Sunway Got Talent, solidifying his reputation as a world-renowned event planner.'
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
      'Justin is an Award-Winning Politician turned event manager. He spent 10 years with the Ministry of Finance before it went bankrupt as a result of too many high-end events. As someone with experience in politics, he is an ideal candidate to plan your next debate or to launch your political campaign.'
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
