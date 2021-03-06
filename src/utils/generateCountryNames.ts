import {CountryNames} from '../lib/countries'
import {SupportedLanguages} from '../lib/languages'

export const getNames = (language: SupportedLanguages): CountryNames => {
  switch(language){
    case "pt-BR":
      return ({
  AF: "Afeganistão",
  ZA: "África do Sul",
  AX: "Ilhas Åland",
  AL: "Albânia",
  DE: "Alemanha",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antártida",
  AG: "Antígua e Barbuda",
  AN: "Antilhas Holandesas",
  SA: "Arábia Saudita",
  DZ: "Argélia",
  AR: "Argentina",
  AM: "Armênia",
  AW: "Aruba",
  AU: "Austrália",
  AT: "Áustria",
  AZ: "Azerbaijão",
  BS: "Bahamas",
  BH: "Bahrein",
  BD: "Bangladesh",
  BB: "Barbados",
  BE: "Bélgica",
  BZ: "Belize",
  BJ: "Benim",
  BM: "Bermudas",
  BY: "Bielorrússia",
  BT: "Butão",
  BO: "Bolívia",
  BA: "Bósnia e Herzegovina",
  BW: "Botswana",
  BV: "Ilha Bouvet",
  BR: "Brasil",
  BN: "Brunei",
  BG: "Bulgária",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Camboja",
  CM: "Camarões",
  CA: "Canadá",
  CV: "Cabo Verde",
  KY: "Ilhas Cayman",
  KZ: "Cazaquistão",
  TD: "Chade",
  CL: "Chile",
  CN: "China",
  CY: "Chipre",
  CX: "Ilha do Natal",
  CC: "Ilhas Cocos (Keeling)",
  CO: "Colômbia",
  KM: "Comores",
  CG: "República do Congo",
  CK: "Ilhas Cook",
  KP: "Coreia do Norte",
  KR: "Coreia do Sul",
  CR: "Costa Rica",
  CI: "Costa do Marfim",
  HR: "Croácia",
  CU: "Cuba",
  DK: "Dinamarca",
  DJ: "Djibouti",
  DM: "Dominica",
  EC: "Equador",
  EG: "Egito",
  SV: "El Salvador",
  AE: "Emirados Árabes Unidos",
  ER: "Eritreia",
  "GB-WLS": "País de Gales",
  SK: "Eslováquia",
  SI: "Eslovênia",
  ES: "Espanha",
  US: "Estados Unidos",
  UM: "Ilhas Menores Distantes dos Estados Unidos",
  EE: "Estónia",
  ET: "Etiópia",
  FO: "Ilhas Feroé",
  FJ: "Fiji",
  PH: "Filipinas",
  FI: "Finlândia",
  FR: "França",
  TF: "Terras Austrais e Antárticas Francesas",
  GA: "Gabão",
  GH: "Gana",
  GM: "Gâmbia",
  GE: "Geórgia",
  GS: "Ilhas Geórgia do Sul e Sandwich do Sul",
  GI: "Gibraltar",
  GD: "Granada",
  GR: "Grécia",
  GL: "Gronelândia",
  GP: "Guadalupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guiné",
  GW: "Guiné-Bissau",
  GQ: "Guiné Equatorial",
  GY: "Guiana",
  GF: "Guiana Francesa",
  HT: "Haiti",
  HM: "Ilha Heard e Ilhas McDonald",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungria",
  YE: "Iêmen",
  IN: "Índia",
  ID: "Indonésia",
  IR: "Irão",
  IQ: "Iraque",
  IE: "Irlanda",
  IM: "Ilha de Man",
  IS: "Islândia",
  IL: "Israel",
  IT: "Itália",
  JM: "Jamaica",
  JP: "Japão",
  JE: "Jersey",
  JO: "Jordânia",
  KI: "Kiribati",
  KW: "Kuwait",
  LA: "Laos",
  LV: "Letônia",
  LS: "Lesoto",
  LB: "Líbano",
  LR: "Libéria",
  LY: "Líbia",
  LI: "Liechtenstein",
  LT: "Lituânia",
  LU: "Luxemburgo",
  MO: "Macau",
  MK: "Macedônia do Norte",
  MG: "Madagáscar",
  MY: "Malásia",
  MW: "Malawi",
  MV: "Maldivas",
  ML: "Mali",
  MT: "Malta",
  FK: "Ilhas Malvinas",
  MH: "Ilhas Marshall",
  MP: "Marianas Setentrionais",
  MA: "Marrocos",
  MQ: "Martinica",
  MR: "Mauritânia",
  MU: "Maurícia",
  YT: "Mayotte",
  MX: "México",
  MM: "Mianmar",
  FM: "Estados Federados da Micronésia",
  MD: "Moldávia",
  MC: "Mónaco",
  MN: "Mongólia",
  ME: "Montenegro",
  MS: "Montserrat",
  MZ: "Moçambique",
  NA: "Namíbia",
  NR: "Nauru",
  NP: "Nepal",
  NC: "Nova Caledônia",
  NZ: "Nova Zelândia",
  NI: "Nicarágua",
  NE: "Níger",
  NG: "Nigéria",
  NU: "Niue",
  NF: "Ilha Norfolk",
  NO: "Noruega",
  OM: "Omã",
  NL: "Países Baixos",
  PW: "Palau",
  PS: "Palestina",
  PA: "Panamá",
  PG: "Papua-Nova Guiné",
  PK: "Paquistão",
  PY: "Paraguai",
  PE: "Peru",
  PN: "Pitcairn",
  PF: "Polinésia Francesa",
  PL: "Polónia",
  PT: "Portugal",
  PR: "Porto Rico",
  QA: "Catar",
  KE: "Quênia",
  KG: "Quirguistão",
  GB: "Reino Unido",
  IO: "Território Britânico do Oceano Índico",
  VG: "Ilhas Virgens Britânicas",
  CF: "República Centro-Africana",
  CZ: "República Checa",
  CD: "República Democrática do Congo",
  DO: "República Dominicana",
  TW: "Taiwan (Taiwan)",
  RE: "Reunião",
  RO: "Roménia",
  RU: "Rússia",
  RW: "Ruanda",
  EH: "Saara Ocidental",
  SB: "Ilhas Salomão",
  WS: "Samoa",
  AS: "Samoa Americana",
  BL: "São Bartolomeu",
  SH: "Santa Helena, Ascensão e Tristão da Cunha",
  LC: "Santa Lúcia",
  MF: "São Martinho",
  KN: "São Cristóvão e Névis",
  PM: "Saint-Pierre e Miquelon",
  VC: "São Vicente e Granadinas",
  SM: "San Marino",
  ST: "São Tomé e Príncipe",
  SN: "Senegal",
  SL: "Serra Leoa",
  RS: "Sérvia",
  SC: "Seicheles",
  SG: "Singapura",
  SY: "Síria",
  SO: "Somália",
  LK: "Sri Lanka",
  SD: "Sudão",
  SE: "Suécia",
  SZ: "Suazilândia",
  CH: "Suíça",
  SR: "Suriname",
  SJ: "Svalbard e Jan Mayen",
  TJ: "Tajiquistão",
  TH: "Tailândia",
  TZ: "Tanzânia",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Toquelau",
  TO: "Tonga",
  TT: "Trinidad e Tobago",
  TN: "Tunísia",
  TM: "Turquemenistão",
  TR: "Turquia",
  TC: "Turks e Caicos",
  TV: "Tuvalu",
  UA: "Ucrânia",
  UG: "Uganda",
  VI: "Ilhas Virgens Americanas",
  UY: "Uruguai",
  UZ: "Uzbequistão",
  VU: "Vanuatu",
  VA: "Vaticano",
  VE: "Venezuela",
  VN: "Vietnã",
  WF: "Wallis e Futuna",
  ZM: "Zâmbia",
  ZW: "Zimbabwe"
})
  }
}
