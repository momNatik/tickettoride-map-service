import { Map, TransitionColor } from "./types.js";

export default { Create };

function Create(params: string, landscape: string) {
    const map = CreateMap(params, landscape);
    const svgText = Render(map);
    return svgText;
}

function CreateMap(params: string, landscape: string): Map {
    const map: Map = {
        Cities: [
            {
                Id: 1,
                Point: { X: 23, Y: 87 },
                Name: "Stambul"
            }, {
                Id: 2,
                Point: { X: 205, Y: 31 },
                Name: "Minsk"
            },
            {
                Id: 3,
                Point: { X: 177, Y: 113 },
                Name: "Brest"
            }],
        Transitions: [
            {
                CityId0: 1,
                CityId1: 2,
                SegmentsCount: 2,
                Color: TransitionColor.Blue
            },
            {
                CityId0: 2,
                CityId1: 3,
                SegmentsCount: 5,
                Color: TransitionColor.Red
            }
        ]
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