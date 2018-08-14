/* @flow */

type GrammarExample = {
  en: string,
  zh_TW: string,
};

type GrammarEntry = {
  book: number,
  examples: Array<GrammarExample>,
  grammar: GrammarExample,
  lesson: number,
};

// Chinese ellipsis: ⋯⋯
// English ellipsis: …
const Grammars: Array<GrammarEntry> = [
  {
    book: 3,
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
  },
  {
    book: 3,
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
  },
  {
    book: 3,
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
  },
  {
    book: 3,
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
  },
  {
    book: 3,
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
  },
  {
    book: 3,
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
  },
  {
    book: 3,
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
  },
  {
    book: 3,
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
  },
  {
    book: 3,
    examples: [
      {
        en: 'As you say that, I feel even hungrier.',
        zh_TW: '說的我更餓了。',
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
  },
  {
    book: 3,
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
  },
  {
    book: 3,
    examples: [
      {
        en:
          "After repeadtedly eating the school cafeteria's mass-produced food, one still just finds those same few dishes.",
        zh_TW: '學校餐廳的大鍋菜，吃來吃去就那幾樣。',
      },
    ],
    grammar: {
      en: '',
      zh_TW: 'V 來 V 去',
    },
    lesson: 2,
  },
  {
    book: 3,
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
  },
  {
    book: 3,
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
    book: 3,
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
    book: 3,
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
];

export default Grammars;
