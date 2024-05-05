import NJLogo from "../assets/logos/nhl-new-jersey-devils-logo.png";
import NYIslandersLogo from "../assets/logos/nhl-new-york-islanders-logo.png";
import NYRangersLogo from "../assets/logos/nhl-new-york-rangers-logo.png";
import PhiladelphiaLogo from "../assets/logos/nhl-philadelphia-flyers-logo.png";
import PittsburghLogo from "../assets/logos/nhl-pittsburgh-penguins-logo.png";
import BostonLogo from "../assets/logos/nhl-boston-bruins-logo.png";
import BuffaloLogo from "../assets/logos/nhl-buffalo-sabres-logo.png";
import MontrealLogo from "../assets/logos/nhl-montreal-canadiens-logo.png";
import OttawaLogo from "../assets/logos/nhl-ottawa-senators-logo.png";
import TorontoLogo from "../assets/logos/nhl-toronto-maple-leafs-logo.png";
import CarolinaLogo from "../assets/logos/nhl-carolina-hurricanes-logo.png";
import FloridaLogo from "../assets/logos/nhl-florida-panthers-logo.png";
import TampaLogo from "../assets/logos/nhl-tampa-bay-lightning-logo.png";
import WALogo from "../assets/logos/nhl-washington-capitals-logo.png";
import ChicagoLogo from "../assets/logos/nhl-chicago-blackhawks-logo.png";
import DetroitLogo from "../assets/logos/nhl-detroit-red-wings-logo.png";
import NashvilleLogo from "../assets/logos/nhl-nashville-predators-logo.png";
import STLLogo from "../assets/logos/nhl-st-louis-blues-logo.png";
import CalgaryLogo from "../assets/logos/nhl-calgary-flames-logo.png";
import ColoradoLogo from "../assets/logos/nhl-colorado-avalanche-logo.png";
import EdmontonLogo from "../assets/logos/nhl-edmonton-oilers-logo.png";
import VancouverLogo from "../assets/logos/nhl-vancouver-canucks-logo.png";
import AnaheimLogo from "../assets/logos/nhl-anaheim-ducks-logo.png";
import DallasLogo from "../assets/logos/nhl-dallas-stars-logo.png";
import LALogo from "../assets/logos/nhl-los-angeles-kings-logo.png";
import SanJoseLogo from "../assets/logos/nhl-san-jose-sharks-logo.png";
import ColumbusLogo from "../assets/logos/nhl-columbus-blue-jackets-logo.png";
import MinnesotaLogo from "../assets/logos/nhl-minnesota-wild-logo.png";
import WinnipegLogo from "../assets/logos/nhl-winnipeg-jets-logo.png";
import ArizonaLogo from "../assets/logos/nhl-arizona-coyotes-logo.png";
import VegasLogo from "../assets/logos/nhl-vegas-golden-knights-logo.png";
import SeattleLogo from "../assets/logos/nhl-seattle-kraken-logo.png";

// const TeamMap = [
//   NJLogo,
//   NYIslandersLogo,
//   NYRangersLogo,
//   PhiladelphiaLogo,
//   PittsburghLogo,
//   BostonLogo,
//   BuffaloLogo,
//   MontrealLogo,
//   OttawaLogo,
//   TorontoLogo,
//   CarolinaLogo,
//   FloridaLogo,
//   TampaLogo,
//   WALogo,
//   ChicagoLogo,
//   DetroitLogo,
//   NashvilleLogo,
//   STLLogo,
//   CalgaryLogo,
//   ColoradoLogo,
//   EdmontonLogo,
//   VancouverLogo,
//   AnaheimLogo,
//   DallasLogo,
//   LALogo,
//   SanJoseLogo,
//   ColumbusLogo,
//   MinnesotaLogo,
//   WinnipegLogo,
//   ArizonaLogo,
//   VegasLogo,
//   SeattleLogo,
// ];
const TeamMap = [
  {
    id: 0,
    abbreviation: "NJD",
    label: "New Jersey Devils",
    location: "New Jersey",
    logo: NJLogo,
    selected: false,
  },
  {
    id: 1,
    abbreviation: "NYI",
    label: "New York Islanders",
    location: "New York",
    logo: NYIslandersLogo,
    selected: false,
  },
  {
    id: 2,
    abbreviation: "NYR",
    label: "New York Rangers",
    location: "New York",
    logo: NYRangersLogo,
    selected: false,
  },
  {
    id: 3,
    abbreviation: "PHI",
    label: "Philadelphia Flyers",
    location: "Philadelphia",
    logo: PhiladelphiaLogo,
    selected: false,
  },
  {
    id: 4,
    abbreviation: "PIT",
    label: "Pittsburgh Penguins",
    location: "Pittsburgh",
    logo: PittsburghLogo,
    selected: false,
  },
  {
    id: 5,
    abbreviation: "BOS",
    label: "Boston Bruins",
    location: "Boston",
    logo: BostonLogo,
    selected: false,
  },
  {
    id: 6,
    abbreviation: "BUF",
    label: "Buffalo Sabres",
    location: "Buffalo",
    logo: BuffaloLogo,
    selected: false,
  },
  {
    id: 7,
    abbreviation: "MTL",
    label: "Montréal Canadiens",
    location: "Montréal",
    logo: MontrealLogo,
    selected: false,
  },
  {
    id: 8,
    abbreviation: "OTT",
    label: "Ottawa Senators",
    location: "Ottawa",
    logo: OttawaLogo,
    selected: false,
  },
  {
    id: 9,
    abbreviation: "TOR",
    label: "Toronto Maple Leafs",
    location: "Toronto",
    logo: TorontoLogo,
    selected: false,
  },
  {
    id: 10,
    abbreviation: "CAR",
    label: "Carolina Hurricanes",
    location: "Carolina",
    logo: CarolinaLogo,
    selected: false,
  },
  {
    id: 11,
    abbreviation: "FLA",
    label: "Florida Panthers",
    location: "Florida",
    logo: FloridaLogo,
    selected: false,
  },
  {
    id: 12,
    abbreviation: "TBL",
    label: "Tampa Lightning",
    location: "Tampa",
    logo: TampaLogo,
    selected: false,
  },
  {
    id: 13,
    abbreviation: "WSH",
    label: "Washington Capitals",
    location: "Washington",
    logo: WALogo,
    selected: false,
  },
  {
    id: 14,
    abbreviation: "CHI",
    label: "Chicago Blackhawks",
    location: "Chicago",
    logo: ChicagoLogo,
    selected: false,
  },
  {
    id: 15,
    abbreviation: "DET",
    label: "Detroit Red Wings",
    location: "Detroit",
    logo: DetroitLogo,
    selected: false,
  },
  {
    id: 16,
    abbreviation: "NSH",
    label: "Nashville Predators",
    location: "Nashville",
    logo: NashvilleLogo,
    selected: false,
  },
  {
    id: 17,
    abbreviation: "STL",
    label: "St. Louis Blues",
    location: "St. Louis",
    logo: STLLogo,
    selected: false,
  },
  {
    id: 18,
    abbreviation: "CGY",
    label: "Calgary Flames",
    location: "Calgary",
    logo: CalgaryLogo,
    selected: false,
  },
  {
    id: 19,
    abbreviation: "COL",
    label: "Colorado Avalanche",
    location: "Colorado",
    logo: ColoradoLogo,
    selected: false,
  },
  {
    id: 20,
    abbreviation: "EDM",
    label: "Edmonton Oilers",
    location: "Edmonton",
    logo: EdmontonLogo,
    selected: false,
  },
  {
    id: 21,
    abbreviation: "VAN",
    label: "Vancouver Canucks",
    location: "Vancouver",
    logo: VancouverLogo,
    selected: false,
  },
  {
    id: 22,
    abbreviation: "ANA",
    label: "Anaheim Ducks",
    location: "Anaheim",
    logo: AnaheimLogo,
    selected: false,
  },
  {
    id: 23,
    abbreviation: "DAL",
    label: "Dallas Stars",
    location: "Dallas",
    logo: DallasLogo,
    selected: false,
  },
  {
    id: 24,
    abbreviation: "LAK",
    label: "Los Angeles Kings",
    location: "Los Angeles",
    logo: LALogo,
    selected: false,
  },
  {
    id: 25,
    abbreviation: "SJS",
    label: "San Jose Sharks",
    location: "San Jose",
    logo: SanJoseLogo,
    selected: false,
  },
  {
    id: 26,
    abbreviation: "CBJ",
    label: "Columbus Blue Jackets",
    location: "Columbus",
    logo: ColumbusLogo,
    selected: false,
  },
  {
    id: 27,
    abbreviation: "MIN",
    label: "Minnesota Wild",
    location: "Minnesota",
    logo: MinnesotaLogo,
    selected: false,
  },
  {
    id: 28,
    abbreviation: "WPG",
    label: "Winnipeg Jets",
    location: "Winnipeg",
    logo: WinnipegLogo,
    selected: false,
  },
  {
    id: 29,
    abbreviation: "ARI",
    label: "Arizona Coyotes",
    location: "Arizona",
    logo: ArizonaLogo,
    selected: false,
  },
  {
    id: 30,
    abbreviation: "VGK",
    label: "Vegas Golden Knights",
    location: "Vegas",
    logo: VegasLogo,
    selected: false,
  },
  {
    id: 31,
    abbreviation: "SEA",
    label: "Seattle Kraken",
    location: "Seattle",
    logo: SeattleLogo,
    selected: false,
  },
];

export default TeamMap;
