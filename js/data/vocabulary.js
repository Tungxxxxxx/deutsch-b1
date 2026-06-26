// ===== VOCABULARY DATA - WEEK 1 =====
const VOCAB_DATA = {
  week1: {
    title: "Tuần 1: Chào hỏi & Giới thiệu",
    days: [
      {
        day: 1, title: "Chào hỏi & Phát âm",
        words: [
          { de: "Hallo", vi: "Xin chào (thân mật)", ipa: "/ˈhaloː/", vn_read: "ha-lô", example: "Hallo, wie geht's?", note: "", chunks: ["Hallo zusammen", "Hallo sagen"] },
          { de: "Guten Morgen", vi: "Chào buổi sáng", ipa: "/ˈɡuːtn̩ ˈmɔʁɡn̩/", vn_read: "gu-tần mo-gần", example: "Guten Morgen, Herr Müller!", note: "⚠️ r Đức = ngậm họng", chunks: ["Guten Morgen zusammen"] },
          { de: "Guten Tag", vi: "Chào buổi trưa/chiều", ipa: "/ˈɡuːtn̩ taːk/", vn_read: "gu-tần tác", example: "Guten Tag!", note: "", chunks: ["Guten Tag sagen"] },
          { de: "Guten Abend", vi: "Chào buổi tối", ipa: "/ˈɡuːtn̩ ˈaːbn̩t/", vn_read: "gu-tần a-bần-t", example: "Guten Abend!", note: "", chunks: [] },
          { de: "Gute Nacht", vi: "Chúc ngủ ngon", ipa: "/ˈɡuːtə naxt/", vn_read: "gu-tờ nách-t", example: "Gute Nacht!", note: "⚠️ ch = khè nhẹ trong họng", chunks: [] },
          { de: "Tschüss", vi: "Tạm biệt (thân mật)", ipa: "/tʃʏs/", vn_read: "chuyts", example: "Tschüss! Bis morgen!", note: "⚠️ ü = u tròn môi + âm i", chunks: ["Tschüss sagen", "Tschüss bis morgen"] },
          { de: "Auf Wiedersehen", vi: "Tạm biệt (trang trọng)", ipa: "/aʊf ˈviːdɐzeːən/", vn_read: "ao-f vi-đờ-ze-ần", example: "Auf Wiedersehen!", note: "", chunks: [] },
          { de: "Danke", vi: "Cảm ơn", ipa: "/ˈdaŋkə/", vn_read: "đang-cờ", example: "Danke schön!", note: "", chunks: ["Danke schön", "Danke sehr", "Vielen Dank"] },
          { de: "Bitte", vi: "Xin vui lòng / Không có gì", ipa: "/ˈbɪtə/", vn_read: "bít-tờ", example: "Bitte schön!", note: "", chunks: ["Bitte schön", "Bitte sehr"] },
          { de: "Entschuldigung", vi: "Xin lỗi", ipa: "/ɛntˈʃʊldɪɡʊŋ/", vn_read: "ent-su-đi-gung", example: "Entschuldigung!", note: "⚠️ sch = sh", chunks: ["Entschuldigung sagen"] },
          { de: "Ja", vi: "Vâng / Có", ipa: "/jaː/", vn_read: "ya", example: "Ja, natürlich!", note: "J đọc là Y", chunks: ["Ja, bitte", "Ja, genau"] },
          { de: "Nein", vi: "Không", ipa: "/naɪn/", vn_read: "nai-n", example: "Nein, danke.", note: "ei = ai", chunks: ["Nein, danke"] },
          { de: "heißen", vi: "tên là", ipa: "/ˈhaɪsn̩/", vn_read: "hai-xần", example: "Ich heiße Tung.", note: "ei=ai, ß=ss", chunks: ["Ich heiße...", "Wie heißen Sie?"] },
          { de: "kommen", vi: "đến từ", ipa: "/ˈkɔmən/", vn_read: "cóm-mần", example: "Ich komme aus Vietnam.", note: "", chunks: ["kommen aus", "nach Hause kommen"] },
          { de: "wohnen", vi: "sống/ở", ipa: "/ˈvoːnən/", vn_read: "vô-nần", example: "Ich wohne in Hanoi.", note: "W=V", chunks: ["wohnen in", "Wo wohnst du?"] },
          { de: "sein", vi: "là/thì", ipa: "/zaɪn/", vn_read: "zai-n", example: "Ich bin Student.", note: "S đầu từ=Z", chunks: ["Ich bin...", "Das ist..."] }
        ]
      },
      {
        day: 2, title: "Đại từ & Quốc gia",
        words: [
          { de: "ich", vi: "tôi", ipa: "/ɪç/", vn_read: "ích (hơi thở nhẹ)", example: "Ich bin aus Vietnam.", note: "⚠️ ch sau i/e = hít nhẹ", chunks: ["Ich bin...", "Ich habe..."] },
          { de: "du", vi: "bạn (thân mật)", ipa: "/duː/", vn_read: "đu", example: "Wie heißt du?", note: "", chunks: ["Wie heißt du?", "Bist du...?"] },
          { de: "er", vi: "anh ấy", ipa: "/eːɐ/", vn_read: "ea", example: "Er ist Lehrer.", note: "", chunks: ["Er ist...", "Er kommt aus..."] },
          { de: "sie", vi: "cô ấy / họ", ipa: "/ziː/", vn_read: "zi", example: "Sie kommt aus Japan.", note: "S=Z trước nguyên âm", chunks: ["Sie ist...", "Sie kommen aus..."] },
          { de: "es", vi: "nó (trung tính)", ipa: "/ɛs/", vn_read: "ét-s", example: "Es ist schön.", note: "", chunks: ["Es ist...", "Es gibt..."] },
          { de: "wir", vi: "chúng tôi", ipa: "/viːɐ/", vn_read: "via", example: "Wir lernen Deutsch.", note: "W=V", chunks: ["Wir sind...", "Wir lernen..."] },
          { de: "ihr", vi: "các bạn", ipa: "/iːɐ/", vn_read: "ia", example: "Woher kommt ihr?", note: "", chunks: ["Woher kommt ihr?"] },
          { de: "Sie", vi: "Ông/Bà (trang trọng)", ipa: "/ziː/", vn_read: "zi", example: "Wie heißen Sie?", note: "Viết hoa=trang trọng", chunks: ["Wie heißen Sie?", "Woher kommen Sie?"] },
          { de: "Deutschland", vi: "Đức", ipa: "/ˈdɔʏtʃlant/", vn_read: "đoi-ch-lant", example: "Ich lerne Deutsch.", note: "eu=oi", chunks: ["in Deutschland", "aus Deutschland"] },
          { de: "Vietnam", vi: "Việt Nam", ipa: "/vi̯ɛtˈnam/", vn_read: "vi-ét-nam", example: "Ich komme aus Vietnam.", note: "", chunks: ["aus Vietnam", "in Vietnam"] },
          { de: "Frankreich", vi: "Pháp", ipa: "/ˈfʁaŋkʁaɪç/", vn_read: "phơ-rank-raich", example: "Paris ist in Frankreich.", note: "ei=ai", chunks: ["in Frankreich"] },
          { de: "England", vi: "Anh", ipa: "/ˈɛŋlant/", vn_read: "eng-lant", example: "London ist in England.", note: "", chunks: ["in England"] },
          { de: "Japan", vi: "Nhật Bản", ipa: "/ˈjaːpan/", vn_read: "ya-pan", example: "Sie kommt aus Japan.", note: "J=Y", chunks: ["aus Japan"] },
          { de: "Deutsch", vi: "tiếng Đức", ipa: "/dɔʏtʃ/", vn_read: "đoi-ch", example: "Ich spreche Deutsch.", note: "eu=oi", chunks: ["Deutsch lernen", "Deutsch sprechen"] },
          { de: "Englisch", vi: "tiếng Anh", ipa: "/ˈɛŋlɪʃ/", vn_read: "eng-lít-sh", example: "Sprichst du Englisch?", note: "", chunks: ["Englisch sprechen"] },
          { de: "der Lehrer", vi: "giáo viên (nam)", ipa: "/deːɐ ˈleːʁɐ/", vn_read: "đe lê-rờ", example: "Der Lehrer ist nett.", gender: "m", note: "", plural: "die Lehrer (-)", chunks: ["ein guter Lehrer"] },
          { de: "die Lehrerin", vi: "giáo viên (nữ)", ipa: "/diː ˈleːʁəʁɪn/", vn_read: "đi lê-rờ-rin", example: "Die Lehrerin kommt aus Berlin.", gender: "f", note: "-in=nữ", plural: "die Lehrerinnen (-nen)", chunks: ["eine nette Lehrerin"] },
          { de: "der Arzt", vi: "bác sĩ (nam)", ipa: "/deːɐ aʁtst/", vn_read: "đe a-rtst", example: "Der Arzt ist im Krankenhaus.", gender: "m", note: "", plural: "die Ärzte (¨-e)", chunks: ["zum Arzt gehen"] },
          { de: "der Student", vi: "sinh viên (nam)", ipa: "/deːɐ ʃtuˈdɛnt/", vn_read: "đe shu-đent", example: "Er ist Student.", gender: "m", note: "St=Sht", plural: "die Studenten (-en)", chunks: ["Student sein"] },
          { de: "der Ingenieur", vi: "kỹ sư (nam)", ipa: "/deːɐ ɪnʒeˈniːøːɐ/", vn_read: "đe in-giơ-nia", example: "Ich bin Ingenieur.", gender: "m", note: "Từ gốc Pháp", plural: "die Ingenieure (-e)", chunks: ["als Ingenieur arbeiten"] }
        ]
      },
      {
        day: 3, title: "Động từ thường dùng",
        words: [
          { de: "sprechen", vi: "nói", ipa: "/ˈʃpʁɛçn̩/", vn_read: "shp-re-hần", example: "Ich spreche Deutsch.", note: "sp=shp", chunks: ["Deutsch sprechen", "mit jemandem sprechen"] },
          { de: "lernen", vi: "học", ipa: "/ˈlɛʁnən/", vn_read: "le-nần", example: "Ich lerne Deutsch.", note: "", chunks: ["Deutsch lernen", "für die Prüfung lernen"] },
          { de: "arbeiten", vi: "làm việc", ipa: "/ˈaʁbaɪtn̩/", vn_read: "a-bai-tần", example: "Ich arbeite in Hanoi.", note: "ei=ai", chunks: ["bei ... arbeiten", "als ... arbeiten"] },
          { de: "machen", vi: "làm", ipa: "/ˈmaxn̩/", vn_read: "mách-ần", example: "Was machst du?", note: "ch sau a=kh", chunks: ["Was machst du?", "Hausaufgaben machen", "Sport machen"] },
          { de: "gehen", vi: "đi", ipa: "/ˈɡeːən/", vn_read: "ghê-ần", example: "Ich gehe nach Hause.", note: "", chunks: ["nach Hause gehen", "zur Arbeit gehen", "spazieren gehen"] },
          { de: "haben", vi: "có", ipa: "/ˈhaːbn̩/", vn_read: "ha-bần", example: "Ich habe ein Buch.", note: "", chunks: ["Hunger haben", "Zeit haben", "Lust haben"] },
          { de: "möchten", vi: "muốn (lịch sự)", ipa: "/ˈmœçtn̩/", vn_read: "mớch-tần", example: "Ich möchte Kaffee.", note: "⚠️ ö=e tròn môi", chunks: ["Ich möchte...", "Möchten Sie...?"] },
          { de: "verstehen", vi: "hiểu", ipa: "/fɛɐˈʃteːən/", vn_read: "phơ-shtê-ần", example: "Ich verstehe nicht.", note: "V=F, st=sht", chunks: ["Ich verstehe nicht", "Verstehen Sie?"] },
          { de: "lesen", vi: "đọc", ipa: "/ˈleːzn̩/", vn_read: "lê-zần", example: "Ich lese ein Buch.", note: "", chunks: ["ein Buch lesen", "Zeitung lesen"] },
          { de: "schreiben", vi: "viết", ipa: "/ˈʃʁaɪbn̩/", vn_read: "sh-rai-bần", example: "Ich schreibe eine E-Mail.", note: "sch=sh, ei=ai", chunks: ["eine E-Mail schreiben", "einen Brief schreiben"] },
          { de: "spielen", vi: "chơi", ipa: "/ˈʃpiːlən/", vn_read: "shp-i-lần", example: "Ich spiele Fußball.", note: "sp=shp, ie=i dài", chunks: ["Fußball spielen", "Gitarre spielen", "Klavier spielen"] },
          { de: "hören", vi: "nghe", ipa: "/ˈhøːʁən/", vn_read: "hờ-rần", example: "Ich höre Musik.", note: "⚠️ ö=e tròn môi", chunks: ["Musik hören", "Radio hören"] }
        ]
      },
      {
        day: 4, title: "Số đếm & W-Fragen",
        words: [
          { de: "null", vi: "0", ipa: "/nʊl/", vn_read: "nul", example: "null Komma fünf", note: "", chunks: [] },
          { de: "eins", vi: "1", ipa: "/aɪns/", vn_read: "ai-ns", example: "eins, zwei, drei...", note: "ei=ai", chunks: [] },
          { de: "zwei", vi: "2", ipa: "/tsvaɪ/", vn_read: "xvai", example: "Ich habe zwei Bücher.", note: "Z=ts, w=v, ei=ai", chunks: [] },
          { de: "drei", vi: "3", ipa: "/dʁaɪ/", vn_read: "đ-rai", example: "drei Kinder", note: "ei=ai", chunks: [] },
          { de: "vier", vi: "4", ipa: "/fiːɐ/", vn_read: "phia", example: "vier Jahreszeiten", note: "V=F", chunks: [] },
          { de: "fünf", vi: "5", ipa: "/fʏnf/", vn_read: "phuy-nf", example: "fünf Finger", note: "⚠️ ü=u tròn+i", chunks: [] },
          { de: "sechs", vi: "6", ipa: "/zɛks/", vn_read: "zéc-s", example: "sechs Uhr", note: "chs=ks", chunks: ["um sechs Uhr"] },
          { de: "sieben", vi: "7", ipa: "/ˈziːbn̩/", vn_read: "zi-bần", example: "sieben Tage", note: "ie=i dài", chunks: [] },
          { de: "acht", vi: "8", ipa: "/axt/", vn_read: "ách-t", example: "um acht Uhr", note: "ch=kh", chunks: ["um acht Uhr"] },
          { de: "neun", vi: "9", ipa: "/nɔʏn/", vn_read: "noi-n", example: "neun Euro", note: "eu=oi", chunks: [] },
          { de: "zehn", vi: "10", ipa: "/tseːn/", vn_read: "xên", example: "zehn Minuten", note: "Z=ts", chunks: [] },
          { de: "zwanzig", vi: "20", ipa: "/ˈtsvantsɪç/", vn_read: "xvan-xích", example: "zwanzig Jahre alt", note: "-ig cuối=ích", chunks: ["zwanzig Jahre alt"] },
          { de: "hundert", vi: "100", ipa: "/ˈhʊndɐt/", vn_read: "hun-đợt", example: "einhundert Prozent", note: "", chunks: [] },
          { de: "Wer?", vi: "Ai?", ipa: "/veːɐ/", vn_read: "vê-a", example: "Wer ist das?", note: "W=V", chunks: ["Wer ist das?", "Wer bist du?"] },
          { de: "Was?", vi: "Cái gì?", ipa: "/vas/", vn_read: "vát-s", example: "Was machst du?", note: "", chunks: ["Was ist das?", "Was machst du?", "Was kostet das?"] },
          { de: "Wo?", vi: "Ở đâu?", ipa: "/voː/", vn_read: "vô", example: "Wo wohnst du?", note: "", chunks: ["Wo wohnst du?", "Wo ist...?"] },
          { de: "Woher?", vi: "Từ đâu?", ipa: "/voˈheːɐ/", vn_read: "vô-hê-a", example: "Woher kommst du?", note: "", chunks: ["Woher kommst du?", "Woher kommen Sie?"] },
          { de: "Wie?", vi: "Thế nào?", ipa: "/viː/", vn_read: "vi", example: "Wie heißen Sie?", note: "", chunks: ["Wie geht's?", "Wie heißen Sie?", "Wie alt bist du?"] },
          { de: "Wann?", vi: "Khi nào?", ipa: "/van/", vn_read: "van", example: "Wann kommst du?", note: "", chunks: ["Wann kommst du?"] },
          { de: "Warum?", vi: "Tại sao?", ipa: "/vaˈʁʊm/", vn_read: "va-rum", example: "Warum lernst du Deutsch?", note: "", chunks: ["Warum nicht?"] }
        ]
      },
      {
        day: 6, title: "Mạo từ & Đồ vật",
        words: [
          { de: "der Tisch", vi: "cái bàn", ipa: "/deːɐ tɪʃ/", vn_read: "đe tít-sh", example: "Der Tisch ist groß.", gender: "m", note: "", plural: "die Tische (-e)", chunks: ["am Tisch sitzen", "den Tisch decken"] },
          { de: "der Stuhl", vi: "cái ghế", ipa: "/deːɐ ʃtuːl/", vn_read: "đe shu-tul", example: "Der Stuhl ist alt.", gender: "m", note: "St=Sht", plural: "die Stühle (¨-e)", chunks: ["auf dem Stuhl sitzen"] },
          { de: "der Computer", vi: "máy tính", ipa: "/deːɐ kɔmˈpjuːtɐ/", vn_read: "đe com-piu-tờ", example: "Der Computer ist neu.", gender: "m", note: "", plural: "die Computer (-)", chunks: ["am Computer arbeiten"] },
          { de: "der Stift", vi: "cây bút", ipa: "/deːɐ ʃtɪft/", vn_read: "đe sh-típt", example: "Wo ist der Stift?", gender: "m", note: "St=Sht", plural: "die Stifte (-e)", chunks: ["einen Stift brauchen"] },
          { de: "der Schlüssel", vi: "chìa khóa", ipa: "/deːɐ ˈʃlʏsl̩/", vn_read: "đe sh-luy-xồl", example: "Wo ist der Schlüssel?", gender: "m", note: "⚠️ ü=u tròn+i", plural: "die Schlüssel (-)", chunks: ["den Schlüssel suchen"] },
          { de: "die Tasche", vi: "cái túi", ipa: "/diː ˈtaʃə/", vn_read: "đi ta-shờ", example: "Die Tasche ist schön.", gender: "f", note: "", plural: "die Taschen (-n)", chunks: ["in der Tasche"] },
          { de: "die Lampe", vi: "cái đèn", ipa: "/diː ˈlampə/", vn_read: "đi lam-pờ", example: "Die Lampe ist kaputt.", gender: "f", note: "", plural: "die Lampen (-n)", chunks: ["die Lampe anmachen"] },
          { de: "die Brille", vi: "kính mắt", ipa: "/diː ˈbʁɪlə/", vn_read: "đi b-ri-lờ", example: "Wo ist die Brille?", gender: "f", note: "", plural: "die Brillen (-n)", chunks: ["eine Brille tragen"] },
          { de: "die Uhr", vi: "đồng hồ", ipa: "/diː uːɐ/", vn_read: "đi ua", example: "Die Uhr ist schön.", gender: "f", note: "", plural: "die Uhren (-en)", chunks: ["Wie viel Uhr ist es?"] },
          { de: "die Tür", vi: "cánh cửa", ipa: "/diː tyːɐ/", vn_read: "đi tuy-a", example: "Die Tür ist offen.", gender: "f", note: "⚠️ ü", plural: "die Türen (-en)", chunks: ["die Tür öffnen", "die Tür schließen"] },
          { de: "das Buch", vi: "quyển sách", ipa: "/das buːx/", vn_read: "đát-s buch (kh cuối)", example: "Das Buch ist interessant.", gender: "n", note: "ch sau u=kh", plural: "die Bücher (¨-er)", chunks: ["ein Buch lesen"] },
          { de: "das Handy", vi: "điện thoại", ipa: "/das ˈhɛndi/", vn_read: "đát-s hen-đi", example: "Wo ist das Handy?", gender: "n", note: "", plural: "die Handys (-s)", chunks: ["das Handy benutzen"] },
          { de: "das Heft", vi: "quyển vở", ipa: "/das hɛft/", vn_read: "đát-s heft", example: "Das Heft ist neu.", gender: "n", note: "", plural: "die Hefte (-e)", chunks: ["ins Heft schreiben"] },
          { de: "das Fenster", vi: "cửa sổ", ipa: "/das ˈfɛnstɐ/", vn_read: "đát-s phen-stờ", example: "Das Fenster ist offen.", gender: "n", note: "", plural: "die Fenster (-)", chunks: ["das Fenster öffnen"] },
          { de: "das Wasser", vi: "nước", ipa: "/das ˈvasɐ/", vn_read: "đát-s va-sờ", example: "Ich trinke Wasser.", gender: "n", note: "W=V", plural: "– (kein Plural)", chunks: ["Wasser trinken", "ein Glas Wasser"] },
          { de: "gut", vi: "tốt", ipa: "/ɡuːt/", vn_read: "gut", example: "Das ist gut!", note: "", chunks: ["Mir geht es gut", "gut gemacht"] },
          { de: "schlecht", vi: "xấu/tệ", ipa: "/ʃlɛçt/", vn_read: "sh-lếch-t", example: "Das Wetter ist schlecht.", note: "", chunks: ["schlecht gelaunt", "Das ist schlecht"] },
          { de: "groß", vi: "to/lớn", ipa: "/ɡʁoːs/", vn_read: "g-rốt-s", example: "Das Haus ist groß.", note: "ß=ss", chunks: ["groß und klein"] },
          { de: "klein", vi: "nhỏ/bé", ipa: "/klaɪn/", vn_read: "klai-n", example: "Die Katze ist klein.", note: "ei=ai", chunks: ["klein aber fein"] },
          { de: "neu", vi: "mới", ipa: "/nɔʏ/", vn_read: "noi", example: "Das ist neu.", note: "eu=oi", chunks: ["etwas Neues", "neu hier"] }
        ]
      }
    ]
  }
};
