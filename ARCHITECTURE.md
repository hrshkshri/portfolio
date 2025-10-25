# Portfolio Architecture

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── home/                 # Home page route
│   ├── about/                # About page route
│   ├── spotify/              # Spotify integration page
│   ├── calendar/             # Calendar/scheduling page
│   ├── github/               # GitHub activity page
│   └── api/                  # API routes
│       ├── github/           # GitHub API endpoint
│       └── spotify/          # Spotify API endpoints
│
├── components/               # React Components (organized by route)
│   ├── home/                 # Home page components
│   │   ├── Greeting.tsx
│   │   ├── CardGrid.tsx
│   │   └── cards/            # Card components
│   │       ├── ProfileCard.tsx
│   │       ├── ResumeCard.tsx
│   │       ├── CalendarCard.tsx
│   │       └── GitHubActivityCard.tsx
│   │
│   ├── about/                # About page components
│   │   └── ... (about related components)
│   │
│   ├── spotify/              # Spotify page components
│   │   └── Spotify.tsx       # Main Spotify component
│   │
│   ├── calendar/             # Calendar page components
│   │   └── Calendar.tsx      # Main Calendar component
│   │
│   ├── github/               # GitHub page components
│   │   └── GitHub.tsx        # Main GitHub component
│   │
│   └── shared/               # Shared components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── constant.ts       # Shared constants
│
├── lib/                      # Utility libraries
│   ├── axios.ts              # Axios instance with interceptors
│   ├── api/                  # API Service Layer
│   │   ├── github.ts         # GitHub API service
│   │   ├── spotify.ts        # Spotify API service
│   │   └── index.ts          # Central export
│   └── prisma.ts             # (if using Prisma)
│
├── hooks/                    # Custom React hooks
│   └── ...
│
└── types/                    # TypeScript type definitions
    └── ...
```

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios with interceptors
- **Icons**: React Icons, Lucide React
- **State Management**: React useState/useEffect

## 🌐 API Layer Architecture

### Axios Configuration (`lib/axios.ts`)

- **Base URL**: Configured via environment variable or `/api`
- **Timeout**: 10 seconds
- **Request Interceptor**:
  - Adds authorization tokens from localStorage
  - Logs requests in development mode
- **Response Interceptor**:
  - Logs responses in development
  - Handles errors (401, 403, 404, 500)
  - Centralized error handling

### API Services (`lib/api/`)

All API calls are abstracted into service classes:

#### GitHub Service (`github.ts`)
```typescript
class GitHubService {
  async getGitHubData(): Promise<GitHubData>
}
```

#### Spotify Service (`spotify.ts`)
```typescript
class SpotifyService {
  async getNowPlaying(): Promise<SpotifyData | null>
}
```

## 📋 Component Naming Convention

### Main Route Components
Each route folder contains a main component file with the same name:
- `components/github/GitHub.tsx`
- `components/spotify/Spotify.tsx`
- `components/calendar/Calendar.tsx`
- `components/about/About.tsx` (if exists)

### Sub-components
Additional components specific to a route are placed in the same folder.

### Shared Components
Components used across multiple routes are in `components/shared/`

## 🔄 Data Flow

1. **Page Component** (`app/*/page.tsx`) → Imports main component
2. **Main Component** (`components/*/ComponentName.tsx`) → Uses API service
3. **API Service** (`lib/api/*.ts`) → Uses axios instance
4. **Axios Instance** (`lib/axios.ts`) → Makes HTTP request with interceptors

Example:
```
GitHub Page → GitHub Component → githubService.getGitHubData() → axios.get('/api/github')
```

## 🎨 Theming

Color scheme throughout the application:
- **Amber/Yellow**: Primary accent, CTAs
- **Green**: GitHub, Spotify (brand colors)
- **Blue**: Calendar, Calendly
- **Purple**: Previously used, now mostly replaced

## 🚀 Production Readiness Checklist

- [x] Axios with interceptors for API calls
- [x] Service layer for API abstraction
- [x] Component structure matching routes
- [x] TypeScript types exported from services
- [x] Error handling in API services
- [x] Development logging
- [ ] Environment variables configuration
- [ ] Error boundary components
- [ ] Loading states
- [ ] API rate limiting handling
- [ ] Comprehensive error pages

## 📝 Best Practices

1. **API Calls**: Always use the service layer, never call `fetch` directly
2. **Types**: Import types from service files to maintain consistency
3. **Error Handling**: All async operations wrapped in try-catch
4. **Component Structure**: One main component per route folder
5. **Naming**: Component names match their file names and route names

## 🔐 Environment Variables

Required environment variables:
- `NEXT_PUBLIC_API_URL` (optional, defaults to `/api`)
- Other service-specific variables (Spotify, GitHub tokens, etc.)
