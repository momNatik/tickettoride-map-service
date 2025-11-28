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

type CityId = {};
type PlayerId = {};

type City = {
    Id: CityId;
    Point: Coordinates;
    Name: string;
}

type Transition = {
    CityId0: CityId;
    CityId1: CityId;
    SegmentsCount: number;
    Color: TransitionColor;
}

export type Map = {
    Cities: City[];
    Transitions: Transition[];
}


function abc() {
    const city: City = {
        Id: 2,
        Point: { X: 1, Y: 2 },
        Name: "string"
    };

    const playerId: PlayerId = {};
    city.Id = playerId;

}

export interface GameParams {
    gameId: string,
    numberOfCities: number;
    numberOfPlayers: number;
    playWithComputer: boolean;
    paletteType: string;
    width: number;
    height: number;
}