export enum TransitionColor {
    White,
    Yellow,
    Black,
    Pink,
    Blue,
    Red,
    Green,
    Orange,
    Grey
}

export enum PlayerColor {
    Yellow,
    Pink,
    Blue,
    Red,
    Green
}


// серый цвет означает отсуствие цвета. Должны ли мы записать его в enum к остальным цветам или сделать сущность по типу IsColored которая будет хранить два состояния - цветной переход или нет.

type Coordinates = {
    X: number;
    Y: number;
}

// type CityId = {};
// type PlayerId = {};

export type City = {
    Id: number;
    Point: Coordinates;
    Name: string;
}

export type Transition = {
    CityId0: number;
    CityId1: number;
    SegmentsCount: number;
    Color: TransitionColor;
}

export type Map = {
    Cities: City[];
    Transitions: Transition[];
}


// function abc() {
//     const city: City = {
//         Id: 2,
//         Point: { X: 1, Y: 2 },
//         Name: "string"
//     };

//     const playerId: PlayerId = {};
//     city.Id = playerId;

// }

// TODO: numberOfCities > citiesCount
// TODO: paletteType > landscapeTheme: enum
// TODO: add param palette to LandscapeParams
// TODO: move width, heigth to LandscapeParams
export interface GameParams {
    gameId: string,
    numberOfCities: number;
    numberOfPlayers: number;
    playWithComputer: boolean;
    paletteType: string;
    width: number;
    height: number;
}