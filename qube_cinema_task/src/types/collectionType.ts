export type CollectionType = {
    id: string;
    name: string;
    artist: string;
    type: "EP" | "Album" | "Single";
    songCount: number;
    durationInSeconds: number;
    sizeInBytes: number;
    releasedOn: string;
};

export type SongType = {
    title: string;
    durationInSeconds: number;
    sizeInBytes: number;
    performers: string[]
}

export type CollectionDetailType = Omit<CollectionType, 'durationInSeconds' | 'sizeInBytes'> & {
    songs: SongType[];
}


export type MultiSelectOption = {
    label: string;
    isSelected: boolean;
}