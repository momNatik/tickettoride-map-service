enum TransitionColor {
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

enum PlayerColor {
    Yellow,
    Pink,
    Blue,
    Red,
    Green
}


// серый цвет означает отсуствие цвета. Должны ли мы записать его в enum к остальным цветам или сделать сущность по типу IsColored которая будет хранить два состояния - цветной переход или нет.

class Coordinates {
	X: number;
	Y: number;
}

class City {
	Point: Coordinates;
	Name: string;
}

class Transition {
	City0: City;
	City1: City;
	SegmentsCount: number;
	Color: TransitionColor;
}

export class Map {
	Cities: City[];
	Transitions: Transition[];
}