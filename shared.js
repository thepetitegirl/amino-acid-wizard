
// ================================================================
//  AMINO ACID DATA
//  To add more amino acids: copy one object and fill in the fields.
// ================================================================
const AMINO_ACIDS = [
  {
    name: "Glycine",
    abbr3: "Gly", abbr1: "G", category: "nonpolar",
    property: "Smallest amino acid — side chain is just a single hydrogen atom (H)",
    hint: "Glycine is the only amino acid with no chiral centre (no L or D form)."
  },
  {
    name: "Alanine",
    abbr3: "Ala", abbr1: "A", category: "nonpolar",
    property: "Simple nonpolar amino acid with a methyl group (–CH₃) as its side chain",
    hint: "One of the most abundant amino acids in proteins. Very stable and simple."
  },
  {
    name: "Cysteine",
    abbr3: "Cys", abbr1: "C", category: "polar",
    property: "Contains a thiol (–SH) group; two cysteines can link to form disulfide bonds",
    hint: "Disulfide (–S–S–) bonds lock protein shapes. Found in hair and nail keratin."
  },
  {
    name: "Serine",
    abbr3: "Ser", abbr1: "S", category: "polar",
    property: "Has a hydroxyl (–OH) group; key in enzyme active sites and cell signalling",
    hint: "Serine is frequently phosphorylated (a phosphate added) as an on/off molecular switch."
  },
  {
    name: "Lysine",
    abbr3: "Lys", abbr1: "K", category: "positive",
    property: "Positively charged at body pH; an essential amino acid we must obtain from food",
    hint: "Lysine deficiency is common in plant-based diets. Important for growth and repair."
  },
  {
    name: "Aspartate",
    abbr3: "Asp", abbr1: "D", category: "negative",
    property: "Negatively charged at body pH; one of the two amino acids in sweetener aspartame",
    hint: "As 'aspartate', it is a key intermediate in the urea cycle — how the body removes ammonia."
  },
  {
    name: "Phenylalanine",
    abbr3: "Phe", abbr1: "F", category: "nonpolar",
    property: "Contains a benzene ring; essential amino acid; precursor to adrenaline and dopamine",
    hint: "People with PKU cannot metabolise phenylalanine, so they must avoid aspartame."
  },
  {
    name: "Tryptophan",
    abbr3: "Trp", abbr1: "W", category: "nonpolar",
    property: "Largest amino acid; the body converts it into serotonin (the mood neurotransmitter)",
    hint: "Tryptophan also makes melatonin (sleep hormone). Rich sources: turkey, milk, nuts."
  },
  {
    name: "Proline",
    abbr3: "Pro", abbr1: "P", category: "nonpolar",
    property: "Ring-shaped side chain bonds back to its own backbone, creating rigid kinks in proteins",
    hint: "Proline breaks alpha-helix structures. Collagen (skin, tendons) is ~13% proline."
  },
  {
    name: "Methionine",
    abbr3: "Met", abbr1: "M", category: "nonpolar",
    property: "Always the 'start codon' signal in protein synthesis; contains a sulfur atom",
    hint: "Every protein begins being built with Met (often removed later). It is an essential amino acid."
  },
  {
    name: "Valine",
    abbr3: "Val", abbr1: "V", category: "nonpolar",
    property: "Branched-chain nonpolar amino acid with an isopropyl side chain (–CH(CH₃)₂)",
    hint: "Valine, Leucine, and Isoleucine are the three branched-chain amino acids (BCAAs) popular in sports nutrition."
  },
  {
    name: "Leucine",
    abbr3: "Leu", abbr1: "L", category: "nonpolar",
    property: "Branched-chain amino acid with a 4-carbon isobutyl side chain; most abundant BCAA in muscle",
    hint: "Leucine uniquely activates mTOR — the master regulator of muscle protein synthesis. Key for muscle building."
  },
  {
    name: "Isoleucine",
    abbr3: "Ile", abbr1: "I", category: "nonpolar",
    property: "Branched-chain amino acid with branching at the beta-carbon; important for haemoglobin function",
    hint: "Isoleucine has TWO chiral centres — it can form 4 stereoisomers, but only the L-Ile form occurs in proteins."
  },
  {
    name: "Threonine",
    abbr3: "Thr", abbr1: "T", category: "polar",
    property: "Has both a hydroxyl (–OH) and methyl group; like Serine but bulkier; can be phosphorylated",
    hint: "Threonine is one of the 9 essential amino acids. It also has two chiral centres (like Isoleucine)."
  },
  {
    name: "Tyrosine",
    abbr3: "Tyr", abbr1: "Y", category: "polar",
    property: "Phenylalanine with a para–OH group; polar, phosphorylatable, and a catecholamine precursor",
    hint: "Tyrosine kinases (e.g. insulin receptor, EGFR) regulate major cell signalling and are mutated in many cancers."
  },
  {
    name: "Asparagine",
    abbr3: "Asn", abbr1: "N", category: "polar",
    property: "Amide derivative of Aspartic Acid; side chain ends in –CONH₂; key site for N-linked glycosylation",
    hint: "The 'N' in N-linked glycosylation stands for Asparagine — sugar chains attach to its amide nitrogen."
  },
  {
    name: "Glutamine",
    abbr3: "Gln", abbr1: "Q", category: "polar",
    property: "Amide of Glutamate; one carbon longer than Asparagine; most abundant free amino acid in blood",
    hint: "Glutamine is the main fuel for rapidly dividing cells — immune cells and gut epithelium are 'glutamine-addicted'."
  },
  {
    name: "Glutamate",
    abbr3: "Glu", abbr1: "E", category: "negative",
    property: "Negatively charged at body pH; the brain's primary excitatory neurotransmitter (glutamate)",
    hint: "MSG (monosodium glutamate) is the sodium salt of Glutamic Acid — it gives the 'umami' (savoury) taste."
  },
  {
    name: "Arginine",
    abbr3: "Arg", abbr1: "R", category: "positive",
    property: "Most positively charged amino acid; contains a guanidinium group; precursor to nitric oxide (NO)",
    hint: "Arginine → Nitric Oxide (via nitric oxide synthase). NO dilates blood vessels — exploited in cardiovascular drugs."
  },
  {
    name: "Histidine",
    abbr3: "His", abbr1: "H", category: "positive",
    property: "Imidazole side chain; pKa ~6 means it can act as both acid and base near physiological pH",
    hint: "Histidine is the acid–base catalyst in haemoglobin — it shuttles protons as the protein binds and releases O₂."
  },
];

// ================================================================
//  SVG STRUCTURE DIAGRAMS
//  Each function returns an SVG string for the structure card.
//  viewBox="0 0 110 90" — white/light strokes, coloured key atoms.
// ================================================================
const SVG_STRUCTURES = {

  // Glycine — –H only
  Glycine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="45" x2="44" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="50" cy="45" r="6" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="55" y="72" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–H (no side chain)</text>
  </svg>`,

  // Alanine — –CH₃
  Alanine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="45" x2="28" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="35" y1="38" x2="35" y2="27" stroke="#94a3b8" stroke-width="2"/>
    <line x1="28" y1="51" x2="19" y2="60" stroke="#94a3b8" stroke-width="2"/>
    <line x1="42" y1="51" x2="51" y2="60" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="35" cy="45" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="35" cy="22" r="5" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="15" cy="64" r="5" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="55" cy="64" r="5" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="55" y="82" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₃</text>
  </svg>`,

  // Cysteine — –CH₂–SH
  Cysteine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="45" x2="21" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="35" y1="45" x2="49" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="69" y1="45" x2="79" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="28" cy="45" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="59" cy="45" r="10" fill="#eab308" stroke="#fde047" stroke-width="1.5"/>
    <circle cx="84" cy="45" r="5" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="55" y="73" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₂–SH</text>
  </svg>`,

  // Serine — –CH₂–OH
  Serine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="45" x2="21" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="35" y1="45" x2="49" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="65" y1="45" x2="75" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="28" cy="45" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="57" cy="45" r="8" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <circle cx="80" cy="45" r="5" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="55" y="73" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₂–OH</text>
  </svg>`,

  // Lysine — –(CH₂)₄–NH₃⁺  (protonated at pH 7)
  Lysine: `<svg viewBox="0 0 130 95" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="52" x2="14" y2="52" stroke="#94a3b8" stroke-width="2"/>
    <line x1="26" y1="49" x2="30" y2="43" stroke="#94a3b8" stroke-width="2"/>
    <line x1="42" y1="43" x2="46" y2="49" stroke="#94a3b8" stroke-width="2"/>
    <line x1="58" y1="49" x2="62" y2="43" stroke="#94a3b8" stroke-width="2"/>
    <line x1="74" y1="43" x2="78" y2="49" stroke="#94a3b8" stroke-width="2"/>
    <line x1="90" y1="52" x2="87" y2="52" stroke="#94a3b8" stroke-width="2"/>
    <line x1="101" y1="47" x2="108" y2="40" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="105" y1="52" x2="114" y2="52" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="101" y1="57" x2="108" y2="64" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="20" cy="52" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="36" cy="43" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="52" cy="52" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="68" cy="43" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="84" cy="52" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="96" cy="52" r="9" fill="#60a5fa" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="112" cy="37" r="4" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="118" cy="52" r="4" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="112" cy="67" r="4" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="63" y="86" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–(CH₂)₄–NH₃⁺</text>
  </svg>`,

  // Aspartate — –CH₂–COO⁻ (pH 7 deprotonated)
  "Aspartate": `<svg viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="50" x2="18" y2="50" stroke="#94a3b8" stroke-width="2"/>
    <line x1="32" y1="50" x2="48" y2="50" stroke="#94a3b8" stroke-width="2"/>
    <line x1="52" y1="43" x2="52" y2="30" stroke="#94a3b8" stroke-width="2"/>
    <line x1="58" y1="43" x2="58" y2="30" stroke="#94a3b8" stroke-width="2"/>
    <line x1="55" y1="57" x2="55" y2="70" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="25" cy="50" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="55" cy="50" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="55" cy="23" r="7" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <circle cx="55" cy="77" r="7" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="55" y="96" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₂–COO⁻</text>
  </svg>`,

  // Phenylalanine — –CH₂–C₆H₅ (benzene with alternating double bonds)
  Phenylalanine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="45" x2="9" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="23" y1="45" x2="34" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="47" y1="45" x2="54" y2="31" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="54" y1="31" x2="69" y2="31" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="69" y1="31" x2="76" y2="45" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="76" y1="45" x2="69" y2="59" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="69" y1="59" x2="54" y2="59" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="54" y1="59" x2="47" y2="45" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="50" y1="47" x2="57" y2="33" stroke="#94a3b8" stroke-width="1.4"/>
    <line x1="67" y1="33" x2="74" y2="47" stroke="#94a3b8" stroke-width="1.4"/>
    <line x1="54" y1="56" x2="69" y2="56" stroke="#94a3b8" stroke-width="1.4"/>
    <circle cx="16" cy="45" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="41" cy="45" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="54" cy="31" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="69" cy="31" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="76" cy="45" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="69" cy="59" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="54" cy="59" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <text x="55" y="80" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₂–benzene</text>
  </svg>`,

  // Tryptophan — –CH₂–indole (N in 5-ring; double bonds shown)
  Tryptophan: `<svg viewBox="0 0 130 95" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="57" x2="11" y2="57" stroke="#94a3b8" stroke-width="2"/>
    <line x1="24" y1="57" x2="32" y2="57" stroke="#94a3b8" stroke-width="2"/>
    <line x1="38" y1="51" x2="38" y2="43" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="38" y1="30" x2="50" y2="22" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="60" y1="22" x2="66" y2="33" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="66" y1="47" x2="66" y2="57" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="60" y1="63" x2="38" y2="63" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="38" y1="63" x2="38" y2="57" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="66" y1="33" x2="82" y2="26" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="82" y1="26" x2="96" y2="37" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="96" y1="37" x2="96" y2="57" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="96" y1="57" x2="82" y2="68" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="82" y1="68" x2="66" y2="57" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="41" y1="51" x2="41" y2="43" stroke="#94a3b8" stroke-width="1.2"/>
    <line x1="93" y1="40" x2="79" y2="29" stroke="#94a3b8" stroke-width="1.2"/>
    <line x1="93" y1="54" x2="79" y2="65" stroke="#94a3b8" stroke-width="1.2"/>
    <line x1="55" y1="18" x2="44" y2="24" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="17" cy="57" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="38" cy="57" r="5" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="38" cy="37" r="5" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="55" cy="22" r="7" fill="#60a5fa" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="40" cy="12" r="4" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="66" cy="40" r="5" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="66" cy="57" r="5" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="82" cy="26" r="5" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="96" cy="37" r="5" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="96" cy="57" r="5" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="82" cy="68" r="5" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <text x="60" y="85" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₂–indole (N in 5-ring)</text>
  </svg>`,

  // Proline — pyrrolidine ring; N protonated (NH⁺) at pH 7; bond to Cα shown
  Proline: `<svg viewBox="0 0 110 95" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="48" x2="27" y2="48" stroke="#94a3b8" stroke-width="2"/>
    <line x1="35" y1="40" x2="49" y2="27" stroke="#94a3b8" stroke-width="2"/>
    <line x1="49" y1="27" x2="71" y2="34" stroke="#94a3b8" stroke-width="2"/>
    <line x1="71" y1="34" x2="71" y2="58" stroke="#94a3b8" stroke-width="2"/>
    <line x1="71" y1="58" x2="49" y2="65" stroke="#94a3b8" stroke-width="2"/>
    <line x1="49" y1="65" x2="35" y2="56" stroke="#94a3b8" stroke-width="2"/>
    <line x1="35" y1="40" x2="35" y2="30" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="35" cy="48" r="8" fill="#60a5fa" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="35" cy="22" r="5" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="49" cy="27" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="71" cy="34" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="71" cy="58" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="49" cy="65" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <text x="58" y="85" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">pyrrolidine (NH⁺)</text>
  </svg>`,

  // Methionine — –CH₂CH₂–S–CH₃
  Methionine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="45" x2="8" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="22" y1="45" x2="31" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="45" y1="45" x2="56" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="75" y1="45" x2="84" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="15" cy="45" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="38" cy="45" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="65" cy="45" r="10" fill="#eab308" stroke="#fde047" stroke-width="1.5"/>
    <circle cx="91" cy="45" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <text x="55" y="73" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₂CH₂–S–CH₃</text>
  </svg>`,

  // Valine — –CH(CH₃)₂
  Valine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="46" x2="30" y2="46" stroke="#94a3b8" stroke-width="2"/>
    <line x1="44" y1="40" x2="56" y2="26" stroke="#94a3b8" stroke-width="2"/>
    <line x1="44" y1="52" x2="56" y2="66" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="38" cy="46" r="8" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="63" cy="20" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="63" cy="72" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <text x="55" y="87" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH(CH₃)₂</text>
  </svg>`,

  // Leucine — –CH₂–CH(CH₃)₂
  Leucine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="46" x2="8" y2="46" stroke="#94a3b8" stroke-width="2"/>
    <line x1="22" y1="46" x2="32" y2="46" stroke="#94a3b8" stroke-width="2"/>
    <line x1="46" y1="46" x2="58" y2="46" stroke="#94a3b8" stroke-width="2"/>
    <line x1="65" y1="40" x2="74" y2="27" stroke="#94a3b8" stroke-width="2"/>
    <line x1="65" y1="52" x2="74" y2="65" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="15" cy="46" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="39" cy="46" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="65" cy="46" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="79" cy="22" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="79" cy="70" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <text x="50" y="86" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₂–CH(CH₃)₂</text>
  </svg>`,

  // Isoleucine — –CH(CH₃)–CH₂–CH₃
  Isoleucine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="48" x2="20" y2="48" stroke="#94a3b8" stroke-width="2"/>
    <line x1="28" y1="40" x2="28" y2="28" stroke="#94a3b8" stroke-width="2"/>
    <line x1="35" y1="48" x2="48" y2="48" stroke="#94a3b8" stroke-width="2"/>
    <line x1="62" y1="48" x2="76" y2="48" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="28" cy="48" r="8" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="28" cy="22" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="55" cy="48" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="83" cy="48" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <text x="55" y="76" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH(CH₃)–CH₂–CH₃</text>
  </svg>`,

  // Threonine — –CH(OH)–CH₃ (H of OH points up)
  Threonine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="55" x2="27" y2="55" stroke="#94a3b8" stroke-width="2"/>
    <line x1="35" y1="47" x2="35" y2="35" stroke="#94a3b8" stroke-width="2"/>
    <line x1="35" y1="16" x2="35" y2="10" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="43" y1="55" x2="58" y2="55" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="35" cy="55" r="8" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="35" cy="24" r="8" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <circle cx="35" cy="6" r="4" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="65" cy="55" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <text x="55" y="78" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH(OH)–CH₃</text>
  </svg>`,

  // Tyrosine — –CH₂–C₆H₄–OH (benzene with double bonds)
  Tyrosine: `<svg viewBox="0 0 130 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="45" x2="9" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="20" y1="45" x2="30" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="43" y1="45" x2="50" y2="31" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="50" y1="31" x2="65" y2="31" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="65" y1="31" x2="72" y2="45" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="72" y1="45" x2="65" y2="59" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="65" y1="59" x2="50" y2="59" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="50" y1="59" x2="43" y2="45" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="46" y1="47" x2="53" y2="33" stroke="#94a3b8" stroke-width="1.4"/>
    <line x1="63" y1="33" x2="70" y2="47" stroke="#94a3b8" stroke-width="1.4"/>
    <line x1="50" y1="56" x2="65" y2="56" stroke="#94a3b8" stroke-width="1.4"/>
    <line x1="79" y1="45" x2="88" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="103" y1="45" x2="111" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="13" cy="45" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="37" cy="45" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="50" cy="31" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="65" cy="31" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="72" cy="45" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="65" cy="59" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="50" cy="59" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="95" cy="45" r="8" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <circle cx="116" cy="45" r="5" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="65" y="80" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₂–Ph–OH</text>
  </svg>`,

  // Asparagine — –CH₂–CONH₂
  Asparagine: `<svg viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="50" x2="18" y2="50" stroke="#94a3b8" stroke-width="2"/>
    <line x1="32" y1="50" x2="48" y2="50" stroke="#94a3b8" stroke-width="2"/>
    <line x1="52" y1="43" x2="52" y2="30" stroke="#94a3b8" stroke-width="2"/>
    <line x1="58" y1="43" x2="58" y2="30" stroke="#94a3b8" stroke-width="2"/>
    <line x1="55" y1="57" x2="55" y2="70" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="25" cy="50" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="55" cy="50" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="55" cy="23" r="7" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <circle cx="55" cy="77" r="7" fill="#60a5fa" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="55" y="96" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₂–CONH₂</text>
  </svg>`,

  // Glutamine — –(CH₂)₂–CONH₂
  Glutamine: `<svg viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="50" x2="8" y2="50" stroke="#94a3b8" stroke-width="2"/>
    <line x1="22" y1="50" x2="35" y2="50" stroke="#94a3b8" stroke-width="2"/>
    <line x1="49" y1="50" x2="63" y2="50" stroke="#94a3b8" stroke-width="2"/>
    <line x1="67" y1="43" x2="67" y2="30" stroke="#94a3b8" stroke-width="2"/>
    <line x1="73" y1="43" x2="73" y2="30" stroke="#94a3b8" stroke-width="2"/>
    <line x1="70" y1="57" x2="70" y2="70" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="15" cy="50" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="42" cy="50" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="70" cy="50" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="70" cy="23" r="7" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <circle cx="70" cy="77" r="7" fill="#60a5fa" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="55" y="96" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–(CH₂)₂–CONH₂</text>
  </svg>`,

  // Glutamate — –(CH₂)₂–COO⁻ (pH 7 deprotonated)
  "Glutamate": `<svg viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="50" x2="8" y2="50" stroke="#94a3b8" stroke-width="2"/>
    <line x1="22" y1="50" x2="35" y2="50" stroke="#94a3b8" stroke-width="2"/>
    <line x1="49" y1="50" x2="63" y2="50" stroke="#94a3b8" stroke-width="2"/>
    <line x1="67" y1="43" x2="67" y2="30" stroke="#94a3b8" stroke-width="2"/>
    <line x1="73" y1="43" x2="73" y2="30" stroke="#94a3b8" stroke-width="2"/>
    <line x1="70" y1="57" x2="70" y2="70" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="15" cy="50" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="42" cy="50" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="70" cy="50" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="70" cy="23" r="7" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <circle cx="70" cy="77" r="7" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="55" y="96" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–(CH₂)₂–COO⁻</text>
  </svg>`,

  // Arginine — guanidinium group (fully protonated at pH 7; =NH₂⁺ shown)
  Arginine: `<svg viewBox="0 0 115 110" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="55" x2="7" y2="55" stroke="#94a3b8" stroke-width="2"/>
    <line x1="19" y1="51" x2="23" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="35" y1="45" x2="39" y2="51" stroke="#94a3b8" stroke-width="2"/>
    <line x1="51" y1="51" x2="55" y2="45" stroke="#94a3b8" stroke-width="2"/>
    <line x1="67" y1="45" x2="71" y2="51" stroke="#94a3b8" stroke-width="2"/>
    <line x1="72" y1="49" x2="72" y2="37" stroke="#94a3b8" stroke-width="2"/>
    <line x1="78" y1="49" x2="78" y2="37" stroke="#94a3b8" stroke-width="2"/>
    <line x1="75" y1="63" x2="75" y2="76" stroke="#94a3b8" stroke-width="2"/>
    <line x1="75" y1="30" x2="75" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="75" y1="83" x2="75" y2="88" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="13" cy="55" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="29" cy="41" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="45" cy="55" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="61" cy="41" r="7" fill="#60a5fa" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="75" cy="55" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="75" cy="30" r="7" fill="#60a5fa" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="75" cy="83" r="7" fill="#60a5fa" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="75" cy="13" r="4" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="75" cy="96" r="4" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="57" y="108" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">guanidinium (NH₂⁺)</text>
  </svg>`,

  // Histidine — –CH₂–imidazole (double bonds in ring)
  Histidine: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="56" x2="8" y2="56" stroke="#94a3b8" stroke-width="2"/>
    <line x1="22" y1="56" x2="48" y2="64" stroke="#94a3b8" stroke-width="2"/>
    <line x1="54" y1="68" x2="54" y2="46" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="54" y1="46" x2="70" y2="34" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="70" y1="34" x2="87" y2="44" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="87" y1="44" x2="82" y2="67" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="82" y1="67" x2="54" y2="68" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="68" y1="36" x2="85" y2="46" stroke="#94a3b8" stroke-width="1.2"/>
    <line x1="82" y1="64" x2="56" y2="65" stroke="#94a3b8" stroke-width="1.2"/>
    <circle cx="15" cy="56" r="7" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="54" cy="68" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="54" cy="44" r="7" fill="#60a5fa" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="70" cy="34" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <circle cx="87" cy="44" r="7" fill="#60a5fa" stroke="#93c5fd" stroke-width="1.5"/>
    <circle cx="82" cy="67" r="6" fill="#94a3b8" stroke="#64748b" stroke-width="1.3"/>
    <text x="52" y="86" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">–CH₂–imidazole</text>
  </svg>`,
};


// ================================================================
//  QUIZ QUESTIONS
// ================================================================
const ALL_QUESTIONS = [
  {
    q: "Which amino acid is the SMALLEST, with only a single hydrogen atom as its side chain?",
    a: "Glycine",
    options: ["Glycine", "Alanine", "Serine", "Proline"],
    explain: "Glycine has just –H as its side chain — the tiniest possible, giving proteins extra flexibility at that position."
  },
  {
    q: "Which amino acid can form DISULFIDE BONDS by pairing its thiol group with another of its kind?",
    a: "Cysteine",
    options: ["Serine", "Cysteine", "Methionine", "Lysine"],
    explain: "Cysteine's –SH (thiol) group oxidises with another –SH to form –S–S–. This cross-link stabilises 3D protein shapes."
  },
  {
    q: "Serotonin (the 'feel-good' neurotransmitter) is synthesised in the body from which amino acid?",
    a: "Tryptophan",
    options: ["Phenylalanine", "Lysine", "Tryptophan", "Glycine"],
    explain: "Tryptophan → 5-HTP → Serotonin. Low dietary tryptophan can affect mood and sleep."
  },
  {
    q: "Which amino acid is ALWAYS the first amino acid coded for when a cell starts building any new protein?",
    a: "Methionine",
    options: ["Glycine", "Proline", "Alanine", "Methionine"],
    explain: "The start codon AUG always codes for Methionine. Every protein begins with Met (though it is often trimmed away afterwards)."
  },
  {
    q: "Which amino acid carries a POSITIVE charge at normal body pH (~7.4)?",
    a: "Lysine",
    options: ["Aspartic Acid", "Serine", "Lysine", "Alanine"],
    explain: "Lysine's long chain ends in –NH₃⁺, holding a positive charge at physiological pH."
  },
  {
    q: "Which amino acid's unique RING structure causes rigid kinks and bends in protein chains?",
    a: "Proline",
    options: ["Tryptophan", "Phenylalanine", "Proline", "Glycine"],
    explain: "Proline's side chain loops back and bonds to its own backbone nitrogen, preventing rotation and forcing a structural bend."
  },
  {
    q: "Which amino acid carries a NEGATIVE charge at body pH?",
    a: "Aspartic Acid",
    options: ["Lysine", "Aspartic Acid", "Serine", "Alanine"],
    explain: "Aspartic acid (pKa ≈ 3.9) donates its proton at body pH, leaving a negatively charged –COO⁻ side chain."
  },
  {
    q: "Which amino acid contains a pure BENZENE RING as its side chain and is essential (must come from food)?",
    a: "Phenylalanine",
    options: ["Serine", "Phenylalanine", "Tryptophan", "Cysteine"],
    explain: "Phenylalanine = 'phenyl' (benzene ring) + 'alanine'. Tryptophan has a larger indole ring (benzene fused with pyrrole)."
  },
  {
    q: "Which amino acid contains a HYDROXYL (–OH) group and is often found in enzyme active sites?",
    a: "Serine",
    options: ["Serine", "Glycine", "Methionine", "Proline"],
    explain: "Serine's –OH is reactive and forms the catalytic centre of 'serine proteases' — enzymes that cut other proteins."
  },
  {
    q: "How many of the 20 standard amino acids are ESSENTIAL (cannot be made by the human body)?",
    a: "9",
    options: ["5", "9", "15", "20"],
    explain: "The 9 essential amino acids are: His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val. They must come from food."
  },
  {
    q: "What GROUP in Cysteine allows it to form disulfide bonds with other cysteines?",
    a: "Thiol (–SH) group",
    options: ["Benzene ring", "Thiol (–SH) group", "Hydroxyl (–OH) group", "Positive charge"],
    explain: "Two –SH groups lose a hydrogen each and bond: –SH + HS– → –S–S– + 2H. This is an oxidation reaction."
  },
  {
    q: "The structural protein COLLAGEN (in skin, tendons, cartilage) is unusually rich in which amino acid?",
    a: "Proline",
    options: ["Lysine", "Proline", "Methionine", "Tryptophan"],
    explain: "Collagen is ~13% Proline and ~33% Glycine. Proline's rigid structure gives collagen its tensile strength."
  },
  {
    q: "Which amino acid contains SULFUR and is ALSO the universal 'start' signal for protein synthesis?",
    a: "Methionine",
    options: ["Cysteine", "Methionine", "Serine", "Lysine"],
    explain: "Both Cys and Met contain sulfur, but only Methionine (codon AUG) triggers ribosomal protein synthesis."
  },
  {
    q: "The artificial sweetener ASPARTAME is made from Phenylalanine plus which other amino acid?",
    a: "Aspartic Acid",
    options: ["Glycine", "Serine", "Aspartic Acid", "Lysine"],
    explain: "Aspartame = Aspartic acid + Phenylalanine + methanol. Its PKU warning refers to the phenylalanine content."
  },
  {
    q: "NONPOLAR amino acids are described as 'hydrophobic'. What does hydrophobic mean?",
    a: "They repel water and prefer to be buried inside proteins",
    options: [
      "They attract water and stay on the protein surface",
      "They carry a negative charge",
      "They repel water and prefer to be buried inside proteins",
      "They are always positively charged"
    ],
    explain: "Nonpolar side chains lack partial charges, so they cannot form hydrogen bonds with water. They cluster inside protein cores."
  },
];

// ================================================================
//  THEME TOGGLE
// ================================================================
(function initTheme() {
  const saved = localStorage.getItem('aq-theme') || 'dark';
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = '🌙 Dark';
  }
})();

function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const btn = document.getElementById('theme-toggle');
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    btn.textContent = '☀️ Light';
    localStorage.setItem('aq-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    btn.textContent = '🌙 Dark';
    localStorage.setItem('aq-theme', 'light');
  }
}

// ================================================================
//  GAME STATE
// ================================================================
const state = {
  playerName: "Player",
  playerScore: 0,
  botScore: 0,

  // Memory (Matching) game sub-state
  mg: {
    pairs: [],          // 6 amino acid objects chosen for this round
    cards: [],          // 12 card objects: {id, pairIdx, type, flipped, locked}
    flipped: [],        // ids of currently face-up unmatched cards (max 2)
    locked: 0,          // count of locked pairs
    playerCorrect: 0,
    botCorrect: 0,
    botActive: false,
    botKnown: new Map(), // cardId → pairIdx  (bot's memory)
    botTimer: null,
  },

  // Quiz sub-state
  qz: {
    questions: [],
    current: 0,
    playerRoundScore: 0,
    botRoundScore: 0,
    answered: false,
    timeLeft: 20,
    timerInterval: null,
    botTimer: null,
  },
};

// ================================================================
//  NAVIGATION
// ================================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  stopAllTimers();
  showScreen('screen-home');
}

function exitToMenu() {
  stopAllTimers();
  // Reset bot-active so clicks are re-enabled next game
  state.mg.botActive = false;
  // Stop explorer if running
  if (typeof stopExplorer === 'function') stopExplorer();
  showScreen('screen-game-select');
}

function startSession() {
  const name = document.getElementById('player-name').value.trim();
  state.playerName = name || "Player";
  state.playerScore = 0;
  state.botScore = 0;
  refreshAllScores();
  showScreen('screen-game-select');
}

function stopAllTimers() {
  clearTimeout(state.mg.botTimer);
  clearInterval(state.qz.timerInterval);
  clearTimeout(state.qz.botTimer);
}

// ================================================================
//  SCORE HELPERS
// ================================================================
function addPoints(who, pts) {
  if (who === 'player') state.playerScore = Math.max(0, state.playerScore + pts);
  else                  state.botScore    = Math.max(0, state.botScore    + pts);
  refreshAllScores();
}

function refreshAllScores() {
  document.getElementById('gs-pname').textContent   = state.playerName;
  document.getElementById('gs-pscore').textContent  = state.playerScore;
  document.getElementById('gs-bscore').textContent  = state.botScore;
  document.getElementById('gs-welcome').textContent = `👋 Hi, ${state.playerName}`;

  document.getElementById('mg-pname').textContent  = state.playerName;
  document.getElementById('mg-pscore').textContent = state.playerScore;
  document.getElementById('mg-bscore').textContent = state.botScore;

  document.getElementById('qz-pname').textContent  = state.playerName;
  document.getElementById('qz-pscore').textContent = state.playerScore;
  document.getElementById('qz-bscore').textContent = state.botScore;

  document.getElementById('ex-pname').textContent  = state.playerName;
  document.getElementById('ex-pscore').textContent = state.playerScore;
  document.getElementById('ex-bscore').textContent = state.botScore;
}

// ================================================================
//  TOAST
// ================================================================
let _toastTimer;
function toast(msg, type = 'info') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `show ${type}`;
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.className = '', 3000);
}

// ================================================================
//  UTILITIES
// ================================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function catLabel(cat) {
  return { nonpolar: 'Nonpolar', polar: 'Polar Uncharged', positive: 'Positively Charged', negative: 'Negatively Charged' }[cat] || cat;
}

function catColour(cat) {
  return { nonpolar: 'nonpolar', polar: 'polar', positive: 'positive', negative: 'negative' }[cat] || 'muted';
}

// ================================================================
//  BOT MESSAGE HELPER
// ================================================================
function botSetMsg(game, msg) {
  document.getElementById(`bot-msg-${game}`).textContent = msg;
}

// ================================================================
//  KEYBOARD — Enter key on home screen
// ================================================================
document.getElementById('player-name').addEventListener('keypress', e => {
  if (e.key === 'Enter') startSession();
});

// ================================================================
//  STRUCTURE IMAGE HELPER
//  Returns an <img> if user has uploaded a custom image, else the SVG markup.
// ================================================================
function getStructureMarkup(name) {
  const stored = localStorage.getItem('aq-img-' + name);
  if (stored) {
    return `<img src="${stored}" style="width:100%;height:100%;object-fit:contain;" alt="${name} structure">`;
  }
  return SVG_STRUCTURES[name] ||
    `<svg viewBox="0 0 110 90"><text x="55" y="50" text-anchor="middle" fill="#94a3b8" font-size="11">${name}</text></svg>`;
}
