// ===== ALPHABET DATA =====
const ALPHABET_DATA = {
  letters: [
    { letter: "A", name: "Ah", vn: "A (như tiếng Việt)", example: "Apfel", exampleVi: "táo" },
    { letter: "B", name: "Beh", vn: "Bê", example: "Buch", exampleVi: "sách" },
    { letter: "C", name: "Tseh", vn: "Xê", example: "Computer", exampleVi: "máy tính" },
    { letter: "D", name: "Deh", vn: "Đê", example: "Danke", exampleVi: "cảm ơn" },
    { letter: "E", name: "Eh", vn: "Ê (như ê Việt)", example: "Essen", exampleVi: "ăn" },
    { letter: "F", name: "Eff", vn: "Ép-phờ", example: "Fenster", exampleVi: "cửa sổ" },
    { letter: "G", name: "Geh", vn: "Ghê", example: "gut", exampleVi: "tốt" },
    { letter: "H", name: "Hah", vn: "Ha", example: "Hallo", exampleVi: "xin chào" },
    { letter: "I", name: "Ih", vn: "I (dài)", example: "ich", exampleVi: "tôi" },
    { letter: "J", name: "Jott", vn: "Yốt", example: "Japan", exampleVi: "Nhật Bản" },
    { letter: "K", name: "Kah", vn: "Ca", example: "Kaffee", exampleVi: "cà phê" },
    { letter: "L", name: "Ell", vn: "En-lờ", example: "Lampe", exampleVi: "đèn" },
    { letter: "M", name: "Emm", vn: "Em-mờ", example: "Morgen", exampleVi: "buổi sáng" },
    { letter: "N", name: "Enn", vn: "En-nờ", example: "Name", exampleVi: "tên" },
    { letter: "O", name: "Oh", vn: "O (như tiếng Việt)", example: "Oma", exampleVi: "bà" },
    { letter: "P", name: "Peh", vn: "Pê", example: "Papa", exampleVi: "bố" },
    { letter: "Q", name: "Kuh", vn: "Cu", example: "Quelle", exampleVi: "nguồn" },
    { letter: "R", name: "Err", vn: "E-rờ (ngậm họng)", example: "rot", exampleVi: "đỏ" },
    { letter: "S", name: "Ess", vn: "Ét-xờ", example: "Sonne", exampleVi: "mặt trời" },
    { letter: "T", name: "Teh", vn: "Tê", example: "Tisch", exampleVi: "bàn" },
    { letter: "U", name: "Uh", vn: "U (như tiếng Việt)", example: "Uhr", exampleVi: "đồng hồ" },
    { letter: "V", name: "Fau", vn: "Phao", example: "Vater", exampleVi: "bố" },
    { letter: "W", name: "Weh", vn: "Vê", example: "Wasser", exampleVi: "nước" },
    { letter: "X", name: "Iks", vn: "Ích-xờ", example: "Taxi", exampleVi: "taxi" },
    { letter: "Y", name: "Ypsilon", vn: "Uyp-xi-lon", example: "Yoga", exampleVi: "yoga" },
    { letter: "Z", name: "Tsett", vn: "Xét (đọc ts)", example: "zehn", exampleVi: "mười" }
  ],
  special: [
    { letter: "Ä", name: "Äh", vn: "E (mở miệng rộng hơn ê)", example: "Äpfel", exampleVi: "táo (số nhiều)", tip: "Mở miệng rộng như nói 'e' nhưng hơi nghiêng về 'a'" },
    { letter: "Ö", name: "Öh", vn: "⚠️ Tròn môi + nói 'ê'", example: "schön", exampleVi: "đẹp", tip: "Tiếng Việt KHÔNG có âm này! Chu môi tròn (như 'ô') rồi cố nói 'ê'" },
    { letter: "Ü", name: "Üh", vn: "⚠️ Tròn môi + nói 'i'", example: "über", exampleVi: "trên/qua", tip: "Tiếng Việt KHÔNG có âm này! Chu môi tròn (như 'u') rồi cố nói 'i'" },
    { letter: "ß", name: "Eszett", vn: "Ét-xét (= ss)", example: "Straße", exampleVi: "đường phố", tip: "Đọc giống hệt 'ss'. Dùng sau nguyên âm dài hoặc nguyên âm đôi" }
  ],
  rules: [
    { combo: "ei/ey/ai/ay", sound: "AI", desc: "Giống âm 'ai' trong tiếng Việt", examples: ["Ei", "Meyer", "Mai", "Bayern", "Arbeit"] },
    { combo: "ie", sound: "I dài", desc: "Kéo dài âm 'i'", examples: ["die", "Liebe", "Bier", "spielen"] },
    { combo: "au", sound: "AO", desc: "Giống âm 'ao' trong tiếng Việt", examples: ["Haus", "Frau", "blau", "Baum"] },
    { combo: "eu/äu", sound: "OI", desc: "Giống âm 'oi' trong tiếng Việt", examples: ["neu", "Freund", "Häuser", "Bäume"] },
    { combo: "ch (sau a/o/u)", sound: "Kh (ach-Laut)", desc: "Khè trong họng", examples: ["acht", "Buch", "noch", "Kuchen"] },
    { combo: "ch (sau e/i/ä/ö/ü)", sound: "X nhẹ (ich-Laut)", desc: "Hít nhẹ trong miệng", examples: ["ich", "Milch", "möchten", "Bücher"] },
    { combo: "sch", sound: "Sh", desc: "Như 'sh' tiếng Anh", examples: ["Schule", "schön", "Tisch"] },
    { combo: "st/sp đầu từ", sound: "Sht/Shp", desc: "St đầu từ đọc 'sht', sp đầu từ đọc 'shp'", examples: ["Straße", "Stein", "sprechen", "Sport"] },
    { combo: "tsch", sound: "Ch (tiếng Việt)", desc: "Như 'ch' trong 'cha, chơi'", examples: ["Deutsch", "Tschüss", "Tschechien"] },
    { combo: "tion", sound: "Tsión", desc: "Đuôi -tion đọc 'tsi-ôn'", examples: ["Nation", "Information", "Station"] },
    { combo: "ng cuối", sound: "ng nuốt g", desc: "Đọc 'ng' nhưng không phát âm 'g' rõ", examples: ["lang", "Wohnung", "Übung"] }
  ]
};