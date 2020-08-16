export type Deck = {
    id: string;
    user__id: string;
    name: string;
    recto_language__id: string;
    verso_language__id: string;
    display_recto_first: boolean;
};
