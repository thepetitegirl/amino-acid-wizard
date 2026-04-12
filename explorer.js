// ================================================================
//  LAB EXPLORER — MAP DATA
//  1 = wall, 0 = floor  (20 columns × 15 rows)
// ================================================================
const MAP_DATA = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1],
  [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1],
  [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
const MAP_COLS = 20, MAP_ROWS = 15, TILE = 32;

// ================================================================
//  CHEST DEFINITIONS
//  difficulty: 'easy' | 'medium' | 'hard'
//  easy   → random text question only
//  medium → text question + identify the correct SVG structure
//  hard   → text question + connect-the-dots side-chain drawing
//  qPool  → 3 questions per chest, one picked randomly each visit
//  drawDots (hard only) → {hint, nodes:[{x,y,label,color}], bonds:[[a,b],...]}
// ================================================================
const CHEST_DEFS = [
  // ── EASY chests ─────────────────────────────────────────────
  { col:2,  row:2,  aaIdx:0, difficulty:'easy', qPool:[
    { q:"What is unique about Glycine compared to all other amino acids?",
      a:"It has no side chain — just a hydrogen",
      opts:["It has no side chain — just a hydrogen","It has a benzene ring","It is always positively charged","It forms disulfide bonds"],
      exp:"Glycine's R-group is just –H, making it the smallest amino acid and the only one with no chiral centre." },
    { q:"Glycine is the only amino acid without a chiral centre. Why?",
      a:"Both substituents on Cα are hydrogen — identical",
      opts:["Both substituents on Cα are hydrogen — identical","It has a ring structure","It is the largest amino acid","It has no nitrogen"],
      exp:"A chiral centre needs four DIFFERENT groups. Glycine's Cα has two identical H atoms, so there is no L or D form." },
    { q:"Glycine provides maximum backbone flexibility in proteins. Why?",
      a:"Its tiny H side chain imposes no steric restriction",
      opts:["Its tiny H side chain imposes no steric restriction","It carries a positive charge","It forms disulfide bonds","It has a rigid ring"],
      exp:"Large side chains restrict backbone rotation. Glycine's single H allows any conformation — important in tight protein turns." }
  ]},
  { col:9,  row:2,  aaIdx:1, difficulty:'easy', qPool:[
    { q:"What is Alanine's side chain?",
      a:"A methyl group (–CH₃)",
      opts:["A methyl group (–CH₃)","A hydroxyl group (–OH)","A thiol group (–SH)","An amino group (–NH₂)"],
      exp:"Alanine has just a methyl (–CH₃) side chain — the simplest nonpolar side chain after Glycine's H." },
    { q:"Alanine is described as 'nonpolar'. What does this mean for its behaviour in a protein?",
      a:"It avoids water and is found buried inside the protein core",
      opts:["It avoids water and is found buried inside the protein core","It carries a negative charge","It forms hydrogen bonds with water","It always sits on the protein surface"],
      exp:"Nonpolar side chains lack partial charges and cannot hydrogen-bond with water — they cluster inside protein cores away from the aqueous environment." },
    { q:"Which category does Alanine belong to?",
      a:"Nonpolar (hydrophobic)",
      opts:["Nonpolar (hydrophobic)","Polar uncharged","Positively charged","Negatively charged"],
      exp:"Alanine's methyl group is completely nonpolar. It is one of the most abundant amino acids found in protein interiors." }
  ]},
  { col:2,  row:6,  aaIdx:3, difficulty:'easy', qPool:[
    { q:"Serine has a –OH (hydroxyl) group. Why does this make it 'polar'?",
      a:"–OH can form hydrogen bonds with water",
      opts:["–OH can form hydrogen bonds with water","–OH carries a full negative charge","–OH makes it hydrophobic","–OH releases a proton at all pH values"],
      exp:"The –OH group has a partial negative charge on O and partial positive on H, allowing strong hydrogen bonds with water." },
    { q:"Serine is often 'phosphorylated' in cell signalling. What does this mean?",
      a:"A phosphate group (–PO₄) is attached to its –OH",
      opts:["A phosphate group (–PO₄) is attached to its –OH","It loses its side chain","It becomes positively charged","It forms a ring structure"],
      exp:"Kinase enzymes attach a phosphate to Serine's –OH, switching proteins on or off. This is one of the most common regulatory mechanisms in cells." },
    { q:"Serine proteases use Serine as their catalytic residue. What do proteases do?",
      a:"They cut (cleave) peptide bonds in other proteins",
      opts:["They cut (cleave) peptide bonds in other proteins","They build new proteins from amino acids","They transport oxygen in blood","They store energy as fat"],
      exp:"Serine's –OH is reactive enough to attack peptide bonds. Serine proteases (trypsin, chymotrypsin) are essential digestive and signalling enzymes." }
  ]},
  { col:16, row:6,  aaIdx:4, difficulty:'easy', qPool:[
    { q:"Lysine carries a positive charge at body pH. What group causes this?",
      a:"–NH₃⁺ (protonated amino group at the chain end)",
      opts:["–NH₃⁺ (protonated amino group at the chain end)","–COO⁻ (carboxyl group)","–SH (thiol group)","–OH (hydroxyl group)"],
      exp:"Lysine's long side chain ends in –NH₂. At body pH (~7.4), this picks up a proton to become –NH₃⁺, carrying a positive charge." },
    { q:"Lysine is an 'essential' amino acid. What does essential mean in nutrition?",
      a:"The body cannot make it — must come from food",
      opts:["The body cannot make it — must come from food","It is the most abundant amino acid","It is found only in plants","It is always negatively charged"],
      exp:"9 amino acids are essential — the body lacks the enzymes to synthesise them from scratch. Lysine must come from protein-rich foods like meat, fish, eggs, and legumes." },
    { q:"Which category of food is particularly low in Lysine, making it a limiting amino acid?",
      a:"Grains and cereals (wheat, rice, maize)",
      opts:["Grains and cereals (wheat, rice, maize)","Meat and fish","Dairy products","Eggs and poultry"],
      exp:"Most plant proteins are low in Lysine. Combining grains (low Lys) with legumes (high Lys) gives a complete amino acid profile — the basis of many traditional diets." }
  ]},

  // ── MEDIUM chests (text question + structure identifier) ─────
  { col:16, row:2,  aaIdx:2, difficulty:'medium', qPool:[
    { q:"Cysteine can form a special bond with another Cysteine. What is this bond called?",
      a:"Disulfide bond (–S–S–)",
      opts:["Disulfide bond (–S–S–)","Hydrogen bond","Ionic bond","Peptide bond"],
      exp:"Two –SH (thiol) groups oxidise to form –S–S–, a covalent disulfide bond that locks protein 3D shape (e.g. insulin, antibodies)." },
    { q:"What chemical group in Cysteine enables disulfide bond formation?",
      a:"Thiol (–SH) group",
      opts:["Thiol (–SH) group","Hydroxyl (–OH) group","Amino (–NH₂) group","Benzene ring"],
      exp:"The –SH (thiol) group is a reactive sulfur-containing functional group. Two thiols lose H atoms and bond to form –S–S– (disulfide bridge)." },
    { q:"What type of chemical reaction forms a disulfide bond between two Cysteines?",
      a:"Oxidation (loss of two hydrogen atoms)",
      opts:["Oxidation (loss of two hydrogen atoms)","Reduction (gain of hydrogen)","Hydrolysis (addition of water)","Phosphorylation (addition of phosphate)"],
      exp:"–SH + HS– → –S–S– + 2H⁺ + 2e⁻. This is oxidation. The reverse (breaking –S–S– back to –SH) is reduction." }
  ]},
  { col:2,  row:10, aaIdx:5, difficulty:'medium', qPool:[
    { q:"Aspartic Acid is negatively charged at body pH. What group causes this charge?",
      a:"–COO⁻ (carboxylate group)",
      opts:["–COO⁻ (carboxylate group)","–NH₃⁺ (amino group)","–SH (thiol group)","–OH (hydroxyl group)"],
      exp:"Aspartic acid's side chain –COOH has a pKa of ~3.9. At body pH 7.4 it donates its proton, leaving –COO⁻ (negative charge)." },
    { q:"Aspartic Acid is found in the sweetener aspartame. Why must people with PKU avoid aspartame?",
      a:"Aspartame also contains Phenylalanine, which PKU patients cannot break down",
      opts:["Aspartame also contains Phenylalanine, which PKU patients cannot break down","They are allergic to Aspartic Acid","Aspartame is too sweet","It disrupts their sleep"],
      exp:"PKU (phenylketonuria) patients lack phenylalanine hydroxylase. Aspartame = Asp + Phe + methanol — the Phe content triggers the warning label, not the Asp." },
    { q:"In enzyme active sites, Aspartic Acid's negative charge is often used to:",
      a:"Coordinate metal ions and act as a base catalyst",
      opts:["Coordinate metal ions and act as a base catalyst","Repel all water molecules","Form ring structures","Create covalent bonds with DNA"],
      exp:"Asp's –COO⁻ coordinates Ca²⁺/Mg²⁺ cofactors and acts as a catalytic base in proteases like pepsin and HIV protease." }
  ]},
  { col:16, row:10, aaIdx:7, difficulty:'medium', qPool:[
    { q:"Tryptophan is the precursor to serotonin. What is serotonin's primary role?",
      a:"Mood regulation and wellbeing (neurotransmitter)",
      opts:["Mood regulation and wellbeing (neurotransmitter)","Digesting food in the stomach","Building bone structure","Carrying oxygen in blood"],
      exp:"Tryptophan → 5-HTP → Serotonin. Serotonin regulates mood, sleep, and appetite. Low dietary tryptophan can affect mental health." },
    { q:"Tryptophan also makes melatonin. What does melatonin regulate?",
      a:"Sleep-wake cycles (circadian rhythm)",
      opts:["Sleep-wake cycles (circadian rhythm)","Blood glucose levels","Muscle contraction","Bone density"],
      exp:"Tryptophan → Serotonin → Melatonin (in the pineal gland at night). Melatonin signals darkness and promotes sleep onset." },
    { q:"Tryptophan has the largest side chain of all 20 amino acids. What ring system does it contain?",
      a:"Indole — a benzene ring fused with a pyrrole ring (contains N)",
      opts:["Indole — a benzene ring fused with a pyrrole ring (contains N)","A plain benzene ring only","A 5-membered ring with no nitrogen","A pyrrolidine ring like Proline"],
      exp:"Indole = 6-membered benzene ring fused with 5-membered pyrrole (4C + 1N). This large aromatic bicycle makes Trp the bulkiest amino acid." }
  ]},

  // ── HARD chests (text question + connect-the-dots drawing) ───
  { col:9,  row:10, aaIdx:6, difficulty:'hard',
    drawDots: {
      hint: "Phenylalanine's side chain: a 2-carbon chain (Cα→C) connected to a 6-membered benzene ring. Draw the chain bond AND all 6 ring bonds!",
      nodes: [
        {x:15,  y:70, label:"Cα", color:"#94a3b8"},
        {x:55,  y:70, label:"C",  color:"#94a3b8"},
        {x:140, y:38, label:"",   color:"#fb923c"},
        {x:168, y:54, label:"",   color:"#fb923c"},
        {x:168, y:86, label:"",   color:"#fb923c"},
        {x:140, y:102,label:"",   color:"#fb923c"},
        {x:112, y:86, label:"",   color:"#fb923c"},
        {x:112, y:54, label:"",   color:"#fb923c"},
      ],
      bonds: [[0,1],[1,7],[7,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
    },
    qPool:[
      { q:"Phenylalanine contains a benzene ring. This makes it 'aromatic'. What does aromatic mean chemically?",
        a:"A ring with delocalised electrons (alternating single/double bonds)",
        opts:["A ring with delocalised electrons (alternating single/double bonds)","It smells like flowers","It is always positively charged","It is the largest amino acid"],
        exp:"Aromatic = cyclic ring with delocalised π electrons. The benzene ring's 6 electrons are spread evenly around the ring, giving it unusual stability." },
      { q:"Phenylalanine is a precursor to which important neurotransmitters?",
        a:"Dopamine and Adrenaline (via Tyrosine)",
        opts:["Dopamine and Adrenaline (via Tyrosine)","Serotonin and Melatonin","GABA and Glutamate","Acetylcholine only"],
        exp:"Phe → Tyrosine → DOPA → Dopamine → Noradrenaline → Adrenaline. Phenylalanine starts the entire catecholamine biosynthetic pathway." },
      { q:"How many of the 20 standard amino acids are 'essential' (cannot be made by the human body)?",
        a:"9",
        opts:["9","5","15","20"],
        exp:"The 9 essential AAs: His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val. The body cannot synthesise these — they must come from diet." }
    ]
  },
  { col:6,  row:13, aaIdx:8, difficulty:'hard',
    drawDots: {
      hint: "Proline forms a RING that connects back to the backbone nitrogen (N). Draw all 5 bonds — the ring must close back to N!",
      nodes: [
        {x:22,  y:70, label:"N",  color:"#60a5fa"},
        {x:68,  y:38, label:"C",  color:"#fb923c"},
        {x:122, y:50, label:"C",  color:"#fb923c"},
        {x:116, y:96, label:"C",  color:"#fb923c"},
        {x:60,  y:100,label:"C",  color:"#fb923c"},
      ],
      bonds: [[0,1],[1,2],[2,3],[3,4],[4,0]]
    },
    qPool:[
      { q:"Proline's side chain loops back to bond with the backbone nitrogen. What structural effect does this cause?",
        a:"A rigid kink that breaks alpha-helices and beta-sheets",
        opts:["A rigid kink that breaks alpha-helices and beta-sheets","A longer, more flexible chain","A positive charge on the protein","Disulfide bridges"],
        exp:"Proline's cyclic ring prevents rotation around the N-Cα bond and removes the backbone N-H, so it cannot maintain helix or sheet hydrogen bonds." },
      { q:"Collagen (in skin, tendons) is the most abundant protein in the body. Which amino acids dominate its sequence?",
        a:"Glycine (~33%) and Proline (~13%)",
        opts:["Glycine (~33%) and Proline (~13%)","Lysine and Arginine","Cysteine and Methionine","Tryptophan and Phenylalanine"],
        exp:"Collagen repeats Gly-X-Pro triplets. Proline and hydroxyproline lock the triple-helix. Glycine's small size fits at the helix centre." },
      { q:"Because Proline cannot donate a backbone N-H hydrogen bond, what secondary structure does it disrupt?",
        a:"Alpha-helix (requires N-H···O=C bonds every 4 residues)",
        opts:["Alpha-helix (requires N-H···O=C bonds every 4 residues)","Beta-sheet only","Random coil","Triple helix"],
        exp:"Alpha-helices require N-H donor bonds from every residue. Proline's N has no H (it's bonded into the ring), so it breaks the helix — often called a 'helix breaker'." }
    ]
  },
  // ── NEW EASY chests (aaIdx 10–11, 13, 15) ────────────────────
  { col:4,  row:1,  aaIdx:10, difficulty:'easy', qPool:[
    { q:"Valine is a 'branched-chain amino acid' (BCAA). What does 'branched-chain' mean?",
      a:"Its side chain has a fork — a CH connecting to two CH₃ groups",
      opts:["Its side chain has a fork — a CH connecting to two CH₃ groups","It contains sulfur","It has a benzene ring","It is always positively charged"],
      exp:"Branched-chain means the carbon chain forks. Valine's side chain is –CH(CH₃)₂ — an isopropyl group with a V-shaped branch." },
    { q:"Why do athletes supplement with BCAAs like Valine, Leucine, and Isoleucine?",
      a:"They are directly oxidised as fuel in muscle and signal protein synthesis",
      opts:["They are directly oxidised as fuel in muscle and signal protein synthesis","They create disulfide bonds in tendons","They increase serotonin","They carry oxygen"],
      exp:"Muscle cells can directly oxidise BCAAs for energy without first processing them in the liver. They also activate anabolic (muscle-building) signalling." },
    { q:"What category does Valine belong to?",
      a:"Nonpolar (hydrophobic)",
      opts:["Nonpolar (hydrophobic)","Polar uncharged","Positively charged","Negatively charged"],
      exp:"Valine's branched aliphatic side chain has no polar groups. It prefers the hydrophobic interior of folded proteins." }
  ]},
  { col:9,  row:1,  aaIdx:11, difficulty:'easy', qPool:[
    { q:"Leucine uniquely activates mTOR. What does mTOR control?",
      a:"Muscle protein synthesis — the master switch for building new muscle",
      opts:["Muscle protein synthesis — the master switch for building new muscle","Blood pressure","Oxygen transport","Fat digestion"],
      exp:"mTOR (mechanistic target of rapamycin) is the master regulator of muscle protein synthesis. Leucine is the most potent BCAA activator of mTOR." },
    { q:"What is Leucine's side chain structure?",
      a:"A 4-carbon branched chain (–CH₂–CH(CH₃)₂)",
      opts:["A 4-carbon branched chain (–CH₂–CH(CH₃)₂)","A chain with sulfur","A hydroxyl group","An imidazole ring"],
      exp:"Leucine has an isobutyl side chain: –CH₂–CH(CH₃)₂. The branch is one carbon further from Cα than in Valine." },
    { q:"Which one-letter code represents Leucine in protein sequences?",
      a:"L",
      opts:["L","Le","U","X"],
      exp:"Leucine = L. One-letter codes are used in sequence databases and BLAST searches. Note: Lysine = K, not L." }
  ]},
  { col:4,  row:5,  aaIdx:13, difficulty:'easy', qPool:[
    { q:"How is Threonine structurally different from Serine?",
      a:"Threonine has an extra methyl group (–CH₃) on the same carbon as the –OH",
      opts:["Threonine has an extra methyl group (–CH₃) on the same carbon as the –OH","Threonine has two –OH groups","Threonine has sulfur instead of oxygen","They are identical"],
      exp:"Serine: –CH₂–OH. Threonine: –CH(OH)–CH₃. The extra methyl makes Threonine bulkier and gives it two chiral centres." },
    { q:"Threonine is one of 9 essential amino acids. What does this mean for your diet?",
      a:"You must eat foods containing Threonine — the body cannot synthesise it",
      opts:["You must eat foods containing Threonine — the body cannot synthesise it","It is the most abundant amino acid","It is only found in plants","It can be made from Serine"],
      exp:"Essential amino acids lack the biosynthetic enzymes to make them from scratch. Threonine is found in meat, dairy, eggs, and legumes." },
    { q:"Like Serine, Threonine can be phosphorylated. What enzyme adds the phosphate?",
      a:"A kinase enzyme",
      opts:["A kinase enzyme","A protease","RNA polymerase","A hydrolase"],
      exp:"Kinases catalyse: Thr–OH + ATP → Thr–OPO₃²⁻ + ADP. Phospho-Thr is key in cell-cycle regulation (e.g. CDK substrates)." }
  ]},
  { col:14, row:5,  aaIdx:15, difficulty:'easy', qPool:[
    { q:"Asparagine's side chain ends in –CONH₂. What important post-translational modification happens here?",
      a:"N-linked glycosylation — sugar chains attach to its amide nitrogen",
      opts:["N-linked glycosylation — sugar chains attach to its amide nitrogen","Disulfide bond formation","Phosphorylation","Methylation"],
      exp:"N-linked glycosylation: enzyme OST attaches oligosaccharides to the N of Asn's –CONH₂. The Asn-X-Ser/Thr sequon is the recognition signal." },
    { q:"Asparagine is the amide version of which charged amino acid?",
      a:"Aspartic Acid (Asp, D)",
      opts:["Aspartic Acid (Asp, D)","Glutamic Acid (Glu, E)","Lysine (Lys, K)","Arginine (Arg, R)"],
      exp:"Asparagine (Asn, N) = Aspartic Acid with –COOH replaced by –CONH₂. Similarly, Glutamine (Gln) is the amide of Glutamic Acid." },
    { q:"Asparagine spontaneously deamidates over time. What does deamidation do?",
      a:"Converts –CONH₂ to –COOH, turning Asn into Asp",
      opts:["Converts –CONH₂ to –COOH, turning Asn into Asp","Breaks the peptide bond","Adds phosphate","Forms disulfide bonds"],
      exp:"Deamidation removes –NH₂, converting Asn to Asp. This is a key protein ageing reaction used in forensic dating of ancient proteins." }
  ]},

  // ── NEW MEDIUM chests (aaIdx 12, 16, 17) ─────────────────────
  { col:14, row:1,  aaIdx:12, difficulty:'medium', qPool:[
    { q:"Isoleucine has TWO chiral centres. How many stereoisomers does this allow?",
      a:"4 possible stereoisomers (2² = 4)",
      opts:["4 possible stereoisomers (2² = 4)","2 stereoisomers","8 stereoisomers","1 — no chirality"],
      exp:"With 2 chiral centres, n=2, so 2² = 4 stereoisomers exist. Only (2S,3R)-Isoleucine (L-Ile) appears naturally in proteins." },
    { q:"What makes Isoleucine structurally distinct from Valine and Leucine?",
      a:"Its side chain branches at the beta-carbon (Cβ) AND continues further as –CH₂–CH₃",
      opts:["Its side chain branches at the beta-carbon (Cβ) AND continues further as –CH₂–CH₃","It contains sulfur","It has a hydroxyl group","It forms ring structures"],
      exp:"Isoleucine: –CH(CH₃)–CH₂–CH₃ (branch at Cβ with an ethyl tail). Valine also branches at Cβ but has no ethyl extension." },
    { q:"A Glu→Val mutation causes sickle cell anaemia. What property change does this represent?",
      a:"Negative/hydrophilic (Glu) → Nonpolar/hydrophobic (Val) — makes haemoglobin aggregate",
      opts:["Negative/hydrophilic (Glu) → Nonpolar/hydrophobic (Val) — makes haemoglobin aggregate","Polar → Charged","Nonpolar → Positive","Small → Large"],
      exp:"Normal haemoglobin β6 = Glu (charged, hydrophilic). Val (nonpolar) replacement creates a sticky hydrophobic patch — haemoglobin fibres form under low O₂, deforming red blood cells." }
  ]},
  { col:4,  row:9,  aaIdx:16, difficulty:'medium', qPool:[
    { q:"Glutamine is the most abundant free amino acid in blood. What is its primary transport role?",
      a:"It safely carries nitrogen (as amide –NH₂) between tissues",
      opts:["It safely carries nitrogen (as amide –NH₂) between tissues","It carries oxygen","It is the main structural protein in muscle","It converts fat to glucose"],
      exp:"Free ammonia (NH₃) is toxic. The body attaches NH₃ onto glutamate to make Glutamine, which safely transports N to the liver and kidneys for disposal or reuse." },
    { q:"Rapidly dividing cells (cancer, immune, gut epithelium) heavily consume which amino acid as fuel?",
      a:"Glutamine — these cells are 'glutamine-addicted'",
      opts:["Glutamine — these cells are 'glutamine-addicted'","Glycine","Cysteine","Alanine"],
      exp:"Rapidly dividing cells consume Glutamine for energy (TCA cycle), nucleotide synthesis, and as a nitrogen donor. Blocking glutamine uptake is a cancer therapy target." },
    { q:"Glutamine is the amide of which negatively-charged amino acid?",
      a:"Glutamic Acid (Glu, E)",
      opts:["Glutamic Acid (Glu, E)","Aspartic Acid (Asp, D)","Lysine (Lys, K)","Glycine (Gly, G)"],
      exp:"Glutamine (Gln, Q) = Glutamic Acid with –COOH replaced by –CONH₂. Gln is one carbon longer than Asparagine (which is the amide of Aspartic Acid)." }
  ]},
  { col:14, row:9,  aaIdx:17, difficulty:'medium', qPool:[
    { q:"Glutamic acid (glutamate) is the brain's PRIMARY excitatory neurotransmitter. What does excitatory mean?",
      a:"It depolarises neurons, increasing the chance they fire an action potential",
      opts:["It depolarises neurons, increasing the chance they fire an action potential","It prevents neurons from firing","It repairs damaged neurons","It carries oxygen to the brain"],
      exp:"Glutamate binds NMDA, AMPA and kainate receptors, opening ion channels that allow Na⁺/Ca²⁺ in — depolarising the neuron. GABA does the opposite (inhibitory)." },
    { q:"MSG (monosodium glutamate) tastes 'savoury' (umami). What amino acid is MSG?",
      a:"Glutamic Acid — MSG is its sodium salt",
      opts:["Glutamic Acid — MSG is its sodium salt","Glutamine","Aspartic Acid","Lysine"],
      exp:"MSG = Na⁺ + glutamate⁻. The umami receptor T1R1/T1R3 detects glutamate. Glutamic acid is abundant in tomatoes, parmesan, and fermented foods." },
    { q:"How is Glutamic Acid structurally different from Aspartic Acid?",
      a:"Glutamic Acid has one extra –CH₂– group (3-carbon chain vs 2-carbon)",
      opts:["Glutamic Acid has one extra –CH₂– group (3-carbon chain vs 2-carbon)","Glutamic Acid has two –COOH groups","Aspartic Acid has sulfur","They are identical in size"],
      exp:"Asp: –CH₂–COO⁻ (2 chain atoms). Glu: –CH₂–CH₂–COO⁻ (3 chain atoms). Both have pKa ~3.9–4.1 for their –COOH, so both carry –1 charge at pH 7.4." }
  ]},

  // ── NEW HARD chests (aaIdx 14, 18, 19) ───────────────────────
  { col:9,  row:5,  aaIdx:14, difficulty:'hard',
    drawDots: {
      hint:"Tyrosine's side chain: a 2-carbon chain (Cα→Cβ) connects to a benzene ring (6 nodes). Draw the chain bonds, all 6 ring bonds, AND the para-OH bond (the O coming off the far ring vertex)!",
      nodes:[
        {x:10,  y:70, label:"Cα", color:"#94a3b8"},
        {x:44,  y:70, label:"Cβ", color:"#94a3b8"},
        {x:72,  y:70, label:"",   color:"#fb923c"},
        {x:86,  y:46, label:"",   color:"#fb923c"},
        {x:114, y:46, label:"",   color:"#fb923c"},
        {x:128, y:70, label:"",   color:"#fb923c"},
        {x:114, y:94, label:"",   color:"#fb923c"},
        {x:86,  y:94, label:"",   color:"#fb923c"},
        {x:162, y:70, label:"O",  color:"#ef4444"},
      ],
      bonds:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,2],[5,8]]
    },
    qPool:[
      { q:"What is the structural difference between Tyrosine and Phenylalanine?",
        a:"Tyrosine has a hydroxyl (–OH) group at the para position of the benzene ring",
        opts:["Tyrosine has a hydroxyl (–OH) group at the para position of the benzene ring","Tyrosine has two benzene rings","Tyrosine lacks a benzene ring","Phenylalanine is larger"],
        exp:"Phe = benzene ring (nonpolar). Tyr = benzene ring + para-OH (polar). The –OH makes Tyr capable of hydrogen bonding and phosphorylation." },
      { q:"Tyrosine can be phosphorylated at its –OH group. What type of enzyme does this?",
        a:"A tyrosine kinase",
        opts:["A tyrosine kinase","A serine protease","DNA ligase","RNA polymerase"],
        exp:"Tyrosine kinases (e.g. EGFR, insulin receptor) attach phosphate to Tyr–OH. They are frequently mutated in cancer — key drug targets (e.g. imatinib/Gleevec)." },
      { q:"Tyrosine is a precursor to which neurotransmitters?",
        a:"Dopamine, Noradrenaline, and Adrenaline (catecholamines)",
        opts:["Dopamine, Noradrenaline, and Adrenaline (catecholamines)","Serotonin and Melatonin","GABA and Glycine","Acetylcholine only"],
        exp:"Tyr → DOPA → Dopamine → Noradrenaline → Adrenaline. Tyrosine also makes thyroid hormones (T3, T4). Phenylalanine is converted to Tyr first." }
    ]
  },
  { col:4,  row:13, aaIdx:18, difficulty:'hard',
    drawDots: {
      hint:"Arginine's side chain: a 3-carbon chain (Cα→Cβ→Cγ) leading to a nitrogen (N-ε), then the guanidinium carbon (C-ζ) that forks to TWO nitrogens. Draw all 6 bonds!",
      nodes:[
        {x:10,  y:70, label:"Cα",  color:"#94a3b8"},
        {x:44,  y:70, label:"Cβ",  color:"#94a3b8"},
        {x:78,  y:70, label:"Cγ",  color:"#94a3b8"},
        {x:112, y:70, label:"N",   color:"#60a5fa"},
        {x:146, y:70, label:"C",   color:"#fb923c"},
        {x:178, y:48, label:"N",   color:"#60a5fa"},
        {x:178, y:92, label:"N",   color:"#60a5fa"},
      ],
      bonds:[[0,1],[1,2],[2,3],[3,4],[4,5],[4,6]]
    },
    qPool:[
      { q:"Arginine is the precursor to Nitric Oxide (NO). What does NO do in blood vessels?",
        a:"NO relaxes (dilates) blood vessel walls, reducing blood pressure",
        opts:["NO relaxes (dilates) blood vessel walls, reducing blood pressure","NO carries oxygen in red blood cells","NO thickens blood to stop bleeding","NO destroys pathogens directly"],
        exp:"Arg → NO + citrulline (via nitric oxide synthase). NO activates guanylyl cyclase → cGMP → smooth muscle relaxation → vasodilation. Nitroglycerin and Viagra work via this pathway." },
      { q:"Arginine has a guanidinium group (pKa ~12.5). What does this mean at body pH 7.4?",
        a:"It is ALWAYS fully positively charged — the most basic standard amino acid",
        opts:["It is ALWAYS fully positively charged — the most basic standard amino acid","It is neutral at pH 7.4","It becomes negative at pH 7.4","It is only charged at pH < 4"],
        exp:"pKa 12.5 >> pH 7.4, so the guanidinium is fully protonated (+1) at all physiological conditions. Arg is more basic than Lys (pKa ~10.5) or His (pKa ~6)." },
      { q:"Arginine is called 'conditionally essential'. What does this mean?",
        a:"The body can synthesise some Arg, but not enough during growth, illness, or wound healing",
        opts:["The body can synthesise some Arg, but not enough during growth, illness, or wound healing","The body cannot make any Arg at all","Arg is only needed in childhood","Arg is never needed by adults"],
        exp:"Arginine is made in the urea cycle in the liver, but at low rates. During stress (growth, trauma, sepsis), demand exceeds supply — it becomes conditionally essential." }
    ]
  },
  { col:18, row:13, aaIdx:19, difficulty:'hard',
    drawDots: {
      hint:"Histidine's side chain: a 2-carbon chain (Cα→Cβ) connecting to the imidazole ring — a 5-membered ring with TWO nitrogen atoms. Draw the chain bonds AND all 5 ring bonds!",
      nodes:[
        {x:10,  y:70, label:"Cα", color:"#94a3b8"},
        {x:46,  y:70, label:"Cβ", color:"#94a3b8"},
        {x:82,  y:70, label:"",   color:"#fb923c"},
        {x:96,  y:40, label:"N",  color:"#60a5fa"},
        {x:130, y:28, label:"",   color:"#fb923c"},
        {x:155, y:46, label:"N",  color:"#60a5fa"},
        {x:148, y:78, label:"",   color:"#fb923c"},
      ],
      bonds:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,2]]
    },
    qPool:[
      { q:"Histidine's imidazole has a pKa of ~6. Why is this unique among amino acid side chains?",
        a:"Near physiological pH it can act as both acid (donate H⁺) and base (accept H⁺)",
        opts:["Near physiological pH it can act as both acid (donate H⁺) and base (accept H⁺)","It is always positively charged at pH 7.4","It forms disulfide bonds","It is always negatively charged"],
        exp:"pKa 6 is close to physiological pH 7.4 — so His can flip between protonated and unprotonated states with small pH changes. Serine proteases use His as a catalytic base." },
      { q:"Histidine is found at the active site of haemoglobin. What does it do there?",
        a:"It shuttles protons as O₂ binds and releases (the Bohr effect)",
        opts:["It shuttles protons as O₂ binds and releases (the Bohr effect)","It binds the iron (Fe) directly","It forms a disulfide bridge","It phosphorylates the protein"],
        exp:"The 'proximal His' coordinates the haem iron. The 'distal His' stabilises O₂. As CO₂/H⁺ rise in active tissues, His becomes protonated, reducing O₂ affinity — releasing O₂ where needed (Bohr effect)." },
      { q:"At body pH 7.4, what fraction of Histidine side chains are actually protonated (charged)?",
        a:"About 4% — it is mostly neutral at pH 7.4 (pKa 6 << pH 7.4)",
        opts:["About 4% — it is mostly neutral at pH 7.4 (pKa 6 << pH 7.4)","100% protonated","100% deprotonated","Exactly 50% protonated"],
        exp:"Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]). At pH 7.4, [A⁻]/[HA] = 10^(7.4-6) ≈ 25 → ~96% neutral. The tiny charged fraction is catalytically critical." }
    ]
  },

  { col:14, row:13, aaIdx:9, difficulty:'hard',
    drawDots: {
      hint: "Methionine's side chain: Cα—C—S—C—CH₃. The sulfur (S) sits in the MIDDLE of the chain — draw all 4 bonds!",
      nodes: [
        {x:12,  y:70, label:"Cα",  color:"#94a3b8"},
        {x:62,  y:70, label:"C",   color:"#94a3b8"},
        {x:117, y:70, label:"S",   color:"#fbbf24"},
        {x:167, y:70, label:"C",   color:"#94a3b8"},
        {x:208, y:70, label:"CH₃", color:"#e2e8f0"},
      ],
      bonds: [[0,1],[1,2],[2,3],[3,4]]
    },
    qPool:[
      { q:"Methionine is always the first amino acid in a newly built protein. Which codon encodes this?",
        a:"AUG (the start codon)",
        opts:["AUG (the start codon)","UAA (a stop codon)","GGG (Glycine codon)","UUU (Phenylalanine codon)"],
        exp:"The ribosome always begins translation at AUG, which codes for Methionine. Every protein starts with Met (often removed post-translationally)." },
      { q:"Both Methionine and Cysteine contain sulfur. What distinguishes Methionine's sulfur linkage?",
        a:"Methionine has a thioether (–S– buried in chain), not a free –SH",
        opts:["Methionine has a thioether (–S– buried in chain), not a free –SH","Methionine has a free thiol (–SH) like Cysteine","Methionine's sulfur carries a positive charge","Methionine can form disulfide bonds"],
        exp:"Cysteine: –CH₂–SH (free thiol, forms –S–S–). Methionine: –CH₂–CH₂–S–CH₃ (thioether; S is capped by a methyl group, no free H, cannot form disulfides)." },
      { q:"After a protein is synthesised, the starting Methionine is often removed. Why does the cell do this?",
        a:"The mature functional protein does not require Met at its N-terminus",
        opts:["The mature functional protein does not require Met at its N-terminus","Met is toxic when surface-exposed","Met is replaced by Glycine for flexibility","Met degrades rapidly in air"],
        exp:"Methionine aminopeptidase (MAP) removes the N-terminal Met if the next residue is small. ~50–70% of human proteins lose their starting Met after synthesis." }
    ]
  },
];

// ================================================================
//  EXPLORER STATE
// ================================================================
const EX = {
  player:    { col: 9, row: 7, dir: 'down' },
  chests:    [],   // copy of CHEST_DEFS with added .opened / .collected fields
  collected: new Set(),
  nearIdx:   null,
  qActive:   false,
  activeChestIdx: null,
  activeQ:   null,  // currently displayed question (from qPool)
  answered:  false,
  correct:   false,
  keys:      {},
  animFrame: null,
  moveTimer: null,
  gameActive: false,
};

// ================================================================
//  START EXPLORER
// ================================================================
function startExplorer() {
  EX.player    = { col: 9, row: 7, dir: 'down' };
  EX.chests    = CHEST_DEFS.map(d => ({ ...d, opened: false, collected: false }));
  EX.collected = new Set();
  EX.nearIdx   = null;
  EX.qActive   = false;
  EX.activeChestIdx = null;
  EX.answered  = false;
  EX.correct   = false;
  EX.keys      = {};
  EX.gameActive = true;

  refreshAllScores();
  showScreen('screen-explorer');
  buildCollectionGrid();
  updateCollectionDisplay();

  // Close any open overlays
  document.getElementById('interact-hint').style.display    = 'none';
  document.getElementById('chest-question').style.display   = 'none';
  document.getElementById('struct-challenge').style.display = 'none';
  document.getElementById('draw-challenge').style.display   = 'none';
  document.getElementById('explorer-victory').style.display = 'none';

  // Input listeners
  window._exKeyDown = e => {
    EX.keys[e.key] = true;
    if ((e.key === 'e' || e.key === 'E' || e.key === ' ') && EX.nearIdx !== null && !EX.qActive) {
      e.preventDefault();
      openChest(EX.nearIdx);
    }
    if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) e.preventDefault();
  };
  window._exKeyUp = e => { EX.keys[e.key] = false; };
  window.addEventListener('keydown', window._exKeyDown);
  window.addEventListener('keyup',   window._exKeyUp);

  // Movement polling
  EX.moveTimer = setInterval(handleExplorerMove, 150);

  // Render loop
  EX.animFrame = requestAnimationFrame(explorerFrame);
}

function stopExplorer() {
  EX.gameActive = false;
  cancelAnimationFrame(EX.animFrame);
  clearInterval(EX.moveTimer);
  if (window._exKeyDown) window.removeEventListener('keydown', window._exKeyDown);
  if (window._exKeyUp)   window.removeEventListener('keyup',   window._exKeyUp);
}

// ================================================================
//  MOVEMENT
// ================================================================
function handleExplorerMove() {
  if (!EX.gameActive || EX.qActive) return;
  const p = EX.player;
  let nc = p.col, nr = p.row, dir = p.dir;

  if      (EX.keys['ArrowUp'])    { nr--; dir = 'up'; }
  else if (EX.keys['ArrowDown'])  { nr++; dir = 'down'; }
  else if (EX.keys['ArrowLeft'])  { nc--; dir = 'left'; }
  else if (EX.keys['ArrowRight']) { nc++; dir = 'right'; }
  else return;

  p.dir = dir;

  // Bounds + wall collision
  if (nr < 0 || nr >= MAP_ROWS || nc < 0 || nc >= MAP_COLS) return;
  if (MAP_DATA[nr][nc] === 1) return;

  // Chest collision (treat uncollected chests as walls)
  if (EX.chests.some(c => c.col === nc && c.row === nr && !c.collected)) return;

  p.col = nc; p.row = nr;

  // Check for nearby chest
  checkNearChest();
}

function checkNearChest() {
  const { col, row } = EX.player;
  const adj = [{col:col-1,row},{col:col+1,row},{col,row:row-1},{col,row:row+1}];
  let found = null;
  for (const pos of adj) {
    const i = EX.chests.findIndex(c => c.col === pos.col && c.row === pos.row && !c.collected);
    if (i !== -1) { found = i; break; }
  }
  EX.nearIdx = found;
  const hint = document.getElementById('interact-hint');
  if (found !== null && !EX.qActive) {
    const diff = EX.chests[found].difficulty;
    const diffTag = { easy:'🟢 Easy', medium:'🔵 Medium (+structure)', hard:'🔴 Hard (+drawing)' }[diff] || '';
    hint.innerHTML = `Press <kbd>E</kbd> or <kbd>Space</kbd> to open &nbsp;·&nbsp; <span style="font-weight:700">${diffTag}</span>`;
    hint.style.display = 'block';
  } else {
    hint.style.display = 'none';
  }
}

// ================================================================
//  CHEST INTERACTION
// ================================================================
function openChest(idx) {
  if (EX.qActive) return;
  EX.qActive = true;
  EX.activeChestIdx = idx;
  EX.answered = false;
  EX.correct  = false;
  EX.chests[idx].opened = true;
  document.getElementById('interact-hint').style.display = 'none';

  const chest = EX.chests[idx];
  const aa    = AMINO_ACIDS[chest.aaIdx];

  // Pick a random question from the pool
  const q = chest.qPool[Math.floor(Math.random() * chest.qPool.length)];
  EX.activeQ = q;

  const diffTag = { easy:'🟢 Easy', medium:'🔵 Medium', hard:'🔴 Hard' }[chest.difficulty] || '';
  document.getElementById('cq-label').textContent = `🎁 ${aa.name} (${aa.abbr3}) · ${diffTag}`;
  document.getElementById('cq-text').textContent  = q.q;
  document.getElementById('cq-feedback').style.display   = 'none';
  document.getElementById('cq-collect-btn').style.display = 'none';
  // Reset collect button to default for easy chests
  const collectBtn = document.getElementById('cq-collect-btn');
  collectBtn.textContent = '✓ Add to Collection';
  collectBtn.onclick = collectAminoAcid;

  const optsEl = document.getElementById('cq-options');
  optsEl.innerHTML = '';
  shuffle([...q.opts]).forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'cq-opt';
    btn.textContent = opt;
    btn.onclick = () => answerChestQ(opt);
    optsEl.appendChild(btn);
  });

  document.getElementById('chest-question').style.display = 'flex';
}

function answerChestQ(selected) {
  if (EX.answered) return;
  EX.answered = true;
  const chest = EX.chests[EX.activeChestIdx];
  const q     = EX.activeQ;
  const correct = selected.trim() === q.a.trim();
  EX.correct = correct;

  document.querySelectorAll('.cq-opt').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent.trim() === q.a.trim()) btn.classList.add('correct');
    else if (btn.textContent.trim() === selected.trim() && !correct) btn.classList.add('wrong');
  });

  const fb = document.getElementById('cq-feedback');
  fb.style.display = 'block';
  if (correct) {
    addPoints('player', 15);
    const collectBtn = document.getElementById('cq-collect-btn');
    if (chest.difficulty === 'medium') {
      const nextHint = '+15 pts · Now identify the correct structure for a bonus!';
      fb.style.background = 'rgba(34,197,94,0.1)';
      fb.style.border     = '1px solid rgba(34,197,94,0.3)';
      fb.innerHTML = `<strong style="color:var(--success)">${nextHint}</strong><br><br>${q.exp}`;
      collectBtn.textContent = '→ Structure Challenge (+10 bonus)';
      collectBtn.onclick = () => {
        document.getElementById('chest-question').style.display = 'none';
        showStructChallenge();
      };
    } else if (chest.difficulty === 'hard') {
      const nextHint = '+15 pts · Now draw the side chain for a bonus!';
      fb.style.background = 'rgba(34,197,94,0.1)';
      fb.style.border     = '1px solid rgba(34,197,94,0.3)';
      fb.innerHTML = `<strong style="color:var(--success)">${nextHint}</strong><br><br>${q.exp}`;
      collectBtn.textContent = '→ Drawing Challenge (+20 bonus)';
      collectBtn.onclick = () => {
        document.getElementById('chest-question').style.display = 'none';
        showDrawChallenge();
      };
    } else {
      fb.style.background = 'rgba(34,197,94,0.1)';
      fb.style.border     = '1px solid rgba(34,197,94,0.3)';
      fb.innerHTML = `<strong style="color:var(--success)">Correct! +15 pts</strong><br><br>${q.exp}`;
      collectBtn.textContent = '✓ Add to Collection';
      collectBtn.onclick = collectAminoAcid;
    }
    collectBtn.style.display = 'block';
  } else {
    fb.style.background = 'rgba(239,68,68,0.1)';
    fb.style.border     = '1px solid rgba(239,68,68,0.3)';
    fb.innerHTML = `<strong style="color:var(--danger)">Incorrect.</strong> The answer is: <strong>${q.a}</strong><br><br>${q.exp}<br><br><em>Walk back to this chest to try again with a different question!</em>`;
    chest.opened = false; // allow retry with a fresh random question
  }
}

// Internal helper — called by all collect buttons
function _doCollect() {
  const idx = EX.activeChestIdx;
  if (idx === null) return;
  EX.chests[idx].collected = true;
  EX.collected.add(EX.chests[idx].aaIdx);
  const name = AMINO_ACIDS[EX.chests[idx].aaIdx].name;
  EX.qActive = false;
  EX.activeChestIdx = null;
  updateCollectionDisplay();
  toast(`${name} added to collection!`, 'success');
  if (EX.collected.size === CHEST_DEFS.length) {
    setTimeout(() => { document.getElementById('explorer-victory').style.display = 'flex'; }, 600);
  }
  checkNearChest();
}
function collectAminoAcid()      { document.getElementById('chest-question').style.display   = 'none'; _doCollect(); }
function collectAfterStructure() { document.getElementById('struct-challenge').style.display = 'none'; _doCollect(); }
function collectAfterDraw()      { document.getElementById('draw-challenge').style.display   = 'none'; _doCollect(); }

function closeChestQuestion() {
  EX.qActive = false;
  EX.activeChestIdx = null;
  document.getElementById('chest-question').style.display   = 'none';
  document.getElementById('struct-challenge').style.display = 'none';
  document.getElementById('draw-challenge').style.display   = 'none';
  checkNearChest();
}

// ================================================================
//  COLLECTION PANEL
// ================================================================
function buildCollectionGrid() {
  const el = document.getElementById('coll-grid');
  el.innerHTML = AMINO_ACIDS.map((aa, i) => {
    const icons = { nonpolar:'\uD83D\uDFE0', polar:'\uD83D\uDFE2', positive:'\uD83D\uDD35', negative:'\uD83D\uDD34' };
    return `<div class="coll-slot locked" id="coll-slot-${i}">
      <div class="coll-slot-icon">${icons[aa.category] || '\u26AA'}</div>
      <div>
        <div class="coll-slot-name" id="coll-name-${i}">???</div>
        <div class="coll-slot-cat"  id="coll-cat-${i}"  style="color:var(--muted)">Undiscovered</div>
      </div>
    </div>`;
  }).join('');
}

function updateCollectionDisplay() {
  document.getElementById('coll-count').textContent = `${EX.collected.size} / ${CHEST_DEFS.length}`;
  EX.collected.forEach(aaIdx => {
    const aa   = AMINO_ACIDS[aaIdx];
    const slot = document.getElementById(`coll-slot-${aaIdx}`);
    if (!slot || slot.classList.contains('unlocked')) return;
    slot.classList.remove('locked');
    slot.classList.add('unlocked', 'pop');
    document.getElementById(`coll-name-${aaIdx}`).textContent = `${aa.name} (${aa.abbr1})`;
    const catColours = { nonpolar:'var(--nonpolar)', polar:'var(--polar)', positive:'var(--positive)', negative:'var(--negative)' };
    document.getElementById(`coll-cat-${aaIdx}`).textContent  = catLabel(aa.category);
    document.getElementById(`coll-cat-${aaIdx}`).style.color  = catColours[aa.category] || 'var(--muted)';
    setTimeout(() => slot.classList.remove('pop'), 500);
  });
}

// ================================================================
//  CANVAS RENDERING
// ================================================================
function explorerFrame() {
  if (!EX.gameActive) return;
  drawExplorer();
  EX.animFrame = requestAnimationFrame(explorerFrame);
}

function drawExplorer() {
  const canvas = document.getElementById('explorer-canvas');
  const ctx    = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw tiles
  for (let r = 0; r < MAP_ROWS; r++) {
    for (let c = 0; c < MAP_COLS; c++) {
      drawExTile(ctx, c, r, MAP_DATA[r][c]);
    }
  }

  // Draw chests
  EX.chests.forEach((ch, i) => drawExChest(ctx, ch, i === EX.nearIdx));

  // Draw player
  drawExPlayer(ctx);

  // Draw mini HUD (collected count)
  ctx.fillStyle = 'rgba(15,23,42,0.75)';
  ctx.fillRect(4, 4, 120, 24);
  ctx.fillStyle = '#f1f5f9';
  ctx.font = 'bold 12px "Segoe UI", system-ui, sans-serif';
  ctx.fillText(`\uD83E\uDDEA ${EX.collected.size}/${CHEST_DEFS.length} collected`, 10, 20);
}

function drawExTile(ctx, c, r, type) {
  const x = c * TILE, y = r * TILE;
  if (type === 1) {
    // Wall: dark with 3D shading
    ctx.fillStyle = '#1a2744';
    ctx.fillRect(x, y, TILE, TILE);
    ctx.fillStyle = '#253660';
    ctx.fillRect(x, y, TILE, 5);
    ctx.fillRect(x, y, 5, TILE);
    ctx.fillStyle = '#0d1520';
    ctx.fillRect(x, y + TILE - 4, TILE, 4);
    ctx.fillRect(x + TILE - 4, y, 4, TILE);
    // Subtle brick pattern
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(x + 0.5, y + 0.5, TILE - 1, TILE - 1);
  } else {
    // Floor: dark blue with grid
    ctx.fillStyle = '#0c1829';
    ctx.fillRect(x, y, TILE, TILE);
    ctx.strokeStyle = 'rgba(99,102,241,0.08)';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(x + 0.5, y + 0.5, TILE - 1, TILE - 1);
  }
}

function drawExChest(ctx, ch, isNear) {
  const x = ch.col * TILE, y = ch.row * TILE;
  const pad = 4, s = TILE - pad * 2;

  if (ch.collected) {
    // Collected: dark open chest
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(x + pad, y + pad + s * 0.4, s, s * 0.6);
    ctx.fillStyle = '#334155';
    ctx.fillRect(x + pad, y + pad, s, s * 0.4);
    // Open lid (tilted)
    ctx.save();
    ctx.translate(x + pad + s / 2, y + pad);
    ctx.rotate(-0.4);
    ctx.fillStyle = '#374155';
    ctx.fillRect(-s / 2, -s * 0.1, s, s * 0.35);
    ctx.restore();
    return;
  }

  // Colour palette by difficulty
  const DC = {
    easy:   { body:'#92400e', bodyH:'#b45309', lid:'#b45309', lidH:'#d97706', lock:'#fbbf24', glow:'#f59e0b', badge:'E' },
    medium: { body:'#1e3a8a', bodyH:'#1d4ed8', lid:'#1d4ed8', lidH:'#3b82f6', lock:'#93c5fd', glow:'#60a5fa', badge:'M' },
    hard:   { body:'#581c87', bodyH:'#7e22ce', lid:'#7e22ce', lidH:'#a855f7', lock:'#e879f9', glow:'#c026d3', badge:'H' },
  }[ch.difficulty] || { body:'#92400e', bodyH:'#b45309', lid:'#b45309', lidH:'#d97706', lock:'#fbbf24', glow:'#f59e0b', badge:'?' };

  const bodyColor = isNear ? DC.bodyH : DC.body;
  const lidColor  = isNear ? DC.lidH  : DC.lid;

  // Body
  ctx.fillStyle = bodyColor;
  ctx.fillRect(x + pad, y + pad + s * 0.38, s, s * 0.62);
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.fillRect(x + pad, y + pad + s * 0.38, s, 3);

  // Lid
  ctx.fillStyle = lidColor;
  ctx.fillRect(x + pad, y + pad, s, s * 0.42);
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.fillRect(x + pad, y + pad, s, 3);

  // Lock
  ctx.fillStyle = DC.lock;
  ctx.beginPath();
  ctx.arc(x + pad + s / 2, y + pad + s * 0.56, 4, 0, Math.PI * 2);
  ctx.fill();

  // Difficulty badge (small letter below chest)
  ctx.fillStyle  = isNear ? '#fff' : 'rgba(255,255,255,0.55)';
  ctx.font       = 'bold 8px "Segoe UI", sans-serif';
  ctx.textAlign  = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(DC.badge, x + TILE / 2, y + TILE - 1);
  ctx.textBaseline = 'alphabetic';

  // Near glow
  if (isNear) {
    ctx.shadowColor = DC.glow;
    ctx.shadowBlur  = 14;
    ctx.strokeStyle = DC.glow;
    ctx.lineWidth   = 2;
    ctx.strokeRect(x + pad, y + pad, s, s);
    ctx.shadowBlur  = 0;
    ctx.lineWidth   = 1;
  }
}

// ================================================================
//  STRUCTURE CHALLENGE (medium chests)
// ================================================================
function showStructChallenge() {
  const chest = EX.chests[EX.activeChestIdx];
  const correct = AMINO_ACIDS[chest.aaIdx];

  // Build pool of 3 distractors from other amino acids
  const others = AMINO_ACIDS.filter(aa => aa.name !== correct.name);
  shuffle(others);
  const pool = [correct, ...others.slice(0, 3)];
  shuffle(pool);

  document.getElementById('sc-aa-name').textContent = correct.name;
  document.getElementById('sc-feedback').style.display = 'none';
  document.getElementById('sc-collect-btn').style.display = 'none';

  const optsEl = document.getElementById('sc-options');
  optsEl.innerHTML = '';
  pool.forEach(aa => {
    const div = document.createElement('div');
    div.className = 'sc-opt';
    div.innerHTML = `<div class="sc-opt-name">${aa.name}</div>${SVG_STRUCTURES[aa.name] || '<div style="color:var(--muted);font-size:0.8rem;padding:1rem">No structure</div>'}`;
    div.onclick = () => answerStructChallenge(aa.name, correct.name);
    optsEl.appendChild(div);
  });

  document.getElementById('struct-challenge').style.display = 'flex';
}

function answerStructChallenge(selected, correct) {
  const isCorrect = selected === correct;
  document.querySelectorAll('.sc-opt').forEach(el => {
    el.style.pointerEvents = 'none';
    const lbl = el.querySelector('.sc-opt-name');
    if (lbl && lbl.textContent === correct) el.classList.add('sc-correct');
    else if (lbl && lbl.textContent === selected && !isCorrect) el.classList.add('sc-wrong');
  });
  const fb = document.getElementById('sc-feedback');
  fb.style.display = 'block';
  if (isCorrect) {
    addPoints('player', 10);
    fb.style.background = 'rgba(34,197,94,0.1)';
    fb.style.border     = '1px solid rgba(34,197,94,0.3)';
    fb.innerHTML = `<strong style="color:var(--success)">Correct! +10 bonus pts</strong> — You identified the right structure.`;
    document.getElementById('sc-collect-btn').style.display = 'block';
  } else {
    fb.style.background = 'rgba(239,68,68,0.1)';
    fb.style.border     = '1px solid rgba(239,68,68,0.3)';
    fb.innerHTML = `<strong style="color:var(--danger)">Incorrect.</strong> The highlighted option is <strong>${correct}</strong>.<br>Collect anyway using the skip button below.`;
    document.getElementById('sc-collect-btn').style.display = 'block';
  }
}

function closeStructChallenge() {
  document.getElementById('struct-challenge').style.display = 'none';
  collectAfterStructure();
}

// ================================================================
//  DRAW CHALLENGE (hard chests)
// ================================================================
const drawState = {
  nodes: [],          // {x, y, label, color}
  bonds: [],          // required [[i,j], ...]
  drawnBonds: [],     // [[i,j], ...]  (always i<j for dedup)
  selectedNode: null, // index or null
  submitted: false,
};

function showDrawChallenge() {
  const chest = EX.chests[EX.activeChestIdx];
  const dd    = chest.drawDots;

  drawState.nodes        = dd.nodes.map(n => ({ ...n }));
  drawState.bonds        = dd.bonds;
  drawState.drawnBonds   = [];
  drawState.selectedNode = null;
  drawState.submitted    = false;

  document.getElementById('dc-hint').textContent = dd.hint;
  document.getElementById('dc-feedback').style.display = 'none';
  document.getElementById('dc-collect-btn').style.display = 'none';

  const canvas = document.getElementById('draw-canvas');
  canvas.style.pointerEvents = 'auto';
  canvas.onclick = handleDrawClick;

  renderDrawCanvas();
  document.getElementById('draw-challenge').style.display = 'flex';
}

function handleDrawClick(e) {
  if (drawState.submitted) return;
  const canvas = document.getElementById('draw-canvas');
  const rect   = canvas.getBoundingClientRect();
  // scale click coords to canvas internal resolution
  const scaleX = canvas.width  / rect.width;
  const scaleY = canvas.height / rect.height;
  const mx = (e.clientX - rect.left) * scaleX;
  const my = (e.clientY - rect.top)  * scaleY;

  // Find closest node within 18px
  let hit = null;
  let best = Infinity;
  drawState.nodes.forEach((n, i) => {
    const d = Math.hypot(n.x - mx, n.y - my);
    if (d < 18 && d < best) { best = d; hit = i; }
  });

  if (hit === null) {
    drawState.selectedNode = null;
    renderDrawCanvas();
    return;
  }

  if (drawState.selectedNode === null) {
    drawState.selectedNode = hit;
  } else if (drawState.selectedNode === hit) {
    drawState.selectedNode = null;
  } else {
    // Draw bond between selectedNode and hit
    const a = Math.min(drawState.selectedNode, hit);
    const b = Math.max(drawState.selectedNode, hit);
    const already = drawState.drawnBonds.some(([x, y]) => x === a && y === b);
    if (!already) drawState.drawnBonds.push([a, b]);
    drawState.selectedNode = null;
  }
  renderDrawCanvas();
}

function renderDrawCanvas() {
  const canvas = document.getElementById('draw-canvas');
  const ctx    = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const { nodes, bonds, drawnBonds, selectedNode, submitted } = drawState;

  // Required bonds as ghost lines
  bonds.forEach(([i, j]) => {
    const a = nodes[i], b = nodes[j];
    const drawn = drawnBonds.some(([x, y]) => x === Math.min(i,j) && y === Math.max(i,j));
    if (!drawn) {
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = 'rgba(148,163,184,0.2)';
      ctx.lineWidth   = 1.5;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      ctx.setLineDash([]);
    }
  });

  // Drawn bonds
  drawnBonds.forEach(([i, j]) => {
    const a = nodes[i], b = nodes[j];
    const required = bonds.some(([x, y]) => Math.min(x,y) === Math.min(i,j) && Math.max(x,y) === Math.max(i,j));
    if (submitted) {
      ctx.strokeStyle = required ? '#4ade80' : '#f87171';
    } else {
      ctx.strokeStyle = '#818cf8';
    }
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    ctx.lineWidth = 1;
  });

  // Nodes
  nodes.forEach((n, i) => {
    const isSelected = i === selectedNode;
    ctx.beginPath();
    ctx.arc(n.x, n.y, isSelected ? 9 : 7, 0, Math.PI * 2);
    ctx.fillStyle = isSelected ? '#f0abfc' : (n.color || '#94a3b8');
    ctx.fill();
    if (isSelected) {
      ctx.shadowColor = '#e879f9';
      ctx.shadowBlur  = 10;
      ctx.strokeStyle = '#e879f9';
      ctx.lineWidth   = 2;
      ctx.stroke();
      ctx.shadowBlur  = 0;
      ctx.lineWidth   = 1;
    }
    if (n.label) {
      ctx.fillStyle    = '#f1f5f9';
      ctx.font         = 'bold 9px "Segoe UI", sans-serif';
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.label, n.x, n.y - 14);
      ctx.textBaseline = 'alphabetic';
    }
  });
}

function submitDrawing() {
  if (drawState.submitted) return;
  drawState.submitted = true;
  document.getElementById('draw-canvas').style.pointerEvents = 'none';

  const { bonds, drawnBonds } = drawState;
  // Count correctly drawn required bonds
  let correct = 0;
  bonds.forEach(([i, j]) => {
    const a = Math.min(i, j), b = Math.max(i, j);
    if (drawnBonds.some(([x, y]) => x === a && y === b)) correct++;
  });
  const pct   = bonds.length > 0 ? correct / bonds.length : 0;
  const pass  = pct >= 0.75;

  renderDrawCanvas(); // re-render with colour feedback

  const fb = document.getElementById('dc-feedback');
  fb.style.display = 'block';
  if (pass) {
    addPoints('player', 20);
    fb.style.background = 'rgba(34,197,94,0.1)';
    fb.style.border     = '1px solid rgba(34,197,94,0.3)';
    fb.innerHTML = `<strong style="color:var(--success)">Great job! +20 bonus pts</strong> — ${correct}/${bonds.length} bonds correct (${Math.round(pct*100)}%).`;
    document.getElementById('dc-collect-btn').style.display = 'block';
  } else {
    fb.style.background = 'rgba(239,68,68,0.1)';
    fb.style.border     = '1px solid rgba(239,68,68,0.3)';
    fb.innerHTML = `<strong style="color:var(--danger)">Keep practising!</strong> ${correct}/${bonds.length} bonds correct (${Math.round(pct*100)}%). You need ≥75% to earn the bonus.<br>You can still collect using the skip button.`;
    document.getElementById('dc-collect-btn').style.display = 'block';
  }
}

function undoLastBond() {
  if (drawState.submitted) return;
  drawState.drawnBonds.pop();
  drawState.selectedNode = null;
  renderDrawCanvas();
}

function clearDrawing() {
  if (drawState.submitted) return;
  drawState.drawnBonds   = [];
  drawState.selectedNode = null;
  renderDrawCanvas();
}

function closeDrawChallenge() {
  document.getElementById('draw-challenge').style.display = 'none';
  collectAfterDraw();
}

// ================================================================

function drawExPlayer(ctx) {
  const { col, row, dir } = EX.player;
  const cx = col * TILE + TILE / 2;
  const cy = row * TILE + TILE / 2;
  const r  = TILE * 0.38;

  // Body
  ctx.fillStyle = '#6366f1';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  // Outline
  ctx.strokeStyle = '#818cf8';
  ctx.lineWidth   = 2;
  ctx.stroke();
  ctx.lineWidth   = 1;

  // Eyes (direction-based)
  const eyeOffsets = {
    up:    [[-4,-4],[4,-4]],
    down:  [[-4, 4],[4, 4]],
    left:  [[-5,-3],[-5,3]],
    right: [[ 5,-3],[ 5,3]],
  }[dir] || [[-4,-4],[4,-4]];

  ctx.fillStyle = 'white';
  eyeOffsets.forEach(([ex, ey]) => {
    ctx.beginPath();
    ctx.arc(cx + ex, cy + ey, 2.5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Pupil
  const pupilOff = { up:[0,-1.5], down:[0,1.5], left:[-1.5,0], right:[1.5,0] }[dir] || [0,0];
  ctx.fillStyle = '#1e293b';
  eyeOffsets.forEach(([ex, ey]) => {
    ctx.beginPath();
    ctx.arc(cx + ex + pupilOff[0], cy + ey + pupilOff[1], 1.2, 0, Math.PI * 2);
    ctx.fill();
  });
}

