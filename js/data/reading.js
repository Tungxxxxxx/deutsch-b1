// ===== READING DATA =====
const READING_DATA = [
  {
    id: 1, title: "Mein Name ist Anna", level: "A1.1", topic: "Giới thiệu",
    text: "Hallo! Mein Name ist Anna. Ich komme aus Deutschland. Ich wohne in Berlin. Ich bin 25 Jahre alt. Ich bin Studentin. Ich studiere Informatik an der Universität. Ich spreche Deutsch und Englisch. Ich lerne auch Spanisch. Am Wochenende spiele ich Fußball und lese Bücher. Ich trinke gern Kaffee.",
    translation: "Xin chào! Tên tôi là Anna. Tôi đến từ Đức. Tôi sống ở Berlin. Tôi 25 tuổi. Tôi là sinh viên. Tôi học ngành Tin học tại đại học. Tôi nói tiếng Đức và tiếng Anh. Tôi cũng học tiếng Tây Ban Nha. Cuối tuần tôi chơi bóng đá và đọc sách. Tôi thích uống cà phê.",
    vocab: [{de:"mein",vi:"của tôi"},{de:"Name",vi:"tên"},{de:"komme",vi:"đến từ"},{de:"wohne",vi:"sống"},{de:"Jahre alt",vi:"tuổi"},{de:"Studentin",vi:"sinh viên nữ"},{de:"studiere",vi:"học (đại học)"},{de:"Informatik",vi:"Tin học"},{de:"Universität",vi:"đại học"},{de:"spreche",vi:"nói"},{de:"auch",vi:"cũng"},{de:"Am Wochenende",vi:"cuối tuần"},{de:"spiele",vi:"chơi"},{de:"lese",vi:"đọc"},{de:"Bücher",vi:"sách (số nhiều)"},{de:"trinke",vi:"uống"},{de:"gern",vi:"thích (+ verb)"}],
    questions: [
      { q: "Woher kommt Anna?", options: ["Aus England","Aus Deutschland","Aus Frankreich","Aus Japan"], answer: 1 },
      { q: "Was studiert Anna?", options: ["Medizin","Kunst","Informatik","Mathematik"], answer: 2 },
      { q: "Welche Sprachen spricht Anna?", options: ["Deutsch und Französisch","Englisch und Spanisch","Deutsch und Englisch","Nur Deutsch"], answer: 2 },
      { q: "Was macht Anna am Wochenende?", options: ["Sie arbeitet","Sie spielt Fußball und liest","Sie schläft","Sie kocht"], answer: 1 }
    ]
  },
  {
    id: 2, title: "Im Supermarkt", level: "A1.1", topic: "Mua sắm",
    text: "Heute gehe ich in den Supermarkt. Ich brauche Brot, Milch und Eier. Der Supermarkt ist nicht weit. Er ist in der Goethestraße. Ich nehme eine Tasche mit. Im Supermarkt sind viele Leute. Ich finde das Brot. Es kostet zwei Euro fünfzig. Die Milch kostet ein Euro neunzig. Die Eier kosten drei Euro. Ich bezahle an der Kasse. Die Kassiererin sagt: \"Das macht sieben Euro vierzig.\" Ich sage: \"Danke, auf Wiedersehen!\"",
    translation: "Hôm nay tôi đi siêu thị. Tôi cần bánh mì, sữa và trứng. Siêu thị không xa. Nó ở trên đường Goethe. Tôi mang theo một cái túi. Trong siêu thị có nhiều người. Tôi tìm thấy bánh mì. Nó giá hai Euro năm mươi cent. Sữa giá một Euro chín mươi. Trứng giá ba Euro. Tôi trả tiền ở quầy thu ngân. Người thu ngân nói: \"Tổng cộng bảy Euro bốn mươi.\" Tôi nói: \"Cảm ơn, tạm biệt!\"",
    vocab: [{de:"heute",vi:"hôm nay"},{de:"gehe",vi:"đi"},{de:"Supermarkt",vi:"siêu thị"},{de:"brauche",vi:"cần"},{de:"Brot",vi:"bánh mì"},{de:"Milch",vi:"sữa"},{de:"Eier",vi:"trứng"},{de:"weit",vi:"xa"},{de:"nehme ... mit",vi:"mang theo"},{de:"Tasche",vi:"cái túi"},{de:"viele",vi:"nhiều"},{de:"Leute",vi:"người/mọi người"},{de:"finde",vi:"tìm thấy"},{de:"kostet",vi:"giá (bao nhiêu)"},{de:"bezahle",vi:"trả tiền"},{de:"Kasse",vi:"quầy thu ngân"},{de:"Das macht",vi:"Tổng cộng là"}],
    questions: [
      { q: "Was braucht die Person?", options: ["Brot, Käse und Milch","Brot, Milch und Eier","Obst und Gemüse","Fleisch und Fisch"], answer: 1 },
      { q: "Wo ist der Supermarkt?", options: ["In der Schillerstraße","Sehr weit","In der Goethestraße","Im Zentrum"], answer: 2 },
      { q: "Wie viel kostet das Brot?", options: ["1,90 €","2,50 €","3,00 €","7,40 €"], answer: 1 },
      { q: "Wie viel bezahlt die Person insgesamt?", options: ["5,40 €","6,50 €","7,40 €","8,00 €"], answer: 2 }
    ]
  },
  {
    id: 3, title: "Meine Familie", level: "A1.1", topic: "Gia đình",
    text: "Ich heiße Marco und ich erzähle von meiner Familie. Meine Familie ist nicht groß. Mein Vater heißt Thomas. Er ist 52 Jahre alt und arbeitet als Ingenieur. Meine Mutter heißt Sabine. Sie ist 49 Jahre alt und ist Lehrerin. Ich habe eine Schwester. Sie heißt Julia und ist 20 Jahre alt. Julia studiert Medizin in München. Wir haben auch einen Hund. Er heißt Max. Am Sonntag essen wir zusammen zu Mittag. Meine Mutter kocht sehr gut.",
    translation: "Tôi tên Marco và tôi kể về gia đình mình. Gia đình tôi không lớn. Bố tôi tên Thomas. Ông ấy 52 tuổi và làm kỹ sư. Mẹ tôi tên Sabine. Bà ấy 49 tuổi và là giáo viên. Tôi có một chị/em gái. Cô ấy tên Julia và 20 tuổi. Julia học ngành Y ở München. Chúng tôi cũng có một con chó. Nó tên Max. Chủ nhật chúng tôi ăn trưa cùng nhau. Mẹ tôi nấu ăn rất giỏi.",
    vocab: [{de:"erzähle",vi:"kể"},{de:"Familie",vi:"gia đình"},{de:"Vater",vi:"bố/cha"},{de:"Mutter",vi:"mẹ"},{de:"arbeitet als",vi:"làm việc như"},{de:"Ingenieur",vi:"kỹ sư"},{de:"Lehrerin",vi:"giáo viên nữ"},{de:"Schwester",vi:"chị/em gái"},{de:"Medizin",vi:"Y khoa"},{de:"Hund",vi:"con chó"},{de:"Am Sonntag",vi:"Chủ nhật"},{de:"zusammen",vi:"cùng nhau"},{de:"zu Mittag essen",vi:"ăn trưa"},{de:"kocht",vi:"nấu ăn"},{de:"sehr gut",vi:"rất giỏi/tốt"}],
    questions: [
      { q: "Wie alt ist der Vater?", options: ["49","50","52","55"], answer: 2 },
      { q: "Was ist die Mutter von Beruf?", options: ["Ärztin","Ingenieurin","Lehrerin","Studentin"], answer: 2 },
      { q: "Was studiert Julia?", options: ["Informatik","Medizin","Kunst","Deutsch"], answer: 1 },
      { q: "Was macht die Familie am Sonntag?", options: ["Sie gehen spazieren","Sie essen zusammen","Sie spielen Fußball","Sie gehen einkaufen"], answer: 1 }
    ]
  },
  {
    id: 4, title: "Ein Tag in der Stadt", level: "A1.2", topic: "Thành phố",
    text: "Heute ist Samstag und ich habe frei. Am Morgen stehe ich um neun Uhr auf. Ich frühstücke zu Hause: Kaffee und ein Brötchen mit Marmelade. Dann gehe ich in die Stadt. Zuerst besuche ich das Museum. Es ist sehr interessant. Danach gehe ich in ein Café und trinke einen Cappuccino. Am Nachmittag treffe ich meinen Freund Peter im Park. Wir gehen zusammen spazieren und sprechen über unsere Pläne. Am Abend gehe ich ins Kino. Der Film beginnt um acht Uhr. Es ist ein guter Tag!",
    translation: "Hôm nay là thứ Bảy và tôi được nghỉ. Buổi sáng tôi dậy lúc 9 giờ. Tôi ăn sáng ở nhà: cà phê và một ổ bánh mì nhỏ với mứt. Sau đó tôi đi vào thành phố. Đầu tiên tôi tham quan bảo tàng. Nó rất thú vị. Sau đó tôi đi vào một quán cà phê và uống một ly cappuccino. Buổi chiều tôi gặp bạn Peter ở công viên. Chúng tôi cùng đi dạo và nói về kế hoạch của mình. Buổi tối tôi đi xem phim. Phim bắt đầu lúc 8 giờ. Đây là một ngày tốt đẹp!",
    vocab: [{de:"Samstag",vi:"thứ Bảy"},{de:"frei haben",vi:"được nghỉ"},{de:"aufstehen",vi:"dậy/thức dậy"},{de:"frühstücke",vi:"ăn sáng"},{de:"zu Hause",vi:"ở nhà"},{de:"Brötchen",vi:"bánh mì nhỏ"},{de:"Marmelade",vi:"mứt"},{de:"Zuerst",vi:"đầu tiên"},{de:"besuche",vi:"tham quan"},{de:"Museum",vi:"bảo tàng"},{de:"interessant",vi:"thú vị"},{de:"Danach",vi:"sau đó"},{de:"Am Nachmittag",vi:"buổi chiều"},{de:"treffe",vi:"gặp"},{de:"Freund",vi:"bạn (nam)"},{de:"spazieren gehen",vi:"đi dạo"},{de:"Pläne",vi:"kế hoạch"},{de:"Am Abend",vi:"buổi tối"},{de:"Kino",vi:"rạp phim"},{de:"beginnt",vi:"bắt đầu"}],
    questions: [
      { q: "Wann steht die Person auf?", options: ["Um sieben Uhr","Um acht Uhr","Um neun Uhr","Um zehn Uhr"], answer: 2 },
      { q: "Was besucht die Person zuerst?", options: ["Das Kino","Den Park","Das Café","Das Museum"], answer: 3 },
      { q: "Wen trifft die Person im Park?", options: ["Seinen Bruder","Seine Mutter","Seinen Freund Peter","Seine Schwester"], answer: 2 },
      { q: "Wann beginnt der Film?", options: ["Um sieben Uhr","Um acht Uhr","Um neun Uhr","Um zehn Uhr"], answer: 1 }
    ]
  },
  {
    id: 5, title: "Eine E-Mail an Lisa", level: "A1.2", topic: "Email / Thư",
    text: "Liebe Lisa,\n\nwie geht es dir? Mir geht es gut. Ich bin jetzt in Hamburg. Die Stadt ist sehr schön! Ich habe ein Zimmer in einer Wohngemeinschaft. Meine Mitbewohner sind nett. Sie heißen Tom und Sarah.\n\nIch besuche einen Deutschkurs. Der Kurs ist von Montag bis Freitag, von neun bis zwölf Uhr. Die Lehrerin heißt Frau Weber. Sie ist sehr freundlich.\n\nAm Wochenende möchte ich den Hafen besuchen. Kommst du mich besuchen? Das wäre toll!\n\nViele Grüße\nMarko",
    translation: "Lisa thân mến,\n\nBạn khỏe không? Mình khỏe. Mình bây giờ ở Hamburg. Thành phố rất đẹp! Mình có một phòng trong căn hộ chung. Bạn cùng phòng mình rất tốt. Họ tên Tom và Sarah.\n\nMình đang tham gia khóa học tiếng Đức. Khóa học từ thứ Hai đến thứ Sáu, từ 9 đến 12 giờ. Giáo viên tên là cô Weber. Cô ấy rất thân thiện.\n\nCuối tuần mình muốn đi thăm cảng. Bạn đến thăm mình được không? Sẽ tuyệt lắm!\n\nThân ái\nMarko",
    vocab: [{de:"Liebe",vi:"thân mến (nữ)"},{de:"Wie geht es dir?",vi:"Bạn khỏe không?"},{de:"jetzt",vi:"bây giờ"},{de:"schön",vi:"đẹp"},{de:"Zimmer",vi:"phòng"},{de:"Wohngemeinschaft",vi:"nhà/căn hộ chung (WG)"},{de:"Mitbewohner",vi:"bạn cùng phòng"},{de:"nett",vi:"tốt/dễ thương"},{de:"Deutschkurs",vi:"khóa học tiếng Đức"},{de:"von ... bis",vi:"từ ... đến"},{de:"freundlich",vi:"thân thiện"},{de:"Hafen",vi:"cảng"},{de:"Kommst du?",vi:"Bạn đến không?"},{de:"Das wäre toll!",vi:"Sẽ tuyệt lắm!"},{de:"Viele Grüße",vi:"Thân ái (kết thúc thư)"}],
    questions: [
      { q: "Wo ist Marko jetzt?", options: ["In Berlin","In München","In Hamburg","In Köln"], answer: 2 },
      { q: "Wann ist der Deutschkurs?", options: ["Am Wochenende","Montag bis Freitag","Nur am Montag","Dienstag und Donnerstag"], answer: 1 },
      { q: "Wie findet Marko die Stadt?", options: ["Langweilig","Hässlich","Sehr schön","Zu groß"], answer: 2 },
      { q: "Was möchte Marko am Wochenende machen?", options: ["Den Kurs besuchen","Ins Kino gehen","Den Hafen besuchen","Nach Hause fahren"], answer: 2 }
    ]
  }
];