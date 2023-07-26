import Song from "./Song";

export interface ISongData{
    createSong(song:Song):Promise<void>;
    getSongById(id:string):Promise<Song>;
    getSongByTitleAndArtist(title:string, artist:string):Promise<Song | undefined>;
    deleteSong(id:string):Promise<void>;
}
