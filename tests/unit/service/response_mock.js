export const allTvShowsResponse = {
  data: [
    {
      id: 1,
      url: "http://www.tvmaze.com/shows/1/under-the-dome",
      name: "Under the Dome",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Science-Fiction", "Thriller"],
      status: "Ended",
      runtime: 60,
      premiered: "2013-06-24",
      officialSite: "http://www.cbs.com/shows/under-the-dome/",
      schedule: {
        time: "22:00",
        days: ["Thursday"]
      },
      rating: {
        average: 6.5
      },
      weight: 97,
      network: {
        id: 2,
        name: "CBS",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York"
        }
      },
      webChannel: null,
      externals: {
        tvrage: 25988,
        thetvdb: 264492,
        imdb: "tt1553656"
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
      },
      summary:
        "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
      updated: 1573667713,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/1"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/185054"
        }
      }
    },
    {
      id: 2,
      url: "http://www.tvmaze.com/shows/2/person-of-interest",
      name: "Person of Interest",
      type: "Scripted",
      language: "English",
      genres: ["Action", "Crime", "Science-Fiction"],
      status: "Ended",
      runtime: 60,
      premiered: "2011-09-22",
      officialSite: "http://www.cbs.com/shows/person_of_interest/",
      schedule: {
        time: "22:00",
        days: ["Tuesday"]
      },
      rating: {
        average: 8.9
      },
      weight: 95,
      network: {
        id: 2,
        name: "CBS",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York"
        }
      },
      webChannel: null,
      externals: {
        tvrage: 28376,
        thetvdb: 248742,
        imdb: "tt1839578"
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
      },
      summary:
        "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
      updated: 1588773151,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/2"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/659372"
        }
      }
    }
  ]
};

export const getGenres = [
  "Action",
  "Adventure",
  "Anime",
  "Comedy",
  "Crime",
  "Drama",
  "Espionage",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Legal",
  "Medical",
  "Music",
  "Mystery",
  "Romance",
  "Science-Fiction",
  "Sports",
  "Supernatural",
  "Thriller",
  "War",
  "Western"
];

export const getShowsByGenre = [
  {
    id: 180,
    url: "http://www.tvmaze.com/shows/180/firefly",
    name: "Firefly",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Adventure", "Science-Fiction"],
    status: "Ended",
    runtime: 60,
    premiered: "2002-09-20",
    officialSite: null,
    schedule: {
      time: "20:00",
      days: ["Friday"]
    },
    rating: {
      average: 9.2
    },
    weight: 92,
    network: {
      id: 4,
      name: "FOX",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York"
      }
    },
    webChannel: null,
    externals: {
      tvrage: 3548,
      thetvdb: 78874,
      imdb: "tt0303461"
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/1/2600.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/1/2600.jpg"
    },
    summary:
      "<p>Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.</p>",
    updated: 1591835730,
    _links: {
      self: {
        href: "http://api.tvmaze.com/shows/180"
      },
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/13005"
      }
    }
  },
  {
    id: 204,
    url: "http://www.tvmaze.com/shows/204/stargate-sg-1",
    name: "Stargate SG-1",
    type: "Scripted",
    language: "English",
    genres: ["Action", "Adventure", "Science-Fiction"],
    status: "Ended",
    runtime: 60,
    premiered: "1997-07-27",
    officialSite: "http://stargate.mgm.com/view/series/1/index.html",
    schedule: {
      time: "20:00",
      days: ["Friday"]
    },
    rating: {
      average: 9.2
    },
    weight: 95,
    network: {
      id: 16,
      name: "Syfy",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York"
      }
    },
    webChannel: null,
    externals: {
      tvrage: 5325,
      thetvdb: 72449,
      imdb: "tt0118480"
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/1/3027.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/1/3027.jpg"
    },
    summary:
      "<p><b>Stargate SG-1</b> is a science fiction series based on the original film <i>Stargate</i>. It involves the team SG-1 going on various adventures to different alien worlds through Stargates. Throughout the series they encounter various alien threats and allies including but not limited to the Goa'uld and the Asgard.</p>",
    updated: 1606911913,
    _links: {
      self: {
        href: "http://api.tvmaze.com/shows/204"
      },
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/13649"
      }
    }
  }
];

export const showDetails = {
  id: 204,
  url: "http://www.tvmaze.com/shows/204/stargate-sg-1",
  name: "Stargate SG-1",
  type: "Scripted",
  language: "English",
  genres: ["Action", "Adventure", "Science-Fiction"],
  status: "Ended",
  runtime: 60,
  premiered: "1997-07-27",
  officialSite: "http://stargate.mgm.com/view/series/1/index.html",
  schedule: { time: "20:00", days: ["Friday"] },
  rating: { average: 9.2 },
  weight: 95,
  network: {
    id: 16,
    name: "Syfy",
    country: { name: "United States", code: "US", timezone: "America/New_York" }
  },
  webChannel: null,
  externals: { tvrage: 5325, thetvdb: 72449, imdb: "tt0118480" },
  image: {
    medium:
      "http://static.tvmaze.com/uploads/images/medium_portrait/1/3027.jpg",
    original:
      "http://static.tvmaze.com/uploads/images/original_untouched/1/3027.jpg"
  },
  summary:
    "<p><b>Stargate SG-1</b> is a science fiction series based on the original film <i>Stargate</i>. It involves the team SG-1 going on various adventures to different alien worlds through Stargates. Throughout the series they encounter various alien threats and allies including but not limited to the Goa'uld and the Asgard.</p>",
  updated: 1606911913,
  _links: {
    self: { href: "http://api.tvmaze.com/shows/204" },
    previousepisode: { href: "http://api.tvmaze.com/episodes/13649" }
  },
  _embedded: {
    cast: [
      {
        person: {
          id: 33991,
          url: "http://www.tvmaze.com/people/33991/christopher-judge",
          name: "Christopher Judge",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York"
          },
          birthday: "1964-10-13",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/184/460742.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/184/460742.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/people/33991" } }
        },
        character: {
          id: 51550,
          url: "http://www.tvmaze.com/characters/51550/stargate-sg-1-tealc",
          name: "Teal'c",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/1/3032.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/1/3032.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/characters/51550" } }
        },
        self: false,
        voice: false
      },
      {
        person: {
          id: 2792,
          url: "http://www.tvmaze.com/people/2792/amanda-tapping",
          name: "Amanda Tapping",
          country: {
            name: "United Kingdom",
            code: "GB",
            timezone: "Europe/London"
          },
          birthday: "1965-08-28",
          deathday: null,
          gender: "Female",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/137/343618.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/137/343618.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/people/2792" } }
        },
        character: {
          id: 51549,
          url:
            "http://www.tvmaze.com/characters/51549/stargate-sg-1-samantha-carter",
          name: "Samantha Carter",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/1/3030.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/1/3030.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/characters/51549" } }
        },
        self: false,
        voice: false
      },
      {
        person: {
          id: 4107,
          url: "http://www.tvmaze.com/people/4107/michael-shanks",
          name: "Michael Shanks",
          country: { name: "Canada", code: "CA", timezone: "America/Halifax" },
          birthday: "1970-12-15",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/34/86953.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/34/86953.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/people/4107" } }
        },
        character: {
          id: 51546,
          url:
            "http://www.tvmaze.com/characters/51546/stargate-sg-1-dr-daniel-jackson",
          name: "Dr. Daniel Jackson",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/1/3029.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/1/3029.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/characters/51546" } }
        },
        self: false,
        voice: false
      },
      {
        person: {
          id: 33990,
          url: "http://www.tvmaze.com/people/33990/richard-dean-anderson",
          name: "Richard Dean Anderson",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York"
          },
          birthday: "1950-01-23",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/48/122080.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/48/122080.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/people/33990" } }
        },
        character: {
          id: 52662,
          url:
            "http://www.tvmaze.com/characters/52662/stargate-sg-1-jack-oneill",
          name: "Jack O'Neill",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/1/3028.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/1/3028.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/characters/52662" } }
        },
        self: false,
        voice: false
      },
      {
        person: {
          id: 3733,
          url: "http://www.tvmaze.com/people/3733/don-s-davis",
          name: "Don S. Davis",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York"
          },
          birthday: "1942-08-04",
          deathday: "2008-06-29",
          gender: "Male",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/3/8848.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/3/8848.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/people/3733" } }
        },
        character: {
          id: 52373,
          url:
            "http://www.tvmaze.com/characters/52373/stargate-sg-1-lt-gen-george-hammond",
          name: "Lt. Gen. George Hammond",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/1/3031.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/1/3031.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/characters/52373" } }
        },
        self: false,
        voice: false
      },
      {
        person: {
          id: 412,
          url: "http://www.tvmaze.com/people/412/ben-browder",
          name: "Ben Browder",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York"
          },
          birthday: "1962-12-11",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/142/355440.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/142/355440.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/people/412" } }
        },
        character: {
          id: 51553,
          url:
            "http://www.tvmaze.com/characters/51553/stargate-sg-1-lt-colonel-cameron-mitchell",
          name: "Lt. Colonel Cameron Mitchell",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/1/3033.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/1/3033.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/characters/51553" } }
        },
        self: false,
        voice: false
      },
      {
        person: {
          id: 27103,
          url: "http://www.tvmaze.com/people/27103/beau-bridges",
          name: "Beau Bridges",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York"
          },
          birthday: "1941-12-09",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/152/380233.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/152/380233.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/people/27103" } }
        },
        character: {
          id: 51554,
          url:
            "http://www.tvmaze.com/characters/51554/stargate-sg-1-major-general-hank-landry",
          name: "Major General Hank Landry",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/1/3035.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/1/3035.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/characters/51554" } }
        },
        self: false,
        voice: false
      },
      {
        person: {
          id: 10034,
          url: "http://www.tvmaze.com/people/10034/claudia-black",
          name: "Claudia Black",
          country: {
            name: "Australia",
            code: "AU",
            timezone: "Australia/Sydney"
          },
          birthday: "1972-10-11",
          deathday: null,
          gender: "Female",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/160/400565.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/160/400565.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/people/10034" } }
        },
        character: {
          id: 51555,
          url:
            "http://www.tvmaze.com/characters/51555/stargate-sg-1-vala-mal-doran",
          name: "Vala Mal Doran",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/1/3036.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/1/3036.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/characters/51555" } }
        },
        self: false,
        voice: false
      },
      {
        person: {
          id: 4132,
          url: "http://www.tvmaze.com/people/4132/corin-nemec",
          name: "Corin Nemec",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York"
          },
          birthday: "1971-11-05",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/3/8849.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/3/8849.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/people/4132" } }
        },
        character: {
          id: 51552,
          url:
            "http://www.tvmaze.com/characters/51552/stargate-sg-1-jonas-quinn",
          name: "Jonas Quinn",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/135/339559.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/135/339559.jpg"
          },
          _links: { self: { href: "http://api.tvmaze.com/characters/51552" } }
        },
        self: false,
        voice: false
      }
    ]
  }
};

export const searchedShows = [
  {
    id: 2,
    url: "http://www.tvmaze.com/shows/2/person-of-interest",
    name: "Person of Interest",
    type: "Scripted",
    language: "English",
    genres: ["Action", "Crime", "Science-Fiction"],
    status: "Ended",
    runtime: 60,
    premiered: "2011-09-22",
    officialSite: "http://www.cbs.com/shows/person_of_interest/",
    schedule: {
      time: "22:00",
      days: ["Tuesday"]
    },
    rating: {
      average: 8.9
    },
    weight: 95,
    network: {
      id: 2,
      name: "CBS",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York"
      }
    },
    webChannel: null,
    externals: {
      tvrage: 28376,
      thetvdb: 248742,
      imdb: "tt1839578"
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
    },
    summary:
      "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    updated: 1588773151,
    _links: {
      self: {
        href: "http://api.tvmaze.com/shows/2"
      },
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/659372"
      }
    }
  },
  {
    id: 31482,
    url: "http://www.tvmaze.com/shows/31482/good-person",
    name: "Good Person",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Romance"],
    status: "Ended",
    runtime: 65,
    premiered: "2003-08-27",
    officialSite: "http://www.imbc.com/broad/tv/drama/goodman/",
    schedule: {
      time: "21:55",
      days: ["Wednesday", "Thursday"]
    },
    rating: {
      average: null
    },
    weight: 0,
    network: {
      id: 166,
      name: "MBC",
      country: {
        name: "Korea, Republic of",
        code: "KR",
        timezone: "Asia/Seoul"
      }
    },
    webChannel: null,
    externals: {
      tvrage: null,
      thetvdb: null,
      imdb: null
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/125/314425.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/125/314425.jpg"
    },
    summary:
      "<p>20 years ago, Park Joon Pil is the son of a mafia boss and Kang Tae Pyung is the son of a police officer. At the department store, while Kang Tae Pyung's dad attempts to arrest Joon Pil's dad, both the small boys become orphans. A fellow police officer takes in Joon Pil as his own son, thinking that the little boy is Tae Pyung. Tae Pyung, however, is taken into an orphan home. Joon Pil knows he is a criminal's son. 20 years later, Joon Pil is an aspiring young police officer and Tae Pyung is a boxing bum. When Tae Pyung's best friend becomes unfairly murdered, he vows to become a police officer. Two years later, Joon Pil and Tae Pyung finally meet again. Rivals but friends at heart, these two guys learn to forgive the past and embrace the future.</p>",
    updated: 1503949270,
    _links: {
      self: {
        href: "http://api.tvmaze.com/shows/31482"
      },
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/1284038"
      }
    }
  }
];
