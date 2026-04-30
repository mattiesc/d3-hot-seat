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
  document.querySelectorAll(".score-row button").forEach(button => button.classList.remove("selected"));
}

function modeLabel() {
  if (mode === "region") return "Region Drill";
  if (mode === "variety") return "Variety Drill";
  if (mode === "question") return "Past Question";
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
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("answerBox").value = "";
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
