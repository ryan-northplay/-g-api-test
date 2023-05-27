const { Prisma } = require('@prisma/client');

const categories = [
  {
    name: 'Hats',
    description: 'Things you can wear on your head',
  },
  {
    name: 'Socks',
    description: 'Things you can wear on your feet',
  },
  {
    name: 'Shirts',
    description: 'Things you wear on the top half of your body',
  },
];

const products = [
  {
    name: 'Cool helmet.',
    description: 'A nice helmet to wear on your head',
    price: new Prisma.Decimal(19.95),
    image: '/images/helmet.jpg',
    category_id: 1,
  },
  {
    name: 'Grey T-Shirt',
    description: 'A nice shirt that you can wear on your body',
    price: new Prisma.Decimal(22.95),
    image: '/images/shirt.jpg',
    category_id: 3,
  },
  {
    name: 'Socks',
    description: 'Cool socks that you can wear on your feet',
    price: new Prisma.Decimal(12.95),
    image: '/images/socks.jpg',
    category_id: 2,
  },
  {
    name: 'Sweatshirt',
    description: 'Cool sweatshirt that you can wear on your body',
    price: new Prisma.Decimal(12.95),
    image: '/images/sweatshirt.jpg',
    category_id: 3,
  },
];

const users = [
	{
		name: "Admin1",
		username: "firstAdmin",
		email: "testadmin@email.com",
		password: "fed3b61b26081849378080b34e693d2e",
	},
  ];
const balances = [
  {
    login: '12345678911234542424242422',
    securekey: '123456789112345',
    balance: new Prisma.Decimal(10.95),
  },
  {
    login: '123456789112345424242',
    securekey: '123456789112345',
    balance: new Prisma.Decimal(10.95),
  },
];

const games = [{
	"id": 6,
	"name": "Oceans Pearl",
	"menu_title": "Mermaid",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/ocean-pearls.jpg",
	"flash": 0
}, {
	"id": 7,
	"name": "Frango",
	"menu_title": "Frango",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/frango.jpg",
	"flash": 0
}, {
	"id": 8,
	"name": "Geisha",
	"menu_title": "Geisha",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/geisha.jpg",
	"flash": 0
}, {
	"id": 9,
	"name": "Zeus",
	"menu_title": "Zeus",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/zeus.jpg",
	"flash": 0
}, {
	"id": 10,
	"name": "Magica",
	"menu_title": "Magica",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/magica.jpg",
	"flash": 0
}, {
	"id": 14,
	"name": "Oscar",
	"menu_title": "Oscar",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/oscar.jpg",
	"flash": 0
}, {
	"id": 15,
	"name": "Tequila7",
	"menu_title": "Tequila7",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/tequila-7.jpg",
	"flash": 0
}, {
	"id": 16,
	"name": "Tequila3",
	"menu_title": "Tequila3",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/tequila.jpg",
	"flash": 0
}, {
	"id": 17,
	"name": "Gold Treasure",
	"menu_title": "GoldTreasure",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/gold-treasure.jpg",
	"flash": 0
}, {
	"id": 18,
	"name": "Mysterious Crypt II",
	"menu_title": "Egyptian",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/mysterious-crypt-2.jpg",
	"flash": 0
}, {
	"id": 19,
	"name": "Dragon Hearts",
	"menu_title": "Dragon",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/dragon-heart.jpg",
	"flash": 0
}, {
	"id": 20,
	"name": "7COOL",
	"menu_title": "Sevenc",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/7cool.jpg",
	"flash": 0
}, {
	"id": 21,
	"name": "7HOT",
	"menu_title": "Sevenh",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/7hot3.jpg",
	"flash": 0
}, {
	"id": 22,
	"name": "7HOT 7",
	"menu_title": "Sevenh7",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/7hot7.jpg",
	"flash": 0
}, {
	"id": 23,
	"name": "777 Blue",
	"menu_title": "Blue",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/777-blue-main.jpg",
	"flash": 0
}, {
	"id": 24,
	"name": "Joker Jack",
	"menu_title": "JokerJ",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/joker-jack.jpg",
	"flash": 0
}, {
	"id": 25,
	"name": "Pharaoh",
	"menu_title": "Pharaoh",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/pharaoh.jpg",
	"flash": 0
}, {
	"id": 42,
	"name": "Gladiator",
	"menu_title": "Gladiator",
	"category": "bomba",
	"mobile": 1,
	"image": "\/bomba\/gladiator.jpg",
	"flash": 0
}, {
	"id": 101,
	"name": "Hot Seven",
	"menu_title": "Hot7",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hot7icon.png",
	"flash": 0
}, {
	"id": 102,
	"name": "Hot Twenty",
	"menu_title": "HotTwenty",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hottwentyicon.png",
	"flash": 0
}, {
	"id": 103,
	"name": "Wild Seven",
	"menu_title": "Wild7",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/wild7icon.png",
	"flash": 0
}, {
	"id": 104,
	"name": "Hot Stars",
	"menu_title": "HotStar",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotstaricon.png",
	"flash": 0
}, {
	"id": 105,
	"name": "Book Of Fortune",
	"menu_title": "BookOfFortune",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bookoffortuneicon.png",
	"flash": 0
}, {
	"id": 106,
	"name": "Book of Aztec",
	"menu_title": "BookOfAztec",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bookofaztecicon.png",
	"flash": 0
}, {
	"id": 107,
	"name": "Admiral",
	"menu_title": "Admiral",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/admiralicon.png",
	"flash": 0
}, {
	"id": 108,
	"name": "Hot 27",
	"menu_title": "TwentySeven",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/twentysevenicon.png",
	"flash": 0
}, {
	"id": 109,
	"name": "Bells On Fire",
	"menu_title": "BellsOnFire",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bellsonfireicon.png",
	"flash": 0
}, {
	"id": 110,
	"name": "Wild Diamonds",
	"menu_title": "WildDiamonds",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/wilddiamondsicon.png",
	"flash": 0
}, {
	"id": 111,
	"name": "Magic Idol",
	"menu_title": "MagicIdol",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/magicidolicon.png",
	"flash": 0
}, {
	"id": 112,
	"name": "Merry Fruits",
	"menu_title": "MerryFruits",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/merryfruitsicon.png",
	"flash": 0
}, {
	"id": 113,
	"name": "Hot Scatter",
	"menu_title": "HotScatter",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotscattericon.png",
	"flash": 0
}, {
	"id": 114,
	"name": "Hot Neon",
	"menu_title": "HotNeon",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotneonicon.png",
	"flash": 0
}, {
	"id": 115,
	"name": "Lovely Lady",
	"menu_title": "LadyLuck",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/ladyluckicon.png",
	"flash": 0
}, {
	"id": 116,
	"name": "Lucky Coin",
	"menu_title": "LuckyCoin",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/luckycoinicon.png",
	"flash": 0
}, {
	"id": 117,
	"name": "Blue Dolphin",
	"menu_title": "BlueDolphin",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bluedolphinicon.png",
	"flash": 0
}, {
	"id": 118,
	"name": "Wild Stars",
	"menu_title": "WildStars",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/wildstarsicon.png",
	"flash": 0
}, {
	"id": 119,
	"name": "Fortunas Fruits",
	"menu_title": "FortunasFruits",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/fortunasfruitsicon.png",
	"flash": 0
}, {
	"id": 120,
	"name": "Casanova",
	"menu_title": "Casanova",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/casanovaicon.png",
	"flash": 0
}, {
	"id": 121,
	"name": "Hot Diamonds",
	"menu_title": "HotDiamonds",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotdiamondsicon.png",
	"flash": 0
}, {
	"id": 122,
	"name": "Party Time",
	"menu_title": "PartyTime",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/partytimeicon.png",
	"flash": 0
}, {
	"id": 123,
	"name": "All Ways Fruits",
	"menu_title": "AllWaysFruits",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/allwaysfruitsicon.png",
	"flash": 0
}, {
	"id": 124,
	"name": "Cool Diamonds II",
	"menu_title": "CoolDiamondsII",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/cooldiamondsiiicon.png",
	"flash": 0
}, {
	"id": 125,
	"name": "Wolf Moon",
	"menu_title": "WolfMoon",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/wolfmoonicon.png",
	"flash": 0
}, {
	"id": 126,
	"name": "Wild Shark",
	"menu_title": "WildShark",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/wildsharkicon.png",
	"flash": 0
}, {
	"id": 127,
	"name": "Dragons Pearl",
	"menu_title": "DragonsPearl",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/dragonspearlicon.png",
	"flash": 0
}, {
	"id": 128,
	"name": "Wild Respin",
	"menu_title": "WildRespin",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/wildrespinicon.png",
	"flash": 0
}, {
	"id": 129,
	"name": "Eye of Ra",
	"menu_title": "EyeOfRa",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/eyeofraicon.png",
	"flash": 0
}, {
	"id": 130,
	"name": "Lady Joker",
	"menu_title": "LadyJoker",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/ladyjokericon.png",
	"flash": 0
}, {
	"id": 131,
	"name": "Magic Owl",
	"menu_title": "MagicOwl",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/magicowlicon.png",
	"flash": 0
}, {
	"id": 132,
	"name": "Arising Phoenix",
	"menu_title": "ArisingPhoenix",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/arisingphoenixicon.png",
	"flash": 0
}, {
	"id": 133,
	"name": "Billyonaire",
	"menu_title": "Billyonaire",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/billyonaireicon.png",
	"flash": 0
}, {
	"id": 134,
	"name": "Diamond Cats",
	"menu_title": "DiamondCats",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/diamondcatsicon.png",
	"flash": 0
}, {
	"id": 135,
	"name": "Lucky Bells",
	"menu_title": "LuckyBells",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/luckybellsicon.png",
	"flash": 0
}, {
	"id": 136,
	"name": "Royal Unicorn",
	"menu_title": "RoyalUnicorn",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/royalunicornicon.png",
	"flash": 0
}, {
	"id": 137,
	"name": "GrandX",
	"menu_title": "GrandX",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/grandxicon.png",
	"flash": 0
}, {
	"id": 138,
	"name": "Lucky Zodiac",
	"menu_title": "LuckyZodiac",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/luckyzodiacicon.png",
	"flash": 0
}, {
	"id": 139,
	"name": "Mermaids Gold",
	"menu_title": "MermaidsGold",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/mermaidsgoldicon.png",
	"flash": 0
}, {
	"id": 140,
	"name": "Roman Legion",
	"menu_title": "RomanLegion",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/romanlegionicon.png",
	"flash": 0
}, {
	"id": 141,
	"name": "Dragons Kingdom",
	"menu_title": "DragonsKingdom",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/dragonskingdomicon.png",
	"flash": 0
}, {
	"id": 142,
	"name": "Bells On Fire Rombo",
	"menu_title": "BellsOnFireRombo",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bellsonfireromboicon.png",
	"flash": 0
}, {
	"id": 143,
	"name": "Magic Forest",
	"menu_title": "MagicForest",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/magicforesticon.png",
	"flash": 0
}, {
	"id": 144,
	"name": "Bells on Fire Hot",
	"menu_title": "BellsOnFireHot",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bellsonfireicon.png",
	"flash": 0
}, {
	"id": 145,
	"name": "Hot 81",
	"menu_title": "Hot81",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hot81icon.png",
	"flash": 0
}, {
	"id": 146,
	"name": "Golden Book",
	"menu_title": "GoldenBook",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/goldenbookicon.png",
	"flash": 0
}, {
	"id": 147,
	"name": "Diamond Monkey",
	"menu_title": "DiamondMonkey",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/diamondmonkeyicon.png",
	"flash": 0
}, {
	"id": 148,
	"name": "Casinova",
	"menu_title": "Casinova",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/casinovaicon.png",
	"flash": 0
}, {
	"id": 149,
	"name": "Red Chilli",
	"menu_title": "RedChilli",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/redchilliicon.png",
	"flash": 0
}, {
	"id": 150,
	"name": "Dynamite7",
	"menu_title": "Dynamite7",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/dynamite7icon.png",
	"flash": 0
}, {
	"id": 151,
	"name": "Fantastico",
	"menu_title": "Fantastico",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/fantasticoicon.png",
	"flash": 0
}, {
	"id": 152,
	"name": "Big Panda",
	"menu_title": "BigPanda",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bigpandaicon.png",
	"flash": 0
}, {
	"id": 153,
	"name": "Lady Luck",
	"menu_title": "LadyLuck2",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/ladyluckicon.png",
	"flash": 0
}, {
	"id": 154,
	"name": "Diamonds On Fire",
	"menu_title": "DiamondsOnFire",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/diamondsonfireicon.png",
	"flash": 0
}, {
	"id": 155,
	"name": "Tweety Birds",
	"menu_title": "TweetyBirds",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/tweetybirdsicon.png",
	"flash": 0
}, {
	"id": 156,
	"name": "Billy's Game",
	"menu_title": "BillysGame",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/billysgameicon.png",
	"flash": 0
}, {
	"id": 157,
	"name": "Aztec Secret",
	"menu_title": "AztecSecret",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/aztecsecreticon.png",
	"flash": 0
}, {
	"id": 158,
	"name": "Wild Dragon",
	"menu_title": "WildDragon",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/wilddragonicon.png",
	"flash": 0
}, {
	"id": 159,
	"name": "Grand Tiger",
	"menu_title": "GrandTiger",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/grandtigericon.png",
	"flash": 0
}, {
	"id": 160,
	"name": "Fire & Ice",
	"menu_title": "FireAndIce",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/fireandiceicon.png",
	"flash": 0
}, {
	"id": 161,
	"name": "Vampires",
	"menu_title": "Vampires",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/vampiresicon.png",
	"flash": 0
}, {
	"id": 162,
	"name": "La Gran Aventura",
	"menu_title": "Lagranaventura",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/lagranaventuraicon.png",
	"flash": 0
}, {
	"id": 163,
	"name": "Gem Star",
	"menu_title": "GemStar",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/gemstaricon.png",
	"flash": 0
}, {
	"id": 164,
	"name": "Lightning Hot",
	"menu_title": "LightningHot",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/lightninghoticon.png",
	"flash": 0
}, {
	"id": 165,
	"name": "All Ways Win",
	"menu_title": "AllwaysWin",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/allwayswinicon.png",
	"flash": 0
}, {
	"id": 166,
	"name": "Magic Scatter",
	"menu_title": "MagicScatter",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/magicscattericon.png",
	"flash": 0
}, {
	"id": 167,
	"name": "Ultra Seven",
	"menu_title": "UltraSeven",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/ultrasevenicon.png",
	"flash": 0
}, {
	"id": 168,
	"name": "Kings Crown",
	"menu_title": "KingsCrown",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/kingscrownicon.png",
	"flash": 0
}, {
	"id": 169,
	"name": "All Ways Joker",
	"menu_title": "AllwaysJoker",
	"category": "amatic",
	"mobile": 0,
	"image": "\/amatic\/allwaysjokericon.png",
	"flash": 0
}, {
	"id": 170,
	"name": "Enchanted Cleopatra",
	"menu_title": "EnchantedCleopatra",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/enchantedcleopatraicon.jpg",
	"flash": 0
}, {
	"id": 171,
	"name": "Hot 40",
	"menu_title": "Hot40",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hot40icon.jpg",
	"flash": 0
}, {
	"id": 172,
	"name": "Golden Joker",
	"menu_title": "GoldenJoker",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/goldenjokericon.jpg",
	"flash": 0
}, {
	"id": 173,
	"name": "Flying Dutchman",
	"menu_title": "FlyingDutchman",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/flyingdutchmanicon.jpg",
	"flash": 0
}, {
	"id": 174,
	"name": "Sakura Fruits",
	"menu_title": "SakuraFruits",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/sakurafruitsicon.jpg",
	"flash": 0
}, {
	"id": 175,
	"name": "Hot Choice",
	"menu_title": "HotChoice",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotchoiceicon.jpg",
	"flash": 0
}, {
	"id": 176,
	"name": "Hot Scatter Dice",
	"menu_title": "HotScatterDice",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotscatterdiceicon.jpg",
	"flash": 0
}, {
	"id": 177,
	"name": "Hot 7 Dice",
	"menu_title": "Hot7Dice",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hot7diceicon.jpg",
	"flash": 0
}, {
	"id": 178,
	"name": "Hot 27 Dice",
	"menu_title": "Hot27Dice",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hot27diceicon.jpg",
	"flash": 0
}, {
	"id": 180,
	"name": "Lucky Little Devil",
	"menu_title": "LuckyLittleDevil",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/luckylittledevilicon.jpg",
	"flash": 0
}, {
	"id": 181,
	"name": "Hot Fruits 20",
	"menu_title": "HotFruits20",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotfruits20icon.jpg",
	"flash": 0
}, {
	"id": 182,
	"name": "Hot Fruits 40",
	"menu_title": "HotFruits40",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotfruits40icon.jpg",
	"flash": 0
}, {
	"id": 183,
	"name": "Hot Fruits 100",
	"menu_title": "HotFruits100",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotfruits100icon.jpg",
	"flash": 0
}, {
	"id": 184,
	"name": "Beauty Fairy",
	"menu_title": "BeautyFairy",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/beautyfairyicon.jpg",
	"flash": 0
}, {
	"id": 185,
	"name": "Book Of Lords",
	"menu_title": "BookOfLords",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bookoflordsicon.jpg",
	"flash": 0
}, {
	"id": 186,
	"name": "Book Of Queen",
	"menu_title": "BookOfQueen",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bookofqueenicon.jpg",
	"flash": 0
}, {
	"id": 187,
	"name": "Lucky Joker 5",
	"menu_title": "LuckyJoker5",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/luckyjoker5icon.jpg",
	"flash": 0
}, {
	"id": 188,
	"name": "Lucky Joker 20",
	"menu_title": "LuckyJoker20",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/luckyjoker20icon.jpg",
	"flash": 0
}, {
	"id": 189,
	"name": "Lucky Joker 40",
	"menu_title": "LuckyJoker40",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/luckyjoker40icon.jpg",
	"flash": 0
}, {
	"id": 190,
	"name": "Beauty Warrior",
	"menu_title": "BeautyWarrior",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/beautywarrioricon.jpg",
	"flash": 0
}, {
	"id": 191,
	"name": "Party Night",
	"menu_title": "PartyNight",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/partynighticon.jpg",
	"flash": 0
}, {
	"id": 192,
	"name": "Dragons Gift",
	"menu_title": "DragonsGift",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/dragonsgifticon.jpg",
	"flash": 0
}, {
	"id": 193,
	"name": "Crystal Fruits",
	"menu_title": "CrystalFruits",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/crystalfruitsicon.jpg",
	"flash": 0
}, {
	"id": 194,
	"name": "Dragon's Mystery",
	"menu_title": "DragonsMystery",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/dragonsmysteryicon.jpg",
	"flash": 0
}, {
	"id": 195,
	"name": "Book Of Pharao",
	"menu_title": "BookOfPharao",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bookofpharaoicon.jpg",
	"flash": 0
}, {
	"id": 196,
	"name": "Hottest Fruits 20",
	"menu_title": "HottestFruits20",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hottestfruits20icon.jpg",
	"flash": 0
}, {
	"id": 197,
	"name": "Sakura Secret",
	"menu_title": "SakuraSecret",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/sakurasecreticon.jpg",
	"flash": 0
}, {
	"id": 198,
	"name": "Hot Fruits 27",
	"menu_title": "HotFruits27",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotfruits27icon.jpg",
	"flash": 0
}, {
	"id": 199,
	"name": "Hottest Fruits 40",
	"menu_title": "HottestFruits40",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hottestfruits40icon.jpg",
	"flash": 0
}, {
	"id": 200,
	"name": "Bingo",
	"menu_title": "Keno",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/kenoicon.png",
	"flash": 0
}, {
	"id": 201,
	"name": "Deuces Wild",
	"menu_title": "DeucesWild",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/deuceswildicon.png",
	"flash": 0
}, {
	"id": 202,
	"name": "Jacks or Better",
	"menu_title": "JacksOrBetter",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/jacksorbettericon.png",
	"flash": 0
}, {
	"id": 203,
	"name": "Joker Card",
	"menu_title": "JokerCardPoker",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/jokercardpokericon.png",
	"flash": 0
}, {
	"id": 204,
	"name": "Multi Card Win",
	"menu_title": "MultiCardWin",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/multicardwinicon.png",
	"flash": 0
}, {
	"id": 205,
	"name": "Multi Card Win Triple",
	"menu_title": "MultiCardWinTriple",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/multicardwintripleicon.png",
	"flash": 0
}, {
	"id": 206,
	"name": "Black Jack",
	"menu_title": "BlackJack",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/blackjackicon.png",
	"flash": 0
}, {
	"id": 207,
	"name": "Fruit Poker",
	"menu_title": "FruitCardPoker",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/fruitcardpokericon.png",
	"flash": 0
}, {
	"id": 208,
	"name": "Tens Or Better",
	"menu_title": "TensOrBetter",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/tensorbettericon.jpg",
	"flash": 0
}, {
	"id": 209,
	"name": "JokerPoker",
	"menu_title": "JokerPokerPoker",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/jokercardpokericon.jpg",
	"flash": 0
}, {
	"id": 220,
	"name": "Lucky Joker 100",
	"menu_title": "LuckyJoker100",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/luckyjoker100icon.jpg",
	"flash": 0
}, {
	"id": 221,
	"name": "Hot Fruits Deluxe",
	"menu_title": "HotFruitsDeluxe",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotfruitsdeluxeicon.jpg",
	"flash": 0
}, {
	"id": 222,
	"name": "Grand Fruits",
	"menu_title": "GrandFruits",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/grandfruitsicon.jpg",
	"flash": 0
}, {
	"id": 223,
	"name": "Grand Casnova",
	"menu_title": "GrandCasanova",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/grandcasanovaicon.jpg",
	"flash": 0
}, {
	"id": 224,
	"name": "Fortune Girl",
	"menu_title": "FortuneGirl",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/fortunegirlicon.jpg",
	"flash": 0
}, {
	"id": 225,
	"name": "Book Of Fruits",
	"menu_title": "BookOfFruits",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bookoffruitsicon.jpg",
	"flash": 0
}, {
	"id": 226,
	"name": "Golden Quest",
	"menu_title": "GoldenQuest",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/goldenquesticon.jpg",
	"flash": 0
}, {
	"id": 227,
	"name": "Fire Queen",
	"menu_title": "FireQueen",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/firequeenicon.jpg",
	"flash": 0
}, {
	"id": 228,
	"name": "Chinese Spider",
	"menu_title": "ChineseSpider",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/chinesespidericon.jpg",
	"flash": 0
}, {
	"id": 229,
	"name": "Plenty Dragons",
	"menu_title": "PlentyDragons",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/plentydragonsicon.jpg",
	"flash": 0
}, {
	"id": 230,
	"name": "Crazy Bee",
	"menu_title": "CrazyBee",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/crazybeeicon.jpg",
	"flash": 0
}, {
	"id": 231,
	"name": "Fruit Box",
	"menu_title": "FruitBox",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/fruitboxicon.jpg",
	"flash": 0
}, {
	"id": 232,
	"name": "Super Cats",
	"menu_title": "SuperCats",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/supercatsicon.jpg",
	"flash": 0
}, {
	"id": 233,
	"name": "Dia Muertos",
	"menu_title": "DiaMuertos",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/diamuertosicon.jpg",
	"flash": 0
}, {
	"id": 234,
	"name": "All Ways Hot Fruits",
	"menu_title": "AllwaysHotFruits",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/allwayshotfruitsicon.jpg",
	"flash": 0
}, {
	"id": 236,
	"name": "Hot Scatter Deluxe",
	"menu_title": "HotScatterDeluxe",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotscatterdeluxeicon.jpg",
	"flash": 0
}, {
	"id": 237,
	"name": "Lady Pin-Ups 100",
	"menu_title": "LadyPinups100",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/ladypinups100icon.jpg",
	"flash": 0
}, {
	"id": 238,
	"name": "Book Of Fruits Halloween",
	"menu_title": "BookOfFruitsHalloween",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bookoffruitshalloweenicon.jpg",
	"flash": 0
}, {
	"id": 239,
	"name": "Hot Choice Deluxe",
	"menu_title": "HotChoiceDeluxe",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/hotchoicedeluxeicon.jpg",
	"flash": 0
}, {
	"id": 240,
	"name": "Oktoberfest",
	"menu_title": "Oktoberfest",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/oktoberfesticon.jpg",
	"flash": 0
}, {
	"id": 241,
	"name": "Mega Shark",
	"menu_title": "MegaShark",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/megasharkicon.jpg",
	"flash": 0
}, {
	"id": 242,
	"name": "Lucky Respin",
	"menu_title": "LuckyRespin",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/luckyrespinicon.jpg",
	"flash": 0
}, {
	"id": 243,
	"name": "Book of Fruits 20",
	"menu_title": "bookoffruits20",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/bookoffruits20icon.jpg",
	"flash": 0
}, {
	"id": 244,
	"name": "Nicer Dice 40",
	"menu_title": "nicerdice40",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/nicerdice40icon.jpg",
	"flash": 0
}, {
	"id": 245,
	"name": "Lady Fruits 20",
	"menu_title": "LadyFruits20",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/ladyfruits20icon.jpg",
	"flash": 0
}, {
	"id": 246,
	"name": "Lovely Lady Xmas",
	"menu_title": "LovelyLadyXmas",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/lovelyladyxmasicon.jpg",
	"flash": 0
}, {
	"id": 300,
	"name": "Roulette Royal",
	"menu_title": "RouletteRoyal",
	"category": "amatic",
	"mobile": 1,
	"image": "\/amatic\/rouletteroyalicon.png",
	"flash": 0
}, {
	"id": 501,
	"name": "StarBurst",
	"menu_title": "starburst",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/starbursticon.jpg",
	"flash": 0
}, {
	"id": 502,
	"name": "TwinSpin",
	"menu_title": "twinspin",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/twinspinicon.jpg",
	"flash": 0
}, {
	"id": 503,
	"name": "Magic Portals",
	"menu_title": "magicportals",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/magicportalsicon.jpg",
	"flash": 0
}, {
	"id": 504,
	"name": "Victorious",
	"menu_title": "victorious",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/victoriousicon.jpg",
	"flash": 0
}, {
	"id": 505,
	"name": "Dead or Alive",
	"menu_title": "deadoralive",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/deadoraliveicon.jpg",
	"flash": 0
}, {
	"id": 506,
	"name": "Eggomatic",
	"menu_title": "eggomatic",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/eggomaticicon.jpg",
	"flash": 0
}, {
	"id": 507,
	"name": "Gonzos Quest",
	"menu_title": "eldorado",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/eldoradoicon.jpg",
	"flash": 0
}, {
	"id": 508,
	"name": "Flowers",
	"menu_title": "flowers",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/flowersicon.jpg",
	"flash": 0
}, {
	"id": 509,
	"name": "Jack and the Beanstalk",
	"menu_title": "jackandbeanstalk",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/jackandbeanstalkicon.jpg",
	"flash": 0
}, {
	"id": 510,
	"name": "JackHammer 2",
	"menu_title": "jackhammer2",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/jackhammer2icon.jpg",
	"flash": 0
}, {
	"id": 511,
	"name": "Piggy Riches",
	"menu_title": "piggyriches",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/piggyrichesicon.jpg",
	"flash": 0
}, {
	"id": 512,
	"name": "Reel Steal",
	"menu_title": "reelsteal",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/reelstealicon.jpg",
	"flash": 0
}, {
	"id": 513,
	"name": "Secret of the Stones",
	"menu_title": "secretofthestones",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/secretofthestonesicon.jpg",
	"flash": 0
}, {
	"id": 515,
	"name": "Excalibur",
	"menu_title": "excalibur",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/excaliburicon.jpg",
	"flash": 0
}, {
	"id": 516,
	"name": "Lucky Angler",
	"menu_title": "luckyangler",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/luckyanglericon.jpg",
	"flash": 0
}, {
	"id": 517,
	"name": "Wild Water",
	"menu_title": "wildwater",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/wildwatericon.jpg",
	"flash": 0
}, {
	"id": 520,
	"name": "Spinata Grande",
	"menu_title": "colossalpinatas",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/spinatagrandeicon.jpg",
	"flash": 0
}, {
	"id": 521,
	"name": "Fruit Case",
	"menu_title": "fruits",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/fruitcaseicons.jpg",
	"flash": 0
}, {
	"id": 523,
	"name": "Wild Turkey",
	"menu_title": "wildturkey",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/wildturkeyicon.jpg",
	"flash": 0
}, {
	"id": 524,
	"name": "Lost Island",
	"menu_title": "lostisland",
	"category": "netent",
	"mobile": 0,
	"image": "\/netent\/lostislandicon.jpg",
	"flash": 0
}, {
	"id": 526,
	"name": "Lights",
	"menu_title": "fireflies",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/lightsicon.jpg",
	"flash": 0
}, {
	"id": 529,
	"name": "Fruit Shop",
	"menu_title": "fruitshop",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/fruitshopicon.jpg",
	"flash": 0
}, {
	"id": 530,
	"name": "Glow",
	"menu_title": "glow",
	"category": "netent",
	"mobile": 0,
	"image": "\/netent\/glowicon.jpg",
	"flash": 0
}, {
	"id": 532,
	"name": "Dracula",
	"menu_title": "dracula",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/draculaicon.jpg",
	"flash": 0
}, {
	"id": 540,
	"name": "Spellcast",
	"menu_title": "wizards",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/wizardicon.jpg",
	"flash": 0
}, {
	"id": 545,
	"name": "Blood Suckers",
	"menu_title": "bloodsuckers",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/bloodsuckersicon.jpg",
	"flash": 0
}, {
	"id": 546,
	"name": "Neon Staxx",
	"menu_title": "neonstaxx",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/neonstaxxicon.jpg",
	"flash": 0
}, {
	"id": 549,
	"name": "Sparks",
	"menu_title": "sparks",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/sparksicon.jpg",
	"flash": 0
}, {
	"id": 551,
	"name": "Bollywood Story",
	"menu_title": "bollywoodstory",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/bollywoodstoryicon.jpg",
	"flash": 0
}, {
	"id": 552,
	"name": "Go Bananas",
	"menu_title": "monkeys",
	"category": "netent",
	"mobile": 0,
	"image": "\/netent\/monkeysicon.jpg",
	"flash": 0
}, {
	"id": 553,
	"name": "Dazzle Me",
	"menu_title": "dazzleme",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/dazzlemeicon.jpg",
	"flash": 0
}, {
	"id": 554,
	"name": "JokerPro",
	"menu_title": "jokerpro",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/jokerproicon.jpg",
	"flash": 0
}, {
	"id": 555,
	"name": "Mythic Maiden",
	"menu_title": "mythicmaiden",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/mythicmaidenicon.jpg",
	"flash": 0
}, {
	"id": 556,
	"name": "Motorhead",
	"menu_title": "motorhead",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/motorheadicon.jpg",
	"flash": 0
}, {
	"id": 557,
	"name": "The Invisible Man",
	"menu_title": "invisibleman",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/invisiblemanicon.jpg",
	"flash": 0
}, {
	"id": 558,
	"name": "Secret Atlantis",
	"menu_title": "highlights",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/highlightsicon.jpg",
	"flash": 0
}, {
	"id": 559,
	"name": "Aloha Cluster Pays",
	"menu_title": "aloha",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/alohaicon.jpg",
	"flash": 0
}, {
	"id": 561,
	"name": "Reel Rush",
	"menu_title": "reelrush",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/reelrushicon.jpg",
	"flash": 0
}, {
	"id": 562,
	"name": "Jack Hammer",
	"menu_title": "jackhammer",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/jackhammericon.jpg",
	"flash": 0
}, {
	"id": 563,
	"name": "King of slots",
	"menu_title": "kingofslots",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/kingofslotsicon.jpg",
	"flash": 0
}, {
	"id": 564,
	"name": "Warlords - Crystals of Power",
	"menu_title": "warlords",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/warlordsicon.jpg",
	"flash": 0
}, {
	"id": 565,
	"name": "Drive Multiplier Mayhem",
	"menu_title": "multipliermayhem",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/multipliermayhemicon.jpg",
	"flash": 0
}, {
	"id": 566,
	"name": "Wild Wild West",
	"menu_title": "wildwildwest",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/wildwildwesticon.jpg",
	"flash": 0
}, {
	"id": 567,
	"name": "FL Red Riding Hood",
	"menu_title": "fairyred",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/fairyredicon.jpg",
	"flash": 0
}, {
	"id": 570,
	"name": "GUNS N' ROSES",
	"menu_title": "gunsnroses",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/gunsnrosesicon.jpg",
	"flash": 0
}, {
	"id": 571,
	"name": "Jimi Hendrix",
	"menu_title": "jimihendrix",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/jimihendrixicon.jpg",
	"flash": 0
}, {
	"id": 572,
	"name": "The wish master",
	"menu_title": "wishmaster",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/wishmastericon.jpg",
	"flash": 0
}, {
	"id": 573,
	"name": "Flowers Game Christmas",
	"menu_title": "flowerschristmas",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/flowers-christmas-slots-game.jpg",
	"flash": 0
}, {
	"id": 574,
	"name": "Fruit Shop Christmas",
	"menu_title": "fruitshopchristmas",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/fruit-shop-christmas-edition.jpg",
	"flash": 0
}, {
	"id": 575,
	"name": "Ghost Pirates",
	"menu_title": "ghostpirates",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/ghostpiretes.jpg",
	"flash": 0
}, {
	"id": 577,
	"name": "Stickers",
	"menu_title": "stickers",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/stickersnetent.jpg",
	"flash": 0
}, {
	"id": 579,
	"name": "Spacewars",
	"menu_title": "spacewars",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/Space-Wars.png",
	"flash": 0
}, {
	"id": 583,
	"name": "Copy Cats",
	"menu_title": "copycats",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/copycats-thumbnail.png",
	"flash": 0
}, {
	"id": 584,
	"name": "Butterfly Staxx",
	"menu_title": "butterflystaxx",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/logo-butterfly-staxx-netent-slot-game.png",
	"flash": 0
}, {
	"id": 591,
	"name": "Wolf Cub",
	"menu_title": "wolfcub",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/wolfcubicon.jpg",
	"flash": 0
}, {
	"id": 592,
	"name": "Berry Burst Max",
	"menu_title": "berryburstmax",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/berryburstmaxicon.jpg",
	"flash": 0
}, {
	"id": 593,
	"name": "Jumanji",
	"menu_title": "jumanji",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/jumanjiicon.jpg",
	"flash": 0
}, {
	"id": 594,
	"name": "Berry Burst",
	"menu_title": "berryburst",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/berrybursticon.jpg",
	"flash": 0
}, {
	"id": 595,
	"name": "Wild-O-Tron 3000",
	"menu_title": "wildotron3000",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/wildotron3000icon.jpg",
	"flash": 0
}, {
	"id": 596,
	"name": "Swipe and Roll",
	"menu_title": "swipe",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/swipeicon.jpg",
	"flash": 0
}, {
	"id": 597,
	"name": "Bloodsuckers II",
	"menu_title": "bloodsuckers2",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/bloodsuckers2icon.jpg",
	"flash": 0
}, {
	"id": 598,
	"name": "Elements",
	"menu_title": "elements",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/elementsicon.jpg",
	"flash": 0
}, {
	"id": 599,
	"name": "Double Stacks",
	"menu_title": "doublestacks",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/doublestacksicon.jpg",
	"flash": 0
}, {
	"id": 600,
	"name": "Jungle Spirit",
	"menu_title": "junglespirit",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/junglespiriticon.jpg",
	"flash": 0
}, {
	"id": 601,
	"name": "Halloween Jack",
	"menu_title": "halloweenjack",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/halloweenjackicon.jpg",
	"flash": 0
}, {
	"id": 602,
	"name": "Jingle Spin",
	"menu_title": "jinglespin",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/jinglespinicon.jpg",
	"flash": 0
}, {
	"id": 603,
	"name": "Fruit Spin",
	"menu_title": "jewelfruits",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/jewelfruitsicon.jpg",
	"flash": 0
}, {
	"id": 604,
	"name": "Arabian",
	"menu_title": "arabian",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/arabianicon.jpg",
	"flash": 0
}, {
	"id": 605,
	"name": "Steam Tower",
	"menu_title": "steamtower",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/steamtowericon.jpg",
	"flash": 0
}, {
	"id": 606,
	"name": "Golden Grimoire",
	"menu_title": "goldengrimoire",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/goldengrimoireicon.jpg",
	"flash": 0
}, {
	"id": 607,
	"name": "Twin Spin Deluxe",
	"menu_title": "twinspindeluxe",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/twinspindeluxeicon.jpg",
	"flash": 0
}, {
	"id": 608,
	"name": "Vikings",
	"menu_title": "vikings",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/vikingsicon.jpg",
	"flash": 0
}, {
	"id": 609,
	"name": "Dead Or Alive 2",
	"menu_title": "dead-or-alive-2",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/dead-or-alive-2icon.jpg",
	"flash": 0
}, {
	"id": 610,
	"name": "Narcos",
	"menu_title": "narcos-client",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/narcos-clienticon.jpg",
	"flash": 0
}, {
	"id": 611,
	"name": "Scudamore's Super Stakes",
	"menu_title": "scudamore-client",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/scudamore-clienticon.jpg",
	"flash": 0
}, {
	"id": 612,
	"name": "Spinsane",
	"menu_title": "spinsane-client",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/spinsane-clienticon.jpg",
	"flash": 0
}, {
	"id": 613,
	"name": "Sweety Honey Fruity",
	"menu_title": "sweetyhoneyfruity",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/sweetyhoneyfruityicon.jpg",
	"flash": 0
}, {
	"id": 614,
	"name": "Twin Happiness",
	"menu_title": "twinhappiness",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/twinhappinessicon.jpg",
	"flash": 0
}, {
	"id": 615,
	"name": "Victorious Max",
	"menu_title": "victoriousmax",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/victoriousmaxicon.jpg",
	"flash": 0
}, {
	"id": 616,
	"name": "The Wolfs Bane",
	"menu_title": "thewolfsnight",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/thewolfsnighticon.jpg",
	"flash": 0
}, {
	"id": 617,
	"name": "Cosmic Eclipse",
	"menu_title": "cosmiceclipse",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/cosmiceclipseicon.jpg",
	"flash": 0
}, {
	"id": 619,
	"name": "Santa vs Rudolf",
	"menu_title": "santavsrudolf",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/santavsrudolficon.jpg",
	"flash": 0
}, {
	"id": 620,
	"name": "King of 3 Kingdoms",
	"menu_title": "kingof3kingdoms",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/kingof3kingdomsicon.jpg",
	"flash": 0
}, {
	"id": 621,
	"name": "Pirate from The East",
	"menu_title": "piratefromtheeast",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/piratefromtheeasticon.jpg",
	"flash": 0
}, {
	"id": 622,
	"name": "Whos The Bride",
	"menu_title": "whosthebride",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/whosthebrideicon.jpg",
	"flash": 0
}, {
	"id": 623,
	"name": "East Sea Dragon King",
	"menu_title": "eastseadragonking",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/eastseadragonkingicon.jpg",
	"flash": 0
}, {
	"id": 624,
	"name": "Fortune Rangers",
	"menu_title": "fortunerangers",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/fortunerangersicon.jpg",
	"flash": 0
}, {
	"id": 625,
	"name": "Long Pao",
	"menu_title": "longpao",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/longpaoicon.jpg",
	"flash": 0
}, {
	"id": 627,
	"name": "Treasure Rain",
	"menu_title": "treasurerain",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/treasurerainicon.jpg",
	"flash": 0
}, {
	"id": 628,
	"name": "Secrets of Christmas",
	"menu_title": "secretsofchristmas",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/secretsofchristmasicon.jpg",
	"flash": 0
}, {
	"id": 700,
	"name": "European Roulette",
	"menu_title": "europeanroulette3",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/europeanroulette3icon.jpg",
	"flash": 0
}, {
	"id": 701,
	"name": "French Roulette",
	"menu_title": "frenchroulette3",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/frenchroulette3icon.jpg",
	"flash": 0
}, {
	"id": 702,
	"name": "American Roulette",
	"menu_title": "americanroulette3",
	"category": "netent",
	"mobile": 1,
	"image": "\/netent\/americanroulette3icon.jpg",
	"flash": 0
}, {
	"id": 703,
	"name": "Roulette 2 Advanced ",
	"menu_title": "roulette2adv",
	"category": "netent",
	"mobile": 0,
	"image": "\/netent\/roulette2advicon.jpg",
	"flash": 0
}, {
	"id": 1001,
	"name": "Book of Ra Deluxe",
	"menu_title": "bookofradeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/book-of-ra-win-tips.jpg",
	"flash": 0
}, {
	"id": 1002,
	"name": "Book of Ra Classic",
	"menu_title": "bookofraclassic",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/1_book_of_ra.jpg",
	"flash": 0
}, {
	"id": 1003,
	"name": "Lord of the Ocean",
	"menu_title": "lordoftheocean",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/lord_of_the_ocean.jpg",
	"flash": 0
}, {
	"id": 1004,
	"name": "Red Lady",
	"menu_title": "redlady",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/Red-Lady-Free-Slot.jpg",
	"flash": 0
}, {
	"id": 1005,
	"name": "Sizzling Hot Deluxe",
	"menu_title": "sizzlinghotdeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/sizzling-hot-deluxe.jpg",
	"flash": 0
}, {
	"id": 1006,
	"name": "Plenty on Twenty",
	"menu_title": "plentyontwenty",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/plenty-on-twenty.jpg",
	"flash": 0
}, {
	"id": 1007,
	"name": "Lucky Lady's Charm Deluxe",
	"menu_title": "luckyladyscharmdeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/Lucky-Lady-Charm-Deluxe-slot.jpeg",
	"flash": 0
}, {
	"id": 1008,
	"name": "Katana",
	"menu_title": "katana",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/katana.jpg",
	"flash": 0
}, {
	"id": 1009,
	"name": "Dolphin's Pearl Deluxe",
	"menu_title": "dolphinspearldeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/dolphins-pearl.jpg",
	"flash": 0
}, {
	"id": 1010,
	"name": "Roaring Forties",
	"menu_title": "roaringforties",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/roaring-forties-logo.png",
	"flash": 0
}, {
	"id": 1011,
	"name": "Just Jewels Deluxe",
	"menu_title": "justjewelsdeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/just-jewels-deluxe-novomatic-slot-oyunu-novomatic-slot-oyunu.png",
	"flash": 0
}, {
	"id": 1012,
	"name": "Mystic Secrets",
	"menu_title": "mysticsecrets",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/7244_417fbfdf7971a0c04e9e4549b476f8b5.jpg",
	"flash": 0
}, {
	"id": 1013,
	"name": "Gorilla",
	"menu_title": "gorilla",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/gorilla-novomatic-big.jpg",
	"flash": 0
}, {
	"id": 1014,
	"name": "Columbus Deluxe",
	"menu_title": "columbusdeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/Columbus-Deluxe-Online-Free-Slot.jpg",
	"flash": 0
}, {
	"id": 1015,
	"name": "Beetlemania Deluxe",
	"menu_title": "beetlemaniadeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/beetle-mania-deluxe-online.jpg",
	"flash": 0
}, {
	"id": 1016,
	"name": "Diamond 7",
	"menu_title": "diamond7",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/rsz_diamond7.jpg",
	"flash": 0
}, {
	"id": 1017,
	"name": "Dazzling Diamonds",
	"menu_title": "dazzlingdiamonds",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/dazzling_diamonds_logo.jpg",
	"flash": 0
}, {
	"id": 1018,
	"name": "Orca",
	"menu_title": "orca",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/18420_417fbfdf7971a0c04e9e4549b476f8b5.png",
	"flash": 0
}, {
	"id": 1019,
	"name": "UltraHot Deluxe",
	"menu_title": "ultrahotdeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/Ultra-Hot-Deluxe.jpg",
	"flash": 0
}, {
	"id": 1020,
	"name": "Golden Ark",
	"menu_title": "goldenark",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/golden-ark-novomatic-big.jpg",
	"flash": 0
}, {
	"id": 1021,
	"name": "Dolphins Pearl Classic",
	"menu_title": "dolphinspearlclassic",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/dolphins_pearl.jpg",
	"flash": 0
}, {
	"id": 1022,
	"name": "Gryphons Gold Deluxe",
	"menu_title": "gryphonsgolddeluxe",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/Gryphons_Gold_Deluxe.jpg",
	"flash": 0
}, {
	"id": 1023,
	"name": "Helena",
	"menu_title": "helena",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/5495_417fbfdf7971a0c04e9e4549b476f8b5.jpg",
	"flash": 0
}, {
	"id": 1024,
	"name": "Plenty of Fruit 20",
	"menu_title": "plentyoffruit20",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/17137.jpg",
	"flash": 0
}, {
	"id": 1025,
	"name": "Plenty of Jewels 20 Hot",
	"menu_title": "plentyofjewels20hot",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/PlentyofJewels20Hot.jpg",
	"flash": 0
}, {
	"id": 1026,
	"name": "Plenty of Fruit 20 Hot",
	"menu_title": "plentyoffruit20hot",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/game_1307_plentyoffruits20hot_teaser_520x300.jpg",
	"flash": 0
}, {
	"id": 1027,
	"name": "Plenty of Fruit 40",
	"menu_title": "plentyoffruit40",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/maxresdefault.jpg",
	"flash": 0
}, {
	"id": 1028,
	"name": "Book of Stars",
	"menu_title": "bookofstars",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/Book-of-Stars.jpg",
	"flash": 0
}, {
	"id": 1029,
	"name": "Inferno",
	"menu_title": "inferno",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/inferno-1-200x80.png",
	"flash": 0
}, {
	"id": 1030,
	"name": "Magic 81",
	"menu_title": "magic81",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/7383_e88df09c5ff3aaafe1e4f76a0daee289.jpg",
	"flash": 0
}, {
	"id": 1031,
	"name": "Pharaohs Ring",
	"menu_title": "pharaohsring",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/pharaohs-ring-logo.jpg",
	"flash": 0
}, {
	"id": 1032,
	"name": "Mega Joker",
	"menu_title": "megajoker",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/mega_joker_slot_logo.jpg",
	"flash": 0
}, {
	"id": 1033,
	"name": "Xtra Hot",
	"menu_title": "xtrahot",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/xtra-hot-logo.jpg",
	"flash": 0
}, {
	"id": 1034,
	"name": "Book of Ra Deluxe 6",
	"menu_title": "bookofradeluxe6",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/book-of-ra-deluxe-6-slot.jpg",
	"flash": 0
}, {
	"id": 1035,
	"name": "Rex",
	"menu_title": "rex",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/Rex.jpg",
	"flash": 0
}, {
	"id": 1036,
	"name": "Fruitilicious",
	"menu_title": "fruitilicious",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/7 Fruitilicious.jpg",
	"flash": 0
}, {
	"id": 1037,
	"name": "Fabulousfruits",
	"menu_title": "fabulousfruits",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/fabulousfruitsicon.jpg",
	"flash": 0
}, {
	"id": 1038,
	"name": "Hot Cubes",
	"menu_title": "hotcubes",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/hot-cubes.jpg",
	"flash": 0
}, {
	"id": 1039,
	"name": "Dynasty of Ra",
	"menu_title": "dynastyofra",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/6951_e88df09c5ff3aaafe1e4f76a0daee289.jpg",
	"flash": 0
}, {
	"id": 1040,
	"name": "Dragon's Pearl",
	"menu_title": "novodragonspearl",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/Dragon_Pearl.jpg",
	"flash": 0
}, {
	"id": 1041,
	"name": "Hold your Horses",
	"menu_title": "holdyourhorses",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/hold-your-horses.jpg",
	"flash": 0
}, {
	"id": 1042,
	"name": "Indian Spirit",
	"menu_title": "indianspirit",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/indianspiriticon.jpg",
	"flash": 0
}, {
	"id": 1043,
	"name": "Power Stars",
	"menu_title": "powerstars",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/powerstarsicon.jpg",
	"flash": 0
}, {
	"id": 1044,
	"name": "Supra Hot",
	"menu_title": "suprahot",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/suprahoticon.jpg",
	"flash": 0
}, {
	"id": 1045,
	"name": "Flamenco Roses",
	"menu_title": "flamencoroses",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/flamencorosesicon.jpg",
	"flash": 0
}, {
	"id": 1046,
	"name": "Always Hot Deluxe",
	"menu_title": "alwayshotdeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/alwayshotdeluxeicon.jpg",
	"flash": 0
}, {
	"id": 1047,
	"name": "Queen of Hearts Deluxe",
	"menu_title": "queenofheartsdeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/queenofheartsdeluxeicon.jpg",
	"flash": 0
}, {
	"id": 1048,
	"name": "Chicago",
	"menu_title": "chicago",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/chicagoicon.jpg",
	"flash": 0
}, {
	"id": 1049,
	"name": "Random Runner 15",
	"menu_title": "randomrunner15",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/randomrunner15icon.jpg",
	"flash": 0
}, {
	"id": 1050,
	"name": "Reel King",
	"menu_title": "reelking",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/reelkingicon.jpg",
	"flash": 0
}, {
	"id": 1051,
	"name": "The Real King Gold Records",
	"menu_title": "therealkinggoldrecords",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/therealkinggoldrecordsicon.jpg",
	"flash": 0
}, {
	"id": 1052,
	"name": "Eye of the Dragon",
	"menu_title": "eyeofthedragon",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/eyeofthedragonicon.jpg",
	"flash": 0
}, {
	"id": 1053,
	"name": "Queen Cleopatra",
	"menu_title": "queencleopatra",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/queencleopatraicon.jpg",
	"flash": 0
}, {
	"id": 1054,
	"name": "Empire V",
	"menu_title": "empirev",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/empirevicon.jpg",
	"flash": 0
}, {
	"id": 1055,
	"name": "Fruit Sensation",
	"menu_title": "fruitsensation",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/fruitsensationicon.jpg",
	"flash": 0
}, {
	"id": 1056,
	"name": "Sizzling Gems",
	"menu_title": "sizzlinggems",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/sizzlinggemsicon.jpg",
	"flash": 0
}, {
	"id": 1057,
	"name": "Red Hot Fruits",
	"menu_title": "redhotfruits",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/redhotfruitsicon.jpg",
	"flash": 0
}, {
	"id": 1058,
	"name": "Roaring Wilds",
	"menu_title": "roaringwilds",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/roaringwildsicon.jpg",
	"flash": 0
}, {
	"id": 1059,
	"name": "Sevens",
	"menu_title": "sevens",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/sevensicon.jpg",
	"flash": 0
}, {
	"id": 1060,
	"name": "Sizzling Hot 6 Extra Gold",
	"menu_title": "sizzlinghot6extragold",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/sizzlinghot6extragoldicon.jpg",
	"flash": 0
}, {
	"id": 1061,
	"name": "Sizzling6",
	"menu_title": "sizzling6",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/sizzling6icon.jpg",
	"flash": 0
}, {
	"id": 1062,
	"name": "Bars & Sevens",
	"menu_title": "barsandsevens",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/barsandsevensicon.jpg",
	"flash": 0
}, {
	"id": 1063,
	"name": "Fruits'n Royals",
	"menu_title": "fruitsandroyals",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/fruitsandroyalsicon.jpg",
	"flash": 0
}, {
	"id": 1064,
	"name": "Golden 7",
	"menu_title": "golden7",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/golden7icon.jpg",
	"flash": 0
}, {
	"id": 1065,
	"name": "Sparkling Gems",
	"menu_title": "sparklinggems",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/sparklinggemsicon.jpg",
	"flash": 0
}, {
	"id": 1066,
	"name": "Lucky Lady's Charm Deluxe 6",
	"menu_title": "luckyladyscharmdeluxe6",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/luckyladyscharmdeluxe6icon.jpg",
	"flash": 0
}, {
	"id": 1067,
	"name": "Flame Dancer",
	"menu_title": "flamedancer",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/flamedancericon.jpg",
	"flash": 0
}, {
	"id": 1068,
	"name": "Cash Runner",
	"menu_title": "cashrunner",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/cashrunnericon.jpg",
	"flash": 0
}, {
	"id": 1069,
	"name": "Plenty On Twenty II Hot",
	"menu_title": "plentyontwentyiihot",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/plentyontwentyiihoticon.jpg",
	"flash": 0
}, {
	"id": 1070,
	"name": "Jumping Jokers",
	"menu_title": "jumpingjokers",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/jumpingjokersicon.jpg",
	"flash": 0
}, {
	"id": 1071,
	"name": "Big Runner",
	"menu_title": "bigrunner",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/bigrunnericon.jpg",
	"flash": 0
}, {
	"id": 1072,
	"name": "Mystery Star",
	"menu_title": "mysterystar",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/mysterystaricon.jpg",
	"flash": 0
}, {
	"id": 1073,
	"name": "Fruit Farm",
	"menu_title": "fruitfarm",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/fruitfarmicon.jpg",
	"flash": 0
}, {
	"id": 1074,
	"name": "The Real King",
	"menu_title": "therealking",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/therealkingicon.jpg",
	"flash": 0
}, {
	"id": 1075,
	"name": "Cindereela",
	"menu_title": "cindereela",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/cindereelaicon.jpg",
	"flash": 0
}, {
	"id": 1076,
	"name": "King Of Cards",
	"menu_title": "kingofcards",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/kingofcardsicon.jpg",
	"flash": 0
}, {
	"id": 1077,
	"name": "Wizard",
	"menu_title": "wizard",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/wizardicon.jpg",
	"flash": 0
}, {
	"id": 1078,
	"name": "Win Wizard",
	"menu_title": "winwizard",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/winwizardicon.jpg",
	"flash": 0
}, {
	"id": 1079,
	"name": "Triple Luck",
	"menu_title": "tripleluck",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/tripleluckicon.jpg",
	"flash": 0
}, {
	"id": 1080,
	"name": "Bull Rush",
	"menu_title": "bullrush",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/bullrushicon.jpg",
	"flash": 0
}, {
	"id": 1081,
	"name": "Ninja's Path",
	"menu_title": "ninjapath",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/ninjapathicon.jpg",
	"flash": 0
}, {
	"id": 1082,
	"name": "Totally Wild",
	"menu_title": "totallywild",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/totallywildicon.jpg",
	"flash": 0
}, {
	"id": 1083,
	"name": "Red Hot Burning",
	"menu_title": "redhotburning",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/redhotburningicon.jpg",
	"flash": 0
}, {
	"id": 1084,
	"name": "Faust",
	"menu_title": "faust",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/fausticon.jpg",
	"flash": 0
}, {
	"id": 1085,
	"name": "Coin of Apollo",
	"menu_title": "coinofapollo",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/coinofapolloicon.jpg",
	"flash": 0
}, {
	"id": 1086,
	"name": "Stories Of Infintity",
	"menu_title": "storiesofinfinity",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/storiesofinfinityicon.jpg",
	"flash": 0
}, {
	"id": 1087,
	"name": "Secret Elixir",
	"menu_title": "secretelixir",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/secretelixiricon.jpg",
	"flash": 0
}, {
	"id": 1088,
	"name": "Captain Venture",
	"menu_title": "captainventure",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/captainventureicon.jpg",
	"flash": 0
}, {
	"id": 1089,
	"name": "Red Hot 20",
	"menu_title": "redhot20",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/redhot20icon.jpg",
	"flash": 0
}, {
	"id": 1090,
	"name": "Red Hot 40",
	"menu_title": "redhot40",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/redhot40icon.jpg",
	"flash": 0
}, {
	"id": 1091,
	"name": "Royal Dynasty",
	"menu_title": "royaldynasty",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/royaldynastyicon.jpg",
	"flash": 0
}, {
	"id": 1092,
	"name": "The Royals",
	"menu_title": "theroyals",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/theroyalsicon.jpg",
	"flash": 0
}, {
	"id": 1093,
	"name": "Aztec Power",
	"menu_title": "aztecpower",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/aztecpowericon.jpg",
	"flash": 0
}, {
	"id": 1094,
	"name": "Fairy Queen",
	"menu_title": "fairyqueen",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/fairyqueenicon.jpg",
	"flash": 0
}, {
	"id": 1095,
	"name": "Mermaids Tale",
	"menu_title": "mermaidstale",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/mermaidstaleicon.jpg",
	"flash": 0
}, {
	"id": 1096,
	"name": "Little Dragons",
	"menu_title": "littledragons",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/littledragonsicon.jpg",
	"flash": 0
}, {
	"id": 1097,
	"name": "Jaguar Moon",
	"menu_title": "jaguarmoon",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/jaguarmoonicon.jpg",
	"flash": 0
}, {
	"id": 1098,
	"name": "American Gangster",
	"menu_title": "americangangster",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/americangangstericon.jpg",
	"flash": 0
}, {
	"id": 1099,
	"name": "Always Hot Cubes",
	"menu_title": "alwayshotcubes",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/alwayshotcubesicon.jpg",
	"flash": 0
}, {
	"id": 1100,
	"name": "Pharaohs Tomb",
	"menu_title": "pharaohstomb",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/pharaohstombicon.jpg",
	"flash": 0
}, {
	"id": 1101,
	"name": "Bank Raid",
	"menu_title": "bankraid",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/bankraidicon.jpg",
	"flash": 0
}, {
	"id": 1102,
	"name": "Columbus",
	"menu_title": "columbusclassic",
	"category": "novomatic",
	"mobile": 0,
	"image": "\/novomatic\/columbusclassicicon.jpg",
	"flash": 0
}, {
	"id": 1103,
	"name": "Book of Ra Magic",
	"menu_title": "bookoframagic",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/bookoframagicicon.jpg",
	"flash": 0
}, {
	"id": 1104,
	"name": "Book of Fate",
	"menu_title": "bookoffate",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/bookoffateicon.jpg",
	"flash": 0
}, {
	"id": 1105,
	"name": "Action Joker",
	"menu_title": "actionjoker",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/actionjokericon.jpg",
	"flash": 0
}, {
	"id": 1106,
	"name": "Buffalo Magic",
	"menu_title": "buffalomagic",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/buffalomagicicon.jpg",
	"flash": 0
}, {
	"id": 1107,
	"name": "Feather Frenzy",
	"menu_title": "featherfrenzy",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/featherfrenzyicon.jpg",
	"flash": 0
}, {
	"id": 1108,
	"name": "Book of Maya",
	"menu_title": "bookofmaya",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/bookofmayaicon.jpg",
	"flash": 0
}, {
	"id": 1109,
	"name": "Magic 27",
	"menu_title": "magic27",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/magic27icon.jpg",
	"flash": 0
}, {
	"id": 1110,
	"name": "Mayan Moons",
	"menu_title": "mayanmoons",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/mayanmoonsicon.jpg",
	"flash": 0
}, {
	"id": 1111,
	"name": "Viking & Dragon",
	"menu_title": "vikinganddragon",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/vikinganddragonicon.jpg",
	"flash": 0
}, {
	"id": 1112,
	"name": "Indian Spirit Deluxe",
	"menu_title": "indianspiritdeluxe",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/indianspiritdeluxeicon.jpg",
	"flash": 0
}, {
	"id": 1113,
	"name": "Ramses 2",
	"menu_title": "ramses2",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/ramses2icon.jpg",
	"flash": 0
}, {
	"id": 1114,
	"name": "Lord Of The Ocean Magic",
	"menu_title": "lordoftheoceanmagic",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/lordoftheoceanmagicicon.jpg",
	"flash": 0
}, {
	"id": 1115,
	"name": "Magic Window",
	"menu_title": "magicwindow",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/magicwindowicon.jpg",
	"flash": 0
}, {
	"id": 1116,
	"name": "Sahara",
	"menu_title": "sahara",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/saharaicon.jpg",
	"flash": 0
}, {
	"id": 1117,
	"name": "Rising Treasures",
	"menu_title": "risingtreasures",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/risingtreasuresicon.jpg",
	"flash": 0
}, {
	"id": 1118,
	"name": "Asgards Thunder",
	"menu_title": "asgardsthunder",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/asgardsthundericon.jpg",
	"flash": 0
}, {
	"id": 1119,
	"name": "Prize Of The Nile",
	"menu_title": "prizeofthenile",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/prizeofthenileicon.jpg",
	"flash": 0
}, {
	"id": 1120,
	"name": "Dragon Warrior",
	"menu_title": "dragonwarrior",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/dragonwarrioricon.jpg",
	"flash": 0
}, {
	"id": 1121,
	"name": "Fifty Fortune Fruits",
	"menu_title": "fiftyfortunefruits",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/fiftyfortunefruitsicon.jpg",
	"flash": 0
}, {
	"id": 1122,
	"name": "Fifty Fortune Dice",
	"menu_title": "fiftyfortunedice",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/fiftyfortunediceicon.jpg",
	"flash": 0
}, {
	"id": 1123,
	"name": "Island Heat",
	"menu_title": "islandheat",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/islandheaticon.jpg",
	"flash": 0
}, {
	"id": 1124,
	"name": "Volcani Cash",
	"menu_title": "volcaniccash",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/volcaniccashicon.jpg",
	"flash": 0
}, {
	"id": 1125,
	"name": "Mermaids Pearl",
	"menu_title": "mermaidspearl",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/mermaidspearlicon.jpg",
	"flash": 0
}, {
	"id": 1126,
	"name": "Action Joker 6",
	"menu_title": "jokeraction6",
	"category": "novomatic",
	"mobile": 1,
	"image": "\/novomatic\/jokeraction6icon.jpg",
	"flash": 0
}, {
	"id": 1200,
	"name": "Keno +2Ball",
	"menu_title": "kenoplustwoball",
	"category": "novomatic,table",
	"mobile": 1,
	"image": "\/novomatic\/kenoplustwoballicon.jpg",
	"flash": 0
}, {
	"id": 2001,
	"name": "5 Dazzling Hot",
	"menu_title": "FDHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/5dazzlinghot.png",
	"flash": 0
}, {
	"id": 2002,
	"name": "20 Super Hot",
	"menu_title": "TSHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tshslot.jpg",
	"flash": 0
}, {
	"id": 2003,
	"name": "Burning Hot",
	"menu_title": "BHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/bhslot.jpg",
	"flash": 0
}, {
	"id": 2004,
	"name": "Versailles Gold",
	"menu_title": "VGJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/vgslot.jpg",
	"flash": 0
}, {
	"id": 2005,
	"name": "Rise of Ra",
	"menu_title": "RORJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/rorslot.jpg",
	"flash": 0
}, {
	"id": 2006,
	"name": "40 Super Hot",
	"menu_title": "FSHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fshslot.jpg",
	"flash": 0
}, {
	"id": 2007,
	"name": "Flaming Hot",
	"menu_title": "FHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fhslot.jpg",
	"flash": 0
}, {
	"id": 2008,
	"name": "Amazon's Battle",
	"menu_title": "ABJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/abslot.jpg",
	"flash": 0
}, {
	"id": 2009,
	"name": "Extra Stars",
	"menu_title": "XSJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/xsslot.jpg",
	"flash": 0
}, {
	"id": 2010,
	"name": "More Lucky & Wild",
	"menu_title": "MLAWJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/mlawslot.jpg",
	"flash": 0
}, {
	"id": 2011,
	"name": "Egypt Sky",
	"menu_title": "ESJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/esslot.jpg",
	"flash": 0
}, {
	"id": 2012,
	"name": "Queen of Rio",
	"menu_title": "QORJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/qorslot.jpg",
	"flash": 0
}, {
	"id": 2013,
	"name": "Caramel Hot",
	"menu_title": "CHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/chslot.jpg",
	"flash": 0
}, {
	"id": 2014,
	"name": "The Story of Alexander",
	"menu_title": "TSOAJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tsoaslot.jpg",
	"flash": 0
}, {
	"id": 2015,
	"name": "Rich World",
	"menu_title": "RWJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/rwslot.jpg",
	"flash": 0
}, {
	"id": 2016,
	"name": "Mayan Spirit",
	"menu_title": "MSJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/msslot.jpg",
	"flash": 0
}, {
	"id": 2017,
	"name": "Blue Heart",
	"menu_title": "BHTJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/bhtslot.jpg",
	"flash": 0
}, {
	"id": 2018,
	"name": "Spanish Passion",
	"menu_title": "SPJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/spslot.jpg",
	"flash": 0
}, {
	"id": 2019,
	"name": "Ultimate Hot",
	"menu_title": "UHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/uhslot.jpg",
	"flash": 0
}, {
	"id": 2020,
	"name": "Extremely Hot",
	"menu_title": "EHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/ehslot.jpg",
	"flash": 0
}, {
	"id": 2021,
	"name": "Supreme Hot",
	"menu_title": "SHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/shslot.jpg",
	"flash": 0
}, {
	"id": 2022,
	"name": "Shining Crown",
	"menu_title": "SCJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/scslot.jpg",
	"flash": 0
}, {
	"id": 2023,
	"name": "Zodiac Wheel",
	"menu_title": "ZWJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/zwslot.jpg",
	"flash": 0
}, {
	"id": 2024,
	"name": "100 Cats",
	"menu_title": "HCJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/hcslot.jpg",
	"flash": 0
}, {
	"id": 2025,
	"name": "20 Diamonds",
	"menu_title": "TDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tdslot.jpg",
	"flash": 0
}, {
	"id": 2026,
	"name": "Aztec Glory",
	"menu_title": "AGJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/agslot.jpg",
	"flash": 0
}, {
	"id": 2027,
	"name": "Fast Money",
	"menu_title": "FMJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fmslot.jpg",
	"flash": 0
}, {
	"id": 2028,
	"name": "Retro Style",
	"menu_title": "RTSJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/rtsslot.jpg",
	"flash": 0
}, {
	"id": 2029,
	"name": "The Great Egypt",
	"menu_title": "GETJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/getslot.jpg",
	"flash": 0
}, {
	"id": 2030,
	"name": "Magellan",
	"menu_title": "MPJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/mpslot.jpg",
	"flash": 0
}, {
	"id": 2031,
	"name": "Amazons' Story",
	"menu_title": "ASJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/amazons_story.jpg",
	"flash": 0
}, {
	"id": 2032,
	"name": "Super 20",
	"menu_title": "STJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/stslot.jpg",
	"flash": 0
}, {
	"id": 2033,
	"name": "Savanna's Life",
	"menu_title": "SLJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/slslot.jpg",
	"flash": 0
}, {
	"id": 2034,
	"name": "50 Horses",
	"menu_title": "FHSJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fhsslot.jpg",
	"flash": 0
}, {
	"id": 2035,
	"name": "Inca Gold II",
	"menu_title": "IGTJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/igtslot.jpg",
	"flash": 0
}, {
	"id": 2036,
	"name": "Great Adventure",
	"menu_title": "GAJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/gaslot.jpg",
	"flash": 0
}, {
	"id": 2037,
	"name": "Olympus Glory",
	"menu_title": "OGJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/ogslot.jpg",
	"flash": 0
}, {
	"id": 2038,
	"name": "Grace of Cleopatra",
	"menu_title": "GOCJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/gocslot.jpg",
	"flash": 0
}, {
	"id": 2039,
	"name": "Majestic Forest",
	"menu_title": "MFJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/mfslot.jpg",
	"flash": 0
}, {
	"id": 2040,
	"name": "Fortune Spells",
	"menu_title": "FSJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fsslot.jpg",
	"flash": 0
}, {
	"id": 2041,
	"name": "Royal Gardens",
	"menu_title": "RGJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/rgslot.jpg",
	"flash": 0
}, {
	"id": 2042,
	"name": "Hot & Cash",
	"menu_title": "HNCJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/hncslot.jpg",
	"flash": 0
}, {
	"id": 2043,
	"name": "White Wolf",
	"menu_title": "TWWJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/twwslot.jpg",
	"flash": 0
}, {
	"id": 2044,
	"name": "Casino Mania",
	"menu_title": "CMJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/cmslot.jpg",
	"flash": 0
}, {
	"id": 2045,
	"name": "Oil Company II",
	"menu_title": "OCJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/ocslot.jpg",
	"flash": 0
}, {
	"id": 2046,
	"name": "Kashmir Gold",
	"menu_title": "KGJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/kgslot.jpg",
	"flash": 0
}, {
	"id": 2047,
	"name": "Witches' Charm",
	"menu_title": "WCJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/wcslot.jpg",
	"flash": 0
}, {
	"id": 2048,
	"name": "Book of Magic",
	"menu_title": "BOMJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/bomslot.jpg",
	"flash": 0
}, {
	"id": 2049,
	"name": "Royal Secrets",
	"menu_title": "RSJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/rsslot.jpg",
	"flash": 0
}, {
	"id": 2050,
	"name": "Amazing Amazonia",
	"menu_title": "AAJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/aaslot.jpg",
	"flash": 0
}, {
	"id": 2051,
	"name": "Dragon Reels",
	"menu_title": "DRJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/drslot.jpg",
	"flash": 0
}, {
	"id": 2052,
	"name": "Fruits Kingdom",
	"menu_title": "FKJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/fkslot.jpg",
	"flash": 0
}, {
	"id": 2053,
	"name": "Caramel Dice",
	"menu_title": "CDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/caramel_dice.jpg",
	"flash": 0
}, {
	"id": 2054,
	"name": "Flaming Dice",
	"menu_title": "FDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fdslot.jpg",
	"flash": 0
}, {
	"id": 2055,
	"name": "5 Hot Dice",
	"menu_title": "FHDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fhdslot.jpg",
	"flash": 0
}, {
	"id": 2056,
	"name": "40 Super Dice",
	"menu_title": "FSDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fsdslot.jpg",
	"flash": 0
}, {
	"id": 2057,
	"name": "20 Super Dice",
	"menu_title": "TSDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tsdslot.jpg",
	"flash": 0
}, {
	"id": 2058,
	"name": "Neon Dice",
	"menu_title": "NDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/ndslot.jpg",
	"flash": 0
}, {
	"id": 2059,
	"name": "Supreme Dice",
	"menu_title": "SDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/sdslot.jpg",
	"flash": 0
}, {
	"id": 2060,
	"name": "Extra Joker",
	"menu_title": "XJJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/xjslot.jpg",
	"flash": 0
}, {
	"id": 2061,
	"name": "Dice of RA",
	"menu_title": "DORJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/dorslot.jpg",
	"flash": 0
}, {
	"id": 2062,
	"name": "Burning Dice",
	"menu_title": "BDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/bdslot.jpg",
	"flash": 0
}, {
	"id": 2063,
	"name": "2 Dragons",
	"menu_title": "TDRJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tdrslot.jpg",
	"flash": 0
}, {
	"id": 2064,
	"name": "Lucky & Wild",
	"menu_title": "LAWJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/lawslot.jpg",
	"flash": 0
}, {
	"id": 2065,
	"name": "Forest Band",
	"menu_title": "FBJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fbslot.jpg",
	"flash": 0
}, {
	"id": 2066,
	"name": "Game of Luck",
	"menu_title": "GOLJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/golslot.jpg",
	"flash": 0
}, {
	"id": 2067,
	"name": "Dice and Roll",
	"menu_title": "DARJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/darslot.jpg",
	"flash": 0
}, {
	"id": 2068,
	"name": "Age of Troy",
	"menu_title": "AOTJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/aotslot.jpg",
	"flash": 0
}, {
	"id": 2069,
	"name": "Cats Royal",
	"menu_title": "CRJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/crslot.jpg",
	"flash": 0
}, {
	"id": 2070,
	"name": "Lucky Hot",
	"menu_title": "LHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/lhslot.jpg",
	"flash": 0
}, {
	"id": 2071,
	"name": "Genius of Leonardo",
	"menu_title": "GEOLJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/geolslot.jpg",
	"flash": 0
}, {
	"id": 2072,
	"name": "Rolling Dice",
	"menu_title": "RDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/rdslot.jpg",
	"flash": 0
}, {
	"id": 2073,
	"name": "100 Dice",
	"menu_title": "HDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/hdslot.jpg",
	"flash": 0
}, {
	"id": 2074,
	"name": "Circus Brilliant",
	"menu_title": "CBJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/cbslot.jpg",
	"flash": 0
}, {
	"id": 2075,
	"name": "Summer Bliss",
	"menu_title": "SBJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/sbslot.jpg",
	"flash": 0
}, {
	"id": 2076,
	"name": "Dark Queen",
	"menu_title": "DQJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/dqslot.jpg",
	"flash": 0
}, {
	"id": 2077,
	"name": "Halloween",
	"menu_title": "HWJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/hwslot.jpg",
	"flash": 0
}, {
	"id": 2078,
	"name": "More Dice and Roll",
	"menu_title": "MDARJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/mdarjsloticon.jpg",
	"flash": 0
}, {
	"id": 2079,
	"name": "100 Super Hot",
	"menu_title": "HSHJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/hshjsloticon.jpg",
	"flash": 0
}, {
	"id": 2080,
	"name": "The Big Journey",
	"menu_title": "TBJJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/tbjjsloticon.jpg",
	"flash": 0
}, {
	"id": 2081,
	"name": "30 Spicy Fruits",
	"menu_title": "TSFJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/tsfjsloticon.jpg",
	"flash": 0
}, {
	"id": 2082,
	"name": "Like a Diamond",
	"menu_title": "LADJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/ladjsloticon.jpg",
	"flash": 0
}, {
	"id": 2083,
	"name": "40 Lucky King",
	"menu_title": "FLKJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/flkjsloticon.jpg",
	"flash": 0
}, {
	"id": 2084,
	"name": "Shining Dice",
	"menu_title": "SHDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/shdjsloticon.jpg",
	"flash": 0
}, {
	"id": 2085,
	"name": "Burning Hot 6",
	"menu_title": "BHSJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/bhsjsloticon.jpg",
	"flash": 0
}, {
	"id": 2086,
	"name": "100 Super Dice",
	"menu_title": "HSDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/hsdjsloticon.jpg",
	"flash": 0
}, {
	"id": 2087,
	"name": "30 Spicy Dice",
	"menu_title": "THSDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/thsdjsloticon.jpg",
	"flash": 0
}, {
	"id": 2088,
	"name": "20 Burning Hot",
	"menu_title": "TBHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tbhjsloticon.jpg",
	"flash": 0
}, {
	"id": 2089,
	"name": "40 Burning Hot",
	"menu_title": "FBHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fbhjsloticon.jpg",
	"flash": 0
}, {
	"id": 2090,
	"name": "40 Burning Hot 6",
	"menu_title": "FBHSJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fbhsjsloticon.jpg",
	"flash": 0
}, {
	"id": 2091,
	"name": "100 Burning Hot",
	"menu_title": "HBHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/hbhjsloticon.jpg",
	"flash": 0
}, {
	"id": 2092,
	"name": "5 Burning Heart",
	"menu_title": "FBHTJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fbhtjsloticon.jpg",
	"flash": 0
}, {
	"id": 2093,
	"name": "10 Burning Heart",
	"menu_title": "TBHTJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tbhtjsloticon.jpg",
	"flash": 0
}, {
	"id": 2094,
	"name": "20 Burning Dice",
	"menu_title": "TBDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tbdjsloticon.jpg",
	"flash": 0
}, {
	"id": 2095,
	"name": "20 Dazzling Hot",
	"menu_title": "TDHJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tdhjsloticon.jpg",
	"flash": 0
}, {
	"id": 2096,
	"name": "40 Mega Clover",
	"menu_title": "FMCJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fmcjsloticon.jpg",
	"flash": 0
}, {
	"id": 2097,
	"name": "40 Hot & Cash",
	"menu_title": "FHNCJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fhncjsloticon.jpg",
	"flash": 0
}, {
	"id": 2098,
	"name": "40 Burning Dice",
	"menu_title": "FBDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fbdjsloticon.jpg",
	"flash": 0
}, {
	"id": 2099,
	"name": "More Like a Diamond",
	"menu_title": "MLADJSlot",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/mladjsloticon.jpg",
	"flash": 0
}, {
	"id": 2100,
	"name": "Vampire Night",
	"menu_title": "VNJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/vnjsloticon.jpg",
	"flash": 0
}, {
	"id": 2101,
	"name": "5 Great Star",
	"menu_title": "FGSJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/fgsjsloticon.jpg",
	"flash": 0
}, {
	"id": 2102,
	"name": "Coral Island",
	"menu_title": "CIJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/cijsloticon.jpg",
	"flash": 0
}, {
	"id": 2103,
	"name": "20 Joker Reels",
	"menu_title": "TJRJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tjrjsloticon.jpg",
	"flash": 0
}, {
	"id": 2104,
	"name": "Wonder Tree",
	"menu_title": "WTJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/wtjsloticon.jpg",
	"flash": 0
}, {
	"id": 2105,
	"name": "20 Joker Dice",
	"menu_title": "TJDJSlot",
	"category": "egt",
	"mobile": 1,
	"image": "\/egt\/tjdjsloticon.jpg",
	"flash": 0
}, {
	"id": 2200,
	"name": "Keno Universe",
	"menu_title": "UJKeno",
	"category": "egt",
	"mobile": 0,
	"image": "\/egt\/ukeno.jpg",
	"flash": 0
}, {
	"id": 4001,
	"name": "Black Horse",
	"menu_title": "blackhorse",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/blackhorseicon.jpg",
	"flash": 0
}, {
	"id": 4002,
	"name": "Vegas Hot",
	"menu_title": "vegashot",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/vegashoticon.jpg",
	"flash": 0
}, {
	"id": 4003,
	"name": "Magic Of The Ring",
	"menu_title": "magicofthering",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magicoftheringicon.jpg",
	"flash": 0
}, {
	"id": 4004,
	"name": "Hot 777",
	"menu_title": "hot777",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/hot777icon.jpg",
	"flash": 0
}, {
	"id": 4005,
	"name": "105 Magic",
	"menu_title": "bookofmagic",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/bookofmagicicon.jpg",
	"flash": 0
}, {
	"id": 4006,
	"name": "HighScool Manga",
	"menu_title": "hmanga",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/hmangaicon.jpg",
	"flash": 0
}, {
	"id": 4007,
	"name": "Magic Fruits",
	"menu_title": "magicfruits",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magicfruitsicon.jpg",
	"flash": 0
}, {
	"id": 4008,
	"name": "Magic Fruits 27",
	"menu_title": "magicfruits27",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magicfruits27icon.jpg",
	"flash": 0
}, {
	"id": 4009,
	"name": "Magic Stars",
	"menu_title": "magicstars",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magicstarsicon.jpg",
	"flash": 0
}, {
	"id": 4010,
	"name": "Vegas Hot 81",
	"menu_title": "vegashot81",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/vegashot81icon.jpg",
	"flash": 0
}, {
	"id": 4011,
	"name": "Fenix Play 27",
	"menu_title": "fenixplay27",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/fenixplay27icon.jpg",
	"flash": 0
}, {
	"id": 4012,
	"name": "Fenix Play",
	"menu_title": "fenixplay",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/fenixplayicon.jpg",
	"flash": 0
}, {
	"id": 4013,
	"name": "Magic Hot",
	"menu_title": "magichot",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magichoticon.jpg",
	"flash": 0
}, {
	"id": 4015,
	"name": "Fire Bird",
	"menu_title": "firebird",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/firebirdicon.jpg",
	"flash": 0
}, {
	"id": 4016,
	"name": "Super hot",
	"menu_title": "superhot",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/superhoticon.jpg",
	"flash": 0
}, {
	"id": 4017,
	"name": "Demon Jack 27",
	"menu_title": "demonjack27",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/demonjack27icon.jpg",
	"flash": 0
}, {
	"id": 4018,
	"name": "Hell 81",
	"menu_title": "hell81",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/hell81icon.jpg",
	"flash": 0
}, {
	"id": 4020,
	"name": "Fruit Mania",
	"menu_title": "fruitmania",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/fruitmaniaicon.jpg",
	"flash": 0
}, {
	"id": 4021,
	"name": "Beach Party Hot",
	"menu_title": "beachpartyhot",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/beachpartyhoticon.jpg",
	"flash": 0
}, {
	"id": 4022,
	"name": "Burning Stars",
	"menu_title": "burningstars",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/burningstarsicon.jpg",
	"flash": 0
}, {
	"id": 4024,
	"name": "Hot Party",
	"menu_title": "hotparty",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/hotpartyicon.jpg",
	"flash": 0
}, {
	"id": 4025,
	"name": "Black Hawk",
	"menu_title": "blackhawk",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/blackhawkicon.jpg",
	"flash": 0
}, {
	"id": 4026,
	"name": "Magic Fruits 4",
	"menu_title": "magicfruits4",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magicfruits4icon.jpg",
	"flash": 0
}, {
	"id": 4027,
	"name": "Magic Hot 4",
	"menu_title": "magichot4",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magichot4icon.jpg",
	"flash": 0
}, {
	"id": 4028,
	"name": "Charlie The Cat",
	"menu_title": "charliethecat",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/charliethecaticon.jpg",
	"flash": 0
}, {
	"id": 4029,
	"name": "Football Mania",
	"menu_title": "footballmania",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/footballmaniaicon.jpg",
	"flash": 0
}, {
	"id": 4031,
	"name": "Night 81 Club",
	"menu_title": "nightclub81",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/nightclub81icon.jpg",
	"flash": 0
}, {
	"id": 4032,
	"name": "DINO REELS 81",
	"menu_title": "dinoreels81",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/dinoreels81icon.jpg",
	"flash": 0
}, {
	"id": 4033,
	"name": "Back To The 70's",
	"menu_title": "backtothe70s",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/backtothe70sicon.jpg",
	"flash": 0
}, {
	"id": 4034,
	"name": "Lucky Queen",
	"menu_title": "luckyqueen",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/luckyqueenicon.jpg",
	"flash": 0
}, {
	"id": 4035,
	"name": "Beach Party",
	"menu_title": "beachparty",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/beachpartyicon.jpg",
	"flash": 0
}, {
	"id": 4036,
	"name": "Golden Sphinx",
	"menu_title": "goldensphinx",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/goldensphinxicon.jpg",
	"flash": 0
}, {
	"id": 4037,
	"name": "Magic Fruits 81",
	"menu_title": "magicfruits81",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magicfruits81icon.jpg",
	"flash": 0
}, {
	"id": 4038,
	"name": "Lost Treasure",
	"menu_title": "losttreasure",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/losttreasureicon.jpg",
	"flash": 0
}, {
	"id": 4039,
	"name": "Lucky Fortune",
	"menu_title": "luckyfortune",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/luckyfortuneicon.jpg",
	"flash": 0
}, {
	"id": 4040,
	"name": "Captain Shark",
	"menu_title": "captainshark",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/captainsharkicon.jpg",
	"flash": 0
}, {
	"id": 4041,
	"name": "Bell Wizard",
	"menu_title": "bellwizard",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/bellwizardicon.jpg",
	"flash": 0
}, {
	"id": 4042,
	"name": "Corrida Romance",
	"menu_title": "corridaromance",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/corridaromanceicon.jpg",
	"flash": 0
}, {
	"id": 4043,
	"name": "Crazy Cars",
	"menu_title": "crazycars",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/crazycarsicon.jpg",
	"flash": 0
}, {
	"id": 4044,
	"name": "Good Luck 40",
	"menu_title": "goodluck40",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/goodluck40icon.jpg",
	"flash": 0
}, {
	"id": 4045,
	"name": "Valhalla",
	"menu_title": "valhalla",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/valhallaicon.jpg",
	"flash": 0
}, {
	"id": 4046,
	"name": "Magic Target",
	"menu_title": "magictarget",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magictargeticon.jpg",
	"flash": 0
}, {
	"id": 4047,
	"name": "Miami Beach",
	"menu_title": "miamibeach",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/miamibeachicon.jpg",
	"flash": 0
}, {
	"id": 4048,
	"name": "Burning Reels",
	"menu_title": "burningreels",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/burningreelsicon.jpg",
	"flash": 0
}, {
	"id": 4049,
	"name": "Highway To Hell",
	"menu_title": "highwaytohell",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/highwaytohellicon.jpg",
	"flash": 0
}, {
	"id": 4050,
	"name": "Sizzling 777",
	"menu_title": "sizzling777",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/sizzling777icon.jpg",
	"flash": 0
}, {
	"id": 4051,
	"name": "In The Forest",
	"menu_title": "intheforest",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/intheforesticon.jpg",
	"flash": 0
}, {
	"id": 4052,
	"name": "Wild Girls",
	"menu_title": "wildgirls",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/wildgirlsicon.jpg",
	"flash": 0
}, {
	"id": 4053,
	"name": "Haunted Hospital",
	"menu_title": "hauntedhospital",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/hauntedhospitalicon.jpg",
	"flash": 0
}, {
	"id": 4054,
	"name": "Criss Cross 81",
	"menu_title": "crisscross81",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/crisscross81icon.jpg",
	"flash": 0
}, {
	"id": 4055,
	"name": "Joker Explosion",
	"menu_title": "jokerexplosion",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/jokerexplosionicon.jpg",
	"flash": 0
}, {
	"id": 4056,
	"name": "Fenix Play Deluxe",
	"menu_title": "fenixplaydeluxe",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/fenixplaydeluxeicon.jpg",
	"flash": 0
}, {
	"id": 4057,
	"name": "Mystery Jack",
	"menu_title": "mysteryjack",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/mysteryjackicon.jpg",
	"flash": 0
}, {
	"id": 4058,
	"name": "Mystery Jack Deluxe",
	"menu_title": "mysteryjackdeluxe",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/mysteryjackdeluxeicon.jpg",
	"flash": 0
}, {
	"id": 4059,
	"name": "Wild Jack",
	"menu_title": "wildjack",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/wildjackicon.jpg",
	"flash": 0
}, {
	"id": 4060,
	"name": "Magic Hot 4 Deluxe",
	"menu_title": "magichot4deluxe",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magichot4deluxeicon.jpg",
	"flash": 0
}, {
	"id": 4061,
	"name": "Magic Fruits 4 Deluxe",
	"menu_title": "magicfruits4deluxe",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magicfruits4deluxeicon.jpg",
	"flash": 0
}, {
	"id": 4062,
	"name": "Magic Fruits Deluxe",
	"menu_title": "magicfruitsdeluxe",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magicfruitsdeluxeicon.jpg",
	"flash": 0
}, {
	"id": 4063,
	"name": "Fenix Play 27 Deluxe",
	"menu_title": "fenixplay27deluxe",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/fenixplay27deluxeicon.jpg",
	"flash": 0
}, {
	"id": 4064,
	"name": "Wild Jack 81",
	"menu_title": "wildjack81",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/wildjack81icon.jpg",
	"flash": 0
}, {
	"id": 4065,
	"name": "Colin the Cat",
	"menu_title": "colinthecat",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/colinthecaticon.jpg",
	"flash": 0
}, {
	"id": 4066,
	"name": "Fruit Fiesta",
	"menu_title": "fruitfiesta",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/fruitfiestaicon.jpg",
	"flash": 0
}, {
	"id": 4067,
	"name": "Magic Target Deluxe",
	"menu_title": "magictargetdeluxe",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magictargetdeluxeicon.jpg",
	"flash": 0
}, {
	"id": 4068,
	"name": "Bars & 7s",
	"menu_title": "barsand7s",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/barsand7sicon.jpg",
	"flash": 0
}, {
	"id": 4069,
	"name": "Wild Guns",
	"menu_title": "wildguns",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/wildgunsicon.jpg",
	"flash": 0
}, {
	"id": 4070,
	"name": "Turbo Play",
	"menu_title": "turboplay",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/turboplayicon.jpg",
	"flash": 0
}, {
	"id": 4071,
	"name": "Jack On Hold",
	"menu_title": "jackonhold",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/jackonholdicon.jpg",
	"flash": 0
}, {
	"id": 4072,
	"name": "Hungry Shark",
	"menu_title": "hungryshark",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/hungrysharkicon.jpg",
	"flash": 0
}, {
	"id": 4073,
	"name": "Wins & Replay!!!",
	"menu_title": "winandreplay",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/winandreplayicon.jpg",
	"flash": 0
}, {
	"id": 4074,
	"name": "Tetri Mania",
	"menu_title": "tetrimania",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/tetrimaniaicon.jpg",
	"flash": 0
}, {
	"id": 4075,
	"name": "Jackpot Builders",
	"menu_title": "jackpotbuilders",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/jackpotbuildersicon.jpg",
	"flash": 0
}, {
	"id": 4076,
	"name": "Dracula Castle",
	"menu_title": "draculacastle",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/draculacastleicon.jpg",
	"flash": 0
}, {
	"id": 4077,
	"name": "Triple Star",
	"menu_title": "triplestarw",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/triplestarwicon.jpg",
	"flash": 0
}, {
	"id": 4078,
	"name": "Jacks Ride",
	"menu_title": "jacksride",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/jacksrideicon.jpg",
	"flash": 0
}, {
	"id": 4079,
	"name": "Jumping Fruits",
	"menu_title": "jumpingfruits",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/jumpingfruitsicon.jpg",
	"flash": 0
}, {
	"id": 4080,
	"name": "Vegas Reels II",
	"menu_title": "vegasreels2",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/vegasreels2icon.jpg",
	"flash": 0
}, {
	"id": 4081,
	"name": "Arcade",
	"menu_title": "arcade",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/arcadeicon.jpg",
	"flash": 0
}, {
	"id": 4082,
	"name": "Magic Stars 3",
	"menu_title": "magicstars3",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/magicstars3icon.jpg",
	"flash": 0
}, {
	"id": 4200,
	"name": "Extra Bingo",
	"menu_title": "extrabingo",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/extrabingoicon.jpg",
	"flash": 0
}, {
	"id": 4300,
	"name": "Gold Roulette",
	"menu_title": "goldroulette",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/goldrouletteicon.jpg",
	"flash": 0
}, {
	"id": 4301,
	"name": "Casino Roulette",
	"menu_title": "casinoroulette",
	"category": "wazdan",
	"mobile": 1,
	"image": "\/wazdan\/casinorouletteicon.jpg",
	"flash": 0
}, {
	"id": 6101,
	"name": "Fruitinator",
	"menu_title": "fruitinator",
	"category": "merkur",
	"mobile": 1,
	"image": "\/merkur\/fruitinatoricon.jpg",
	"flash": 0
}, {
	"id": 6102,
	"name": "Rising Liner",
	"menu_title": "risingliner",
	"category": "merkur",
	"mobile": 1,
	"image": "\/merkur\/risinglinericon.jpg",
	"flash": 0
}, {
	"id": 6103,
	"name": "Blazing Star",
	"menu_title": "blazingstar",
	"category": "merkur",
	"mobile": 1,
	"image": "\/merkur\/blazingstaricon.jpg",
	"flash": 0
}, {
	"id": 6104,
	"name": "Extra Wild",
	"menu_title": "extrawild",
	"category": "merkur",
	"mobile": 1,
	"image": "\/merkur\/extrawildicon.jpg",
	"flash": 0
}, {
	"id": 6105,
	"name": "Fishin Frenzy",
	"menu_title": "fishingfrenzy",
	"category": "merkur",
	"mobile": 1,
	"image": "\/merkur\/fishingfrenzyicon.jpg",
	"flash": 0
}, {
	"id": 6106,
	"name": "Jollys Cap",
	"menu_title": "jollyscap",
	"category": "merkur",
	"mobile": 1,
	"image": "\/merkur\/jollyscapicon.jpg",
	"flash": 0
}, {
	"id": 6107,
	"name": "Indian Ruby",
	"menu_title": "indianruby",
	"category": "merkur",
	"mobile": 1,
	"image": "\/merkur\/indianrubyicon.jpg",
	"flash": 0
}, {
	"id": 6108,
	"name": "El Torero",
	"menu_title": "eltorero",
	"category": "merkur",
	"mobile": 1,
	"image": "\/merkur\/eltoreroicon.jpg",
	"flash": 0
}, {
	"id": 6109,
	"name": "Mystical Pride",
	"menu_title": "mysticalpride",
	"category": "merkur",
	"mobile": 1,
	"image": "\/merkur\/mysticalprideicon.jpg",
	"flash": 0
}, {
	"id": 6110,
	"name": "Hot Flame",
	"menu_title": "hotflame",
	"category": "merkur",
	"mobile": 1,
	"image": "\/merkur\/hotflameicon.jpg",
	"flash": 0
}, {
	"id": 7101,
	"name": "Book of Tut",
	"menu_title": "bookoftut",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/bookoftuticon.jpg",
	"flash": 0
}, {
	"id": 7102,
	"name": "Dragon Tiger",
	"menu_title": "dragontiger",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/dragontigericon.jpg",
	"flash": 0
}, {
	"id": 7103,
	"name": "Wolf Gold",
	"menu_title": "wolfgold",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/wolfgoldicon.jpg",
	"flash": 0
}, {
	"id": 7104,
	"name": "Chilli Heat",
	"menu_title": "chilliheat",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/chilliheaticon.jpg",
	"flash": 0
}, {
	"id": 7105,
	"name": "Lucky New Year",
	"menu_title": "luckynewyear",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/luckynewyearicon.jpg",
	"flash": 0
}, {
	"id": 7106,
	"name": "Monkey Warrior",
	"menu_title": "monkeywarrior",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/monkeywarrioricon.jpg",
	"flash": 0
}, {
	"id": 7107,
	"name": "Diamond Strike",
	"menu_title": "diamondstrike",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/diamondstrikeicon.jpg",
	"flash": 0
}, {
	"id": 7108,
	"name": "Hot Safari",
	"menu_title": "hotsafari",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/hotsafariicon.jpg",
	"flash": 0
}, {
	"id": 7109,
	"name": "Wild Gladiator",
	"menu_title": "wildgladiators",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/wildgladiatorsicon.jpg",
	"flash": 0
}, {
	"id": 7110,
	"name": "Panther Queen",
	"menu_title": "pantherqueen",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/pantherqueenicon.jpg",
	"flash": 0
}, {
	"id": 7111,
	"name": "Buffalo King",
	"menu_title": "buffaloking",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/buffalokingicon.jpg",
	"flash": 0
}, {
	"id": 7112,
	"name": "Queen of Gold",
	"menu_title": "queenofgold",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/queenofgoldicon.jpg",
	"flash": 0
}, {
	"id": 7113,
	"name": "Aladdins Treasure",
	"menu_title": "aladdinstreasure",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/aladdinstreasureicon.jpg",
	"flash": 0
}, {
	"id": 7114,
	"name": "Extra Juicy",
	"menu_title": "extrajuicy",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/extrajuicyicon.jpg",
	"flash": 0
}, {
	"id": 7115,
	"name": "Pyramid King",
	"menu_title": "pyramidking",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/pyramidkingicon.jpg",
	"flash": 0
}, {
	"id": 7116,
	"name": "Gold Rush",
	"menu_title": "goldrush",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/goldrushicon.jpg",
	"flash": 0
}, {
	"id": 7117,
	"name": "8 Dragons",
	"menu_title": "8dragons",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/8dragonsicon.jpg",
	"flash": 0
}, {
	"id": 7118,
	"name": "Mysterious Egypt",
	"menu_title": "mysteriousegypt",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/mysteriousegypticon.jpg",
	"flash": 0
}, {
	"id": 7119,
	"name": "Hot to Burn",
	"menu_title": "hottoburn",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/hottoburnicon.jpg",
	"flash": 0
}, {
	"id": 7120,
	"name": "Ultra Burn",
	"menu_title": "ultraburn",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/ultraburnicon.jpg",
	"flash": 0
}, {
	"id": 7121,
	"name": "Fruit Rainbow",
	"menu_title": "fruitrainbow",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/fruitrainbowicon.jpg",
	"flash": 0
}, {
	"id": 7122,
	"name": "Super 7",
	"menu_title": "super7",
	"category": "pragmatic",
	"mobile": 0,
	"image": "\/pragmatic\/super7icon.jpg",
	"flash": 0
}, {
	"id": 7123,
	"name": "Monkey Madness",
	"menu_title": "monkeymadness",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/monkeymadnessicon.jpg",
	"flash": 0
}, {
	"id": 7124,
	"name": "Aztec Gems",
	"menu_title": "aztecgems",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/aztecgemsicon.jpg",
	"flash": 0
}, {
	"id": 7125,
	"name": "7 monkeys",
	"menu_title": "sevenmonkeys",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/sevenmonkeysicon.jpg",
	"flash": 0
}, {
	"id": 7126,
	"name": "Jokers Jewels",
	"menu_title": "jokerjewels",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/jokerjewelsicon.jpg",
	"flash": 0
}, {
	"id": 7127,
	"name": "Tigers",
	"menu_title": "tigers",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/tigersicon.jpg",
	"flash": 0
}, {
	"id": 7128,
	"name": "Dragon 888",
	"menu_title": "dragon8",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/dragon8icon.jpg",
	"flash": 0
}, {
	"id": 7129,
	"name": "Ancient Egypt",
	"menu_title": "egyptcls",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/egyptclsicon.jpg",
	"flash": 0
}, {
	"id": 7130,
	"name": "Mighty Kong",
	"menu_title": "mightykong",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/mightykongicon.jpg",
	"flash": 0
}, {
	"id": 7131,
	"name": "Lycky Dragons",
	"menu_title": "luckydragons",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/luckydragonsicon.jpg",
	"flash": 0
}, {
	"id": 7132,
	"name": "Dragon Kingdom",
	"menu_title": "dragonkingdom",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/dragonkingdomicon.jpg",
	"flash": 0
}, {
	"id": 7133,
	"name": "Book of Kingdom",
	"menu_title": "bookofkingdom",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/bookofkingdomicon.jpg",
	"flash": 0
}, {
	"id": 7134,
	"name": "Tales Of Egypt",
	"menu_title": "talesofegypt",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/talesofegypticon.jpg",
	"flash": 0
}, {
	"id": 7135,
	"name": "Fire Strike",
	"menu_title": "firestrike",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/firestrikeicon.jpg",
	"flash": 0
}, {
	"id": 7136,
	"name": "Wild Spells",
	"menu_title": "wildspells",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/wildspellsicon.jpg",
	"flash": 0
}, {
	"id": 7137,
	"name": "Safari King",
	"menu_title": "safariking",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/safarikingicon.jpg",
	"flash": 0
}, {
	"id": 7138,
	"name": "Eye Of The Storm",
	"menu_title": "eyeofthestorm",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/eyeofthestormicon.jpg",
	"flash": 0
}, {
	"id": 7139,
	"name": "John Hunter and the Mayan Gods",
	"menu_title": "mayangods",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/mayangodsicon.jpg",
	"flash": 0
}, {
	"id": 7140,
	"name": "Jurassic Giants",
	"menu_title": "jurassic",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/jurassicicon.jpg",
	"flash": 0
}, {
	"id": 7141,
	"name": "Return Of The Dead",
	"menu_title": "returndead",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/returndeadicon.jpg",
	"flash": 0
}, {
	"id": 7142,
	"name": "Hercules Son of Zeus",
	"menu_title": "hercules",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/herculesicon.jpg",
	"flash": 0
}, {
	"id": 7143,
	"name": "Pixie Wings",
	"menu_title": "pixiewings",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/pixiewingsicon.jpg",
	"flash": 0
}, {
	"id": 7144,
	"name": "Dancing Party",
	"menu_title": "dancingparty",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/dancingpartyicon.jpg",
	"flash": 0
}, {
	"id": 7145,
	"name": "Vegas Night",
	"menu_title": "vegasnights",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/vegasnightsicon.jpg",
	"flash": 0
}, {
	"id": 7146,
	"name": "Money Mouse",
	"menu_title": "moneymouse",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/moneymouseicon.jpg",
	"flash": 0
}, {
	"id": 7147,
	"name": "Treasure Horse",
	"menu_title": "treasurehorse",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/treasurehorseicon.jpg",
	"flash": 0
}, {
	"id": 7148,
	"name": "Great Reef",
	"menu_title": "greatreef",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/greatreeficon.jpg",
	"flash": 0
}, {
	"id": 7149,
	"name": "Dwaren Gold",
	"menu_title": "dwarengold",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/dwarengoldicon.jpg",
	"flash": 0
}, {
	"id": 7150,
	"name": "Lady Godiva",
	"menu_title": "ladygodiva",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/ladygodivaicon.jpg",
	"flash": 0
}, {
	"id": 7151,
	"name": "Irish Charms",
	"menu_title": "irishcharms",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/irishcharmsicon.jpg",
	"flash": 0
}, {
	"id": 7152,
	"name": "888 Gold",
	"menu_title": "888gold",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/888goldicon.jpg",
	"flash": 0
}, {
	"id": 7153,
	"name": "Diamonds Forever",
	"menu_title": "diamondsforever",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/diamondsforevericon.jpg",
	"flash": 0
}, {
	"id": 7154,
	"name": "Eyes of Fire",
	"menu_title": "eyesoffire",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/eyesoffireicon.jpg",
	"flash": 0
}, {
	"id": 7155,
	"name": "Master Chen's",
	"menu_title": "masterchen",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/masterchenicon.jpg",
	"flash": 0
}, {
	"id": 7156,
	"name": "Book Of Vikings",
	"menu_title": "bookviking",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/bookvikingicon.jpg",
	"flash": 0
}, {
	"id": 7157,
	"name": "Hot Chilly",
	"menu_title": "hotchilli",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/hotchilliicon.jpg",
	"flash": 0
}, {
	"id": 7158,
	"name": "Tree of Riches",
	"menu_title": "treeofriches",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/treeofrichesicon.jpg",
	"flash": 0
}, {
	"id": 7159,
	"name": "Big Bass Bonanza",
	"menu_title": "bbbonanza",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/bbbonanzaicon.jpg",
	"flash": 0
}, {
	"id": 7160,
	"name": "Christmas Big Bass Bonanza",
	"menu_title": "bxmasbnza",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/bxmasbnzaicon.jpg",
	"flash": 0
}, {
	"id": 7161,
	"name": "Bigger Bass Bonanza",
	"menu_title": "bbb",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/bbbicon.jpg",
	"flash": 0
}, {
	"id": 7162,
	"name": "Dwarves Gold Deluxe",
	"menu_title": "dwarvesdeluxe",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/dwarvesdeluxeicon.jpg",
	"flash": 0
}, {
	"id": 7163,
	"name": "7 Piggies",
	"menu_title": "sevenpigs",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/sevenpigsicon.jpg",
	"flash": 0
}, {
	"id": 7164,
	"name": "Peking Luck",
	"menu_title": "peking",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/pekingicon.jpg",
	"flash": 0
}, {
	"id": 7165,
	"name": "Firestrike 2",
	"menu_title": "firestrike2",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/firestrike2icon.jpg",
	"flash": 0
}, {
	"id": 7166,
	"name": "Colossal CashZ",
	"menu_title": "colocashzone",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/colocashzoneicon.jpg",
	"flash": 0
}, {
	"id": 7167,
	"name": "Journey to the west",
	"menu_title": "journey",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/journeyicon.jpg",
	"flash": 0
}, {
	"id": 7168,
	"name": "Jungle Gorilla",
	"menu_title": "junglegorilla",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/junglegorillaicon.jpg",
	"flash": 0
}, {
	"id": 7169,
	"name": "Master Joker",
	"menu_title": "masterjoker",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/masterjokericon.jpg",
	"flash": 0
}, {
	"id": 7170,
	"name": "Smugglers Cove",
	"menu_title": "smugcove",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/smugcoveicon.jpg",
	"flash": 0
}, {
	"id": 7171,
	"name": "Gates Of Olympus",
	"menu_title": "gatesolympus",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/gatesolympusicon.jpg",
	"flash": 0
}, {
	"id": 7172,
	"name": "Sweet Bobanza",
	"menu_title": "sweetbonanza",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/sweetbonanzaicon.jpg",
	"flash": 0
}, {
	"id": 7173,
	"name": "Fire Hot 5",
	"menu_title": "firehot5",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/firehot5icon.jpg",
	"flash": 0
}, {
	"id": 7174,
	"name": "Fire Hot 20",
	"menu_title": "firehot20",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/firehot20icon.jpg",
	"flash": 0
}, {
	"id": 7175,
	"name": "Fire Hot 40",
	"menu_title": "firehot40",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/firehot40icon.jpg",
	"flash": 0
}, {
	"id": 7176,
	"name": "Fire Hot 100",
	"menu_title": "firehot100",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/firehot100icon.jpg",
	"flash": 0
}, {
	"id": 7177,
	"name": "Shining Hot 5",
	"menu_title": "shininghot5",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/shininghot5icon.jpg",
	"flash": 0
}, {
	"id": 7178,
	"name": "Shining Hot 20",
	"menu_title": "shininghot20",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/shininghot20icon.jpg",
	"flash": 0
}, {
	"id": 7179,
	"name": "Shining Hot 40",
	"menu_title": "shininghot40",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/shininghot40icon.jpg",
	"flash": 0
}, {
	"id": 7180,
	"name": "Shining Hot 100",
	"menu_title": "shininghot100",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/shininghot100icon.jpg",
	"flash": 0
}, {
	"id": 7181,
	"name": "Striking Hot 5",
	"menu_title": "strikinghot5",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/strikinghot5icon.jpg",
	"flash": 0
}, {
	"id": 7182,
	"name": "Sweet Bonanza Xmas",
	"menu_title": "sweetbonanzaxmas",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/sweetbonanzaxmasicon.jpg",
	"flash": 0
}, {
	"id": 7183,
	"name": "Crown of Fire",
	"menu_title": "crownfire10",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/crownfire10icon.jpg",
	"flash": 0
}, {
	"id": 7184,
	"name": "The Dog House Megaways",
	"menu_title": "thedoghousemegaways",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/thedoghousemegawaysicon.jpg",
	"flash": 0
}, {
	"id": 7185,
	"name": "Triple Jokers",
	"menu_title": "triplejokers",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/triplejokersicon.jpg",
	"flash": 0
}, {
	"id": 7186,
	"name": "Triple Dragons",
	"menu_title": "tripledragons",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/tripledragonsicon.jpg",
	"flash": 0
}, {
	"id": 7187,
	"name": "Starlight Princess",
	"menu_title": "starlight",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/starlighticon.jpg",
	"flash": 0
}, {
	"id": 7188,
	"name": "Octobeer Fortunes",
	"menu_title": "octobeer",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/octobeericon.jpg",
	"flash": 0
}, {
	"id": 7189,
	"name": "Black Bull",
	"menu_title": "blackbull",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/blackbullicon.jpg",
	"flash": 0
}, {
	"id": 7190,
	"name": "Buffalo King Megaways",
	"menu_title": "buffalokingmegaways",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/buffalokingmegawaysicon.jpg",
	"flash": 0
}, {
	"id": 7191,
	"name": "Magic Crystals",
	"menu_title": "magiccrystals",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/magiccrystalsicon.jpg",
	"flash": 0
}, {
	"id": 7192,
	"name": "Lady of the Moon",
	"menu_title": "ladymoon",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/ladymoonicon.jpg",
	"flash": 0
}, {
	"id": 7193,
	"name": "Book of Golden Sands",
	"menu_title": "bookgoldensands",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/bookgoldensandsicon.jpg",
	"flash": 0
}, {
	"id": 7194,
	"name": "Hot to Burn Extreme",
	"menu_title": "hotburnextreme",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/hotburnextremeicon.jpg",
	"flash": 0
}, {
	"id": 7195,
	"name": "Panda s Fortune",
	"menu_title": "pandagold",
	"category": "pragmatic",
	"mobile": 1,
	"image": "\/pragmatic\/pandagoldicon.jpg",
	"flash": 0
}, {
	"id": 8001,
	"name": "Racing Dogs",
	"menu_title": "racingdogs",
	"category": "racing",
	"mobile": 1,
	"image": "\/racing\/racingdogsicon.jpg",
	"flash": 0
}, {
	"id": 8002,
	"name": "Racing Horses",
	"menu_title": "racinghorses",
	"category": "racing",
	"mobile": 1,
	"image": "\/racing\/racinghorsesicon.jpg",
	"flash": 0
}, {
	"id": 9000,
	"name": "50 Lions",
	"menu_title": "50_lions",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/50_lionsicon.jpg",
	"flash": 0
}, {
	"id": 9001,
	"name": "50 Dragons",
	"menu_title": "50_dragons",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/50_dragonsicon.jpg",
	"flash": 0
}, {
	"id": 9002,
	"name": "Big Red",
	"menu_title": "big_red",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/big_redicon.jpg",
	"flash": 0
}, {
	"id": 9003,
	"name": "Queen of the Nile",
	"menu_title": "queen_of_the_nile",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/queen_of_the_nileicon.jpg",
	"flash": 0
}, {
	"id": 9004,
	"name": "Geisha",
	"menu_title": "geisha_aristocrat",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/geisha_aristocraticon.jpg",
	"flash": 0
}, {
	"id": 9005,
	"name": "Lucky Count",
	"menu_title": "lucky_count",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/lucky_counticon.jpg",
	"flash": 0
}, {
	"id": 9006,
	"name": "Dolphins Treasure",
	"menu_title": "dolphins_treasure",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/dolphins_treasureicon.jpg",
	"flash": 0
}, {
	"id": 9007,
	"name": "Flame Of Olympus",
	"menu_title": "flame_of_olympus",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/flame_of_olympusicon.jpg",
	"flash": 0
}, {
	"id": 9008,
	"name": "Big Ben",
	"menu_title": "big_ben",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/big_benicon.jpg",
	"flash": 0
}, {
	"id": 9009,
	"name": "Wild Splash",
	"menu_title": "wild_splash",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/wild_splashicon.jpg",
	"flash": 0
}, {
	"id": 9010,
	"name": "Buffalo",
	"menu_title": "buffalo",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/buffaloicon.jpg",
	"flash": 0
}, {
	"id": 9011,
	"name": "Double Happiness",
	"menu_title": "double_happiness",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/double_happinessicon.jpg",
	"flash": 0
}, {
	"id": 9012,
	"name": "Pompe II",
	"menu_title": "pompeii",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/pompeiiicon.jpg",
	"flash": 0
}, {
	"id": 9013,
	"name": "Jaguar Mist",
	"menu_title": "jaguar_mist",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/jaguar_misticon.jpg",
	"flash": 0
}, {
	"id": 9014,
	"name": "Silk Road",
	"menu_title": "silk_road",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/silk_roadicon.jpg",
	"flash": 0
}, {
	"id": 9015,
	"name": "Queen Of The Nile 2",
	"menu_title": "queen_of_the_nile_2",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/queen_of_the_nile_2icon.jpg",
	"flash": 0
}, {
	"id": 9016,
	"name": "Tiki Torch",
	"menu_title": "tiki_torch",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/tiki_torchicon.jpg",
	"flash": 0
}, {
	"id": 9017,
	"name": "5 Dragons",
	"menu_title": "5_dragons",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/5_dragonsicon.jpg",
	"flash": 0
}, {
	"id": 9019,
	"name": "Sun and Moon",
	"menu_title": "sun_and_moon",
	"category": "aristocrat",
	"mobile": 1,
	"image": "\/aristocrat\/sun_and_moonicon.jpg",
	"flash": 0
}];


module.exports = {
  users,
  games,
  balances,
  products,
  categories,
};
