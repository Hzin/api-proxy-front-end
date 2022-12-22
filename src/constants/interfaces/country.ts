export default interface Country {
  name: {
    common: string,
    official: string,
  },
  fifa: string,
  currencies: Object,
  capital: Array<string>,
  altSpellings: Array<string>,
  region: string,
  subregion: string,
  languages: Object,
  latlng: Array<number>,
  timezones: Array<string>,
  borders: Array<string>,
  area: number,
  maps: {
    googleMaps: string,
    openStreetMaps: string
  },
  population: number,
  flags: {
    png: string,
    svg: string
  },
  capitalInfo: {
    latlng: Array<number>
  },
}