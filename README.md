# P1234 - Nano Font Collection

[![NPM](https://img.shields.io/npm/v/p1234.svg?style=flat)](https://www.npmjs.com/package/p1234)
[![License](https://img.shields.io/npm/l/p1234.svg?style=flat)](https://github.com/arghyaxcodes/p1234/blob/main/LICENSE)

A Size Limited and TypeScript Friendly Font Collection for Serverless Environment. Including 1899 Google Fonts!

> The unpacked size (~112 MB) includes all 1,899 fonts in 3 formats.
> (ESM: ~50 MB, CJS: ~51 MB, DTS: ~11 MB)
>
> The average size of each font is about 19 KB.

## 🎯 Why?

Perfect for serverless environments like Cloudflare Workers, Vercel Edge Functions, and AWS Lambda where:

1. **External fonts are not available** - embed fonts in base64 format
2. **Size limits require optimization** - fonts are stripped to ASCII characters only
3. **TypeScript support is essential** - fully typed font imports
4. **Quick font access is needed** - no network requests required

## 📦 Installation

```bash
npm install p1234
# or
pnpm add p1234
# or
yarn add p1234
```

## 🚀 Usage

### Basic Usage

```typescript
import Baloo_2 from "p1234/fonts/Baloo_2";
// const Baloo_2 = require("p1234/fonts/Baloo_2");

const my_css = `
@font-face {
    font-family: "${Baloo_2.name}";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("${Baloo_2.base64}") format("woff2");
}

body {
    font-family: "${Baloo_2.name}", sans-serif;
}`;
```

### SVG with Embedded Font

```typescript
import Roboto from "p1234/fonts/Roboto";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100">
    <defs>
        <style>
            @font-face {
                font-family: "${Roboto.name}";
                src: url("${Roboto.base64}") format("woff2");
            }
            .text {
                font-family: "${Roboto.name}", sans-serif;
                font-size: 24px;
            }
        </style>
    </defs>
    <text x="20" y="50" class="text">Hello, World!</text>
</svg>`;
```

## 📝 Fonts

### Font Format & Range

- **Format**: woff2 (compressed)
- **Range**: ASCII (32 ~ 126) - Basic Latin characters
- **Total Fonts**: 1899 Google Fonts

### Font Object Structure

Each font export includes:

- `name`: Font family name (string)
- `base64`: Base64-encoded woff2 font data (string)

### Available Fonts

All fonts are available as individual imports from `p1234/fonts/[FontName]`. For example:

```typescript
import { Roboto, Open_Sans, Lato } from "p1234/fonts";
```

## 🛠️ Development

### Prerequisites

- Node.js 20+
- Google Fonts API key (for font generation)

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file: `cp .env.example .env`
4. Add your Google Fonts API key to `.env`

### Available Scripts

```bash
# Generate font files from Google Fonts API
npm run gen

# Build the project (generate + compile with tsup)
npm run build

# Watch mode for development
npm run dev

# Format code with Biome
npm run format

# Lint code with Biome
npm run lint

# Lint and fix code with Biome
npm run lint:fix

# Clean generated files
npm run clean
```

### Building Fonts

1. Get a Google Fonts API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Add it to `.env` file:
   ```
   GOOGLE_API_KEY=your_api_key_here
   ```
3. Run `npm run gen` to fetch and generate all fonts
4. Run `npm run build` to compile TypeScript with tsup

## 📂 Project Structure

```
p1234/
├── src/                    # Source code (TypeScript)
│   ├── builder/           # Font generation scripts
│   │   ├── index.ts       # Main builder
│   │   ├── template.ts    # Font template utilities
│   │   ├── types.ts       # Type definitions
│   │   └── utils.ts       # Helper utilities
│   └── index.ts           # Main entry point
├── generated/             # Auto-generated TypeScript (temporary)
├── fonts/                 # Compiled output (published to npm)
│   ├── index.js          # ESM entry point
│   ├── index.cjs         # CommonJS entry point
│   ├── index.d.ts        # TypeScript declarations
│   └── [FontName].js     # Individual font modules
├── examples/              # Usage examples
├── package.json
├── tsup.config.ts        # Build configuration
└── tsconfig.json         # TypeScript configuration
```

### Build Process

1. **`npm run gen`** - Fetches font data from Google Fonts API and generates TypeScript files
2. **`npm run build`** - Compiles TypeScript to JavaScript using tsup, generating:
   - ESM modules (`.js`)
   - CommonJS modules (`.cjs`)
   - TypeScript declarations (`.d.ts`)

## 📚 API Reference

### Font Object

```typescript
interface FontData {
  name: string;      // Font family name
  base64: string;    // Base64-encoded woff2 data
}
```

### Import Examples

```typescript
// Individual font import
import Roboto from "p1234/fonts/Roboto";

// Multiple fonts
import { Roboto, Open_Sans } from "p1234/fonts";

// CommonJS
const Roboto = require("p1234/fonts/Roboto");
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](docs/CONTRIBUTING.md).

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run lint`
5. Format code: `npm run format`
6. Submit a pull request

## 📄 License

MIT - see [LICENSE](LICENSE) file for details.

## 🙏 Credits

- Font data from [Google Fonts](https://fonts.google.com/)
- Inspired by [nano-font](https://github.com/JacobLinCool/nano-font)
- Built with [tsup](https://github.com/egoist/tsup) and [fonteditor-core](https://github.com/kekee000/fonteditor-core)
