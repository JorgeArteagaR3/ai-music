export interface Artist {
    id: number;
    name: string;
    photo: string;
}
export interface FormState {
    artist: Artist;
    file: File | null;
}
