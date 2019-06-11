var autopartCategories = [
  {
    category: 'Airco',
    synonyms: ['Koeling'],
    chatStage: 0,
    subcategories: [
      {
        category: 'Airco diversen',
        synonyms: [],
        chatStage: 1
      },
      {
        category: 'Airco elektronica',
        synonyms: [],
        chatStage: 1
      }
    ]
  },
  {
    category: 'Remsysteem',
    synonyms: ['Rem'],
    chatStage: 0,
    subcategories: [
      {
        category: 'Remblokken en schijven',
        synonyms: ['Remblokken', 'Remblok', 'Remschijven', 'Remschijf'],
        chatStage: 1
      },
      {
        category: 'Remhydrauliek',
        synonyms: [],
        chatStage: 1
      },
      {
        category: 'Remklauw',
        synonyms: [],
        chatStage: 1,
        products: [
          {
            chatStage: 2,
            articleNumber: 721402,
            name: 'A.B.S Remklauw',
            articleImg: 'https://www.123autoparts.nl/pegasus-3-0/documents/353/845520167425419/1',
            articleLink: 'https://www.123autoparts.nl/onderdelen/72/mazda/3883/demio-dw/9999/1-3-16v/remsysteem/remklauw/artikel/206/a-b-s/721402'
          }
        ]
      },
      {
        category: 'Remmen diversen',
        synonyms: [],
        chatStage: 1
      },
      {
        category: 'Slangen en leidingen',
        synonyms: [],
        chatStage: 1
      },
      {
        category: 'Schoenen en remtrommel',
        synonyms: ['Remschoen', 'Remschoenen', 'Remtrommel'],
        chatStage: 1
      }
    ]
  }
]
