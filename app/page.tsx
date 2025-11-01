'use client';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* Subtle grain overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 md:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]"
            style={{ color: 'var(--text)' }}
          >
            togetha foreva
          </h1>
          
          <p 
            className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
            style={{ color: 'var(--muted)' }}
          >
            Can't decide what to do? Let us pick the perfect spontaneous date for you.
          </p>
          
          {/* Main CTA */}
          <div className="pt-8 pb-12">
            <button 
              className="group relative px-10 py-4 text-base font-semibold overflow-hidden transition-all"
              style={{ 
                background: 'var(--primary)',
                color: 'var(--text)',
                borderRadius: 'var(--radius-pill)',
                transition: 'transform var(--transition-default), box-shadow var(--transition-default)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(31, 58, 55, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className="relative z-10 text-white">Find a date idea</span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ 
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                  transition: 'opacity var(--transition-slow)'
                }}
              />
            </button>
          </div>

          {/* Soft reassurance */}
          <div 
            className="inline-block px-6 py-3 text-sm rounded-full"
            style={{ 
              background: 'var(--warm)',
              color: 'var(--text)'
            }}
          >
            No endless scrolling. No overthinking. Just go.
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mt-24 mx-auto w-full">
          <h2 
            className="text-2xl md:text-3xl font-semibold text-center mb-12 tracking-tight"
            style={{ color: 'var(--text)' }}
          >
            How it works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                step: '1',
                title: "You're undecided",
                description: 'Another evening wondering what to do together'
              },
              {
                step: '2',
                title: 'We choose for you',
                description: 'One tap. Instant date idea. Curated for spontaneity.'
              },
              {
                step: '3',
                title: 'You go',
                description: 'No debates. No friction. Just quality time.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className="card-shadow group p-8 rounded-2xl transition-all"
                style={{ 
                  background: 'var(--surface)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'transform var(--transition-default), box-shadow var(--transition-default)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.classList.add('card-shadow-hover');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.classList.remove('card-shadow-hover');
                }}
              >
                <div 
                  className="text-sm font-bold mb-4 inline-block px-3 py-1 rounded-full"
                  style={{ 
                    background: 'var(--primary)',
                    color: 'var(--surface)'
                  }}
                >
                  {item.step}
                </div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--text)' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--muted)' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
