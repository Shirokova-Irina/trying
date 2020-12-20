define('themesConfig', function () {  "use strict"; function getRandomThemeVariant(variants) {
	return variants[Math.floor(Math.random() * variants.length)];
}

function chooseTheme(themeId){
	var themeConfig = patron.themes.get(themeId),
		themeVariant = 'all',
		hours = (new Date()).getHours();
	if (themeConfig && themeConfig.variants) {
		if (themeConfig.currentVariant) {
			themeVariant = themeConfig.currentVariant;
		} else {
			themeVariant = themeConfig.currentVariant = getRandomThemeVariant(themeConfig.variants);
		}
	} else {
		switch (themeId) {
			case 't1016':
				if (hours >= 6 && hours < 12){
					themeVariant = "morning";
				} else if (hours >= 12 && hours < 18){
					themeVariant = "day";
				} else if (hours >= 18 && hours < 22){
					themeVariant = "evening";
				} else {
					themeVariant = "night";
				}
			break;

			case 't1032':
			case 't1060':
				if (hours >= 7 && hours < 19){
					themeVariant = "day";
				} else {
					themeVariant = "night";
				}
			break;
			case 't1189':
				if (themeConfig) {
					var widget = themeConfig.widget;
					if (widget && widget.data) {
						themeVariant = themeConfig.currentVariant = "v" +  widget.data.sign;
					}
				}
			break;
			case 't3000':
				if (themeConfig) {
					var widget = themeConfig.widget;
					if (widget && widget.data) {
						themeVariant = themeConfig.currentVariant = "v" +  widget.data.sign;
					}
				}
			break;
		}
	}
	return themeVariant;
}

window.chooseTheme = chooseTheme;

  return {	default: {
		  title: i18n('Классическая')
		, counters: {
			  show: 518501
			, load: 585249
		}
	},	t1000: {
		  title: i18n('Божья коровка')
		, counters: {
			  show: 518503
			, load: 585250
		}
	},	t1001: {
		  title: i18n('Медитация')
		, counters: {
			  show: 518504
			, load: 585251
		}
	},	t1002: {
		title: i18n('Город'),
		adaptive_background: true,
		counters: {
			show: 518505,
			load: 585645
		}
	},	t1003: {
		  title: i18n('Крокусы')
		, counters: {
			  show: 529521
			, load: 585646
		}
	},	t1004: {
		  title: i18n('Клубника')
		, counters: {
			  show: 529522
			, load: 585651
		}
	},	t1005:  {
		  title: i18n('Огни мегаполиса')
		 , adaptive_background: true
		, counters: {
			  show: 529523
			, load: 585644
		}
	},	t1006: {
		  title: i18n('Фиолетовый холст')
		, counters: {
			  show: 529524
			, load: 585650
		}
	},	t1007: {
		  title: i18n('Земляника')
		, counters: {
			  show: 529525
			, load: 585647
		}
	},	t1008: {
		  title: i18n('Зомби')
		, counters: {
			  show: 542191
			, load: 585656
		}
	},	t1009: {
		  title: i18n('Яркие письма')
		, counters: {
			  show: 529526
			, load: 585648
		}
	},	t1010: {
		  title: i18n('Полосатая')
		, counters: {
			  show: 529527
			, load: 585664
		}
	},	t1011: {
		  title: i18n('Кляксы')
		, counters: {
			  show: 529528
			, load: 585659
		}
	},	t1012: {
		  title: i18n('Лайт')
		, counters: {
			  show: 529529
			, load: 585667
		}
	},	t1013: {
		  title: i18n('Кошки')
		, counters: {
			  show: 542192
			, load: 585658
		}
	},	t1014: {
		  title: i18n('Крыши')
		, counters: {
			  show: 542193
			, load: 585662
		}
	},	t1015: {
		  title: i18n('Трава')
		, adaptive_background: true
		, counters: {
			  show: 542195
			, load: 585652
		}
	},	t1016: {
		  title: i18n('Сказочный город')
		, counters: {
			  show: 542196
			, load: 585655
		}
		, select_variant: function () {
			var hours = (new Date()).getHours(),
				themeVariant = 'night';
			if (hours >= 6 && hours < 12) {
				themeVariant = 'morning';
			} else if (hours >= 12 && hours < 18) {
				themeVariant = 'day';
			} else if (hours >= 18 && hours < 22) {
				themeVariant = 'evening';
			}
			return themeVariant;
		}
		, auto_update: true
	},	t1017: {
		  title: i18n('Казино')
		, counters: {
			  show: 545468
			, load: 585657
		}
	},	t1018: {
		  title: i18n('Волк и овцы')
		, counters: {
			  show: 545464
			, load: 585663
		}
	},	t1019: {
		  title: i18n('Простоквашино')
		, counters: {
			  show: 545471
			, load: 585673
		}
	},	t1020:  {
		  title: i18n('Simon’s Cat')
		, counters: {
			  show: 545465
			, load: ''
		}
	},	t1021:  {
		  title: i18n('Simon’s Cat')
		, counters: {
			  show: 545466
			, load: 585670
		}
	},	t1022:  {
		  title: i18n('Пирс')
		, counters: {
			  show: 545462
			, load: 585654
		}
	},	t1023:  {
		  title: i18n('Изумрудный город')
		, counters: {
			  show: 545469
			, load: 585665
		}
	},	t1024:  {
		  title: i18n('Крыши')
		, counters: {
			  show: 558990
			, load: 585662
		}
	},	t1025:  {
		  title: i18n('Хэллоуин')
		, counters: {
			  show: 570162
			, load: 585649
		}
	},	t1026:  {
		  title: i18n('Роботы')
		, text: i18n('Поздравляем! Сейчас будет включена скрытая тема оформления \"Роботы\"')
		, counters: {
			  show: 570164
			, load: 585666
		}
	},	t1027:   {
		  title: i18n('Монстры')
		, counters: {
			  show: 570163
			, load: 585661
		}
	},	t1028:  {
		  title: i18n('Игра в снежки')
		, counters: {
			  show: 599645
			, load: 599644
		}
	},	t1029:  {
		  title: i18n('Секретная служба')
		, counters: {
			  show: 603227
			, load: 603236
		}
	},	t1030:  {
		  title: i18n('СССК')
		, counters: {
			  show: 603228
			, load: 603237
		}
	},	t1031:  {
		  title: i18n('Аниме')
		, counters: {
			  show: 603229
			, load: 603239
		}
	},	t1032:  {
		  title: i18n('Новогодняя')
		, counters: {
			  show: 603230
			, load: ''
		}
		, select_variant: function () {
			var hours = (new Date()).getHours(),
				themeVariant = 'night';
			if (hours >= 7 && hours < 19) {
				themeVariant = 'day';
			}
			return themeVariant;
		}
		, auto_update: true
	},	t1033: {
		  title: i18n('Осенний Кот')
		, counters: {
			  show: ''
			, load: 585671
		}
	},	t1034:  {
		  title: i18n('Рождественская')
		, counters: {
			  show: ''
			, load: 625677
		}
	},	t1036:  {
		  title: i18n('Легенда')
		, link: {
			  href: 'http://1link.mail.ru/c.php?site_id=65818&p=704&sub_id=0'
			, title: i18n('Играть!')
			, target: '_blank'
		}
		, counters: {
			  show: 658521
			, load: 656830
		}
	},	t1037:  {
		  title: i18n('Котики')
		, counters: {
			  show: 658513
			, load: 658523
		}
	},	t1038:  {
		  title: i18n('14 февраля')
		, counters: {
			  show: 658518
			, load: 658529
		}
	},	t1040:  {
		  title: i18n('Простоквашино')
		, counters: {
			  show: 658516
			, load: 658527
		}
	},	t1041:   {
		  title: i18n('Весенняя')
		//, preview: 't1041/may/preview.jpg?v=1'
		, counters: {
			  show: 660449
			, load: 660487
		}
	},	t1042:  {
		  title: i18n('Вышивка')
		, counters: {
			  show: 720575
			, load: 720576
		}
	},	t1043:  {
		  title: i18n('Сласти')
		, counters: {
			  show: 660446
			, load: 660483
		}
	},	t1044: {
		  title: i18n('Половодье')
		, counters: {
			  show: 545471
			, load: 585673
		}
	},	t1045:  {
		title: i18n('Гонки')
		, counters: {
			  show: 818213
			, load: 818202
		}
	},	t1046:  {
		title: i18n('Перья')
		, counters: {
			  show: 868710
			, load: 868711
		}
	},	t1047:  {
		title: i18n('Ромбики')
		, counters: {
			  show: 868709
			, load: 868708
		}
	},	t1048:  {
		title: i18n('Футбол')
		, adaptive_background: true
		, widget: {
			js: 'themes.widgets/Widgets.Football'
			, slot: 3603
		}
		, counters: {
			  show: 866077
			, load: 866080
		}
	},	t1049:  {
		  title: i18n('Длиннокот')
		, link: {
			  href: 'http://www.kyiv2025.kiev.ua/'
			, title: i18n('Кошка — Сороконожка')
			, target: '_blank'
		}
		, counters: {
			  show: 972824
			, load: 972825
		}
	},	t1050:  {
		title: i18n('Эскимосы')
		, counters: {
			  show: 1020302
			, load: 1020300
		}
	},	t1051:  {
		  title: i18n('Cut the Rope')
		, link: {
			  href: 'http://cuttherope.net/'
			, title: i18n('Играть в Cut the rope бесплатно!')
			, target: '_blank'
		}
		, counters: {
			  show: 1031938
			, load: 1031939
		}
	},	t1052:  {
		title: i18n('Граффити')
		, counters: {
			  show: 1031708
			, load: 1031709
		}
	},	t1053:  {
		title: i18n('Цирк')
		, counters: {
			  show: 603231
			, load: 603243
		}
	},	t1054:  {
		title: i18n('Восточная')
		, counters: {
			  show: 1106787
			, load: 1106788
		}
	},	t1055:  {
		title: i18n('Киев')
		, counters: {
			  show: 1119205
			, load: 1119206
		}
	},	t1056: {
		title: i18n('Маленькое королевство')
		, variants: ['all', 'v2', 'v3']
		, link: {
			  href: 'http://gapart.com/'
			, title: i18n('gapart.com')
			, target: '_blank'
		}
		, counters: {
			  show: 1150108
			, load: 1150111
		}
	},	t1057:  {
		title: i18n('Домовята')
		, link: {
			  href: 'http://my.mail.ru/apps/559506?ref=mailbox'
			, title: i18n('Играть!')
			, target: '_blank'
		}
		, counters: {
			  show: 1138594
			, load: 1138595
		}
	},	t1058:  {
		  title: i18n('Правила войны')
		, link: {
			  href: 'http://my.mail.ru/apps/608884?ref=mailbox'
			, title: i18n('Играть!')
			, target: '_blank'
		}
		, counters: {
			  show: 1152229
			, load: 1152230
		}
	},	t1059:  {
		title: i18n('Монстры на каникулах')
		, counters: {
			  show: 1168842
			, load: 1168846
		}
	},	t1060: {
		title: i18n('Сумерки')
		, counters: {
			  show: 1049171
			, load: 1049160
		}
		, select_variant: function () {
			var hours = (new Date()).getHours(),
				themeVariant = 'night';
			if (hours >= 7 && hours < 19) {
				themeVariant = 'day';
			}
			return themeVariant;
		}
		, auto_update: true
	},	t1061: {
		title: i18n('Монстры на каникулах')
		, counters: {
			  show: 1180031
			, load: 1180032
		}
	},	t1062: {
		title: i18n('Пинап')
		, counters: {
			  show: 1196375
			, load: 1196376
		}
	},	t1063: {
		title: i18n('Дима Логинoff')
		, counters: {
			  show: 1220788
			, load: 1220792
		}
	},	t1064: {
		title: i18n('Пираты')
		, link: {
			  href: 'http://my.mail.ru/apps/655199?ref=mailbox'
			, title: i18n('Играть!')
			, target: '_blank'
		}
		, counters: {
			  show: 1152231
			, load: 1152234
		}
	},	t1065:  {
		title: i18n('Троецарствие')
		, link: {
			  href: 'http://1link.mail.ru/c.php?site_id=75696&p=109&sub_id=0'
			, title: i18n('Играть!')
			, target: '_blank'
		}
		, counters: {
			  show: 1220790
			, load: 1220793
		}
	},	t1066:  {
		title: i18n('Новый год 50-х')
		, counters: {
			  show: 1271947
			, load: '1271948	'
		}
	},	t1067: {
		title: i18n('Дикий Запад')
		, link: {
			  href: 'http://my.mail.ru/apps/559650?ref=mailbox'
			, title: i18n('Играть!')
			, target: '_blank'
		}
		, counters: {
			  show: 1296950
			, load: 1296952
		}
	},	t1068: {
		title: i18n('Мегаполис')
		, link: {
			  href: 'http://my.mail.ru/apps/494497?ref=mailbox'
			, title: i18n('Играть!')
			, target: '_blank'
		}
		, counters: {
			  show: 1315466
			, load: 1315467
		}
	},	t1069: {
		title: i18n('Камни')
		, counters: {
			  show: 1296227
			, load: 1296228
		}
	},	t1070: {
		title: i18n('Легенда. Зима')
		, link: {
			  href: 'http://1link.mail.ru/c.php?site_id=65818&p=704&sub_id=0'
			, title: i18n('Играть!')
			, target: '_blank'
		}
		, counters: {
			  show: 1220787
			, load: 1220791
		}
	},	t1071: {
		title: i18n('Деревяшечка')
		, counters: {
			  show: 1325858
			, load: 1325872
		}
	},	t1072: {
		title: i18n('Плохой Санта')
		, counters: {
			  show: 1325869
			, load: 1325879
		}
	},	t1073: {
		title: i18n('Новогодняя Ёлка')
		, counters: {
			  show: 1325861
			, load: 1325875
		}
	},	t1074: {
		title: i18n('Ангелы')
		, counters: {
			  show: 1325863
			, load: 1325877
		}
	},	t1075: {
		title: i18n('Кирпичи')
		, counters: {
			  show: 1348691
			, load: 1348693
		}
		, adv: {
			  leftLink: '333'
			, leftHover: '333'
			, leftText: '333'
			, leftInfo: '333'
		}
	},	t1076: {
		title: i18n('Снежинки')
		, counters: {
			  show: 1347100
			, load: 1347101
		}
	},	t1077: {
		title: i18n('Аниме')
		, adaptive_background: true
		, counters: {
			  show: 1348692
			, load: 1348694
		}
	},	t1078: {
		title: i18n('Зёрна')
		, counters: {
			  show: 1392414
			, load: 1392428
		}
	},	t1079: {
		title: i18n('Сердца')
		, counters: {
			  show: 1392418
			, load: 1392433
		}
	},	t1080: {
		title: i18n('Кабаре')
		, counters: {
			  show: 1409909
			, load: 1409910
		}
	},	t1081: {
		title: i18n('Соты')
		, counters: {
			  show: 1392416
			, load: 1392430
		}
	},	t1083: {
		title: i18n('Беларусь')
		, counters: {
			  show: 1430420
			, load: 1430421
		}
	},	t1084: {
		title: i18n('Angry Birds')
		, counters: {
			  show: 1489721
			, load: 1489723
		}
	},	t1085: {
		title: i18n('Angry Birds Space')
		, counters: {
			  show: 1489722
			, load: 1489724
		}
	},	t1086: {
		title: i18n('Цветы')
		, variants: ['all', 'v2', 'v3', 'v4', 'v5']
		, adaptive_background: true
		, select_css_alias: function () {
			return 'all';
		}
		, counters: {
			  show: 1541523
			, load: 1541524
		}
	},	t1087: {
		title: i18n('Комиксы')
		, counters: {
			  show: 1541609
			, load: 1541612
		}
	},	t1088: {
		title: i18n('Заячья любовь')
		, adaptive_background: true
		, counters: {
			  show: 1628557
			, load: 1628545
		}
	},	t1089: {
		title: i18n('Смурфики 2')
		, counters: {
			  show: 1807124
			, load: 1807125
		}
	},	t1090: {
		title: i18n('Осень')
		, variants: ['all', 'v2', 'v3', 'v4', 'v5']
		, adaptive_background: true
		, counters: {
			  show: 1852220
			, load: 1852222
		}
	},	t1101: {
		title: i18n('Графит')
		, counters: {
			  show: 5568497
			, load: 5568496
		}
	},	t1102:  {
		title: i18n('Зима')
		, adaptive_background: true
		, counters: {
			  show: 3036292
			, load: 3036298
		}
	},	t1103: {
		title: i18n('Хэлоуин')
		, counters: {
			  show: 3493005
			, load: 3493011
		}
	},	t1104: {
		title: i18n('Коровы на льду')
		, counters: {
			  show: 3990266
			, load: 3990267
		}
	},	t1105: {
		title: i18n('Я тебя люблю')
		, counters: {
			  show: 3672508
			, load: 3672518
		}
	},	t1106:  {
		title: i18n('Тату')
		, counters: {
			  show: 3672510
			, load: 3672522
		}
	},	t1107: {
		title: i18n('Свитер с оленями')
		, counters: {
			  show: 3672511
			, load: 3672524
		}
	},	t1108: {
		title: i18n('Сакура')
		, counters: {
			  show: 3672512
			, load: 3672526
		}
	},	t1109: {
		title: i18n('Наурыз')
		, counters: {
			  show: 3672514
			, load: 3672528
		}
	},	t1110: {
		title: i18n('14 февраля')
		, counters: {
			  show: 4236569
			, load: 4236578
		}
	},	t1111: {
		title: i18n('Новый год')
		, counters: {
			  show: 4706580
			, load: 4706585
		}
	},	t1112:  {
		  title: i18n('Ноготки')
		, adaptive_background: true
		, counters: {
			  show: 5433519
			, load: 5433525
		}
	},	t1113: {
		title: i18n('Спортивные панды')
		, variants: ['all', 'v2', 'v3']
		, counters: {
			  show: 5598407
			, load: 5598416
		}
	},	t1114: {
		title: i18n('Красные розы')
		, adaptive_background: true
		, counters: {
			  show: 13727917
			, load: 13727918
		}
	},	t1115: {
		title: i18n('Прованс')
		, variants: ['all', 'v2', 'v3', 'v4', 'v5', 'v6']
		, adaptive_background: true
		, select_css_alias: function () {
			return 'all';
		}
		, counters: {
			  show: 5598412
			, load: 5598418
		}
	},	t1116: {
		title: i18n('Пушистик')
		, adaptive_background: true
		, counters: {
			  show: 5758907
			, load: 5758910
		}
	},	t1117: {
		title: i18n('Котята')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3', 'v4']
		, counters: {
			  show: 5753261
			, load: 5753264
		}
	},	t1118:  {
		title: i18n('Спящая кошка')
		, adaptive_background: true
		, counters: {
			  show: 5756779
			, load: 5756769
		}
	},	t1119: {
		  title: i18n('Розы')
		, adaptive_background: true
		, counters: {
			  show: 5756681
			, load: 5756688
		}
	},	t1120: {
		  title: i18n('Ретро-такси')
		, adaptive_background: true
		, counters: {
			  show: 5756678
			, load: 5756666
		}
	},	t1121: {
		  title: i18n('Ромашки')
		, adaptive_background: true
		, counters: {
			  show: 5756543
			, load: 5756615
		}
	},	t1122: {
		  title: i18n('Розовые холмы')
		, adaptive_background: true
		, counters: {
			  show: 5756468
			, load: 5756578
		}
	},	t1123:  {
		  title: i18n('Холмы')
		, adaptive_background: true
		, counters: {
			  show: 5756449
			, load: 5756553
		}
	},	t1124: {
		title: i18n('Стражи галактики')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3', 'v4', 'v5']
		, link: {
			  href: 'http://gotg.marvel.com.ru/'
			, title: i18n('Стражи галактики')
			, target: '_blank'
		}
		, counters: {
			  show: 7589355
			, load: 7589374
		}
	},	t1125: {
		title: i18n('Самолеты')
		, adaptive_background: true
		, link: {
			  href: 'http://planes2.disney.ru'
			, title: i18n('Самолёты')
			, target: '_blank'
		}
		, counters: {
			  show: 8307665
			, load: 8307671
		}
	},	t1126: {
		title: i18n('Феи')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3']
		, link: {
			  href: 'http://fairies.disney.ru'
			, title: i18n('Феи')
			, target: '_blank'
		}
		, counters: {
			  show: 9339147
			, load: 9339180
		}
	},	t1127: {
		title: i18n('Микки Маус')
		, adaptive_background: true
		, variants: ['v4']
		, link: {
			  href: 'http://mickey.disney.ru'
			, title: i18n('Микки Маус')
			, target: '_blank'
		}
		, counters: {
			  show: 9336401
			, load: 9336505
		}
	},	t1128: {
		title: i18n('Бемби')
		, adaptive_background: true
		, link: {
			  href: 'http://disney.ru'
			, title: i18n('Бемби')
			, target: '_blank'
		}
		, counters: {
			  show: 9005906
			, load: 9005935
		}
	},	t1129: {
		title: i18n('Холодное сердце')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3']
		, link: {
			  href: 'http://frozen.disney.ru'
			, title: i18n('Холодное сердце')
			, target: '_blank'
		}
		, counters: {
			  show: 11121702
			, load: 11122009
		}
	},	t1130: {
		title: i18n('В поисках Немо')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3', 'v4']
		, link: {
			  href: 'http://disney.ru'
			, title: i18n('В поисках Немо')
			, target: '_blank'
		}
		, counters: {
			  show: 11121703
			, load: 11122015
		}
	},	t1131: {
		title: i18n('Король Лев')
		, adaptive_background: true
		, counters: {
			  show: 11121705
			, load: 11122158
		}
	},	t1132: {
		title: i18n('Современный хаки')
		, adaptive_background: true
		, counters: {
			  show: 13727966
			, load: 13727967
		}
	},	t1133: {
		title: i18n('Микки Маус')
		, link: {
			  href: 'http://mickey.disney.ru'
			, title: i18n('Микки Маус')
			, target: '_blank'
		}
		, counters: {
			  show: 11121684
			, load: 11122007
		}
	},	t1134: {
		title: i18n('Минни Маус')
		, variants: ['all', 'v2']
		, link: {
			  href: 'http://mickey.disney.ru'
			, title: i18n('Микки Маус')
			, target: '_blank'
		}
		, counters: {
			  show: 11121673
			, load: 11122005
		}
	},	t1135: {
		title : i18n('Клуб пингвинов')
		, adaptive_background: true
		, link : {
			  href: 'http://play.clubpenguin.com/ru?oast=DOS_CP_CPVW_WEB_THEMES_2015RUMAILTHEME_NA_RU_RU_NA'
			, title: i18n('Клуб пингвинов')
			, target: '_blank'
		}
		, counters: {
			  show: 11121710
			, load: 11122159
		}
	},	t1136: {
		title: i18n('Мстители')
		, variants: ['all', 'v2', 'v3']
		, adaptive_background: true
		, link: {
			  href: 'http://marvel.com.ru/'
			, title: i18n('Мстители')
			, target: '_blank'
		}
		, counters: {
			  show: 15402003
			, load: 15402007
		}
	},	t1137: {
		title: i18n('Тачки')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3']
		, link: {
			  href: 'http://cars.disney.ru/'
			, title: i18n('Тачки')
			, target: '_blank'
		}
		, counters: {
			  show: 11121751
			, load: 11122161
		}
	},	t1138: {
		title: i18n('Винни Пух')
		, adaptive_background: true
		, link: {
			  href: 'http://winnie.disney.ru'
			, title: i18n('Медвежонок Винни и его друзья')
			, target: '_blank'
		}
		, counters: {
			  show: 11121763
			, load: 11122200
		}
	},	t1139: {
		title: i18n('Валли')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3']
		, link: {
			  href: 'http://disney.ru'
			, title: i18n('Валли')
			, target: '_blank'
		}
		, counters: {
			  show: 11121774
			, load: 11122202
		}
	},	t1140:  {
		title: i18n('Город героев')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3']
		, link: {
			  href: 'http://bighero.disney.ru'
			, title: i18n('Город героев')
			, target: '_blank'
		}
		, counters: {
			  show: 11121782
			, load: 11122203
		}
	},	t1141:  {
		title: i18n('Ральф')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3']
		, link: {
			  href: 'http://disney.ru'
			, title: i18n('Ральф')
			, target: '_blank'
		}
		, counters: {
			  show: 12193487
			, load: 12193490
		}
	},	t1142:  {
		title: i18n('Феи')
		, adaptive_background: true
		, link: {
			  href: 'http://fairies.disney.ru'
			, title: i18n('Феи')
			, target: '_blank'
		}
		, counters: {
			  show: 12193650
			, load: 12193654
		}
	},	t1143: {
		title: i18n('Новый год')
		, variants: ['all', 'v2', 'v3']
		, counters: {
			  show: 12860795
			, load: 12860800
		}
	},	t1144:   {
		title: i18n('Чип и Дейл')
		, adaptive_background: true
		, link: {
			  href: 'http://disney.ru'
			, title: i18n('Чип и Дейл')
			, target: '_blank'
		}
		, counters: {
			  show: 12193547
			, load: 12193548
		}
	},	t1145:  {
		title: i18n('Русалочка')
		, adaptive_background: true
		, link: {
			  href: 'http://princess.disney.ru/'
			, title: i18n('Принцессы Disney')
			, target: '_blank'
		}
		, counters: {
			  show: 13059123
			, load: 13059128
		}
	},	t1146:  {
		title: i18n('История игрушек')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3']
		, link: {
			  href: 'http://disney.ru'
			, title: i18n('История игрушек')
			, target: '_blank'
		}
		, counters: {
			  show: 14201232
			, load: 14201246
		}
	},	t1147:  {
		title: i18n('Микки Маус')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3','v4', 'v5']
		, link: {
			  href: 'http://mickey.disney.ru'
			, title: i18n('Микки Маус')
			, target: '_blank'
		}
		, counters: {
			  show: 13204497
			, load: 13204521
		}
	},	t1148:  {
		title: i18n('Храбрая сердцем')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3']
		, link: {
			  href: 'http://princess.disney.ru/'
			, title: i18n('Храбрая сердцем')
			, target: '_blank'
		}
		, counters: {
			  show: 13059216
			, load: 13059226
		}
	},	t1149: {
		title: i18n('Запорожье')
		, link: {
			  href: 'http://games.mail.ru/pc/games/zaporozhe/'
			, title: i18n('Играть')
		}
		, counters: {
			  show: 13785078
			, load: 13785120
		}
	},	t1150:  {
		title: i18n('World Poker Club')
		, link: {
			  href: 'http://games.mail.ru/pc/games/world_poker_club/'
			, title: i18n('World Poker Club')
			, target: '_blank'
		}
		, counters: {
			  show: 13785084
			, load: 13785131
		}
	},	t1151: {
		title: i18n('Роскосмос')
		, adaptive_background: true
		, variants: ['v19','v20']
		, link: {
			  href: 'http://r.mail.ru/n221589859'
			, title: '<!--[ ESCAPE ]--><!--{ Роскосмос }--><!--[ ENDESCAPE ]-->'
			, target: '_blank'
		}
		, select_css_alias: function () {
			return 'all';
		}
		, counters: {
			  show: 15113835
			, load: 15113840
		}
	},	t1153:  {
		title: i18n('Armored Warfare')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3']
		, link: {
			  href: 'https://r.mail.ru/n218996106'
			, title: i18n('Играть!')
			, target: '_blank'
		}
		, counters: {
			  show: 20414296
			, load: 20414301
		}
	},	t1156:  {
		title: i18n('Отпуск')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8' ]
		, select_css_alias: function () {
			return 'all';
		}
		, counters: {
			  show: 21068217
			, load: 21068243
		}
	},	t1164: {
		title: i18n('Горы')
		, adaptive_background: true
		, counters: {
			  show: 35670233
			, load: 35670239
		}
	},	t1165: {
		title: i18n('Дед Мороз')
		, adaptive_background: true
		, counters: {
			  show: 35984481
			, load: 35984482
		}
	},    t1166: {
        title: i18n('Россия')
        , adaptive_background: true
        , variants: ['v1', 'v2', 'v3', 'v4', 'v5', 'v7']
        , select_css_alias: function (variant) {
            if (variant === 'v1') {
                return 'all';
            }
            return variant;
        }
        , counters: {
            show: 0
            , load: 0
        }
    },    t1167: {
        title: i18n('Delivery Club')
        , variants: ['v1', 'v2', 'v3', 'v4']
        , select_css_alias: function (variant) {
            if (variant === 'v1') {
                return 'all';
            }
            return variant;
        }
        , counters: {
            show: 0
            , load: 0
        }
    },	t1168: {
		title: i18n('Новый год')
		, adaptive_background: true
		, counters: {
			  show: 0
			, load: 0
		}
	},	t1169: {
		title: i18n('Звёздные Войны. Светлая сторона Силы'),
		'adaptive_background': true,
		variants: ['v1', 'v2'],
		select_css_alias: function () {
			return 'all';
		},
		counters: {
			show: 0,
			load: 0
		}
	},	t1189: {
		title: i18n('Погода')
		, adaptive_background: true
		, widget: {
			js: 'themes.widgets/weather/widgets.Weather'
			, slot: 2928
		}
		, select_variant: function (model) {
			var data = model.widget.data,
				variant = 'v' + data.sign;
			if (data.now_icon === 'n') {
				variant += '.night';
			}
			return variant;
		}
		, select_css_alias: function (variant) {
			var aliases = {
				'v1': ['v9', 'v10', 'v11', 'v20'],
				'v2': ['v12', 'v13', 'v17', 'v25', 'v29', 'v32', 'v33', 'v45', 'v47'],
				'v3': ['v37', 'v38', 'v39', 'v40', 'v41', 'v42', 'v43'],
				'v4': ['v14', 'v15', 'v16', 'v21', 'v23', 'v27', 'v30'],
				'v5': ['v6', 'v18', 'v28', 'v48'],
				'v7': [],
				'v8': ['v19', 'v31', 'v34', 'v35', 'v36'],
				'v22': [],
				'v24': [],
				'v26': [],
				'v44': ['v46']
			}, alias;

			for (alias in aliases) {
				aliases[alias + '.night'] = aliases[alias].map(function (item) {
					return item + '.night';
				});
			}

			loop: for (alias in aliases) {
				if (alias === variant) {
					break;
				} else {
					for (var i=0, l=aliases[alias].length; i<l; i++) {
						if (aliases[alias][i] === variant) {
							variant = alias;
							break loop;
						}
					}
				}
			}

			return variant;
		}
		, counters: {
			  show: 14298218
			, load: 14298221
		}
	},	t1190:  {
		title: i18n('Чемпионат России по футболу')
		, widget: {
			js: 'themes.widgets/russianfootball/widgets.RussianFootball'
			, slot: 3914
		}
		, adaptive_background: true
		, counters: {
			  show: 6587117
			, load: 6587123
		}
	},	t1191:  {
		title: i18n('Кира Пластинина')
		, counters: {
			  show: 1628549
			, load: 1628537
		}
	},	t1192: {
		title: i18n('Задорина')
		, counters: {
			  show: 1628555
			, load: 1628540
		}
	},	t1193: {
		title: i18n('Логинов')
		, counters: {
			  show: 1628550
			, load: 1628539
		}
	},	t1194: {
		title: i18n('Андрей Бартенев')
		, counters: {
			  show: 2062651
			, load: 2062668
		}
	},	t1195:  {
		title: i18n('Сергей Бондарев')
		, counters: {
			  show: 2062652
			, load: 2062671
		}
	},	t1196: {
		title: i18n('Виктория Андреянова')
		, counters: {
			  show: 2062648
			, load: 2062664
		}
	},	t1197: {
		title: i18n('Султана Французова')
		, counters: {
			  show: 1628548
			, load: 1628536
		}
	},	t1198:  {
		title: i18n('Олег Овсиев')
		, counters: {
			  show: 2062654
			, load: 2062674
		}
	},	t1199:  {
		title: i18n('Влад Лисовец')
		, counters: {
			  show: 2062647
			, load: 2062660
		}
	},	t2000: {
		title: i18n('Спокойствие')
		, adaptive_background: true
		, counters: {
			  show: ''
			, load: ''
		}
	},	t2011:  {
		title: i18n('Скорость')
		, adaptive_background: true
		, counters: {
			  show: 5719916
			, load: 5720185
		}
	},	t2012: {
		title: i18n('Холст')
		, adaptive_background: true
		, counters: {
			  show: 5719917
			, load: 5720187
		}
	},	t2013: {
		title: i18n('Волна')
		, adaptive_background: true
		, counters: {
			  show: 5719923
			, load: 5720189
		}
	},	t2014: {
		title: i18n('Геометрия')
		, adaptive_background: true
		, counters: {
			  show: 5719932
			, load: 5720192
		}
	},	t2015: {
		title: i18n('Каньон Антилопы')
		, adaptive_background: true
		, counters: {
			  show: 5719945
			, load: 5720193
		}
	},	t2016: {
		title: i18n('Лед')
		, adaptive_background: true
		, counters: {
			  show: 5719953
			, load: 5720197
		}
	},	t2017: {
		title: i18n('Променад')
		, adaptive_background: true
		, counters: {
			  show: 5719967
			, load: 5720198
		}
	},	t2018: {
		title: i18n('Спокойствие')
		, adaptive_background: true
		, counters: {
			  show: 5719915
			, load: 5720183
		}
	},	t2019: {
		title: i18n('Перспектива')
		, adaptive_background: true
		, counters: {
			  show: 5719971
			, load: 5720204
		}
	},	t2020: {
		title: i18n('Воздушные шары')
		, adaptive_background: true
		, counters: {
			  show: 5719973
			, load: 5720205
		}
	},	t2022: {
		title: i18n('Цветение')
		, adaptive_background: true
		, counters: {
			  show: 5719975
			, load: 5720206
		}
	},	t2023: {
		title: i18n('На глубине')
		, adaptive_background: true
		, counters: {
			  show: 5719977
			, load: 5720207
		}
	},	t2024: {
		title: i18n('Ёлка')
		, adaptive_background: true
		, counters: {
			  show: 5719980
			, load: 5720208
		}
	},	t2025:  {
		title: i18n('Ромашки')
		, adaptive_background: true
		, counters: {
			  show: 5719982
			, load: 5720209
		}
	},	t2026: {
		title: i18n('Дымка')
		, adaptive_background: true
		, counters: {
			  show: 5719997
			, load: 5720212
		}
	},	t2027: {
		title: i18n('Трава')
		, adaptive_background: true
		, counters: {
			  show: 5720005
			, load: 5720213
		}
	},	t2028:	{
		title: i18n('Зеленый холст')
		, adaptive_background: true
		, counters: {
			  show: 5720024
			, load: 5720214
		}
	},	t2031: {
		title: i18n('Море')
		, adaptive_background: true
		, counters: {
			  show: 5720045
			, load: 5720215
		}
	},	t2032: {
		title: i18n('Серфинг')
		, adaptive_background: true
		, counters: {
			  show: 5720083
			, load: 5720217
		}
	},	t2033: {
		title: i18n('Треугольники')
		, adaptive_background: true
		, counters: {
			  show: 5720125
			, load: 5720218
		}
	},	t2034: {
		title: i18n('Ночной город')
		, adaptive_background: true
		, counters: {
			  show: 5720151
			, load: 5720219
		}
	},	t2040: {
		title: i18n('')
	},	t2041: {
		title: i18n('')
	},	t2042: {
		title: i18n('')
	},	t2043: {
		title: i18n('')
	},	t2044: {
		title: i18n('')
	},	t2045: {
		title: i18n('')
	},	t2046: {
		title: i18n('')
	},	t2047: {
		title: i18n('')
	},	t2048: {
		  title: i18n('Зелёные горы')
		, adaptive_background: true
		, counters: {
			  show: 39131870
			, load: 39132857
		}
	},	t2049: {
		  title: i18n('Лошади')
		, adaptive_background: true
		, counters: {
			  show: 39131894
			, load: 39132858
		}
	},	t2050: {
		  title: i18n('Безмятежность')
		, adaptive_background: true
		, widget: {
			  slot: 6666
		}
		, counters: {
			  show: 39131897
			, load: 39132859
		}
	},	t2051: {
		  title: i18n('День всех влюбленных')
		, adaptive_background: true
		, counters: {
			  show: 0
			, load: 0
		}
	},	t2052: {
		title: i18n('Облачная'),
		'adaptive_background': true,
		variants: ['v1', 'v2'],
		select_css_alias: function () {
			return 'all';
		},
		counters: {
			show: 0,
			load: 0
		}
	},	t2053: {
		  title: i18n('Счастье в конверте')
		, adaptive_background: true
		, counters: {
			  show: 0
			, load: 0
		}
	},	t3000: {
		title: i18n('Погода')
		, adaptive_background: true
		, widget: {
			js: 'themes.widgets/weather/widgets.Weather'
			, slot: 7164
		}
		, select_variant: function (model) {
			return 'v' + model.widget.data.sign;
		}
		, counters: {
			  show: 15402004
			, load: 15402008
		}
	},	t3001: {
		title: i18n('Чемпионат мира по хоккею')
		, adaptive_background: true
		, variants: ['v2']
		, widget: {
			 js: 'themes.widgets/iihf/Widgets.IIHF'
			 , slot: 7337
		 }
		, counters: {
			  show: 15758197
			, load: 15758278
		}
	},	t3002: {
		title: i18n('Гороскоп')
		, adaptive_background: true
		, variants: ['all', 'v2', 'v3', 'v4', 'v5']
		, widget: {
			js: 'themes.widgets/horoscope/widgets.Horoscope'
			, slot: 12082
		}
		, select_css_alias: function () {
			return 'all';
		}
		, counters: {
			  show: 16800981
			, load: 16800987
		}
	},	t3003:	{
		title: i18n('Афиша')
		, widget: {
			js: 'themes.widgets/afisha/widgets.Afisha'
			, slot: 12695
		}
		, counters: {
			  show: 1
			, load: 1
		}
	},	t3004:	{
		title: i18n('Автоновости')
		, adaptive_background: true
		, widget: {
			js: 'themes.widgets/auto/widgets.Auto'
			, slot: 14402
		}
		, counters: {
			  show: 18177693
			, load: 18177693
		}
	},	t3005:	{
		title: i18n('Зенит')
		, adaptive_background: true
		, variants: ['v2']
		, widget: {
			js: 'themes.widgets/zenit/widgets.Zenit'
			, slot: 32313
		}
		, counters: {
			  show: 21886143
			, load: 21886179
		}
	},	t3006: {
		title: i18n('Новогодняя афиша')
		, adaptive_background: true
		, variants: ['all','v2','v3']
		, counters: {
			  show: 19302606
			, load: 19302644
		}
	},	t3007:	{
		title: i18n('ФК Краснодар')
		, adaptive_background: true
		, variants: ['v2', 'v3', 'v4']
		, widget: {
			js: 'themes.widgets/krasnodar/widgets.Krasnodar'
			, slot: 46139
		}
		, counters: {
		  show: 22273690
		, load: 22273708
		}
	},	t3008:	{
		title: i18n('ПФК ЦСКА')
		, adaptive_background: true
		, variants: ['all']
		, widget: {
			js: 'themes.widgets/cska/widgets.CSKA'
			, slot: 46138
		}
		, counters: {
		  show: 22272638
		, load: 22272683
		}
	},	t3009:	{
		title: i18n('ФК Ростов')
		, adaptive_background: true
		, variants: ['all']
		, widget: {
			js: 'themes.widgets/rostov/widgets.Rostov'
			, slot: 46482
		}
		, counters: {
			show: 22332484
		,	load: 22332492
		}
	},	t3010:	{
		title: i18n('Летние игры в Рио')
		, adaptive_background: true
		, widget: {
			js: 'themes.widgets/olimp/widgets.Olimp'
			, slot: 46622
		}
		, counters: {
			  show: 22352923
			, load: 22352944
		}
	},	t3011:	{
		title: i18n('ХК Спартак')
		, adaptive_background: true
		, variants: ['all', 'v2']
		, widget: {
			js: 'themes.widgets/hc-spartak/widgets.SpartakHockey'
			, slot: 83574
		}
		, counters: {
			show: 24131338
			, load: 24131364
		}
	},	t3012:	{
		title: i18n('ФК Спартак Москва')
		, adaptive_background: true
		, variants: ['v1', 'v2']
		, select_css_alias: function () {
			return 'all';
		}
		, widget: {
			slot: 89137
		}
		, counters: {
			show: 25422643
			, load: 25422674
		}
	},	t3015: {
		title: i18n('Зимняя погода')
		, adaptive_background: true
		, widget: {
			js: 'themes.widgets/weather/widgets.Weather'
			, slot: 341187
		}
		, select_variant: function (model) {
			var data = model.widget.data,
				variant = 'v1';
			if (data.now_icon === 'n') {
				variant += '.night';
			}
			return variant;
		}
		, counters: {
			  show: 35670234
			, load: 35670241
		}
	},	t4000: {
		title: i18n(''),
		colorized: '#F0F0F0',
		counters: {
			show: 27237304,
			load: 27237698
		},
		adv: {
			leftLink: '333',
			leftHover: '333',
			leftText: '333',
			leftInfo: '333'
		}
	},	t4001: {
		title: i18n(''),
		colorized: '#4e342e',
		counters: {
			show: 27237316,
			load: 27237716
		}
	},	t4002: {
		title: i18n(''),
		colorized: '#424242',
		counters: {
			show: 27237309,
			load: 27237711
		}
	},	t4003: {
		title: i18n(''),
		colorized: '#5a355a',
		counters: {
			show: 27237327,
			load: 27237725
		}
	},	t4004: {
		title: i18n(''),
		colorized: '#35385a',
		counters: {
			show: 27237336,
			load: 27237734
		}
	},	t4005: {
		title: i18n(''),
		colorized: '#646ecb',
		counters: {
			show: 27237343,
			load: 27237741
		}
	},	t4006: {
		title: i18n(''),
		colorized: '#e73672',
		counters: {
			show: 27237350,
			load: 27237745
		}
	},	t4007: {
		title: i18n(''),
		colorized: '#f44336',
		counters: {
			show: 27237355,
			load: 27237752
		}
	},	t4008: {
		title: i18n(''),
		colorized: '#388e3c',
		counters: {
			show: 27237360,
			load: 27237754
		}
	},	t4009: {
		title: i18n(''),
		colorized: '#81d8d0',
		counters: {
			show: 27237371,
			load: 27237846
		},
		adv: {
			leftLink: '333',
			leftHover: '333',
			leftText: '333',
			leftInfo: '333'
		}
	},	t4010: {
		title: i18n(''),
		colorized: '#E2DCD5',
		counters: {
			show: 27237380,
			load: 27237858
		},
		adv: {
			leftLink: '333',
			leftHover: '333',
			leftText: '333',
			leftInfo: '333'
		}
	},	t4011: {
		title: i18n(''),
		colorized: '#FFEBDC',
		counters: {
			show: 27237384,
			load: 27237880
		},
		adv: {
			leftLink: '333',
			leftHover: '333',
			leftText: '333',
			leftInfo: '333'
		}
	},	t4012: {
		title: i18n(''),
		colorized: '#E7EED2',
		counters: {
			show: 27237387,
			load: 27237882
		},
		adv: {
			leftLink: '333',
			leftHover: '333',
			leftText: '333',
			leftInfo: '333'
		}
	},	t4013: {
		title: i18n(''),
		colorized: '#D0F0F7',
		counters: {
			show: 27237393,
			load: 27237885
		},
		adv: {
			leftLink: '333',
			leftHover: '333',
			leftText: '333',
			leftInfo: '333'
		}
	},	t4014: {
		title: i18n(''),
		colorized: '#C9D0FB',
		counters: {
			show: 27237397,
			load: 27237893
		},
		adv: {
			leftLink: '333',
			leftHover: '333',
			leftText: '333',
			leftInfo: '333'
		}
	},	t4015: {
		title: i18n(''),
		colorized: '#DDF3FF',
		counters: {
			show: 27237408,
			load: 27237902
		},
		adv: {
			leftLink: '333',
			leftHover: '333',
			leftText: '333',
			leftInfo: '333'
		}
	},	t4016: {
		title: i18n('Ego'),
		adaptive_background: true,
		counters: {
			show: 0,
			load: 0
		}
	},	t4017: {
		title: i18n('ДИТ'),
		portal_menu_logo: false,
		counters: {
			show: 0,
			load: 0
		}
	},	t4018: {
		title: i18n('Гринатом'),
		portal_menu_logo: false,
		counters: {
			show: 0,
			load: 0
		}
	},	t5000: {
		title: i18n('Тёмная тема'),
		counters: {
			show: 0,
			load: 0
		}
	},	t5001: {
		title: i18n('Рик и Морти'),
		'adaptive_background': true,
		variants: ['v1', 'v2', 'v3'],
		'select_css_alias': function (variant) {
			if (variant === 'v2') {
				return variant;
			}
			return 'all';
		},
		counters: {
			show: 0,
			load: 0
		}
	},	t5002: {
		title: 'Warface',
		'adaptive_background': true,
		counters: {
			show: 0,
			load: 0
		}
	},	t5003: {
		title: i18n('Звёздные Войны. Тёмная сторона Силы'),
		'adaptive_background': true,
		variants: ['v1', 'v2'],
		select_css_alias: function () {
			return 'all';
		},
		counters: {
			show: 0,
			load: 0
		}
	},	t5004: {
		title: i18n('Тёмная и светлая стороны Силы'),
		'adaptive_background': true,
		counters: {
			show: 0,
			load: 0
		}
	},	t5005: {
		title: 'Epicenter CS:GO',
		'adaptive_background': true,
		variants: ['v1', 'v2'],
		select_css_alias: function () {
			return 'all';
		},
		counters: {
			show: 0,
			load: 0
		}
	},	t5006: {
		title: 'American Dad! Apocalypse Soon',
		'adaptive_background': true,
		variants: ['v1', 'v2'],
		select_css_alias: function () {
			return 'all';
		},
		counters: {
			show: 0,
			load: 0
		}
	},    t5007: {
        title: i18n('LOST ARK'),
        'adaptive_background': true,
        variants: ['v1', 'v2', 'v3', 'v4'],
        select_css_alias: function () {
            return 'all';
        },
        counters: {
            show: 0,
            load: 0
        }
    }} })