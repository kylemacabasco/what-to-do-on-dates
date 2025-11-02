'use client';

export default function DatesPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="flex flex-col items-center justify-center px-6 py-16">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h1 
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]"
            style={{ color: 'var(--text)' }}
          >
            Your date awaits
          </h1>
          
          <p 
            className="text-lg leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Coming soon - random date ideas curated just for you.
          </p>
        </div>
      </div>
    </div>
  );
}

