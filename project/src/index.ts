import { Map, City, Transition, TransitionColor, GameParams } from "./types.js";

export default { Create };
export type { GameParams };

function Create(params: GameParams, landscape: string) {
    const map = CreateMap(params, landscape);
    const svgText = Render(map);
    return svgText;
}

function CreateMap(params: GameParams, landscape: string): Map {
    const cities = CreateCities(params);
    const transitions = CreateTransitions(cities);

    const map: Map = {
        Cities: cities,
        Transitions: transitions
    }

    return map;
}

function Render(map: Map) {
    const svgText = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120">
  <circle cx="${map.Cities[0].Point.X}" cy="${map.Cities[0].Point.Y}" r="2" fill="#000"/>
  <circle cx="${map.Cities[1].Point.X}" cy="${map.Cities[1].Point.Y}" r="2" fill="#000"/>
  <circle cx="${map.Cities[2].Point.X}" cy="${map.Cities[2].Point.Y}" r="2" fill="#000"/>
  <line x1="${map.Cities[0].Point.X}" y1="${map.Cities[0].Point.Y}" x2="${map.Cities[1].Point.X}" y2="${map.Cities[1].Point.Y}" stroke="black" stroke-width="1"/>
  <line x1="${map.Cities[1].Point.X}" y1="${map.Cities[1].Point.Y}" x2="${map.Cities[2].Point.X}" y2="${map.Cities[2].Point.Y}" stroke="black" stroke-width="1"/>
</svg>
`;
    return svgText;
}

function CreateCities(params: GameParams): City[] {
    const citiesCount = params.numberOfCities;

    const cities: City[] = [];
    for (let i = 0; i < citiesCount; i++) {
        // TODO: create and use city coordinates validator
        const city: City = {
            Id: i,
            Point: { X: Math.round(Math.random() * params.width), Y: Math.round(Math.random() * params.height) },
            Name: `City ${i}` //TODO add lexis-api to generate cities names
        }
        cities[i] = city;
    }
    return cities;
}

function CreateTransitions(cities: City[]): Transition[] {
    const maxTransitionLength = 50;
    const neighborCities = GetNeighborCityPairs(cities, maxTransitionLength);
    const transitions = GetTransitions(neighborCities);

    function GetDistance(city0: City, city1: City): number {
        const dX = city0.Point.X - city1.Point.X;
        const dY = city0.Point.Y - city1.Point.Y;
        const distance = Math.sqrt(dX * dX + dY * dY);
        return distance;
    }

    interface CityPair {
        CityId0: number;
        CityId1: number;
        Distance: number;
    }

    function GetNeighborCityPairs(cities: City[], maxTransitionLength: number): CityPair[] {
        const pairs: CityPair[] = [];

        for (let i = 0; i < cities.length; i++) {
            for (let j = i + 1; j < cities.length; j++) {
                const city0 = cities[i];
                const city1 = cities[j];

                const distance = GetDistance(city0, city1);

                if (distance <= maxTransitionLength) {
                    pairs.push({
                        CityId0: city0.Id,
                        CityId1: city1.Id,
                        Distance: distance
                    });
                }
            }
        }
        return pairs;
    }

    function GetTransitions(pairs: CityPair[]): Transition[] {
        return pairs.map(pair => ({
            CityId0: pair.CityId0,
            CityId1: pair.CityId1,
            SegmentsCount: pair.Distance,
            Color: getTransitionColor()
        }));
    }

    function getTransitionColor(): TransitionColor {
        // TODO: check return type of Object.values
        const colors = Object.values(TransitionColor).filter(v => typeof v === 'number') as number[];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    return transitions;
}