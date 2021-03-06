/* @flow */

type Book = {
  id: number,
  title: string,
  url: string,
  volume: number,
};

type GrammarExample = {
  en: string,
  zh_TW: string,
};

type GrammarEntry = {
  bookId: number,
  examples: Array<GrammarExample>,
  grammar: GrammarExample,
  lesson: number,
  page: number,
};

export const Books: Array<Book> = [
  {
    id: 2,
    title: 'Practical Audio-Visual Chinese 3rd Edition',
    url: 'http://www.ccbc.com.tw/pro_detail.php?book_sn=2010',
    volume: 2,
  },
  {
    id: 3,
    title: 'Practical Audio-Visual Chinese 3rd Edition',
    url: 'http://www.ccbc.com.tw/pro_detail.php?book_sn=2011',
    volume: 3,
  },
];

// Chinese ellipsis: ⋯⋯
// English ellipsis: …
export const Grammars: Array<GrammarEntry> = [
  {
    bookId: 3,
    examples: [
      {
        en: "It looks as if it's not too bad…",
        zh_TW: '看起來還不錯，⋯⋯',
      },
    ],
    grammar: {
      en: 'V as if, (looks as if, sounds as if, etc.)',
      zh_TW: '(topic)V起來⋯⋯',
    },
    lesson: 1,
    page: 30,
  },
  {
    bookId: 3,
    examples: [
      {
        en: "It looks pretty good; however, it's a little old.",
        zh_TW: '看起來海不錯，就是舊了一點。',
      },
    ],
    grammar: {
      en: 'It looks…; (one thing) however…',
      zh_TW: '(topic)看起來⋯⋯，就是⋯⋯。',
    },
    lesson: 1,
    page: 31,
  },
  {
    bookId: 3,
    examples: [
      {
        en:
          "It doesn't matter that it's a little old. You clean it yourself, and then it'll be fine.",
        zh_TW: '舊一點沒關係，你自己弄乾淨就好了。',
      },
    ],
    grammar: {
      en: "It doesn't matter…, … then it'll be fine.",
      zh_TW: '⋯⋯沒關係，⋯⋯就好了。',
    },
    lesson: 1,
    page: 32,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'He is a sophomore; he will invariably know a little more (than you).',
        zh_TW: '他是二年級，知道的總是多一點。',
      },
      {
        en: 'We parents never stop worrying, …',
        zh_TW: '我們做父母的總是不放心，⋯⋯',
      },
    ],
    grammar: {
      en: 'always/invariably',
      zh_TW: '總是',
    },
    lesson: 1,
    page: 33,
  },
  {
    bookId: 3,
    examples: [
      {
        en:
          'I think we should unpack the trunk first. (Though not explicitly stated, the option here is whether to continue debating or unpack the trunk first.)',
        zh_TW: '還是先把箱子裡的東西拿出來吧！',
      },
    ],
    grammar: {
      en: "(after considering the options) it's best to",
      zh_TW: '還是⋯⋯把！',
    },
    lesson: 1,
    page: 34,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'Okay, okay, then just do it yourself.',
        zh_TW: '好，好，你就自己來吧！',
      },
    ],
    grammar: {
      en: 'to do',
      zh_TW: '來',
    },
    lesson: 1,
    page: 36,
  },
  {
    bookId: 3,
    examples: [
      {
        en: "… before long, you'll probably be missing them.",
        zh_TW: '⋯⋯大概過不了幾天，你就會想他們了。',
      },
    ],
    grammar: {
      en: 'before a few M (N) occurs, (S) will…',
      zh_TW: '(S) V 不了幾 M(N)，(S) 就⋯⋯',
    },
    lesson: 1,
    page: 37,
  },
  {
    bookId: 3,
    examples: [
      {
        en:
          'I once saw an article in National Geographic Magazine… . After I saw it I started to be interested in Confucius and Chinese culture.',
        zh_TW: '我幾年前在國家地理雜誌裡看到一篇文章⋯⋯，看了以後，就開始對孔子跟中華文化有興趣了。',
      },
    ],
    grammar: {
      en: 'S is interested in…',
      zh_TW: 'S 對⋯⋯有興趣',
    },
    lesson: 1,
    page: 39,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'As you say that, I feel even hungrier.',
        zh_TW: '說得我更餓了。',
      },
      {
        en: 'One will certainly become too fat to get on the plane.',
        zh_TW: '一定會胖得上不了飛機。',
      },
    ],
    grammar: {
      en: 'V/SV to the point that N/PN…',
      zh_TW: 'V/SV 得 N/PN⋯⋯',
    },
    lesson: 2,
    page: 60,
  },
  {
    bookId: 3,
    examples: [
      {
        en: "As far as I'm concerned, every dish tastes about the same.",
        zh_TW: '對我來說，每個菜吃起來都差不多。',
      },
    ],
    grammar: {
      en: 'As far as NP is concerned',
      zh_TW: '對 NP 來說⋯⋯',
    },
    lesson: 2,
    page: 63,
  },
  {
    bookId: 3,
    examples: [
      {
        en:
          "After repeatedly eating the school cafeteria's mass-produced food, one still just finds those same few dishes.",
        zh_TW: '學校餐廳的大鍋菜，吃來吃去就那幾樣。',
      },
    ],
    grammar: {
      en: '',
      zh_TW: 'V 來 V 去',
    },
    lesson: 2,
    page: 64,
  },
  {
    bookId: 3,
    examples: [
      {
        en:
          "Weili: After repeatedly eating the school cafeteria's mass-produced food, one still finds the same few dishes. It's so boring.\n\nMeizhen: Indeed! So, sometimes we need to try different flavors.",
        zh_TW:
          '偉立：學校餐廳的大鍋菜，吃來吃去就那幾樣。真膩！\n\n美真：就是嘛！所以我們有時候得出來換換口味。',
      },
    ],
    grammar: {
      en: "That's right! Indeed!",
      zh_TW: '就是嘛！',
    },
    lesson: 2,
    page: 65,
  },
  {
    bookId: 3,
    examples: [
      {
        en: "In Taiwan, whatever you'd want to eat is readily available.",
        zh_TW: '在台灣，要吃什麼就有什麼。',
      },
    ],
    grammar: {
      en: '',
      zh_TW: '⋯⋯QW⋯⋯就⋯⋯QW⋯⋯',
    },
    lesson: 2,
    page: 68,
  },
  // TODO: Subgrammar p.69
  {
    bookId: 3,
    examples: [
      {
        en: 'Even in the middle of the night you can find a place to eat.',
        zh_TW: '連半夜都找得到地方吃。',
      },
    ],
    grammar: {
      en: 'even…',
      zh_TW: '連⋯⋯都/也⋯⋯',
    },
    lesson: 2,
    page: 70,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'Whatever you can think of to eat is available.',
        zh_TW: '只要你想到出來，就吃得到。',
      },
    ],
    grammar: {
      en: 'As long as… (then)…',
      zh_TW: '只要⋯⋯，就⋯⋯',
    },
    lesson: 2,
    page: 73,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'Hey, look! What is it that they are eating?',
        zh_TW: '欸，你看，她們吃的是什麼？',
      },
    ],
    grammar: {
      en: 'The use of interjection 欸',
      zh_TW: '嘆詞「欸」的用法',
    },
    lesson: 2,
    page: 74,
  },
  {
    bookId: 3,
    examples: [
      {
        en:
          'I have a friend from France that believes only by coming to Taiwan or going to China can one be proficient in Chinese.',
        zh_TW: '我有個法國朋友覺得他們那裡沒有說中文的環境，得來台灣或去中國大陸才能吧中文學好。',
      },
    ],
    grammar: {
      en: 'only if',
      zh_TW: '才',
    },
    lesson: 3,
    page: 95,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'I wonder if we have an exchange program with the European schools here.',
        zh_TW: '不知道我們跟歐洲那邊的學校有沒有交換計畫？',
      },
      {
        en: 'I wonder how the prices in Tainan are.',
        zh_TW: '不知道台南的物價怎麼樣？',
      },
    ],
    grammar: {
      en: 'I wonder…',
      zh_TW: '不知道⋯⋯',
    },
    lesson: 3,
    page: 97,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'If it is possible, then he will come next year.',
        zh_TW: '要是可能的話，明年就來。',
      },
      {
        en: 'If you want to apply, you can download the application form yourself.',
        zh_TW: '要申請的話，就自己下載申請表。',
      },
      {
        en: 'If you need it, you are welcome to come over and get it anytime.',
        zh_TW: '你需要的話，隨時歡迎你來拿。',
      },
      {
        en: 'If the landlord is willing, then the rent can be made a little cheaper.',
        zh_TW: '要是房東願意的話，房租可以少算一點。',
      },
    ],
    grammar: {
      en: 'if…',
      zh_TW: '（要是）⋯⋯的話',
    },
    lesson: 3,
    page: 99,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'In order to explain this, we need to begin by talking about Sun Yat-sen.',
        zh_TW: '這就要從孫中山先生說起來。',
      },
      {
        en:
          'From this time onward, because Taiwan and Mainland China as each have their own system, they had different development.',
        zh_TW: '從這個時候起，台灣和中國大陸因為各有各的制度，就有了不同的發展。',
      },
    ],
    grammar: {
      en: 'to start from…',
      zh_TW: '從⋯⋯起',
    },
    lesson: 11,
    page: 327,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'In order to explain this, we need to begin by talking about Sun Yat-Sen.',
        zh_TW: '這就要從孫中山先生說起來。',
      },
    ],
    grammar: {
      en: 'to explain this one must begin by talking about…',
      zh_TW: '這就要從⋯⋯說起來',
    },
    lesson: 11,
    page: 328,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'Due to the length of the war, society never had a chance to stabilize, …',
        zh_TW: '就因為長時間打仗的關係，社會一直沒辦法安定，⋯⋯',
      },
    ],
    grammar: {
      en: 'Due to…',
      zh_TW: '因為⋯⋯的關係',
    },
    lesson: 11,
    page: 329,
  },
  {
    bookId: 3,
    examples: [
      {
        en:
          'During this time, the power of the National Government was greatly weakened. Furthermore, the Communist Party became increasingly powerful; thus, they controlled most of Mainland China…',
        zh_TW:
          '國民政府的力量這時候已經弱了很多，再加上共產黨的勢力越來越大，控制了大陸大部分的地方⋯⋯',
      },
    ],
    grammar: {
      en: 'furthermore; additionally',
      zh_TW: '再加上',
    },
    lesson: 11,
    page: 330,
  },
  {
    bookId: 3,
    examples: [
      {
        en: 'Each has its own system.',
        zh_TW: '各有各的制度。',
      },
    ],
    grammar: {
      en: 'each has its own…',
      zh_TW: '各有各的 N',
    },
    lesson: 11,
    page: 331,
  },
];
