# Roller - D&D Dice Roller with Dungeon Crawler

A web-based dice roller featuring multiple dice types (d4, d6, d8, d12, d20, percentile) with an integrated dungeon crawler game.

## Project Structure

```
/
├── roll.html          - Main HTML file
├── roll.js            - Main JavaScript (dice rolling + dungeon crawler logic)
├── roller.css         - Styling
├── index.html         - Root page (minimal, links to roll.html)
├── *.png              - Dice face images (d4, d6, d8, d12, d20, etc.)
└── *.json             - Dice configuration data (d20.json, d12.json, d8.json, etc.)
```

## Key Features

### Dice Roller
- Multiple dice types with animated rolling
- Dice visualization with multiple faces
- Roll history log with special tags (NAT 20, NAT 1, MAX, CRIT)
- Percentile (d100) support

### Dungeon Crawler
- Procedural dungeon generation based on dice rolls
- Player starts in center of 48x32 grid
- Movement weighted towards unexplored areas (prevents clustering)
- Encounter types: legendary ($), catastrophe (!), good (*), neutral (.), bad (^)
- Viewport-based display (30x14 visible cells centered on player)

## Development Notes

### Dungeon Generation (`dungeonAdvance` function)
- Called on every dice roll with (type, value)
- Generates corridor (3-5 cells) + room in a weighted direction
- Direction weights based on unexplored adjacent cells (# symbols)
- Higher weight = more likely to explore new areas
- Player position updated after dungeon generation

### Exploration Tracking
- Grid cells: "#" = wall, "." = floor, symbols = encounters
- Adjacent exploration calculated per direction to bias movement
- Encounters placed at new room center position

## Commands to Run

**Local development:**
```bash
# Simply open roll.html in browser (no build required)
# Or use: python3 -m http.server
```

**Git workflow:**
- Branch format: `claude/improve-player-movement-aC4tI`
- Push to designated branch only
- Commit messages describe changes concisely

## Common Edits

- **Flavor text:** `flavorText` object (lines 466-527)
- **Encounter symbols:** `encounterSymbols` object (line 529-535)
- **Grid size:** `DGRID_W`, `DGRID_H` (lines 456-457)
- **Viewport size:** `DVIEW_W`, `DVIEW_H` (lines 458-459)
- **Dungeon generation:** `dungeonAdvance()` function (line 588+)
- **Movement direction weighting:** `dungeonAdvance()` lines 608-625

## Known Issues & Improvements

- ✅ Player movement now weighted towards unexplored areas (prevents clustering)
- Dungeon generation could use more sophisticated algorithms (Drunkard's Walk, etc.)
