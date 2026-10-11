# SoloLevelUp ⚡

**SoloLevelUp** is an interactive browser AR combat experience inspired by **Solo Leveling**, powered by real-time body pose and hand gesture detection. No controllers, hardware trackers, or sensors required — your body and fingers control everything through your webcam.

### Created by **Dheeraj Heggade**

---

## 🎮 How to Play & Gesture Instructions

Stand approximately **1.5 to 2.5 meters** back from your webcam so your upper body, arms, and hands are visible.

### 1. ⚡ Hunter Awakening (Level Up)
- **Gesture**: Spread **both arms wide sideways** at shoulder height with your **palms open**.
- **Result**: Triggers the **Awakening System**, grants you your **Hunter Rank (S-Rank / Monarch Candidate)**, and opens the **System Ability Selection Panel**.

---

### 2. 🖐️ Selecting & Equipping Abilities (Finger Gestures)
Once the System Ability Selection screen appears, choose your skill using your hand:

| Finger Count | Ability | Description |
| :---: | :--- | :--- |
| ☝️ **1 Finger** | **DAGGER RUSH** | High-speed assassin barrage piercing enemy defenses |
| ✌️ **2 Fingers** | **RULER AUTHORITY** | Psychokinetic domain pushing back hostile entities |
| 🤟 **3 Fingers** | **DRAGON BREATH** | Incinerating monarch flames sweeping the battlefield |
| 🖖 **4 Fingers** | **LIGHTNING CRAG** | High-voltage Ki discharge from the heavens |
| 🖐️ **5 Fingers** | **SHADOW ARMY** | Summon shadow soldiers rising from the abyss to fight |

#### **To Confirm & Equip:**
1. Show **1 to 5 fingers** to highlight and preview your chosen skill.
2. **Close your hand into a fist** — locks the selection in.
3. **Open your palm** — confirms and equips the skill, returning you to battle!
*(You can also click cards directly with your mouse).*

---

### 3. ⚔️ Solo Dungeon vs. Solo Leveling Monsters (Single Player Mode)
Choose **`⚔️ SOLO DUNGEON (VS MONSTERS)`** on the start screen to face off against iconic Solo Leveling monsters:
- **Stage 1 (E-Rank)**: *Goblin Scout* — Low-tier enemy, great for warming up your form!
- **Stage 2 (B-Rank)**: *Cerberus* — Gatekeeper of the demon castle; requires steady pumping to extinguish his infernal flames!
- **Stage 3 (A-Rank BOSS)**: *Blood-Red Commander Igris* — **Critical Encounter!** Commander Igris awakens and executes Monarch Execution, overpowering normal Hunter output. Support the creator or train harder to overcome him!
- **Stage 4 (A-Rank)**: *High Orc Shaman Kargalgan* — Chants ancient gravity curses.
- **Stage 5 (S-Rank MONARCH BOSS)**: *Ant King Beru* — Extreme predator of Jeju Island.

---

### 4. ⚡ 2-Player Live Duel & Beam Clashes
- **Ki Charging**: Cup both hands together and draw them back to your hip. Hold to gather energy.
- **Release (Ki Blast)**: Thrust both arms straight forward with wrists together and open palms to unleash an energy beam!
- **2-Player Duels**:
  - Two hunters stand side-by-side in front of the camera (**Player 1 on the Left**, **Player 2 on the Right**).
  - When both fire their beams, they collide in a **Beam Clash** in the center!
  - **Beam Struggle**: Repeatedly **pump your arms forward and back** to overpower your opponent's beam and claim victory!

---

### 5. ☕ Buy Me a Coffee / UPI Creator Support
SoloLevelUp is developed and maintained independently by **Dheeraj Heggade**.
- At startup, after victorious rounds, or after critical dungeon boss defeats, the **Benefactor Portal** allows you to scan Dheeraj's direct UPI QR code with any UPI app (GPay, PhonePe, Paytm, BHIM) to power up the creator and fuel future updates!
- The modal features a clean cancel / continue button so you can quickly jump straight back into the action.

---

## ⌨️ Keyboard Shortcuts

| Key | Function |
| :---: | :--- |
| `Space` | Pause / Resume battle |
| `M` | Toggle Sound Effects (On / Off) |
| `P` | Switch Player Slots (1 Player / 2 Players) |
| `D` | Toggle Debug Skeleton Overlay |
| `R` | Reset Round Scores |
| `F` | Toggle Fullscreen Mode |
| `K` | Record & save motion data frames |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer)
- A working webcam

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser (Google Chrome or Microsoft Edge recommended for best WebAssembly/WebGL performance).

---

## 🛠️ Tech Stack
- **Language & Bundler**: TypeScript + Vite
- **Computer Vision**: Google MediaPipe Tasks Vision (`@mediapipe/tasks-vision`) — PoseLandmarker + HandLandmarker
- **Graphics & VFX**: Three.js + Custom WebGL GLSL Shaders (Particles, Aura, Ribbons)
- **Audio Engine**: Synthesized cinematic Web Audio API (zero audio asset downloads needed)

---

© 2026 Dheeraj Heggade. All rights reserved.
