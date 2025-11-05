# togetha foreva 💕

A spontaneous date randomizer for couples who can't decide what to do. Clean, minimal, and welcoming design with a warm aesthetic.

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root of the project:

```bash
touch .env.local
```

Add your Clerk authentication keys to `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
```

**Where to get your Clerk keys:**
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/last-active?path=api-keys)
2. Sign up or sign in
3. Create a new application (if you haven't already)
4. Copy your **Publishable Key** (starts with `pk_`)
5. Copy your **Secret Key** (starts with `sk_`)
6. Paste them into your `.env.local` file

> **Note:** The `.env.local` file is automatically ignored by git and should never be committed to version control.

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 🎨 Design System

The app uses a warm, minimal design system:

- **Background:** Soft cream (#F5F1E8)
- **Primary:** Evergreen (#1F3A37)
- **Accent:** Dusty rose (#8B6F6F)
- **Highlight:** Honey gold (#D6A85A)

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with Clerk auth
├── page.tsx            # Landing page
├── dates/
│   └── page.tsx        # Authenticated dates page
├── globals.css         # Design system & styles
middleware.ts           # Clerk authentication middleware
```

## 🔐 Authentication

Authentication is handled by [Clerk](https://clerk.com). Users are automatically redirected to `/dates` after signing in or signing up.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Deploy!

> **Important:** Make sure to add the production Clerk keys (starting with `pk_live_` and `sk_live_`) for your production deployment.

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [Clerk](https://clerk.com) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📝 License

MIT

---

Made with ❤️ for couples who just can't decide
