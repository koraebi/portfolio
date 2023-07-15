export const ProfessionalServices: ProfessionalService[] = [
  {
    name: 'websiteBuilder',
    locations: ['france'],
    prices: {
      france: {
        price: 200,
        type: 'day',
        currency: '€'
      },
    },
    remoteOnly: true,
    period: ['shortTerm'],
    proficiencies: ['Shopify', 'Wix', 'Google Site'],
    section: 'freelance'
  },
  {
    name: 'uxDesigner',
    locations: ['france'],
    prices: {
      france: {
        price: 250,
        type: 'day',
        currency: '€'
      },
    },
    remoteOnly: false,
    period: ['shortTerm'],
    proficiencies: ['Design Thinking', 'Usability Engineering', 'UCD/HCD', 'Adobe Creative Suite', 'Adobe XD', 'Figma'],
    section: 'freelance'
  },
  {
    name: 'frontendDeveloper',
    locations: ['france'],
    prices: {
      france: {
        price: 350,
        type: 'day',
        currency: '€'
      },
    },
    remoteOnly: false,
    period: ['shortTerm', 'longTerm'],
    proficiencies: ['React.js', 'MUI', 'Vue.js', 'VUX', 'Tailwind CSS'],
    section: 'freelance'
  },
  {
    name: 'fullStackDeveloper',
    locations: ['france', 'switzerland', 'dubai'],
    prices: {
      france: {
        price: 50000,
        type: 'year',
        currency: '€'
      },
      switzerland: {
        price: 80000,
        type: 'year',
        currency: 'CHF'
      },
      dubai: {
        price: 20000,
        type: 'month',
        currency: 'AED'
      }
    },
    remoteOnly: false,
    period: ['shortTerm', 'longTerm'],
    proficiencies: ['React.js', 'MUI', 'Vue.js', 'VUX', 'Tailwind CSS', 'Node.js', 'Next.js', 'Express.js', 'NestJS', 'MongoDB', 'Redis', 'GCP'],
    section: 'employee'
  },
  {
    name: 'mobileDeveloper',
    locations: ['france', 'switzerland', 'dubai'],
    prices: {
      france: {
        price: 40000,
        type: 'year',
        currency: '€'
      },
      switzerland: {
        price: 70000,
        type: 'year',
        currency: 'CHF'
      },
      dubai: {
        price: 15000,
        type: 'month',
        currency: 'AED'
      }
    },
    remoteOnly: false,
    period: ['shortTerm', 'longTerm'],
    proficiencies: ['React Native', 'NativeBase', 'NativeWind', 'Realm'],
    section: 'employee'
  },
  {
    name: 'uxDesigner',
    locations: ['france', 'switzerland', 'dubai'],
    prices: {
      france: {
        price: 35000,
        type: 'year',
        currency: '€'
      },
      switzerland: {
        price: 65000,
        type: 'year',
        currency: 'CHF'
      },
      dubai: {
        price: 10000,
        type: 'month',
        currency: 'AED'
      }
    },
    remoteOnly: false,
    period: ['shortTerm', 'longTerm'],
    proficiencies: ['Design Thinking', 'Usability Engineering', 'UCD/HCD', 'Adobe Creative Suite', 'Adobe XD', 'Figma'],
    section: 'employee'
  }
]