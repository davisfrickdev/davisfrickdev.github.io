const champions = [
    "Aatrox",
    "Ahri",
    "Akali",
    "Akshan",
    "Alistar",
    "Amumu",
    "Anivia",
    "Annie",
    "Aphelios",
    "Ashe",
    "Aurelion Sol",
    "Aurora",
    "Azir",
    "Bard",
    "Bel'Veth",
    "Blitzcrank",
    "Brand",
    "Braum",
    "Briar",
    "Caitlyn",
    "Camille",
    "Cassiopeia",
    "Cho'Gath",
    "Corki",
    "Darius",
    "Diana",
    "Dr. Mundo",
    "Draven",
    "Ekko",
    "Elise",
    "Evelynn",
    "Ezreal",
    "Fiddlesticks",
    "Fiora",
    "Fizz",
    "Galio",
    "Gangplank",
    "Garen",
    "Gnar",
    "Gragas",
    "Graves",
    "Gwen",
    "Hecarim",
    "Heimerdinger",
    "Hwei",
    "Illaoi",
    "Irelia",
    "Ivern",
    "Janna",
    "Jarvan IV",
    "Jax",
    "Jayce",
    "Jhin",
    "Jinx",
    "K'Sante",
    "Kai'Sa",
    "Kalista",
    "Karma",
    "Karthus",
    "Kassadin",
    "Katarina",
    "Kayle",
    "Kayn",
    "Kennen",
    "Kha'Zix",
    "Kindred",
    "Kled",
    "Kog'Maw",
    "LeBlanc",
    "Lee Sin",
    "Leona",
    "Lillia",
    "Lissandra",
    "Lucian",
    "Lulu",
    "Lux",
    "Malphite",
    "Malzahar",
    "Maokai",
    "Master Yi",
    "Milio",
    "Miss Fortune",
    "Mordekaiser",
    "Morgana",
    "Naafiri",
    "Nami",
    "Nasus",
    "Nautilus",
    "Neeko",
    "Nidalee",
    "Nilah",
    "Nocturne",
    "Nunu & Willump",
    "Olaf",
    "Orianna",
    "Ornn",
    "Pantheon",
    "Poppy",
    "Pyke",
    "Qiyana",
    "Quinn",
    "Rakan",
    "Rammus",
    "Rek'Sai",
    "Rell",
    "Renata Glasc",
    "Renekton",
    "Rengar",
    "Riven",
    "Rumble",
    "Ryze",
    "Samira",
    "Sejuani",
    "Senna",
    "Seraphine",
    "Sett",
    "Shaco",
    "Shen",
    "Shyvana",
    "Singed",
    "Sion",
    "Sivir",
    "Skarner",
    "Smolder",
    "Sona",
    "Soraka",
    "Swain",
    "Sylas",
    "Syndra",
    "Tahm Kench",
    "Taliyah",
    "Talon",
    "Taric",
    "Teemo",
    "Thresh",
    "Tristana",
    "Trundle",
    "Tryndamere",
    "Twisted Fate",
    "Twitch",
    "Udyr",
    "Urgot",
    "Varus",
    "Vayne",
    "Veigar",
    "Vel'Koz",
    "Vex",
    "Vi",
    "Viego",
    "Viktor",
    "Vladimir",
    "Volibear",
    "Warwick",
    "Wukong",
    "Xayah",
    "Xerath",
    "Xin Zhao",
    "Yasuo",
    "Yone",
    "Yorick",
    "Yuumi",
    "Zac",
    "Zed",
    "Zeri",
    "Ziggs",
    "Zilean",
    "Zoe",
    "Zyra"
]
const championsInfo = {
    "Aatrox": {
        "gender": "Male", "region": "Shurima", "type": "Melee", "positions": ["Top"],
        "species": "Darkin", "resource": "Manaless", "release_year": 2013
    },
    "Ahri": {
        "gender": "Female", "region": "Ionia", "type": "Ranged", "positions": ["Mid"],
        "species": "Vastaya", "resource": "Mana", "release_year": 2011
    },
    "Akali": {
        "gender": "Female", "region": "Ionia", "type": "Melee", "positions": ["Mid", "Top"],
        "species": "Human", "resource": "Energy", "release_year": 2010
    },
    "Akshan": {
        "gender": "Male", "region": "Shurima", "type": "Ranged", "positions": ["Mid", "ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2021
    },
    "Alistar": {
        "gender": "Male", "region": "Runeterra (Demacia)", "type": "Melee", "positions": ["Support"],
        "species": "Minotaur", "resource": "Mana", "release_year": 2009
    },
    "Amumu": {
        "gender": "Male", "region": "Shurima", "type": "Melee", "positions": ["Jungle"],
        "species": "Yordle", "resource": "Mana", "release_year": 2009
    },
    "Anivia": {
        "gender": "Female", "region": "Freljord", "type": "Ranged", "positions": ["Mid"],
        "species": "Cryophoenix", "resource": "Mana", "release_year": 2009
    },
    "Annie": {
        "gender": "Female", "region": "Noxus", "type": "Ranged", "positions": ["Mid", "Support"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Aphelios": {
        "gender": "Male", "region": "Targon", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2019
    },
    "Ashe": {
        "gender": "Female", "region": "Freljord", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Aurelion Sol": {
        "gender": "Male", "region": "Targon", "type": "Ranged", "positions": ["Mid"],
        "species": "Celestial Dragon", "resource": "Mana", "release_year": 2016
    },
    "Aurora": {
        "gender": "Female", "region": "Freljord", "type": "Ranged", "positions": ["Mid"],
        "species": "Vastaya", "resource": "Mana", "release_year": 2024
    },
    "Azir": {
        "gender": "Male", "region": "Shurima", "type": "Ranged", "positions": ["Mid"],
        "species": "Ascended", "resource": "Mana", "release_year": 2014
    },
    "Bard": {
        "gender": "Male", "region": "Unknown", "type": "Ranged", "positions": ["Support"],
        "species": "Celestial", "resource": "Mana", "release_year": 2015
    },
    "Bel'Veth": {
        "gender": "Female", "region": "Void", "type": "Melee", "positions": ["Jungle"],
        "species": "Voidborn", "resource": "Manaless", "release_year": 2022
    },
    "Blitzcrank": {
        "gender": "Male", "region": "Zaun", "type": "Melee", "positions": ["Support"],
        "species": "Golem", "resource": "Mana", "release_year": 2009
    },
    "Brand": {
        "gender": "Male", "region": "Runeterra", "type": "Ranged", "positions": ["Mid", "Support"],
        "species": "Human (Fire Elemental)", "resource": "Mana", "release_year": 2011
    },
    "Braum": {
        "gender": "Male", "region": "Freljord", "type": "Melee", "positions": ["Support"],
        "species": "Human", "resource": "Mana", "release_year": 2014
    },
    "Briar": {
        "gender": "Female", "region": "Noxus", "type": "Melee", "positions": ["Jungle"],
        "species": "Vampire", "resource": "Health", "release_year": 2023
    },
    "Caitlyn": {
        "gender": "Female", "region": "Piltover", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2011
    },
    "Camille": {
        "gender": "Female", "region": "Piltover", "type": "Melee", "positions": ["Top"],
        "species": "Cyborg", "resource": "Mana", "release_year": 2016
    },
    "Cassiopeia": {
        "gender": "Female", "region": "Noxus", "type": "Ranged", "positions": ["Mid"],
        "species": "Human (Transformed)", "resource": "Mana", "release_year": 2010
    },
    "Cho'Gath": {
        "gender": "Male", "region": "Void", "type": "Melee", "positions": ["Top", "Mid"],
        "species": "Voidborn", "resource": "Mana", "release_year": 2009
    },
    "Corki": {
        "gender": "Male", "region": "Bandle City", "type": "Ranged", "positions": ["Mid", "ADC"],
        "species": "Yordle", "resource": "Mana", "release_year": 2009
    },
    "Darius": {
        "gender": "Male", "region": "Noxus", "type": "Melee", "positions": ["Top"],
        "species": "Human", "resource": "Mana", "release_year": 2012
    },
    "Diana": {
        "gender": "Female", "region": "Targon", "type": "Melee", "positions": ["Mid", "Jungle"],
        "species": "Human", "resource": "Mana", "release_year": 2012
    },
    "Dr. Mundo": {
        "gender": "Male", "region": "Zaun", "type": "Melee", "positions": ["Top", "Jungle"],
        "species": "Chemically Altered Human", "resource": "Health", "release_year": 2009
    },
    "Draven": {
        "gender": "Male", "region": "Noxus", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2012
    },
    "Ekko": {
        "gender": "Male", "region": "Zaun", "type": "Melee", "positions": ["Mid", "Jungle"],
        "species": "Human", "resource": "Mana", "release_year": 2015
    },
    "Elise": {
        "gender": "Female", "region": "Noxus", "type": "Melee", "positions": ["Jungle"],
        "species": "Human (Transformed)", "resource": "Mana", "release_year": 2012
    },
    "Evelynn": {
        "gender": "Female", "region": "Runeterra", "type": "Melee", "positions": ["Jungle"],
        "species": "Demon", "resource": "Mana", "release_year": 2009
    },
    "Ezreal": {
        "gender": "Male", "region": "Piltover", "type": "Ranged", "positions": ["ADC", "Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Fiddlesticks": {
        "gender": "Male", "region": "Runeterra", "type": "Melee", "positions": ["Jungle"],
        "species": "Demon", "resource": "Mana", "release_year": 2009
    },
    "Fiora": {
        "gender": "Female", "region": "Demacia", "type": "Melee", "positions": ["Top"],
        "species": "Human", "resource": "Mana", "release_year": 2012
    },
    "Fizz": {
        "gender": "Male", "region": "Bilgewater", "type": "Melee", "positions": ["Mid"],
        "species": "Amphibious Yordle", "resource": "Mana", "release_year": 2011
    },
    "Galio": {
        "gender": "Male", "region": "Demacia", "type": "Melee", "positions": ["Mid", "Support"],
        "species": "Golem", "resource": "Mana", "release_year": 2010
    },
    "Gangplank": {
        "gender": "Male", "region": "Bilgewater", "type": "Melee", "positions": ["Top", "Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Garen": {
        "gender": "Male", "region": "Demacia", "type": "Melee", "positions": ["Top"],
        "species": "Human", "resource": "Manaless", "release_year": 2010
    },
    "Gnar": {
        "gender": "Male", "region": "Freljord", "type": "Melee", "positions": ["Top"],
        "species": "Yordle", "resource": "Rage", "release_year": 2014
    },
    "Gragas": {
        "gender": "Male", "region": "Freljord", "type": "Melee", "positions": ["Top", "Jungle"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Graves": {
        "gender": "Male", "region": "Bilgewater", "type": "Ranged", "positions": ["Jungle", "ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2011
    },
    "Gwen": {
        "gender": "Female", "region": "Shadow Isles", "type": "Melee", "positions": ["Top"],
        "species": "Doll (Human Soul)", "resource": "Mana", "release_year": 2021
    },
    "Hecarim": {
        "gender": "Male", "region": "Shadow Isles", "type": "Melee", "positions": ["Jungle"],
        "species": "Spectral Centaur", "resource": "Mana", "release_year": 2012
    },
    "Heimerdinger": {
        "gender": "Male", "region": "Piltover", "type": "Ranged", "positions": ["Mid", "Top"],
        "species": "Yordle", "resource": "Mana", "release_year": 2009
    },
    "Hwei": {
        "gender": "Male", "region": "Runeterra", "type": "Ranged", "positions": ["Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2023
    },
    "Illaoi": {
        "gender": "Female", "region": "Bilgewater", "type": "Melee", "positions": ["Top"],
        "species": "Human", "resource": "Mana", "release_year": 2015
    },
    "Irelia": {
        "gender": "Female", "region": "Ionia", "type": "Melee", "positions": ["Top", "Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Ivern": {
        "gender": "Male", "region": "Ionia", "type": "Ranged", "positions": ["Jungle"],
        "species": "Human (Transformed)", "resource": "Mana", "release_year": 2016
    },
    "Janna": {
        "gender": "Female", "region": "Zaun", "type": "Ranged", "positions": ["Support"],
        "species": "Spirit", "resource": "Mana", "release_year": 2009
    },
    "Jarvan IV": {
        "gender": "Male", "region": "Demacia", "type": "Melee", "positions": ["Jungle", "Top"],
        "species": "Human", "resource": "Mana", "release_year": 2011
    },
    "Jax": {
        "gender": "Male", "region": "Icathia", "type": "Melee", "positions": ["Top", "Jungle"],
        "species": "Unknown", "resource": "Mana", "release_year": 2009
    },
    "Jayce": {
        "gender": "Male", "region": "Piltover", "type": "Ranged", "positions": ["Mid", "Top"],
        "species": "Human", "resource": "Mana", "release_year": 2012
    },
    "Jhin": {
        "gender": "Male", "region": "Ionia", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2016
    },
    "Jinx": {
        "gender": "Female", "region": "Zaun", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2013
    },
    "K'Sante": {
        "gender": "Male", "region": "Shurima", "type": "Melee", "positions": ["Top"],
        "species": "Human", "resource": "Mana", "release_year": 2022
    },
    "Kai'Sa": {
        "gender": "Female", "region": "Void", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2018
    },
    "Kalista": {
        "gender": "Female", "region": "Shadow Isles", "type": "Ranged", "positions": ["ADC"],
        "species": "Spectral", "resource": "Mana", "release_year": 2014
    },
    "Karma": {
        "gender": "Female", "region": "Ionia", "type": "Ranged", "positions": ["Support", "Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2011
    },
    "Karthus": {
        "gender": "Male", "region": "Shadow Isles", "type": "Ranged", "positions": ["Mid", "Jungle"],
        "species": "Undead", "resource": "Mana", "release_year": 2009
    },
    "Kassadin": {
        "gender": "Male", "region": "Void", "type": "Melee", "positions": ["Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Katarina": {
        "gender": "Female", "region": "Noxus", "type": "Melee", "positions": ["Mid"],
        "species": "Human", "resource": "Manaless", "release_year": 2009
    },
    "Kayle": {
        "gender": "Female", "region": "Demacia", "type": "Ranged", "positions": ["Top", "Mid"],
        "species": "Aspect", "resource": "Mana", "release_year": 2009
    },
    "Kayn": {
        "gender": "Male", "region": "Ionia", "type": "Melee", "positions": ["Jungle"],
        "species": "Human", "resource": "Mana", "release_year": 2017
    },
    "Kennen": {
        "gender": "Male", "region": "Ionia", "type": "Ranged", "positions": ["Top", "Mid"],
        "species": "Yordle", "resource": "Energy", "release_year": 2010
    },
    "Kha'Zix": {
        "gender": "Male", "region": "Void", "type": "Melee", "positions": ["Jungle"],
        "species": "Voidborn", "resource": "Mana", "release_year": 2012
    },
    "Kindred": {
        "gender": "Bigender", "region": "Runeterra", "type": "Ranged", "positions": ["Jungle"],
        "species": "Spirit", "resource": "Mana", "release_year": 2015
    },
    "Kled": {
        "gender": "Male", "region": "Noxus", "type": "Melee", "positions": ["Top"],
        "species": "Yordle", "resource": "Courage", "release_year": 2016
    },
    "Kog'Maw": {
        "gender": "Male", "region": "Void", "type": "Ranged", "positions": ["ADC"],
        "species": "Voidborn", "resource": "Mana", "release_year": 2010
    },
    "LeBlanc": {
        "gender": "Female", "region": "Noxus", "type": "Ranged", "positions": ["Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Lee Sin": {
        "gender": "Male", "region": "Ionia", "type": "Melee", "positions": ["Jungle"],
        "species": "Human", "resource": "Energy", "release_year": 2011
    },
    "Leona": {
        "gender": "Female", "region": "Targon", "type": "Melee", "positions": ["Support"],
        "species": "Human", "resource": "Mana", "release_year": 2011
    },
    "Lillia": {
        "gender": "Female", "region": "Ionia", "type": "Melee", "positions": ["Jungle"],
        "species": "Vastaya", "resource": "Mana", "release_year": 2020
    },
    "Lissandra": {
        "gender": "Female", "region": "Freljord", "type": "Ranged", "positions": ["Mid"],
        "species": "Iceborn", "resource": "Mana", "release_year": 2013
    },
    "Lucian": {
        "gender": "Male", "region": "Demacia", "type": "Ranged", "positions": ["ADC", "Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2013
    },
    "Lulu": {
        "gender": "Female", "region": "Bandle City", "type": "Ranged", "positions": ["Support"],
        "species": "Yordle", "resource": "Mana", "release_year": 2012
    },
    "Lux": {
        "gender": "Female", "region": "Demacia", "type": "Ranged", "positions": ["Mid", "Support"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Malphite": {
        "gender": "Male", "region": "Ixtal", "type": "Melee", "positions": ["Top", "Mid"],
        "species": "Golem", "resource": "Mana", "release_year": 2009
    },
    "Malzahar": {
        "gender": "Male", "region": "Void", "type": "Ranged", "positions": ["Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Maokai": {
        "gender": "Male", "region": "Shadow Isles", "type": "Melee", "positions": ["Top", "Support"],
        "species": "Treant", "resource": "Mana", "release_year": 2011
    },
    "Master Yi": {
        "gender": "Male", "region": "Ionia", "type": "Melee", "positions": ["Jungle"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Milio": {
        "gender": "Male", "region": "Ixtal", "type": "Ranged", "positions": ["Support"],
        "species": "Human", "resource": "Mana", "release_year": 2023
    },
    "Miss Fortune": {
        "gender": "Female", "region": "Bilgewater", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Mordekaiser": {
        "gender": "Male", "region": "Noxus", "type": "Melee", "positions": ["Top", "Mid"],
        "species": "Undead", "resource": "Shield", "release_year": 2010
    },
    "Morgana": {
        "gender": "Female", "region": "Demacia", "type": "Ranged", "positions": ["Support", "Mid"],
        "species": "Aspect", "resource": "Mana", "release_year": 2009
    },
    "Naafiri": {
        "gender": "Female", "region": "Shurima", "type": "Melee", "positions": ["Mid"],
        "species": "Darkin", "resource": "Mana", "release_year": 2023
    },
    "Nami": {
        "gender": "Female", "region": "Bilgewater", "type": "Ranged", "positions": ["Support"],
        "species": "Vastaya", "resource": "Mana", "release_year": 2012
    },
    "Nasus": {
        "gender": "Male", "region": "Shurima", "type": "Melee", "positions": ["Top"],
        "species": "Ascended", "resource": "Mana", "release_year": 2009
    },
    "Nautilus": {
        "gender": "Male", "region": "Bilgewater", "type": "Melee", "positions": ["Support"],
        "species": "Human (Transformed)", "resource": "Mana", "release_year": 2012
    },
    "Neeko": {
        "gender": "Female", "region": "Ixtal", "type": "Ranged", "positions": ["Mid", "Support"],
        "species": "Vastaya", "resource": "Mana", "release_year": 2018
    },
    "Nidalee": {
        "gender": "Female", "region": "Ixtal", "type": "Melee", "positions": ["Jungle"],
        "species": "Human (Transformed)", "resource": "Mana", "release_year": 2009
    },
    "Nilah": {
        "gender": "Female", "region": "Bilgewater", "type": "Melee", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2022
    },
    "Nocturne": {
        "gender": "Male", "region": "Shadow Isles", "type": "Melee", "positions": ["Jungle"],
        "species": "Demon", "resource": "Mana", "release_year": 2011
    },
    "Nunu & Willump": {
        "gender": "Male", "region": "Freljord", "type": "Melee", "positions": ["Jungle"],
        "species": "Human & Yeti", "resource": "Mana", "release_year": 2009
    },
    "Olaf": {
        "gender": "Male", "region": "Freljord", "type": "Melee", "positions": ["Top", "Jungle"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Orianna": {
        "gender": "Female", "region": "Piltover", "type": "Ranged", "positions": ["Mid"],
        "species": "Cyborg", "resource": "Mana", "release_year": 2011
    },
    "Ornn": {
        "gender": "Male", "region": "Freljord", "type": "Melee", "positions": ["Top"],
        "species": "Demi-God", "resource": "Mana", "release_year": 2017
    },
    "Pantheon": {
        "gender": "Male", "region": "Targon", "type": "Melee", "positions": ["Top", "Support"],
        "species": "Aspect", "resource": "Mana", "release_year": 2010
    },
    "Poppy": {
        "gender": "Female", "region": "Demacia", "type": "Melee", "positions": ["Top", "Support"],
        "species": "Yordle", "resource": "Mana", "release_year": 2010
    },
    "Pyke": {
        "gender": "Male", "region": "Bilgewater", "type": "Melee", "positions": ["Support"],
        "species": "Undead", "resource": "Mana", "release_year": 2018
    },
    "Qiyana": {
        "gender": "Female", "region": "Ixtal", "type": "Melee", "positions": ["Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2019
    },
    "Quinn": {
        "gender": "Female", "region": "Demacia", "type": "Ranged", "positions": ["Top", "ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2013
    },
    "Rakan": {
        "gender": "Male", "region": "Ionia", "type": "Melee", "positions": ["Support"],
        "species": "Vastaya", "resource": "Mana", "release_year": 2017
    },
    "Rammus": {
        "gender": "Male", "region": "Shurima", "type": "Melee", "positions": ["Jungle", "Top"],
        "species": "Armadillo", "resource": "Mana", "release_year": 2009
    },
    "Rek'Sai": {
        "gender": "Female", "region": "Void", "type": "Melee", "positions": ["Jungle"],
        "species": "Voidborn", "resource": "Rage", "release_year": 2014
    },
    "Rell": {
        "gender": "Female", "region": "Noxus", "type": "Melee", "positions": ["Support"],
        "species": "Human", "resource": "Mana", "release_year": 2020
    },
    "Renata Glasc": {
        "gender": "Female", "region": "Zaun", "type": "Ranged", "positions": ["Support"],
        "species": "Human", "resource": "Mana", "release_year": 2022
    },
    "Renekton": {
        "gender": "Male", "region": "Shurima", "type": "Melee", "positions": ["Top"],
        "species": "Ascended", "resource": "Fury", "release_year": 2011
    },
    "Rengar": {
        "gender": "Male", "region": "Shurima", "type": "Melee", "positions": ["Jungle"],
        "species": "Vastaya", "resource": "Ferocity", "release_year": 2012
    },
    "Riven": {
        "gender": "Female", "region": "Noxus", "type": "Melee", "positions": ["Top"],
        "species": "Human", "resource": "Manaless", "release_year": 2011
    },
    "Rumble": {
        "gender": "Male", "region": "Bandle City", "type": "Melee", "positions": ["Top", "Mid"],
        "species": "Yordle", "resource": "Heat", "release_year": 2011
    },
    "Ryze": {
        "gender": "Male", "region": "Runeterra", "type": "Ranged", "positions": ["Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Samira": {
        "gender": "Female", "region": "Shurima", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2020
    },
    "Sejuani": {
        "gender": "Female", "region": "Freljord", "type": "Melee", "positions": ["Jungle"],
        "species": "Human", "resource": "Mana", "release_year": 2012
    },
    "Senna": {
        "gender": "Female", "region": "Demacia", "type": "Ranged", "positions": ["Support", "ADC"],
        "species": "Human (Resurrected)", "resource": "Mana", "release_year": 2019
    },
    "Seraphine": {
        "gender": "Female", "region": "Piltover", "type": "Ranged", "positions": ["Mid", "Support", "ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2020
    },
    "Sett": {
        "gender": "Male", "region": "Ionia", "type": "Melee", "positions": ["Top", "Support"],
        "species": "Vastaya", "resource": "Grit", "release_year": 2020
    },
    "Shaco": {
        "gender": "Male", "region": "Runeterra", "type": "Melee", "positions": ["Jungle", "Support", "Top"],
        "species": "Demon", "resource": "Mana", "release_year": 2009
    },
    "Shen": {
        "gender": "Male", "region": "Ionia", "type": "Melee", "positions": ["Top", "Support"],
        "species": "Human", "resource": "Energy", "release_year": 2010
    },
    "Shyvana": {
        "gender": "Female", "region": "Demacia", "type": "Melee", "positions": ["Jungle"],
        "species": "Half-Dragon", "resource": "Fury", "release_year": 2011
    },
    "Singed": {
        "gender": "Male", "region": "Zaun", "type": "Melee", "positions": ["Top"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Sion": {
        "gender": "Male", "region": "Noxus", "type": "Melee", "positions": ["Top"],
        "species": "Undead", "resource": "Mana", "release_year": 2009
    },
    "Sivir": {
        "gender": "Female", "region": "Shurima", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Skarner": {
        "gender": "Male", "region": "Shurima", "type": "Melee", "positions": ["Jungle", "Top"],
        "species": "Brackern", "resource": "Mana", "release_year": 2011
    },
    "Smolder": {
        "gender": "Male", "region": "Noxus", "type": "Ranged", "positions": ["ADC"],
        "species": "Unknown", "resource": "Mana", "release_year": 2024
    },
    "Sona": {
        "gender": "Female", "region": "Demacia", "type": "Ranged", "positions": ["Support"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Soraka": {
        "gender": "Female", "region": "Targon", "type": "Ranged", "positions": ["Support"],
        "species": "Celestial", "resource": "Mana", "release_year": 2009
    },
    "Swain": {
        "gender": "Male", "region": "Noxus", "type": "Ranged", "positions": ["Mid", "Support"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Sylas": {
        "gender": "Male", "region": "Demacia", "type": "Melee", "positions": ["Mid", "Jungle", "Top", "Support"],
        "species": "Human", "resource": "Mana", "release_year": 2019
    },
    "Syndra": {
        "gender": "Female", "region": "Ionia", "type": "Ranged", "positions": ["Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2012
    },
    "Tahm Kench": {
        "gender": "Male", "region": "Bilgewater", "type": "Melee", "positions": ["Support", "Top"],
        "species": "Demon", "resource": "Mana", "release_year": 2015
    },
    "Taliyah": {
        "gender": "Female", "region": "Shurima", "type": "Ranged", "positions": ["Mid", "Jungle"],
        "species": "Human", "resource": "Mana", "release_year": 2016
    },
    "Talon": {
        "gender": "Male", "region": "Noxus", "type": "Melee", "positions": ["Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2011
    },
    "Taric": {
        "gender": "Male", "region": "Targon", "type": "Melee", "positions": ["Support"],
        "species": "Aspect", "resource": "Mana", "release_year": 2009
    },
    "Teemo": {
        "gender": "Male", "region": "Bandle City", "type": "Ranged", "positions": ["Top"],
        "species": "Yordle", "resource": "Mana", "release_year": 2009
    },
    "Thresh": {
        "gender": "Male", "region": "Shadow Isles", "type": "Melee", "positions": ["Support"],
        "species": "Undead", "resource": "Mana", "release_year": 2013
    },
    "Tristana": {
        "gender": "Female", "region": "Bandle City", "type": "Ranged", "positions": ["ADC"],
        "species": "Yordle", "resource": "Mana", "release_year": 2009
    },
    "Trundle": {
        "gender": "Male", "region": "Freljord", "type": "Melee", "positions": ["Top", "Jungle"],
        "species": "Troll", "resource": "Mana", "release_year": 2010
    },
    "Tryndamere": {
        "gender": "Male", "region": "Freljord", "type": "Melee", "positions": ["Top"],
        "species": "Human", "resource": "Fury", "release_year": 2009
    },
    "Twisted Fate": {
        "gender": "Male", "region": "Bilgewater", "type": "Ranged", "positions": ["Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Twitch": {
        "gender": "Male", "region": "Zaun", "type": "Ranged", "positions": ["ADC"],
        "species": "Rat", "resource": "Mana", "release_year": 2009
    },
    "Udyr": {
        "gender": "Male", "region": "Freljord", "type": "Melee", "positions": ["Jungle", "Top"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Urgot": {
        "gender": "Male", "region": "Zaun", "type": "Melee", "positions": ["Top", "Jungle"],
        "species": "Cyborg", "resource": "Mana", "release_year": 2010
    },
    "Varus": {
        "gender": "Male", "region": "Ionia", "type": "Ranged", "positions": ["ADC", "Mid"],
        "species": "Darkin", "resource": "Mana", "release_year": 2012
    },
    "Vayne": {
        "gender": "Female", "region": "Demacia", "type": "Ranged", "positions": ["ADC", "Top"],
        "species": "Human", "resource": "Mana", "release_year": 2011
    },
    "Veigar": {
        "gender": "Male", "region": "Bandle City", "type": "Ranged", "positions": ["Mid"],
        "species": "Yordle", "resource": "Mana", "release_year": 2009
    },
    "Vel'Koz": {
        "gender": "Male", "region": "Void", "type": "Ranged", "positions": ["Mid"],
        "species": "Voidborn", "resource": "Mana", "release_year": 2014
    },
    "Vex": {
        "gender": "Female", "region": "Shadow Isles", "type": "Ranged", "positions": ["Mid"],
        "species": "Yordle", "resource": "Mana", "release_year": 2021
    },
    "Vi": {
        "gender": "Female", "region": "Piltover", "type": "Melee", "positions": ["Jungle"],
        "species": "Human", "resource": "Mana", "release_year": 2012
    },
    "Viego": {
        "gender": "Male", "region": "Shadow Isles", "type": "Melee", "positions": ["Jungle", "Top"],
        "species": "Undead", "resource": "Manaless", "release_year": 2021
    },
    "Viktor": {
        "gender": "Male", "region": "Zaun", "type": "Ranged", "positions": ["Mid"],
        "species": "Cyborg", "resource": "Mana", "release_year": 2011
    },
    "Vladimir": {
        "gender": "Male", "region": "Noxus", "type": "Ranged", "positions": ["Mid", "Top"],
        "species": "Hemomancer", "resource": "Health", "release_year": 2010
    },
    "Volibear": {
        "gender": "Male", "region": "Freljord", "type": "Melee", "positions": ["Top", "Jungle"],
        "species": "Demi-God", "resource": "Mana", "release_year": 2011
    },
    "Warwick": {
        "gender": "Male", "region": "Zaun", "type": "Melee", "positions": ["Jungle"],
        "species": "Chemically Altered Human", "resource": "Mana", "release_year": 2009
    },
    "Wukong": {
        "gender": "Male", "region": "Ionia", "type": "Melee", "positions": ["Top", "Jungle"],
        "species": "Vastaya", "resource": "Mana", "release_year": 2011
    },
    "Xayah": {
        "gender": "Female", "region": "Ionia", "type": "Ranged", "positions": ["ADC"],
        "species": "Vastaya", "resource": "Mana", "release_year": 2017
    },
    "Xerath": {
        "gender": "Male", "region": "Shurima", "type": "Ranged", "positions": ["Mid"],
        "species": "Ascended", "resource": "Mana", "release_year": 2011
    },
    "Xin Zhao": {
        "gender": "Male", "region": "Demacia", "type": "Melee", "positions": ["Jungle"],
        "species": "Human", "resource": "Mana", "release_year": 2010
    },
    "Yasuo": {
        "gender": "Male", "region": "Ionia", "type": "Melee", "positions": ["Mid", "Top"],
        "species": "Human", "resource": "Manaless", "release_year": 2013
    },
    "Yone": {
        "gender": "Male", "region": "Ionia", "type": "Melee", "positions": ["Mid", "Top"],
        "species": "Human", "resource": "Manaless", "release_year": 2020
    },
    "Yorick": {
        "gender": "Male", "region": "Shadow Isles", "type": "Melee", "positions": ["Top"],
        "species": "Human (Resurrected)", "resource": "Mana", "release_year": 2011
    },
    "Yuumi": {
        "gender": "Female", "region": "Bandle City", "type": "Ranged", "positions": ["Support"],
        "species": "Cat", "resource": "Mana", "release_year": 2019
    },
    "Zac": {
        "gender": "Male", "region": "Zaun", "type": "Melee", "positions": ["Jungle", "Top"],
        "species": "Goo", "resource": "Health", "release_year": 2013
    },
    "Zed": {
        "gender": "Male", "region": "Ionia", "type": "Melee", "positions": ["Mid"],
        "species": "Human", "resource": "Energy", "release_year": 2012
    },
    "Zeri": {
        "gender": "Female", "region": "Zaun", "type": "Ranged", "positions": ["ADC"],
        "species": "Human", "resource": "Mana", "release_year": 2022
    },
    "Ziggs": {
        "gender": "Male", "region": "Piltover", "type": "Ranged", "positions": ["Mid"],
        "species": "Yordle", "resource": "Mana", "release_year": 2012
    },
    "Zilean": {
        "gender": "Male", "region": "Runeterra", "type": "Ranged", "positions": ["Support", "Mid"],
        "species": "Human", "resource": "Mana", "release_year": 2009
    },
    "Zoe": {
        "gender": "Female", "region": "Targon", "type": "Ranged", "positions": ["Mid"],
        "species": "Aspect", "resource": "Mana", "release_year": 2017
    },
    "Zyra": {
        "gender": "Female", "region": "Runeterra", "type": "Ranged", "positions": ["Support", "Mid"],
        "species": "Plant", "resource": "Mana", "release_year": 2012
    }
}

let pickedChampions = new Set();
let randChamp = "";
let randChampInfo = {};
let guesses = [];
let hints = 0;

function startNewRound() {
    if (pickedChampions.size === champions.length) {
        alert("Let's try a new champion!");
        return;
    }

    do {
        randChamp = champions[Math.floor(Math.random() * champions.length)];
    } while (pickedChampions.has(randChamp));

    pickedChampions.add(randChamp);
    randChampInfo = championsInfo[randChamp];
    guesses = [];
    hints = 0;

    displayChampionInfo();
    document.getElementById("guessList").innerText = "You've already guessed:";
    document.getElementById("guessInput").value = "";
}

function displayChampionInfo() {
    const info = `
        Gender: ${randChampInfo.gender} <br>
        Region: ${randChampInfo.region} <br>
        Type: ${randChampInfo.type} <br>
        Positions: ${randChampInfo.positions.join(", ")} <br>
        Species: ${randChampInfo.species} <br>
        Resource: ${randChampInfo.resource} <br>
        Release Year: ${randChampInfo.release_year}
    `;
    document.getElementById("champInfo").innerHTML = info;
}

function checkGuess() {
    const guess = document.getElementById("guessInput").value.trim();

    if (guess === "hint") {
        if (hints === 0) {
            alert(`The first letter is: ${randChamp[0]}`);
        } else {
            alert(`The champion is: ${randChamp}`);
        }
        hints += 1;
    } else if (!champions.includes(guess) && guess !== "hint") {
        alert("That is an invalid champion name!");
    } else if (guesses.includes(guess)) {
        alert("You've already guessed that champion!");
    } else if (guess !== randChamp) {
        const guessedInfo = championsInfo[guess];
        let feedback = [];

        feedback.push(`Gender: ${guessedInfo.gender === randChampInfo.gender ? '✅' : '❌'}`);
        feedback.push(`Region: ${guessedInfo.region === randChampInfo.region ? '✅' : '❌'}`);
        feedback.push(`Type: ${guessedInfo.type === randChampInfo.type ? '✅' : '❌'}`);
        feedback.push(`Positions: ${JSON.stringify(guessedInfo.positions) === JSON.stringify(randChampInfo.positions) ? '✅' : '❌'}`);
        feedback.push(`Species: ${guessedInfo.species === randChampInfo.species ? '✅' : '❌'}`);
        feedback.push(`Resource: ${guessedInfo.resource === randChampInfo.resource ? '✅' : '❌'}`);

        if (guessedInfo.release_year === randChampInfo.release_year) {
            feedback.push("Release Year: ✅");
        } else if (guessedInfo.release_year > randChampInfo.release_year) {
            feedback.push("Release Year: ↓");
        } else {
            feedback.push("Release Year: ↑");
        }

        guesses.push(`${guess} - ${feedback.join(", ")}`);
        document.getElementById("guessList").innerText = `You've already guessed:\n${guesses.join("\n")}`;
        alert(`${guess} is incorrect. Try again!`);
    } else {
        guesses.push(`${guess} ✅`);
        document.getElementById("guessList").innerText = `You've already guessed:\n${guesses.join("\n")}`;
        alert(`${guess} is correct!`);
        startNewRound();
    }
}

document.getElementById("submitGuess").addEventListener("click", checkGuess);

// Add event listener to trigger guess submission on 'Enter' key press
document.getElementById("guessInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default action, if any
        checkGuess(); // Trigger the guess check
    }
});

startNewRound();