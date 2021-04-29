import { v4 as uuidv4 } from "uuid";
function chillHop() {
    return [
        {
            name: "Beaver Creek",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Daylight",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Keep Going",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Nightfall",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Reflection",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Under the City Stars",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Red Flag",
            cover: "https://www.dropbox.com/s/oaf2yxhtxd5zc41/billy-talent.jpg?dl=020Flag.mp3?dl=0",
            artist: "Billy Talent",
            audio: "https://www.dropbox.com/s/4zjecnvw736ij9g/Billy%20Talent%20-%20Red%20Flag.mp3?dl=0",
            id: uuidv4(),
            active: false,
            color: ['#ba4a46', '#fdf0dd'],
        },
        {
            name: "Lagoons",
            cover: "https://media-exp1.licdn.com/dms/image/C4E1BAQH1Zv9B61xgfg/company-background_10000/0/1519798904815?e=2159024400&v=beta&t=6Dz5Q-P3P5CfUoRyVeDh7Lf_gf4cJa8t2HqtMdxEaHY",
            artist: "Strehlow, Cris Mazuera",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
            id: uuidv4(),
            active: false,
            color: ['#ba4a46', '#fdf0dd'],
        }
    ];
}

export default chillHop;