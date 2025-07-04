# 🎙️ LexiVox

**LexiVox** is a fully in-browser AI-powered transcription and translation tool built using OpenAI's Whisper model served via [`@xenova/transformers`](https://github.com/xenova/transformers.js).  
It supports live mic streaming or uploading audio files (MP3) with **no backend involved**. All the magic runs right inside your browser.

👉 **Click here to use live →** [**LexiVox**](https://lexivox.netlify.app/)

---

## 🚀 Features

- 🎤 Upload `.mp3` audio or record **live from mic**
- 💬 Transcribe in **real-time** using `whisper-tiny.en`
- 🌍 Translate audio to **English**
- ⚙️ Fully **client-side** ML using `@xenova/transformers`
- ✨ Clean UI with **React + Vite + Tailwind CSS**


---

## 🧠 Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Frontend     | React + Vite + Tailwind CSS       |
| Model        | `openai/whisper-tiny.en`          |
| Runtime      | `@xenova/transformers` (Web ML)   |
| Transcription| Whisper (ASR) in browser          |
| Deployment   | Netlify                           |

---

## 🗂️ Project Structure

```bash
Lexivox
├── README.md                # ← This file
├── index.html               # Entry HTML with Vite
├── vite.config.js           # Vite config
├── package.json             # Project dependencies
├── public/
│   └── vite.svg             # Static assets
├── src/
│   ├── App.jsx              # Root React component
│   ├── index.css            # Tailwind CSS config
│   ├── main.jsx             # App entry point
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── FileDisplay.jsx     # Audio upload/view
│   │   ├── Header.jsx          # Top UI section
│   │   ├── HomePage.jsx        # Landing UI
│   │   ├── Information.jsx     # Transcription result display
│   │   ├── Transcribing.jsx    # Loading animation
│   │   ├── Transcription.jsx   # (Optional component)
│   │   └── Translation.jsx     # Translated text UI
│   └── utils/
│       ├── presets.js          # Message constants
│       ├── whisper.worker.js   # Web worker for Whisper
│       └── translate.worker.js # Web worker for translation

```
---

## 🧪 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/lexivox.git
cd lexi-vox

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
---

## 🧬 Model Info

| Feature           | Description                                               |
|-------------------|-----------------------------------------------------------|
| **Task**          | Automatic Speech Recognition (ASR)                        |
| **Model Used**    | `openai/whisper-tiny.en`                                  |
| **Library**       | [`@xenova/transformers`](https://github.com/xenova/transformers.js) |
| **Runtime**       | In-browser (CPU/WebAssembly — no backend required)        |
| **Streaming**     | ✅ Yes — partial results are emitted in real time         |
| **Translation**   | ✅ Optional translation available (user-triggered)         |
| **Mic Support**   | ✅ Real-time microphone input                              |
| **File Upload**   | ✅ Accepts `.mp3` and other audio formats                 |
| **Dependencies**  | React, Vite, Xenova Transformers.js                       |

