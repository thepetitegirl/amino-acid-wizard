# Amino Acid Wizard (WIP)

An interactive browser-based game for learning all 20 standard amino acids. This is a mini-project (WIP; work in progress) to explore the use of games for educational purposes.

## How to play

Open `index.html` in any browser — no installation or setup needed.

### Games included

- **Flashcards** — flip cards to learn amino acid properties
- **Quiz** — test your knowledge with multiple choice questions
- **Lab Explorer** — top-down 2D map game, open chests to unlock amino acid challenges
  - Easy chests: multiple choice questions
  - Medium chests: identify the correct molecular structure
  - Hard chests: draw the side chain bonds

## All 20 amino acids covered

Alanine, Glycine, Serine, Cysteine, Proline, Phenylalanine, Tryptophan, Aspartic Acid, Lysine, Methionine, Valine, Leucine, Isoleucine, Threonine, Tyrosine, Asparagine, Glutamine, Glutamic Acid, Arginine, Histidine

## Last updated

2026-03-24 — Updates to the Memory Match game:

- Side-chain-only structures: all 20 amino acid diagrams now show only the R-group (side chain). The backbone (NH₂–Cα–COOH) is omitted, since it is identical across all amino acids.
- Ball-and-stick style: structures redrawn as proper ball-and-stick diagrams — coloured circles for atoms, lines for bonds. No text labels inside atoms.
- CPK atom colour scheme: Carbon = slate gray, Hydrogen = white, Oxygen = red, Nitrogen = blue, Sulfur = yellow. Explicit H atoms shown where relevant (e.g. –OH, –SH groups).
- Atom colour key legend: displayed above the matching tiles, listing each element by name and symbol with its colour.
- Side chain note: a note below the legend clarifies that only side chains are shown and that some hydrogens are omitted for clarity.
- Random set cycling: the 20 amino acids are now cycled through in randomised batches of 6 with no repeats until all 20 have been seen. A "New Set" button lets players swap in a fresh batch mid-game.

2026-03-22 — 3 game modes: Flashcards for studying, Quiz for multiple choice practice, and Lab Explorer — a 2D map game where you open chests to unlock amino acid challenges. All modes support user vs bot play.

## Run locally

```bash
git clone https://github.com/thepetitegirl/amino-acid-wizard.git
open amino-acid-wizard/index.html
```
