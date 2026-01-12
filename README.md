# Portfolio Website

A modern portfolio website built with Next.js, featuring a dark theme design and AI Avatar chat functionality.

## Features

- 🎨 Modern dark theme design
- 📱 Fully responsive layout
- 🚀 Smooth scrolling navigation
- 💬 AI Avatar chat integration
- ⚡ Optimized performance with Next.js
- 🎭 Smooth animations with Framer Motion

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Inter & JetBrains Mono
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **AI**: Google Gemini API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**Note**: The API key is stored server-side only for security. Do not use `NEXT_PUBLIC_` prefix.

3. Customize your portfolio data in `lib/data.ts`:
   - Update personal information
   - Add your skills, experience, and projects
   - Update social links

4. Add project images to `public/images/` directory

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/
│   ├── api/chat/        # AI chat API route
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Skills.tsx        # Skills section
│   ├── Experience.tsx    # Experience timeline
│   ├── Projects.tsx      # Projects showcase
│   ├── AvatarChat.tsx    # AI Avatar chat
│   └── Contact.tsx       # Contact section
├── lib/
│   ├── data.ts           # Portfolio data
│   └── ai-chat.ts        # AI chat utilities
└── public/
    └── images/           # Project images
```

## Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Personal info (name, title, bio, email)
- Skills and categories
- Work experience
- Projects
- Social links

### Styling

Customize colors in `tailwind.config.ts`:
- Background colors
- Accent colors
- Card colors

### AI Avatar

To enable the AI Avatar chat feature:
1. Get a Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to `.env.local` as `GEMINI_API_KEY` (server-side only, no `NEXT_PUBLIC_` prefix)
3. The chat will use Gemini Pro model by default

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

"# portofolio" 
