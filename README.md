# HTML Floater

A fun, browser-based 2D game where you navigate a blue square through gaps in moving pillars. Built with vanilla HTML, CSS, and JavaScript.

## 🎮 Game Overview

HTML Floater is a fast-paced obstacle avoidance game inspired by classic arcade games. Control your player and dodge incoming pillars with gaps to survive as long as possible!

## 🕹️ How to Play

1. Open `index.html` in your web browser
2. Use **WASD** or **Arrow Keys** to move:
   - **W** / **↑** - Jump/Move Up
   - **A** / **←** - Move Left
   - **S** / **↓** - Move Down
   - **D** / **→** - Move Right
3. **Space** - Jump with gravity mechanics
4. Navigate through the gaps in the pillars without hitting them
5. Survive as long as possible!

## ✨ Features

- **Smooth Controls** - WASD and arrow key support for flexible gameplay
- **Gravity Physics** - Realistic falling and jumping mechanics
- **Dynamic Obstacles** - Randomly generated pillars with variable gaps
- **Responsive Canvas** - Full-screen game environment
- **Collision Detection** - Game mechanics ready for hit detection

## 🛠️ Technical Stack

- **HTML5** - Canvas API for rendering
- **CSS3** - Styling and layout
- **Vanilla JavaScript** - Game loop, physics, and input handling

## 📂 Project Structure

```
htmlFloater/
├── index.html      # Main HTML file with canvas element
├── script.js       # Game logic, physics, and controls
├── style.css       # Styling for the canvas and page
└── README.md       # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
1. Clone or download this repository
2. Open `index.html` in your browser
3. Start playing!

No build tools or dependencies required—pure vanilla JavaScript!

## 🎯 Game Mechanics

- **Player** - Blue square (15x15 pixels) that you control
- **Pillars** - Black obstacles that spawn from the right and move left
- **Gap** - 80-pixel opening between top and bottom pillars for safe passage
- **Gravity** - Player falls unless jumping or moving upward
- **Collision** - Game ready for collision detection implementation

## 🔧 Customization

Want to tweak the game? Edit these values in `script.js`:

- `gravity` - Adjust falling speed
- `jumpStrength` - Control jump height
- `gapHeight` - Adjust difficulty by changing the gap size
- `spawnTimer` - Control how often pillars appear
- Colors and sizes in the object properties

Change the canvas background in `style.css`:
```css
#gameCanvas {
    background-color: rgb(145, 11, 1); /* Change this */
}
```

## 🐛 Known Issues & Future Features

- [ ] Collision detection & game over state
- [ ] Score/points system
- [ ] Sound effects
- [ ] Mobile touch controls
- [ ] Difficulty levels

## 📝 License

Free to use and modify. Have fun!

## 👾 Contributing

Feel free to fork, modify, and improve! If you add cool features, share them!
