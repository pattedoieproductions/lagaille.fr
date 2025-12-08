

export interface Show {
    date: string;
    name: string;
    venue: string;
    ticketLink?: string;
}

export interface Artist {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    image: string;
    instagram: string;
    email: string; // Contact email
    shows: Show[];
}

export const artists: Artist[] = [
    {
        slug: "la-gaille",
        name: "La Gaille",
        tagline: "Natif du Sud de la France, il a grandi au son des cigales et des rêves de scène.",
        description: `Son humour, teinté de soleil et d'autodérision, aborde avec finesse les absurdités du quotidien et les contrastes de la vie moderne.

    Sur scène, il déploie une énergie contagieuse, emmenant son public dans un univers où chaque anecdote devient une aventure hilarante.`,
        image: import.meta.env.BASE_URL + "artist_lagaille.jpg",
        instagram: "https://www.instagram.com/la_gaille_/",
        email: "pattedoie.productions@gmail.com",
        shows: [
            {
                date: "2025-12-14",
                name: "La Gaille : Entre rire et réalité",
                venue: "Boui Boui Café Comique, Lyon",
                ticketLink: "https://www.billetreduc.com/spectacle/la-gaille-entre-rire-et-realite-384355"
            },
            {
                date: "2025-12-21",
                name: "La Gaille : Entre rire et réalité",
                venue: "Boui Boui Café Comique, Lyon",
                ticketLink: "https://www.billetreduc.com/spectacle/la-gaille-entre-rire-et-realite-384355"
            },
            {
                date: "2025-12-28",
                name: "La Gaille : Entre rire et réalité",
                venue: "Boui Boui Café Comique, Lyon",
                ticketLink: "https://www.billetreduc.com/spectacle/la-gaille-entre-rire-et-realite-384355"
            }
        ]
    },

    {
        slug: "laura",
        name: "Laura",
        tagline: "Humoriste sous couverture",
        description: `Laura, c'est l'humour incisif caché sous une apparence angélique. Elle observe le monde avec un regard acéré et le restitue avec un cynisme joyeux qui fait mouche à tous les coups.
    
    Ses sketchs sont des tranches de vie passées à la moulinette de son esprit vif, où personne n'est épargné, surtout pas elle-même.`,
        image: import.meta.env.BASE_URL + "artist_lagaillegue.jpg",
        instagram: "https://www.instagram.com/lagaillegue/",
        email: "pattedoie.productions@gmail.com",
        shows: []
    }
];
