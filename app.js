const examDate = new Date("2026-05-12T09:00:00-07:00");

const regions = [
  {
    title: "Loire Valley",
    tier: "Tier 1",
    why: "Appears constantly and can be tested through dry whites, reds, roses, sweet wines, commercial appeal, and consumer confusion.",
    prompt: "Hot seat: tell me everything useful about the Loire Valley for D3 theory. Prioritise sub-regional contrasts and commercial consequences.",
    facts: {
      "Growing Environment": [
        "Pays Nantais is cool maritime with Atlantic rain and spring frost pressure.",
        "Anjou-Saumur is more maritime and warmer, with tuffeau, schist and slate.",
        "Touraine becomes more continental, with cold winters, warm summers, clay, limestone and tuffeau.",
        "Central Vineyards are continental, inland, frost-prone, with silex, clay-limestone and terres blanches."
      ],
      "Grapes and Styles": [
        "Melon Blanc in Muscadet gives light, high-acid, neutral wines often aged sur lie.",
        "Chenin Blanc spans dry Savennieres, demi-sec Vouvray, sparkling, and botrytised Coteaux du Layon.",
        "Cabernet Franc gives red and rose wines in Chinon, Bourgueil, Saumur-Champigny and Anjou.",
        "Sauvignon Blanc drives Sancerre and Pouilly-Fume with high acidity and site expression."
      ],
      "D3 Links": [
        "Link cool climate and high acidity to suitability for dry whites, sparkling and long-lived sweet Chenin.",
        "Sur lie ageing in Muscadet adds texture to a naturally light, neutral wine.",
        "Botrytis risk is both opportunity and hazard in sweet-wine zones.",
        "Commercial challenge: broad diversity makes the Loire hard for consumers to understand."
      ],
      "Producer Evidence": [
        "Domaine Huet for Vouvray.",
        "Nicolas Joly or Domaine du Closel for Savennieres.",
        "Alphonse Mellot or Vacheron for Sancerre.",
        "Charles Joguet or Bernard Baudry for Chinon."
      ]
    }
  },
  {
    title: "Burgundy",
    tier: "Tier 1",
    why: "Frequently examined through hierarchy, reputation, Chablis, trade structure, terroir and threats to quality.",
    prompt: "Hot seat: explain why Burgundy produces high quality and high prices, and what threatens that reputation.",
    facts: {
      "Growing Environment": [
        "Continental climate brings spring frost, hail and harvest rain risk.",
        "Cote d'Or best sites are east-facing mid-slopes around 200-400m.",
        "Limestone, marl and clay vary by plot, supporting terroir-based hierarchy.",
        "Chablis is cooler, with Kimmeridgian limestone-clay for premier and grand cru sites."
      ],
      "Grapes and Styles": [
        "Pinot Noir ripens early and suits short growing seasons but is sensitive to disease and yield.",
        "Chardonnay is adaptable from high-acid Chablis to richer Maconnais.",
        "Premier and grand cru sites generally give greater concentration, structure and ageing potential.",
        "Regional and village wines can still carry price pressure due to Burgundy's overall reputation."
      ],
      "D3 Links": [
        "Fragmented ownership plus limited land supply supports scarcity pricing.",
        "Vintage variation and frost can reduce yields, increasing price but threatening supply consistency.",
        "Negociants remain important because many growers have tiny holdings.",
        "Climate change can aid ripening but raises alcohol, drought and style-shift concerns."
      ],
      "Producer Evidence": [
        "Domaine de la Romanee-Conti for scarcity and prestige.",
        "Louis Jadot or Joseph Drouhin for negociant/domain models.",
        "William Fevre or Raveneau for Chablis.",
        "Leflaive or Coche-Dury for top white Burgundy."
      ]
    }
  },
  {
    title: "Bordeaux",
    tier: "Tier 1",
    why: "Core France topic: left bank, right bank, dry whites, sweet wines, classifications, la place and commercial models.",
    prompt: "Hot seat: compare Left Bank, Right Bank and Sauternes/Barsac with climate, soils, grapes, style and business implications.",
    facts: {
      "Growing Environment": [
        "Moderate maritime climate with Gulf Stream influence, variable rainfall and vintage variation.",
        "Left Bank gravel croupes drain well and radiate heat, suiting Cabernet Sauvignon.",
        "Right Bank clay and limestone suit earlier-ripening Merlot, but frost risk can be higher away from the estuary.",
        "Sauternes and Barsac depend on Ciron morning mists and dry afternoons for noble rot."
      ],
      "Grapes and Styles": [
        "Left Bank blends are Cabernet-led, structured, tannic and age-worthy.",
        "Right Bank blends are Merlot-dominant, often plus Cabernet Franc, softer and fuller-bodied.",
        "Pessac-Leognan can produce premium dry white Sauvignon-Semillon blends.",
        "Sauternes/Barsac are botrytised sweet wines with very low yields and high production costs."
      ],
      "D3 Links": [
        "La place de Bordeaux separates chateaux, courtiers and negociants, helping global distribution.",
        "Classifications build price and reputation but can be rigid or confusing.",
        "Rain at harvest threatens quality and explains vintage price differences.",
        "Sweet Bordeaux faces demand challenges despite high production costs."
      ],
      "Producer Evidence": [
        "Lafite Rothschild or Latour for Left Bank first growth examples.",
        "Petrus or Cheval Blanc for Right Bank prestige.",
        "Haut-Brion or Domaine de Chevalier for Pessac-Leognan.",
        "Yquem, Coutet or Climens for Sauternes/Barsac."
      ]
    }
  },
  {
    title: "Germany",
    tier: "Tier 2",
    why: "Repeatedly tested through Riesling, Pradikatswein, VDP, dry Riesling, climate, law and strengths/weaknesses.",
    prompt: "Hot seat: assess Germany as a wine-producing country. Include law, dry Riesling, climate constraints and commercial position.",
    facts: {
      "Growing Environment": [
        "Cool continental climate at northerly latitude means site selection is critical.",
        "Rivers moderate temperatures and south-facing steep slopes maximise sun exposure.",
        "Mosel slate retains and radiates heat, helping Riesling ripen in a marginal climate.",
        "Pfalz and Baden are warmer, supporting fuller-bodied styles and black grapes."
      ],
      "Grapes and Styles": [
        "Riesling is late-budding and late-ripening, winter-hardy and capable of high acidity at full ripeness.",
        "Styles range from dry Grosses Gewachs to Kabinett, Spatlese, Auslese and Eiswein.",
        "Spatburgunder is increasingly important in Baden, Pfalz and Ahr.",
        "Silvaner is important in Franken and can support regional distinctiveness."
      ],
      "D3 Links": [
        "Pradikat categories are based on must weight, not sweetness or quality, so they can confuse consumers.",
        "VDP addresses quality communication with Gutswein, Ortswein, Erste Lage and Grosse Lage.",
        "Dry Riesling is growing because of food compatibility, climate change and clearer premium positioning.",
        "Weaknesses include complex labelling, small producers, weather risk and inconsistent consumer understanding."
      ],
      "Producer Evidence": [
        "Dr Loosen, JJ Prum or Egon Muller for Mosel.",
        "Donnhoff for Nahe.",
        "Bassermann-Jordan or Muller-Catoir for Pfalz.",
        "Bernhard Huber for Baden Pinot Noir."
      ]
    }
  },
  {
    title: "Tuscany",
    tier: "Tier 1",
    why: "A regular Italy hot spot: Chianti Classico, Brunello, Bolgheri, wine-law evolution and Sangiovese.",
    prompt: "Hot seat: explain how growing environment and wine law shape Chianti Classico and Brunello di Montalcino.",
    facts: {
      "Growing Environment": [
        "Warm Mediterranean climate with inland continental influence.",
        "Altitude moderates summer heat in Chianti and Montalcino.",
        "Galestro and albarese are important in Chianti Classico, with clay and sandy soils also present.",
        "Bolgheri is coastal, warmer and more maritime, supporting Bordeaux varieties."
      ],
      "Grapes and Styles": [
        "Sangiovese is late-ripening, high acid, tannic and sensitive to site.",
        "Chianti Classico must be Sangiovese-led and ranges from fresh annata to more concentrated Gran Selezione.",
        "Brunello is 100 percent Sangiovese and requires extended ageing.",
        "Bolgheri uses Cabernet Sauvignon, Merlot and other international varieties for premium blends."
      ],
      "D3 Links": [
        "DOC, DOCG and IGT evolution allowed both traditional identity and Super Tuscan innovation.",
        "Long ageing requirements can support reputation but increase cash-flow pressure.",
        "Sangiovese needs warmth and site selection to avoid underripe tannins and excessive acidity.",
        "Commercial strength comes from global recognition; weakness includes fragmented categories and premium competition."
      ],
      "Producer Evidence": [
        "Biondi-Santi or Poggio di Sotto for Brunello.",
        "Fontodi or Isole e Olena for Chianti Classico.",
        "Sassicaia, Ornellaia or Masseto for Bolgheri.",
        "Antinori for bridging tradition and international markets."
      ]
    }
  },
  {
    title: "Piedmont",
    tier: "Tier 1",
    why: "Exam favorite for Nebbiolo, Barolo, Barbaresco, Barbera, Dolcetto and DOCG red diversity.",
    prompt: "Hot seat: explain how Piemonte's environment, grape options and winemaking create diverse red DOCG wines.",
    facts: {
      "Growing Environment": [
        "Moderate continental climate with cold winters, hot summers and low summer rainfall.",
        "Alps and Apennines protect the region from northern and Mediterranean weather.",
        "Autumn rain threatens late-ripening Nebbiolo.",
        "Langhe hills, south-facing slopes and calcareous marl are prized for Nebbiolo."
      ],
      "Grapes and Styles": [
        "Nebbiolo is early-budding, late-ripening, high acid, high tannin and pale in colour.",
        "Barolo is generally more powerful; Barbaresco often ripens slightly earlier and can be more approachable.",
        "Barbera gives high-acid, deep-coloured wines with lower tannins.",
        "Dolcetto ripens earlier and gives fruitier, moderate-acid wines for earlier drinking."
      ],
      "D3 Links": [
        "Traditional long maceration and large old botti contrast with modern shorter maceration and smaller oak.",
        "MGA vineyard names support terroir communication but can add complexity.",
        "High prestige supports premium prices but production is limited.",
        "Candidates lose marks by writing only about Nebbiolo and ignoring Barbera and Dolcetto."
      ],
      "Producer Evidence": [
        "Giacomo Conterno or Bartolo Mascarello for traditional Barolo.",
        "Gaja or Elio Altare for modern influence.",
        "Produttori del Barbaresco for cooperative quality.",
        "Vietti for range across Barolo and Barbera."
      ]
    }
  },
  {
    title: "Spain",
    tier: "Tier 2",
    why: "Commonly tested through Rioja, Ribera del Duero, Priorat, Rias Baixas, Rueda and lesser regions.",
    prompt: "Hot seat: compare Rioja, Ribera del Duero, Priorat and Rias Baixas through environment, grapes, style and commercial position.",
    facts: {
      "Growing Environment": [
        "Rioja is continental moderated by Atlantic and Mediterranean influences, with 400-700m altitude.",
        "Ribera del Duero is extreme continental with high altitude, hot days, cold nights and frost risk.",
        "Priorat is hot, dry Mediterranean with poor llicorella slate and very low yields.",
        "Rias Baixas is cool, wet Atlantic with high humidity and granite soils."
      ],
      "Grapes and Styles": [
        "Tempranillo dominates Rioja and Ribera, with Garnacha and other grapes adding blending options.",
        "Priorat uses Garnacha and Carinena for powerful, concentrated reds.",
        "Albarino in Rias Baixas gives aromatic, high-acid whites.",
        "Verdejo in Rueda gives fresh aromatic whites, often stainless steel fermented."
      ],
      "D3 Links": [
        "Rioja age categories aid consumer recognition but can obscure site and grape origin.",
        "New Rioja geographical delimitations try to communicate place more clearly.",
        "Priorat's low yields and dramatic terroir support premium pricing but limit volume.",
        "Rias Baixas humidity makes disease management and canopy ventilation critical."
      ],
      "Producer Evidence": [
        "Lopez de Heredia, La Rioja Alta or Marques de Riscal for Rioja.",
        "Vega Sicilia or Dominio de Pingus for Ribera del Duero.",
        "Alvaro Palacios or Clos Mogador for Priorat.",
        "Pazo de Senorans or Martin Codax for Rias Baixas."
      ]
    }
  },
  {
    title: "South Australia",
    tier: "Tier 1",
    why: "Most frequent New World hot spot: Barossa, Eden, Clare, McLaren Vale and Coonawarra are all fair game.",
    prompt: "Hot seat: compare South Australia's key regions for Shiraz, Riesling, Grenache and Cabernet Sauvignon.",
    facts: {
      "Growing Environment": [
        "Barossa Valley is warm and dry, supporting ripe, full-bodied Shiraz.",
        "Eden Valley has higher altitude and cooler conditions, important for Riesling and elegant Shiraz.",
        "Clare Valley has warm days, cool nights and altitude, preserving Riesling acidity.",
        "Coonawarra's terra rossa over limestone supports Cabernet Sauvignon with moderated vigour."
      ],
      "Grapes and Styles": [
        "Old-vine Shiraz and Grenache are key strengths in Barossa and McLaren Vale.",
        "Clare and Eden Riesling are dry, high acid and usually stainless steel fermented.",
        "Coonawarra Cabernet often shows structure, black fruit and regional mint/eucalyptus notes.",
        "McLaren Vale Grenache increasingly uses old oak, concrete and earlier picking for freshness."
      ],
      "D3 Links": [
        "Irrigation is important in many areas due to low rainfall and drought risk.",
        "Old vines are a commercial asset and quality differentiator.",
        "Large GI names can be strong brands but obscure sub-regional diversity.",
        "Modern Australian premium style often means less new oak, earlier picking and more site expression."
      ],
      "Producer Evidence": [
        "Penfolds, Henschke or Torbreck for Barossa/Eden prestige.",
        "Jim Barry or Grosset for Clare Riesling.",
        "Wynns or Balnaves for Coonawarra Cabernet.",
        "Yangarra or d'Arenberg for McLaren Vale."
      ]
    }
  },
  {
    title: "New Zealand",
    tier: "Tier 2",
    why: "Frequent for Marlborough, Hawke's Bay, Central Otago and export/business angles.",
    prompt: "Hot seat: assess Marlborough or compare Marlborough, Hawke's Bay and Central Otago.",
    facts: {
      "Growing Environment": [
        "Marlborough has high sunshine, cool nights and free-draining alluvial soils; Wairau and Awatere differ.",
        "Hawke's Bay is warmer, with Gimblett Gravels supporting Bordeaux varieties and Syrah.",
        "Central Otago is semi-continental, dry, sunny and frost-prone, with schist-derived soils.",
        "Wind and low fertility often naturally restrict yields in premium Pinot Noir regions."
      ],
      "Grapes and Styles": [
        "Marlborough Sauvignon Blanc is aromatic, high acid and usually stainless steel fermented.",
        "Premium Marlborough styles may use barrel fermentation, lees, wild yeast or skin contact.",
        "Hawke's Bay produces Merlot-Cab blends, Syrah and Chardonnay.",
        "Central Otago focuses on Pinot Noir with ripe fruit, structure and premium pricing."
      ],
      "D3 Links": [
        "Marlborough's strength is global brand recognition; weakness is over-reliance on Sauvignon Blanc.",
        "Machine harvesting can support Sauvignon Blanc thiol precursor release and efficient scale.",
        "Export markets value consistency, but premium diversification is needed.",
        "Small domestic market makes export dependence commercially important."
      ],
      "Producer Evidence": [
        "Cloudy Bay, Brancott or Villa Maria for Marlborough scale and recognition.",
        "Dog Point or Greywacke for premium Marlborough.",
        "Craggy Range or Te Mata for Hawke's Bay.",
        "Felton Road or Mt Difficulty for Central Otago."
      ]
    }
  },
  {
    title: "South Africa",
    tier: "Tier 2",
    why: "Repeatedly examined through strengths/weaknesses, Chenin Blanc, Stellenbosch, Walker Bay and Robertson.",
    prompt: "Hot seat: assess South Africa's strengths and weaknesses as a wine-producing country.",
    facts: {
      "Growing Environment": [
        "Western Cape is Mediterranean but strongly influenced by cold Benguela current and Cape Doctor wind.",
        "Stellenbosch has varied soils and slopes, strong for Cabernet-led blends and Chenin Blanc.",
        "Walker Bay is cooler and maritime, suited to Pinot Noir and Chardonnay.",
        "Robertson is drier and warmer, with limestone in places and irrigation from the Breede River."
      ],
      "Grapes and Styles": [
        "Chenin Blanc is a major strength, from fresh inexpensive to old-vine premium textured styles.",
        "Cabernet Sauvignon and Bordeaux blends are important in Stellenbosch.",
        "Pinotage can be distinctive but may face perception issues.",
        "Syrah and Rhone blends are important in Swartland and other warmer areas."
      ],
      "D3 Links": [
        "Old Vine Project is a strong quality and marketing asset.",
        "Weaknesses include drought, water stress, export price pressure and historical image issues.",
        "Diversity of climates and varieties is a strength but can make consumer messaging complex.",
        "Premium producers have improved reputation, but much export volume remains price-sensitive."
      ],
      "Producer Evidence": [
        "Kanonkop for Stellenbosch and Pinotage.",
        "Mullineux or Sadie Family for Swartland premium reputation.",
        "Hamilton Russell for Walker Bay Pinot Noir and Chardonnay.",
        "DeMorgenzon or Ken Forrester for Chenin Blanc."
      ]
    }
  }
];

const varieties = [
  {
    title: "Riesling",
    prompt: "Outline the characteristics of the Riesling vine, then explain its use in Germany, Alsace and Clare/Eden Valley.",
    facts: {
      "Vine": [
        "Late budding and late ripening, so it needs a long growing season and protected sites in cool regions.",
        "Winter hardy, which helps in Germany and Canada.",
        "High acidity is retained even at high ripeness, enabling dry, sweet and aged styles.",
        "Susceptible to noble rot, which can be positive for sweet wines but risky in wet years."
      ],
      "Regions": [
        "Mosel uses steep slate river slopes for heat retention and high-acid, often lower alcohol wines.",
        "Alsace is dry and sunny in the Vosges rain shadow, giving fuller-bodied dry Riesling.",
        "Clare and Eden Valley use altitude and diurnal range to preserve acidity in dry styles.",
        "Eiswein depends on healthy grapes freezing on the vine, creating tiny yields and high cost."
      ],
      "Exam Traps": [
        "Do not write finished-wine tasting notes instead of vine characteristics.",
        "Explain why the same grape changes style by climate, ripeness, sweetness level and winemaking.",
        "Mention law or categories when relevant: Pradikat, VDP, Grand Cru Alsace.",
        "Add commercial logic: dry Riesling growth, label confusion, premium ageing potential."
      ]
    }
  },
  {
    title: "Pinot Noir",
    prompt: "Why are Burgundy, Central Otago and Mornington Peninsula suited to Pinot Noir?",
    facts: {
      "Vine": [
        "Early budding, so spring frost is a risk.",
        "Early ripening, so it suits cool to moderate climates.",
        "Thin skins mean lower colour and tannin but disease sensitivity.",
        "Mutates easily and is highly site expressive."
      ],
      "Regions": [
        "Burgundy's limestone-clay slopes and continental climate support high-quality, site-specific Pinot.",
        "Central Otago is sunny, dry and continental with cool nights, producing ripe but fresh styles.",
        "Mornington Peninsula is maritime and cool, with premium small-scale production.",
        "Oregon and Marlborough are useful extra examples for global variety questions."
      ],
      "Exam Traps": [
        "Always connect cool climate to acidity, aroma retention and slow flavour development.",
        "Mention frost and disease as viticultural constraints.",
        "Winemaking can include cold soak, whole bunch, gentle extraction and French oak.",
        "Commercially, Pinot Noir can command high prices but is hard to grow and low yielding."
      ]
    }
  },
  {
    title: "Cabernet Sauvignon",
    prompt: "Outline Cabernet Sauvignon and compare Pauillac, Coonawarra, Napa and Colchagua.",
    facts: {
      "Vine": [
        "Late budding and late ripening, needing warmth for full phenolic ripeness.",
        "Small berries and thick skins give deep colour, high tannin and age-worthy structure.",
        "Good disease resistance but can show green pyrazines if underripe.",
        "Often blended with Merlot, Cabernet Franc or other varieties."
      ],
      "Regions": [
        "Pauillac gravel drains and radiates heat, supporting structured Cabernet-led blends.",
        "Coonawarra terra rossa over limestone moderates vigour and supports concentrated fruit.",
        "Napa warmth gives ripe, full-bodied Cabernet with premium reputation.",
        "Chile can offer ripe Cabernet with good value, but site and ripeness management matter."
      ],
      "Exam Traps": [
        "Do not say simply 'warm climate'; explain phenolic ripeness and pyrazine control.",
        "Oak maturation is common but should be tied to structure and premium positioning.",
        "Commercial strength: globally recognised grape name.",
        "Weakness: competition and risk of generic international style."
      ]
    }
  },
  {
    title: "Sangiovese",
    prompt: "Explain why Sangiovese is suited to Tuscany and how it shapes Chianti Classico and Brunello.",
    facts: {
      "Vine": [
        "Late ripening and high acidity require adequate warmth and good exposure.",
        "Thin skins can give moderate colour but firm tannins.",
        "Site and clone selection are important for quality.",
        "Can produce everything from fresh mid-priced wines to long-lived premium reds."
      ],
      "Regions": [
        "Chianti Classico uses altitude and calcareous soils to retain freshness and structure.",
        "Montalcino is warmer and drier, helping full ripeness for Brunello.",
        "Vino Nobile di Montepulciano is another important Tuscan Sangiovese expression.",
        "Coastal Tuscany often uses international varieties, so do not overgeneralise."
      ],
      "Exam Traps": [
        "Tie law to style: Chianti Classico, Riserva, Gran Selezione and Brunello ageing.",
        "Mention commercial recognition of Tuscany and the role of Super Tuscans.",
        "Explain how altitude prevents overripe, flat wines.",
        "Use producer examples to anchor the answer."
      ]
    }
  },
  {
    title: "Chenin Blanc",
    prompt: "Compare Coteaux du Layon and premium South African Chenin Blanc, then add marketplace challenges.",
    facts: {
      "Vine": [
        "High acidity supports dry, sparkling and sweet styles.",
        "Susceptible to noble rot, useful for sweet wines.",
        "Can crop heavily, so yield control is important for concentration.",
        "Old vines can give concentration and texture."
      ],
      "Regions": [
        "Coteaux du Layon uses botrytis or passerillage for sweet, high-acid Chenin.",
        "Savennieres shows dry, structured, age-worthy Chenin.",
        "South Africa uses Chenin for everything from inexpensive fresh wines to premium old-vine examples.",
        "Swartland and Stellenbosch are useful South African references."
      ],
      "Exam Traps": [
        "Marketplace challenge: Chenin lacks the simple consumer recognition of Chardonnay or Sauvignon Blanc.",
        "Sweet Loire wines face declining demand despite high production cost.",
        "Premium South African Chenin benefits from Old Vine Project and value-for-quality.",
        "Always compare production choices and resulting style."
      ]
    }
  }
];

const questions = [
  {
    title: "Italy Strengths and Weaknesses",
    prompt: "Assess Italy's strengths and weaknesses as a wine-producing country. Use regional, grape variety, quality, regulatory and commercial examples.",
    facts: {
      "Strong Answer Must Include": [
        "A balanced structure with strengths and weaknesses, not a country summary.",
        "Regional diversity from Alps to Mediterranean islands and how that supports many styles.",
        "Native varieties as both USP and consumer challenge.",
        "Quality hierarchy and famous DOCG/DOC examples, plus complexity of Italian law."
      ],
      "Commercial Angles": [
        "Strength: globally recognised regions such as Tuscany, Piemonte and Veneto.",
        "Strength: volume plus premium range, from Pinot Grigio and Prosecco adjacency to Barolo and Brunello.",
        "Weakness: fragmentation, complex labels, many local varieties unfamiliar to consumers.",
        "Weakness: competition from simpler varietal-labelled New World wines."
      ],
      "Examples To Use": [
        "Piedmont: Nebbiolo, Barolo, Barbaresco, Barbera, Dolcetto.",
        "Tuscany: Chianti Classico, Brunello, Bolgheri, Super Tuscan evolution.",
        "Veneto: Soave, Valpolicella, Amarone, Recioto.",
        "South: Campania, Sicily, Puglia or Sardinia for native variety and climate contrast."
      ]
    }
  },
  {
    title: "Germany Strengths and Weaknesses",
    prompt: "Assess Germany's strengths and weaknesses as a wine-producing country.",
    facts: {
      "Strong Answer Must Include": [
        "Strengths and weaknesses weighted evenly.",
        "Riesling quality, cool-climate distinctiveness and ageability.",
        "VDP and dry Riesling as quality communication improvements.",
        "Weaknesses from climate risk, label complexity and limited red-wine recognition."
      ],
      "Commercial Angles": [
        "Dry Riesling is increasingly popular with sommeliers and food-led markets.",
        "Sweetness uncertainty can make German labels intimidating.",
        "Small producers and steep vineyards can raise costs.",
        "Climate change is both opportunity for ripeness and threat through extremes."
      ],
      "Examples To Use": [
        "Mosel for steep slate Riesling.",
        "Rheingau and Nahe for premium dry Riesling.",
        "Pfalz and Baden for warmer regions and Spatburgunder.",
        "VDP Grosses Gewachs for dry premium positioning."
      ]
    }
  },
  {
    title: "Chateauneuf-du-Pape vs Hermitage",
    prompt: "Explain how climate, soil, topography and grape growing are responsible for the differences between the red wines of Chateauneuf-du-Pape and Hermitage.",
    facts: {
      "Strong Answer Must Include": [
        "Explicit comparison, not two separate mini essays.",
        "Northern Rhone moderate continental climate versus Southern Rhone warm Mediterranean climate.",
        "Hermitage steep south-facing granite slopes versus Chateauneuf galets roules, clay, limestone and flatter terrain.",
        "Syrah monoculture focus in Hermitage versus Grenache-led blends in Chateauneuf."
      ],
      "Consequences": [
        "Hermitage: structured, concentrated, long-lived Syrah with pepper, black fruit and firm tannins.",
        "Chateauneuf: fuller-bodied, higher alcohol, ripe red fruit/spice, often softer tannin from Grenache-led blends.",
        "Mistral affects both, reducing disease but causing wind stress.",
        "Low yields can result from poor soils, drought, wind and old vines."
      ],
      "Examples To Use": [
        "Hermitage: JL Chave, Chapoutier, Jaboulet.",
        "Chateauneuf-du-Pape: Beaucastel, Vieux Telegraphe, Clos des Papes.",
        "Cote-Rotie or Cornas can be mentioned only if useful contrast is needed.",
        "Do not drift into white wines unless the question asks."
      ]
    }
  },
  {
    title: "Portugal Native Varieties",
    prompt: "Explain how wine producers in Portugal use native grape varieties to produce different styles of wine. What are the benefits and drawbacks of marketing these wines?",
    facts: {
      "Strong Answer Must Include": [
        "Multiple regions and styles, not just Douro reds.",
        "Native varieties linked to climate and wine style.",
        "Benefits and drawbacks of native-variety marketing.",
        "Commercial analysis worth a large share of marks."
      ],
      "Examples To Use": [
        "Vinho Verde: Alvarinho and Loureiro for fresh aromatic whites.",
        "Douro: Touriga Nacional, Touriga Franca, Tinta Roriz and field blends.",
        "Dao: Touriga Nacional, Encruzado and altitude freshness.",
        "Bairrada: Baga for structured reds; Alentejo for warmer-climate blends."
      ],
      "Commercial Angles": [
        "Benefit: distinctiveness and protection from direct Chardonnay/Cabernet comparison.",
        "Benefit: varieties are often adapted to heat, drought and local soils.",
        "Drawback: pronunciation and unfamiliarity can slow consumer adoption.",
        "Drawback: fragmented messaging across many varieties and regions."
      ]
    }
  }
];

const speedPrompts = [
  "Name three Loire Chenin appellations and the style each produces.",
  "Give two reasons Riesling works in the Mosel.",
  "State one strength and one weakness of Marlborough.",
  "Compare Barolo and Barbaresco in two sentences.",
  "Name two soils in Tuscany and why they matter.",
  "Why does Coonawarra suit Cabernet Sauvignon?",
  "Give two marketplace challenges for sweet wines.",
  "Name three native Portuguese varieties and their regions.",
  "What does VDP clarify that Pradikat does not?",
  "Explain llicorella in one Fact-Reason-Consequence chain.",
  "Name three South African regions and a key variety/style for each.",
  "Why is Rias Baixas disease pressure high?",
  "Give two reasons Pinot Noir is difficult to grow.",
  "Name two Burgundy trade structures and why they exist.",
  "Give one climate hazard in Chablis, Mosel and Central Otago."
];

const factSeedRows = `
Bordeaux Left Bank|Dominant soil and grape?|Gravel croupes; Cabernet Sauvignon. Link drainage and heat radiation to phenolic ripeness.
Bordeaux Right Bank|Dominant soil and grape?|Clay and limestone; Merlot, often with Cabernet Franc. Clay water-holding helps Merlot in dry years.
Bordeaux Sauternes|What creates noble rot?|Morning mists from the Ciron meeting the warmer Garonne, followed by dry afternoons.
Bordeaux Entre-Deux-Mers|What is the key dry white identity?|Sauvignon Blanc-led dry whites, often blended with Semillon, from a large area between the Garonne and Dordogne.
Bordeaux Pessac-Leognan|Why is it important for white wine?|It can produce premium barrel-fermented Sauvignon-Semillon blends with texture, oak complexity and ageing potential.
Bordeaux La Place|Who are the three key players?|Chateaux, courtiers and negociants. The system supports global distribution and en primeur sales.
Bordeaux 1855 Classification|What is the exam-useful commercial point?|It reinforces prestige and price, but it is rigid and does not always reflect current quality.
Chablis|Key soil and hazard?|Kimmeridgian limestone-clay; spring frost is the major hazard.
Chablis Grand Cru|Why do south-facing slopes matter?|They maximise sunshine in a cool continental climate, helping Chardonnay ripen while retaining high acidity.
Cote d'Or|Best slope position?|East-facing mid-slope sites around 200-400m, balancing drainage, exposure and protection.
Cote Chalonnaise|Why can quality be less consistent than Cote d'Or?|Sites are less consistently south or east facing and the climate can be cooler, making ripening less reliable.
Maconnais|Why is ripening more reliable than further north?|It is warmer and drier than the Cote d'Or, supporting riper Chardonnay styles.
Burgundy Hierarchy|What does the AOC hierarchy communicate?|Regional, village, premier cru and grand cru levels communicate increasingly specific place and generally higher quality potential.
Burgundy Trade|Why are negociants important?|Fragmented vineyard ownership means many growers have tiny holdings; negociants can buy grapes or wine and build volume.
Beaujolais Crus|Key soil and grape?|Granite, schist and sandy soils in the north; Gamay.
Beaujolais Winemaking|What does carbonic maceration contribute?|It produces fruity, low-tannin wines with aromas such as banana or kirsch, especially for early-drinking styles.
Alsace Climate|Why is Alsace dry?|The Vosges rain shadow plus foehn effects create dry, sunny conditions with about 600mm rainfall.
Alsace Grand Cru|Key exam risk?|Do not only list noble varieties; explain how site, ripeness and sweetness create style variation.
Alsace Noble Varieties|Name the four noble varieties.|Riesling, Gewurztraminer, Pinot Gris and Muscat.
Alsace Vineyard Management|Why can drought matter?|Alsace is dry and irrigation is restricted for AOC wines, so drought can reduce yields or stress vines.
Pays Nantais|Climate?|Cool maritime with Atlantic rain; frost and rain at flowering or harvest are key risks.
Muscadet|Grape and technique?|Melon Blanc; sur lie ageing adds texture to light, high-acid wines.
Muscadet Crus Communaux|What is the quality message?|Lower yields and longer lees ageing produce more concentrated, textured and age-worthy Muscadet.
Vouvray|Grape and style range?|Chenin Blanc; dry, off-dry, sweet and sparkling.
Savennieres|What style should you remember?|Dry, structured, age-worthy Chenin Blanc, often fuller and more intense than basic Anjou whites.
Coteaux du Layon|Production logic?|Sweet Chenin Blanc from botrytis and/or passerillage, balanced by Chenin's high acidity.
Chinon|Grape and style?|Cabernet Franc; fresh to structured reds depending on site warmth and soil.
Saumur-Champigny|Grape and style?|Cabernet Franc reds, often lighter and more aromatic than many warmer-climate reds.
Central Loire|Three soils?|Silex or flint, terres blanches, and caillottes.
Sancerre|Main grape and climate?|Sauvignon Blanc in a continental climate with spring frost risk.
Pouilly-Fume|What distinguishes the name?|Sauvignon Blanc from across the Loire from Sancerre; often associated with flinty or smoky notes.
Northern Rhone|Climate and soil?|Moderate continental climate; steep granite slopes for Syrah.
Cote-Rotie|What is distinctive about varieties?|Syrah can be co-fermented with a small proportion of Viognier, adding aroma and texture.
Hermitage|Why are the reds powerful?|Steep south-facing granite slopes and low yields help produce concentrated, age-worthy Syrah.
Crozes-Hermitage|Why is quality variable?|It is the largest Northern Rhone appellation, including flatter and more productive sites.
Condrieu|Grape and commercial issue?|Viognier; low yields and limited area support high prices, but wines are best known in specialist markets.
Southern Rhone|Climate and grape logic?|Warm Mediterranean conditions suit Grenache, which tolerates heat and drought.
Chateauneuf-du-Pape|Famous stones?|Galets roules absorb and radiate heat, aiding ripening.
Chateauneuf-du-Pape|Blend logic?|Grenache usually gives alcohol and red fruit; Syrah and Mourvedre add colour, tannin and structure.
Cotes du Rhone|Commercial role?|Large-volume appellation supplying accessible, often Grenache-led wines with broad consumer recognition.
Tavel|What is it known for?|Full-bodied, deeply coloured dry rose from the Southern Rhone.
Languedoc|Commercial angle?|Large volume and Pays d'Oc flexibility, but premium AOC identity can be fragmented.
Pays d'Oc IGP|Why is it commercially useful?|It allows varietal labelling and higher flexibility, helping compete with New World styles.
Roussillon|Why are yields often low?|Warm, dry, windy conditions plus poor soils and old vines can reduce yields.
Provence Rose|Commercial strength?|Strong global rose image, pale colour expectations and tourism-driven premium positioning.
Bandol|Key grape and style?|Mourvedre-led structured reds and serious roses in a warm Mediterranean climate.
Cahors|Key grape and climate logic?|Malbec; warmer and drier than Bordeaux, producing structured, dark-fruited reds.
Madiran|Key grape?|Tannat, producing deeply coloured, high-tannin wines often softened by blending or oxygen management.
Jurancon|Key grapes?|Petit Manseng and Gros Manseng for dry and sweet wines.
Jurancon Sweet|Why can grapes stay healthy late?|Warm sunny summers, dry autumns and cool nights in the Pyrenean foothills support late harvesting.
Jura|Climate hazard?|Cool continental with high rainfall; frost, hail and fungal disease risks.
Vin Jaune|Key winemaking point?|Savagnin aged under a flor-like voile in barrel, producing oxidative nutty styles.
Mosel|Why slate?|Slate retains and radiates heat and improves drainage on steep slopes in a marginal climate.
Mosel|Why steep slopes?|They maximise sunlight interception and reduce frost risk near the river.
Rheingau|What is the key Riesling site logic?|South-facing slopes along the Rhine gain sunlight and river moderation.
Pfalz|Why fuller-bodied German wines?|It is warmer and drier than many German regions due to shelter from the Haardt Mountains.
Baden|German climate role?|Warmest German region; important for Spatburgunder.
Franken|What grape should you remember?|Silvaner, often associated with dry wines and the Bocksbeutel bottle.
Nahe|Why is it high quality?|Sheltered river valleys and diverse soils allow a wide range of expressive Riesling styles.
VDP|What does it clarify?|A site and quality hierarchy, especially for dry wines, that Pradikat alone does not clearly show.
Pradikat|What is the weakness?|It is based on must weight, not final sweetness or site quality, so consumers can be confused.
Grosses Gewachs|What does GG mean?|A dry wine from a VDP Grosse Lage site, positioned as a top dry wine.
Austria Wachau|What are the local categories?|Steinfeder, Federspiel and Smaragd indicate increasing ripeness/body in Wachau dry wines.
Wachau/Kamptal/Kremstal|Climate driver?|Cool Alpine air plus warmer Pannonian influence creates diurnal range.
Kamptal|Key grape and style?|Gruner Veltliner and Riesling, often dry with freshness from diurnal range.
Burgenland|Key influence?|Warm Pannonian climate and Neusiedlersee humidity for botrytis.
Burgenland Reds|Key black grape?|Blaufrankisch, giving high-acid, medium to full-bodied reds with dark fruit and spice.
Steiermark|Climate hazard?|Hail and frost risks in a cool, hilly region with some Adriatic influence.
Tokaj|Botrytis setup?|Tisza and Bodrog rivers create autumn mists; dry autumns allow noble rot development.
Tokaji Aszu|Basic production principle?|Botrytised aszu berries are macerated with base wine or must, then aged to produce sweet, high-acid wines.
Tokaji Szamorodni|What does it use?|Whole bunches containing a mix of healthy and botrytised grapes, producing dry or sweet styles.
Tokaji Eszencia|Why is it rare?|It is free-run syrup from aszu berries, extremely sweet, very low alcohol and tiny in volume.
Furmint|Why is it useful in Tokaj?|High acidity, thin skins and susceptibility to botrytis make it suitable for both dry and sweet wines.
Greece Overall|Quality climate modifier?|Altitude and maritime influence moderate heat in an otherwise warm Mediterranean country.
Santorini|Training system?|Kouloura basket-trained vines protect from wind and conserve moisture.
Santorini|Soil and phylloxera point?|Volcanic soils and low organic matter mean many vines are ungrafted and very old.
Assyrtiko|Why is it valuable?|It retains high acidity in hot, dry conditions, making it distinctive for Santorini whites.
Naoussa|Grape?|Xinomavro; structured, high-acid, tannic reds.
Xinomavro|What is the style issue?|High tannin and acidity can be challenging young but supports ageing potential.
Piemonte|Nebbiolo issue?|Early budding and late ripening; needs warm, well-exposed slopes and risks autumn rain.
Barolo|Why long ageing?|Nebbiolo's high tannin and acidity need time to soften and integrate.
Barbaresco|How does it compare with Barolo?|Often slightly earlier-ripening and more approachable, though still structured and age-worthy.
Barbera|Structural profile?|High acidity, deep colour, lower tannin than Nebbiolo.
Nizza|Why mention it?|It is a premium Barbera DOCG showing efforts to elevate Barbera quality and identity.
Dolcetto|Why useful?|Earlier ripening; fruity, moderate-acid reds for earlier drinking.
Gavi|Grape and style?|Cortese; dry, high-acid whites from Piemonte.
Valpolicella|Appassimento styles?|Amarone is dry and full-bodied; Recioto is sweet.
Amarone|Commercial quality issue?|Growing popularity increased production, creating concern about quality variation and brand dilution.
Soave|Grape and site quality?|Garganega; Classico hillside volcanic soils tend to give better quality than fertile plains.
Soave Superiore|Why is it relevant?|It has stricter yields and can signal higher quality, but consumer recognition may be limited.
Pinot Grigio delle Venezie|Commercial role?|Large-volume, easy-drinking white with strong export recognition.
Friuli|What is ponca?|Layered marl and sandstone in hillside zones such as Collio and Colli Orientali, linked to quality whites.
Trentino-Alto Adige|Climate driver?|Alpine slopes, altitude and diurnal range support aromatic whites and precise reds.
Chianti Classico|Two soils?|Galestro and albarese.
Chianti Classico|What does Gran Selezione signal?|A top category with stricter rules and estate-grown fruit, aimed at premium positioning.
Brunello|Grape?|100 percent Sangiovese.
Brunello|Commercial drawback of long ageing?|It ties up capital before release, raising producer costs.
Bolgheri|Grape logic?|Coastal warmth suits Bordeaux varieties such as Cabernet Sauvignon and Merlot.
Super Tuscans|Why did they matter?|They used IGT flexibility and international varieties to bypass restrictive DOC/DOCG rules and build premium brands.
Marche|Key white grape?|Verdicchio, especially in Verdicchio dei Castelli di Jesi and Verdicchio di Matelica.
Abruzzo|Key red grape and training?|Montepulciano; pergola has been traditional but can be high yielding.
Campania|DOCG grapes?|Fiano, Greco and Aglianico are key.
Taurasi|Key grape and style?|Aglianico; structured, tannic, age-worthy red from Campania.
Basilicata|Key appellation?|Aglianico del Vulture, with volcanic soils around Monte Vulture.
Puglia|Commercial identity?|Warm, productive south; Primitivo and Negroamaro can range from bulk to premium.
Etna|Why quality potential?|Altitude and volcanic soils moderate Sicily's heat and create freshness.
Cerasuolo di Vittoria|Why remember it?|Sicily's DOCG, based on Nero d'Avola and Frappato.
Sardinia|Key white grape?|Vermentino, especially Vermentino di Gallura DOCG.
Rioja|Climate zones?|Rioja Alta and Alavesa are cooler Atlantic-influenced; Rioja Oriental is warmer and more Mediterranean.
Rioja Ageing Terms|Commercial advantage?|Crianza, Reserva and Gran Reserva are widely recognised and help consumers navigate style and price.
Rioja New Geography|Why was it introduced?|Vino de Zona, Municipio and Vinedo Singular aim to communicate place more clearly than ageing terms alone.
Ribera del Duero|Altitude effect?|High altitude and diurnal range preserve acidity while daytime heat ripens Tempranillo.
Ribera del Duero|Main hazard?|Spring frost and short growing season are major risks on the high plateau.
Priorat|Soil?|Llicorella slate; poor, draining, deep-rooting and low-yielding.
Priorat|Commercial issue?|Very low yields support high prices but limit volume and affordability.
Rias Baixas|Climate and training?|Cool wet Atlantic; pergola training improves airflow.
Rias Baixas|Main grape?|Albarino, giving aromatic, high-acid whites.
Rueda|Grape/style?|Verdejo; fresh aromatic whites, often stainless steel fermented.
Bierzo|Key grape and geography?|Mencia in a transitional climate between Atlantic Galicia and continental Castilla y Leon.
Toro|Why powerful reds?|Hot, dry continental climate and old vine Tinta de Toro can produce concentrated, high-alcohol wines.
Jumilla|Key grape and climate?|Monastrell in hot, dry south-eastern Spain with drought pressure.
Navarra Rose|Why commercially relevant?|Garnacha-based rose has history but competes against Provence's stronger premium image.
La Mancha|Commercial role?|Huge, dry, mechanisable region producing large volumes, often at lower price points.
Vinho Verde|Climate and risk?|Cool maritime, high rainfall and humidity; fungal disease pressure.
Vinho Verde Alvarinho|Why Moncao e Melgaco?|Warmer, drier inland conditions give riper, fuller Alvarinho than the coastal zones.
Douro|Soil and climate?|Schist, steep terraces, hot dry summers; drought and erosion risks.
Douro Table Wine|Why has it grown?|Port expertise, old vines and native varieties have been redirected into dry premium reds and whites.
Dao|Why freshness?|Altitude and mountain shelter moderate continental conditions.
Bairrada|Grape and soil?|Baga on heavy clay; structured reds with high acidity and tannin.
Alentejo|Climate and commercial role?|Hot, dry Mediterranean climate; produces ripe accessible reds but faces drought and heat risk.
Lisboa|Climate influence?|Strong Atlantic influence creates cooler, humid conditions near the coast.
Portuguese Native Varieties|Marketing benefit?|They create distinctiveness and avoid direct comparison with Chardonnay, Cabernet or Merlot.
Portuguese Native Varieties|Marketing drawback?|Unfamiliar names can be hard to pronounce and difficult for consumers to remember.
California|Main climate driver?|Cold Pacific, fog, coastal breezes and mountain gaps matter more than latitude alone.
Russian River Valley|Why Chardonnay and Pinot?|Fog and cool Pacific influence moderate temperatures, preserving acidity and aromatic freshness.
Sonoma Coast|What is the hazard?|Cold wind and fog can reduce sunshine and fruit set, lowering yields.
Napa|Commercial strength?|Premium Cabernet reputation and strong direct-to-consumer and cellar-door pricing.
Napa|Current challenge?|High land and grape costs, drought, wildfire and smoke taint risk.
Central Valley California|Commercial role?|Hot, fertile, irrigated region for high-volume inexpensive wines.
Lodi|Why is old vine Zinfandel relevant?|Old vines can produce concentrated fruit and support a premium story within a warm region.
Paso Robles|Climate feature?|Warm days and large diurnal range; useful for Cabernet, Zinfandel and Rhone varieties.
Oregon|Key grape/hazard?|Pinot Noir; marginal climate, rain and vintage variation.
Willamette Valley|Why Pinot Noir?|Cool climate, volcanic and sedimentary soils, and premium small-producer focus suit Pinot Noir.
Washington|Irrigation logic?|Dry Columbia Valley needs irrigation; low disease pressure and high diurnal range aid quality.
Washington|Why are tannins ripe?|Hot sunny days help ripen black grapes, while cool nights preserve acidity.
New York Finger Lakes|Why Riesling?|Cool climate and lake moderation support high-acid aromatic whites.
Niagara|Icewine logic?|Grapes freeze on vine, concentrating sugars and acids; tiny yields make it expensive.
British Columbia Okanagan|Why diverse styles?|A long valley with varied latitude, altitude and lake effects supports many grapes.
VQA Canada|What is the purpose?|It guarantees origin and production standards for Canadian quality wines.
Chile|Climate drivers?|Pacific, Andes, latitude and altitude; Humboldt Current cools coastal zones.
Chile Coastal Regions|Why Sauvignon and Pinot?|Cool ocean influence helps preserve acidity and aromatics in regions like Casablanca and San Antonio.
Chile Central Valley|Why Cabernet and Carmenere?|Warmer inland conditions can ripen later black grapes, though Carmenere needs full ripeness to avoid greenness.
Chile Itata|Why exam-relevant?|Old vines, dry farming and heritage varieties such as Pais offer a distinctive alternative to international styles.
Argentina|Altitude effect?|High UV and diurnal range give colour, tannin ripeness and acidity in Malbec.
Mendoza|Main water issue?|Irrigation from Andean snowmelt is essential, but water scarcity is a growing concern.
Uco Valley|Why premium?|High altitude, intense sunlight and cool nights support concentrated but fresh Malbec and Chardonnay.
Salta|Why extreme?|Very high altitude vineyards create intense sunlight, cool nights and aromatic Torrontes.
Patagonia|Why cooler styles?|Southerly latitude and wind give cooler conditions for Pinot Noir, Chardonnay and elegant reds.
South Africa Overall|Main climate moderator?|The cold Benguela Current and Cape Doctor wind cool and ventilate Western Cape vineyards.
Stellenbosch|Key styles?|Cabernet/Bordeaux blends, Chenin Blanc and increasingly premium reds.
Stellenbosch|Why site diversity?|Mountains, slopes, aspects and varied soils create many mesoclimates and quality levels.
Walker Bay|Why Pinot/Chardonnay?|Cool maritime influence makes it suitable for Burgundian varieties.
Robertson|Why irrigation?|Warm, dry conditions require irrigation from the Breede River for reliable production.
Swartland|Why old vines matter?|Old dry-farmed bush vines can produce concentrated fruit and support premium Chenin and Rhone-style blends.
South Africa Old Vine Project|Commercial value?|It gives a quality story and differentiates premium old-vine wines.
Pinotage|Commercial challenge?|It is distinctive to South Africa but can suffer from negative consumer perceptions if poorly made.
Barossa|Signature asset?|Old-vine Shiraz and Grenache in warm dry conditions.
Eden Valley|Why Riesling?|Higher altitude and cooler conditions preserve acidity in dry Riesling.
Clare Valley|Riesling style cause?|Altitude and diurnal range preserve acidity in dry Riesling.
McLaren Vale|Why Grenache?|Old bush vines, warm climate and modern lighter extraction support fresh premium Grenache.
Coonawarra|Soil?|Terra rossa over limestone, important for Cabernet Sauvignon.
Margaret River|Key styles?|Cabernet Sauvignon, Chardonnay and Sauvignon/Semillon blends.
Margaret River|Why maritime moderation?|Indian Ocean influence reduces heat extremes and supports consistent premium quality.
Great Southern|Why diverse?|Large region with varied altitude, distance from ocean and sub-regional climates.
Hunter Valley Semillon|Why distinctive?|Early-picked, low-alcohol, high-acid Semillon is unoaked and gains toast/honey complexity with bottle age.
Tasmania|Commercial role?|Cool climate, small volume and premium positioning; important for Pinot Noir, Chardonnay and sparkling base.
Marlborough|Commercial weakness?|Over-reliance on Sauvignon Blanc and risk of commoditisation.
Marlborough Sauvignon|Why machine harvest can help?|Machine harvesting can increase thiol precursor extraction, supporting pungent aromatic style.
Awatere Valley|How does it differ from Wairau?|It is cooler, windier and often gives more herbaceous, high-acid Sauvignon Blanc.
Hawke's Bay|Gimblett Gravels?|Free-draining gravel soils suited to Bordeaux varieties and Syrah.
Central Otago|Pinot Noir conditions?|Dry, sunny, semi-continental, frost-prone, with schist-derived soils.
Martinborough|Why premium Pinot?|Low yields from wind and free-draining soils support concentrated Pinot Noir.
Nelson|Why small-scale quality?|Moutere Hills clay can support dry farming, while Waimea Plains are more free-draining and need irrigation.
Canterbury/Waipara|Why Riesling and Pinot?|Dry, cool climate and limestone/clay soils in parts support aromatic whites and Pinot Noir.
Gisborne|Commercial challenge?|Fertile floodplains can give high yields; competition from other crops has reduced vineyard area.
Riesling|Key vine traits?|Late budding, late ripening, winter hardy, high acidity and strong site expression.
Cabernet Sauvignon|Key vine traits?|Late budding and late ripening, thick skins, high tannin and risk of green pyrazines if underripe.
Pinot Noir|Key vine traits?|Early budding, early ripening, thin skins, disease sensitive and highly site expressive.
Chardonnay|Why globally flexible?|It adapts to many climates and winemaking choices, from stainless steel to barrel fermentation and MLF.
Sauvignon Blanc|Why aromatic?|Methoxypyrazines and thiols can give herbaceous, citrus and tropical notes depending on climate and handling.
Chenin Blanc|Why versatile?|High acidity, botrytis susceptibility and yield sensitivity allow dry, sweet and sparkling styles.
Grenache|Key vine traits?|Late budding, late ripening, drought tolerant, high sugar, lower colour and prone to oxidation.
Syrah/Shiraz|Climate expression?|Cooler sites give pepper and fresher fruit; warmer sites give fuller body, riper fruit and higher alcohol.
Merlot|Why Right Bank?|Earlier ripening and affinity for cooler clay soils make it suitable for Saint-Emilion and Pomerol.
Nebbiolo|Why pale but tannic?|Thin skins give pale colour, but phenolics create high tannin and structure.
Sangiovese|Key challenge?|Late ripening with high acidity and tannin, requiring warm sites and careful ripeness.
Tempranillo|Why oak common?|Moderate aromatics and structure work well with American or French oak, especially in Rioja.
Malbec|Argentina advantage?|Altitude helps preserve acidity and develop colour/tannin without excessive heat flattening the wine.
Carmenere|Ripeness issue?|It ripens late and can taste green if underripe, so warm sites and canopy management matter.
Zinfandel|California risk?|Uneven ripening can create raisins and green berries in the same bunch.
Torrontes|Argentina style?|Highly aromatic white, especially in Salta, usually made protectively to preserve perfume.
Assyrtiko|Hot-climate value?|It retains acidity in heat and drought, making it valuable for Santorini.
Furmint|Tokaj role?|High acidity and botrytis susceptibility make it central to sweet Tokaji and dry wines.
Albarino|Rias Baixas fit?|Thick skins and high acidity suit a humid Atlantic region but disease control is still vital.
Verdejo|Rueda style?|Aromatic, fresh, sometimes with subtle bitterness; often stainless steel fermented.
Touriga Nacional|Portugal role?|High colour, tannin and perfume; important in Douro and Dao blends.
Baga|Bairrada role?|High acid and tannin, late ripening, producing structured reds when managed well.
Encruzado|Portugal white role?|Dao white grape capable of structured, age-worthy wines.
Tannat|Madiran style?|Deep colour, high tannin and high structure, often softened by blending or oxygen.
Petit Manseng|Sweet wine role?|Thick skins and high acidity allow late harvesting for Jurancon sweet wines.
Garganega|Soave role?|Late ripening and high acidity support fresh to textured whites, especially from hillside sites.
Aglianico|Southern Italy role?|Late ripening, high acid and tannin, producing structured age-worthy reds.
Nero d'Avola|Sicily role?|Ripe black-fruited reds in warm Mediterranean conditions.
Vermentino|Sardinia role?|Fresh, citrus and saline whites; Vermentino di Gallura DOCG is the premium reference.
Wine Law|Why yields matter?|Lower maximum yields can support concentration and premium positioning, though actual yield matters too.
Commercial Sections|What do examiners punish?|Ignoring marketplace parts that carry 20-40 percent of marks.
Compare Questions|Main failure mode?|Writing separate descriptions without explicit similarities and differences.
Assess Questions|Main failure mode?|Listing facts without weighing significance as strengths or weaknesses.
Explain Questions|Main requirement?|Show how and why; link cause to outcome.
Producer Examples|Why include them?|They prove real-world knowledge and make broad claims credible.
Fact Reason Consequence|What is the golden rule?|A fact earns more when linked to a reason and a consequence for style, quality, cost or market.
Sweet Wines|Commercial challenge?|High production costs and low yields often meet limited or declining consumer demand.
Climate Change|How can it be double-edged?|It can improve ripening in cool regions but increase drought, heat, frost timing and style shifts.
Old Vines|Why commercially useful?|They can signal heritage, lower yields and concentration, supporting premium positioning.
Irrigation|New World exam angle?|It can manage water stress and yields but raises sustainability and water-rights questions.
Organic Viticulture|Where easier?|Dry, windy regions with low disease pressure, such as parts of Central Otago or Swartland, can be easier.
Maritime Climate|Common consequence?|Moderated temperatures but often higher rainfall, humidity and disease pressure.
Continental Climate|Common consequence?|Greater seasonal extremes, frost risk, warmer summers and colder winters.
Mediterranean Climate|Common consequence?|Warm dry summers reduce disease but increase drought and heat stress risk.
Altitude|Common consequence?|Cooler temperatures, higher UV and diurnal range can preserve acidity and aid phenolic ripeness.
Diurnal Range|Why it matters?|Warm days ripen grapes while cool nights preserve acidity and aromatics.
Free-draining Soils|Why they matter?|They reduce vigour and waterlogging, often helping concentration and root depth.
Clay Soils|Why they matter?|They retain water and can suit varieties like Merlot in dry periods.
Limestone Soils|Exam-safe point?|Often associated with drainage, water regulation and high-quality sites, but always link to local context.
Schist/Slate Soils|Common exam link?|Poor, heat-retaining and free-draining soils can reduce vigour and support concentration.
Gravel Soils|Common exam link?|Drainage and heat radiation help late-ripening black grapes ripen fully.
Volcanic Soils|Where to use?|Etna, Santorini, Tokaj and parts of Soave or Basilicata; link to drainage, low fertility or distinctive site identity.
Pergola Training|Where useful?|Rias Baixas, Vinho Verde and parts of Italy; improves airflow or manages vigour/shade.
Bush Vines|Where useful?|Warm dry regions; low-trained vines can protect from wind and drought, often with old vines.
Machine Harvesting|When useful?|Flat high-volume regions and Marlborough Sauvignon Blanc, where speed and aroma precursor extraction can help.
Hand Harvesting|When necessary?|Steep slopes, selective picking for botrytis, fragile fruit or premium sorting.
Oak Maturation|Exam rule?|Name vessel size, new/old oak and duration when possible; generic "some oak" is weak.
Lees Ageing|What does it add?|Texture, body and sometimes bready complexity, useful for Muscadet, Chardonnay and sparkling bases.
MLF|What does it do?|Converts malic to lactic acid, softening acidity and adding buttery/creamy notes where desired.
Whole Bunch|Where relevant?|Pinot Noir and Syrah; can add aroma, freshness and tannic structure if stems are ripe.
Carbonic Maceration|Where relevant?|Beaujolais and some fresh reds; creates fruity low-tannin styles.
Botrytis|Quality condition?|Needs humid mornings for infection and dry afternoons to prevent grey rot.
Passerillage|What is it?|Grapes dry/shrivel on the vine, concentrating sugars and acids without necessarily relying on botrytis.
Appassimento|What is it?|Drying harvested grapes before fermentation, concentrating sugars, flavours and potential alcohol.
Flaw in Answers|Generic winemaking?|Examiners penalise generic red/white winemaking not tied to region or style.
Weightings|Why important?|A 30 percent business section deserves real space; over-writing the easy part loses marks.
Conclusion|When needed?|Assess questions benefit from a conclusion that weighs the balance, not a summary.
`;

const factCardSeeds = factSeedRows
  .trim()
  .split("\n")
  .map(row => row.split("|"));

const factCards = buildFactCards(factCardSeeds).slice(0, 500);

function buildFactCards(seeds) {
  const variants = [
    seed => seed,
    ([title, , answer]) => [title, "Why does this matter for D3?", `${answer} Use it to explain style, quality, cost, risk or market position.`],
    ([title, prompt, answer]) => [title, `Correct the blank: ${prompt.replace("?", "")} -> ?`, answer],
    ([title, , answer]) => [title, "Build one Fact -> Reason -> Consequence chain.", `${answer} Make the consequence explicit in the final clause.`]
  ];
  return seeds.flatMap(seed => variants.map(makeCard => makeCard(seed)));
}

const recallCards = [
  {
    title: "Pays Nantais",
    region: "Loire Valley",
    field: "Climate",
    prompt: "Pays Nantais: what is the climate, and what are the main hazards?",
    answer: "Cool maritime, strongly influenced by the Atlantic. Key hazards include spring frost and rain during flowering and harvest.",
    examinerLink: "This explains why Muscadet is light-bodied and high acid, and why disease pressure and yield/quality variation matter commercially."
  },
  {
    title: "Pays Nantais",
    region: "Loire Valley",
    field: "Soil and Site",
    prompt: "Pays Nantais / Muscadet: what soil or site detail would you use in an exam answer?",
    answer: "Predominantly well-drained soils, with important local rocks including granite, gneiss and schist in named crus communaux.",
    examinerLink: "Do not just name rocks: link free drainage and low fertility to more concentrated Melon Blanc, especially for higher-quality cru wines."
  },
  {
    title: "Muscadet Sevre et Maine",
    region: "Loire Valley",
    field: "Winemaking",
    prompt: "Muscadet Sevre et Maine sur lie: what is the key winemaking technique and why does it matter?",
    answer: "Sur lie ageing: wine remains on fine lees over winter and is bottled from lees, adding texture, slight creaminess and sometimes subtle breadiness.",
    examinerLink: "The consequence is crucial: it gives body and interest to a naturally neutral, high-acid, light-bodied Melon Blanc wine."
  },
  {
    title: "Coteaux du Layon",
    region: "Loire Valley",
    field: "Production",
    prompt: "Coteaux du Layon: what are the grape, style and production logic?",
    answer: "Chenin Blanc sweet wine, often using botrytis and/or passerillage, enabled by autumn mists and dry periods along the Layon tributary.",
    examinerLink: "High acidity balances sweetness; selective picking and low yields raise cost, while sweet-wine demand is a marketplace challenge."
  },
  {
    title: "Chinon / Bourgueil",
    region: "Loire Valley",
    field: "Grape and Style",
    prompt: "Chinon or Bourgueil: main grape, style range, and one climate/soil link?",
    answer: "Cabernet Franc. Styles range from light, fresh, early-drinking reds to more structured wines from warmer slopes and better-drained tuffeau or gravel sites.",
    examinerLink: "Link site warmth and drainage to riper Cabernet Franc, lower green character and greater structure."
  },
  {
    title: "Sancerre / Pouilly-Fume",
    region: "Loire Valley",
    field: "Soil",
    prompt: "Central Vineyards: name the three classic soil types and what they can contribute.",
    answer: "Silex/flint, terres blanches clay-limestone, and caillottes/stony limestone. They are used to explain stylistic variation in Sauvignon Blanc.",
    examinerLink: "Specific soil examples lift an answer above generic Sauvignon Blanc notes; connect them to drainage, ripeness, structure or aromatic expression."
  },
  {
    title: "Loire Valley",
    region: "Loire Valley",
    field: "Producer Evidence",
    prompt: "Loire producer check: name one producer each for Vouvray, Sancerre and Chinon.",
    answer: "Examples: Domaine Huet for Vouvray, Alphonse Mellot or Vacheron for Sancerre, and Charles Joguet or Bernard Baudry for Chinon.",
    examinerLink: "Producer names are not decoration; they prove real-world command and help anchor broad regional answers."
  },
  {
    title: "Barolo",
    region: "Piedmont",
    field: "Grape",
    prompt: "Barolo: what are the key vine characteristics of Nebbiolo?",
    answer: "Early budding, late ripening, high acidity, high tannin, pale colour, site-sensitive and vulnerable to autumn rain.",
    examinerLink: "These traits explain the need for warm south-facing Langhe slopes and the long-lived, structured style."
  },
  {
    title: "Langhe",
    region: "Piedmont",
    field: "Soil and Site",
    prompt: "Langhe Nebbiolo sites: what slope and soil details should you recall?",
    answer: "Hilly sites with prized south-facing exposures; calcareous marl, clay, sand and limestone are important, with Langhe calcareous marl especially associated with Nebbiolo.",
    examinerLink: "The exam point is not geology trivia: exposure and marl help Nebbiolo achieve full ripeness while retaining structure and acidity."
  },
  {
    title: "Chianti Classico",
    region: "Tuscany",
    field: "Soil",
    prompt: "Chianti Classico: name two important soils and why they matter.",
    answer: "Galestro, a friable schistous marl, and albarese, a limestone-rich soil. They are associated with drainage, lower vigour and structured Sangiovese.",
    examinerLink: "Tie low fertility and drainage to concentration, tannin, acidity and premium positioning."
  },
  {
    title: "Brunello di Montalcino",
    region: "Tuscany",
    field: "Law and Style",
    prompt: "Brunello: what grape and legal/style facts are essential?",
    answer: "100 percent Sangiovese. It requires extended ageing before release and produces structured, age-worthy premium red wines.",
    examinerLink: "Long ageing supports reputation and price but creates cash-flow and stock-holding costs for producers."
  },
  {
    title: "Tuscany",
    region: "Tuscany",
    field: "Producer Evidence",
    prompt: "Tuscany producer check: give one producer for Brunello, Chianti Classico and Bolgheri.",
    answer: "Examples: Biondi-Santi or Poggio di Sotto for Brunello, Fontodi or Isole e Olena for Chianti Classico, and Sassicaia or Ornellaia for Bolgheri.",
    examinerLink: "This lets you make a generic Tuscany point exam-specific: tradition, appellation identity and international-market premium brands."
  },
  {
    title: "Mosel",
    region: "Germany",
    field: "Climate and Site",
    prompt: "Mosel Riesling: why do steep slate slopes matter?",
    answer: "The Mosel is cool continental and marginal; steep south-facing slate slopes maximise sunlight, improve drainage and retain/radiate heat.",
    examinerLink: "This is the direct cause of Riesling ripeness at low potential alcohol while retaining very high acidity."
  },
  {
    title: "VDP",
    region: "Germany",
    field: "Wine Law",
    prompt: "VDP: what problem does it try to solve?",
    answer: "It gives a clearer quality/site hierarchy, including Gutswein, Ortswein, Erste Lage and Grosse Lage/Grosses Gewachs, especially for dry wines.",
    examinerLink: "It helps address consumer confusion caused by Pradikat terms being based on must weight rather than finished sweetness or site quality."
  },
  {
    title: "Germany",
    region: "Germany",
    field: "Producer Evidence",
    prompt: "Germany producer check: name one Mosel producer, one Nahe producer and one Baden/Pfalz producer.",
    answer: "Examples: Dr Loosen, JJ Prum or Egon Muller for Mosel; Donnhoff for Nahe; Bassermann-Jordan or Muller-Catoir for Pfalz; Bernhard Huber for Baden.",
    examinerLink: "Producer evidence helps turn a strengths/weaknesses answer from abstract to credible."
  },
  {
    title: "Ribera del Duero",
    region: "Spain",
    field: "Climate",
    prompt: "Ribera del Duero: climate and altitude?",
    answer: "Extreme continental climate on the high Meseta, often around 700-1000m, with hot days, cold nights, frost risk and a short growing season.",
    examinerLink: "Diurnal range preserves acidity and aroma while daytime warmth ripens Tempranillo, giving powerful but balanced premium reds."
  },
  {
    title: "Priorat",
    region: "Spain",
    field: "Soil",
    prompt: "Priorat: what is llicorella and why is it exam-useful?",
    answer: "Llicorella is poor, fractured slate. It drains quickly, forces deep rooting and restricts yields.",
    examinerLink: "Consequence: low yields and water stress contribute to concentration, high price and premium positioning."
  },
  {
    title: "Rias Baixas",
    region: "Spain",
    field: "Climate and Training",
    prompt: "Rias Baixas: climate, hazard and training response?",
    answer: "Cool, wet Atlantic climate with high humidity and fungal disease pressure. Pergola training improves air flow and keeps fruit away from damp ground.",
    examinerLink: "This explains why Albarino can retain high acidity but needs careful canopy and disease management."
  },
  {
    title: "Coonawarra",
    region: "South Australia",
    field: "Soil",
    prompt: "Coonawarra Cabernet: what is the famous soil and why does it matter?",
    answer: "Terra rossa over limestone. It has good drainage and can moderate vigour, helping produce concentrated Cabernet Sauvignon.",
    examinerLink: "Link the soil to Cabernet structure, regional reputation and premium pricing, not just to a colour name."
  },
  {
    title: "South Australia",
    region: "South Australia",
    field: "Producer Evidence",
    prompt: "South Australia producer check: name one producer for Barossa/Eden, Clare and Coonawarra.",
    answer: "Examples: Penfolds, Henschke or Torbreck for Barossa/Eden; Grosset or Jim Barry for Clare; Wynns or Balnaves for Coonawarra.",
    examinerLink: "Use these to support points about old vines, Riesling quality, Cabernet reputation and premium Australian positioning."
  },
  {
    title: "Clare Valley",
    region: "South Australia",
    field: "Climate and Style",
    prompt: "Clare Valley Riesling: what climate features explain the style?",
    answer: "Warm days, cool nights, altitude and diurnal range help ripen grapes while preserving high acidity.",
    examinerLink: "This supports dry, high-acid, citrus-driven Riesling that can age despite coming from a warm country."
  },
  {
    title: "Marlborough",
    region: "New Zealand",
    field: "Commercial",
    prompt: "Marlborough: give one strength and one weakness.",
    answer: "Strength: globally recognised Sauvignon Blanc brand with consistent export demand. Weakness: over-reliance on one grape/style and risk of commoditisation.",
    examinerLink: "This is exactly the kind of commercial evaluation examiners reward in strengths/weaknesses questions."
  },
  {
    title: "Central Otago",
    region: "New Zealand",
    field: "Climate",
    prompt: "Central Otago Pinot Noir: climate and hazard?",
    answer: "Semi-continental, dry, sunny and cool, with marked diurnal range. Frost is a major hazard.",
    examinerLink: "Dry conditions reduce disease and support organic/biodynamic production; frost and low yields support premium costs."
  },
  {
    title: "Stellenbosch",
    region: "South Africa",
    field: "Style",
    prompt: "Stellenbosch: what styles and site factors should you recall?",
    answer: "Cabernet Sauvignon, Bordeaux blends and Chenin Blanc. Varied slopes, aspects and soils allow quality differentiation.",
    examinerLink: "Use Stellenbosch as evidence for South Africa's premium potential and regional diversity."
  },
  {
    title: "Walker Bay",
    region: "South Africa",
    field: "Climate and Grapes",
    prompt: "Walker Bay: climate and key grapes?",
    answer: "Cooler maritime area influenced by the ocean, suited to Pinot Noir and Chardonnay.",
    examinerLink: "This broadens a South Africa answer beyond warm-climate reds and Chenin, showing stylistic diversity."
  }
];

let mode = "region";
let current = regions[0];
let installPrompt = null;

function daysUntilExam() {
  const now = new Date();
  const diff = examDate - now;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function seedIndex(length) {
  const now = new Date();
  const seed = now.getFullYear() * 1000 + now.getMonth() * 50 + now.getDate();
  return seed % length;
}

function getStats() {
  return JSON.parse(localStorage.getItem("d3HotSeatStats") || '{"scores":[]}');
}

function saveStats(stats) {
  localStorage.setItem("d3HotSeatStats", JSON.stringify(stats));
}

function updateStats() {
  const stats = getStats();
  const scores = stats.scores || [];
  document.getElementById("drillsDone").textContent = scores.length;
  document.getElementById("avgScore").textContent = scores.length
    ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
    : "-";
}

function renderDaily(item) {
  document.getElementById("dailyTitle").textContent = item.title;
  document.getElementById("dailyWhy").textContent = `${item.tier}: ${item.why}`;
  const focus = [
    ["Climate", item.facts["Growing Environment"][0]],
    ["Soil or Site", item.facts["Growing Environment"][2] || item.facts["Growing Environment"][1]],
    ["Commercial", item.facts["D3 Links"][item.facts["D3 Links"].length - 1]],
    ["Producer", item.facts["Producer Evidence"][0]]
  ];
  document.getElementById("dailyFocus").innerHTML = focus
    .map(([label, text]) => `<div class="focus-item"><strong>${label}</strong><span>${text}</span></div>`)
    .join("");
}

function dataForMode() {
  if (mode === "region") return recallCards;
  if (mode === "variety") return varieties;
  if (mode === "question") return questions;
  if (mode === "facts") return dailyFactCards();
  return speedPrompts.map((prompt, index) => ({
    title: `Speed Prompt ${index + 1}`,
    prompt,
    facts: {
      "What Good Looks Like": [
        "Answer in 30-60 seconds.",
        "Use at least one specific region, grape, law, producer or commercial consequence.",
        "Turn one point into Fact -> Reason -> Consequence.",
        "If you cannot answer, mark it 0 or 1 and repeat later."
      ]
    }
  }));
}

function dailyFactCards() {
  const start = seedIndex(factCards.length);
  return Array.from({ length: Math.min(25, factCards.length) }, (_, offset) => {
    const [title, prompt, answer] = factCards[(start + offset) % factCards.length];
    return {
      title,
      region: "Daily Facts",
      field: "Quick Recall",
      prompt,
      answer,
      examinerLink: "Say it out loud, reveal, mark 0-3, then move. These are freshness reps, not essay practice."
    };
  });
}

function renderPrompt(item) {
  current = item;
  document.getElementById("modeLabel").textContent = modeLabel();
  document.getElementById("promptTitle").textContent = item.title;
  const meta = item.region
    ? `<div class="micro-meta"><span>${item.region}</span><span>${item.field}</span></div>`
    : "";
  document.getElementById("promptText").innerHTML = `${meta}${item.prompt}`;
  document.getElementById("answerBox").value = "";
  document.getElementById("checklist").classList.add("hidden");
  document.getElementById("gradePanel").classList.add("hidden");
  document.querySelectorAll(".score-row button").forEach(button => button.classList.remove("selected"));
}

function modeLabel() {
  if (mode === "region") return "Region Drill";
  if (mode === "variety") return "Variety Drill";
  if (mode === "question") return "Past Question";
  if (mode === "facts") return "Daily Facts";
  return "Speed Round";
}

function revealChecklist() {
  const checklist = document.getElementById("checklist");
  if (current.answer) {
    checklist.innerHTML = `
      <div class="check-section full-width">
        <h3>Answer</h3>
        <p>${current.answer}</p>
      </div>
      <div class="check-section full-width">
        <h3>Examiner Link</h3>
        <p>${current.examinerLink}</p>
      </div>
    `;
  } else {
    checklist.innerHTML = Object.entries(current.facts)
      .map(([heading, points]) => `
        <div class="check-section">
          <h3>${heading}</h3>
          <ul>${points.map(point => `<li>${point}</li>`).join("")}</ul>
        </div>
      `)
      .join("");
  }
  checklist.classList.remove("hidden");
}

function gradeAnswer() {
  const answer = document.getElementById("answerBox").value.trim();
  const panel = document.getElementById("gradePanel");
  if (!answer) {
    panel.innerHTML = "<h3>No attempt yet</h3><p>Write a guess first. The miss is the training signal.</p>";
    panel.classList.remove("hidden");
    return;
  }

  const targetText = current.answer
    ? `${current.answer} ${current.examinerLink || ""}`
    : Object.values(current.facts || {}).flat().join(" ");
  const targetTerms = keywordSet(targetText);
  const answerTerms = keywordSet(answer);
  const matched = [...targetTerms].filter(term => answerTerms.has(term));
  const coverage = targetTerms.size ? matched.length / targetTerms.size : 0;
  const hasConsequence = /\b(because|therefore|so|which|result|results|leads|contributes|helps|supports|explains|due to|as a result|meaning)\b/i.test(answer);
  const hasSpecific = /\b[A-Z][a-z]+(?:[- ][A-Z][a-z]+)?\b/.test(answer) || /\d/.test(answer);
  const enough = answer.split(/\s+/).length >= (mode === "facts" ? 5 : 18);

  let score = 0;
  if (coverage >= 0.2 || enough) score += 1;
  if (coverage >= 0.38 && hasSpecific) score += 1;
  if (coverage >= 0.55 && hasConsequence) score += 1;

  const notes = [];
  if (coverage < 0.38) notes.push("Too many target terms are missing. You may know the area, but this answer would leak easy marks.");
  if (!hasConsequence) notes.push("Add a cause-and-effect link. D3 rewards why it matters, not just naming the fact.");
  if (!hasSpecific) notes.push("Add a specific place, grape, soil, producer, law, number or technique.");
  if (!enough && mode !== "facts") notes.push("This is too thin for a theory-style drill. Build one complete Fact -> Reason -> Consequence chain.");
  if (!notes.length) notes.push("Good micro-answer. Now repeat it once out loud before moving on.");

  panel.innerHTML = `
    <h3>D3-style micro grade</h3>
    <span class="grade-score">${score}/3</span>
    <p>${gradeLabel(score)}</p>
    <ul>${notes.map(note => `<li>${note}</li>`).join("")}</ul>
    <p><strong>Matched terms:</strong> ${matched.slice(0, 8).join(", ") || "none yet"}</p>
  `;
  panel.classList.remove("hidden");
}

function keywordSet(text) {
  const stop = new Set(["the", "and", "for", "with", "that", "this", "from", "into", "wine", "wines", "style", "styles", "important", "quality", "region", "regions", "key", "can", "are", "has", "have", "its", "but", "not", "one", "two", "three"]);
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, " ")
      .split(/\s+/)
      .filter(word => word.length > 3 && !stop.has(word))
      .slice(0, 26)
  );
}

function gradeLabel(score) {
  if (score === 3) return "D3-ready for this micro-point: specific, relevant and linked to consequence.";
  if (score === 2) return "Sound, but still needs sharper consequence or more exact evidence.";
  if (score === 1) return "Vague pass-through knowledge. Useful error: rewrite it with one concrete link.";
  return "Not yet creditworthy. Reveal the answer, close it, and retrieve it again.";
}

function nextPrompt() {
  const data = dataForMode();
  const index = Math.floor(Math.random() * data.length);
  renderPrompt(data[index]);
}

document.getElementById("daysLeft").textContent = daysUntilExam();
renderDaily(regions[seedIndex(regions.length)]);
renderPrompt(regions[seedIndex(regions.length)]);
updateStats();

document.getElementById("newDaily").addEventListener("click", () => {
  renderDaily(regions[Math.floor(Math.random() * regions.length)]);
});

document.getElementById("nextPrompt").addEventListener("click", nextPrompt);
document.getElementById("revealBtn").addEventListener("click", revealChecklist);
document.getElementById("gradeBtn").addEventListener("click", gradeAnswer);
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("answerBox").value = "";
  document.getElementById("gradePanel").classList.add("hidden");
});
document.getElementById("copyBtn").addEventListener("click", async () => {
  const text = document.getElementById("answerBox").value;
  if (text.trim()) await navigator.clipboard.writeText(text);
});

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  document.getElementById("installBtn").disabled = false;
});

document.getElementById("installBtn").addEventListener("click", async () => {
  if (!installPrompt) {
    alert("On a phone, open the hosted web address and use Add to Home Screen from the browser share/menu button.");
    return;
  }
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
});

document.getElementById("notifyBtn").addEventListener("click", async () => {
  if (!("Notification" in window)) {
    alert("This browser does not support web notifications.");
    return;
  }
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    alert("Notifications were not enabled.");
    return;
  }
  new Notification("D3 Hot Seat ready", {
    body: "Good. One tight recall rep now: climate, grape, soil, producer, consequence."
  });
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./service-worker.js");
}

document.querySelectorAll(".tabs button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    mode = button.dataset.mode;
    nextPrompt();
  });
});

document.querySelectorAll(".score-row button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".score-row button").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    const stats = getStats();
    stats.scores = stats.scores || [];
    stats.scores.push(Number(button.dataset.score));
    saveStats(stats);
    updateStats();
  });
});
