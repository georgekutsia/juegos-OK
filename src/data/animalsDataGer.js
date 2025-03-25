const animalsData = [
  {  
    nombre: "Igel",
    altura: 300,  //mm
    peso: 1200,  //g
    velocidad: 0.3, // km/h
    habilidad: "Nicht besonders stark, aber er verteidigt sich effektiv, indem er sich zu einer mit Stacheln bedeckten Kugel einrollt",
    armas:"Verfügt über scharfe Stacheln, die sich aufstellen, wenn er bedroht wird, und so eine schwer anzugreifende Kugel bildet.",
    ubicacion: "Europa, Asien, Afrika und Neuseeland (eingeführt); bevorzugt Lebensräume wie Wälder, Wiesen und Gärten",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262134/Erizo_xrhaqy.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167094/draw-erizo_urm4ht.png",
  },  
  {
    nombre: "Elch",
    altura: 2100,  //mm
    peso: 700000, //g
    velocidad: 56, // km/h
    habilidad: "Extrem stark, in der Lage, große Lasten zu tragen oder zu ziehen, mit kraftvollen Geweihen",
    armas:"Verwendet sein großes Geweih zur Verteidigung gegen Raubtiere und im Kampf gegen andere Männchen.",
    ubicacion: "Nordamerika, Europa und Asien, in borealen Wäldern und Tundren",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262115/Alce_jpqx03.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167094/draw-alce_owmr2b.png",
  },
  {
    nombre: "Hirsch",
    altura: 1200,  //mm
    peso: 300000, //g
    velocidad: 75, // km/h
    habilidad: "Wendig und schnell, mit starken Geweihen bei Männchen zur Verteidigung und zum Wettkampf",
    armas:"Nutzt sein Geweih und kann schnell wegrennen, um sich zu verteidigen.",
    ubicacion: "Amerika, Europa, Asien und Nordafrika, in Wäldern, Wiesen und Bergen",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262122/Ciervo_abzbeb.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167091/draw-ciervo_skayyp.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510215/deer_yyh6v9.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510215/deer-bleats_psdhby.mp3"]
  },
  {
    nombre: "Esel",
    altura: 1400,  //mm
    peso: 570000, //g
    velocidad: 50, // km/h
    habilidad: "Sehr stark für seine Größe, traditionell zum Tragen und Transportieren schwerer Lasten auf schwierigem Gelände eingesetzt",
    armas:"Verteidigt sich mit kräftigen Tritten und Bissen, außerdem ist er flink genug, um zu entkommen.",
    ubicacion: "Weltweit, besonders in ländlichen und bergigen Gebieten",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262106/Burro_ov26kd.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167089/draw-burro_kviwrw.png",
  },
  {
    nombre: "Qualle",
    altura: 1000,  //mm
    peso: 200000, //g
    velocidad: 0.01, // km/h
    habilidad: "Abhängig von ihrem Gift in den Tentakeln, um ihre Beute zu lähmen, obwohl ihre Struktur empfindlich ist",
    armas:"Verfügt über Gift in den Tentakeln, das Beute lähmt und Angreifer abschreckt.",
    ubicacion: "Weltweit in Ozeanen, besonders in warmen und gemäßigten Gewässern",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262103/Medusa_rim9pb.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167084/draw-medusa_smzuqh.png",
  },
  {
    nombre: "Gottesanbeterin",
    altura: 120,  //mm
    peso: 10,   //g
    velocidad: 0.18, // km/h
    habilidad: "Starke Vorderbeine, die sie zum Fangen und Halten ihrer Beute nutzt. Hat scharfe Kiefer zum Zerreißen",
    armas:"Fängt Beute und verteidigt sich schnell mit ihren scharfen Vorderbeinen.",
    ubicacion: "Weltweit, besonders in tropischen und gemäßigten Regionen",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262102/Mantis_Religiosa_ozbbpv.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167090/draw-mantis_dqg65i.png",
  },
  {
    nombre: "Nilpferd",
    altura: 1500,  //mm
    peso: 3200000, //g
    velocidad: 38.8, // km/h
    habilidad: "Extrem stark, mit kraftvollem Kiefer und einer Bisskraft von bis zu 1.800 psi. Sehr territorial und gefährlich",
    armas:"Verteidigt sich mit scharfen Zähnen und großer Kraft; ist territorial und aggressiv, wenn es bedroht wird.",
    ubicacion: "Subsaharisches Afrika, in Flüssen, Seen und Wassernähe",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262129/Hipopo%CC%81tamo_rg14r7.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167088/draw-hipopotamo_vfrtxf.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728506289/Hipopotamo1_tlghpm.mp3"]
  },
  {
    nombre: "Rentier",
    altura: 1400,  //mm
    peso: 300000, //g
    velocidad: 60, // km/h
    habilidad: "Sehr stark, mit großen Geweihen, traditionell als Lasttiere genutzt",
    armas:"Nutzt sein Geweih sowohl zur Verteidigung als auch im Kampf um Territorien.",
    ubicacion: "Arktis und Subarktis, einschließlich Nordamerika, Europa und Asien",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262130/Reno_lnekjr.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167093/draw-reno_uphqeu.png",
  },
  {
    nombre: "Tigerhai",
    altura: 5500,  //mm
    peso: 900000, //g
    velocidad: 32, // km/h
    habilidad: "Extrem starke Kiefer, die große Beute beißen können, mit genug Kraft, um Schildkrötenpanzer zu zerbrechen",
    armas:"Jagd mit starken Kiefern und scharfen Zähnen und ist ein schneller, effektiver Jäger.",
    ubicacion: "Tropische und subtropische Ozeane weltweit, besonders in der Nähe von Riffen und Küsten",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262092/TIburo%CC%81n_wpz2wi.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167087/draw-tiburo%CC%81n_foofnd.png",
  },
  {
    nombre: "Hammerhai",
    altura: 4900,  //mm
    peso: 450000, //g
    velocidad: 28.8, // km/h
    habilidad: "Starker Kiefer und hammerförmiger Kopf, der eine hohe Fähigkeit zur Beutedetektion durch elektrische Felder verleiht",
    armas:"Nutzt seinen Kopf, um Beute zu betäuben und sich mit präzisen Bissen zu verteidigen.",
    ubicacion: "Tropische und warme Ozeane weltweit, nahe Küsten und Riffen",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262109/Tiburo%CC%81n_Martillo_bvfqo7.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167087/draw-tiburo%CC%81nmartillo_yegxen.png",
  },
  {
    nombre: "Schwertfisch",
    altura: 4500,  //mm
    peso: 650000, //g
    velocidad: 97, // km/h
    habilidad: "Die lange, scharfe „Schwert“-Nase ist sehr stark und wird zur Jagd und Verteidigung eingesetzt",
    armas:"Greift mit seinem langen, scharfen „Schwert“ an, um Beute zu verwirren.",
    ubicacion: "Tropische, subtropische und gemäßigte Ozeane weltweit",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262099/Pez_Espada_iolnwr.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167086/draw-tiburo%CC%81nespada_kf9ves.png",
  },
  {
    nombre: "Krabbe",
    altura: 500,  //mm
    peso: 4000,  //g
    velocidad: 0.36, // km/h
    habilidad: "Besitzt sehr starke Zangen, die sie zur Verteidigung und zur Nahrungsaufnahme verwendet",
    armas:"Verteidigt sich mit starken Scheren und greift kleine Beutetiere an.",
    ubicacion: "Ozeane, Küsten, Flüsse und Mangroven weltweit, je nach Art",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262132/Cangrejo_wjkbe3.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167090/draw-cangrejo_ofaevg.png",
  },
  {
    nombre: "Libelle",
    altura: 50,    //mm
    peso: 0.15,    //g
    velocidad: 24, // km/h
    habilidad: "Geschickte Flieger, in der Lage, große Entfernungen zurückzulegen",
    armas:" Obwohl harmlos, kann sie sehr flink fliegen und schnell vor Angreifern fliehen.",
    ubicacion: "Feuchte Gebiete weltweit außer extrem kalten Regionen",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261877/Libe%CC%81lula_djewmd.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167165/draw-libelula_gppi2a.png",
  },
  {
    nombre: "Giraffe",
    altura: 6000,  //mm
    peso: 1200000, //g
    velocidad: 52, // km/h
    habilidad: "Starke Beine, die kraftvolle Tritte abgeben können",
    armas:"Verteidigt sich mit kräftigen Tritten und kann mit Hals und Kopf zuschlagen.",
    ubicacion: "Afrikanische Savanne",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261877/Jirafa_rsrqsd.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167164/draw-jirafa_fpfyrq.png",
  },
  {
    nombre: "Opossum",
    altura: 250,   //mm
    peso: 2000,   //g
    velocidad: 6.3, // km/h
    habilidad: "Geschickte Kletterer",
    armas:"Täuscht den Tod vor ('Totstellen'), um Raubtiere zu verwirren; kann auch Zähne zeigen und zischen, wenn bedroht.",
    ubicacion: "Nord- und Südamerika",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262093/Zarigu%CC%88ella_xogcqr.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167164/draw-zariguella_crhuu1.png",
  },
  {
    nombre: "Ameisenbär",
    altura: 2100,  //mm
    peso: 65000,  //g
    velocidad: 1.44, // km/h
    habilidad: "Starke Krallen, um Ameisennester zu zerbrechen",
    armas:"Nutzt seine kräftigen Krallen zur Verteidigung, wenn er sich bedroht fühlt.",
    ubicacion: "Mittel- und Südamerika",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261934/Oso_Hormiguero_lmbo22.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167163/draw-osohormiguero_a0pyns.png",
  },
  {
    nombre: "Elefant",
    altura: 3300,  //mm
    peso: 6000000, //g
    velocidad: 40, // km/h
    habilidad: "Kann Objekte von über 1.000 kg tragen",
    armas:"Verteidigt sich mit seinen Stoßzähnen und seinem Rüssel; kann seine große Masse zur Bedrohung machen.",
    ubicacion: "Afrika und Asien",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262089/Elefante_kibmid.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167162/draw-elefante_csvily.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510236/elefante1_wtixcq.mp3"]
  },
  {
    nombre: "Waschbär",
    altura: 700,   //mm
    peso: 9000,   //g
    velocidad: 18, // km/h
    habilidad: "Starke Krallen zum Klettern",
    armas:"Verteidigt sich mit scharfen Zähnen und ist flink genug, um Bedrohungen zu entkommen.",
    ubicacion: "Nordamerika",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261879/Mapache_jlpn6j.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167160/draw-mapache_das9l2.png",
  },
  {
    nombre: "Schwein",
    altura: 900,   //mm
    peso: 300000, //g
    velocidad: 16.2, // km/h
    habilidad: "Robust und anpassungsfähig",
    armas:"Verteidigt sich durch Beißen und Schnelligkeit; Wildschweine greifen zusätzlich durch Kopfstöße an.",
    ubicacion: "Weltweit domestiziert",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261924/Cerdo_rf1jr3.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167160/draw-cerdo_rlw3va.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510239/cerdo3_ejhjcy.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510238/cerdo2_ihsoqj.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510237/cerdo1_zbhcdo.mp3"]
  },
  {
    nombre: "Schimpanse",
    altura: 1700,  //mm
    peso: 70000,  //g
    velocidad: 25.2, // km/h
    habilidad: "Etwa 1,5 - 2 mal stärker als ein Mensch",
    armas:"Verteidigt sich mit kräftigen Bissen und zeigt in Gruppen hohes Geschick im Kampf.",
    ubicacion: "Zentral- und Westafrika",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261876/Chimpance%CC%81_bvvuy3.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167159/draw-chimpance_ghmz7c.png",
  },
  {
    nombre: "Fledermaus",
    altura: 150,   //mm
    peso: 40,    //g
    velocidad: 36, // km/h
    habilidad: "Stark für ihre Größe in Bezug auf das Fliegen",
    armas:"Verwirrt Feinde mit Ultraschallsignalen und entkommt in komplexen Umgebungen.",
    ubicacion: "Weltweit außer in kalten Regionen",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261922/Murcie%CC%81lago_lsttie.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167158/draw-murcielago_ajcazk.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510241/murcielagos2_my41dk.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510242/murcielagos1_gsrwwr.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510215/animals093_rxxsk2.mp3"]
  },
  {
    nombre: "Braunbär",
    altura: 3000,  //mm
    peso: 360000, //g
    velocidad: 56, // km/h
    habilidad: "Extrem stark, mit kraftvollen Krallen",
    armas:"Greift mit starken Klauen und Zähnen an; seine Größe schüchtert Feinde ein.",
    ubicacion: "Nordamerika, Europa, Asien",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262062/Oso_Pardo_nvki65.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167158/draw-osopardo_bfonmk.png",
  },
  {
    nombre: "Tiger",
    altura: 1200,  //mm
    peso: 300000, //g
    velocidad: 65, // km/h
    habilidad: "Große Kraft in den Beinen und im Kiefer",
    armas:"Meister des schleichenden Jagdverhaltens, mit starken Klauen und schnellen Angriffen.",
    ubicacion: "Asien",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261868/Tigre_vlzhzw.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167083/draw-tigre_du6ov6.png",
  },
  {
    nombre: "Schwarzpanther",
    altura: 800,   //mm
    peso: 100000, //g
    velocidad: 58, // km/h
    habilidad: "Große Muskelkraft und starker Kiefer",
    armas:"Nutzt seine Beweglichkeit, das Anschleichen und seine Stärke für schnelle Angriffe.",
    ubicacion: "Zentral- und Südamerika",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261881/Pantera_jbgojc.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167152/draw-pantera_dfkqdk.png",
  },
  {
    nombre: "Löwe",
    altura: 1200,  //mm
    peso: 250000, //g
    velocidad: 80, // km/h
    habilidad: "Sehr stark, in der Lage, große Beute niederzulegen",
    armas:"Greift im Rudel an, nutzt mächtige Klauen und Zähne, um große Beute zu überwältigen.",
    ubicacion: "Subsaharisches Afrika, Indien",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262060/Leo%CC%81n_qk6dxm.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167152/draw-leon_zjivis.png",
  },
  {
    nombre: "Gepard",
    altura: 900,   //mm
    peso: 70000,  //g
    velocidad: 120, // km/h
    habilidad: "Mehr auf Geschwindigkeit als auf Stärke ausgelegt",
    armas:"Schnelligkeit ist sein Hauptvorteil bei der Jagd, um Beute einzuholen, bevor sie entkommt.",
    ubicacion: "Afrika und Teile des Iran",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262058/Guepardo_uhykah.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167117/draw-guepardo_mydoxp.png",
  },
  {
    nombre: "Jaguar",
    altura: 900,   //mm
    peso: 120000, //g
    velocidad: 80, // km/h
    habilidad: "Extrem starke Kiefer",
    armas:"Ist ein guter Schwimmer und Kletterer, nutzt seine starken Kiefer, um Schädel zu durchdringen.",
    ubicacion: "Zentral- und Südamerika",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261926/Jaguar_qskubz.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727269782/draw-jaguar_xsubli.png",
  },
  {
    nombre: "Känguru",
    altura: 2000,  //mm
    peso: 90000,  //g
    velocidad: 70, // km/h
    habilidad: "Starke Tritte",
    armas:"Verteidigt sich mit kräftigen Tritten, die durch die Hinterbeine und den Schwanz gestützt werden.",
    ubicacion: "Australien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262109/Canguro_iucqmd.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167116/draw-kanguro_dhtzie.png",
  },
  {
    nombre: "Pferd",
    altura: 1800,  //mm
    peso: 1000000, //g
    velocidad: 82, // km/h
    habilidad: "Extrem stark, besonders in den Hinterbeinen, traditionell für Last-, Transport- und Wettbewerbsarbeiten eingesetzt",
    armas:"Verteidigt sich durch schnelle Tritte, besonders mit den Hinterbeinen; kann schnell wegrennen.",
    ubicacion: "Domestiziert weltweit, besonders in ländlichen Gebieten, auf Bauernhöfen und für sportliche Aktivitäten",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262107/Caballo_k5uvjo.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167092/draw-caballo_vfyds7.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510244/caballo1_rcnihg.mp3", "https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510243/caballo3_krjr4d.mp3", "https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510243/caballo2_fzlsjv.mp3"]
  },
  {
    nombre: "Strauß",
    altura: 2700,  //mm
    peso: 150000, //g
    velocidad: 70, // km/h
    habilidad: "Starke Tritte, die tödlich sein können",
    armas:"Tritt sehr stark und kann mit seinen Klauen tödliche Angriffe abwehren.",
    ubicacion: "Afrika",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262065/Avestruz_ncmyvg.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167116/draw-avestruz_lyjnsw.png",
  },
  {
    nombre: "Nashorn",
    altura: 1800,  //mm
    peso: 3500000, //g
    velocidad: 40.6, // km/h
    habilidad: "Sehr stark, in der Lage, mit hoher Geschwindigkeit anzugreifen",
    armas:"Nutzt sein Horn und sein massives Gewicht, um Bedrohungen stark zu stoßen.",
    ubicacion: "Afrika und Asien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262101/Rinoceronte_kkbb1r.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167094/draw-rinoceronte_ecrwmb.png",
  },
  {
    nombre: "Ente",
    altura: 500,   //mm
    peso: 1500,   //g
    velocidad: 90, // km/h
    habilidad: "Mäßig für ihre Größe",
    armas:"Hat keine großen Verteidigungsmöglichkeiten, kann jedoch bei Bedrohung schnappen und wegfliegen.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262120/Pato_clv5xx.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167115/draw-pato_fjbbo5.png",
  },
  {
    nombre: "Möwe",
    altura: 600,   //mm
    peso: 1500,   //g
    velocidad: 64.2, // km/h
    habilidad: "Mäßig für ihre Größe",
    armas:"Verteidigt ihr Territorium und schützt sich in Gruppen vor Bedrohungen.",
    ubicacion: "Küsten weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262091/Gaviota_ubpisa.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167085/draw-gaviota_p1k1vs.png",
  },
  {
    nombre: "Albatros",
    altura: 1300,  //mm
    peso: 12000,  //g
    velocidad: 110, // km/h
    habilidad: "In der Lage, lange Strecken zu reisen",
    armas:"Kann durch seine große Spannweite über große Entfernungen fliegen, um Bedrohungen zu entkommen.",
    ubicacion: "Ozeane der südlichen Hemisphäre",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262111/Albatross_ynypue.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167086/draw-albatros_jk5kbg.png",
  },
  {
    nombre: "Taube",
    altura: 350,   //mm
    peso: 400,    //g
    velocidad: 59, // km/h
    habilidad: "Mäßig für ihre Größe",
    armas:"Fliegt schnell weg; in Gruppen können sie Raubtiere verwirren.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262128/Paloma_vkamuh.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167085/draw-paloma_cuyv19.png",
  },
  {
    nombre: "Chamäleon",
    altura: 600,   //mm
    peso: 200,    //g
    velocidad: 0.036, // km/h
    habilidad: "Schwache physische Stärke, große Tarnfähigkeit",
    armas:"Tarnung ist seine beste Verteidigung gegen Feinde.",
    ubicacion: "Afrika und Madagaskar",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262123/Camaleo%CC%81n_j84ihx.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167085/draw-camaleon_wx8imk.png",
  },
  {
    nombre: "Eidechse",
    altura: 200,  //mm
    peso: 150, //g
    velocidad: 3.6, // km/h
    habilidad: "Einige Arten haben starke Kiefer",
    armas:"Einige Arten haben starke Kiefer und können den Schwanz abwerfen, um Angreifer abzulenken.",
    ubicacion: "Weltweit außer in kalten Zonen",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262099/Lagarto_tct0tn.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167084/draw-lagarto_mh1rbo.png",
  },
  {
    nombre: "Pelikan",
    altura: 1000,  //mm
    peso: 15000,  //g
    velocidad: 39.6, // km/h
    habilidad: "Schwache physische Stärke, große Fähigkeit zum Fischen",
    armas:"Verteidigt sich mit seinem großen Schnabel und kann sowohl fliegen als auch schnell schwimmen.",
    ubicacion: "Küsten weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262095/Peli%CC%81cano_opb0ey.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727269780/draw-peli%CC%81cano_goacru.png",
  },
  {
    nombre: "Papagai",
    altura: 200,  //mm
    peso: 500,   //g
    velocidad:70, // km/h
    habilidad: "Pico fuerte para romper cáscaras",
    armas:"Su pico fuerte puede infligir mordiscos defensivos.",
    ubicacion: "América del Sur, África y Australia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261922/Papagayo_l5fmon.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727269785/draw-loro_tkazis.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510226/loro_tn5meb.mp3"]
  },
  {
    nombre: "Papagei Grosser",
    altura: 200,  //mm
    peso: 1500,   //g
    velocidad: 70, // km/h
    habilidad: "Starker Schnabel zum Knacken von Schalen",
    armas:"Wie der Papagei verteidigt er sich durch seinen Schnabel, und seine leuchtenden Farben schrecken Feinde ab.",
    ubicacion: "Südamerika, Afrika und Australien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261922/Papagayo_l5fmon.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727269785/draw-loro_tkazis.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510226/loro_tn5meb.mp3"]
  },
  {
    nombre: "Ara",
    altura: 700,  //mm
    peso: 1500,   //g
    velocidad: 56, // km/h
    habilidad: "Extrem starke Schnäbel, die harte Nüsse und Samen knacken können. Sehr intelligente und agile Vögel",
    armas:"Verteidigt sich mit seinem starken Schnabel, der auch bei der Jagd oder beim Öffnen von harten Schalen verwendet wird. Kann laut schreien, um Feinde zu verscheuchen.",
    ubicacion: "Südamerika, Afrika und Australien, in tropischen Wäldern und Wäldern",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728389841/papagayo3_xd2uay.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167084/draw-loro_tpoyti.png",
  },{
    nombre: "Adler",
    altura: 900,  //mm
    peso: 5000,   //g
    velocidad: 160, // km/h
    habilidad: "Extrem starke Krallen und scharfe Sicht, in der Lage, große Beute zu fangen und zu heben. Schnelle und sehr kräftige Vögel",
    armas:"Nutzt seine scharfen Krallen und präzise Sicht, um blitzschnell zuzuschlagen.",
    ubicacion: "Nordamerika, Europa und Asien, in Bergen, Wäldern und offenen Gebieten",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728330301/aguilaRealista_dmsvgj.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728329892/aguilaInfantal_w85rzm.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510224/Aguila5_khh2jn.mp3"]
  },
  {
    nombre: "Biene",
    altura: 12,   //mm
    peso: 100,     //g
    velocidad: 23.8, // km/h
    habilidad: "Klein, aber unverzichtbare Bestäuber",
    armas:"Sticht und gibt dabei Gift ab, verteidigt sich oft in Schwärmen.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261878/Abeja_lqehsk.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167084/draw-abeja_fgzt7v.png"
  },
  {
    nombre: "Wiesel",
    altura: 300,   //mm
    peso: 500,    //g
    velocidad: 25, // km/h
    habilidad: "Agil und schnell",
    armas:"Flink und wehrt sich bei Bedarf mit scharfen Zähnen.",
    ubicacion: "Nordamerika, Europa, Asien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261881/Comadreja_erbc05.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167083/draw-comadreja_z6fylp.png"
  },
  {
    nombre: "Tausendfüßler",
    altura: 300,   //mm
    peso: 1,      //g
    velocidad: 0.72, // km/h
    habilidad: "Einige Arten besitzen ein starkes Gift",
    armas:"Einige Arten haben starkes Gift in ihren Bissen.",
    ubicacion: "Weltweit, in feuchten Bereichen",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262116/Ciempie%CC%81s_yprhkz.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167168/draw-cienpie%CC%81s_oxy8sy.png"
  },
  {
    nombre: "Frosch",
    altura: 300,   //mm
    peso: 3000,   //g
    velocidad: 3, // km/h
    habilidad: "Gute Springer, einige mit starkem Gift",
    armas:"Manche Arten haben giftige Haut, die sie für Feinde gefährlich macht.",
    ubicacion: "Weltweit, feuchte Gebiete",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262095/Rana_efbxcm.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167167/draw-rana_jjjwnn.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510239/rana_yiu0ho.mp3"]
  },
  {
    nombre: "Eule",
    altura: 600,  //mm
    peso: 2000,   //g
    velocidad: 40, // km/h
    habilidad: "Kraftvolle Krallen und ausgezeichnete Nachtsicht, was sie zu hervorragenden Jägern macht. Ihr Flug ist leise und präzise",
    armas:"Jagd mit scharfen Krallen und lautlosem Flug.",
    ubicacion: "Nordamerika, Europa, Asien und Afrika, in Wäldern und Bergregionen",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728374042/buhoRealista.webp_mveruh.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728374067/buhoInfantil.webp_zmfpvn.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510225/buho5_vf4wzt.mp3"]
  },
  {
    nombre: "Wurm",
    altura: 60,   //mm
    peso: 30,    //g
    velocidad: 0.018, // km/h
    habilidad: "In der Lage, große Mengen Erde zu bewegen",
    armas:"Hat keine aktiven Verteidigungsmechanismen, schützt sich aber durch Graben.",
    ubicacion: "Weltweit, in feuchten Böden",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262064/Gusano_he4zou.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167166/draw-gusano_obhop5.png"
  },
  {
    nombre: "Hahn",
    altura: 700,   //mm
    peso: 5000,   //g
    velocidad: 10.8, // km/h
    habilidad: "Verteidigt sein Territorium",
    armas:"Nutzt seine Sporen und seinen Schnabel, um sich besonders in Territorialkämpfen zu verteidigen.",
    ubicacion: "Weltweit domestiziert",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206793/gallo_fi0sdz.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167172/draw-gallo_vbsrzn.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510232/gallo2_wh0z6i.mp3", "https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510231/gallo1_oi0ibz.mp3"]
  },
  {
    nombre: "Huhn",
    altura: 600,   //mm
    peso: 4000,   //g
    velocidad: 10.4, // km/h
    habilidad: "Relativ schwach, aber agil und schnell. Hauptsächlich für die Fleisch- und Eierproduktion verwendet",
    armas:"Hähne verteidigen sich mit Schnabel und Sporen.",
    ubicacion: "Weltweit domestiziert, hauptsächlich auf Bauernhöfen und in ländlichen Gebieten",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206821/pollo_gsgysc.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167171/draw-pollo_kbg5sf.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510232/pollo_hojaiy.mp3"]
  },
  {
    nombre: "Küken",
    altura: 100,   //mm
    peso: 40,    //g
    velocidad: 0.72, // km/h
    habilidad: "Sehr schwach in den ersten Lebensphasen, aber schnell wachsend und fähig zu laufen und sich zu ernähren",
    armas:"Hat keine Verteidigung und verlässt sich auf die Mutter und Tarnung.",
    ubicacion: "Weltweit domestiziert, auf Bauernhöfen und in ländlichen Gebieten",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262094/Pollito_b5atbb.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167162/draw-pollito_xtmglt.png"
  },
  {
    nombre: "Koala",
    altura: 850,   //mm
    peso: 15000,  //g
    velocidad: 2.08, // km/h
    habilidad: "Starke Krallen zum Klettern",
    armas:"Nutzt seine Krallen zum Klettern und manchmal zur Verteidigung.",
    ubicacion: "Australien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262117/Koala_coenjs.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167171/draw-koala_kym6lu.png"
  },
  {
    nombre: "Wal",
    altura: 30000,   //mm
    peso: 200000000, //g
    velocidad: 48, // km/h
    habilidad: "Extrem stark, in der Lage, große Distanzen zu schwimmen und enormen Tiefendruck zu ertragen",
    armas:"Manche Arten nutzen ihre Flossen oder Sprünge zur Abschreckung.",
    ubicacion: "Ozeane weltweit, besonders in tiefen Gewässern und in polaren und gemäßigten Zonen",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262086/Ballena_jfpp7d.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167086/draw-ballena_bueqg2.png"
  },
  {
    nombre: "Ziege",
    altura: 800,   //mm
    peso: 140000, //g
    velocidad: 15.2, // km/h
    habilidad: "In der Lage, hohe Sprünge und Klettermanöver zu machen",
    armas:"Verteidigt sich durch Kopfschläge mit den Hörnern.",
    ubicacion: "Weltweit domestiziert",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262085/Cabra_obc2bh.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167170/draw-cabra_qui0c8.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510234/goat2_dec4ra.mp3", "https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510233/GOAT_dw1n6w.mp3"]
  },
  {
    nombre: "Clownfisch",
    altura: 110,   //mm
    peso: 250,    //g
    velocidad: 3.6, // km/h
    habilidad: "Anpassung an Symbiose mit Seeanemonen",
    armas:"Lebt in giftigen Anemonen, die ihn vor Räubern schützen.",
    ubicacion: "Indischer und Pazifischer Ozean",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261868/Pez_Payaso_vppv5h.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727267551/draw-pez_djxdpr.png"
  },
  {
    nombre: "Kaninchen",
    altura: 300,   //mm
    peso: 3000,   //g
    velocidad: 60, // km/h
    habilidad: "Fähigkeit, Baue zu graben",
    armas:"Verteidigt sich durch Flucht und Graben von Bauen.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262131/Conejo_uyb02o.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167175/draw-conejo_wk1tyi.png"
  },
  {
    nombre: "Kamel",
    altura: 2300,  //mm
    peso: 1000000, //g
    velocidad: 64.6, // km/h
    habilidad: "Sehr stark, in der Lage, Lasten bis zu 200 kg über lange Distanzen unter trockenen Bedingungen zu tragen",
    armas:"Schüchtert durch Größe und Kraft ein.",
    ubicacion: "Wüsten und trockene Regionen in Nordafrika, dem Nahen Osten und Zentralasien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262127/Camello_aoj9bj.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167089/draw-camello_d0e5ic.png"
  },
  {
    nombre: "Wolf",
    altura: 1200,   //mm
    peso: 80000,  //g
    velocidad: 62.4, // km/h
    habilidad: "Kraftvolle Kiefer",
    armas:"Jagt in Rudeln, nutzt seine Zähne und ist ein sehr strategischer Jäger in der Gruppe.",
    ubicacion: "Nordamerika, Europa, Asien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206790/loboR_mxlq5p.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167174/draw-lobo_kyni1g.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510231/lobo2_s59clz.mp3", "https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510230/lobo1_dcoemm.mp3"]
  },
  {
    nombre: "Spinne",
    altura: 20,    //mm
    peso: 50,    //g
    velocidad: 2, // km/h
    habilidad: "Extrem starke Netze im Verhältnis zu ihrer Größe",
    armas:"Manche Arten sind giftig, andere haben starke Netze, um Beute zu fangen.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262059/Aran%CC%83a_pp2ifi.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727267555/draw-aran%CC%83a_bllmta.png"
  },
  {
    nombre: "Krokodil",
    altura: 1800,  //mm
    peso: 1200000, //g
    velocidad: 14.4, // km/h
    habilidad: "Extrem kraftvolle Kiefer",
    armas:"Verfügt über extrem starke Kiefer und ist ein Meister der Überraschungsangriffe.",
    ubicacion: "Amerika, Afrika, Asien, Australien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262121/Cocodrilo_ez3qj5.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167178/draw-cocodrilo_hqcqxm.png"
  },
  {
    nombre: "Eichhörnchen",
    altura: 300,   //mm
    peso: 500,    //g
    velocidad: 18, // km/h
    habilidad: "Wendig und schnell",
    armas:"Sehr wendig und schnell, flieht oft in Bäume, um sich in Sicherheit zu bringen.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262105/Ardilla_yck1kl.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167177/draw-ardilla_fyy1n8.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510228/ardilla2_bevitm.mp3", "https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510228/ardilla_qdy4di.mp3"]
  },
  {
    nombre: "Fuchs",
    altura: 550,   //mm
    peso: 14000,  //g
    velocidad: 45.2, // km/h
    habilidad: "Wendig und schnell",
    armas:"Schlägt schnell zu und hat einen starken Biss, um Beute zu fangen.",
    ubicacion: "Amerika, Europa, Asien und Afrika",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262124/Zorro_jh4vll.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167176/draw-zorro_wvzjy8.png"
  },
  {
    nombre: "Grille",
    altura: 50,    //mm
    peso: 2,      //g
    velocidad: 1.9, // km/h
    habilidad: "Stark für ihre Größe, insbesondere in den Hinterbeinen, was ihnen weite Sprünge ermöglicht",
    armas:"Nutzt ihre Hinterbeine, um große Entfernungen zu springen und Bedrohungen zu entkommen.",
    ubicacion: "Weltweit, in Bereichen wie Feldern, Gärten und Wäldern",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262114/Grillo_ttewg8.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727267550/draw-grillo_ia2ajk.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510227/grillos2_gmpmdz.mp3", "https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510226/grillos_q64vs7.mp3", "https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510225/grillo45_qvcejp.mp3"]
  },
  {
    nombre: "Oktopus",
    altura: 5000,  //mm
    peso: 100000, //g
    velocidad: 40, // km/h
    habilidad: "Extrem starke und flexible Tentakel, die große Kräfte mit jeder Saugnapf ausüben können",
    armas:"Nutzt starke Tentakel und Tarnung zur Verteidigung und Flucht.",
    ubicacion: "Weltweite Ozeane, besonders in Küsten- und Riffgebieten",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262112/Pulpo_o5agwq.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167089/draw-pulpo_iz4rsn.png"
  },
  {
    nombre: "Kuh",
    altura: 1800,  //mm
    peso: 900000, //g
    velocidad: 35.4, // km/h
    habilidad: "Eingesetzt in Lastarbeiten",
    armas:"Verteidigt sich durch Tritte und Kopfstöße.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206788/vacaR_wtknhx.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167176/draw-vaca_d2wpwn.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510230/vaca3_aip9z5.mp3", "https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510229/vaca2_huzmyx.mp3", "https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510228/vaca1_qn4noq.mp3"]
  },
  {
    nombre: "Gürteltier",
    altura: 250,   //mm
    peso: 35000,   //g
    velocidad: 30, // km/h
    habilidad: "Stark zum Graben",
    armas:"Kann sich zu einer Kugel zusammenrollen, geschützt durch eine harte Schale.",
    ubicacion: "Mittel- und Südamerika",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261921/Armadillo_kwml7v.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167156/draw-armadillo_x68x1u.png"
  },
  {
    nombre: "Schaf",
    altura: 1000,  //mm
    peso: 160000, //g
    velocidad: 29, // km/h
    habilidad: "Mäßig, gezüchtet für Wolle, Fleisch und Milch",
    armas:"Manche Schafe haben Hörner zur Verteidigung.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262061/Oveja_iqgabj.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167153/draw-oveja_uahsro.png"
  },
  {
    nombre: "Ameise",
    altura: 25,  //mm
    peso: 5,      //g
    velocidad: 2.72, // km/h
    habilidad: "Heben 10 bis 50 Mal ihr eigenes Gewicht",
    armas:"Manche Arten beißen, andere haben Säure in ihren Stichen.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261894/Hormiga_krv9kg.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167153/draw-hormiga_txi99m.png"
  },
  {
    nombre: "Eisbär",
    altura: 2200,  //mm
    peso: 700000, //g
    velocidad: 40, // km/h
    habilidad: "Sehr stark, Spitzenprädator",
    armas:"Mit kräftigen Klauen und Zähnen ist er ein agiler Jäger im Eis.",
    ubicacion: "Arktis",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262086/Oso_Polar_zdawga.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167157/draw-osopolar_xxxhvy.png"
  },
  {
    nombre: "Panda",
    altura: 950,   //mm
    peso: 120000, //g
    velocidad: 30.2, // km/h
    habilidad: "Starke Kiefer zum Kauen von Bambus",
    armas:"Kann sich mit starken Kiefern und Krallen verteidigen, obwohl er eher friedlich ist.",
    ubicacion: "Bambuswälder in China",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262061/Oso_Panda_nwpgma.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167093/draw-osopanda_wkghwo.png"
  },
  {
    nombre: "Schmetterling",
    altura: 120,   //mm
    peso: 0.5,    //g
    velocidad: 11.2, // km/h
    habilidad: "Gute Flugfähigkeit für ihre Größe",
    armas:"Manche Arten haben abschreckende Farben und Muster.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262066/Mariposa_mncctj.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167153/draw-mariposa_tg25kl.png"
  },
  {
    nombre: "Marienkäfer",
    altura: 10,    //mm
    peso: 0.1,    //g
    velocidad: 3.6, // km/h
    habilidad: "Stark für ihre Größe",
    armas:"Gibt eine bittere Flüssigkeit ab, die Räuber abschreckt.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261882/Mariquita_fo6kxx.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167153/draw-mariquita_ad7cxg.png"
  },
  {
    nombre: "Stier",
    altura: 1800,  //mm
    peso: 1000000, //g
    velocidad: 38, // km/h
    habilidad: "Extrem stark",
    armas:"Verteidigt sich durch kräftige Angriffe mit den Hörnern.",
    ubicacion: "Weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261923/Toro_hnzfdj.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167117/draw-toro_rqq7ng.png"
  },
  {
    nombre: "Wildschwein",
    altura: 750,  //mm
    peso: 80000,  //g
    velocidad: 48, // km/h
    habilidad: "Besitzt starke und scharfe Hauer, die es zur Verteidigung und zum Graben einsetzt",
    armas:"Nutzt seine scharfen Stoßzähne und stößt Bedrohungen an.",
    ubicacion: "Wälder, Dschungel und ländliche Gebiete in Europa, Asien und Teilen Amerikas",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465867/cerdo_salvaje_vvbo5p.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478317/cerdo_salvaje-_ohhrdw.png"
  },
  {
    nombre: "Kojote",
    altura: 600,  //mm
    peso: 15000,  //g
    velocidad: 64, // km/h
    habilidad: "Große Ausdauer und Anpassungsfähigkeit, Einzel- oder Gruppenjäger",
    armas:"Schnell und geschickt, jagt oft in Gruppen, wenn es nötig ist.",
    ubicacion: "Nordamerika, von Kanada bis Mexiko",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465863/coyote_jqadwx.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478336/coyote-_ipyxmq.png"
  },
  {
    nombre: "Schildkröte",
    altura: 500,  //mm
    peso: 50000,  //g
    velocidad: 0.27, // km/h
    habilidad: "Robuster Panzer, der ihren Körper vor Raubtieren schützt",
    armas:" Hat einen harten Panzer, der sie vor vielen Räubern schützt.",
    ubicacion: "Ozeane, Flüsse und Süßwasserkörper weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465871/tortuga_vvhhjx.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478318/tortuga-_q0mde3.png"
  },
  {
    nombre: "Schnecke",
    altura: 50,  //mm
    peso: 30,  //g
    velocidad: 0.03, // km/h
    habilidad: "Nutzen Schleim, um sich an vertikalen Flächen zu haften und fortzubewegen",
    armas:"Schützt sich durch ihre Schleimschicht und ihr Schneckenhaus.",
    ubicacion: "Feuchte und gemäßigte Gebiete weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465869/caracol_eqnirp.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478322/caracol-_shznol.png"
  },
  {
    nombre: "Chihuahua",
    altura: 230,  //mm
    peso: 2500,  //g
    velocidad: 24, // km/h
    habilidad: "Klein, aber mutig und sehr agil",
    armas:"Klein, aber mutig, bellt und beißt.",
    ubicacion: "Haustier, ursprünglich aus Mexiko",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465865/perro_chihuahua_c71cfz.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478323/perro_chichuahua-_m3xxqc.png"
  },
  {
    nombre: "Deutscher Schäferhund",
    altura: 650,  //mm
    peso: 40000,  //g
    velocidad: 48, // km/h
    habilidad: "Stark, loyal und verwendet in Polizeiarbeit und Rettungseinsätzen",
    armas:"Stark, beißt zu und wird oft als Wachhund verwendet.",
    ubicacion: "Haustier, ursprünglich aus Deutschland",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465842/perro_pastor_alema%CC%81n_rflldf.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478321/perro_pastor-alema%CC%81n_jfspwu.png"
  },
  {
    nombre: "Pudel",
    altura: 450,  //mm
    peso: 20000,  //g
    velocidad: 35, // km/h
    habilidad: "Intelligent und sehr agil, häufig in Agility-Wettbewerben verwendet",
    armas:"Wendig und intelligent, kann Bedrohungen ausweichen.",
    ubicacion: "Haustier, ursprünglich aus Frankreich",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465845/perro_puddle_nyyww2.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478317/perro_puddle-_i6uz4a.png"
  },
  {
    nombre: "Dalmatiner",
    altura: 580,  //mm
    peso: 32000,  //g
    velocidad: 60, // km/h
    habilidad: "Ausdauernd beim Laufen langer Distanzen",
    armas:"Schnell und ausdauernd, kann Bedrohungen leicht entkommen.",
    ubicacion: "Haustier, ursprünglich aus Kroatien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465846/perro_da%CC%81lmata_brmd6w.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478322/perro_da%CC%81lmata-_ga9nu2.png"
  },
  {
    nombre: "Mops",
    altura: 300,  //mm
    peso: 8000,  //g
    velocidad: 10, // km/h
    habilidad: "Kompakt und muskulös, bekannt für seine große Persönlichkeit",
    armas:"Stark für seine Größe, verteidigt sich durch Beißen.",
    ubicacion: "Haustier, ursprünglich aus China",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465843/pug_loptiw.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728482852/perro_pug-_k3nlzq.png"
  },
  {
    nombre: "Golden Retriever",
    altura: 610,  //mm
    peso: 34000,  //g
    velocidad: 48, // km/h
    habilidad: "Ausgezeichneter Schwimmer, wird im Wasserrettungsdienst eingesetzt",
    armas:"Nicht aggressiv, kann aber beißen, wenn er bedroht wird.",
    ubicacion: "Haustier, ursprünglich aus dem Vereinigten Königreich",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465841/perro_golden_retriever_es3bw0.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728482853/perro_golden-retriever-_jwergj.png"
  },
  {
    nombre: "Siamesische Katze",
    altura: 250,  //mm
    peso: 4000,  //g
    velocidad: 48, // km/h
    habilidad: "Sehr agil und schnell beim Jagen",
    armas:"Nutzt Krallen und Zähne zur Verteidigung und Jagd.",
    ubicacion: "Haustier, ursprünglich aus Thailand",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465840/gato_siame%CC%81s_rrkn2m.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480012/gato_siame%CC%81s-_eksq7t.png"
  },
  {
    nombre: "Sphynx Katze",
    altura: 230,  //mm
    peso: 3500,  //g
    velocidad: 30, // km/h
    habilidad: "Schnell und agil trotz fragiler Erscheinung",
    armas:"Verteidigt sich mit Krallen und Zähnen, obwohl sie meist freundlich ist.",
    ubicacion: "Haustier, ursprünglich aus Kanada",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465839/gato_esfinje_grfci8.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206181/gatoPersa_sjin9x.png"
  },
  {
    nombre: "Oranger Kater",
    altura: 250,  //mm
    peso: 4500,  //g
    velocidad: 48, // km/h
    habilidad: "Sehr verspielt und talentiert im Jagen",
    armas:"Verteidigt sich mit Krallen und Zähnen.",
    ubicacion: "Haustier, weltweit verbreitet",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465862/gato_naranja_bo8xlh.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480010/gato_naranja-_h0w6ls.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510223/gato8_aptdez.mp3"]
  },
  {
    nombre: "Persische Katze",
    altura: 250,  //mm
    peso: 5000,  //g
    velocidad: 30, // km/h
    habilidad: "Ruhiges und liebevolles Temperament, kein ausgezeichneter Jäger",
    armas:" Ruhig, kann sich jedoch bei Bedrohung mit Krallen wehren.",
    ubicacion: "Haustier, ursprünglich aus Persien (Iran)",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465865/gato_persa_pykg3i.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480017/gato_persa-_kji2cv.png"
  },
  {
    nombre: "Maus",
    altura: 60,  //mm
    peso: 20,  //g
    velocidad: 13, // km/h
    habilidad: "Schnell und geschickt, mit der Fähigkeit, sich durch enge Räume zu zwängen",
    armas:"Sehr flink und kann sich gut verstecken.",
    ubicacion: "Städtische und ländliche Gebiete weltweit",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465838/rato%CC%81n.webp_ch8dyy.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480013/rato%CC%81n-c%CC%A7_o0zz39.png"
  },
  {
    nombre: "Zebra",
    altura: 1500,  //mm
    peso: 350000,  //g
    velocidad: 65, // km/h
    habilidad: "Ausdauernd und schnell, fähig, lange Distanzen zu laufen",
    armas:"Tritt kräftig zu und verwirrt Feinde durch seine Streifen.",
    ubicacion: "Afrika, in Savannen und Grasland",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465846/zebra_yrrubj.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480006/zebra-_hlt3sg.png"
  },
  {
    nombre: "Pinguin",
    altura: 1100,  //mm
    peso: 35000,  //g
    velocidad: 12, // km/h
    habilidad: "Ausgezeichneter Schwimmer, kann tief tauchen",
    armas:"Nutzt Schnabel und Flossen zur Verteidigung und flieht durch Schwimmen.",
    ubicacion: "Polare und küstennahe Regionen der Südhalbkugel",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465838/Pingu%CC%88ino_sijl2l.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480007/pingu%CC%88ino-_t62b70.png"
  },
  {
    nombre: "Otter",
    altura: 600,  //mm
    peso: 15000,  //g
    velocidad: 10.9, // km/h
    habilidad: "Sehr geschickt im Schwimmen und Fischen",
    armas:"Verteidigt sich mit Zähnen und ist im Wasser sehr agil.",
    ubicacion: "Flüsse und Seen in Europa, Amerika und Asien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465848/nutria_e0ie9q.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206182/nutria_jhqy8e.png"
  },
  {
    nombre: "Fliege",
    altura: 6,  //mm
    peso: 0.005,  //g
    velocidad: 8, // km/h
    habilidad: "Schnelle Reflexe und wendiger Flug",
    armas:"Schnelle Reflexe und Fluggeschick helfen ihr, Bedrohungen zu entkommen.",
    ubicacion: "Weltweit, besonders in warmen Regionen",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728477893/moscaReal_qv8wyb.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480008/mosca-g_ei4boc.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510225/mosca52_i3bznd.mp3"]
  },
  {
    nombre: "Moskito",
    altura: 10,  //mm
    peso: 0.01,  //g
    velocidad: 2, // km/h
    habilidad: "Antennen erkennen das ausgeatmete Kohlendioxid ihrer Beute aus mehreren Metern Entfernung",
    armas:"Winzig, kann sich durch Stechen verteidigen und Krankheiten übertragen.",
    ubicacion: "Feuchte und warme Zonen, besonders in tropischen und subtropischen Gebieten",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728477892/mosquitoReal_xqwwd7.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728479997/mosquito-_i88va7.png"
  },
  {
    nombre: "Bison",
    altura: 1800,  //mm
    peso: 900000,  //g
    velocidad: 56, // km/h
    habilidad: "Robust und muskulös, kann schnell rennen und mit seinen Hörnern angreifen",
    armas:"Verteidigt sich durch starke Hörner und Angriffe.",
    ubicacion: "Prärien und Wälder Nordamerikas und Europas",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728477893/bisonteReal_dytyyd.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480009/bisonte-_ufajkg.png"
  },
  {
    nombre: "Kakerlake",
    altura: 15,  //mm
    peso: 0.3,  //g
    velocidad: 5, // km/h
    habilidad: "Extrem widerstandsfähig, kann unter widrigen Bedingungen überleben",
    armas:"Sehr widerstandsfähig und schwer zu fangen.",
    ubicacion: "Weltweit verbreitet, besonders in städtischen Gebieten",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728477892/cucarachaReal_tauvik.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480007/cucaracha-_tm9sbe.png"
  },
  {
    nombre: "Gorilla",
    altura: 1700,  //mm
    peso: 180000,  //g
    velocidad: 40, // km/h
    habilidad: "Kann bis zu 10 Mal sein Körpergewicht heben",
    armas:"Verteidigt sich mit kräftigen Armen und Bissen.",
    ubicacion: "Tropische Regenwälder Zentralafrikas",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206825/gorilaReal_ieodbu.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206181/gorilaDIb_ek3gkq.png",
    sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510241/gorila2_l42xd7.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510240/gorila1_qosalm.mp3"]
  },
  {
    nombre: "Kobra",
    altura: 3000,  //mm
    peso: 4500,    //g
    velocidad: 8, // km/h
    habilidad: "Einige Arten können ihr Gift präzise bis zu 2 Meter weit spucken",
    armas:"Schneller, giftiger Biss als Abwehr oder Angriff.",
    ubicacion: "Afrika, Südasien und Südostasien",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206812/cobra_bt3kh4.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206182/cobraD_s9huij.png"
  },
  {
    nombre: "Anakonda",
    altura: 6000,  //mm
    peso: 100000,  //g
    velocidad: 5, // km/h
    habilidad: "Kann ihre Beute durch Umklammerung ersticken",
    armas:"Wickelt sich um Beute und drückt zu, bis sie erstickt.",
    ubicacion: "Tropische Regenwälder und Flüsse Südamerikas",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206852/anaconda_hikuy4.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206182/anacondaD_uzdwha.png"
  },
  {
    nombre: "Klapperschlange",
    altura: 2000,  //mm
    peso: 4500,    //g
    velocidad: 5, // km/h
    habilidad: "Verwendet ihr charakteristisches Rasseln zur Warnung und Abschreckung potenzieller Bedrohungen",
    armas:"Warnt mit ihrem Rasseln und nutzt giftige Bisse.",
    ubicacion: "Amerikas, besonders im Südwesten der USA, in Mexiko und Mittelamerika",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730207416/cascabR_nahbbh.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730242894/cascabD_tg9oby.png"
  }
]
export default animalsData;
// Beutelratte: Täuscht den Tod vor und sondert einen unangenehmen Geruch ab, um Feinde abzuschrecken.