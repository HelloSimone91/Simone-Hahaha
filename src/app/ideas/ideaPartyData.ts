export type IdeaSheet = {
  problem: string;
  idea: string;
  outcomes: string[];
  needs: string[];
};

export type IdeaPartyItem = {
  title: string;
  summary: string;
  url: string;
  tags: string[];
  sheet?: IdeaSheet;
};

export const ideaPartyItems: IdeaPartyItem[] = [
  {
    "title": "The Very Disco D.I.S.C.O Ball",
    "summary": "A portable spatial computing hub which projects interactive interfaces into the room around you.",
    "url": "https://app.notion.com/p/30106423ccc1801d97b6c9811810c621",
    "tags": [
      "favorite",
      "product"
    ],
    "sheet": {
      "problem": "Flat screens keep us passive and trapped in 2D interfaces. We're tethered to desks, squinting at rectangles, and interacting with digital content in ways disconnected from how we naturally move through physical space. Technology should adapt to our environment, not the other way around.",
      "idea": "D.I.S.C.O. — a portable holographic spatial computing hub on a flexible rotating stand — projects interactive interfaces directly into physical space. It transforms any room into an intelligent environment where you tap, gesture, and engage with spatial holograms for work, communication, learning, and entertainment. The spatial computing hub becomes a dynamic hub, making space itself the interface.",
      "outcomes": [
        "Replace passive screen-viewing with active spatial interaction and natural physical engagement",
        "Turn any environment into an adaptive digital workspace without requiring fixed hardware or dedicated rooms",
        "Enable communication, productivity, and immersive media through tap-responsive light and embedded spatial controls"
      ],
      "needs": [
        "Technical prototype development: holographic projection system, flexible stand mechanics, spatial tracking",
        "UI/UX design for 3D spatial interfaces and gesture controls",
        "Embedded camera and sensor integration for responsive interaction",
        "Partnership exploration with AR/holographic tech companies",
        "User testing environments to refine interaction models",
        "Brand positioning and storytelling around spatial computing",
        "Funding strategy: grants, angel investors, or technology partnerships"
      ]
    }
  },
  {
    "title": "The tiny window experienced by game room employees",
    "summary": "",
    "url": "https://app.notion.com/p/2e006423ccc180c7820dda4e004b1112",
    "tags": [
      "favorite",
      "business",
      "question"
    ]
  },
  {
    "title": "dog(/pet) food bag spigot",
    "summary": "A lil spigot for dispensing food straight from those rugged dog food bags.",
    "url": "https://app.notion.com/p/25906423ccc180f1b3adc65fae9eaef5",
    "tags": [
      "favorite",
      "product"
    ]
  },
  {
    "title": "I want more for S’mores",
    "summary": "Powders and sauces used in making s’mores",
    "url": "https://app.notion.com/p/14806423ccc1808b86b0cf2b587f6fae",
    "tags": [
      "favorite",
      "product"
    ],
    "sheet": {
      "problem": "Traditional s'mores are messy and limited in flavor options. The current process with chocolate squares and graham crackers is clunky. People who enjoy layer-by-layer marshmallow roasting need more flavor options.",
      "idea": "Create a line of specialty powders and sauces specifically designed for s'mores that can be used at different stages of the marshmallow roasting process, offering new flavors and easier application than traditional ingredients.",
      "outcomes": [
        "Simplify the s'mores-making process while reducing mess",
        "Provide more flavor variety and customization options",
        "Create a better experience for layer-by-layer marshmallow roasting"
      ],
      "needs": [
        "Research and develop powder formulations that taste good both heated and unheated",
        "Test different powder combinations (cinnamon sugar, cocoa, espresso, etc.)",
        "Create complementary sauce options that don't require complex storage or application",
        "Design packaging that's camping/outdoor-friendly and mess-free"
      ]
    }
  },
  {
    "title": "Proposal to sell basic sewing supplies, repair kits, clothing craft supplies in Goodwill checkout areas, helping thrift shoppers modify purchases while creating new revenue streams @goodwill",
    "summary": "Sewing, repair, and upcycling supplies beside the checkout at Goodwill.",
    "url": "https://app.notion.com/p/14606423ccc180d3b661eb6d01e3f467",
    "tags": [
      "favorite",
      "product"
    ],
    "sheet": {
      "problem": "Thrift store shoppers often find items that need minor repairs or modifications, but may not have easy access to basic sewing supplies.",
      "idea": "Place basic sewing kits and clothing modification supplies in Goodwill's checkout/new items section alongside other convenience items like batteries and tape.",
      "outcomes": [
        "Make it convenient for shoppers to repair/modify their purchases",
        "Generate additional revenue through new product sales",
        "Reduce clothing waste by making repairs more accessible"
      ],
      "needs": [
        "Market research and data analysis to validate demand for sewing supplies among Goodwill shoppers",
        "Cost analysis and budget proposal for initial inventory investment",
        "Vendor partnerships with sewing supply manufacturers/distributors",
        "Approval from Goodwill's merchandising and operations teams",
        "Store layout modifications to accommodate new product displays",
        "Staff training on new product knowledge and inventory management",
        "Marketing materials to promote the new product line",
        "Implementation timeline and rollout strategy",
        "Inventory tracking system updates to include new SKUs",
        "Success metrics and KPIs to measure program effectiveness"
      ]
    }
  },
  {
    "title": "Membership-based resale",
    "summary": "A monthly resale membership with personal shopping, pre-sales, and RFID-tracked items.",
    "url": "https://app.notion.com/p/14606423ccc180aea55ae5a746db6152",
    "tags": [
      "favorite",
      "business"
    ],
    "sheet": {
      "problem": "Traditional resale shopping can be time-consuming and unpredictable. Customers want curated, high-quality secondhand items. There is a need for a more structured, reliable resale experience.",
      "idea": "A membership-based resale service using RFID technology and smart store capabilities to provide tiered access to secondhand clothing and accessories. Members pay monthly fees for different levels of service including personal shopping, pre-sale access, and allocated monthly items.",
      "outcomes": [
        "Make secondhand shopping more convenient and accessible",
        "Create a reliable revenue stream through subscriptions",
        "Provide a tech-forward solution to inventory management"
      ],
      "needs": [
        "RFID tagging system",
        "Smart store technology (similar to Amazon Go)",
        "Inventory management system",
        "Membership tier structure",
        "Personal shopping staff",
        "Physical retail space",
        "Quality secondhand inventory sources"
      ]
    }
  },
  {
    "title": "Accordion annual planner",
    "summary": "A full-year planner which unfolds accordion-style, with roomy daily squares and notes.",
    "url": "https://app.notion.com/p/13106423ccc1806ca8c9c4e8f69c600f",
    "tags": [
      "favorite",
      "product"
    ],
    "sheet": {
      "problem": "Many people struggle to find a planner that combines the benefits of a yearly overview with detailed daily planning. Traditional planners often lack flexibility and visual appeal.",
      "idea": "Create an accordion-style annual planner that unfolds to reveal a full year at a glance, with each month containing daily squares large enough for notes, and room at the margins for notes and pattern trackers (habits, menstrual cycles, moods, values observation log, new baby feeding log, etc).",
      "outcomes": [
        "Provide users with a unique, visually appealing planning tool that offers both big-picture annual planning and detailed daily organization in one compact, expandable format."
      ],
      "needs": [
        "Design software for creating the layout",
        "High-quality, durable paper that can withstand frequent folding",
        "Printing and binding equipment capable of producing accordion-style books",
        "Market research to refine features and pricing",
        "Prototype testing with potential users"
      ]
    }
  },
  {
    "title": "Big To Do: Size Up Your Success",
    "summary": "A to-do app where important tasks grow bigger and completed tasks get a satisfying sendoff.",
    "url": "https://app.notion.com/p/a5b74ce67017454aa362034523c58c6e",
    "tags": [
      "favorite",
      "tech"
    ]
  },
  {
    "title": "AI Bot -Authentic Introspection for renewed self appreciation + self commitment",
    "summary": "A custom GPT which guides users in self-love through introspective questions",
    "url": "https://app.notion.com/p/610a83f80bfb4bf78dddd4c3cc772c30",
    "tags": [
      "favorite",
      "tech"
    ]
  },
  {
    "title": "Our iPhone lenses should also be projectors",
    "summary": "",
    "url": "https://app.notion.com/p/35daaef4bbd940c68415796b43b7d749",
    "tags": [
      "favorite",
      "product",
      "tech"
    ]
  },
  {
    "title": "Upload your dogs so you can have the same dog forever and then your dog won’t ever have to worry about leaving you",
    "summary": "Like the way it seems we’re tryna be headed s the souls on the cloud scenario",
    "url": "https://app.notion.com/p/ad777071138042efb9118e38d9ac9e7f",
    "tags": [
      "favorite",
      "product",
      "tech"
    ]
  },
  {
    "title": "ValYOU GPT",
    "summary": "FINISHED PROMPT IN ACTION Check this out on Poe: https://poe.com/val4you",
    "url": "https://app.notion.com/p/1727695022ae4d619690459499904124",
    "tags": [
      "favorite",
      "tech"
    ]
  },
  {
    "title": "Neuralink Self awareness monitor",
    "summary": "Like a heart-rate monitor for how conscious, present, and here you actually are.",
    "url": "https://app.notion.com/p/1ada95bbf5814c6bb4ded65ed1a30d49",
    "tags": [
      "favorite",
      "product",
      "tech",
      "question"
    ]
  },
  {
    "title": "Prompt consultants!!",
    "summary": "Spend half a day with a team, learn their patterns, and help them use AI more usefully.",
    "url": "https://app.notion.com/p/6d97874c774d4b65a87f497395ed23f2",
    "tags": [
      "favorite",
      "business"
    ]
  },
  {
    "title": "A camera you can put over your door’s eye hole thing",
    "summary": "A Blink-style camera for apartment peepholes, so you can see the hall without squinting.",
    "url": "https://app.notion.com/p/a271e1243c8a4a9dbace7e81d270bf8c",
    "tags": [
      "favorite",
      "product"
    ]
  },
  {
    "title": "Newsletter AI",
    "summary": "Bespoke newsletter choosing the coolest things from all of your newsletter subscriptions",
    "url": "https://app.notion.com/p/b9c5666cef044c5baa366333c14df67a",
    "tags": [
      "favorite",
      "tech"
    ]
  },
  {
    "title": "Long Distance Air Drop",
    "summary": "potentially holographic long distance airdrop via FM radio waves ? ?!??!?! LOL OS",
    "url": "https://app.notion.com/p/3e32b7122ec843fe84678269c8e9a377",
    "tags": [
      "favorite",
      "tech"
    ]
  },
  {
    "title": "Standup/improv Comedy tour guide around the city",
    "summary": "Stand up comedy",
    "url": "https://app.notion.com/p/5f01ca2719604586b0ed30a9e9c5dc14",
    "tags": [
      "favorite",
      "business"
    ]
  },
  {
    "title": "LOL OS",
    "summary": "OPERATING SYSTEM FOR RADIO INTERNET",
    "url": "https://app.notion.com/p/0cf89652d81c41ccb76de6506ccc6b8a",
    "tags": [
      "favorite",
      "tech"
    ]
  },
  {
    "title": "Free stuff Chat GPT nudge",
    "summary": "Predict what someone is about to throw away and connect it with someone who needs it.",
    "url": "https://app.notion.com/p/a01c4ce61e8e4b77a2198124f9bbff03",
    "tags": [
      "favorite",
      "tech"
    ]
  },
  {
    "title": "The Frugal Noodle",
    "summary": "A college-town noodle market, restaurant, and cooking-class space for every budget and occasion.",
    "url": "https://app.notion.com/p/e2514b72303b41de9a10277f231efbde",
    "tags": [
      "favorite",
      "business"
    ]
  },
  {
    "title": "Sim Dog Symposium",
    "summary": "A recurring conference where competitors collaborate for the betterment of the future.",
    "url": "https://app.notion.com/p/c7f5d21b0fb547c2bf21593fd329799e",
    "tags": [
      "favorite",
      "product"
    ]
  },
  {
    "title": "Dish towel ✰healthy coping skills and healthy snack breaks ✰",
    "summary": "A dish towel with a coping skill on one side and an easy comfort-food recipe on the other.",
    "url": "https://app.notion.com/p/2c5c7953e32344a28fb524d2930db2ee",
    "tags": [
      "favorite",
      "product"
    ]
  },
  {
    "title": "Life Socks! ✰ “No matter how much your life sucks, at least you’ve got Life Socks!” ✰",
    "summary": "Keep one sock and we’ll replace the other for life. Who cares! Give the people socks!",
    "url": "https://app.notion.com/p/084e94a25ef64ad8bcd6bb3f2ba3c8eb",
    "tags": [
      "favorite",
      "product"
    ]
  },
  {
    "title": "🎶para para para-digms 🎶",
    "summary": "Coldplay’s “Paradise,” except it’s about paradigms and mental models.",
    "url": "https://app.notion.com/p/e98d50ac265440a5bf473e33befd51e5",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶 Where is my Juul🎶",
    "summary": "🎶 Where is my mind, by the pixies but with the word Juul instead",
    "url": "https://app.notion.com/p/677174faf43848e6899e465ab41327dd",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶 Autistic, I’m autistic / Pull up to the scene with my silly missin’ 🎶",
    "summary": "Parody of 2chains’ “I’m different”",
    "url": "https://app.notion.com/p/2d308a02dabf418d9ab56dff1248c21a",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶 You don’t look a day over good views and Guccis 🎶",
    "summary": "Parody of “You Don’t Look a Day Over Fast Cars and Freedom” (Rascal Flats) but c o o l",
    "url": "https://app.notion.com/p/644084db74ea4c0da8be8ef85cebf036",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶ChatGPT James Blunt parody 🎶",
    "summary": "🎶My Life is Cosmic🎶 parody of “You’re Beautiful” By James Blunt",
    "url": "https://app.notion.com/p/f3a74880dd804302aa310b5b1ec746c5",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶Oh where oh where could my Juu-uuul be, the lord took it away from me-ee🎶",
    "summary": "Oh where oh where could my shoe-oes be, the dogs took them away from me-ee Last Kiss, Pearl Jam",
    "url": "https://app.notion.com/p/19210c13d94f4d87b4562c3b4b815cdb",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶“Everything is awesome, and everything sucks, most of the time” 🎶",
    "summary": "Everything is Awesome Parody",
    "url": "https://app.notion.com/p/a81493af20d94a09bb98791b8c42b908",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶 “I’m Not gonna call him, NO I’M NOT GONNA CALL HIM” 🎶",
    "summary": "Parody about ex-boyfriends based on “we’re not gona take it”",
    "url": "https://app.notion.com/p/4123866712f24c6783f8f8e6ffb48633",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶This is how we human 🎶 parody of this is how we do it",
    "summary": "Potential theme song for Howdy Human Social Club? Lol",
    "url": "https://app.notion.com/p/03564655281644849405d23025afa8ea",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶 okay ladies now let’s gather our research🎶 parody of “formation” Beyoncé",
    "summary": "",
    "url": "https://app.notion.com/p/0f85ed12389e4097b72710cfe7a6915e",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶 If you love yourself clap your hands🎶 parody of the happy song",
    "summary": "If you love your self clap your hands/ if you love your self clap your hands / If you love your self your attitude will show it/ if you love your self clap your hands",
    "url": "https://app.notion.com/p/06ed55d8e9954b6ea3f2224a684b25b0",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶White houses / weird choices parody 🎶",
    "summary": "",
    "url": "https://app.notion.com/p/9a0123549c694f07b182e063e914f6ca",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶If I were a tech bro, ~~ I’d have all the money in the world, if i were a teeee-eeech broooo-oooo-ooooo-oooo 🎶",
    "summary": "",
    "url": "https://app.notion.com/p/12206423ccc180be894fe9f71bda32db",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶 Listen to your heart parody of listen to your heart",
    "summary": "Basically that song listen to your heart but it’s about physical wellness",
    "url": "https://app.notion.com/p/16706423ccc1802d9c02f69498de6281",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶 I’m in love with a drummer 🥁 Parody of T-Pain’s I’m in love with a stripper 🎶",
    "summary": "lyrics complete lol",
    "url": "https://app.notion.com/p/19406423ccc1802db5e4ca396e06ecb7",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎵 🎶Fresh prince of bel air theme song to the tune of last kiss by Pearl Jam 🤷‍♀️🎵 🎶",
    "summary": "",
    "url": "https://app.notion.com/p/19d06423ccc18097bcb2e7a019cf18a8",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶 I shot the sheriff but instead it's \"I shot the tariff\" 🎶",
    "summary": "Music Parody of I shot the sheriff but instead it's \"I shot the tariff\"",
    "url": "https://app.notion.com/p/20406423ccc180d4b2dec60ae8827e11",
    "tags": [
      "song"
    ]
  },
  {
    "title": "🎶If you’re true and you know it, trust yourself 🎶",
    "summary": "A parody about trusting whatever bit of true you can see in yourself, then calibrating.",
    "url": "https://app.notion.com/p/3de06423ccc180c199a4c4795d68b504",
    "tags": [
      "song"
    ]
  },
  {
    "title": "Dark mode is too sad light mode is too intrusive CAN I GET A MEDIUM MODE PLEASE hellloOoOoOo",
    "summary": "",
    "url": "https://app.notion.com/p/3e466c3011c24327b7534c0a018f0fbc",
    "tags": [
      "question"
    ]
  },
  {
    "title": "god is the wave we are the moon",
    "summary": "just became stoned had this sentence suddenly only in my head writing it down idk what it is",
    "url": "https://app.notion.com/p/56442302e5414b61b58bda2edb88a3fb",
    "tags": [
      "question"
    ]
  },
  {
    "title": "hemisphere synchronization!",
    "summary": "",
    "url": "https://app.notion.com/p/1f406423ccc18018bc38cae7cdd130c2",
    "tags": [
      "question"
    ]
  },
  {
    "title": "Intuition development",
    "summary": "",
    "url": "https://app.notion.com/p/62633554f85a4f309f862b7072d029e1",
    "tags": [
      "question"
    ]
  },
  {
    "title": "Life is a romantic comedy musical",
    "summary": "Is it ? Could it be ? LET’S FIND OUT! NEVER GIVE UP!",
    "url": "https://app.notion.com/p/3ce5f987e2604654a4231cc06a2fb7ab",
    "tags": [
      "question"
    ]
  },
  {
    "title": "Meander into your ordinary vs step into your greatness",
    "summary": "Step by step, day by day /// dare to be dull , etc etc",
    "url": "https://app.notion.com/p/8830b83bb2864a11b0f22e88c68fc15b",
    "tags": [
      "question"
    ]
  },
  {
    "title": "Pause it to posit",
    "summary": "Pause before an impulsive choice, then posit the situation to your AI pal.",
    "url": "https://app.notion.com/p/122853a843c74e049280a1505951db1f",
    "tags": [
      "question"
    ]
  },
  {
    "title": "Severance for thoughtful quitters",
    "summary": "it would be cool if companies offered some package whereby, if someone wanted to quit their job, there would still be severance awarded",
    "url": "https://app.notion.com/p/6b954007aa074861beeb784721c7ace0",
    "tags": [
      "question"
    ]
  },
  {
    "title": "Slow down, you don’t have much time",
    "summary": "A sentence which arrived while I was thinking about giving space to my time.",
    "url": "https://app.notion.com/p/dc5da73278b74aa3b26d9c850819252d",
    "tags": [
      "question"
    ]
  },
  {
    "title": "The future of motorcycle safety and riding",
    "summary": "Maybe motorcycles become the last bastion of non-autonomous transportation.",
    "url": "https://app.notion.com/p/25906423ccc180a9bf91d32aba6aec43",
    "tags": [
      "question"
    ]
  },
  {
    "title": "What if the AI Chat hallucinations are really just windows into parallel universes",
    "summary": "oh my god …. lots of universes, only one AI…. and then it’s all… a circle… of time… and…",
    "url": "https://app.notion.com/p/07c00087a8344b799878028863b7327b",
    "tags": [
      "question"
    ]
  },
  {
    "title": "What if the wheel had never been invented?",
    "summary": "",
    "url": "https://app.notion.com/p/89e446bf05544aed8233667770cae9df",
    "tags": [
      "question"
    ]
  }
];
