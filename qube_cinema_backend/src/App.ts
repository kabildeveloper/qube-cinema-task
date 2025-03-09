import express, {Request, Response} from 'express';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Please use <url>/collection or <url>/collection/id",
    });
})

app.get('/collections', (req: Request, res: Response) => {
    res.status(200).json(
        [
            {
                "id": "10001",
                "name": "Legends Never Fade",
                "artist": "Alex Hartmann",
                "type": "EP",
                "songCount": 4,
                "durationInSeconds": 780,
                "sizeInBytes": 95000,
                "releasedOn": "2024-05-12T16:30:00Z"
            },
            {
                "id": "10002",
                "name": "Echoes of the Past",
                "artist": "Mia Reynolds",
                "type": "Single",
                "songCount": 1,
                "durationInSeconds": 220,
                "sizeInBytes": 18000,
                "releasedOn": "2024-07-08T09:15:00Z"
            },
            {
                "id": "10003",
                "name": "Dreamscape",
                "artist": "Nathan Cole",
                "type": "Album",
                "songCount": 5,
                "durationInSeconds": 1130,
                "sizeInBytes": 128000,
                "releasedOn": "2024-10-20T20:45:00Z"
            },
            {
                "id": "10004",
                "name": "Midnight Whispers",
                "artist": "Sophia Bennett",
                "type": "EP",
                "songCount": 3,
                "durationInSeconds": 660,
                "sizeInBytes": 75000,
                "releasedOn": "2025-01-05T14:00:00Z"
            },
            {
                "id": "10005",
                "name": "Rise Again",
                "artist": "Liam Carter",
                "type": "Single",
                "songCount": 1,
                "durationInSeconds": 250,
                "sizeInBytes": 19000,
                "releasedOn": "2025-03-18T11:20:00Z"
            }
        ]
    );
})

app.get('/collections/:id', (req: Request, res: Response) => {

    const collections = [
        {
            "id": "10001",
            "name": "Legends Never Fade",
            "artist": "Alex Hartmann",
            "type": "EP",
            "songCount": 4,
            "songs": [
                {
                    "title": "Never Give Up",
                    "durationInSeconds": 210,
                    "sizeInBytes": 25000,
                    "performers": ["Alex Hartmann"]
                },
                {
                    "title": "Rising Above",
                    "durationInSeconds": 190,
                    "sizeInBytes": 23000,
                    "performers": ["Alex Hartmann"]
                },
                {
                    "title": "Endless Journey",
                    "durationInSeconds": 220,
                    "sizeInBytes": 27000,
                    "performers": ["Alex Hartmann"]
                },
                {
                    "title": "Victory Road",
                    "durationInSeconds": 160,
                    "sizeInBytes": 20000,
                    "performers": ["Alex Hartmann"]
                }
            ],
            "releasedOn": "2024-05-12T16:30:00Z"
        },
        {
            "id": "10002",
            "name": "Echoes of the Past",
            "artist": "Mia Reynolds",
            "type": "Single",
            "songCount": 1,
            "songs": [
                {
                    "title": "Whispering Shadows",
                    "durationInSeconds": 220,
                    "sizeInBytes": 18000,
                    "performers": ["Mia Reynolds"]
                }
            ],
            "releasedOn": "2024-07-08T09:15:00Z"
        },
        {
            "id": "10003",
            "name": "Dreamscape",
            "artist": "Nathan Cole",
            "type": "Album",
            "songCount": 5,
            "songs": [
                {
                    "title": "Into the Unknown",
                    "durationInSeconds": 240,
                    "sizeInBytes": 26000,
                    "performers": ["Nathan Cole"]
                },
                {
                    "title": "Lost in the Stars",
                    "durationInSeconds": 200,
                    "sizeInBytes": 23000,
                    "performers": ["Nathan Cole"]
                },
                {
                    "title": "Wanderer's Melody",
                    "durationInSeconds": 250,
                    "sizeInBytes": 28000,
                    "performers": ["Nathan Cole"]
                },
                {
                    "title": "Echoing Dreams",
                    "durationInSeconds": 180,
                    "sizeInBytes": 22000,
                    "performers": ["Nathan Cole"]
                },
                {
                    "title": "Endless Night",
                    "durationInSeconds": 260,
                    "sizeInBytes": 29000,
                    "performers": ["Nathan Cole"]
                }
            ],
            "releasedOn": "2024-10-20T20:45:00Z"
        },
        {
            "id": "10004",
            "name": "Midnight Whispers",
            "artist": "Sophia Bennett",
            "type": "EP",
            "songCount": 3,
            "songs": [
                {
                    "title": "Silent Moon",
                    "durationInSeconds": 230,
                    "sizeInBytes": 25000,
                    "performers": ["Sophia Bennett"]
                },
                {
                    "title": "Whispers in the Dark",
                    "durationInSeconds": 210,
                    "sizeInBytes": 24000,
                    "performers": ["Sophia Bennett"]
                },
                {
                    "title": "Eclipsed by Time",
                    "durationInSeconds": 220,
                    "sizeInBytes": 26000,
                    "performers": ["Sophia Bennett"]
                }
            ],
            "releasedOn": "2025-01-05T14:00:00Z"
        },
        {
            "id": "10005",
            "name": "Rise Again",
            "artist": "Liam Carter",
            "type": "Single",
            "songCount": 1,
            "songs": [
                {
                    "title": "Phoenix Reborn",
                    "durationInSeconds": 250,
                    "sizeInBytes": 19000,
                    "performers": ["Liam Carter"]
                }
            ],
            "releasedOn": "2025-03-18T11:20:00Z"
        }
    ]

    const collectionId = req.params.id;

    const data = collections.find(x=>x.id === collectionId);
    if(data) {
        res.status(200).json(data);
    }
    else {
        res.status(404).json({ error: "Not Found" });
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})