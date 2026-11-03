# GraFix

GraFix is a responsive, standalone Next.js learning platform for Senior High School Pre-Calculus students. It includes learning materials, an interactive graphing tool, a server-connected Anthropic learning assistant, and three playable learning games.

## Requirements
- Node.js 20.9 or newer
- npm
- An Anthropic API key (only needed for the AI assistant)

## Run locally
```bash
npm install
cp .env.example .env.local
# Add your key to ANTHROPIC_API_KEY in .env.local to enable the AI assistant.
npm run dev
```
Open http://localhost:3000.

The website, lessons, graphing tool, and games work without an API key. Without a key, the assistant displays a setup notice rather than pretending to answer.

## Build and test
```bash
npm test
npm run build
npm start
```

## Deploy to Vercel
1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Set `ANTHROPIC_API_KEY` in Project Settings → Environment Variables. Optionally set `ANTHROPIC_MODEL`.
4. Deploy. Do not add `.env.local` to source control.

## Graphing notes
The graphing interface uses `function-plot` for plotting and navigation, and `mathjs` to parse and evaluate student-entered expressions. The supported expression syntax includes `x`, numbers, `+ - * / ^`, parentheses, and common functions such as `sin(x)`, `cos(x)`, `tan(x)`, `sqrt(x)`, `abs(x)`, `exp(x)`, and `log(x)`. The transformation model is `y = a f(b(x - h)) + k`. The plotted function is evaluated as `a * f(b * (x - h)) + k`.

## AI safety and privacy
Student prompts are length-limited and validated server-side. The Anthropic key is read only by the server route and is never sent to browser code. Avoid entering private or sensitive personal information. API usage may incur charges under the Anthropic account.

## Project structure
```text
src/
  app/                 Next.js routes and global styling
    api/assistant/     Secure Anthropic endpoint
    graph/             Interactive graphing tool
    lessons/           Six learning modules
    games/             Three playable games
    assistant/         AI learning assistant UI
  components/          Shared navigation and layout
  lib/                 Transformation and game logic
tests/                 Node tests for math and game helpers
```

## Current first-version scope
- Functional responsive site navigation and homepage.
- Six structured lessons with examples, summaries, common mistakes, and plotted illustrations.
- Interactive parent-function graph, transformed graph, transformation controls, equation display, and pan/zoom.
- Three question-driven games with feedback, points, levels, and restart.
- Real Anthropic Messages API integration via the official SDK.
- Basic automated tests for transformation calculations and game scoring.

A real API key and a successful Anthropic account configuration are required for AI answers. The project has not been run or deployed in this environment; run the commands above to verify it in your Node environment.
