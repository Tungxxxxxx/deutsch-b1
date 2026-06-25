// ===== DAILY LESSON PLANS =====
const DAILY_PLANS = [
  {
    day: 1, week: 1,
    title: "Ngày 1 — Tuần 1",
    subtitle: "Bảng chữ cái, phát âm, chào hỏi cơ bản",
    totalTime: "~2.5 giờ", newWords: "16 từ mới",
    steps: [
      { id: "d1s1", title: "Học phát âm bảng chữ cái", desc: "Nghe & lặp lại A–Z, đặc biệt: ä, ö, ü, ß, ch, sch, ei, eu, ie", time: "20 phút", type: "lesson", link: "alphabet.html" },
      { id: "d1s2", title: "Từ vựng: Chào hỏi & Giới thiệu", desc: "Học 16 từ mới với flashcard (phiên âm + phát âm)", time: "30 phút", type: "vocab", link: "vocabulary.html" },
      { id: "d1s3", title: "Ngữ pháp: Động từ \"sein\"", desc: "Học cách chia: bin, bist, ist, sind, seid + bài tập", time: "30 phút", type: "grammar", link: "grammar.html" },
      { id: "d1s4", title: "Luyện nghe: Nghe từ", desc: "Nghe phát âm 10 từ đã học, chọn nghĩa đúng", time: "15 phút", type: "listen", link: "listening.html" },
      { id: "d1s5", title: "Đọc hiểu: \"Mein Name ist Anna\"", desc: "Đọc đoạn văn ngắn, trả lời 4 câu hỏi", time: "20 phút", type: "read", link: "reading.html" },
      { id: "d1s6", title: "Ôn tập & Viết", desc: "Viết 3–5 câu giới thiệu bản thân bằng tiếng Đức. Ôn Anki.", time: "15 phút", type: "review", link: "" }
    ]
  },
  {
    day: 2, week: 1,
    title: "Ngày 2 — Tuần 1",
    subtitle: "Đại từ nhân xưng, quốc gia, nghề nghiệp",
    totalTime: "~2.5 giờ", newWords: "20 từ mới",
    steps: [
      { id: "d2s1", title: "Ôn từ vựng hôm qua", desc: "Lướt qua 16 từ ngày 1 bằng Anki/flashcard", time: "15 phút", type: "review", link: "vocabulary.html" },
      { id: "d2s2", title: "Từ vựng: Đại từ & Quốc gia", desc: "Học 20 từ mới: ich/du/er/sie, Deutschland, Lehrer...", time: "30 phút", type: "vocab", link: "vocabulary.html" },
      { id: "d2s3", title: "Ngữ pháp: Chia động từ \"sein\"", desc: "Ôn lại + làm bài tập điền 6 câu", time: "20 phút", type: "grammar", link: "grammar.html" },
      { id: "d2s4", title: "Luyện nghe: Nghe từ", desc: "10 câu nghe từ mới ngày 2", time: "15 phút", type: "listen", link: "listening.html" },
      { id: "d2s5", title: "Nicos Weg Folge 1–2", desc: "Xem video DW (có phụ đề), ghi chú 5 từ/cụm mới", time: "25 phút", type: "video", link: "" },
      { id: "d2s6", title: "Viết: Giới thiệu 1 người", desc: "Viết 5 câu về 1 thành viên gia đình (tên, tuổi, nghề, quốc gia)", time: "15 phút", type: "review", link: "" }
    ]
  },
  {
    day: 3, week: 1,
    title: "Ngày 3 — Tuần 1",
    subtitle: "Chia động từ thường, hội thoại",
    totalTime: "~2.5 giờ", newWords: "12 từ mới",
    steps: [
      { id: "d3s1", title: "Ôn Anki", desc: "Ôn tất cả flashcard (36 từ tích lũy)", time: "15 phút", type: "review", link: "vocabulary.html" },
      { id: "d3s2", title: "Từ vựng: Động từ thường dùng", desc: "12 từ: sprechen, lernen, arbeiten, machen, gehen...", time: "25 phút", type: "vocab", link: "vocabulary.html" },
      { id: "d3s3", title: "Ngữ pháp: Chia động từ thường", desc: "Quy tắc -e/-st/-t/-en/-t/-en + bài tập 6 câu", time: "30 phút", type: "grammar", link: "grammar.html" },
      { id: "d3s4", title: "Viết hội thoại", desc: "Viết 1 đoạn hội thoại giới thiệu 8–10 câu, đọc to", time: "20 phút", type: "review", link: "" },
      { id: "d3s5", title: "Luyện nghe: Nghe câu", desc: "Nghe 10 câu đơn giản, chọn nghĩa đúng", time: "15 phút", type: "listen", link: "listening.html" },
      { id: "d3s6", title: "Quiz tổng hợp", desc: "Làm quiz trắc nghiệm 10 câu từ vựng ngày 1–3", time: "10 phút", type: "quiz", link: "practice.html" }
    ]
  },
  {
    day: 4, week: 1,
    title: "Ngày 4 — Tuần 1",
    subtitle: "Số đếm, W-Fragen, trật tự câu",
    totalTime: "~2.5 giờ", newWords: "20 từ mới",
    steps: [
      { id: "d4s1", title: "Ôn Anki", desc: "Ôn flashcard (48 từ tích lũy)", time: "15 phút", type: "review", link: "vocabulary.html" },
      { id: "d4s2", title: "Từ vựng: Số đếm & W-Fragen", desc: "20 từ: null–hundert, Wer/Was/Wo/Woher/Wie/Wann/Warum", time: "30 phút", type: "vocab", link: "vocabulary.html" },
      { id: "d4s3", title: "Ngữ pháp: Trật tự câu & W-Fragen", desc: "Quy tắc V2, cách đặt câu hỏi + bài tập", time: "30 phút", type: "grammar", link: "grammar.html" },
      { id: "d4s4", title: "Luyện nghe: Nghe số", desc: "Nghe 10 số bằng tiếng Đức, chọn con số đúng", time: "15 phút", type: "listen", link: "listening.html" },
      { id: "d4s5", title: "Đọc: \"Im Supermarkt\"", desc: "Đọc đoạn văn về mua sắm, trả lời câu hỏi", time: "20 phút", type: "read", link: "reading.html" },
      { id: "d4s6", title: "Nói: Đếm số + Tự hỏi đáp", desc: "Đếm to 1–30, hỏi đáp 5 câu W-Fragen (ghi âm)", time: "15 phút", type: "review", link: "" }
    ]
  },
  {
    day: 5, week: 1,
    title: "Ngày 5 — Tuần 1",
    subtitle: "Nghỉ nhẹ + Tổng ôn",
    totalTime: "~2 giờ", newWords: "0 (ôn lại)",
    steps: [
      { id: "d5s1", title: "Ôn Anki toàn bộ", desc: "Ôn tất cả 68 từ, đánh dấu từ khó", time: "20 phút", type: "review", link: "vocabulary.html" },
      { id: "d5s2", title: "Viết đoạn tự giới thiệu", desc: "Viết 50–80 từ hoàn chỉnh: tên, tuổi, quốc gia, nghề, ngôn ngữ, sở thích", time: "20 phút", type: "review", link: "" },
      { id: "d5s3", title: "Ghi âm đọc to", desc: "Đọc to đoạn văn đã viết, ghi âm, nghe lại sửa phát âm", time: "15 phút", type: "review", link: "" },
      { id: "d5s4", title: "Xem Nicos Weg Folge 3–5", desc: "Xem video nhẹ nhàng, không áp lực, enjoy", time: "30 phút", type: "video", link: "" },
      { id: "d5s5", title: "Nghe nhạc/phim Đức", desc: "Nghe 2–3 bài nhạc Đức hoặc xem 15 phút phim có phụ đề", time: "20 phút", type: "immersion", link: "" },
      { id: "d5s6", title: "Self-test cuối tuần", desc: "Tự kiểm tra: giới thiệu bản thân, đếm số, chia sein, 5 W-Fragen", time: "10 phút", type: "quiz", link: "practice.html" }
    ]
  },
  {
    day: 6, week: 1,
    title: "Ngày 6 — Tuần 1",
    subtitle: "Mạo từ der/die/das, đồ vật hàng ngày",
    totalTime: "~2.5 giờ", newWords: "20 từ mới",
    steps: [
      { id: "d6s1", title: "Ôn Anki", desc: "Ôn flashcard + tập trung từ khó đã đánh dấu", time: "15 phút", type: "review", link: "vocabulary.html" },
      { id: "d6s2", title: "Từ vựng: Mạo từ & Đồ vật", desc: "20 từ mới: der Tisch, die Lampe, das Buch... (chú ý giống!)", time: "30 phút", type: "vocab", link: "vocabulary.html" },
      { id: "d6s3", title: "Ngữ pháp: Mạo từ der/die/das", desc: "Quy tắc nhớ giống, mẹo theo đuôi từ + bài tập 8 câu", time: "30 phút", type: "grammar", link: "grammar.html" },
      { id: "d6s4", title: "Luyện nghe: Chính tả", desc: "Nghe 10 từ, gõ lại chính xác bằng tiếng Đức", time: "15 phút", type: "listen", link: "listening.html" },
      { id: "d6s5", title: "Đọc: \"Meine Familie\"", desc: "Đọc đoạn văn về gia đình, trả lời câu hỏi", time: "20 phút", type: "read", link: "reading.html" },
      { id: "d6s6", title: "Dán nhãn đồ vật", desc: "Dán 10 nhãn tiếng Đức lên đồ vật trong phòng (viết tay)", time: "15 phút", type: "review", link: "" }
    ]
  }
];