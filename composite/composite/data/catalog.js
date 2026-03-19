import { PCBuild } from '../composite/PCBuild';
import { PCPart }  from '../composite/PCPart';
 
const p = (name, desc, price, cat, tier) =>
  new PCPart(name, desc, price, cat, tier);
 
// ============================================================
// GAMA BÁSICA
// ============================================================
const basica = new PCBuild('Gama Básica', 'Entry-level para gaming casual y trabajo cotidiano.', 'basica');
 
// CPU
basica.add(p('AMD Ryzen 3 4100',      '4C/8T · 3.8 GHz · AM4 · Cooler incluido · Ideal para tareas básicas.',         79,  'CPU', 'basica'));
basica.add(p('Intel Core i3-12100F',  '4C/8T · 3.3 GHz · LGA1700 · Sin GPU · Gran valor por precio.',                 99,  'CPU', 'basica'));
basica.add(p('AMD Ryzen 5 5500',      '6C/12T · 3.6 GHz · AM4 · SMT · Excelente para gaming 1080p bajo.',            119,  'CPU', 'basica'));
basica.add(p('Intel Core i5-10400F',  '6C/12T · 2.9 GHz · LGA1200 · Sólido rendimiento generación anterior.',        89,  'CPU', 'basica'));
 
// GPU
basica.add(p('GTX 1650 4 GB',         'Turing · GDDR6 · 75W · Sin conector extra · 1080p medio.',                    129,  'GPU', 'basica'));
basica.add(p('RX 6500 XT 4 GB',       'RDNA 2 · PCIe 4.0 × 4 · 1080p bajo-medio · Eficiente.',                      149,  'GPU', 'basica'));
basica.add(p('GTX 1660 Super 6 GB',   'GDDR6 · Turing · 1080p alto estable · Relación calidad-precio sólida.',       189,  'GPU', 'basica'));
basica.add(p('RX 6600 8 GB',          'RDNA 2 · 8 GB GDDR6 · FidelityFX SR · El mejor entry de AMD.',               219,  'GPU', 'basica'));
 
// RAM
basica.add(p('Kingston 8 GB DDR4',    '1×8 GB · 2666 MHz · Sin disipador · Módulo único económico.',                  22,  'RAM', 'basica'));
basica.add(p('Corsair 16 GB DDR4',    '2×8 GB · 3000 MHz · Perfil bajo · Dual channel básico.',                       42,  'RAM', 'basica'));
basica.add(p('TeamGroup 16 GB DDR4',  '2×8 GB · 3200 MHz · T-Force Vulcan · Disipador rojo.',                         45,  'RAM', 'basica'));
basica.add(p('Kingston 16 GB DDR4',   '2×8 GB · 3200 MHz · HyperX Fury · Confiable y probado.',                       48,  'RAM', 'basica'));
 
// Motherboard
basica.add(p('ASRock B450M-HDV',      'AM4 · mATX · VGA/DVI/HDMI · 2× DDR4 · USB 3.0 básico.',                       59,  'Motherboard', 'basica'));
basica.add(p('MSI H510M PRO',         'LGA1200 · mATX · 2× DDR4 · PCIe 4.0 · HDMI · Económica.',                     69,  'Motherboard', 'basica'));
basica.add(p('Gigabyte B450M DS3H',   'AM4 · mATX · 4× DDR4 · PCIe 3.0 · USB 3.1 · Buena VRM.',                     72,  'Motherboard', 'basica'));
basica.add(p('MSI B450M PRO-VDH',     'AM4 · mATX · 4× DDR4 · AMD StoreMI · Fiable y popular.',                      79,  'Motherboard', 'basica'));
 
// Storage
basica.add(p('WD Blue 500 GB HDD',    '5400 RPM · SATA III · 16 MB caché · Almacenamiento básico.',                   30,  'Storage', 'basica'));
basica.add(p('Crucial BX500 480 GB',  'SSD SATA · 540 MB/s · 3D NAND · Gran upgrade vs HDD.',                        33,  'Storage', 'basica'));
basica.add(p('Kingston NV2 500 GB',   'NVMe PCIe 4.0 · 3500 MB/s · M.2 2280 · Compacto.',                            36,  'Storage', 'basica'));
basica.add(p('Patriot P300 512 GB',   'NVMe PCIe 3.0 · 1700 MB/s · M.2 · El más económico NVMe.',                    29,  'Storage', 'basica'));
 
// PSU
basica.add(p('Thermaltake Smart 430W','80+ White · No modular · Protección básica OVP/OCP.',                           39,  'PSU', 'basica'));
basica.add(p('EVGA 450 BR',           '80+ Bronze · Semi-mod · 3 años garantía · Fiable.',                             45,  'PSU', 'basica'));
basica.add(p('Corsair CV450',         '80+ Bronze · No modular · Silencioso · Buena calidad.',                         49,  'PSU', 'basica'));
basica.add(p('Seasonic S12III 500W',  '80+ Bronze · No modular · Capacitores japoneses · Durable.',                    52,  'PSU', 'basica'));
 
// Case
basica.add(p('Aerocool Cs-101',       'mATX · Panel acero · 1 fan · USB 2.0 frontal · Compacto.',                     28,  'Case', 'basica'));
basica.add(p('Deepcool MATREXX 30',   'mATX · Panel lateral · Sin RGB · Funcional y limpio.',                          34,  'Case', 'basica'));
basica.add(p('Cougar MX330',          'ATX · Panel lateral · 1 fan trasero · Airflow decente.',                        45,  'Case', 'basica'));
basica.add(p('Aerocool Cylon Mini',   'mATX · Acrílico lateral · RGB frontal · Vistoso y barato.',                     39,  'Case', 'basica'));
 
// Cooling
basica.add(p('Cooler stock AMD',       'Wraith Stealth · 92mm · Incluido con Ryzen · Funcional.',                       0,  'Cooling', 'basica'));
basica.add(p('Deepcool AG300',         'Disipador aire · 120mm · Multi-socket · Bajo perfil ruido.',                   22,  'Cooling', 'basica'));
basica.add(p('ID-Cooling SE-214-XT',   'Disipador aire · 120mm · 4 heat pipes · 130W TDP.',                           27,  'Cooling', 'basica'));
basica.add(p('Cooler Master Hyper 212','Disipador aire · 120mm · AM4+LGA1700 · Clásico probado.',                      32,  'Cooling', 'basica'));
 
// Monitor
basica.add(p('AOC 22B2H 22"',         '1080p IPS · 75Hz · HDMI+VGA · Sin marcos · Slim.',                             89,  'Monitor', 'basica'));
basica.add(p('LG 22MK430H 22"',       '1080p IPS · 75Hz · AMD FreeSync · sRGB 99% · Colores.',                       99,  'Monitor', 'basica'));
basica.add(p('AOC 24B2XH 24"',        '1080p IPS · 75Hz · Sin marcos 3 lados · Ultra-slim.',                         109,  'Monitor', 'basica'));
basica.add(p('Acer R240HY 24"',       '1080p IPS · 60Hz · HDMI/DVI/VGA · Colores sRGB fieles.',                       99,  'Monitor', 'basica'));
 
// Keyboard
basica.add(p('Logitech K120',         'Membrana · USB · Resistente derrames · Silencioso · Clásico.',                  15,  'Keyboard', 'basica'));
basica.add(p('Redragon K502 RGB',     'Membrana · RGB rainbow · Anti-ghosting 19 teclas · USB.',                       25,  'Keyboard', 'basica'));
basica.add(p('HyperX Alloy Core',     'Membrana · RGB por zonas · Resistente · Anti-ghosting.',                        39,  'Keyboard', 'basica'));
basica.add(p('Redragon K552 TKL',     'Mecánico TKL · Outemu Red · RGB · Compacto · Sólido.',                         35,  'Keyboard', 'basica'));
 
// Mouse
basica.add(p('Logitech B100',         '800 DPI · 3 botones · USB · Ambidiestro · Básico.',                              8,  'Mouse', 'basica'));
basica.add(p('Redragon M602 Griffin', '7200 DPI · 7 botones · RGB · Ergonómico · USB.',                               18,  'Mouse', 'basica'));
basica.add(p('Logitech G203',         '8000 DPI · 6 botones · RGB · Sensor óptico preciso.',                          25,  'Mouse', 'basica'));
basica.add(p('SteelSeries Rival 3',   '8500 DPI · 6 botones · RGB · 77g · TrueMove Core.',                           29,  'Mouse', 'basica'));
 
// Headset
basica.add(p('Redragon H120 Ares',    'Estéreo 3.5mm · Drivers 40mm · Micrófono fijo · Ligero.',                      15,  'Headset', 'basica'));
basica.add(p('HyperX Cloud Stinger',  'Estéreo · Drivers 50mm · Micrófono abatible · USB/3.5mm.',                     35,  'Headset', 'basica'));
basica.add(p('Logitech G332',         'Estéreo · Drivers 50mm · Micrófono volteable · Acolchado.',                    49,  'Headset', 'basica'));
basica.add(p('Corsair HS35',          'Estéreo · Drivers 50mm · Diadema ajustable · Cómodo.',                         39,  'Headset', 'basica'));
 
// Mousepad
basica.add(p('Redragon P001 M',       '250×210mm · Tela básica · Caucho natural · Compacto.',                          6,  'Mousepad', 'basica'));
basica.add(p('Corsair MM100',         '320×270mm · Tela densa · Costuras · Anti-deslizante.',                         11,  'Mousepad', 'basica'));
basica.add(p('SteelSeries QcK M',     '320×270mm · Superficie control · Clásico de la industria.',                    13,  'Mousepad', 'basica'));
basica.add(p('Redragon P003 XL',      '800×300mm · Extra grande · Tela speed · Caucho 3mm.',                          17,  'Mousepad', 'basica'));
 
// ============================================================
// GAMA MEDIA
// ============================================================
const media = new PCBuild('Gama Media', 'Balance rendimiento-precio. 1080p/1440p fluido.', 'media');
 
// CPU
media.add(p('AMD Ryzen 5 5600',       '6C/12T · 3.5 GHz · AM4 · Wraith Stealth · Referente gaming.',                169,  'CPU', 'media'));
media.add(p('Intel Core i5-13400F',   '10C(6P+4E)/16T · 2.5 GHz · LGA1700 · Sin GPU · Muy eficiente.',             199,  'CPU', 'media'));
media.add(p('AMD Ryzen 5 7600',       '6C/12T · 3.8 GHz · AM5 · DDR5 · Alto IPC nueva gen.',                       229,  'CPU', 'media'));
media.add(p('Intel Core i5-13600K',   '14C/20T · 3.5 GHz · LGA1700 · Gaming y productividad top.',                  289,  'CPU', 'media'));
 
// GPU
media.add(p('RTX 3060 12 GB',         'Ampere · DLSS 2 · Ray tracing · 1080p ultra / 1440p medio.',                 249,  'GPU', 'media'));
media.add(p('RX 6700 XT 12 GB',       'RDNA 2 · 12 GB · FSR · 1440p alto · Gran precio AMD.',                      299,  'GPU', 'media'));
media.add(p('RTX 4060 Ti 8 GB',       'Ada · DLSS 3 · 1080p/1440p alto · Eficiencia excelente.',                   399,  'GPU', 'media'));
media.add(p('RX 7700 XT 12 GB',       'RDNA 3 · FSR 3 · 1440p fluido · Mejor precio mid AMD.',                     429,  'GPU', 'media'));
 
// RAM
media.add(p('G.Skill Ripjaws 16 GB',  '2×8 GB · DDR4 3600 MHz · CL16 · Disipador rojo · Rápida.',                   59,  'RAM', 'media'));
media.add(p('Corsair Vengeance 32 GB','2×16 GB · DDR4 3200 MHz · Perfil bajo · Gran capacidad.',                     79,  'RAM', 'media'));
media.add(p('Kingston Fury 32 GB',    '2×16 GB · DDR5 5200 MHz · XMP 3.0 · Nueva generación.',                      99,  'RAM', 'media'));
media.add(p('G.Skill Trident Z 32 GB','2×16 GB · DDR4 3600 MHz · CL18 · RGB · Visualmente premium.',                89,  'RAM', 'media'));
 
// Motherboard
media.add(p('MSI B550M Mortar',       'AM4 · mATX · PCIe 4.0 · USB-C · 2.5G LAN · Sólida VRM.',                   129,  'Motherboard', 'media'));
media.add(p('ASUS Prime B660-Plus',   'LGA1700 · ATX · DDR4 · PCIe 4.0 · 2.5G LAN · Estable.',                    149,  'Motherboard', 'media'));
media.add(p('Gigabyte B650 AORUS',    'AM5 · ATX · DDR5 · PCIe 5.0 · WiFi 6 · 2.5G LAN.',                         169,  'Motherboard', 'media'));
media.add(p('MSI B650 Gaming Plus',   'AM5 · ATX · DDR5 · USB 3.2 Gen2 · WiFi 6 · Diseño gaming.',                 179,  'Motherboard', 'media'));
 
// Storage
media.add(p('Samsung 870 EVO 1 TB',   'SSD SATA · 560/530 MB/s · MLC · Alta durabilidad probada.',                  89,  'Storage', 'media'));
media.add(p('WD Black SN770 1 TB',    'NVMe PCIe 4.0 · 5150/4900 MB/s · Sin DRAM · Gran precio.',                   79,  'Storage', 'media'));
media.add(p('Samsung 970 EVO 1 TB',   'NVMe PCIe 3.0 · 3500/2500 MB/s · MLC · Confiabilidad top.',                  89,  'Storage', 'media'));
media.add(p('Seagate Barracuda 2 TB', 'HDD 7200 RPM · SATA III · Capacidad para juegos y backups.',                  59,  'Storage', 'media'));
 
// PSU
media.add(p('Corsair CV650',          '650W · 80+ Bronze · No modular · Fiable para builds media.',                   69,  'PSU', 'media'));
media.add(p('EVGA 650 G6',            '650W · 80+ Gold · Full modular · ECO mode · Silenciosa.',                      99,  'PSU', 'media'));
media.add(p('Seasonic Focus GX-650',  '650W · 80+ Gold · Full modular · Fan híbrido · Premium.',                     109,  'PSU', 'media'));
media.add(p('Corsair RM750x',         '750W · 80+ Gold · Full modular · Zero RPM · Excelente.',                      129,  'PSU', 'media'));
 
// Case
media.add(p('NZXT H510',              'ATX · Vidrio templado · Cable mgmt · Minimalista clásico.',                    79,  'Case', 'media'));
media.add(p('Fractal Design Pop Air', 'ATX · Vidrio templado · 3 fans · Silencioso · Airflow.',                       99,  'Case', 'media'));
media.add(p('Lian Li Lancool 216',    'ATX · 2×160mm ARGB fans · Excelente airflow · Premium.',                      109,  'Case', 'media'));
media.add(p('Be quiet! Pure Base 500','ATX · 2 fans · Panel insonorizado · Silencioso · Elegante.',                   89,  'Case', 'media'));
 
// Cooling
media.add(p('Deepcool AK400',         'Disipador aire · 120mm · 4 heat pipes · 220W TDP · Slim.',                    35,  'Cooling', 'media'));
media.add(p('be quiet! Dark Rock 4',  'Disipador aire · 2×fan · Muy silencioso · 200W TDP.',                         69,  'Cooling', 'media'));
media.add(p('CM MasterLiquid 240',    'AIO 240mm · 2×120mm ARGB · Bomba silenciosa · Montaje fácil.',                79,  'Cooling', 'media'));
media.add(p('Deepcool AK620',         'Dual tower · 2×120mm · 260W TDP · Mejor aire mid-range.',                     59,  'Cooling', 'media'));
 
// Monitor
media.add(p('AOC 24G2 24"',           '1080p IPS · 144Hz · 1ms · FreeSync · HDMI+DP · Referente.',                  149,  'Monitor', 'media'));
media.add(p('LG 27GL850 27"',         '1440p IPS · 144Hz · 1ms · G-Sync comp · sRGB 98%.',                          299,  'Monitor', 'media'));
media.add(p('Samsung G5 27"',         '1440p VA · 165Hz · 1ms · FreeSync Prem · Curvo 1000R.',                       249,  'Monitor', 'media'));
media.add(p('AOC Q27G2S 27"',         '1440p IPS · 165Hz · 1ms · FreeSync · HDR400 · Nítido.',                      269,  'Monitor', 'media'));
 
// Keyboard
media.add(p('Logitech G Pro X',       'Mecánico TKL · Hot-swap · GX switches · RGB · Pro.',                          139,  'Keyboard', 'media'));
media.add(p('Corsair K70 RGB MK.2',   'Mecánico full · Cherry MX Red · RGB · Aluminio · Premium.',                   139,  'Keyboard', 'media'));
media.add(p('SteelSeries Apex 3',     'Membrana · RGB 10 zonas · IP32 · Silencioso · USB.',                           49,  'Keyboard', 'media'));
media.add(p('Keychron K2 v2',         'Mecánico 75% · Hot-swap · Gateron Red · BT5+USB · Compacto.',                  89,  'Keyboard', 'media'));
 
// Mouse
media.add(p('Logitech G402',          '4000 DPI · 8 botones · USB · Fusion Engine sensor · Rápido.',                  49,  'Mouse', 'media'));
media.add(p('Razer DeathAdder V3',    '30000 DPI · 6 botones · 59g ligero · Focus Pro sensor.',                       69,  'Mouse', 'media'));
media.add(p('Logitech G502 X',        '25600 DPI · 13 botones · LIGHTFORCE hybrid · Pesos.',                          79,  'Mouse', 'media'));
media.add(p('SteelSeries Rival 600',  '12000 DPI · Doble sensor · 8 botones · Pesos modulares.',                      79,  'Mouse', 'media'));
 
// Headset
media.add(p('HyperX Cloud Alpha',     'Dual chamber · 50mm · Desmontable · Hi-Fi · Cómodo.',                          89,  'Headset', 'media'));
media.add(p('Logitech G Pro X',       'Drivers Pro-G · Blue VO!CE mic · DTS 7.1 · USB.',                             129,  'Headset', 'media'));
media.add(p('SteelSeries Arctis 7',   'Inalámbrico 2.4G · 24h · ClearCast mic · DTS 7.1.',                           149,  'Headset', 'media'));
media.add(p('Corsair HS80 Wireless',  'Inalámbrico · Dolby Atmos · 20h batería · Omnidireccional.',                   129,  'Headset', 'media'));
 
// Mousepad
media.add(p('Corsair MM350 M',        '360×300mm · Tela Oxford · Base 5mm · Anti-deslizante.',                        24,  'Mousepad', 'media'));
media.add(p('SteelSeries QcK XXL',   '900×400mm · Superficie control · Caucho grueso · XL.',                          35,  'Mousepad', 'media'));
media.add(p('HyperX Fury S XL',      '900×420mm · Micro-textured · Costuras reforzadas · Veloz.',                     34,  'Mousepad', 'media'));
media.add(p('Corsair MM350 Pro XL',   '930×400mm · Tela premium · Base 5mm · Costuras gruesas.',                       44,  'Mousepad', 'media'));
 
// ============================================================
// GAMA PREMIUM
// ============================================================
const premium = new PCBuild('Gama Premium', 'Máximo rendimiento. 4K gaming y creación de contenido.', 'premium');
 
// CPU
premium.add(p('AMD Ryzen 7 7700X',    '8C/16T · 4.5 GHz · AM5 · DDR5 · Gran IPC gaming.',                           349,  'CPU', 'premium'));
premium.add(p('Intel Core i7-13700K', '16C/24T · 3.4 GHz · LGA1700 · Gaming y creación top.',                       409,  'CPU', 'premium'));
premium.add(p('AMD Ryzen 9 7900X',    '12C/24T · 4.7 GHz · AM5 · Workstation + gaming élite.',                      449,  'CPU', 'premium'));
premium.add(p('Intel Core i9-14900K', '24C/32T · 6.0 GHz boost · LGA1700 · El rey absoluto.',                       589,  'CPU', 'premium'));
 
// GPU
premium.add(p('RTX 4070 12 GB',       'Ada · DLSS 3 · 1440p ultra · Ray tracing avanzado.',                          599,  'GPU', 'premium'));
premium.add(p('RX 7900 XT 20 GB',     'RDNA 3 · 20 GB · FSR 3 · 4K alto · Excelente AMD.',                          749,  'GPU', 'premium'));
premium.add(p('RTX 4080 Super 16 GB', 'Ada · DLSS 3 · 4K ultra 80+ FPS · Mejor eficiencia.',                        999,  'GPU', 'premium'));
premium.add(p('RTX 4090 24 GB',       'Ada · DLSS 3.5 · 4K 100+ FPS · La GPU más potente.',                        1599,  'GPU', 'premium'));
 
// RAM
premium.add(p('Corsair 32 GB DDR5',   '2×16 GB · DDR5 5600 MHz · Perfil bajo · AM5/LGA1700.',                       109,  'RAM', 'premium'));
premium.add(p('G.Skill Trident Z5 32','2×16 GB · DDR5 6000 MHz · CL30 · RGB · Alta frecuencia.',                    139,  'RAM', 'premium'));
premium.add(p('Kingston Fury 64 GB',  '2×32 GB · DDR5 5600 MHz · XMP 3.0 · Máxima capacidad.',                      219,  'RAM', 'premium'));
premium.add(p('G.Skill Trident Z5 64','2×32 GB · DDR5 6000 MHz · CL30 · RGB · Rendimiento extremo.',                229,  'RAM', 'premium'));
 
// Motherboard
premium.add(p('ASUS ROG Strix B650-E','AM5 · ATX · DDR5 · PCIe 5.0 · WiFi 6E · USB4 · RGB.',                       299,  'Motherboard', 'premium'));
premium.add(p('MSI MEG X670E ACE',    'AM5 · ATX · DDR5 · PCIe 5.0 · 10G LAN · WiFi 6E.',                          599,  'Motherboard', 'premium'));
premium.add(p('Gigabyte Z790 Master', 'LGA1700 · ATX · DDR5 · 10G LAN · TB4 · 20+1 VRM.',                          499,  'Motherboard', 'premium'));
premium.add(p('ASUS ROG Maximus Z790','LGA1700 · E-ATX · DDR5 · WiFi 6E · TB4 · Top gama.',                         699,  'Motherboard', 'premium'));
 
// Storage
premium.add(p('Samsung 990 Pro 1 TB', 'NVMe PCIe 4.0 · 7450/6900 MB/s · MLC · Endurance top.',                      119,  'Storage', 'premium'));
premium.add(p('WD Black SN850X 2 TB', 'NVMe PCIe 4.0 · 7300/6600 MB/s · PS5 comp · Élite.',                         169,  'Storage', 'premium'));
premium.add(p('Samsung 990 Pro 2 TB', 'NVMe PCIe 4.0 · 7450/6900 MB/s · MLC · Máxima endurance.',                   189,  'Storage', 'premium'));
premium.add(p('Seagate FireCuda 2 TB','NVMe PCIe 4.0 · 7300 MB/s · Disipador incl · Alta dur.',                      179,  'Storage', 'premium'));
 
// PSU
premium.add(p('EVGA SuperNOVA 850 G6','850W · 80+ Gold · Full mod · ECO mode · 10 años gar.',                        149,  'PSU', 'premium'));
premium.add(p('Corsair HX1000i',      '1000W · 80+ Platinum · Full mod · iCUE digital · Top.',                       249,  'PSU', 'premium'));
premium.add(p('Seasonic PRIME TX-850','850W · 80+ Titanium · Full mod · Fanless <40% · Top.',                         229,  'PSU', 'premium'));
premium.add(p('be quiet! Dark P12 1K','1000W · 80+ Platinum · Full mod · 10 años · Silencioso.',                      219,  'PSU', 'premium'));
 
// Case
premium.add(p('Fractal Torrent RGB',  'ATX · 2×180mm front · Airflow máximo · Vidrio templado.',                      179,  'Case', 'premium'));
premium.add(p('Lian Li O11 Dynamic',  'ATX · Dual chamber · 3× vidrio · 6 fan slots · Icónico.',                      149,  'Case', 'premium'));
premium.add(p('Corsair 5000D Airflow','ATX · Panel mallado · Cable mgmt premium · Espacioso.',                        174,  'Case', 'premium'));
premium.add(p('Be quiet! Silent 802', 'ATX · Insonorizado · 3 fans · Vidrio templado · Silenc.',                      199,  'Case', 'premium'));
 
// Cooling
premium.add(p('Corsair iCUE H150i',   'AIO 360mm · 3×LL120 RGB · iCUE · Bomba ultra silen.',                         259,  'Cooling', 'premium'));
premium.add(p('NZXT Kraken Z73',      'AIO 360mm · LCD display · 3×120mm · Silencioso · Top.',                        279,  'Cooling', 'premium'));
premium.add(p('EK-AIO Elite 360',     'AIO 360mm · Cobre · 3×PWM D-RGB · Rendimiento élite.',                        249,  'Cooling', 'premium'));
premium.add(p('Lian Li Galahad 360',  'AIO 360mm · 3×120mm ARGB · Bomba de cerámica · Premium.',                     239,  'Cooling', 'premium'));
 
// Monitor
premium.add(p('LG 27GN950 4K 27"',   '4K IPS · 144Hz · 1ms · G-Sync+FS · DCI-P3 98% · HDR.',                       699,  'Monitor', 'premium'));
premium.add(p('ASUS ROG PG279QM',     '1440p IPS · 240Hz · 1ms · G-Sync · sRGB 99% · OC.',                          649,  'Monitor', 'premium'));
premium.add(p('Samsung Neo G8 4K',    '4K VA · 240Hz · Mini-LED · HDR2000 · G-Sync comp.',                           799,  'Monitor', 'premium'));
premium.add(p('LG 27GP950-B 4K',      '4K NanoIPS · 160Hz · 1ms · HDMI 2.1 · G-Sync · Vivo.',                       749,  'Monitor', 'premium'));
 
// Keyboard
premium.add(p('Wooting 60HE+',        'Mecánico 60% · Lekker analógico · Rapid trigger · Pro.',                       175,  'Keyboard', 'premium'));
premium.add(p('Keychron Q1 Pro',      'Mecánico 75% · CNC alum · Hot-swap · BT5 · RGB sur-led.',                      199,  'Keyboard', 'premium'));
premium.add(p('Corsair K100 RGB',     'Mecánico full · OPX optical · Rueda media · Alum · iCUE.',                     229,  'Keyboard', 'premium'));
premium.add(p('HHKB Professional 2',  'Topre 45g · Teclado de culto · PBT · Sin RGB · Top tactil.',                   249,  'Keyboard', 'premium'));
 
// Mouse
premium.add(p('Razer Viper V2 Pro',   '30000 DPI · 59g · Inalámbrico HyperSpeed · Focus Pro.',                       139,  'Mouse', 'premium'));
premium.add(p('Logitech G Pro X SL2', '32000 DPI · 60g · HERO 2 · Inalámbrico LIGHTSPEED · Pro.',                   159,  'Mouse', 'premium'));
premium.add(p('Pulsar X2H Wireless',  '3395 sensor · 55g · 4K polling · Inalámbrico · Élite.',                       139,  'Mouse', 'premium'));
premium.add(p('Razer DeathAdder Pro', '30000 DPI · 64g · HyperSpeed · 90h batería · Ergon.',                         149,  'Mouse', 'premium'));
 
// Headset
premium.add(p('HyperX Cloud Alpha Pro','Inalámbrico · 300h batería · Dual chamber · Hi-Res.',                         199,  'Headset', 'premium'));
premium.add(p('Audeze Maxwell',        'Planar magnetic · Dolby Atmos · USB-C/Wireless · 80h.',                       299,  'Headset', 'premium'));
premium.add(p('SteelSeries Nova Pro',  'Inalámbrico dual · ANC · Hi-Res · Infinity power · Top.',                     349,  'Headset', 'premium'));
premium.add(p('Sony WH-1000XM5',       'ANC líder · 30h · LDAC Hi-Res · Multiplataforma · Prem.',                    349,  'Headset', 'premium'));
 
// Mousepad
premium.add(p('Artisan Zero XL',      '490×420mm · Tela japonesa premium · Control perfecto · Pro.',                   79,  'Mousepad', 'premium'));
premium.add(p('Logitech Powerplay',   '340×321mm · Carga inalámbrica · Compatible G502/G903.',                        119,  'Mousepad', 'premium'));
premium.add(p('SteelSeries QcK Prism','900×300mm · RGB 2 zonas · Dual-texture · USB powered.',                         69,  'Mousepad', 'premium'));
premium.add(p('Corsair MM700 RGB XL', '930×400mm · RGB perimetral · Carga USB · Tela premium.',                       89,  'Mousepad', 'premium'));

export const catalog = { basica, media, premium };