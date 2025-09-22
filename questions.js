const questions = [
  {
    q: "Türkiye’nin başkenti neresidir?",
    options: ["İstanbul", "Ankara", "İzmir", "Bursa"],
    answer: 1
  },
  {
    q: "Cumhuriyet hangi yıl ilan edilmiştir?",
    options: ["1920", "1923", "1938", "1919"],
    answer: 1
  },
  {
    q: "Dünyanın en büyük okyanusu hangisidir?",
    options: ["Atlas", "Hint", "Büyük Okyanus", "Arktik"],
    answer: 2
  },
  {
    q: "5 x 6 kaçtır?",
    options: ["20", "25", "30", "35"],
    answer: 2
  },
  {
    q: "En hızlı kara hayvanı hangisidir?",
    options: ["Aslan", "Çita", "Kaplan", "At"],
    answer: 1
  },
  {
    q: "İnsan vücudunda kaç kemik vardır?",
    options: ["180", "206", "220", "250"],
    answer: 1
  },
  {
    q: "Dünya’nın uydusunun adı nedir?",
    options: ["Ay", "Güneş", "Venüs", "Jüpiter"],
    answer: 0
  },
  {
    q: "Osmanlı Devleti hangi yılda yıkılmıştır?",
    options: ["1918", "1920", "1922", "1923"],
    answer: 2
  },
  {
    q: "Türkiye’nin en uzun nehri hangisidir?",
    options: ["Fırat", "Kızılırmak", "Dicle", "Sakarya"],
    answer: 1
  },
  {
    q: "Yer çekimini kim keşfetmiştir?",
    options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Thomas Edison"],
    answer: 2
  },

  {
    q: "İstanbul hangi yılda fethedilmiştir?",
    options: ["1453", "1071", "1923", "1402"],
    answer: 0
  },
  {
    q: "Türkiye’nin en yüksek dağı hangisidir?",
    options: ["Erciyes", "Kaçkar", "Ağrı Dağı", "Uludağ"],
    answer: 2
  },
  {
    q: "Dünyanın en küçük kıtası hangisidir?",
    options: ["Avrupa", "Avustralya", "Asya", "Afrika"],
    answer: 1
  },
  {
    q: "Güneş sisteminde en büyük gezegen hangisidir?",
    options: ["Mars", "Jüpiter", "Dünya", "Satürn"],
    answer: 1
  },
  {
    q: "Türkiye’nin para birimi nedir?",
    options: ["Euro", "Dolar", "Türk Lirası", "Sterlin"],
    answer: 2
  },
  {
    q: "Kan dolaşımını kim keşfetmiştir?",
    options: ["William Harvey", "Louis Pasteur", "Robert Koch", "İbn-i Sina"],
    answer: 0
  },
  {
    q: "Ankara hangi coğrafi bölgede yer alır?",
    options: ["Ege", "Marmara", "İç Anadolu", "Karadeniz"],
    answer: 2
  },
  {
    q: "Dünyada kaç kıta vardır?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    q: "Türkiye’nin en büyük gölü hangisidir?",
    options: ["Tuz Gölü", "Van Gölü", "Beyşehir Gölü", "Eğirdir Gölü"],
    answer: 1
  },
  {
    q: "DNA’yı kim keşfetmiştir?",
    options: ["Watson ve Crick", "Newton", "Darwin", "Edison"],
    answer: 0
  },

  {
    q: "İlk Türk Devleti hangisidir?",
    options: ["Göktürkler", "Hunlar", "Selçuklular", "Osmanlılar"],
    answer: 1
  },
  {
    q: "Türkiye’nin en kalabalık şehri hangisidir?",
    options: ["Ankara", "İzmir", "İstanbul", "Bursa"],
    answer: 2
  },
  {
    q: "E=mc² formülü kime aittir?",
    options: ["Newton", "Tesla", "Einstein", "Faraday"],
    answer: 2
  },
  {
    q: "Türkiye’nin üç tarafı hangi denizlerle çevrilidir?",
    options: ["Karadeniz, Akdeniz, Ege", "Marmara, Akdeniz, Karadeniz", "Ege, Marmara, Karadeniz", "Akdeniz, Ege, Marmara"],
    answer: 0
  },
  {
    q: "İlk çağ uygarlıklarından hangisi yazıyı bulmuştur?",
    options: ["Sümerler", "Hititler", "Mısırlılar", "Urartular"],
    answer: 0
  },
  {
    q: "Dünyanın en yüksek dağı hangisidir?",
    options: ["Ağrı", "Everest", "Elbruz", "Kilimanjaro"],
    answer: 1
  },
  {
    q: "Mona Lisa tablosunu kim yapmıştır?",
    options: ["Picasso", "Leonardo da Vinci", "Van Gogh", "Michelangelo"],
    answer: 1
  },
  {
    q: "Türkiye’nin resmi dili hangisidir?",
    options: ["Arapça", "Türkçe", "Kürtçe", "İngilizce"],
    answer: 1
  },
  {
    q: "En uzun ömürlü hayvan hangisidir?",
    options: ["Kaplumbağa", "Fil", "Balina", "Karga"],
    answer: 0
  },
  {
    q: "Türkiye’nin en batıdaki ili hangisidir?",
    options: ["Edirne", "Çanakkale", "Muğla", "İzmir"],
    answer: 0
  },

  {
    q: "Atomu ilk tanımlayan bilim insanı kimdir?",
    options: ["Demokritos", "Newton", "Einstein", "Curie"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk Cumhurbaşkanı kimdir?",
    options: ["İsmet İnönü", "Mustafa Kemal Atatürk", "Celal Bayar", "Adnan Menderes"],
    answer: 1
  },
  {
    q: "Sesin yayılmadığı ortam hangisidir?",
    options: ["Hava", "Su", "Boşluk (vakum)", "Metal"],
    answer: 2
  },
  {
    q: "Dünya’nın şekli nedir?",
    options: ["Küre", "Geoide yakın", "Silindir", "Düz"],
    answer: 1
  },
  {
    q: "Türkiye’nin güneyinde hangi deniz bulunur?",
    options: ["Karadeniz", "Akdeniz", "Ege", "Marmara"],
    answer: 1
  },
  {
    q: "Ampulü kim icat etmiştir?",
    options: ["Newton", "Edison", "Tesla", "Faraday"],
    answer: 1
  },
  {
    q: "Dünya’nın en büyük çölü hangisidir?",
    options: ["Gobi", "Sahara", "Karakum", "Atacama"],
    answer: 1
  },
  {
    q: "Türkiye’nin en büyük adası hangisidir?",
    options: ["Gökçeada", "Bozcaada", "Kıbrıs", "Marmara Adası"],
    answer: 0
  },
  {
    q: "Telefonu kim icat etmiştir?",
    options: ["Edison", "Alexander Graham Bell", "Tesla", "Marconi"],
    answer: 1
  },
  {
    q: "Türkiye’nin en doğusundaki ili hangisidir?",
    options: ["Iğdır", "Kars", "Hakkari", "Van"],
    answer: 0
  },

  {
    q: "En kalabalık ülke hangisidir?",
    options: ["ABD", "Çin", "Hindistan", "Rusya"],
    answer: 1
  },
  {
    q: "Türkiye’nin üç büyük şehri hangileridir?",
    options: ["İstanbul, Ankara, İzmir", "İstanbul, Bursa, İzmir", "Ankara, İzmir, Antalya", "İstanbul, Ankara, Adana"],
    answer: 0
  },
  {
    q: "Türkiye’nin yüzölçümü bakımından en büyük ili hangisidir?",
    options: ["Konya", "Sivas", "Ankara", "Van"],
    answer: 0
  },
  {
    q: "Uzaya çıkan ilk insan kimdir?",
    options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Valentina Tereshkova"],
    answer: 1
  },
  {
    q: "İlk çağ uygarlıklarından hangisi piramitleriyle ünlüdür?",
    options: ["Sümerler", "Mısırlılar", "Hititler", "Urartular"],
    answer: 1
  },
  {
    q: "Türkiye’nin kuzeyinde hangi deniz bulunur?",
    options: ["Akdeniz", "Ege", "Karadeniz", "Marmara"],
    answer: 2
  },
  {
    q: "Rönesans hangi ülkede başlamıştır?",
    options: ["Fransa", "İspanya", "İtalya", "Almanya"],
    answer: 2
  },
  {
    q: "Türkiye’nin nüfusu en az olan ili hangisidir?",
    options: ["Bayburt", "Tunceli", "Ardahan", "Gümüşhane"],
    answer: 0
  },
  {
    q: "Kâğıdı kim bulmuştur?",
    options: ["Türkler", "Çinliler", "Yunanlılar", "Araplar"],
    answer: 1
  },
  {
    q: "Türkiye’nin doğusunda hangi ülke yoktur?",
    options: ["İran", "Gürcistan", "Ermenistan", "Yunanistan"],
    answer: 3
  }
];
// 51–100
  {
    q: "Türk Dil Kurumu hangi yıl kurulmuştur?",
    options: ["1928", "1932", "1935", "1940"],
    answer: 1
  },
  {
    q: "Türkiye’nin en büyük yüzölçümüne sahip gölü hangisidir?",
    options: ["Tuz Gölü", "Van Gölü", "Beyşehir Gölü", "Eğirdir Gölü"],
    answer: 1
  },
  {
    q: "İlk çağ uygarlıklarından hangisi tekerleği icat etmiştir?",
    options: ["Sümerler", "Mısırlılar", "Hititler", "Urartular"],
    answer: 0
  },
  {
    q: "Türkiye’nin milli marşı hangisidir?",
    options: ["Onuncu Yıl Marşı", "İzmir Marşı", "İstiklal Marşı", "Mehter Marşı"],
    answer: 2
  },
  {
    q: "Türkiye’nin en yüksek şelalesi hangisidir?",
    options: ["Manavgat", "Muradiye", "Tortum", "Tomara"],
    answer: 2
  },
  {
    q: "Türk bayrağındaki yıldızın kaç köşesi vardır?",
    options: ["4", "5", "6", "8"],
    answer: 1
  },
  {
    q: "Avrupa Birliği’nin merkezi nerededir?",
    options: ["Paris", "Brüksel", "Berlin", "Roma"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın pilotu kimdir?",
    options: ["Sabiha Gökçen", "Halide Edip", "Afet İnan", "Keriman Halis"],
    answer: 0
  },
  {
    q: "Türk lirasından 6 sıfır hangi yıl atılmıştır?",
    options: ["2001", "2003", "2005", "2008"],
    answer: 2
  },
  {
    q: "Türkiye’nin en büyük adası hangisidir?",
    options: ["Bozcaada", "Gökçeada", "Kıbrıs", "Marmara Adası"],
    answer: 1
  },

  {
    q: "İlk Türk kadın tiyatro oyuncusu kimdir?",
    options: ["Afife Jale", "Haldun Taner", "Gülriz Sururi", "Yıldız Kenter"],
    answer: 0
  },
  {
    q: "Türkiye’nin batısında hangi deniz vardır?",
    options: ["Marmara", "Karadeniz", "Akdeniz", "Ege"],
    answer: 3
  },
  {
    q: "İlk bilgisayarın adı nedir?",
    options: ["ENIAC", "Windows", "Macintosh", "Atari"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın milletvekilleri hangi yılda seçilmiştir?",
    options: ["1930", "1934", "1938", "1945"],
    answer: 1
  },
  {
    q: "Türkiye’nin en uzun köprüsü hangisidir?",
    options: ["Yavuz Sultan Selim", "1915 Çanakkale", "Boğaziçi", "Osmangazi"],
    answer: 1
  },
  {
    q: "En çok konuşulan dil hangisidir?",
    options: ["İngilizce", "Çince", "İspanyolca", "Arapça"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk üniversitesi hangisidir?",
    options: ["İstanbul Üniversitesi", "Ankara Üniversitesi", "ODTÜ", "Boğaziçi Üniversitesi"],
    answer: 0
  },
  {
    q: "Hangi şehir iki kıtada yer alır?",
    options: ["İzmir", "Ankara", "İstanbul", "Bursa"],
    answer: 2
  },
  {
    q: "Türkiye’nin en büyük barajı hangisidir?",
    options: ["Atatürk Barajı", "Keban Barajı", "Hirfanlı Barajı", "Ilısu Barajı"],
    answer: 0
  },
  {
    q: "Ay’a ilk ayak basan insan kimdir?",
    options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"],
    answer: 1
  },

  {
    q: "Türkiye’nin en yüksek platosu hangisidir?",
    options: ["Erzurum-Kars", "Obruk", "Taşeli", "Yazılıkaya"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın öğretmeni kimdir?",
    options: ["Refet Angın", "Sabiha Gökçen", "Afet İnan", "Halide Edip"],
    answer: 0
  },
  {
    q: "Kutup ayıları nerede yaşar?",
    options: ["Güney Kutbu", "Kuzey Kutbu", "Sibirya", "Kanada"],
    answer: 1
  },
  {
    q: "Türkiye’nin en eski camisi hangisidir?",
    options: ["Ulu Cami (Diyarbakır)", "Ayasofya", "Süleymaniye", "Selimiye"],
    answer: 0
  },
  {
    q: "İlk Türk parası hangi devlet tarafından basılmıştır?",
    options: ["Göktürkler", "Uygurlar", "Selçuklular", "Osmanlılar"],
    answer: 1
  },
  {
    q: "Türkiye’nin en büyük milli parkı hangisidir?",
    options: ["Beydağları", "Munzur", "Ağrı Dağı", "Kızıldağ"],
    answer: 2
  },
  {
    q: "En uzun insan ömrü kaç yıldır?",
    options: ["110", "115", "122", "130"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk özel televizyon kanalı hangisidir?",
    options: ["Kanal D", "Show TV", "Star TV", "ATV"],
    answer: 2
  },
  {
    q: "Türkiye’nin en kuzeyindeki ili hangisidir?",
    options: ["Sinop", "Samsun", "Trabzon", "Rize"],
    answer: 0
  },
  {
    q: "Kutup yıldızı hangi yönde bulunur?",
    options: ["Güney", "Doğu", "Kuzey", "Batı"],
    answer: 2
  },

  {
    q: "Türkiye’nin ilk romanı hangisidir?",
    options: ["Araba Sevdası", "Taaşşuk-ı Talat ve Fitnat", "Aşk-ı Memnu", "İntibah"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk havaalanı hangisidir?",
    options: ["Yeşilköy", "Esenboğa", "Sabiha Gökçen", "Adnan Menderes"],
    answer: 0
  },
  {
    q: "Dünyanın en hızlı treni hangi ülkededir?",
    options: ["Japonya", "Fransa", "Çin", "Almanya"],
    answer: 2
  },
  {
    q: "Türkiye’nin en büyük körfezi hangisidir?",
    options: ["İzmit", "İzmir", "Antalya", "Gökova"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın başbakanı kimdir?",
    options: ["Tansu Çiller", "Sabiha Gökçen", "Afet İnan", "Türkan Saylan"],
    answer: 0
  },
  {
    q: "Türkiye’nin en sıcak ili hangisidir?",
    options: ["Adana", "Şanlıurfa", "Antalya", "Mardin"],
    answer: 1
  },
  {
    q: "Türkiye’nin en soğuk ili hangisidir?",
    options: ["Kars", "Erzurum", "Ağrı", "Ardahan"],
    answer: 1
  },
  {
    q: "İlk çağ uygarlıklarından hangisi yazıyı icat etmiştir?",
    options: ["Mısırlılar", "Hititler", "Sümerler", "Urartular"],
    answer: 2
  },
  {
    q: "Türkiye’nin en kalabalık ilçesi hangisidir?",
    options: ["Çankaya", "Bağcılar", "Küçükçekmece", "Esenyurt"],
    answer: 3
  },
  {
    q: "Türkiye’nin en büyük doğal gölü hangisidir?",
    options: ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü"],
    answer: 0
  },

  {
    q: "Türkiye’nin ilk ulusal marşı hangisidir?",
    options: ["İzmir Marşı", "İstiklal Marşı", "Onuncu Yıl Marşı", "Mehter Marşı"],
    answer: 1
  },
  {
    q: "Türkiye’nin en çok yağış alan bölgesi hangisidir?",
    options: ["Marmara", "Akdeniz", "Karadeniz", "Ege"],
    answer: 2
  },
  {
    q: "En büyük Türk gölü hangisidir?",
    options: ["Beyşehir", "Tuz", "Van", "Eğirdir"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk kadın profesörü kimdir?",
    options: ["Afet İnan", "Halide Edip", "Feriha Baymur", "Sabiha Sertel"],
    answer: 0
  },
  {
    q: "Türkiye’nin en büyük yarımadası hangisidir?",
    options: ["Kapıdağ", "Sinop", "Datça", "Anadolu"],
    answer: 3
  },
  {
    q: "Türkiye’nin en büyük havaalanı hangisidir?",
    options: ["Esenboğa", "Sabiha Gökçen", "İstanbul Havalimanı", "Adnan Menderes"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk yerli otomobili nedir?",
    options: ["Anadol", "Tofaş", "Devrim", "TOGG"],
    answer: 2
  },
  {
    q: "Türkiye’nin en çok göl bulunan bölgesi hangisidir?",
    options: ["Ege", "Marmara", "Akdeniz", "İç Anadolu"],
    answer: 2
  },
  {
    q: "Türkiye’nin en kalabalık köyü hangisidir?",
    options: ["Yusufeli", "Mollaköy", "Derecik", "Köyceğiz"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk kadın tiyatro oyuncusu kimdir?",
    options: ["Afife Jale", "Yıldız Kenter", "Gülriz Sururi", "Türkan Şoray"],
    answer: 0
  }
// 101–150
  {
    q: "Türkiye’nin ilk kadın savaş pilotu kimdir?",
    options: ["Sabiha Gökçen", "Afet İnan", "Halide Edip", "Türkan Saylan"],
    answer: 0
  },
  {
    q: "Dünyanın en büyük adası hangisidir?",
    options: ["Madagaskar", "Borneo", "Grönland", "Sumatra"],
    answer: 2
  },
  {
    q: "Türkçe hangi dil ailesine aittir?",
    options: ["Arap", "Hint-Avrupa", "Ural-Altay", "Çin-Tibet"],
    answer: 2
  },
  {
    q: "Türkiye’nin en büyük kömür rezervi hangi ildedir?",
    options: ["Zonguldak", "Manisa", "Kütahya", "Afşin-Elbistan"],
    answer: 3
  },
  {
    q: "Dünyada en çok konuşulan ikinci dil hangisidir?",
    options: ["İngilizce", "Çince", "İspanyolca", "Arapça"],
    answer: 0
  },
  {
    q: "Türkiye’nin en eski üniversitesi hangisidir?",
    options: ["Ankara Üniversitesi", "İstanbul Üniversitesi", "Ege Üniversitesi", "ODTÜ"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın doktoru kimdir?",
    options: ["Besim Ömer Akalın", "Safiye Ali", "Afet İnan", "Refet Angın"],
    answer: 1
  },
  {
    q: "Dünyanın en büyük şelalesi hangisidir?",
    options: ["Niagara", "Victoria", "Angel", "Iguazu"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk yerli arabası nedir?",
    options: ["TOGG", "Devrim", "Anadol", "Toros"],
    answer: 1
  },
  {
    q: "Osmanlı Devleti’nin kurucusu kimdir?",
    options: ["Orhan Gazi", "Osman Gazi", "Fatih Sultan Mehmet", "Yavuz Sultan Selim"],
    answer: 1
  },

  {
    q: "Türkiye’nin en çok nüfus yoğunluğu olan ili hangisidir?",
    options: ["İstanbul", "Ankara", "Kocaeli", "Bursa"],
    answer: 0
  },
  {
    q: "Türk edebiyatında ilk realist roman hangisidir?",
    options: ["Araba Sevdası", "İntibah", "Mai ve Siyah", "Eylül"],
    answer: 0
  },
  {
    q: "Türkiye’nin en büyük ovası hangisidir?",
    options: ["Çukurova", "Harran", "Konya Ovası", "Erzurum Ovası"],
    answer: 2
  },
  {
    q: "Türkiye’nin en eski tiyatro binası hangisidir?",
    options: ["Darülbedayi", "Naum Tiyatrosu", "AFM", "Cemal Reşit Rey"],
    answer: 1
  },
  {
    q: "Türkçe’de kaç harf vardır?",
    options: ["28", "29", "30", "31"],
    answer: 1
  },
  {
    q: "Türkiye’nin en büyük dağı hangisidir?",
    options: ["Kaçkar", "Erciyes", "Ağrı Dağı", "Toros"],
    answer: 2
  },
  {
    q: "Dünyanın en uzun sınırına sahip iki ülke hangisidir?",
    options: ["ABD-Kanada", "Rusya-Çin", "Arjantin-Brezilya", "Hindistan-Pakistan"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın köy öğretmeni kimdir?",
    options: ["Refet Angın", "Safiye Ali", "Sabiha Gökçen", "Satı Kadın"],
    answer: 3
  },
  {
    q: "Türkiye’nin ilk radyosu hangi yılda açılmıştır?",
    options: ["1927", "1930", "1935", "1940"],
    answer: 0
  },
  {
    q: "Dünyanın en büyük çölü hangisidir?",
    options: ["Gobi", "Sahra", "Antarktika", "Karakum"],
    answer: 2
  },

  {
    q: "Türkiye’nin en doğusundaki noktası hangi ildir?",
    options: ["Van", "Hakkari", "Iğdır", "Kars"],
    answer: 2
  },
  {
    q: "Dünyanın en küçük ülkesi hangisidir?",
    options: ["Monako", "Vatikan", "San Marino", "Andorra"],
    answer: 1
  },
  {
    q: "Türkiye’nin en yüksek rakımlı şehri hangisidir?",
    options: ["Erzurum", "Kars", "Sivas", "Bayburt"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın başbakanı kimdir?",
    options: ["Tansu Çiller", "Meral Akşener", "Türkan Saylan", "Safiye Ali"],
    answer: 0
  },
  {
    q: "Türk tiyatrosunun kurucusu kimdir?",
    options: ["Namık Kemal", "Ahmet Vefik Paşa", "Şinasi", "Haldun Taner"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk televizyon yayını hangi yılda başlamıştır?",
    options: ["1960", "1965", "1968", "1970"],
    answer: 2
  },
  {
    q: "En kalabalık kıta hangisidir?",
    options: ["Avrupa", "Afrika", "Asya", "Amerika"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk anayasası hangisidir?",
    options: ["Kanun-i Esasi", "Teşkilat-ı Esasiye", "1924 Anayasası", "1961 Anayasası"],
    answer: 0
  },
  {
    q: "Dünya’nın en büyük hayvanı hangisidir?",
    options: ["Fil", "Mavi Balina", "Köpekbalığı", "Dev Kaplumbağa"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın belediye başkanı kimdir?",
    options: ["Müfide İlhan", "Afet İnan", "Refet Angın", "Halide Edip"],
    answer: 0
  },

  {
    q: "Dünyanın en uzun nehri hangisidir?",
    options: ["Amazon", "Nil", "Ganj", "Mississippi"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın gazetecisi kimdir?",
    options: ["Afet İnan", "Sabiha Sertel", "Halide Nusret", "Nezihe Muhiddin"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk spor kulübü hangisidir?",
    options: ["Fenerbahçe", "Galatasaray", "Beşiktaş", "Altay"],
    answer: 2
  },
  {
    q: "Dünya’nın en kalabalık şehri hangisidir?",
    options: ["Şangay", "Tokyo", "Delhi", "İstanbul"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk opera sanatçısı kimdir?",
    options: ["Afife Jale", "Semiha Berksoy", "Leyla Gencer", "Gülriz Sururi"],
    answer: 1
  },
  {
    q: "Türkiye’nin en çok göç alan ili hangisidir?",
    options: ["Ankara", "Antalya", "İstanbul", "İzmir"],
    answer: 2
  },
  {
    q: "İlk Nobel ödüllü Türk kimdir?",
    options: ["Aziz Sancar", "Orhan Pamuk", "Yaşar Kemal", "Halide Edip"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın profesörü kimdir?",
    options: ["Afet İnan", "Halet Çambel", "Remziye Hisar", "Feriha Baymur"],
    answer: 2
  },
  {
    q: "Dünyanın en büyük volkanı hangisidir?",
    options: ["Kilauea", "Mauna Loa", "Etna", "Fuji"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk özel bankası hangisidir?",
    options: ["İş Bankası", "Garanti", "Akbank", "Yapı Kredi"],
    answer: 0
  },

  {
    q: "Türkiye’nin en yüksek ikinci dağı hangisidir?",
    options: ["Cilo", "Erciyes", "Süphan", "Kaçkar"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk kadın heykeltıraşı kimdir?",
    options: ["Sabiha Sertel", "Yıldız Moran", "Sabiha Bengütaş", "Afife Jale"],
    answer: 2
  },
  {
    q: "Dünyanın en hızlı deniz memelisi hangisidir?",
    options: ["Orka", "Yunus", "Kılıçbalığı", "Mavi Balina"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk milli parkı hangisidir?",
    options: ["Köprülü Kanyon", "Yozgat Çamlığı", "Uludağ", "Munzur"],
    answer: 1
  },
  {
    q: "Türkiye’nin en büyük limanı hangisidir?",
    options: ["Mersin", "İzmir", "Haydarpaşa", "Ambarlı"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın ressamı kimdir?",
    options: ["Hale Asaf", "Fahrelnissa Zeid", "Müfide Kadri", "Semiha Berksoy"],
    answer: 2
  },
  {
    q: "Türkiye’nin en büyük futbol stadyumu hangisidir?",
    options: ["Atatürk Olimpiyat", "Ali Sami Yen", "Şükrü Saracoğlu", "Vodafone Park"],
    answer: 0
  },
  {
    q: "Türkiye’nin en eski medeniyeti hangisidir?",
    options: ["Hititler", "Sümerler", "Urartular", "Frigler"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın dışişleri bakanı kimdir?",
    options: ["Meral Akşener", "Tansu Çiller", "Emine Çolak", "Fatma Şahin"],
    answer: 1
  },
  {
    q: "Dünya Sağlık Örgütü’nün merkezi nerededir?",
    options: ["Paris", "Londra", "Cenevre", "Roma"],
    answer: 2
  }
// 151–200
  {
    q: "Türkiye’nin ilk kadın avukatı kimdir?",
    options: ["Süreyya Ağaoğlu", "Halide Edip", "Afet İnan", "Türkan Saylan"],
    answer: 0
  },
  {
    q: "Dünyanın en büyük okyanusu hangisidir?",
    options: ["Atlas", "Hint", "Büyük Okyanus", "Arktik"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk milli uçağı hangisidir?",
    options: ["Hürkuş", "ATAK", "Devrim", "Vecihi K-VI"],
    answer: 3
  },
  {
    q: "Türkiye’nin en uzun mağarası hangisidir?",
    options: ["İnsuyu", "Karain", "Pınargözü", "Damlataş"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk kadın dekanı kimdir?",
    options: ["Safiye Ali", "Remziye Hisar", "Prof. Dr. Nermin Abadan Unat", "Müfide İlhan"],
    answer: 2
  },
  {
    q: "Dünyanın en büyük kıtası hangisidir?",
    options: ["Afrika", "Asya", "Avrupa", "Amerika"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk yerli tankı hangisidir?",
    options: ["Altay", "Panter", "M60", "Süvari"],
    answer: 0
  },
  {
    q: "Türkiye’nin en yüksek şelalesi hangisidir?",
    options: ["Tortum", "Muradiye", "Manavgat", "Kapuzbaşı"],
    answer: 3
  },
  {
    q: "Türkiye’nin ilk kadın öğretmenlerinden biri kimdir?",
    options: ["Refet Angın", "Satı Kadın", "Sabiha Gökçen", "Afife Jale"],
    answer: 1
  },
  {
    q: "Dünya’nın en büyük gölü hangisidir?",
    options: ["Hazar", "Tuz Gölü", "Van", "Beyşehir"],
    answer: 0
  },

  {
    q: "Türkiye’nin ilk kadın bakanı kimdir?",
    options: ["Müfide İlhan", "Türkan Akyol", "Tansu Çiller", "Afet İnan"],
    answer: 1
  },
  {
    q: "Dünyanın en kalabalık kıtası hangisidir?",
    options: ["Afrika", "Asya", "Avrupa", "Amerika"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın muhtarı kimdir?",
    options: ["Gül Esin", "Satı Kadın", "Refet Angın", "Sabiha Gökçen"],
    answer: 0
  },
  {
    q: "Türkiye’nin en uzun tüneli hangisidir?",
    options: ["Ovit", "Zigana", "Boluca", "Ilgaz"],
    answer: 0
  },
  {
    q: "Dünya’nın en hızlı kuşu hangisidir?",
    options: ["Şahin", "Kartal", "Doğan", "Güvercin"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk kadın vali yardımcısı kimdir?",
    options: ["Lale Aytaman", "Nuriye Akman", "Sabiha Bengütaş", "Afet İnan"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın ilahiyat profesörü kimdir?",
    options: ["Sabiha Sertel", "Huriye Martı", "Prof. Dr. Suat Yıldırım", "Afife Jale"],
    answer: 1
  },
  {
    q: "Dünya’nın en büyük adası hangisidir?",
    options: ["Borneo", "Grönland", "Madagaskar", "Sumatra"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın belediye başkanı kimdir?",
    options: ["Müfide İlhan", "Afet İnan", "Refet Angın", "Safiye Ali"],
    answer: 0
  },
  {
    q: "Türkiye’nin en yüksek barajı hangisidir?",
    options: ["Deriner", "Atatürk", "Keban", "Ilısu"],
    answer: 0
  },

  {
    q: "Dünyanın en büyük nehri hangisidir?",
    options: ["Nil", "Amazon", "Ganj", "Mississippi"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın milletvekili kimdir?",
    options: ["Satı Kadın", "Afet İnan", "Şükûfe Nihal", "Mebrure Gönenç"],
    answer: 0
  },
  {
    q: "Türkiye’nin en büyük adası hangisidir?",
    options: ["Bozcaada", "Gökçeada", "Marmara", "Avşa"],
    answer: 1
  },
  {
    q: "Dünya’nın en hızlı kara hayvanı hangisidir?",
    options: ["Ceylan", "Leopar", "Çita", "Aslan"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk kadın belediye meclis üyesi kimdir?",
    options: ["Benal Nevzat İstar Arıman", "Afet İnan", "Sabiha Gökçen", "Refet Angın"],
    answer: 0
  },
  {
    q: "Türkiye’nin en büyük adası hangisidir?",
    options: ["Gökçeada", "Bozcaada", "Kıbrıs", "Marmara"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın büyükelçisi kimdir?",
    options: ["Filiz Dinçmen", "Emine Çolak", "Tansu Çiller", "Safiye Ali"],
    answer: 0
  },
  {
    q: "Dünya’nın en yüksek dağı hangisidir?",
    options: ["Kilimanjaro", "Everest", "Ağrı", "Elbruz"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın başsavcısı kimdir?",
    options: ["Emine Ayna", "Hale Asaf", "Yıldız Moran", "Sevilay Çelenk"],
    answer: 0
  },
  {
    q: "Türkiye’nin en büyük gölü hangisidir?",
    options: ["Van", "Tuz", "Beyşehir", "Eğirdir"],
    answer: 0
  },

  {
    q: "Dünya’nın en kalabalık ülkesi hangisidir?",
    options: ["Hindistan", "Çin", "ABD", "Endonezya"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın vali kimdir?",
    options: ["Lale Aytaman", "Müfide İlhan", "Afet İnan", "Sabiha Bengütaş"],
    answer: 0
  },
  {
    q: "Türkiye’nin en büyük camisi hangisidir?",
    options: ["Çamlıca Camii", "Süleymaniye", "Ayasofya", "Selimiye"],
    answer: 0
  },
  {
    q: "Dünya’nın en uzun demiryolu hangisidir?",
    options: ["Trans Sibirya", "Orient Express", "İpek Yolu", "Berlin-Bağdat"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın kaymakamı kimdir?",
    options: ["Refet Angın", "Gül Esin", "Ayşe Sıdıka Hanım", "Lale Aytaman"],
    answer: 2
  },
  {
    q: "Türkiye’nin en büyük yarımadası hangisidir?",
    options: ["Anadolu", "Kapıdağ", "Sinop", "Datça"],
    answer: 0
  },
  {
    q: "Dünya’nın en büyük adası hangisidir?",
    options: ["Grönland", "Borneo", "Madagaskar", "Sumatra"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın profesörlerinden biri kimdir?",
    options: ["Remziye Hisar", "Afet İnan", "Safiye Ali", "Lale Aytaman"],
    answer: 0
  },
  {
    q: "Türkiye’nin en yüksek dağı hangisidir?",
    options: ["Ağrı", "Erciyes", "Süphan", "Kaçkar"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın sendika başkanı kimdir?",
    options: ["Behice Boran", "Nermin Neftçi", "Fatma Seher Erden", "Zehra Kosova"],
    answer: 3
  }
// 201–250
  {
    q: "Türkiye’nin ilk kadın profesörlerinden biri kimdir?",
    options: ["Remziye Hisar", "Afet İnan", "Safiye Ali", "Halet Çambel"],
    answer: 0
  },
  {
    q: "Dünyanın en büyük kıtası hangisidir?",
    options: ["Afrika", "Asya", "Avrupa", "Amerika"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın hakimi kimdir?",
    options: ["Samiye Cahid Morkaya", "Sabiha Bengütaş", "Afife Jale", "Refet Angın"],
    answer: 0
  },
  {
    q: "Türkiye’nin en uzun köprüsü hangisidir?",
    options: ["1915 Çanakkale", "Yavuz Sultan Selim", "Boğaziçi", "Osmangazi"],
    answer: 0
  },
  {
    q: "Dünyanın en yüksek şelalesi hangisidir?",
    options: ["Niagara", "Angel", "Victoria", "Iguazu"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın belediye başkanı kimdir?",
    options: ["Müfide İlhan", "Afet İnan", "Sabiha Gökçen", "Satı Kadın"],
    answer: 0
  },
  {
    q: "Türkiye’nin en kuzey noktası neresidir?",
    options: ["Sinop İnceburun", "Hopa", "Trabzon", "Rize"],
    answer: 0
  },
  {
    q: "Dünyanın en kalabalık şehri hangisidir?",
    options: ["Şangay", "Tokyo", "Delhi", "New York"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın tiyatro sanatçısı kimdir?",
    options: ["Afife Jale", "Semiha Berksoy", "Yıldız Kenter", "Gülriz Sururi"],
    answer: 0
  },
  {
    q: "Türkiye’nin en batı noktası neresidir?",
    options: ["Gökçeada", "Bozcaada", "İzmir", "Edirne"],
    answer: 0
  },

  {
    q: "Dünya’nın en büyük çölü hangisidir?",
    options: ["Sahra", "Gobi", "Karakum", "Antarktika"],
    answer: 3
  },
  {
    q: "Türkiye’nin ilk kadın tiyatro yazarı kimdir?",
    options: ["Halide Edip", "Nezihe Muhiddin", "Afife Jale", "Müfide Kadri"],
    answer: 0
  },
  {
    q: "Türkiye’nin en doğu noktası neresidir?",
    options: ["Iğdır-Aralık", "Hakkari", "Kars", "Van"],
    answer: 0
  },
  {
    q: "Dünyanın en uzun nehri hangisidir?",
    options: ["Amazon", "Nil", "Ganj", "Mississippi"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın pilotu kimdir?",
    options: ["Sabiha Gökçen", "Afet İnan", "Halide Edip", "Refet Angın"],
    answer: 0
  },
  {
    q: "Türkiye’nin en sıcak ili hangisidir?",
    options: ["Antalya", "Adana", "Şanlıurfa", "Mardin"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk kadın muhtarı kimdir?",
    options: ["Gül Esin", "Satı Kadın", "Refet Angın", "Safiye Ali"],
    answer: 0
  },
  {
    q: "Dünya’nın en hızlı kara hayvanı hangisidir?",
    options: ["Leopar", "Aslan", "Çita", "Ceylan"],
    answer: 2
  },
  {
    q: "Türkiye’nin en yüksek platosu hangisidir?",
    options: ["Obruk", "Yazılıkaya", "Erzurum-Kars", "Taşeli"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk kadın öğretmeni kimdir?",
    options: ["Refet Angın", "Safiye Ali", "Satı Kadın", "Afet İnan"],
    answer: 0
  },

  {
    q: "Dünya’nın en büyük adası hangisidir?",
    options: ["Grönland", "Borneo", "Madagaskar", "Sumatra"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın sendikacısı kimdir?",
    options: ["Zehra Kosova", "Behice Boran", "Nezihe Muhiddin", "Afet İnan"],
    answer: 0
  },
  {
    q: "Türkiye’nin en büyük gölü hangisidir?",
    options: ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü"],
    answer: 0
  },
  {
    q: "Dünya’nın en kalabalık ülkesi hangisidir?",
    options: ["Çin", "Hindistan", "ABD", "Endonezya"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın büyükelçisi kimdir?",
    options: ["Filiz Dinçmen", "Emine Çolak", "Lale Aytaman", "Afet İnan"],
    answer: 0
  },
  {
    q: "Türkiye’nin en büyük dağı hangisidir?",
    options: ["Erciyes", "Kaçkar", "Ağrı Dağı", "Süphan"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk kadın başsavcısı kimdir?",
    options: ["Sevilay Çelenk", "Fatma Seher Erden", "Emine Ayna", "Hale Asaf"],
    answer: 0
  },
  {
    q: "Türkiye’nin en yüksek barajı hangisidir?",
    options: ["Atatürk", "Deriner", "Keban", "Ilısu"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın profesörü kimdir?",
    options: ["Remziye Hisar", "Afet İnan", "Sabiha Bengütaş", "Lale Aytaman"],
    answer: 0
  },
  {
    q: "Dünya’nın en yüksek dağı hangisidir?",
    options: ["Ağrı", "Everest", "Elbruz", "Kilimanjaro"],
    answer: 1
  },

  {
    q: "Türkiye’nin ilk kadın köy öğretmeni kimdir?",
    options: ["Satı Kadın", "Refet Angın", "Safiye Ali", "Afet İnan"],
    answer: 0
  },
  {
    q: "Türkiye’nin en kalabalık ili hangisidir?",
    options: ["Ankara", "İstanbul", "İzmir", "Bursa"],
    answer: 1
  },
  {
    q: "Türkiye’nin ilk kadın profesörlerinden biri kimdir?",
    options: ["Afet İnan", "Remziye Hisar", "Safiye Ali", "Halet Çambel"],
    answer: 1
  },
  {
    q: "Dünya’nın en büyük okyanusu hangisidir?",
    options: ["Hint", "Atlas", "Arktik", "Büyük Okyanus"],
    answer: 3
  },
  {
    q: "Türkiye’nin ilk kadın milletvekili kimdir?",
    options: ["Satı Kadın", "Mebrure Gönenç", "Afet İnan", "Şükûfe Nihal"],
    answer: 0
  },
  {
    q: "Türkiye’nin en uzun nehri hangisidir?",
    options: ["Dicle", "Fırat", "Kızılırmak", "Sakarya"],
    answer: 2
  },
  {
    q: "Türkiye’nin ilk kadın pilotu kimdir?",
    options: ["Sabiha Gökçen", "Afet İnan", "Refet Angın", "Satı Kadın"],
    answer: 0
  },
  {
    q: "Türkiye’nin en çok yağış alan ili hangisidir?",
    options: ["Rize", "Trabzon", "Artvin", "Samsun"],
    answer: 0
  },
  {
    q: "Türkiye’nin ilk kadın başbakanı kimdir?",
    options: ["Tansu Çiller", "Meral Akşener", "Safiye Ali", "Lale Aytaman"],
    answer: 0
  },
  {
    q: "Türkiye’nin en çok göç alan ili hangisidir?",
    options: ["İzmir", "Ankara", "İstanbul", "Antalya"],
    answer: 2
  }
