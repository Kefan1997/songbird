/* eslint-disable no-useless-escape */
const dataBirds = [
  [
    {
      id: 1,
      name: "Зорька",
      species: "Otus scops",
      description:
        "Зорька – маленькая сова, отличающаяся от других представителей сов не только своими размерами. Она спокойно относится к соседству с человеком, часто выбирая среди мест обитания городские парки и скверы. Особенна эта сова также своими повадками, образом жизни и нюансами питания и охоты.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Otus_scops.jpg/375px-Otus_scops.jpg",
      audio: "//www.xeno-canto.org/573460/download",
    },
    {
      id: 2,
      name: "Коростель",
      species: "Crex-crex",
      description:
        "Коростель – это птица средних размеров, относящаяся к отряду журавлеобразных и подсемейству пастушковых. Международное латинское название птицы «crex-crex». Столь необычное название было присвоено птицы из-за её специфического крика. Впервые коростель был классифицирован в 1756 году Карлом Линнеем, но из-за небольших неточностей в описании, некоторые время считалось, что птица принадлежит к семейству куриных.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Corncrake_%28Crex_crex%29.jpg/413px-Corncrake_%28Crex_crex%29.jpg",
      audio: "//www.xeno-canto.org/571141/download",
    },
    {
      id: 3,
      name: "Сыч",
      species: "Athene",
      description:
        "Если кто не знает, то сыч – это миниатюрная сова с очень привлекательной и миловидной внешностью. Именно сычи, чаще всего, из всех совиных становятся домашними любимцами, т.к. имеют небольшие габариты, и уход за ними не так уж и сложен. ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Spotted_Owlet_%28Athene_brama%29-_Pair_in_Foreplay_at_Bharatpur_I_IMG_5472.jpg/263px-Spotted_Owlet_%28Athene_brama%29-_Pair_in_Foreplay_at_Bharatpur_I_IMG_5472.jpg",
      audio: "//www.xeno-canto.org/576095/download",
    },
    {
      id: 4,
      name: "Какапо",
      species: "Strigops habroptilus",
      description:
        "Какапо интересны тем, что они охотно идут на контакт с человеком и ведут себя очень дружелюбно, относительно многих других диких птиц. ",
      image: "https://4parrots.ru/images/news14/150619-kakapo-01.jpg",
      audio: "//www.xeno-canto.org/295659/download",
    },
    {
      id: 5,
      name: "Киви",
      species: "Apteryx",
      description:
        "Птица киви очень любопытная: она не может летать, у нее свободные, похожие на волосы перья, сильные ноги и отсутствует хвост. У птицы есть много странных и замечательных особенностей, которые сформировались благодаря изоляции Новой Зеландии и отсутствию на ее территории млекопитающих. ",
      image:
        "https://images11.popmeh.ru/upload/img_cache/c17/c171bacbf75a44c680c150993f297c9c.webp",
      audio: "//www.xeno-canto.org/525925/download",
    },
    {
      id: 6,
      name: "Неясыть",
      species: "Strix",
      description:
        "Неясыть – хищная ночная птица из семейства совиных. Это опасные охотники с прекрасным слухом, истребляющие грызунов и другую мелкую живность. Они могут обитать как глубоко в лесном массиве, так и прямо в городе, поселившись в заброшенном здании. Для людей обычно не опасны, если только не защищают гнездо.",
      image:
        "https://simple-fauna.ru/wp-content/uploads/2018/06/ptica-neyasyt.jpg",
      audio: "//www.xeno-canto.org/382559/download",
    },
  ],
  [
    {
      id: 1,
      name: "Стервятник",
      species: "Neophron",
      description:
        "Длина тела взрослых стервятников находится в пределах от 60 до 70 см, масса от 1,5 до 2,2 кг. Размах крыльев достигает 165 см. Оперение у стервятника белого цвета, а по краям крыльев расположены чёрные длинные перья, особенно хорошо заметные во время полёта.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/osobennosti-pitaniya-stervjatnika-e1502800812312.jpg",
      audio: "//www.xeno-canto.org/83346/download",
    },
    {
      id: 2,
      name: "Сокол",
      species: "Falco",
      description:
        "Научное название Falco произошло от слова «falx», что в переводе означает «серп» — серповидная форма крыльев отличает соколов от других видов пернатых. Крылья у птиц длинные, широкие, благодаря чему соколы способны высоко подниматься в небо и свободно парить. Перо сокола жесткое, глянцевое.",
      image: "https://o-prirode.ru/wp-content/uploads/2019/09/4.jpg",
      audio: "//www.xeno-canto.org/566538/download",
    },
    {
      id: 3,
      name: "Ястреб",
      species: "Accipiter gentilis",
      description:
        "Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/osobennosti-pitaniya-yastreba-e1502796351666.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3",
    },
    {
      id: 4,
      name: "Филин",
      species: "Bubo bubo",
      description:
        "Полет филина бесшумный, что важно во время ночной охоты, когда все в лесу спит. Зрение очень острое. Также знаменита способность филина вертеть головой: они могут повернуть ее до 270 градусов, делая практически полный оборот головы вокруг шеи. Все эти особенности делают птицу непревзойденным ночным охотником.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/opisanie-filina-e1503681845268.jpg",
      audio: "//www.xeno-canto.org/560239/download",
    },
    {
      id: 5,
      name: "Могильник",
      species: "Aquila heliaca",
      description:
        "Могильник является крупной птицей с широкими длинными крыльями и прямым, длинным хвостом. Длина тела птицы от 72 до 84 см, размах крыльев составляет 180-215 см, масса от 2,4 до 4,5 кг. Внешне могильник напоминает беркута. Однако по размерам он меньше, а его тёмно-бурый, практически чёрный окрас темнее, чем у беркута. Кроме того, у могильника удлинённые перья в области зашейка светло-желтого цвета. А на плечах птицы расположены белые пятна, так называемые «эполеты».",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/opisanie-mogilnika-e1502701262950.jpg",
      audio: "//www.xeno-canto.org/449640/download",
    },
    {
      id: 6,
      name: "Коршун",
      species: "Milvinae",
      description:
        "Клюв у коршуна крючкообразный, слабый, лапы короткие. Окрас оперения у коршунов встречается самый разнообразный, обычно в нем преобладают тёмные и бурые тона, реже – белый или красный цвет.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/opisanie-korshuna-e1502667243234.jpg",
      audio: "//www.xeno-canto.org/352478/download",
    },
  ],
  [
    {
      id: 1,
      name: "Глухарь",
      species: "Tetrao urogallus",
      description:
        "Глухари относятся к травоядным птицам. Весной и летом они питаются в основном побегами, цветами, древесными почками, листьями, травой, лесными ягодами, семенами, изредка – насекомыми. В осенний период глухари часто употребляют в пищу хвою лиственницы, а в зимние холода добавляют в рацион хвою сосны и ели, их почки.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/07/opisanie-glukharja.jpg",
      audio: "//www.xeno-canto.org/551836/download",
    },
    {
      id: 2,
      name: "Дятел",
      species: "Loxia",
      description:
        "Дятлы широко распространены в Евразии и Северной Африке. Эти птицы крикливы, шумны и заметны благодаря своему яркому, пестрому оперению, выполненному в черно-белых тонах с красной яркой шапочкой в области затылка.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/osobennosti-pitaniya-djatla-e1503308843867.jpg",
      audio: "//www.xeno-canto.org/505802/download",
    },
    {
      id: 3,
      name: "Удод",
      species: "Upupa epops",
      description:
        "На голове расположен характерный хохолок из перьев, оранжево-рыжего цвета с черными кончиками перьев. Его длина от 5 до 10 см, и обычно он сложен, но при приземлении удод распускает его в форме веера. Голова, шея и грудка изменяется у подвидов от розового до каштанового цвета.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/opisanie-udoda-e1503483188189.jpg",
      audio: "//www.xeno-canto.org/560378/download",
    },
    {
      id: 4,
      name: "Тетерев",
      species: "Lyrurus tetrix",
      description:
        "Тетерев – достаточно крупная птица с маленькой головой и коротким клювом. В окрасе оперения у тетерева также ярко выражен половой диморфизм.У самца блестяще-чёрное оперение с фиолетовым или зелёным блеском в области головы, шеи, зоба и поясницы, ярко-красные брови. Самка пёстрая, рыжевато-коричневого окраса с поперечными полосками серого, тёмно-жёлтого и чёрно-бурого цвета. ",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/osobennosti-pitaniya-tetereva-e1503680959527.jpg",
      audio: "//www.xeno-canto.org/413428/download",
    },
    {
      id: 5,
      name: "Стриж",
      species: "Apodidae",
      description:
        "Стриж – это небольшая птичка, преимущественно серого цвета с черными и белыми вкраплениями. Внешне стриж немного похож на ласточку. Голова крупная, клюв острый и маленький, хвост прямой, крылья изогнутые, длинные, ноги слабые, короткие. Радужина черного цвета.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/opisanie-strizha-e1503481543720.jpeg",
      audio: "//www.xeno-canto.org/260449/download",
    },
    {
      id: 6,
      name: "Серая цапля",
      species: "Ardea cinerea",
      description:
        "Туловище сверху сизовато-серое, грудка, живот и подхвостье серовато-белого цвета. Голова белая, над глазами расположены серовато-чёрные полоски, которые соединяются на затылке и переходят в чёрный хохолок.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/osobennosti-pitaniya-seroy-tsapli-e1503258769261.jpg",
      audio: "//www.xeno-canto.org/573925/download",
    },
  ],
  [
    {
      id: 1,
      name: "Альбатрос",
      species: "Diomedea",
      description:
        "Альбатросы являются самыми крупными птицами в своем семействе. Внешне птица немного напоминает чайку. Так, у альбатроса схожий с ней клюв – узкий и длинный, загнутый на кончике. Однако, он имеет свою важную особенность. Ноздри у птицы находятся по бокам клюва и выглядят как длинные трубочки. ",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/07/osobennosti-pitaniya-albatrosa-e1501163040584.jpg",
      audio: "//www.xeno-canto.org/293087/download",
    },
    {
      id: 2,
      name: "Чайка",
      species: "Larus",
      description:
        "Как правило, это птицы большого или среднего размера, окрас оперения у них обычно белого или серого цвета, часто украшен чёрными отметинами в области головы или на крыльях. Одной из отличительных черт является сильный клюв чаек, немного загнутый на кончике, а также развитые плавательные перепонки на лапах.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/07/opisanie-ptitsy-chayki-e1501356971582.jpg",
      audio: "//www.xeno-canto.org/47018/download",
    },
    {
      id: 3,
      name: "Фрегат",
      species: "Fregata",
      description:
        "У всех фрегатов крылья узкие, а хвост длинный и раздвоенный, напоминающий английскую букву W. Такие приспособления необходимы птице для маневренности в полете. Летают фрегаты очень искусно, а вот на земле чувствуют себя не так уверенно, так как ноги у них короткие.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/velikolepniy-fregat-e1501884137274.jpg",
      audio: "//www.xeno-canto.org/99731/download",
    },
    {
      id: 4,
      name: "Тупик",
      species: "Fratercula arctica",
      description:
        "Тупики быстро ходят по земле и даже могут бежать, но делают это вразвалку. Птицы отлично приспособлены к плаванию и нырянию, дыхание под водой задерживают на минуту. Летают тупики низко над водой и достаточно быстро (развивают скорость около 80 км/ч).",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/07/opisanie-tupika-e1501165992340.jpg",
      audio: "//www.xeno-canto.org/479182/download",
    },
    {
      id: 5,
      name: "Пеликан",
      species: "Pelecanus",
      description:
        "Пеликан – самая крупная птица в своём отряде. Внешний вид особенный и неповторимый: туловище массивное с большими крыльями, короткими толстыми ногами с широкими перепонками между пальцами, и коротким закруглённым хвостом. Шея длинная. Под клювом расположен мешок из кожи, который может хорошо растягиваться и используется птицей для ловли рыбы. ",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/08/opisanie-pelikana-e1501881489801.jpg",
      audio: "//www.xeno-canto.org/331139/download",
    },
    {
      id: 6,
      name: "Олуша",
      species: "Sula",
      description:
        "Как и многие другие виды морских птиц, олуши характеризуются неуклюжестью и комичностью передвижения на суше. К тому же, птицы крайне доверчивы, совсем не страшатся человека и легко идут на контакт.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/07/opisanie-olushi-e1501367288809.jpg",
      audio: "//www.xeno-canto.org/411507/download",
    },
  ],
  [
    {
      id: 1,
      name: "Соловей",
      species: "Luscinia",
      description:
        "Самая известная певчая птица в странах СНГ – это соловей из семейства мухоловковые отряда воробьинообразные. Несмотря на чудный голос, внешней красотой соловьи не отличаются.",
      image: "https://o-prirode.ru/wp-content/uploads/2017/06/solovei-1.jpg",
      audio: "//www.xeno-canto.org/575231/download",
    },
    {
      id: 2,
      name: "Синица",
      species: "Parus",
      description:
        "Маленькая и бойкая певчая птица – синица, которую можно с легкостью узнать по яркому лимонно-желтому брюшку с продольной черной полосой, черному оперению головы с белыми щечками и голубовато-серой спине и крыльям. У этих птиц маленький аккуратный клюв, сплюснутый по бокам и очень цепкие коготки на лапках.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/06/sinica-e1500018347786.jpg",
      audio: "//www.xeno-canto.org/573294/download",
    },
    {
      id: 3,
      name: "Снегирь",
      species: "Pyrrhula",
      description:
        "Маленькие певчие птички из семейства вьюрковых – снегири – на латыни называются Pyrrhula, что переводится как «огненный», и указывает на яркую особенную окраску их оперения.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/06/osobennosti-pitaniya-snegirya.jpg",
      audio: "//www.xeno-canto.org/35451/download",
    },
    {
      id: 4,
      name: "Щур",
      species: "Pinicola",
      description:
        "Птиц отличает плотное телосложение, короткий, толстый, загнутый книзу клюв и длинный хвост. Густое оперение обыкновенного щура очень напоминает снегирей: у самца голова, грудь и спина окрашены в яркий малиновый цвет, животик – серый, хвост и крылья – буро-коричневые с белыми и черными полосками.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/06/pereletnaya-li-ptica-shur-e1499960575685.jpg",
      audio: "//www.xeno-canto.org/528537/download",
    },
    {
      id: 5,
      name: "Щегол",
      species: "Carduelis",
      description:
        "Пестрая и певучая птица семейства вьюрковые получила свое название щегол (лат. Carduelis carduelis) по двум причинам. Первая из них – это ее необычайно изысканный и яркий, щегольской наряд. Вторая причина относится к латинскому названию птички. «Carduus» на латыни обозначает чертополох, семенами которого так любит лакомиться этот красавчик.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/06/osobennosti-pitaniya-shegla-e1500502731695.jpg",
      audio: "//www.xeno-canto.org/577365/download",
    },
    {
      id: 6,
      name: "Чечевица",
      species: "Carpodacus",
      description:
        "Все они отличаются ярким мелодичным пением и характерным оперением самцов. Чечевицы также известны под названием «красные воробьи», в первую очередь, из-за схожести их размеров.",
      image:
        "https://o-prirode.ru/wp-content/uploads/2017/06/osobennosti-pitaniya-chechevitsy-e1500561491294.jpg",
      audio: "//www.xeno-canto.org/559677/download",
    },
  ],
  [
    {
      id: 1,
      name: "Сизоворонка",
      species: "Coracias garrulus",
      description:
        "Гнездовая, перелётная птица. Около 20 лет назад встречалась на всей территории страны и была обычным, а местами даже многочисленным видом (особенно в Полесье). В конце 1970-х — 1980-е годы имело место резкое сокращение численности на территории Белоруссии. ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Eurasian_Roller_-_Castuera_-_Extremadura_S4E5843_%2814738356884%29.jpg/225px-Eurasian_Roller_-_Castuera_-_Extremadura_S4E5843_%2814738356884%29.jpg",
      audio: "//www.xeno-canto.org/477331/download",
    },
    {
      id: 2,
      name: "Авдотка",
      species: "Burhinus oedicnemus",
      description:
        "В 1980-е годы на всей территории страны было известно только лишь 3 пары в Брагинском районе и только 1 пара в 1991 году в этих же местах. Современная численность оценивается в 1—10 пар.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Burhinus_indicus%2C_central_India.jpg/225px-Burhinus_indicus%2C_central_India.jpg",
      audio: "//www.xeno-canto.org/573601/download",
    },
    {
      id: 3,
      name: "Поручейник",
      species: "Tringa stagnatilis",
      description:
        "Гнездящийся, перелётный и транзитно мигрирующий вид. Обитает преимущественно в Полесье. Современная численность вида составляет 40—70 гнездящихся пар",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tringa_stagnatilis.jpg/225px-Tringa_stagnatilis.jpg",
      audio: "//www.xeno-canto.org/557848/download",
    },
    {
      id: 4,
      name: "Кобчик",
      species: "Falco vespertinus",
      description:
        "Гнездящийся, перелётный и транзитно мигрирующий вид. Вся территория Белоруссии находится в пределах ареала вида, но встречается он крайне редко, преимущественно на территории Полесья. Начиная с середины XX столетия известны только единичные случаи гнездования. ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Falco_vespertinus_3_%28Martin_Mecnarowski%29.jpg/225px-Falco_vespertinus_3_%28Martin_Mecnarowski%29.jpg",
      audio: "//www.xeno-canto.org/470243/download",
    },
    {
      id: 5,
      name: "Сапсан",
      species: "Falco peregrinus",
      description:
        "Возможно гнездящийся, перелётный и транзитно мигрирующий вид. Является самым редким видом хищных птиц Белоруссии. В настоящее время известные места гнездования сапсана находятся в России и Польше. Численность вида в Белоруссии оценивается максимум в 3 пары.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Falco_peregrinus_-_01.jpg/225px-Falco_peregrinus_-_01.jpg",
      audio: "//www.xeno-canto.org/571135/download",
    },
    {
      id: 6,
      name: "Беркут",
      species: "Aquila chrysaetos",
      description:
        "анее также достоверно гнездился на Пинщине и в Беловежской пуще. Численность в Белоруссии стабильная, и гнездящаяся часть популяции составляет 25—35 пар.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%D0%91%D0%B5%D1%80%D0%BA%D1%83%D1%82_%28Aquila_chrysaetos%29.jpg/225px-%D0%91%D0%B5%D1%80%D0%BA%D1%83%D1%82_%28Aquila_chrysaetos%29.jpg",
      audio: "//www.xeno-canto.org/504831/download",
    },
  ],
];

export default dataBirds;
