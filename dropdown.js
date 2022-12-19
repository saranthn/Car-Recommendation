const makeInput = document.getElementById('makeInput');
var modelInput = document.getElementById('modelInput');
var modelDatalist = document.getElementById('model');

makeInput.addEventListener('change', e => {
  // Enable the model input and year select element
  modelInput.disabled = false;

  // Clear the model input and year select element
  modelDatalist.innerHTML = '';

  // Fill the model input and year select element based on the selected make
  fillModels(e.target.value);
});

function fillModels(make) {
  // Get the list of models for the selected make
  var models = getModelsForMake(make);

  if (models === null || models.length === 0) {
  	modelInput.disabled = true;
  }

  // Loop through the models and add an option element for each model
  models.forEach(model => {
    var option = document.createElement('option');
    option.setAttribute('value', model);
    option.innerHTML = model;
    modelDatalist.appendChild(option);
  });
}

function getModelsForMake(make) {
  // Return the list of models for the selected make
  // You can use a switch statement or an object with key-value pairs to map make to models
  // For example:


  switch (make) {
    case 'BMW':return  ['1 Series M', '1 Series', '2 Series', '3 Series Gran Turismo', '3 Series', '4 Series Gran Coupe', '4 Series', '5 Series Gran Turismo', '5 Series', '6 Series Gran Coupe', '6 Series', '7 Series', '8 Series', 'ActiveHybrid 5', 'ActiveHybrid 7', 'ActiveHybrid X6', 'ALPINA B6 Gran Coupe', 'ALPINA B7', 'Alpina', 'i3', 'M2', 'M3', 'M4 GTS', 'M4', 'M5', 'M6 Gran Coupe', 'M6', 'M', 'X1', 'X3', 'X4', 'X5 M', 'X5', 'X6 M', 'X6', 'Z3', 'Z4 M', 'Z4', 'Z8'] ;
    case 'Audi':return  ['100', '200', '80', '90', 'A3', 'A4 allroad', 'A4', 'A5', 'A6', 'A7', 'A8', 'allroad quattro', 'allroad', 'Cabriolet', 'Coupe', 'Q3', 'Q5', 'Q7', 'R8', 'RS 4', 'RS 5', 'RS 6', 'RS 7', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'SQ5', 'TT RS', 'TT', 'TTS', 'V8'] ;
    case 'FIAT':return  ['124 Spider', '500e', '500', '500L', '500X'] ;
    case 'Mercedes-Benz':return  ['190-Class', '300-Class', '350-Class', '400-Class', '420-Class', '500-Class', '560-Class', '600-Class', 'AMG GT', 'B-Class Electric Drive', 'C-Class', 'C36 AMG', 'C43 AMG', 'CL-Class', 'CLA-Class', 'CLK-Class', 'CLS-Class', 'E-Class', 'E55 AMG', 'G-Class', 'GL-Class', 'GLA-Class', 'GLC-Class', 'GLE-Class Coupe', 'GLE-Class', 'GLK-Class', 'GLS-Class', 'M-Class', 'Maybach', 'Metris', 'ML55 AMG', 'R-Class', 'S-Class', 'SL-Class', 'SLC-Class', 'SLK-Class', 'SLR McLaren', 'SLS AMG GT Final Edition', 'SLS AMG GT', 'SLS AMG'] ;
    case 'Chrysler':return  ['200', '300', '300M', 'Aspen', 'Cirrus', 'Concorde', 'Crossfire', 'Grand Voyager', 'Imperial', 'Le Baron', 'LHS', 'New Yorker', 'Pacifica', 'Prowler', 'PT Cruiser', 'Sebring', 'TC', 'Town and Country', 'Voyager'] ;
    case 'Nissan':return  ['200SX', '240SX', '300ZX', '350Z', '370Z', 'Altima Hybrid', 'Altima', 'Armada', 'Axxess', 'Cube', 'Frontier', 'GT-R', 'Juke', 'Leaf', 'Maxima', 'Murano CrossCabriolet', 'Murano', 'NV200', 'NX', 'Pathfinder', 'Pulsar', 'Quest', 'Rogue Select', 'Rogue', 'Sentra', 'Stanza', 'Titan', 'Truck', 'Van', 'Versa Note', 'Versa', 'Xterra'] ;
    case 'Volvo':return  ['240', '740', '760', '780', '850', '940', '960', 'C30', 'C70', 'Coupe', 'S40', 'S60 Cross Country', 'S60', 'S70', 'S80', 'S90', 'V40', 'V50', 'V60 Cross Country', 'V60', 'V70', 'V90', 'XC60', 'XC70', 'XC90', 'XC'] ;
    case 'Mazda':return  ['2', '323', '3', '5', '626', '6', '929', 'B-Series Pickup', 'B-Series Truck', 'B-Series', 'CX-3', 'CX-5', 'CX-7', 'CX-9', 'Mazdaspeed 3', 'Mazdaspeed 6', 'Mazdaspeed MX-5 Miata', 'Mazdaspeed Protege', 'Millenia', 'MPV', 'MX-3', 'MX-5 Miata', 'MX-6', 'Navajo', 'Protege5', 'Protege', 'RX-7', 'RX-8', 'Tribute Hybrid', 'Tribute', 'Truck'] ;
    case 'Mitsubishi':return  ['3000GT', 'Diamante', 'Eclipse Spyder', 'Eclipse', 'Endeavor', 'Expo', 'Galant', 'i-MiEV', 'Lancer Evolution', 'Lancer Sportback', 'Lancer', 'Mighty Max Pickup', 'Mirage G4', 'Mirage', 'Montero Sport', 'Montero', 'Outlander Sport', 'Outlander', 'Precis', 'Raider', 'Sigma', 'Vanwagon'] ;
    case 'Ferrari':return  ['360', '456M', '458 Italia', '550', '575M', '599', '612 Scaglietti', 'California T', 'California', 'Enzo', 'F12 Berlinetta', 'F430', 'FF', 'Superamerica'] ;
    case 'Alfa Romeo':return  ['4C'] ;
    case 'Toyota':return  ['4Runner', '86', 'Avalon Hybrid', 'Avalon', 'Camry Hybrid', 'Camry Solara', 'Camry', 'Celica', 'Corolla iM', 'Corolla', 'Cressida', 'ECHO', 'FJ Cruiser', 'Highlander Hybrid', 'Highlander', 'Land Cruiser', 'Matrix', 'MR2 Spyder', 'MR2', 'Paseo', 'Pickup', 'Previa', 'Prius c', 'Prius Prime', 'Prius v', 'Prius', 'RAV4 EV', 'RAV4 Hybrid', 'RAV4', 'Sequoia', 'Sienna', 'Supra', 'T100', 'Tacoma', 'Tercel', 'Tundra', 'Venza', 'Yaris iA', 'Yaris'] ;
    case 'McLaren':return  ['570S', '650S Coupe', '650S Spider', 'MP4-12C'] ;
    case 'Maybach':return  ['57', '62', 'Landaulet'] ;
    case 'Pontiac':return  ['6000', 'Aztek', 'Bonneville', 'Firebird', 'G3', 'G5', 'G6', 'G8', 'Grand Am', 'Grand Prix', 'GTO', 'Le Mans', 'Montana SV6', 'Montana', 'Solstice', 'Sunbird', 'Sunfire', 'Torrent', 'Trans Sport', 'Vibe'] ;
    case 'Porsche':return  ['718 Cayman', '911', '928', '944', '968', 'Boxster', 'Carrera GT', 'Cayenne', 'Cayman S', 'Cayman', 'Macan', 'Panamera'] ;
    case 'Saab':return  ['9-2X', '9-3 Griffin', '9-3', '9-4X', '9-5', '9-7X', '9000', '900'] ;
    case 'GMC':return  ['Acadia Limited', 'Acadia', 'Canyon', 'Envoy XL', 'Envoy XUV', 'Envoy', 'Jimmy', 'Rally Wagon', 'S-15 Jimmy', 'S-15', 'Safari Cargo', 'Safari', 'Savana Cargo', 'Savana', 'Sierra 1500 Classic', 'Sierra 1500 Hybrid', 'Sierra 1500', 'Sierra 1500HD', 'Sierra C3', 'Sierra Classic 1500', 'Sonoma', 'Suburban', 'Syclone', 'Terrain', 'Typhoon', 'Vandura', 'Yukon Denali', 'Yukon Hybrid', 'Yukon XL', 'Yukon'] ;
    case 'Hyundai':return  ['Accent', 'Azera', 'Elantra Coupe', 'Elantra GT', 'Elantra Touring', 'Elantra', 'Entourage', 'Equus', 'Excel', 'Genesis Coupe', 'Genesis', 'Santa Fe Sport', 'Santa Fe', 'Scoupe', 'Sonata Hybrid', 'Sonata', 'Tiburon', 'Tucson', 'Veloster', 'Veracruz', 'XG300', 'XG350'] ;
    case 'Plymouth':return  ['Acclaim', 'Breeze', 'Colt', 'Grand Voyager', 'Horizon', 'Laser', 'Neon', 'Prowler', 'Sundance', 'Voyager'] ;
    case 'Honda':return  ['Accord Crosstour', 'Accord Hybrid', 'Accord Plug-In Hybrid', 'Accord', 'Civic CRX', 'Civic del Sol', 'Civic', 'CR-V', 'CR-Z', 'Crosstour', 'Element', 'Fit EV', 'Fit', 'HR-V', 'Insight', 'Odyssey', 'Passport', 'Pilot', 'Prelude', 'Ridgeline', 'S2000'] ;
    case 'Oldsmobile':return  ['Achieva', 'Alero', 'Aurora', 'Bravada', 'Ciera', 'Custom Cruiser', 'Cutlass Calais', 'Cutlass Ciera', 'Cutlass Supreme', 'Cutlass', 'Eighty-Eight Royale', 'Eighty-Eight', 'Intrigue', 'LSS', 'Ninety-Eight', 'Regency', 'Silhouette', 'Toronado'] ;
    case 'Suzuki':return  ['Aerio', 'Equator', 'Esteem', 'Forenza', 'Grand Vitara', 'Kizashi', 'Reno', 'Samurai', 'Sidekick', 'Swift', 'SX4', 'Verona', 'Vitara', 'X-90', 'XL-7', 'XL7'] ;
    case 'Ford':return  ['Aerostar', 'Aspire', 'Bronco II', 'Bronco', 'C-Max Hybrid', 'Contour SVT', 'Contour', 'Crown Victoria', 'E-150', 'E-250', 'E-Series Van', 'E-Series Wagon', 'Edge', 'Escape Hybrid', 'Escape', 'Escort', 'Expedition', 'Explorer Sport Trac', 'Explorer Sport', 'Explorer', 'F-150 Heritage', 'F-150 SVT Lightning', 'F-150', 'F-250', 'Festiva', 'Fiesta', 'Five Hundred', 'Flex', 'Focus RS', 'Focus ST', 'Focus', 'Freestar', 'Freestyle', 'Fusion Hybrid', 'Fusion', 'GT', 'LTD Crown Victoria', 'Mustang SVT Cobra', 'Mustang', 'Probe', 'Ranger', 'Shelby GT350', 'Shelby GT500', 'Taurus X', 'Taurus', 'Tempo', 'Thunderbird', 'Transit Connect', 'Transit Wagon', 'Windstar Cargo', 'Windstar'] ;
    case 'Cadillac':return  ['Allante', 'ATS Coupe', 'ATS-V', 'ATS', 'Brougham', 'Catera', 'CT6', 'CTS Coupe', 'CTS-V Coupe', 'CTS-V Wagon', 'CTS-V', 'CTS Wagon', 'CTS', 'DeVille', 'DTS', 'Eldorado', 'Escalade ESV', 'Escalade EXT', 'Escalade Hybrid', 'Escalade', 'Fleetwood', 'Seville', 'Sixty Special', 'SRX', 'STS-V', 'STS', 'XLR-V', 'XLR', 'XT5', 'XTS'] ;
    case 'Kia':return  ['Amanti', 'Borrego', 'Cadenza', 'Forte', 'K900', 'Optima Hybrid', 'Optima', 'Rio', 'Rondo', 'Sedona', 'Sephia', 'Sorento', 'Soul EV', 'Soul', 'Spectra', 'Sportage'] ;
    case 'Bentley':return  ['Arnage', 'Azure T', 'Azure', 'Brooklands', 'Continental Flying Spur Speed', 'Continental Flying Spur', 'Continental GT Speed Convertible', 'Continental GT Speed', 'Continental GT3-R', 'Continental GT', 'Continental GTC Speed', 'Continental GTC', 'Continental Supersports Convertible', 'Continental Supersports', 'Continental', 'Flying Spur', 'Mulsanne', 'Supersports Convertible ISR'] ;
    case 'Chevrolet':return  ['Astro Cargo', 'Astro', 'Avalanche', 'Aveo', 'Beretta', 'Black Diamond Avalanche', 'Blazer', 'Bolt EV', 'Camaro', 'Caprice', 'Captiva Sport', 'Cavalier', 'Celebrity', 'Chevy Van', 'City Express', 'C/K 1500 Series', 'C/K 2500 Series', 'Classic', 'Cobalt', 'Colorado', 'Corsica', 'Corvette Stingray', 'Corvette', 'Cruze Limited', 'Cruze', 'Equinox', 'Express Cargo', 'Express', 'HHR', 'Impala Limited', 'Impala', 'Lumina Minivan', 'Lumina', 'Malibu Classic', 'Malibu Hybrid', 'Malibu Limited', 'Malibu Maxx', 'Malibu', 'Metro', 'Monte Carlo', 'Prizm', 'S-10 Blazer', 'S-10', 'Silverado 1500 Classic', 'Silverado 1500 Hybrid', 'Silverado 1500', 'Sonic', 'Spark EV', 'Spark', 'Sportvan', 'SS', 'SSR', 'Suburban', 'Tahoe Hybrid', 'Tahoe Limited/Z71', 'Tahoe', 'Tracker', 'TrailBlazer EXT', 'TrailBlazer', 'Traverse', 'Trax', 'Uplander', 'Venture'] ;
    case 'Dodge':return  ['Avenger', 'Caliber', 'Caravan', 'Challenger', 'Charger', 'Colt', 'Dakota', 'Dart', 'Daytona', 'Durango', 'Dynasty', 'Grand Caravan', 'Intrepid', 'Journey', 'Magnum', 'Monaco', 'Neon', 'Nitro', 'Omni', 'RAM 150', 'RAM 250', 'Ram 50 Pickup', 'Ram Cargo', 'Ram Pickup 1500', 'Ram Van', 'Ram Wagon', 'Ramcharger', 'Shadow', 'Spirit', 'SRT Viper', 'Stealth', 'Stratus', 'Viper'] ;
    case 'Lamborghini':return  ['Aventador', 'Diablo', 'Gallardo', 'Huracan', 'Murcielago', 'Reventon'] ;
    case 'Lincoln':return  ['Aviator', 'Blackwood', 'Continental', 'LS', 'Mark LT', 'Mark VIII', 'Mark VII', 'MKC', 'MKS', 'MKT', 'MKX', 'MKZ Hybrid', 'MKZ', 'Navigator', 'Town Car', 'Zephyr'] ;
    case 'Subaru':return  ['B9 Tribeca', 'Baja', 'BRZ', 'Crosstrek', 'Forester', 'Impreza WRX', 'Impreza', 'Justy', 'Legacy', 'Loyale', 'Outback', 'SVX', 'Tribeca', 'WRX', 'XT', 'XV Crosstrek'] ;
    case 'Volkswagen':return  ['Beetle Convertible', 'Beetle', 'Cabriolet', 'Cabrio', 'CC', 'Corrado', 'e-Golf', 'Eos', 'EuroVan', 'Fox', 'GLI', 'Golf Alltrack', 'Golf GTI', 'Golf R', 'Golf SportWagen', 'Golf', 'GTI', 'Jetta GLI', 'Jetta Hybrid', 'Jetta SportWagen', 'Jetta', 'New Beetle', 'Passat', 'Phaeton', 'R32', 'Rabbit', 'Routan', 'Tiguan', 'Touareg 2', 'Touareg', 'Vanagon'] ;
    case 'Spyker':return  ['C8'] ;
    case 'Buick':return  ['Cascada', 'Century', 'Electra', 'Enclave', 'Encore', 'Envision', 'Estate Wagon', 'LaCrosse', 'LeSabre', 'Lucerne', 'Park Avenue', 'Rainier', 'Reatta', 'Regal', 'Rendezvous', 'Riviera', 'Roadmaster', 'Skylark', 'Terraza', 'Verano'] ;
    case 'Acura':return  ['CL', 'ILX Hybrid', 'ILX', 'Integra', 'Legend', 'MDX', 'NSX', 'RDX', 'RL', 'RLX', 'RSX', 'SLX', 'TL', 'TLX', 'TSX Sport Wagon', 'TSX', 'Vigor', 'ZDX'] ;
    case 'Rolls-Royce':return  ['Corniche', 'Dawn', 'Ghost Series II', 'Ghost', 'Park Ward', 'Phantom Coupe', 'Phantom Drophead Coupe', 'Phantom', 'Silver Seraph', 'Wraith'] ;
    case 'Maserati':return  ['Coupe', 'Ghibli', 'GranSport', 'GranTurismo Convertible', 'GranTurismo', 'Levante', 'Quattroporte', 'Spyder'] ;
    case 'Lexus':return  ['CT 200h', 'ES 250', 'ES 300h', 'ES 300', 'ES 330', 'ES 350', 'GS 200t', 'GS 300', 'GS 350', 'GS 400', 'GS 430', 'GS 450h', 'GS 460', 'GS F', 'GX 460', 'GX 470', 'HS 250h', 'IS 200t', 'IS 250 C', 'IS 250', 'IS 300', 'IS 350 C', 'IS 350', 'IS F', 'LFA', 'LS 400', 'LS 430', 'LS 460', 'LS 600h L', 'LX 450', 'LX 470', 'LX 570', 'NX 200t', 'NX 300h', 'RC 200t', 'RC 300', 'RC 350', 'RC F', 'RX 300', 'RX 330', 'RX 350', 'RX 400h', 'RX 450h', 'SC 300', 'SC 400', 'SC 430'] ;
    case 'Aston Martin':return  ['DB7', 'DB9 GT', 'DB9', 'DBS', 'Rapide S', 'Rapide', 'V12 Vanquish', 'V12 Vantage S', 'V12 Vantage', 'V8 Vantage', 'Vanquish', 'Virage'] ;
    case 'Land Rover':return  ['Defender', 'Discovery Series II', 'Discovery Sport', 'Discovery', 'Freelander', 'LR2', 'LR3', 'LR4', 'Range Rover Evoque', 'Range Rover Sport', 'Range Rover'] ;
    case 'Lotus':return  ['Elise', 'Esprit', 'Evora 400', 'Evora', 'Exige'] ;
    case 'Infiniti':return  ['EX35', 'EX', 'FX35', 'FX45', 'FX50', 'FX', 'G Convertible', 'G Coupe', 'G Sedan', 'G20', 'G35', 'G37 Convertible', 'G37 Coupe', 'G37 Sedan', 'G37', 'I30', 'I35', 'J30', 'JX', 'M30', 'M35', 'M37', 'M45', 'M56', 'M', 'Q40', 'Q45', 'Q50', 'Q60 Convertible', 'Q60 Coupe', 'Q70', 'QX4', 'QX50', 'QX56', 'QX60', 'QX70', 'QX80', 'QX'] ;
    case 'Scion':return  ['FR-S', 'iA', 'iM', 'iQ', 'tC', 'xA', 'xB', 'xD'] ;
    case 'Genesis':return  ['G80'] ;
    case 'HUMMER':return  ['H3', 'H3T'] ;
    case 'Tesla':return  ['Model S'] ;
    case 'Bugatti':return  ['Veyron 16.4'] ;
    default:
      return [];
  }
}