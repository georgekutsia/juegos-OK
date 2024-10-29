const animalsData = [
  {  
    nombre: "Erizo",
    altura: 300,  //mm
    peso: 1200,  //g
    velocidad:0.3, // km/h
    habilidad: "No es particularmente fuerte, pero se defiende eficazmente al enrollarse en una bola cubierta de espinas",
    ubicacion: "Europa, Asia, África y Nueva Zelanda (introducido); prefieren hábitats como bosques, praderas y jardines",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262134/Erizo_xrhaqy.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167094/draw-erizo_urm4ht.png",
  },  
  {
    nombre: "Alce",
    altura: 2100,  //mm
    peso: 700000, //g
    velocidad:56, // km/h
    habilidad: "Extremadamente fuerte, capaces de cargar o arrastrar grandes pesos, y con cuernos poderosos",
    ubicacion: "América del Norte, Europa y Asia, en bosques boreales y tundras",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262115/Alce_jpqx03.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167094/draw-alce_owmr2b.png",
    
  },
  {
    nombre: "Ciervo",
    altura: 1200,  //mm
    peso: 300000, //g
    velocidad: 75, // km/h
    habilidad: "Ágiles y veloces, con cuernos fuertes en los machos que usan para defenderse y competir",
    ubicacion: "América, Europa, Asia y el norte de África, en bosques, praderas y montañas",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262122/Ciervo_abzbeb.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167091/draw-ciervo_skayyp.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510215/deer_yyh6v9.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510215/deer-bleats_psdhby.mp3"]
  },
  {
    nombre: "Burro",
    altura: 1400,  //mm
    peso: 570000, //g
    velocidad:50, // km/h
    habilidad: "Muy fuerte para su tamaño, utilizado tradicionalmente para cargar y transportar objetos pesados en terrenos difíciles",
    ubicacion: "Doméstico en todo el mundo, especialmente en áreas rurales y montañosas",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262106/Burro_ov26kd.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167089/draw-burro_kviwrw.png",
    
  },
  {
    nombre: "Medusa",
    altura: 1000,  //mm
    peso: 200000, //g
    velocidad:0.01, // km/h
    habilidad: "Dependen de su veneno en los tentáculos para paralizar a sus presas, aunque su estructura es delicada",
    ubicacion: "Océanos de todo el mundo, especialmente en aguas cálidas y templadas",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262103/Medusa_rim9pb.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167084/draw-medusa_smzuqh.png",
    
  },
  {
    nombre: "Mantis Religiosa",
    altura: 120,  //mm
    peso: 10,   //g
    velocidad:0.18, // km/h
    habilidad: "Fuertes patas delanteras que usan para atrapar y sostener a sus presas. Tienen mandíbulas afiladas para desgarrar",
    ubicacion: "En todo el mundo, especialmente en regiones tropicales y templadas",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262102/Mantis_Religiosa_ozbbpv.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167090/draw-mantis_dqg65i.png",
    
  },
  {
    nombre: "Hipopótamo",
    altura: 1500,  //mm
    peso: 3200000, //g
    velocidad:38.8, // km/h
    habilidad: "Extremadamente fuerte, con mandíbulas poderosas capaces de ejercer una fuerza de mordida de hasta 1,800 psi. Son animales muy territoriales y peligrosos",
    ubicacion: "África subsahariana, en ríos, lagos y áreas cercanas al agua",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262129/Hipopo%CC%81tamo_rg14r7.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167088/draw-hipopotamo_vfrtxf.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728506289/Hipopotamo1_tlghpm.mp3"]
  },
  {
    nombre: "Reno",
    altura: 1400,  //mm
    peso: 300000, //g
    velocidad:60, // km/h
    habilidad: "Muy fuerte, con cuernos grandes y usados tradicionalmente como animales de carga",
    ubicacion: "Ártico y subártico, incluyendo América del Norte, Europa y Asia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262130/Reno_lnekjr.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167093/draw-reno_uphqeu.png",
    
  },
  {
    nombre: "Tiburón Tigre",
    altura: 5500,  //mm
    peso: 900000, //g
    velocidad:32, // km/h
    habilidad: "Mandíbulas extremadamente poderosas y capaces de morder presas grandes. Tienen una mordida fuerte para romper conchas de tortugas",
    ubicacion: "Océanos tropicales y subtropicales en todo el mundo, especialmente cerca de arrecifes y costas",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262092/TIburo%CC%81n_wpz2wi.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167087/draw-tiburo%CC%81n_foofnd.png",
    
  },
  {
    nombre: "Tiburón Martillo",
    altura: 6000,  //mm
    peso: 450000, //g
    velocidad:28.8, // km/h
    habilidad: "Mandíbulas fuertes y cabeza en forma de martillo, lo que les otorga una gran capacidad para detectar presas a través de campos eléctricos",
    ubicacion: "Océanos tropicales y cálidos en todo el mundo, cerca de costas y arrecifes",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262109/Tiburo%CC%81n_Martillo_bvfqo7.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167087/draw-tiburo%CC%81nmartillo_yegxen.png",
    
  },
  {
    nombre: "Pez Espada",
    altura: 4500,  //mm
    peso: 650000, //g
    velocidad: 97, // km/h
    habilidad: "El largo y afilado 'espada' de su hocico es extremadamente fuerte y lo usa para cazar y defenderse",
    ubicacion: "Océanos tropicales, subtropicales y templados de todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262099/Pez_Espada_iolnwr.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167086/draw-tiburo%CC%81nespada_kf9ves.png",
    
  },
  {
    nombre: "Cangrejo",
    altura: 500,  //mm
    peso: 4000,  //g
    velocidad:0.36, // km/h
    habilidad: "Poseen pinzas muy fuertes que usan para defenderse y alimentarse",
    ubicacion: "Océanos, costas, ríos y manglares de todo el mundo, dependiendo de la especie",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262132/Cangrejo_wjkbe3.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167090/draw-cangrejo_ofaevg.png",
    
  },
  {
    nombre: "Libélula",
    altura: 50,    //mm
    peso: 1.5,    //g
    velocidad:24, // km/h
    habilidad: "Ágil voladora, capaz de volar largas distancias",
    ubicacion: "Zonas húmedas en todo el mundo excepto en áreas extremadamente frías",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261877/Libe%CC%81lula_djewmd.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167165/draw-libelula_gppi2a.png",
    
  },
  {
    nombre: "Jirafa",
    altura: 6000,  //mm
    peso: 1200000, //g
    velocidad:52, // km/h
    habilidad: "Fuertes piernas capaces de dar patadas poderosas",
    ubicacion: "Sabana africana",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261877/Jirafa_rsrqsd.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167164/draw-jirafa_fpfyrq.png",
    
  },
  {
    nombre: "Zarigüeya",
    altura: 250,   //mm
    peso: 2000,   //g
    velocidad:6.3, // km/h
    habilidad: "Ágiles trepadores",
    ubicacion: "América del Norte y del Sur",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262093/Zarigu%CC%88ella_xogcqr.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167164/draw-zariguella_crhuu1.png",
    
  },
  {
    nombre: "Oso Hormiguero",
    altura: 2100,  //mm
    peso: 65000,  //g
    velocidad:1.44, // km/h
    habilidad: "Garras fuertes para romper nidos de hormigas",
    ubicacion: "América Central y del Sur",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261934/Oso_Hormiguero_lmbo22.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167163/draw-osohormiguero_a0pyns.png",
    
  },
  {
    nombre: "Elefante",
    altura: 3300,  //mm
    peso: 6000000, //g
    velocidad: 40, // km/h
    habilidad: "Capaz de cargar objetos de más de 1,000 kg",
    ubicacion: "África y Asia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262089/Elefante_kibmid.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167162/draw-elefante_csvily.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510236/elefante1_wtixcq.mp3"]
  },
  {
    nombre: "Mapache",
    altura: 700,   //mm
    peso: 9000,   //g
    velocidad:18, // km/h
    habilidad: "Fuertes garras para trepar",
    ubicacion: "América del Norte",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261879/Mapache_jlpn6j.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167160/draw-mapache_das9l2.png",
    
  },
  {
    nombre: "Cerdo",
    altura: 900,   //mm
    peso: 300000, //g
    velocidad:16.2, // km/h
    habilidad: "Resistentes y adaptables",
    ubicacion: "Doméstico en todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261924/Cerdo_rf1jr3.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167160/draw-cerdo_rlw3va.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510239/cerdo3_ejhjcy.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510238/cerdo2_ihsoqj.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510237/cerdo1_zbhcdo.mp3"]
  },
  {
    nombre: "Chimpancé",
    altura: 1700,  //mm
    peso: 70000,  //g
    velocidad:25.2, // km/h
    habilidad: "Aproximadamente 1.5 - 2 veces más fuerte que un humano",
    ubicacion: "África central y occidental",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261876/Chimpance%CC%81_bvvuy3.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167159/draw-chimpance_ghmz7c.png",
    
  },
  {
    nombre: "Murciélago",
    altura: 150,   //mm
    peso: 40,    //g
    velocidad:36, // km/h
    habilidad: "Fuerte para su tamaño en términos de vuelo",
    ubicacion: "En todo el mundo excepto regiones frías",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261922/Murcie%CC%81lago_lsttie.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167158/draw-murcielago_ajcazk.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510241/murcielagos2_my41dk.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510242/murcielagos1_gsrwwr.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510215/animals093_rxxsk2.mp3"]
  },
  {
    nombre: "Oso Pardo",
    altura: 3000,  //mm
    peso: 360000, //g
    velocidad:56, // km/h
    habilidad: "Extremadamente fuerte, con garras poderosas",
    ubicacion: "América del Norte, Europa, Asia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262062/Oso_Pardo_nvki65.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167158/draw-osopardo_bfonmk.png",
    
  },
  {
    nombre: "Tigre",
    altura: 1200,  //mm
    peso: 300000, //g
    velocidad:65, // km/h
    habilidad: "Gran fuerza en patas y mandíbula",
    ubicacion: "Asia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261868/Tigre_vlzhzw.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167083/draw-tigre_du6ov6.png",
    
  },
  {
    nombre: "Pantera Negra",
    altura: 800,   //mm
    peso: 100000, //g
    velocidad:58, // km/h
    habilidad: "Gran fuerza muscular y mandíbulas fuertes",
    ubicacion: "América Central y del Sur",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261881/Pantera_jbgojc.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167152/draw-pantera_dfkqdk.png",
    
  },
  {
    nombre: "León",
    altura: 1200,  //mm
    peso: 250000, //g
    velocidad:80, // km/h
    habilidad: "Muy fuerte, capaz de derribar grandes presas",
    ubicacion: "África subsahariana, India",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262060/Leo%CC%81n_qk6dxm.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167152/draw-leon_zjivis.png",
    
  },
  {
    nombre: "Guepardo",
    altura: 900,   //mm
    peso: 70000,  //g
    velocidad:120, // km/h
    habilidad: "Más adaptado a la velocidad que a la fuerza", 
    ubicacion: "África y partes de Irán",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262058/Guepardo_uhykah.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167117/draw-guepardo_mydoxp.png",
    
  },
  {
    nombre: "Jaguar",
    altura: 900,   //mm
    peso: 120000, //g
    velocidad:80, // km/h
    habilidad: "Mandíbulas extremadamente fuertes",
    ubicacion: "América Central y del Sur",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261926/Jaguar_qskubz.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727269782/draw-jaguar_xsubli.png",
    
  },
  {
    nombre: "Kanguro",
    altura: 2000,  //mm
    peso: 90000,  //g
    velocidad:70, // km/h
    habilidad: "Patadas poderosas",
    ubicacion: "Australia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262109/Canguro_iucqmd.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167116/draw-kanguro_dhtzie.png",
    
  },
  {
    nombre: "Caballo",
    altura: 1800,  //mm
    peso: 1000000, //g
    velocidad:82, // km/h
    habilidad: "Extremadamente fuerte, especialmente en las patas traseras, usados tradicionalmente para trabajos de carga, transporte y competición",
    ubicacion: "Doméstico en todo el mundo, especialmente en áreas rurales, granjas y para actividades deportivas",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262107/Caballo_k5uvjo.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167092/draw-caballo_vfyds7.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510244/caballo1_rcnihg.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510243/caballo3_krjr4d.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510243/caballo2_fzlsjv.mp3",]
  },
  {
    nombre: "Avestruz",
    altura: 2700,  //mm
    peso: 150000, //g
    velocidad:70, // km/h
    habilidad: "Patadas fuertes que pueden ser mortales",
    ubicacion: "África",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262065/Avestruz_ncmyvg.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167116/draw-avestruz_lyjnsw.png",
    
  },
  {
    nombre: "Rinoceronte",
    altura: 1800,  //mm
    peso: 3500000, //g
    velocidad:40.6, // km/h
    habilidad: "Muy fuerte, capaz de cargar a gran velocidad", 
    ubicacion: "África y Asia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262101/Rinoceronte_kkbb1r.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167094/draw-rinoceronte_ecrwmb.png",
    
  },
  {
    nombre: "Pato",
    altura: 500,   //mm
    peso: 1500,   //g
    velocidad: 90, // km/h
    habilidad: "Moderada para su tamaño",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262120/Pato_clv5xx.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167115/draw-pato_fjbbo5.png",
    
  },
  {
    nombre: "Gaviota",
    altura: 600,   //mm
    peso: 1500,   //g
    velocidad:64.2, // km/h
    habilidad: "Moderada para su tamaño",
    ubicacion: "Costas de todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262091/Gaviota_ubpisa.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167085/draw-gaviota_p1k1vs.png",
    
  },
  {
    nombre: "Albatros",
    altura: 1300,  //mm
    peso: 12000,  //g
    velocidad:110, // km/h
    habilidad: "Capaces de viajar largas distancias",
    ubicacion: "Océanos del hemisferio sur",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262111/Albatross_ynypue.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167086/draw-albatros_jk5kbg.png",
    
  },
  {
    nombre: "Paloma",
    altura: 350,   //mm
    peso: 400,    //g
    velocidad:59, // km/h
    habilidad: "Moderada para su tamaño",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262128/Paloma_vkamuh.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167085/draw-paloma_cuyv19.png",
    
  },
  {
    nombre: "Camaleón",
    altura: 600,   //mm
    peso: 200,    //g
    velocidad:0.036, // km/h
    habilidad: "Poca fuerza física, gran habilidad para camuflarse",
    ubicacion: "África y Madagascar",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262123/Camaleo%CC%81n_j84ihx.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167085/draw-camaleon_wx8imk.png",
    
  },
  {
    nombre: "Lagarto",
    altura: 200,  //mm
    peso: 150, //g
    velocidad:3.6, // km/h
    habilidad: "Algunas especies tienen mandíbulas poderosas",
    ubicacion: "En todo el mundo excepto en zonas frías",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262099/Lagarto_tct0tn.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167084/draw-lagarto_mh1rbo.png",
    
  },
  {
    nombre: "Pelícano",
    altura: 1000,  //mm
    peso: 15000,  //g
    velocidad:39.6, // km/h
    habilidad: "Poca fuerza física, gran capacidad para pescar",
    ubicacion: "Costas de todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262095/Peli%CC%81cano_opb0ey.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727269780/draw-peli%CC%81cano_goacru.png",
    
  },
  {
    nombre: "Loro",
    altura: 200,  //mm
    peso: 1500,   //g
    velocidad:70, // km/h
    habilidad: "Pico fuerte para romper cáscaras",
    ubicacion: "América del Sur, África y Australia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261922/Papagayo_l5fmon.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727269785/draw-loro_tkazis.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510226/loro_tn5meb.mp3"]
  },
  {
    nombre: "Papagayo",
    altura: 700,  //mm
    peso: 1500,   //g
    velocidad:56, // km/h
    habilidad: "Picos extremadamente fuertes capaces de romper nueces y semillas duras. Son aves muy inteligentes y ágiles",
    ubicacion: "América del Sur, África y Australia, en selvas tropicales y bosques",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728389841/papagayo3_xd2uay.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167084/draw-loro_tpoyti.png",
    
  },
  {
    nombre: "Águila",
    altura: 900,  //mm
    peso: 5000,   //g
    velocidad:160, // km/h
    habilidad: "Garras extremadamente poderosas y visión aguda, capaces de capturar y levantar presas grandes. Son aves rápidas y muy fuertes",
    ubicacion: "América del Norte, Europa y Asia, en montañas, bosques y áreas abiertas",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728330301/aguilaRealista_dmsvgj.png",
    imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728329892/aguilaInfantal_w85rzm.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510224/Aguila5_khh2jn.mp3"]
  },
  {
    nombre: "Abeja",
    altura: 12,   //mm
    peso: 100,     //g
    velocidad:23.8, // km/h
    habilidad: "Pequeña, pero esenciales polinizadoras",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261878/Abeja_lqehsk.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167084/draw-abeja_fgzt7v.png",
    
  },
  {
    nombre: "Comadreja",
    altura: 300,   //mm
    peso: 500,    //g
    velocidad:25, // km/h
    habilidad: "Ágil y rápida",
    ubicacion: "América del Norte, Europa, Asia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261881/Comadreja_erbc05.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167083/draw-comadreja_z6fylp.png",
    
  },
  {
    nombre: "Ciempiés",
    altura: 300,   //mm
    peso: 1,      //g
    velocidad:0.72, // km/h
    habilidad: "Algunas especies tienen veneno fuerte",
    ubicacion: "En todo el mundo, lugares húmedos",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262116/Ciempie%CC%81s_yprhkz.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167168/draw-cienpie%CC%81s_oxy8sy.png",
    
  },
  
  
  
  
  
  
  
  
  
  
  
  {
    nombre: "Rana",
    altura: 300,   //mm
    peso: 3000,   //g
    velocidad:3, // km/h
    habilidad: "Buenas saltadoras, algunas con veneno potente",
    ubicacion: "En todo el mundo, zonas húmedas",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262095/Rana_efbxcm.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167167/draw-rana_jjjwnn.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510239/rana_yiu0ho.mp3"]
  },{
    nombre: "Búho",
    altura: 600,  //mm
    peso: 2000,   //g
    velocidad:40, // km/h
    habilidad: "Poderosas garras y una excelente visión nocturna, lo que los convierte en grandes cazadores. Su vuelo es silencioso y preciso",
    ubicacion: "América del Norte, Europa, Asia y África, en bosques y áreas montañosas",
    imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728374042/buhoRealista.webp_mveruh.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728374067/buhoInfantil.webp_zmfpvn.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510225/buho5_vf4wzt.mp3"]
  },
  {
    nombre: "Gusano",
    altura: 60,   //mm
    peso: 30,    //g
    velocidad:0.018, // km/h
    habilidad: "Capaces de mover grandes cantidades de tierra",
    ubicacion: "En todo el mundo, suelos húmedos",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262064/Gusano_he4zou.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167166/draw-gusano_obhop5.png",
    
  },
  {
    nombre: "Gallo",
    altura: 700,   //mm
    peso: 5000,   //g
    velocidad:10.8, // km/h
    habilidad: "Defiende su territorio",
    ubicacion: "Doméstico en todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206793/gallo_fi0sdz.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167172/draw-gallo_vbsrzn.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510232/gallo2_wh0z6i.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510231/gallo1_oi0ibz.mp3"]
  },
  {
    nombre: "Pollo",
    altura: 600,   //mm
    peso: 4000,   //g
    velocidad:10.4, // km/h
    habilidad: "Relativamente poca fuerza, pero son ágiles y pueden correr rápido. Usados principalmente para la producción de carne y huevos",
    ubicacion: "Doméstico en todo el mundo, comúnmente en granjas y áreas rurales",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206821/pollo_gsgysc.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167171/draw-pollo_kbg5sf.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510232/pollo_hojaiy.mp3"]
  },
  {
    nombre: "Pollito",
    altura: 100,   //mm
    peso: 40,    //g
    velocidad:0.72, // km/h
    habilidad: "Muy débil en sus primeras etapas de vida, pero rápidamente se fortalecen para caminar y alimentarse",
    ubicacion: "Doméstico en todo el mundo, en granjas y áreas rurales",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262094/Pollito_b5atbb.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167162/draw-pollito_xtmglt.png",
    
  },
  {
    nombre: "Koala",
    altura: 850,   //mm
    peso: 15000,  //g
    velocidad:2.08, // km/h
    habilidad: "Fuertes garras para trepar",
    ubicacion: "Australia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262117/Koala_coenjs.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167171/draw-koala_kym6lu.png",
    
  },
  {
    nombre: "Ballena",
    altura: 30000,   //mm
    peso: 200000000, //g
    velocidad:48, // km/h
    habilidad: "Extremadamente fuerte, capaz de nadar grandes distancias y soportar inmensas presiones oceánicas",
    ubicacion: "Océanos de todo el mundo, especialmente en aguas profundas y en zonas polares y templadas",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262086/Ballena_jfpp7d.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167086/draw-ballena_bueqg2.png",
    
  },
  {
    nombre: "Cabra",
    altura: 800,   //mm
    peso: 140000, //g
    velocidad:15.2, // km/h
    habilidad: "Capaces de trepar y saltar grandes distancias",
    ubicacion: "Doméstico en todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262085/Cabra_obc2bh.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167170/draw-cabra_qui0c8.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510234/goat2_dec4ra.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510233/GOAT_dw1n6w.mp3"]
  },
  {
    nombre: "Pez Payaso",
    altura: 110,   //mm
    peso: 250,    //g
    velocidad:3.6, // km/h
    habilidad: "Adaptados a la simbiosis con anémonas",
    ubicacion: "Océanos Índico y Pacífico",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261868/Pez_Payaso_vppv5h.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727267551/draw-pez_djxdpr.png",
    
  },
  {
    nombre: "Conejo",
    altura: 300,   //mm
    peso: 3000,   //g
    velocidad: 60, // km/h
    habilidad: "Capaz de cavar madrigueras",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262131/Conejo_uyb02o.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167175/draw-conejo_wk1tyi.png",
    
  },
  {
    nombre: "Camello",
    altura: 2300,  //mm
    peso: 1000000, //g
    velocidad:64.6, // km/h
    habilidad: "Muy fuerte, capaces de cargar hasta 200 kg por largas distancias en condiciones áridas",
    ubicacion: "Desiertos y regiones áridas de África del Norte, Medio Oriente y Asia Central",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262127/Camello_aoj9bj.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167089/draw-camello_d0e5ic.png",
    
  },
  {
    nombre: "Lobo",
    altura: 1200,   //mm
    peso: 80000,  //g
    velocidad:62.4, // km/h
    habilidad: "Mandíbulas poderosas",
    ubicacion: "América del Norte, Europa, Asia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206790/loboR_mxlq5p.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167174/draw-lobo_kyni1g.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510231/lobo2_s59clz.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510230/lobo1_dcoemm.mp3"]
  },
  {
    nombre: "Araña",
    altura: 20,    //mm
    peso: 50,    //g
    velocidad:2, // km/h
    habilidad: "Telarañas extremadamente fuertes en proporción",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262059/Aran%CC%83a_pp2ifi.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727267555/draw-aran%CC%83a_bllmta.png",
    
  },
  {
    nombre: "Cocodrilo",
    altura: 1800,  //mm
    peso: 1200000, //g
    velocidad:14.4, // km/h
    habilidad: "Mandíbulas extremadamente poderosas",
    ubicacion: "América, África, Asia, Australia",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262121/Cocodrilo_ez3qj5.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167178/draw-cocodrilo_hqcqxm.png",
    
  },
  {
    nombre: "Ardilla",
    altura: 300,   //mm
    peso: 500,    //g
    velocidad:18, // km/h
    habilidad: "Ágiles y rápidas",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262105/Ardilla_yck1kl.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167177/draw-ardilla_fyy1n8.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510228/ardilla2_bevitm.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510228/ardilla_qdy4di.mp3"]
  },
  {
    nombre: "Zorro",
    altura: 550,   //mm
    peso: 14000,  //g
    velocidad:45.2, // km/h
    habilidad: "Ágil y rápido",
    ubicacion: "América, Europa, Asia y África",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262124/Zorro_jh4vll.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167176/draw-zorro_wvzjy8.png",
    
  },
  {
    nombre: "Grillo",
    altura: 50,    //mm
    peso: 2,      //g
    velocidad:1.9, // km/h
    habilidad: "Fuerte para su tamaño, especialmente en las patas traseras, lo que les permite saltar grandes distancias",
    ubicacion: "En todo el mundo, en áreas como campos, jardines y bosques",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262114/Grillo_ttewg8.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727267550/draw-grillo_ia2ajk.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510227/grillos2_gmpmdz.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510226/grillos_q64vs7.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510225/grillo45_qvcejp.mp3"]
  },
  {
    nombre: "Pulpo",
    altura: 5000,  //mm
    peso: 100000, //g
    velocidad:40, // km/h
    habilidad: "Tentáculos extremadamente fuertes y flexibles, con capacidad de ejercer gran fuerza en cada ventosa",
    ubicacion: "Océanos de todo el mundo, especialmente en aguas costeras y de arrecifes",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262112/Pulpo_o5agwq.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167089/draw-pulpo_iz4rsn.png",
    
  },
  {
    nombre: "Vaca",
    altura: 1800,  //mm
    peso: 900000, //g
    velocidad:35.4, // km/h
    habilidad: "Usadas en trabajos de carga",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206788/vacaR_wtknhx.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167176/draw-vaca_d2wpwn.png",
    sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510230/vaca3_aip9z5.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510229/vaca2_huzmyx.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510228/vaca1_qn4noq.mp3"]
  },
  {
    nombre: "Armadillo",
    altura: 250,   //mm
    peso: 35000,   //g
    velocidad:30, // km/h
    habilidad: "Fuerte para cavar",
    ubicacion: "América Central y del Sur",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261921/Armadillo_kwml7v.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167156/draw-armadillo_x68x1u.png",
    
  },
  {
    nombre: "Oveja",
    altura: 1000,  //mm
    peso: 160000, //g
    velocidad:29, // km/h
    habilidad: "Moderada, criadas para lana, carne y leche",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262061/Oveja_iqgabj.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167153/draw-oveja_uahsro.png",
    
  },
  {
    nombre: "Hormiga",
    altura: 25,  //mm
    peso: 5,      //g
    velocidad:2.72, // km/h
    habilidad: "Levantan 10 a 50 veces su peso corporal",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261894/Hormiga_krv9kg.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167153/draw-hormiga_txi99m.png",
    
  },
  {
    nombre: "Oso Polar",
    altura: 2200,  //mm
    peso: 700000, //g
    velocidad:40, // km/h
    habilidad: "Muy fuerte, depredadores superiores",
    ubicacion: "Ártico",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262086/Oso_Polar_zdawga.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167157/draw-osopolar_xxxhvy.png",
    
  },
  {
    nombre: "Oso Panda",
    altura: 950,   //mm
    peso: 120000, //g
    velocidad:30.2, // km/h
    habilidad: "Mandíbulas fuertes para masticar bambú",
    ubicacion: "Bosques de bambú en China",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262061/Oso_Panda_nwpgma.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167093/draw-osopanda_wkghwo.png",
    
  },
  {
    nombre: "Mariposa",
    altura: 120,   //mm
    peso: 0.5,    //g
    velocidad:11.2, // km/h
    habilidad: "Buena capacidad de vuelo para su tamaño",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727262066/Mariposa_mncctj.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167153/draw-mariposa_tg25kl.png",
    
  },
  {
    nombre: "Mariquita",
    altura: 10,    //mm
    peso: 0.1,    //g
    velocidad:3.6, // km/h
    habilidad: "Fuerte para su tamaño",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261882/Mariquita_fo6kxx.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167153/draw-mariquita_ad7cxg.png",
    
  },
  {
    nombre: "Toro",
    altura: 1800,  //mm
    peso: 1000000, //g
    velocidad:38, // km/h
    habilidad: "Extremadamente fuerte",
    ubicacion: "En todo el mundo",
    imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727261923/Toro_hnzfdj.png",
    imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1727167117/draw-toro_rqq7ng.png",
    
  },    {
      nombre: "Cerdo salvaje",
      altura: 750,  //mm
      peso: 80000,  //g
      velocidad: 48, // km/h
      habilidad: "Posee colmillos fuertes y afilados que utiliza para defenderse y excavar",
      ubicacion: "Bosques, selvas y áreas rurales de Europa, Asia y algunas partes de América",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465867/cerdo_salvaje_vvbo5p.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478317/cerdo_salvaje-_ohhrdw.png",
      
    },
    {
      nombre: "Coyote",
      altura: 600,  //mm
      peso: 15000,  //g
      velocidad: 64, // km/h
      habilidad: "Gran resistencia y adaptabilidad, cazador solitario o en grupo",
      ubicacion: "América del Norte, desde Canadá hasta México",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465863/coyote_jqadwx.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478336/coyote-_ipyxmq.png",
      
    },
    {
      nombre: "Tortuga",
      altura: 500,  //mm
      peso: 50000,  //g
      velocidad: 0.27, // km/h
      habilidad: "Caparazón resistente que protege su cuerpo de depredadores",
      ubicacion: "Océanos, ríos, y cuerpos de agua dulce en todo el mundo",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465871/tortuga_vvhhjx.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478318/tortuga-_q0mde3.png",
      
    },
    {
      nombre: "Caracol",
      altura: 50,  //mm
      peso: 30,  //g
      velocidad: 0.03, // km/h
      habilidad: "Usa su baba para adherirse a superficies verticales y desplazarse",
      ubicacion: "Zonas húmedas y templadas en todo el mundo",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465869/caracol_eqnirp.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478322/caracol-_shznol.png",
      
    },
    {
      nombre: "Chihuahua",
      altura: 230,  //mm
      peso: 2500,  //g
      velocidad: 24, // km/h
      habilidad: "Pequeño pero valiente, tiene gran agilidad",
      ubicacion: "Doméstico, originario de México",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465865/perro_chihuahua_c71cfz.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478323/perro_chichuahua-_m3xxqc.png",
      
    },
    {
      nombre: "Pastor Alemán",
      altura: 650,  //mm
      peso: 40000,  //g
      velocidad: 48, // km/h
      habilidad: "Fuerte, leal y utilizado en trabajos policiales y de rescate",
      ubicacion: "Doméstico, originario de Alemania",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465842/perro_pastor_alema%CC%81n_rflldf.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478321/perro_pastor-alema%CC%81n_jfspwu.png",
      
    },
    {
      nombre: "Poodle",
      altura: 450,  //mm
      peso: 20000,  //g
      velocidad: 35, // km/h
      habilidad: "Inteligente y muy ágil, utilizado en competencias de agilidad",
      ubicacion: "Doméstico, originario de Francia",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465845/perro_puddle_nyyww2.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478317/perro_puddle-_i6uz4a.png",
      
    },
    {
      nombre: "Dálmata",
      altura: 580,  //mm
      peso: 32000,  //g
      velocidad: 60, // km/h
      habilidad: "Resistencia para correr largas distancias",
      ubicacion: "Doméstico, originario de Croacia",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465846/perro_da%CC%81lmata_brmd6w.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728478322/perro_da%CC%81lmata-_ga9nu2.png",
      
    },
    {
      nombre: "Pug",
      altura: 300,  //mm
      peso: 8000,  //g
      velocidad: 10, // km/h
      habilidad: "Perro compacto y musculoso, conocido por su gran personalidad",
      ubicacion: "Doméstico, originario de China",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465843/pug_loptiw.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728482852/perro_pug-_k3nlzq.png",
      
    },
    {
      nombre: "Golden Retriever",
      altura: 610,  //mm
      peso: 34000,  //g
      velocidad: 48, // km/h
      habilidad: "Excelente nadador, utilizado en rescate acuático",
      ubicacion: "Doméstico, originario de Reino Unido",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465841/perro_golden_retriever_es3bw0.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728482853/perro_golden-retriever-_jwergj.png",
      
    },
    {
      nombre: "Gato siamés",
      altura: 250,  //mm
      peso: 4000,  //g
      velocidad: 48, // km/h
      habilidad: "Muy ágil y rápido para cazar",
      ubicacion: "Doméstico, originario de Tailandia",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465840/gato_siame%CC%81s_rrkn2m.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480012/gato_siame%CC%81s-_eksq7t.png",
      
    },
    {
      nombre: "Gato esfinge",
      altura: 230,  //mm
      peso: 3500,  //g
      velocidad: 30, // km/h
      habilidad: "Rápido y ágil a pesar de su apariencia frágil",
      ubicacion: "Doméstico, originario de Canadá",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465839/gato_esfinje_grfci8.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206181/gatoPersa_sjin9x.png",
      
    },
    {
      nombre: "Gato naranja",
      altura: 250,  //mm
      peso: 4500,  //g
      velocidad: 48, // km/h
      habilidad: "Muy juguetón y hábil para cazar",
      ubicacion: "Doméstico, encontrado en todo el mundo",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465862/gato_naranja_bo8xlh.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480010/gato_naranja-_h0w6ls.png",
      sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510223/gato8_aptdez.mp3"]
    },
    {
      nombre: "Gato persa",
      altura: 250,  //mm
      peso: 5000,  //g
      velocidad: 30, // km/h
      habilidad: "De temperamento tranquilo y cariñoso, no es un gran cazador",
      ubicacion: "Doméstico, originario de Persia (Irán)",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465865/gato_persa_pykg3i.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480017/gato_persa-_kji2cv.png",
      
    },
    {
      nombre: "Ratón",
      altura: 60,  //mm
      peso: 20,  //g
      velocidad: 13, // km/h
      habilidad: "Rápido y hábil, con gran capacidad para escabullirse por pequeños espacios",
      ubicacion: "Zonas urbanas y rurales en todo el mundo",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465838/rato%CC%81n.webp_ch8dyy.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480013/rato%CC%81n-c%CC%A7_o0zz39.png",
      
    },
    {
      nombre: "Zebra",
      altura: 1500,  //mm
      peso: 350000,  //g
      velocidad: 65, // km/h
      habilidad: "Resistente y rápida, capaz de correr largas distancias",
      ubicacion: "África, en sabanas y pastizales",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465846/zebra_yrrubj.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480006/zebra-_hlt3sg.png",
      
    },
    {
      nombre: "Pingüino",
      altura: 1100,  //mm
      peso: 35000,  //g
      velocidad: 12, // km/h
      habilidad: "Gran nadador, capaz de bucear a grandes profundidades",
      ubicacion: "Regiones polares y costeras del hemisferio sur",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465838/Pingu%CC%88ino_sijl2l.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480007/pingu%CC%88ino-_t62b70.png",
      
    },
    {
      nombre: "Nutria",
      altura: 600,  //mm
      peso: 15000,  //g
      velocidad: 10.9, // km/h
      habilidad: "Gran habilidad para nadar y cazar peces",
      ubicacion: "Ríos y lagos de Europa, América y Asia",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728465848/nutria_e0ie9q.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206182/nutria_jhqy8e.png",
      
    },
    {
      nombre: "Mosca",
      altura: 6,  //mm
      peso: 0.005,  //g
      velocidad: 8, // km/h
      habilidad: "Rápidos reflejos y vuelo ágil",
      ubicacion: "En todo el mundo, especialmente en zonas cálidas",
      imagenReal:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728477893/moscaReal_qv8wyb.png",
      imagenAnimada:"https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480008/mosca-g_ei4boc.png",
      sonido:["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510225/mosca52_i3bznd.mp3"]
    },
      {
        nombre: "Mosquito",
        altura: 10,  //mm
        peso: 0.01,  //g
        velocidad: 2, // km/h
        habilidad: "Sus antenas detectan el dióxido de carbono exhalado por sus presas a varios metros de distancia",
        ubicacion: "Zonas húmedas y cálidas, especialmente en áreas tropicales y subtropicales",
        imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728477892/mosquitoReal_xqwwd7.png",
        imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728479997/mosquito-_i88va7.png",
        
      },
      {
        nombre: "Bisonte",
        altura: 1800,  //mm
        peso: 900000,  //g
        velocidad: 56, // km/h
        habilidad: "Cuerpo robusto y musculoso, capaz de correr rápido y atacar con su poderosa cornamenta",
        ubicacion: "Praderas y bosques de América del Norte y Europa",
        imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728477893/bisonteReal_dytyyd.png",
        imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480009/bisonte-_ufajkg.png",
        
      },
      {
        nombre: "Cucaracha",
        altura: 15,  //mm
        peso: 0.3,  //g
        velocidad: 5, // km/h
        habilidad: "Extremadamente resistente, capaz de sobrevivir en condiciones muy adversas",
        ubicacion: "Presente en todo el mundo, especialmente en áreas urbanas",
        imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728477892/cucarachaReal_tauvik.png",
        imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1728480007/cucaracha-_tm9sbe.png",
        
      },
      {
        nombre: "Gorila",
        altura: 1700,  //mm
        peso: 180000,  //g
        velocidad: 40, // km/h
        habilidad: "Los gorilas pueden levantar hasta 10 veces su peso corporal",
        ubicacion: "Selvas tropicales de África central",
        imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206825/gorilaReal_ieodbu.png",
        imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206181/gorilaDIb_ek3gkq.png",
        sonido: ["https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510241/gorila2_l42xd7.mp3","https://res.cloudinary.com/dtv1oj9bq/video/upload/v1728510240/gorila1_qosalm.mp3",]
    },
    {
      nombre: "Cobra",
      altura: 3000,  //mm
      peso: 4500,    //g
      velocidad: 8, // km/h
      habilidad: "Algunas especies pueden escupir veneno con precisión hasta 2 metros de distancia",
      ubicacion: "África, el sur de Asia y el sudeste asiático",
      imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206812/cobra_bt3kh4.png",
      imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206182/cobraD_s9huij.png",
    },
    {
      nombre: "Anaconda",
      altura: 6000,  //mm
      peso: 100000,  //g
      velocidad: 5, // km/h
      habilidad: "Pueden ahogar a sus presas enrollándose alrededor de ellas con gran presión",
      ubicacion: "Selvas tropicales y ríos de América del Sur",
      imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206852/anaconda_hikuy4.png",
      imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730206182/anacondaD_uzdwha.png",
    },
    {
      nombre: "Serpiente de Cascabel",
      altura: 2000,  //mm
      peso: 4500,    //g
      velocidad: 5, // km/h
      habilidad: "Usan su característico cascabel para advertir y disuadir a potenciales amenazas",
      ubicacion: "Américas, especialmente en el suroeste de EE.UU., México y América Central",
      imagenReal: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730207416/cascabR_nahbbh.png",
      imagenAnimada: "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1730242894/cascabD_tg9oby.png",
    }
]
export default animalsData;
