# 🧩 Minesweeper  Feature List

A concise, beginner-friendly summary of the Minesweeper project's features and implementation goals. This project uses plain JavaScript, HTML, and CSS (no frameworks).

## 🎯 Goal
Build a playable Minesweeper clone with clean game logic, responsive UI, and clear separation between game state and rendering.

## Core Gameplay
- Click a cell to reveal it.
- Right-click (or long-press / modifier key) to toggle a flag on a suspected mine.
- Numbered cells show how many adjacent mines exist.
- Empty cells cascade (reveal surrounding cells automatically).
- First click is always safe (no mine placed under first revealed cell).

## Modes & Difficulty
- Preset difficulties:
  - Beginner: 9×9, 10 mines
  - Intermediate: 16×16, 40 mines
  - Expert: 30×16, 99 mines
- Custom mode: user-defined rows, columns, and mine count (with validation).

## UI / UX
- Responsive grid that adapts to screen size.
- Mine counter showing remaining unflagged mines.
- Timer that starts on first reveal and pauses/ends on win or loss.
- Visual feedback for actions: reveal animation, flag marker, exploded mine highlight on loss.
- Clean, keyboard-friendly controls (optional): arrow keys to move focus, Enter to reveal, Space to flag.

## Accessibility
- ARIA attributes for grid and cells.
- Focus outlines and clear keyboard navigation.
- Text alternatives for screen readers (cell states: hidden, flagged, revealed with number or mine).

## Game Logic / Structure
- Clear separation of concerns:
  - Board class: grid creation, mine placement, adjacency calculation.
  - Cell model: state (hidden/revealed/flagged), content (mine or number).
  - Game controller: start, reveal, flag, check win/loss, timer.
- Deterministic mine placement option (seeded RNG) for reproducible testing.

## Rules & Edge Cases
- Prevent flagging a revealed cell.
- Prevent revealing a flagged cell unless unflagged first.
- Prevent placing more flags than mines (counter only).
- Handle division between clicks and long-press on touch devices.
- Graceful handling of invalid custom settings (e.g., mines ≥ cells).

## Persistence & Scores
- Optional: save best times per difficulty to localStorage.
- Optional: support pause/resume and undo last action (limited).

## Testing & Debugging
- Unit-testable functions: adjacency calculation, cascade reveal, win/loss detection, seeded mine placement.
- Debug mode: show mine positions for development/testing.

## Performance
- Efficient cascade reveal (BFS/DFS) to avoid stack overflow on large empty areas.
- Minimal DOM updates batch cell updates where possible.

## Extensions (ideas for later)
- Hint system (temporarily reveal a safe cell).
- Leaderboards (remote or local).
- Themed skins and animations.
- Multiplayer variants (turn-based reveal/flag).

---

Quick start: implement Board and Cell models first, add basic reveal/flag handlers, wire UI rendering, then add timer, difficulty presets, accessibility and persistence.