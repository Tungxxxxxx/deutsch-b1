// ===== GRAMMAR DATA =====
const GRAMMAR_DATA = [
  {
    id: "sein", title: 'Động từ "sein" (to be)',
    subtitle: "Động từ bất quy tắc quan trọng nhất — dùng để nói \"là/thì\"",
    table: {
      headers: ["Ngôi", "Đại từ", "sein", "Ví dụ"],
      rows: [
        ["Ngôi 1 số ít", "ich", "bin", "Ich bin Student."],
        ["Ngôi 2 số ít", "du", "bist", "Du bist nett."],
        ["Ngôi 3 số ít", "er/sie/es", "ist", "Er ist Lehrer."],
        ["Ngôi 1 số nhiều", "wir", "sind", "Wir sind Freunde."],
        ["Ngôi 2 số nhiều", "ihr", "seid", "Ihr seid hier."],
        ["Ngôi 3 / trang trọng", "sie/Sie", "sind", "Sie sind Ärzte."]
      ]
    },
    rule: '"sein" là động từ bất quy tắc — phải học thuộc lòng từng dạng. Không có quy tắc chia.',
    examples: [
      { de: "Ich bin aus Vietnam.", vi: "Tôi đến từ Việt Nam." },
      { de: "Sind Sie Frau Müller?", vi: "Bà có phải là bà Müller không?" }
    ],
    exercises: [
      { prompt: "Ich ___ Student.", answer: "bin" },
      { prompt: "Du ___ sehr nett.", answer: "bist" },
      { prompt: "Er ___ Ingenieur.", answer: "ist" },
      { prompt: "Wir ___ aus Vietnam.", answer: "sind" },
      { prompt: "Ihr ___ Studenten.", answer: "seid" },
      { prompt: "Sie ___ Lehrer. (họ)", answer: "sind" }
    ]
  },
  {
    id: "verb-regular", title: "Chia động từ thường (Regelmäßige Verben)",
    subtitle: "Quy tắc chung để chia động từ ở thì hiện tại (Präsens)",
    table: {
      headers: ["Ngôi", "Đuôi", "lernen", "kommen", "wohnen"],
      rows: [
        ["ich", "-e", "lerne", "komme", "wohne"],
        ["du", "-st", "lernst", "kommst", "wohnst"],
        ["er/sie/es", "-t", "lernt", "kommt", "wohnt"],
        ["wir", "-en", "lernen", "kommen", "wohnen"],
        ["ihr", "-t", "lernt", "kommt", "wohnt"],
        ["sie/Sie", "-en", "lernen", "kommen", "wohnen"]
      ]
    },
    rule: "Gốc (Stamm) = Infinitiv bỏ \"-en\". Sau đó thêm đuôi: -e, -st, -t, -en, -t, -en. Nếu gốc kết thúc bằng -t, -d, -chn, -ffn, -gn → thêm -e- trước đuôi.",
    examples: [
      { de: "Ich lerne Deutsch.", vi: "Tôi học tiếng Đức." },
      { de: "Woher kommst du?", vi: "Bạn đến từ đâu?" }
    ],
    exercises: [
      { prompt: "Ich ___ in Hanoi. (wohnen)", answer: "wohne" },
      { prompt: "Du ___ Deutsch. (lernen)", answer: "lernst" },
      { prompt: "Er ___ aus Japan. (kommen)", answer: "kommt" },
      { prompt: "Wir ___ Fußball. (spielen)", answer: "spielen" },
      { prompt: "Sie ___ in Berlin. (arbeiten)", answer: "arbeitet" },
      { prompt: "Ihr ___ Musik. (hören)", answer: "hört" }
    ]
  },
  {
    id: "word-order", title: "Trật tự câu & W-Fragen",
    subtitle: "Quy tắc V2 (Verb Second) — trái tim của câu tiếng Đức",
    table: {
      headers: ["W-Wort", "Verb", "Subjekt", "Phần còn lại", "Nghĩa"],
      rows: [
        ["Wie", "heißen", "Sie", "?", "Ông/bà tên gì?"],
        ["Woher", "kommst", "du", "?", "Bạn đến từ đâu?"],
        ["Wo", "wohnst", "du", "?", "Bạn sống ở đâu?"],
        ["Was", "machst", "du", "?", "Bạn làm gì?"],
        ["Wann", "kommst", "du", "?", "Bạn đến khi nào?"]
      ]
    },
    rule: "Trong câu trần thuật, ĐỘNG TỪ LUÔN Ở VỊ TRÍ THỨ 2. Trong câu hỏi Ja/Nein: Verb ở vị trí 1 (đảo ngữ).",
    examples: [
      { de: "Heute lerne ich Deutsch.", vi: "Hôm nay tôi học tiếng Đức." },
      { de: "Kommst du aus Vietnam?", vi: "Bạn đến từ Việt Nam à?" }
    ],
    exercises: [
      { prompt: "Wo ___ du? (wohnen)", answer: "wohnst" },
      { prompt: "Wie ___ Sie? (heißen)", answer: "heißen" },
      { prompt: "___ du aus Vietnam? (kommen - Ja/Nein)", answer: "Kommst" },
      { prompt: "Was ___ du? (machen)", answer: "machst" },
      { prompt: "___ er Ingenieur? (sein - Ja/Nein)", answer: "Ist" }
    ]
  },
  {
    id: "articles", title: "Mạo từ: der, die, das",
    subtitle: "Mỗi danh từ tiếng Đức có giống (Genus) — đây là thử thách lớn nhất!",
    table: {
      headers: ["Giống", "Mạo từ", "Ví dụ", "Mẹo nhớ"],
      rows: [
        ["Maskulin (nam)", "der", "der Mann, der Tisch, der Computer", "-er, -ling, -ismus, -ig"],
        ["Feminin (nữ)", "die", "die Frau, die Lampe, die Tasche", "-ung, -heit, -keit, -schaft, -tion, -ie"],
        ["Neutrum (trung)", "das", "das Kind, das Buch, das Handy", "-chen, -lein, -ment, -um, -nis"],
        ["Plural (số nhiều)", "die", "die Männer, die Bücher", "Tất cả số nhiều = die"]
      ]
    },
    rule: "LUÔN học từ kèm mạo từ! Không học \"Tisch\" mà học \"der Tisch\". Giống không logic — das Mädchen (cô gái) lại là trung tính vì có đuôi -chen!",
    examples: [
      { de: "Der Tisch ist groß.", vi: "Cái bàn to." },
      { de: "Die Lampe ist kaputt.", vi: "Cái đèn hỏng." }
    ],
    exercises: [
      { prompt: "___ Tisch", answer: "der" },
      { prompt: "___ Lampe", answer: "die" },
      { prompt: "___ Buch", answer: "das" },
      { prompt: "___ Stuhl", answer: "der" },
      { prompt: "___ Handy", answer: "das" },
      { prompt: "___ Uhr", answer: "die" },
      { prompt: "___ Fenster", answer: "das" },
      { prompt: "___ Schlüssel", answer: "der" }
    ]
  }
];