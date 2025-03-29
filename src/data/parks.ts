export interface Park {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  established: string;
  area: string;
  elo: number;
}

// Data from Indonesian National Parks
// Source: https://id.wikipedia.org/wiki/Daftar_taman_nasional_di_Indonesia
export const parks: Park[] = [
  {
    "id": "bali-barat",
    "name": "Taman Nasional Bali Barat",
    "location": "Bali",
    "description": "Melindungi habitat liar terakhir jalak Bali yang terancam punah, dan mencakup ekosistem beragam dari hutan bakau hingga terumbu karang.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bali_Barat_National_Park_Bali_Indonesia.jpg/800px-Bali_Barat_National_Park_Bali_Indonesia.jpg",
    "established": "1984",
    "area": "190 km²",
    "elo": 1500
  },
  {
    "id": "gunung-rinjani",
    "name": "Taman Nasional Gunung Rinjani",
    "location": "Nusa Tenggara Barat",
    "description": "Menampilkan gunung berapi tertinggi kedua di Indonesia dengan danau kawah bernama Segara Anak.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mount_Rinjani_from_Senaru_crater_rim_at_sunset%2C_Lombok%2C_Indonesia.jpg/800px-Mount_Rinjani_from_Senaru_crater_rim_at_sunset%2C_Lombok%2C_Indonesia.jpg",
    "established": "1997",
    "area": "413 km²",
    "elo": 1500
  },
  {
    "id": "kelimutu",
    "name": "Taman Nasional Kelimutu",
    "location": "Nusa Tenggara Timur",
    "description": "Terkenal dengan tiga danau kawahnya yang berwarna berbeda dan berubah warna secara berkala karena oksidasi mineral.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kelimutu_2008-08-08.jpg/800px-Kelimutu_2008-08-08.jpg",
    "established": "1992",
    "area": "50 km²",
    "elo": 1500
  },
  {
    "id": "komodo",
    "name": "Taman Nasional Komodo",
    "location": "Nusa Tenggara Timur",
    "description": "Taman Nasional Komodo terkenal dengan komodo, kadal terbesar di dunia. Taman ini mencakup tiga pulau besar: Komodo, Padar, dan Rinca.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Komodo_dragon_%28Varanus_komodoensis%29.jpg/800px-Komodo_dragon_%28Varanus_komodoensis%29.jpg",
    "established": "1980",
    "area": "1.733 km²",
    "elo": 1500
  },
  {
    "id": "laiwangi-wanggameti",
    "name": "Laiwangi-Wanggameti",
    "location": "Nusa Tenggara Timur",
    "area": "470 km²",
    "established": "1998",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Laiwangi-Wanggameti",
    "description": "Laiwangi-Wanggameti adalah taman nasional yang terletak di Nusa Tenggara Timur, Indonesia.",
    "elo": 1500
  },
  {
    "id": "manupeu-tanah-daru",
    "name": "Manupeu-Tanah Daru",
    "location": "Nusa Tenggara Timur",
    "area": "880 km²",
    "established": "1998",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Manupeu-Tanah%20Daru",
    "description": "Manupeu-Tanah Daru adalah taman nasional yang terletak di Nusa Tenggara Timur, Indonesia.",
    "elo": 1500
  },
  {
    "id": "mutis-timau",
    "name": "Mutis Timau",
    "location": "Nusa Tenggara Timur",
    "area": "788 km²",
    "established": "2023",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Mutis%20Timau",
    "description": "Mutis Timau adalah taman nasional yang terletak di 2024, Indonesia.",
    "elo": 1500
  },
  {
    "id": "tambora",
    "name": "Tambora",
    "location": "Nusa Tenggara Barat",
    "area": "716 km²",
    "established": "2015",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Tambora",
    "description": "Tambora adalah taman nasional yang terletak di Nusa Tenggara Barat, Indonesia.",
    "elo": 1500
  },
  {
    "id": "moyo-satonda",
    "name": "Moyo Satonda",
    "location": "Nusa Tenggara Barat",
    "area": "312 km²",
    "established": "2022",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Moyo%20Satonda",
    "description": "Moyo Satonda adalah taman nasional yang terletak di Nusa Tenggara Barat, Indonesia.",
    "elo": 1500
  },
  {
    "id": "alas-purwo",
    "name": "Alas Purwo",
    "location": "Jawa Timur",
    "area": "434 km²",
    "established": "1992",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Alas%20Purwo",
    "description": "Alas Purwo adalah taman nasional yang terletak di Jawa Timur, Indonesia.",
    "elo": 1500
  },
  {
    "id": "baluran",
    "name": "Baluran",
    "location": "Jawa Timur",
    "area": "250 km²",
    "established": "1980",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Baluran",
    "description": "Baluran adalah taman nasional yang terletak di Jawa Timur, Indonesia.",
    "elo": 1500
  },
  {
    "id": "bromo-tengger-semeru",
    "name": "Taman Nasional Bromo Tengger Semeru",
    "location": "Jawa Timur",
    "description": "Taman nasional ini terkenal dengan lanskap vulkaniknya termasuk Gunung Bromo dan Gunung Semeru, gunung tertinggi di Jawa.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mt_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg/800px-Mt_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg",
    "established": "1982",
    "area": "503 km²",
    "elo": 1500
  },
  {
    "id": "gunung-ciremai",
    "name": "Gunung Ciremai",
    "location": "Jawa Barat",
    "area": "155 km²",
    "established": "2004",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Gunung%20Ciremai",
    "description": "Gunung Ciremai adalah taman nasional yang terletak di Jawa Barat, Indonesia.",
    "elo": 1500
  },
  {
    "id": "gunung-gede-pangrango",
    "name": "Gunung Gede Pangrango",
    "location": "Jawa Barat",
    "area": "150 km²",
    "established": "1980",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Gunung%20Gede%20Pangrango",
    "description": "Gunung Gede Pangrango adalah taman nasional yang terletak di Jawa Barat, Indonesia.",
    "elo": 1500
  },
  {
    "id": "gunung-halimun-salak",
    "name": "Gunung Halimun-Salak",
    "location": "Jawa Barat",
    "area": "400 km²",
    "established": "1992",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Gunung%20Halimun-Salak",
    "description": "Gunung Halimun-Salak adalah taman nasional yang terletak di Jawa Barat, Indonesia.",
    "elo": 1500
  },
  {
    "id": "gunung-merapi",
    "name": "Gunung Merapi",
    "location": "Jawa Tengah dan DI Yogyakarta",
    "area": "64 km²",
    "established": "2004",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Gunung%20Merapi",
    "description": "Gunung Merapi adalah taman nasional yang terletak di Jawa Tengah dan DI Yogyakarta, Indonesia.",
    "elo": 1500
  },
  {
    "id": "gunung-merbabu",
    "name": "Gunung Merbabu",
    "location": "Jawa Tengah",
    "area": "57 km²",
    "established": "2004",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Gunung%20Merbabu",
    "description": "Gunung Merbabu adalah taman nasional yang terletak di Jawa Tengah, Indonesia.",
    "elo": 1500
  },
  {
    "id": "karimunjawa",
    "name": "Karimunjawa",
    "location": "Jawa Tengah",
    "area": "1.116 km²",
    "established": "2001",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Karimunjawa",
    "description": "Karimunjawa adalah taman nasional yang terletak di 1986, Indonesia.",
    "elo": 1500
  },
  {
    "id": "kepulauan-seribu",
    "name": "Kepulauan Seribu",
    "location": "DKI Jakarta",
    "area": "1.080 km²",
    "established": "2002",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Kepulauan%20Seribu",
    "description": "Kepulauan Seribu adalah taman nasional yang terletak di 1982, Indonesia.",
    "elo": 1500
  },
  {
    "id": "meru-betiri",
    "name": "Meru Betiri",
    "location": "Jawa Timur",
    "area": "580 km²",
    "established": "1982",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Meru%20Betiri",
    "description": "Meru Betiri adalah taman nasional yang terletak di 1997, Indonesia.",
    "elo": 1500
  },
  {
    "id": "ujung-kulon",
    "name": "Taman Nasional Ujung Kulon",
    "location": "Banten",
    "description": "Rumah bagi populasi terakhir badak jawa, taman ini mencakup semenanjung Ujung Kulon dan beberapa pulau lepas pantai.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Javan_rhino_from_Ujung_Kulon_National_Park.jpg/800px-Javan_rhino_from_Ujung_Kulon_National_Park.jpg",
    "established": "1992",
    "area": "1.206 km²",
    "elo": 1500
  },
  {
    "id": "betung-kerihun",
    "name": "Betung Kerihun",
    "location": "Kalimantan Barat",
    "area": "8,000 km²",
    "established": "1995",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Betung%20Kerihun",
    "description": "Betung Kerihun adalah taman nasional yang terletak di Kalimantan Barat, Indonesia.",
    "elo": 1500
  },
  {
    "id": "bukit-baka-bukit-raya",
    "name": "Bukit Baka Bukit Raya",
    "location": "Kalimantan Barat dan Kalimantan Tengah",
    "area": "1.811 km²",
    "established": "1992",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Bukit%20Baka%20Bukit%20Raya",
    "description": "Bukit Baka Bukit Raya adalah taman nasional yang terletak di Kalimantan Barat dan Kalimantan Tengah, Indonesia.",
    "elo": 1500
  },
  {
    "id": "danau-sentarum",
    "name": "Danau Sentarum",
    "location": "Kalimantan Barat",
    "area": "1.320 km²",
    "established": "1999",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Danau%20Sentarum",
    "description": "Danau Sentarum adalah taman nasional yang terletak di Kalimantan Barat, Indonesia.",
    "elo": 1500
  },
  {
    "id": "gunung-palung",
    "name": "Gunung Palung",
    "location": "Kalimantan Barat",
    "area": "900 km²",
    "established": "1990",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Gunung%20Palung",
    "description": "Gunung Palung adalah taman nasional yang terletak di Kalimantan Barat, Indonesia.",
    "elo": 1500
  },
  {
    "id": "kayan-mentarang",
    "name": "Kayan Mentarang",
    "location": "Kalimantan Utara",
    "area": "13.605 km²",
    "established": "1996",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Kayan%20Mentarang",
    "description": "Kayan Mentarang adalah taman nasional yang terletak di Kalimantan Utara, Indonesia.",
    "elo": 1500
  },
  {
    "id": "kutai",
    "name": "Kutai",
    "location": "Kalimantan Timur",
    "area": "1.986 km²",
    "established": "1982",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Kutai",
    "description": "Kutai adalah taman nasional yang terletak di Kalimantan Timur, Indonesia.",
    "elo": 1500
  },
  {
    "id": "sebangau",
    "name": "Sebangau",
    "location": "Kalimantan Tengah",
    "area": "5.687 km²",
    "established": "2004",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Sebangau",
    "description": "Sebangau adalah taman nasional yang terletak di Kalimantan Tengah, Indonesia.",
    "elo": 1500
  },
  {
    "id": "tanjung-puting",
    "name": "Taman Nasional Tanjung Puting",
    "location": "Kalimantan Tengah",
    "description": "Terkenal dengan konservasi dan penelitian orangutan di Camp Leakey.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Orangutan_Tanjung_Puting.jpg/800px-Orangutan_Tanjung_Puting.jpg",
    "established": "1982",
    "area": "4.150 km²",
    "elo": 1500
  },
  {
    "id": "aketajawe-lolobata",
    "name": "Aketajawe-Lolobata",
    "location": "Maluku Utara",
    "area": "1.673 km²",
    "established": "2004",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Aketajawe-Lolobata",
    "description": "Aketajawe-Lolobata adalah taman nasional yang terletak di Maluku Utara, Indonesia.",
    "elo": 1500
  },
  {
    "id": "lorentz",
    "name": "Taman Nasional Lorentz",
    "location": "Papua",
    "description": "Kawasan lindung terbesar di Asia Tenggara, menampilkan berbagai ekosistem dari gletser hingga lingkungan laut tropis.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Puncak_Jaya_icecap_mapped_by_IKONOS.jpg/800px-Puncak_Jaya_icecap_mapped_by_IKONOS.jpg",
    "established": "1997",
    "area": "25.056 km²",
    "elo": 1500
  },
  {
    "id": "mamberamo-foja",
    "name": "Mamberamo Foja",
    "location": "Papua",
    "area": "? km²",
    "established": "2013",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Mamberamo%20Foja",
    "description": "Mamberamo Foja adalah taman nasional yang terletak di 2024, Indonesia.",
    "elo": 1500
  },
  {
    "id": "manusela",
    "name": "Manusela",
    "location": "Maluku",
    "area": "1.890 km²",
    "established": "1997",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Manusela",
    "description": "Manusela adalah taman nasional yang terletak di 1982, Indonesia.",
    "elo": 1500
  },
  {
    "id": "teluk-cenderawasih",
    "name": "Teluk Cenderawasih",
    "location": "Papua Barat dan Papua",
    "area": "14.535 km²",
    "established": "2002",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Teluk%20Cenderawasih",
    "description": "Teluk Cenderawasih adalah taman nasional yang terletak di Papua Barat dan Papua, Indonesia.",
    "elo": 1500
  },
  {
    "id": "wasur",
    "name": "Wasur",
    "location": "Papua",
    "area": "4.138 km²",
    "established": "1997",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Wasur",
    "description": "Wasur adalah taman nasional yang terletak di 1990, Indonesia.",
    "elo": 1500
  },
  {
    "id": "bantimurung-bulusaraung",
    "name": "Bantimurung-Bulusaraung",
    "location": "Sulawesi Selatan",
    "area": "437.5 km²",
    "established": "2004",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Bantimurung-Bulusaraung",
    "description": "Bantimurung-Bulusaraung adalah taman nasional yang terletak di Sulawesi Selatan, Indonesia.",
    "elo": 1500
  },
  {
    "id": "bogani-nani-wartabone",
    "name": "Bogani Nani Wartabone",
    "location": "Sulawesi Utara dan Gorontalo",
    "area": "2.871 km²",
    "established": "1991",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Bogani%20Nani%20Wartabone",
    "description": "Bogani Nani Wartabone adalah taman nasional yang terletak di Sulawesi Utara dan Gorontalo, Indonesia.",
    "elo": 1500
  },
  {
    "id": "bunaken",
    "name": "Taman Nasional Bunaken",
    "location": "Sulawesi Utara",
    "description": "Taman laut yang terkenal dengan ekosistem terumbu karang dan keanekaragaman hayati yang kaya, populer untuk menyelam dan snorkeling.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Bunaken_turtle.jpg/800px-Bunaken_turtle.jpg",
    "established": "1991",
    "area": "890 km²",
    "elo": 1500
  },
  {
    "id": "kepulauan-togean",
    "name": "Kepulauan Togean",
    "location": "Sulawesi Tengah",
    "area": "3.620 km²",
    "established": "2004",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Kepulauan%20Togean",
    "description": "Kepulauan Togean adalah taman nasional yang terletak di Sulawesi Tengah, Indonesia.",
    "elo": 1500
  },
  {
    "id": "lore-lindu",
    "name": "Taman Nasional Lore Lindu",
    "location": "Sulawesi Tengah",
    "description": "Terkenal dengan patung megalitiknya dan keanekaragaman hayati yang tinggi, termasuk banyak spesies endemik burung.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Lore_Lindu_National_Park.jpg/800px-Lore_Lindu_National_Park.jpg",
    "established": "1993",
    "area": "2.290 km²",
    "elo": 1500
  },
  {
    "id": "rawa-aopa-watumohai",
    "name": "Rawa Aopa Watumohai",
    "location": "Sulawesi Tenggara",
    "area": "1.052 km²",
    "established": "1989",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Rawa%20Aopa%20Watumohai",
    "description": "Rawa Aopa Watumohai adalah taman nasional yang terletak di Sulawesi Tenggara, Indonesia.",
    "elo": 1500
  },
  {
    "id": "taka-bonerate",
    "name": "Taka Bonerate",
    "location": "Sulawesi Selatan",
    "area": "5.308 km²",
    "established": "1992",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Taka%20Bonerate",
    "description": "Taka Bonerate adalah taman nasional yang terletak di 2001, Indonesia.",
    "elo": 1500
  },
  {
    "id": "wakatobi",
    "name": "Taman Nasional Wakatobi",
    "location": "Sulawesi Tenggara",
    "description": "Taman laut dengan keanekaragaman bawah laut yang luar biasa, bagian dari Segitiga Terumbu Karang, pusat keanekaragaman terumbu karang dunia.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wakatobi_National_Park.jpg/800px-Wakatobi_National_Park.jpg",
    "established": "1996",
    "area": "1.390.000 ha",
    "elo": 1500
  },
  {
    "id": "gandang-dewata",
    "name": "Gandang Dewata",
    "location": "Sulawesi Barat",
    "area": "793 km²",
    "established": "2018",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Gandang%20Dewata",
    "description": "Gandang Dewata adalah taman nasional yang terletak di 2016, Indonesia.",
    "elo": 1500
  },
  {
    "id": "batang-gadis",
    "name": "Batang Gadis",
    "location": "Sumatera Utara",
    "area": "1.080 km²",
    "established": "2004",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Batang%20Gadis",
    "description": "Batang Gadis adalah taman nasional yang terletak di Sumatera Utara, Indonesia.",
    "elo": 1500
  },
  {
    "id": "berbak",
    "name": "Berbak",
    "location": "Jambi",
    "area": "1.627 km²",
    "established": "1992",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Berbak",
    "description": "Berbak adalah taman nasional yang terletak di Jambi, Indonesia.",
    "elo": 1500
  },
  {
    "id": "bukit-barisan-selatan",
    "name": "Bukit Barisan Selatan",
    "location": "Lampung dan Bengkulu",
    "area": "3.650 km²",
    "established": "1982",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Bukit%20Barisan%20Selatan",
    "description": "Bukit Barisan Selatan adalah taman nasional yang terletak di 1999, Indonesia.",
    "elo": 1500
  },
  {
    "id": "bukit-duabelas",
    "name": "Bukit Duabelas",
    "location": "Jambi",
    "area": "605 km²",
    "established": "2000",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Bukit%20Duabelas",
    "description": "Bukit Duabelas adalah taman nasional yang terletak di Jambi, Indonesia.",
    "elo": 1500
  },
  {
    "id": "bukit-tiga-puluh",
    "name": "Bukit Tiga Puluh",
    "location": "Riau dan Jambi",
    "area": "1.277 km²",
    "established": "1995",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Bukit%20Tiga%20Puluh",
    "description": "Bukit Tiga Puluh adalah taman nasional yang terletak di Riau dan Jambi, Indonesia.",
    "elo": 1500
  },
  {
    "id": "gunung-leuser",
    "name": "Taman Nasional Gunung Leuser",
    "location": "Aceh dan Sumatera Utara",
    "description": "Bagian dari Warisan Hutan Hujan Tropis Sumatera, rumah bagi orangutan, harimau, gajah, dan badak.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Orangutan_-_Gunung_Leuser_National_Park.jpg/800px-Orangutan_-_Gunung_Leuser_National_Park.jpg",
    "established": "1980",
    "area": "7.927 km²",
    "elo": 1500
  },
  {
    "id": "kerinci-seblat",
    "name": "Taman Nasional Kerinci Seblat",
    "location": "Sumatera Barat, Jambi, Bengkulu, dan Sumatera Selatan",
    "description": "Taman nasional terbesar di Sumatera, rumah bagi gunung berapi tertinggi di Indonesia, Gunung Kerinci.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Gunung_Tujuh_Lake.jpg/800px-Gunung_Tujuh_Lake.jpg",
    "established": "1999",
    "area": "13.791 km²",
    "elo": 1500
  },
  {
    "id": "sembilang",
    "name": "Sembilang",
    "location": "Sumatera Selatan",
    "area": "2.051 km²",
    "established": "2003",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Sembilang",
    "description": "Sembilang adalah taman nasional yang terletak di 2001, Indonesia.",
    "elo": 1500
  },
  {
    "id": "siberut",
    "name": "Siberut",
    "location": "Sumatera Barat",
    "area": "1.905 km²",
    "established": "1993",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Siberut",
    "description": "Siberut adalah taman nasional yang terletak di 1992, Indonesia.",
    "elo": 1500
  },
  {
    "id": "tesso-nilo",
    "name": "Tesso Nilo",
    "location": "Riau",
    "area": "1.000 km²",
    "established": "2004",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Tesso%20Nilo",
    "description": "Tesso Nilo adalah taman nasional yang terletak di Riau, Indonesia.",
    "elo": 1500
  },
  {
    "id": "way-kambas",
    "name": "Taman Nasional Way Kambas",
    "location": "Lampung",
    "description": "Terkenal dengan konservasi gajah dan harimau Sumatera, serta tempat Suaka Badak Sumatera.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Elephant_Way_Kambas_2.jpg/800px-Elephant_Way_Kambas_2.jpg",
    "established": "1985",
    "area": "1.300 km²",
    "elo": 1500
  },
  {
    "id": "zamrud",
    "name": "Zamrud",
    "location": "Riau",
    "area": "315 km²",
    "established": "2016",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Zamrud",
    "description": "Zamrud adalah taman nasional yang terletak di Riau, Indonesia.",
    "elo": 1500
  },
  {
    "id": "gunung-maras",
    "name": "Gunung Maras",
    "location": "Bangka Belitung",
    "area": "168 km²",
    "established": "2016",
    "imageUrl": "https://source.unsplash.com/800x600/?indonesia,nationalpark,nature,Gunung%20Maras",
    "description": "Gunung Maras adalah taman nasional yang terletak di Bangka Belitung, Indonesia.",
    "elo": 1500
  }
];