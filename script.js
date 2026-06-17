
// ═══════════════════════════════════════════════════════
// SENATE DATA
// ═══════════════════════════════════════════════════════
const SENATE_DIST = {"Amazonas": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "FA", "c": "#f08288", "s": 1}]}, "Antioquia": {"total": 3, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 2}, {"a": "PH", "c": "#8c378c", "s": 1}]}, "Arauca": {"total": 3, "winner": "#e3171f", "parties": [{"a": "PL", "c": "#e3171f", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Atlántico": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "PC", "c": "#0a62ad", "s": 1}]}, "Azuay": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Bogotá D. C.": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Bolívar": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "PL", "c": "#e3171f", "s": 1}]}, "Boyacá": {"total": 3, "winner": "#057d4a", "parties": [{"a": "AV", "c": "#057d4a", "s": 2}, {"a": "PH", "c": "#8c378c", "s": 1}]}, "Caquetá": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Carabobo": {"total": 3, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 2}, {"a": "PL", "c": "#e3171f", "s": 1}]}, "Cauca": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "U", "c": "#eb8e12", "s": 1}]}, "Chiriquí": {"total": 3, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 2}, {"a": "PL", "c": "#e3171f", "s": 1}]}, "Chocó": {"total": 3, "winner": "#057d4a", "parties": [{"a": "AV", "c": "#057d4a", "s": 2}, {"a": "PL", "c": "#e3171f", "s": 1}]}, "Costa Rica": {"total": 3, "winner": "#e3171f", "parties": [{"a": "PL", "c": "#e3171f", "s": 2}, {"a": "PH", "c": "#8c378c", "s": 1}]}, "Cundinamarca": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Córdoba": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "PL", "c": "#e3171f", "s": 1}]}, "Delta Amacuro": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Esequibo": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "FA", "c": "#f08288", "s": 1}]}, "Galápagos": {"total": 3, "winner": "#057d4a", "parties": [{"a": "AV", "c": "#057d4a", "s": 2}, {"a": "PH", "c": "#8c378c", "s": 1}]}, "Guayas": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "La Guajira": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Magdalena": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CR", "c": "#497cb3", "s": 1}]}, "Miranda": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Mosquitos": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "PL", "c": "#e3171f", "s": 1}]}, "Mérida": {"total": 3, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 2}, {"a": "PC", "c": "#0a62ad", "s": 1}]}, "Nariño": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "AV", "c": "#057d4a", "s": 1}]}, "Nicaragua": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "U", "c": "#eb8e12", "s": 1}]}, "Nueva Esparta": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Panamá": {"total": 3, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 2}, {"a": "PL", "c": "#e3171f", "s": 1}]}, "Pichincha": {"total": 3, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 2}, {"a": "PH", "c": "#8c378c", "s": 1}]}, "Portuguesa": {"total": 3, "winner": "#497cb3", "parties": [{"a": "CR", "c": "#497cb3", "s": 2}, {"a": "PC", "c": "#0a62ad", "s": 1}]}, "Puerto Rico e Islas de Barlovento": {"total": 3, "winner": "#161687", "parties": [{"a": "NPD", "c": "#161687", "s": 2}, {"a": "PH", "c": "#8c378c", "s": 1}]}, "Putumayo": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "FA", "c": "#f08288", "s": 1}]}, "Santander": {"total": 3, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 2}, {"a": "PH", "c": "#8c378c", "s": 1}]}, "Sucre": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Tolima": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "CD", "c": "#63b9ea", "s": 1}]}, "Vaupés": {"total": 3, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2}, {"a": "U", "c": "#eb8e12", "s": 1}]}, "Zulia": {"total": 3, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 2}, {"a": "PH", "c": "#8c378c", "s": 1}]}, "Nacional": {"total": 30, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 10}, {"a": "CD", "c": "#63b9ea", "s": 5}, {"a": "PL", "c": "#e3171f", "s": 3}, {"a": "AV", "c": "#057d4a", "s": 3}, {"a": "PC", "c": "#0a62ad", "s": 2}, {"a": "U", "c": "#eb8e12", "s": 2}, {"a": "NL-D&C", "c": "#9b6fd4", "s": 2}, {"a": "CR", "c": "#497cb3", "s": 1}, {"a": "MSN", "c": "#4b9ec5", "s": 1}, {"a": "FA", "c": "#f08288", "s": 1}]}, "Indígena": {"total": 2, "winner": "#d46b6b", "parties": [{"a": "MAIS", "c": "#d46b6b", "s": 2}]}, "Oposición": {"total": 1, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 1}]}};
const SENATE_HEMI = [{"acr": "MAIS", "name": "MAIS", "color": "#d46b6b", "seats": 2}, {"acr": "FA", "name": "Coal. Frente Amplio", "color": "#f08288", "seats": 4}, {"acr": "PH", "name": "Pacto Histórico", "color": "#8c378c", "seats": 65}, {"acr": "AV", "name": "Alianza Verde", "color": "#057d4a", "seats": 10}, {"acr": "PL", "name": "Partido Liberal", "color": "#e3171f", "seats": 14}, {"acr": "NL-D&C", "name": "Coal. NL-D&C", "color": "#9b6fd4", "seats": 2}, {"acr": "U", "name": "Partido de la U", "color": "#eb8e12", "seats": 5}, {"acr": "NPD", "name": "Nuevo Partido Democrático", "color": "#161687", "seats": 2}, {"acr": "PC", "name": "Partido Conservador", "color": "#0a62ad", "seats": 5}, {"acr": "CR", "name": "Cambio Radical", "color": "#497cb3", "seats": 4}, {"acr": "CD", "name": "Centro Democrático", "color": "#63b9ea", "seats": 36}, {"acr": "MSN", "name": "Salvación Nacional", "color": "#4b9ec5", "seats": 1}];
const SENATE_TOTAL = 150;

// ═══════════════════════════════════════════════════════
// CHAMBER STATE  (cam | sen)
// ═══════════════════════════════════════════════════════
let _chamber = 'sen';
function getChamberDist() { return _chamber === 'cam' ? DIST : SENATE_DIST; }
function getChamberHemi() { return _chamber === 'cam' ? HEMI : SENATE_HEMI; }
function getChamberTotal(){ return _chamber === 'cam' ? 415  : SENATE_TOTAL; }

const DIST = {"Amazonas": {"total": 2, "winner": "#f08288", "parties": [{"a": "FA", "c": "#f08288", "s": 1, "v": 30969}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 23935}]}, "Antioquia": {"total": 25, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 9, "v": 900308}, {"a": "PH", "c": "#8c378c", "s": 6, "v": 660892}, {"a": "Creemos", "c": "#8f114f", "s": 2, "v": 285637}, {"a": "PL", "c": "#e3171f", "s": 2, "v": 221617}, {"a": "PC", "c": "#0a62ad", "s": 2, "v": 202569}, {"a": "MSN", "c": "#4b9ec5", "s": 1, "v": 118097}, {"a": "NL-D&C", "c": "#432e87", "s": 1, "v": 109445}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 102451}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 99021}]}, "Arauca": {"total": 4, "winner": "#e3171f", "parties": [{"a": "PL", "c": "#e3171f", "s": 2, "v": 161056}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 96754}, {"a": "PH", "c": "#8c378c", "s": 1, "v": 55716}]}, "Atlántico": {"total": 7, "winner": "#0a62ad", "parties": [{"a": "PC", "c": "#0a62ad", "s": 2, "v": 251364}, {"a": "PH", "c": "#8c378c", "s": 2, "v": 169629}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 112601}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 109154}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 94081}]}, "Azuay": {"total": 7, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2, "v": 161545}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 154083}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 103501}, {"a": "ADN", "c": "#6f2c91", "s": 1, "v": 95034}, {"a": "RC5", "c": "#00a0e4", "s": 1, "v": 84021}, {"a": "FA", "c": "#f08288", "s": 1, "v": 79243}]}, "Bolívar": {"total": 9, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 3, "v": 208294}, {"a": "PL", "c": "#e3171f", "s": 2, "v": 166412}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 122928}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 107416}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 82294}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 76832}]}, "Boyacá": {"total": 5, "winner": "#057d4a", "parties": [{"a": "AV", "c": "#057d4a", "s": 2, "v": 124520}, {"a": "PH", "c": "#8c378c", "s": 1, "v": 96890}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 68093}, {"a": "MSN", "c": "#4b9ec5", "s": 1, "v": 64368}]}, "Caquetá": {"total": 2, "winner": "#057d4a", "parties": [{"a": "AV", "c": "#057d4a", "s": 1, "v": 53367}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 50284}]}, "Miranda": {"total": 26, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 7, "v": 757123}, {"a": "CD", "c": "#63b9ea", "s": 5, "v": 526817}, {"a": "PL", "c": "#e3171f", "s": 3, "v": 386014}, {"a": "AV", "c": "#057d4a", "s": 2, "v": 304627}, {"a": "U", "c": "#eb8e12", "s": 2, "v": 276365}, {"a": "PC", "c": "#0a62ad", "s": 2, "v": 273401}, {"a": "NL-D&C", "c": "#432e87", "s": 1, "v": 181430}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 177620}, {"a": "PSUC-PCC", "c": "#fb0103", "s": 1, "v": 134073}, {"a": "MSN", "c": "#4b9ec5", "s": 1, "v": 126741}, {"a": "FA", "c": "#f08288", "s": 1, "v": 114474}]}, "Cauca": {"total": 18, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 10, "v": 979881}, {"a": "U", "c": "#eb8e12", "s": 2, "v": 274548}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 167644}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 124370}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 115431}, {"a": "NL", "c": "#ce1a1c", "s": 1, "v": 101601}, {"a": "D&C", "c": "#432e87", "s": 1, "v": 97351}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 94135}]}, "Chiriquí": {"total": 7, "winner": "#e3171f", "parties": [{"a": "PL", "c": "#e3171f", "s": 2, "v": 156528}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 119873}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 103231}, {"a": "PH", "c": "#8c378c", "s": 1, "v": 94392}, {"a": "PNM", "c": "#660099", "s": 1, "v": 87209}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 78395}]}, "Chocó": {"total": 3, "winner": "#e3171f", "parties": [{"a": "PL", "c": "#e3171f", "s": 1, "v": 87196}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 48440}, {"a": "PH", "c": "#8c378c", "s": 1, "v": 45994}]}, "Córdoba": {"total": 10, "winner": "#e3171f", "parties": [{"a": "PL", "c": "#e3171f", "s": 3, "v": 310337}, {"a": "PH", "c": "#8c378c", "s": 3, "v": 234689}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 119082}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 104830}, {"a": "FA", "c": "#f08288", "s": 1, "v": 99401}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 88215}]}, "Costa Rica": {"total": 14, "winner": "#e3171f", "parties": [{"a": "PL", "c": "#e3171f", "s": 3, "v": 338234}, {"a": "U", "c": "#eb8e12", "s": 2, "v": 294812}, {"a": "PH", "c": "#8c378c", "s": 2, "v": 266631}, {"a": "CD", "c": "#63b9ea", "s": 2, "v": 229849}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 191954}, {"a": "D&C", "c": "#432e87", "s": 1, "v": 139403}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 112950}, {"a": "NL", "c": "#ce1a1c", "s": 1, "v": 104501}, {"a": "PPSO", "c": "#0ca3b5", "s": 1, "v": 99204}]}, "Cundinamarca": {"total": 24, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 9, "v": 932770}, {"a": "CD", "c": "#63b9ea", "s": 5, "v": 577724}, {"a": "AV", "c": "#057d4a", "s": 4, "v": 397381}, {"a": "PC", "c": "#0a62ad", "s": 2, "v": 202830}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 178721}, {"a": "D&C", "c": "#432e87", "s": 1, "v": 118138}, {"a": "NL", "c": "#ce1a1c", "s": 1, "v": 102092}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 98830}]}, "Bogotá D. C.": {"total": 32, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 15, "v": 1811510}, {"a": "CD", "c": "#63b9ea", "s": 7, "v": 957023}, {"a": "AV", "c": "#057d4a", "s": 4, "v": 494826}, {"a": "D&C", "c": "#432e87", "s": 2, "v": 246945}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 175208}, {"a": "NL", "c": "#ce1a1c", "s": 1, "v": 161922}, {"a": "MSN", "c": "#4b9ec5", "s": 1, "v": 150143}, {"a": "MIRA", "c": "#223d92", "s": 1, "v": 141745}]}, "Delta Amacuro": {"total": 4, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 1, "v": 104823}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 73281}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 66812}, {"a": "FA", "c": "#f08288", "s": 1, "v": 58224}]}, "Esequibo": {"total": 2, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 1, "v": 39228}, {"a": "FA", "c": "#f08288", "s": 1, "v": 20893}]}, "Galápagos": {"total": 2, "winner": "#057d4a", "parties": [{"a": "AV", "c": "#057d4a", "s": 1, "v": 4833}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 3927}]}, "Guayas": {"total": 23, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 6, "v": 727793}, {"a": "CD", "c": "#63b9ea", "s": 2, "v": 310595}, {"a": "RC5", "c": "#00a0e4", "s": 2, "v": 279696}, {"a": "PL", "c": "#e3171f", "s": 2, "v": 263591}, {"a": "U", "c": "#eb8e12", "s": 2, "v": 240392}, {"a": "AV", "c": "#057d4a", "s": 2, "v": 217194}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 179792}, {"a": "ADN", "c": "#6f2c91", "s": 1, "v": 168284}, {"a": "FA", "c": "#f08288", "s": 1, "v": 149770}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 123098}, {"a": "NL-D&C", "c": "#432e87", "s": 1, "v": 114895}, {"a": "PSUC-PCC", "c": "#fb0103", "s": 1, "v": 109531}, {"a": "MSN", "c": "#4b9ec5", "s": 1, "v": 106910}]}, "La Guajira": {"total": 6, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2, "v": 136657}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 110647}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 100573}, {"a": "FA", "c": "#f08288", "s": 1, "v": 94298}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 67037}]}, "Carabobo": {"total": 19, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 6, "v": 629219}, {"a": "PL", "c": "#e3171f", "s": 3, "v": 401054}, {"a": "PH", "c": "#8c378c", "s": 3, "v": 382121}, {"a": "CR", "c": "#497cb3", "s": 2, "v": 278843}, {"a": "PC", "c": "#0a62ad", "s": 2, "v": 253582}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 135820}, {"a": "MSN", "c": "#4b9ec5", "s": 1, "v": 114924}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 101147}]}, "Mérida": {"total": 10, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 3, "v": 285036}, {"a": "PC", "c": "#0a62ad", "s": 2, "v": 183487}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 143651}, {"a": "PH", "c": "#8c378c", "s": 1, "v": 102672}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 89550}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 78091}, {"a": "MSN", "c": "#4b9ec5", "s": 1, "v": 75825}]}, "Meta": {"total": 5, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 2, "v": 114975}, {"a": "PH", "c": "#8c378c", "s": 2, "v": 106288}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 86640}]}, "Magdalena": {"total": 14, "winner": "#497cb3", "parties": [{"a": "CR", "c": "#497cb3", "s": 4, "v": 348513}, {"a": "PH", "c": "#8c378c", "s": 3, "v": 328539}, {"a": "PL", "c": "#e3171f", "s": 3, "v": 257197}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 164351}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 123076}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 111334}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 98976}]}, "Mosquitos": {"total": 8, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2, "v": 205291}, {"a": "PL", "c": "#e3171f", "s": 2, "v": 152421}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 118414}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 105229}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 95578}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 76315}]}, "Nariño": {"total": 7, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 3, "v": 335382}, {"a": "AV", "c": "#057d4a", "s": 2, "v": 169820}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 104451}, {"a": "PSUC-PCC", "c": "#fb0103", "s": 1, "v": 89241}]}, "Nicaragua": {"total": 12, "winner": "#0a62ad", "parties": [{"a": "PC", "c": "#0a62ad", "s": 3, "v": 277459}, {"a": "PH", "c": "#8c378c", "s": 3, "v": 266824}, {"a": "U", "c": "#eb8e12", "s": 2, "v": 178418}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 159812}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 101423}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 98183}, {"a": "NL-D&C", "c": "#432e87", "s": 1, "v": 87227}]}, "Nueva Esparta": {"total": 9, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2, "v": 212495}, {"a": "CD", "c": "#63b9ea", "s": 2, "v": 200008}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 161238}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 132913}, {"a": "NL-D&C", "c": "#432e87", "s": 1, "v": 118312}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 102560}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 98225}]}, "Panamá": {"total": 6, "winner": "#e3171f", "parties": [{"a": "PL", "c": "#e3171f", "s": 2, "v": 151248}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 109105}, {"a": "PH", "c": "#8c378c", "s": 1, "v": 105312}, {"a": "PNM", "c": "#660099", "s": 1, "v": 87883}, {"a": "NL-D&C", "c": "#432e87", "s": 1, "v": 75491}]}, "Pichincha": {"total": 17, "winner": "#0a62ad", "parties": [{"a": "PC", "c": "#0a62ad", "s": 3, "v": 333951}, {"a": "PH", "c": "#8c378c", "s": 3, "v": 298675}, {"a": "CD", "c": "#63b9ea", "s": 2, "v": 262421}, {"a": "PL", "c": "#e3171f", "s": 2, "v": 228945}, {"a": "U", "c": "#eb8e12", "s": 2, "v": 198476}, {"a": "ADN", "c": "#6f2c91", "s": 1, "v": 141856}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 123596}, {"a": "D&C", "c": "#432e87", "s": 1, "v": 102693}, {"a": "NL", "c": "#ce1a1c", "s": 1, "v": 99856}, {"a": "RC5", "c": "#00a0e4", "s": 1, "v": 87581}]}, "Portuguesa": {"total": 7, "winner": "#0a62ad", "parties": [{"a": "PC", "c": "#0a62ad", "s": 2, "v": 182675}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 141432}, {"a": "PH", "c": "#8c378c", "s": 1, "v": 118615}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 109285}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 93128}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 82056}]}, "Puerto Rico e Islas de Barlovento": {"total": 13, "winner": "#e3171f", "parties": [{"a": "PL", "c": "#e3171f", "s": 3, "v": 278751}, {"a": "NPD", "c": "#161687", "s": 2, "v": 210531}, {"a": "PH", "c": "#8c378c", "s": 2, "v": 202491}, {"a": "AV", "c": "#057d4a", "s": 2, "v": 145985}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 124491}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 98285}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 81219}, {"a": "NL-D&C", "c": "#432e87", "s": 1, "v": 74851}]}, "Putumayo": {"total": 4, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2, "v": 151041}, {"a": "FA", "c": "#f08288", "s": 1, "v": 65931}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 56781}]}, "Santander": {"total": 12, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 3, "v": 301191}, {"a": "PH", "c": "#8c378c", "s": 3, "v": 272335}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 178688}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 154101}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 133279}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 114569}, {"a": "NL", "c": "#ce1a1c", "s": 1, "v": 102325}, {"a": "MSN", "c": "#4b9ec5", "s": 1, "v": 94568}]}, "Sucre": {"total": 9, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 3, "v": 219851}, {"a": "CD", "c": "#63b9ea", "s": 2, "v": 173921}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 140859}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 131583}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 102495}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 82715}]}, "Tolima": {"total": 8, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 2, "v": 201567}, {"a": "PC", "c": "#0a62ad", "s": 2, "v": 137531}, {"a": "CD", "c": "#63b9ea", "s": 1, "v": 105589}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 91515}, {"a": "PL", "c": "#e3171f", "s": 1, "v": 84815}, {"a": "AV", "c": "#057d4a", "s": 1, "v": 78184}]}, "Vaupés": {"total": 2, "winner": "#8c378c", "parties": [{"a": "PH", "c": "#8c378c", "s": 1, "v": 31895}, {"a": "U", "c": "#eb8e12", "s": 1, "v": 18791}]}, "Zulia": {"total": 14, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 4, "v": 401872}, {"a": "PL", "c": "#e3171f", "s": 3, "v": 292381}, {"a": "PH", "c": "#8c378c", "s": 3, "v": 264861}, {"a": "CR", "c": "#497cb3", "s": 1, "v": 172174}, {"a": "PC", "c": "#0a62ad", "s": 1, "v": 141851}, {"a": "NL-D&C", "c": "#432e87", "s": 1, "v": 107471}, {"a": "MSN", "c": "#4b9ec5", "s": 1, "v": 98728}]}, "Internacional": {"total": 3, "winner": "#63b9ea", "parties": [{"a": "CD", "c": "#63b9ea", "s": 1, "v": 81113}, {"a": "PH", "c": "#8c378c", "s": 1, "v": 78154}, {"a": "NL-D&C", "c": "#9b6fd4", "s": 1, "v": 64304}]}, "Afrodescendiente": {"total": 2, "winner": "#555555", "parties": [{"a": "Libres", "c": "#555555", "s": 2, "v": 150414}]}, "Indígena": {"total": 1, "winner": "#d46b6b", "parties": [{"a": "MAIS", "c": "#d46b6b", "s": 1, "v": 1}]}, "Oposición": {"total": 1, "winner": "#4b9ec5", "parties": [{"a": "MSN", "c": "#4b9ec5", "s": 1, "v": 1}]}};const HEMI = [{"acr": "PSUC-PCC", "name": "Coal. PSUC-PCC", "color": "#fb0103", "seats": 3}, {"acr": "MAIS", "name": "MAIS", "color": "#d46b6b", "seats": 1}, {"acr": "Libres", "name": "Movimiento Libres", "color": "#555555", "seats": 2}, {"acr": "FA", "name": "Coal. Frente Amplio", "color": "#f08288", "seats": 9}, {"acr": "RC5", "name": "Revolución Ciudadana", "color": "#00a0e4", "seats": 4}, {"acr": "PH", "name": "Pacto Histórico", "color": "#8c378c", "seats": 114}, {"acr": "AV", "name": "Alianza Verde", "color": "#057d4a", "seats": 38}, {"acr": "PL", "name": "Partido Liberal", "color": "#e3171f", "seats": 54}, {"acr": "D&C", "name": "Dignidad y Compromiso", "color": "#432e87", "seats": 6}, {"acr": "NL-D&C", "name": "Coal. NL-D&C", "color": "#9b6fd4", "seats": 9}, {"acr": "NL", "name": "Nuevo Liberalismo", "color": "#ce1a1c", "seats": 6}, {"acr": "U", "name": "Partido de la U", "color": "#eb8e12", "seats": 25}, {"acr": "NPD", "name": "Nuevo Partido Democrático", "color": "#161687", "seats": 2}, {"acr": "MIRA", "name": "MIRA", "color": "#223d92", "seats": 1}, {"acr": "PC", "name": "Partido Conservador", "color": "#0a62ad", "seats": 33}, {"acr": "CR", "name": "Cambio Radical", "color": "#497cb3", "seats": 19}, {"acr": "CD", "name": "Centro Democrático", "color": "#63b9ea", "seats": 71}, {"acr": "Creemos", "name": "Creemos", "color": "#8f114f", "seats": 2}, {"acr": "ADN", "name": "Acción Democrática Nac.", "color": "#6f2c91", "seats": 3}, {"acr": "MSN", "name": "Salvación Nacional", "color": "#4b9ec5", "seats": 10}, {"acr": "PPSO", "name": "Partido Pueblo Soberano", "color": "#0ca3b5", "seats": 1}, {"acr": "PNM", "name": "Partido Panameñista", "color": "#660099", "seats": 2}];
const LOGOS = {"PSUC-PCC": "Logospcol/1. Coal. PSUC-PCC.png", "MAIS": "Logospcol/2. MAIS.jpg", "Libres": "Logospcol/3. Movimiento Libres.png", "FA": "Logospcol/4. Frente Amplio.png", "RC5": "Logospcol/5. Revolución Ciudadana.png", "PH": "Logospcol/6. Pacto Histórico.png", "AV": "Logospcol/7. Alianza Verde.png", "PL": "Logospcol/8. Partido Liberal.png", "D&C": "Logospcol/9. Dignidad y Compromiso.jpg", "NL-D&C": "Logospcol/10. Coal. NL-D&C.png", "NL": "Logospcol/11. Nuevo Liberalismo.png", "U": "Logospcol/12. Partido de la U.png", "NPD": "Logospcol/13. Nuevo Partido Democrático.png", "MIRA": "Logospcol/14. MIRA.png", "PC": "Logospcol/15. Partido Conservador.png", "CR": "Logospcol/16. Cambio Radical.png", "CD": "Logospcol/17. Centro Democrático.png", "Creemos": "Logospcol/18. Creemos.png", "ADN": "Logospcol/19. Acción Democrática Nacional.png", "MSN": "Logospcol/20. Salvación Nacional.png", "PPSO": "Logospcol/21. Partido Pueblo Soberano.png", "PNM": "Logospcol/22. Partido Panameñista.png"};
const COLOR = {"PSUC-PCC": "#fb0103", "MAIS": "#d46b6b", "Libres": "#555555", "FA": "#f08288", "RC5": "#00a0e4", "PH": "#8c378c", "AV": "#057d4a", "PL": "#e3171f", "D&C": "#432e87", "NL-D&C": "#9b6fd4", "NL": "#ce1a1c", "U": "#eb8e12", "NPD": "#161687", "MIRA": "#223d92", "PC": "#0a62ad", "CR": "#497cb3", "CD": "#63b9ea", "Creemos": "#8f114f", "ADN": "#6f2c91", "MSN": "#4b9ec5", "PPSO": "#0ca3b5", "PNM": "#660099"};
const IDEOLOGICAL_ORDER = {
  "PSUC-PCC": 1, "Coal. PSUC-PCC": 1,
  "MAIS": 2,
  "Movimiento Libres": 3, "ML": 3,
  "Coal. Frente Amplio": 4, "FA": 4,
  "Revolución Ciudadana": 5, "RC": 5,
  "Pacto Histórico": 6, "PH": 6,
  "Alianza Verde": 7, "AV": 7,
  "Partido Liberal": 8, "PL": 8,
  "Dignidad y Compromiso": 9, "D&C": 9,
  "Coal. NL-D&C": 10, "NL-D&C": 10,
  "Nuevo Liberalismo": 11, "NL": 11,
  "Partido de la U": 12, "U": 12,
  "Nuevo Partido Democrático": 13, "NPD": 13,
  "MIRA": 14,
  "Partido Conservador": 15, "PC": 15,
  "Cambio Radical": 16, "CR": 16,
  "Centro Democrático": 17, "CD": 17,
  "Creemos": 18, "CREEMOS": 18,
  "Acción Democrática Nacional": 19, "ADN": 19,
  "Salvación Nacional": 20, "MSN": 20,
  "Partido Pueblo Soberano": 21, "PPSO": 21,
  "Partido Panameñista": 22, "PNM": 22
};

// --- HEMICICLO HELPERS ---
const ROW_COUNTS = [62, 73, 83, 93, 104];
const R_INNER = 210, DR = 35, DOT_R = 4.5;
const CX = 380, CY = 396;
const acrToName = {
    "FA": "Frente Amplio",
    "PH": "Pacto Histórico",
    "AV": "Alianza Verde",
    "PL": "Partido Liberal",
    "D&C": "Dignidad y Compromiso",
    "NL-D&C": "Coalición NL - D&C",
    "NL": "Nuevo Liberalismo",
    "U": "Partido de la U",
    "NPD": "Nuevo Partido Democrático",
    "MIRA": "Movimiento MIRA",
    "PC": "Partido Conservador",
    "CR": "Cambio Radical",
    "CD": "Centro Democrático",
    "Creemos": "Creemos",
    "ADN": "Acción Democrática Nacional",
    "MSN": "Movimiento Salvación Nacional",
    "PPSO": "Partido Pueblo Soberano",
    "PNM": "Partido Panameñista",
    "RC5": "Revolución Ciudadana",
    "Libres": "Movimiento Libres",
    "PSUC-PCC": "Coalición PSUC - PCC",
    "MAIS": "MAIS",
    "RC": "Revolución Ciudadana",
    "Liberal": "Partido Liberal"
  };


function buildHemiciclo(svgEl, partySeats, totalSeats) {
  // 1. Limpiar el contenedor SVG anterior
  while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);

  const normalizedPartySeats = {};
  Object.keys(partySeats).forEach(key => {
    normalizedPartySeats[key] = partySeats[key];
  });

  const seatsData = [];
  getChamberHemi().forEach(p => {
    const s = normalizedPartySeats[p.acr] || 0;
    for (let i = 0; i < s; i++) {
      seatsData.push(p);
    }
  });

  // --- MOTOR MATEMÁTICO PARLIAMENT DIAGRAM ---
  const TOTALS = [3, 15, 33, 61, 95, 138, 189, 247, 313, 388, 469, 559, 657, 762, 876, 997, 1126, 1263, 1408, 1560, 1722, 1889, 2066, 2250, 2442, 2641, 2850, 3064, 3289, 3519, 3759, 4005, 4261, 4522, 4794, 5071, 5358, 5652, 5953, 6263, 6581, 6906, 7239, 7581, 7929, 8287, 8650, 9024, 9404, 9793, 10187, 10594, 11003, 11425, 11850, 12288, 12729, 13183, 13638, 14109, 14580, 15066, 15553, 16055, 16557, 17075, 17592, 18126, 18660, 19208, 19758, 20323, 20888, 21468, 22050, 22645, 23243, 23853, 24467, 25094, 25723, 26364, 27011, 27667, 28329, 29001, 29679, 30367, 31061];
  
  let nb_rows = 1;
  for (let i = 0; i < TOTALS.length; i++) {
    if (TOTALS[i] >= totalSeats) { nb_rows = i + 1; break; }
  }
  
  let spot_radius = 0.4 / nb_rows;
  let handled_spots = 0;
  let discarded_rows = 0;
  let diagram_fullness = 1.0;
  
  for (let i = nb_rows; i > 0; i--) {
    let magic = 3.0 * nb_rows + 4.0 * i - 2.0;
    let max_spots = Math.PI / (2 * Math.asin(2.0 / magic));
    handled_spots += Math.floor(max_spots);
    if (handled_spots >= totalSeats) {
      discarded_rows = i - 1;
      diagram_fullness = totalSeats / handled_spots;
      break;
    }
  }

  let positions = [];
  function appendRowSpots(nb_seats_to_place, row_radius) {
    let sin_r_rr = Math.sin(spot_radius / row_radius);
    for (let i = 0; i < nb_seats_to_place; i++) {
      let angle = (nb_seats_to_place === 1) ? Math.PI / 2.0 : i * (Math.PI - 2.0 * sin_r_rr) / (nb_seats_to_place - 1.0) + sin_r_rr;
      positions.push([angle, row_radius * Math.cos(angle) + 1.75, row_radius * Math.sin(angle), row_radius]);
    }
  }

  for (let i = 1 + discarded_rows; i < nb_rows; i++) {
    let magic = 3.0 * nb_rows + 4.0 * i - 2.0;
    let max_spots = Math.PI / (2 * Math.asin(2.0 / magic));
    let nb_spots = Math.floor(diagram_fullness * max_spots);
    appendRowSpots(nb_spots, magic / (4.0 * nb_rows));
  }
  let leftover = totalSeats - positions.length;
  appendRowSpots(leftover, (7.0 * nb_rows - 2.0) / (4.0 * nb_rows));

  positions.sort((a, b) => b[0] - a[0]);

  // Coordenadas fijas del lienzo SVG
  const CX = 380;
  const CY = 345; 
  const scaleFactor = 165; 
  const finalRadius = Math.max(3.8, spot_radius * 180);

  const oldTooltip = document.getElementById('hemi-tooltip');
  if (oldTooltip) oldTooltip.style.display = 'none';

  // --- CONTENEDOR CENTRAL MAESTRO (ESTILO IMAGEN DE REFERENCIA) ---
  const centerGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  // 1. Logo del Partido (Arriba)
  const centerImg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  centerImg.setAttribute('x', (CX - 28).toString());
  centerImg.setAttribute('y', (CY - 90).toString());
  centerImg.setAttribute('width', '56');
  centerImg.setAttribute('height', '56');
  centerImg.style.opacity = '0';
  centerImg.style.transition = 'opacity 0.15s ease';
  centerGroup.appendChild(centerImg);

  // 2. Nombre del Partido (En el Medio)
  const centerNameText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  centerNameText.setAttribute('x', CX);
  centerNameText.setAttribute('y', CY - 15);
  centerNameText.setAttribute('text-anchor', 'middle');
  centerNameText.setAttribute('fill', '#ffffff');
  centerNameText.setAttribute('font-size', '17');
  centerNameText.setAttribute('font-weight', '500');
  centerNameText.setAttribute('font-family', 'sans-serif');
  centerNameText.style.opacity = '0';
  centerNameText.style.transition = 'opacity 0.15s ease';
  centerGroup.appendChild(centerNameText);

  // 3. Conteo Variable de Escaños (Abajo - Reemplaza dinámicamente al total)
  const centerSeatsText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  centerSeatsText.setAttribute('x', CX);
  centerSeatsText.setAttribute('y', CY + 25);
  centerSeatsText.setAttribute('text-anchor', 'middle');
  centerSeatsText.setAttribute('fill', '#e8e8f0'); 
  centerSeatsText.setAttribute('font-size', '34');
  centerSeatsText.setAttribute('font-weight', '700');
  centerSeatsText.setAttribute('font-family', 'sans-serif');
  centerSeatsText.textContent = `${totalSeats}`; // Estado inicial limpio
  centerGroup.appendChild(centerSeatsText);

  svgEl._centerImg = centerImg;
  svgEl._centerNameText = centerNameText;
  svgEl._centerSeatsText = centerSeatsText;

  const circleElements = [];

  // Renderizar las curules
  positions.forEach((pos, idx) => {
    const p = seatsData[idx];
    if (!p) return;

    let x = CX + (pos[1] - 1.75) * scaleFactor;
    let y = CY - (pos[2] * scaleFactor);

    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', x.toFixed(2));
    c.setAttribute('cy', y.toFixed(2));
    c.setAttribute('r', finalRadius.toFixed(1));
    c.setAttribute('fill', p.color);
    c.setAttribute('stroke', '#12121f');
    c.setAttribute('stroke-width', '0.8');
    c.setAttribute('data-acr', p.acr);
    c.style.cursor = 'pointer';
    c.style.transition = 'opacity 0.12s ease';

    // EVENTOS CRUZADOS CON INTERFAZ DINÁMICA
    c.addEventListener('mouseenter', () => {
      // Resalto de opacidad selectiva
      circleElements.forEach(circle => {
        circle.style.opacity = (circle.getAttribute('data-acr') === p.acr) ? '1' : '0.18';
      });

      // Insertar Logo arriba
      const logoUrl = LOGOS[p.acr] || '';
      if (logoUrl) {
        centerImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', logoUrl);
        centerImg.style.opacity = '1';
      } else {
        centerImg.style.opacity = '0';
      }

      // Nombre completo del partido
      centerNameText.textContent = acrToName[p.acr] || p.name;
      centerNameText.style.opacity = '2';

      // Contador adaptativo coloreado
      const currentSeats = normalizedPartySeats[p.acr] || 0;
      centerSeatsText.textContent = `${currentSeats}`;
      centerSeatsText.setAttribute('fill', p.color); // Se tiñe con el color de la organización
    });

    c.addEventListener('mouseleave', () => {
      // Restaurar el hemiciclo completo
      circleElements.forEach(circle => { circle.style.opacity = '1'; });

      // Restaurar estado por defecto central
      centerImg.style.opacity = '0';
      centerNameText.style.opacity = '0';
      
      centerSeatsText.textContent = `${totalSeats}`;
      centerSeatsText.setAttribute('fill', '#e8e8f0'); // Retorna a su gris brillante original
    });

    svgEl.appendChild(c);
    circleElements.push(c);
  });

  // Inyectar el grupo de información central encima de todo
  svgEl.appendChild(centerGroup);
}

// --- NATIONAL MAP SETUP ---
const tt = document.getElementById('tooltip');
let currentDept = null;
let nationalViewMode = 'map';

function setNationalViewMode(mode) {
  nationalViewMode = mode;
  const nationalView = document.getElementById('national-view');
  nationalView.classList.toggle('view-mode-hemi', mode === 'hemi');
  nationalView.classList.toggle('view-mode-map', mode === 'map');
  document.querySelectorAll('#view-toggle button').forEach(button => {
    button.classList.toggle('active', button.dataset.mode === mode);
  });
}

function setupMapEvents(svgContainer, clickable) {
  svgContainer.querySelectorAll('svg path[data-dept]').forEach(path => {
    path.addEventListener('mouseenter', e => {
      if (currentDept) return; // in dept view, no tooltip
      const dept = path.dataset.dept;
      const d = getChamberDist()[dept];
      if (!d) return;
      const rows = d.parties.map(p => {
        const pct = Math.round(p.s / d.total * 100);
        return `<div class="tt-row"><span class="tt-sw" style="background:${p.c}"></span><span class="tt-name">${p.a}</span><span class="tt-seats">${p.s}</span></div><div class="tt-bar-wrap"><div class="tt-bar" style="width:${pct}%;background:${p.c}"></div></div>`;
      }).join('');
      tt.innerHTML = `<h3>${dept}</h3><div class="tt-total">${d.total} escaños totales</div>${rows}<div class="tt-hint">Clic para ver detalle</div>`;
      tt.style.display = 'block';
      posTooltip(e, tt, 240);
    });
    path.addEventListener('mousemove', e => { if (!currentDept) posTooltip(e, tt, 240); });
    path.addEventListener('mouseleave', () => tt.style.display = 'none');
    if (clickable) {
      path.addEventListener('click', e => {
        e.stopPropagation();
        tt.style.display = 'none';
        showDept(path.dataset.dept);
      });
    }
  });
}

setupMapEvents(document.getElementById('map-wrap'), true);

// Click background → back to national
document.getElementById('national-view').addEventListener('click', () => {
  // no-op here since dept view handles its own back
});

// --- BUILD NATIONAL HEMICICLO ---
const natPartySeats = {};
getChamberHemi().forEach(p => natPartySeats[p.acr] = p.seats);
buildHemiciclo(document.getElementById('hemi-svg'), natPartySeats, getChamberTotal());

// --- BUILD LEGEND ---
let selectedNationalParty = null;

function highlightNationalParty(acr) {
  const hemiSvg = document.getElementById('hemi-svg');
  const circles = hemiSvg ? hemiSvg.querySelectorAll('circle[data-acr]') : [];
  const legendRows = document.querySelectorAll('#legend-list .leg-row');
  const activeAcr = selectedNationalParty === acr ? null : acr;
  selectedNationalParty = activeAcr;

  circles.forEach(circle => {
    if (!activeAcr) {
      circle.style.opacity = '1';
    } else {
      circle.style.opacity = circle.getAttribute('data-acr') === activeAcr ? '1' : '0.16';
    }
  });

  legendRows.forEach(row => {
    row.classList.toggle('active', row.dataset.party === activeAcr);
  });

  if (hemiSvg) {
    const nameText = hemiSvg._centerNameText;
    const seatsText = hemiSvg._centerSeatsText;
    const logoImg = hemiSvg._centerImg;
    if (nameText && seatsText) {
      if (activeAcr) {
        const partyData = getChamberHemi().find(p => p.acr === activeAcr);
        const partyName = acrToName[activeAcr] || partyData?.name || activeAcr;
        const seatCount = partyData ? partyData.seats : 0;
        nameText.textContent = partyName;
        nameText.style.opacity = '1';
        seatsText.textContent = `${seatCount}`;
        seatsText.setAttribute('fill', partyData?.color || '#e8e8f0');
        if (logoImg) {
          const logo = LOGOS[activeAcr];
          if (logo) {
            logoImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', logo);
            logoImg.style.opacity = '1';
          } else {
            logoImg.style.opacity = '0';
          }
        }
      } else {
        nameText.style.opacity = '0';
        seatsText.textContent = `${getChamberTotal()}`;
        seatsText.setAttribute('fill', '#e8e8f0');
        if (logoImg) {
          logoImg.style.opacity = '0';
        }
      }
    }
  }
}

function buildLegend() {
  const container = document.getElementById('legend-list');
  const sorted = [...getChamberHemi()].sort((a,b) => b.seats - a.seats).filter(p => p.seats > 0);
  const totalSeats = getChamberTotal();
  sorted.forEach(p => {
    const div = document.createElement('div');
    div.className = 'leg-row';
    div.dataset.party = p.acr;
    div.style.cursor = 'pointer';
    const logo = LOGOS[p.acr];
    const icon = logo ? `<img class="leg-logo" src="${logo}" alt="${p.acr}">` : `<span class="leg-dot" style="background:${p.color}"></span>`;
    const pct = p.seats / totalSeats * 100;
    const pctText = pct.toLocaleString('es-CO', { maximumFractionDigits: 1 });
    div.innerHTML = `${icon}<span class="leg-name" title="${p.name}">${p.name}</span><div class="leg-bar-bg" data-tip="${pctText}% - ${p.seats}/${totalSeats} esc."><div class="leg-bar" style="width:${pct}%;background:${p.color}"></div></div><span class="leg-seats">${p.seats}</span>`;
    div.addEventListener('click', () => highlightNationalParty(p.acr));
    container.appendChild(div);
  });
}

function buildDeptTable() {
  const body = document.querySelector('#dept-table tbody');
  body.innerHTML = '';
  const _dist = getChamberDist();
  const specialOrder = _chamber === 'sen'
  ? ['Nacional', 'Indígena', 'Oposición']
  : ['Internacional', 'Afrodescendiente', 'Indígena', 'Oposición'];
  const specialSet = new Set(specialOrder);
  const regular = Object.keys(_dist).filter(d => !specialSet.has(d)).sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
  const special = specialOrder.filter(d => _dist[d]);

  function appendSectionRow(label) {
    const row = document.createElement('tr');
    row.className = 'dept-section-row';
    row.innerHTML = `<td colspan="3">${label}</td>`;
    body.appendChild(row);
  }

  function appendDeptRow(dept) {
    const d = _dist[dept];
    const winner = d.parties.reduce((best, current) => current.s > best.s ? current : best, d.parties[0]);
    const fullName = acrToName[winner.a] || winner.a;
    const logo = LOGOS[winner.a];
    const row = document.createElement('tr');
    row.style.cursor = 'pointer';
    row.dataset.dept = dept;
    row.innerHTML = `
      <td>${dept}</td>
      <td>${d.total}</td>
      <td class="tbl-party">${logo ? `<img class="tbl-logo" src="${logo}" alt="${winner.a}">` : `<span class="tbl-swatch" style="background:${winner.c}"></span>`}<span>${fullName}</span></td>
    `;
    row.addEventListener('click', () => showDept(dept));
    body.appendChild(row);
    };

  appendSectionRow('Departamentos');
  regular.forEach(appendDeptRow);
  if (special.length) {
    appendSectionRow('Circunscripciones Especiales');
    special.forEach(appendDeptRow);
  }
}
buildLegend();
buildDeptTable();

// ── Chamber toggle ──────────────────────────────────────────────────────────
function setChamber(chamber) {
  _chamber = chamber;
  document.querySelectorAll('#chamber-toggle button').forEach(b =>
    b.classList.toggle('active', b.dataset.chamber === chamber));

  // Update stats
  const total = getChamberTotal();
  const statTotal = document.getElementById('stat-total');
  const statMaj   = document.getElementById('stat-majority');
  if (statTotal) statTotal.textContent = total;
  if (statMaj)   statMaj.textContent   = Math.ceil(total / 2);

  // Update subtitle
  const sub = document.getElementById('main-sub');
  if (sub) sub.textContent = chamber === 'cam'
    ? "Resultados por departamento · D'Hondt · Umbral 3% · 415 escaños"
    : `Resultados por departamento · 3 escaños fijos · ${SENATE_TOTAL} escaños`;

  // Rebuild hemiciclo with correct hemi
  const hemi = getChamberHemi();
  const seats = {};
  hemi.forEach(p => seats[p.acr] = p.seats);
  buildHemiciclo(document.getElementById('hemi-svg'), seats, getChamberTotal());

  // Rebuild legend + table
  const container = document.getElementById('legend-list');
  if (container) container.innerHTML = '';
  buildLegend();
  buildDeptTable();

  // Recolor map
  const dist = getChamberDist();
  document.querySelectorAll('#map-wrap svg path[data-dept]').forEach(path => {
    const d = dist[path.dataset.dept];
    if (d) path.setAttribute('fill', d.winner);
  });

  selectedNationalParty = null;
  syncNationalSidePanelHeight();
}

// ── Submode toggle (hemi | map) ──────────────────────────────────────────────
function syncNationalSidePanelHeight() {
  const natView = document.getElementById('national-view');
  const tableWrap = document.getElementById('table-wrap');
  const legendWrap = document.getElementById('legend-wrap');
  const mapWrap = document.getElementById('map-wrap');
  const hemiWrap = document.getElementById('hemi-wrap');
  const isDesktop = window.matchMedia('(min-width: 900px)').matches;

  if (!natView || !tableWrap || !legendWrap || !mapWrap || !hemiWrap || natView.style.display === 'none') return;

  tableWrap.style.height = '';
  legendWrap.style.height = '';

  if (!isDesktop) return;

  const isMapMode = natView.classList.contains('view-mode-map');
  const source = isMapMode ? mapWrap : hemiWrap;
  const target = isMapMode ? tableWrap : legendWrap;
  const height = source.offsetHeight;

  if (height > 0) target.style.height = `${height}px`;
}

function setSubMode(mode) {
  const natView = document.getElementById('national-view');
  natView.classList.toggle('view-mode-hemi', mode === 'hemi');
  natView.classList.toggle('view-mode-map',  mode === 'map');
  document.querySelectorAll('#submode-toggle button').forEach(b =>
    b.classList.toggle('active', b.dataset.mode === mode));
  requestAnimationFrame(syncNationalSidePanelHeight);
}

// Wire chamber toggle
document.getElementById('chamber-toggle')?.addEventListener('click', e => {
  const b = e.target.closest('button[data-chamber]');
  if (b && b.dataset.chamber !== _chamber) setChamber(b.dataset.chamber);
});

// Wire submode toggle
document.getElementById('submode-toggle')?.addEventListener('click', e => {
  const b = e.target.closest('button[data-mode]');
  if (b) setSubMode(b.dataset.mode);
});

// Default: hemiciclo first
setSubMode('hemi');

window.addEventListener('resize', syncNationalSidePanelHeight);
if ('ResizeObserver' in window) {
  const nationalPanelObserver = new ResizeObserver(syncNationalSidePanelHeight);
  nationalPanelObserver.observe(document.getElementById('map-wrap'));
  nationalPanelObserver.observe(document.getElementById('hemi-wrap'));
}

document.addEventListener('click', e => {
  if (!selectedNationalParty) return;
  if (e.target.closest('#legend-wrap')) return;
  highlightNationalParty(null);
});

// --- DEPT VIEW ---
function showDept(deptName) {
  if (currentDept === deptName) { showNational(); return; }
  currentDept = deptName;
  const d = getChamberDist()[deptName];
  if (!d) return;

  // Switch views
  document.getElementById('national-view').style.display = 'none';
  document.getElementById('dept-view').style.display = 'block';

  // Header (Muestra las siglas con sus escaños en el subtítulo de forma compacta)
  document.getElementById('dept-name-title').textContent = deptName;
  document.getElementById('dept-seat-subtitle').textContent = d.total + ' escaños · ' + d.parties.map(p => p.a + ' ' + p.s).join(' · ');

  // Map: clone the national SVG into dept-map-wrap
  const deptMapWrap = document.getElementById('dept-map-wrap');
  deptMapWrap.innerHTML = '';
  const natSvg = document.querySelector('#map-wrap svg');
  const clonedSvg = natSvg.cloneNode(true);
  clonedSvg.style.width = '100%';
  clonedSvg.style.height = 'auto';

  // Highlight selected dept, dim others
  clonedSvg.querySelectorAll('path[data-dept]').forEach(path => {
    if (path.dataset.dept === deptName) {
      path.classList.add('dept-active');
    }
    // click on dimmed depts → switch dept
    path.style.cursor = 'pointer';
    path.addEventListener('click', e => {
      e.stopPropagation();
      showDept(path.dataset.dept);
    });
  });
  deptMapWrap.appendChild(clonedSvg);

  // Click background to go back
  clonedSvg.addEventListener('click', e => {
    if (e.target === clonedSvg) showNational();
  });

  // Hemiciclo for dept
  const deptSvg = document.getElementById('dept-hemi-svg');
  const partySeats = {};
  
  // Enviamos los escaños limpios manteniendo d.parties intacto
  d.parties.forEach(p => { partySeats[p.a] = p.s; });
  
  buildHemiciclo(deptSvg, partySeats, d.total);
  document.getElementById('dept-hemi-title').textContent = `Hemiciclo · ${d.total} escaños`;

  // Results list (Usa acrToName para mostrar el nombre largo completo en la lista lateral)
  const list = document.getElementById('dept-results-list');
  list.innerHTML = '';
  d.parties.forEach(p => {
    const div = document.createElement('div');
    div.className = 'dr-row';
    const logo = LOGOS[p.a];
    const icon = logo ? `<img class="dr-logo" src="${logo}" alt="${p.a}">` : `<span class="dr-dot" style="background:${p.c}"></span>`;
    const pct = p.s / d.total * 100;
    const pctText = pct.toLocaleString('es-CO', { maximumFractionDigits: 1 });
    
    // Aquí hacemos la magia: si la sigla existe en acrToName, muestra el nombre completo; si no, deja la sigla como respaldo.
    const fullName = acrToName[p.a] || p.name || p.a;

    div.innerHTML = `${icon}<span class="dr-name">${fullName}</span><div class="dr-bar-bg" data-tip="${pctText}% - ${p.s}/${d.total} esc."><div class="dr-bar" style="width:${pct}%;background:${p.c}\"></div></div><span class="dr-seats">${p.s}</span>`;
    list.appendChild(div);
  });
}
function showNational() {
  currentDept = null;
  document.getElementById('dept-view').style.display = 'none';
  document.getElementById('national-view').style.display = 'block';
  requestAnimationFrame(syncNationalSidePanelHeight);
}

// --- KEY: ESC to go back ---
document.addEventListener('keydown', e => { if (e.key === 'Escape') showNational(); });

function posTooltip(e, el, w) {
  const W = window.innerWidth, H = window.innerHeight;
  const th = el.offsetHeight || 180;
  let x = e.clientX + 16, y = e.clientY - 10;
  if (x + w > W - 8) x = e.clientX - w - 8;
  if (y + th > H - 8) y = H - th - 8;
  if (y < 8) y = 8;
  el.style.left = x + 'px'; el.style.top = y + 'px';
}
