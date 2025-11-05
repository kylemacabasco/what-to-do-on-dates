'use client';

import { useState } from 'react';

const dateIdeas = [
  { title: "Sunset picnic", description: "Pack your favorite snacks and watch the sunset together at a scenic spot." },
  { title: "Cook a new recipe", description: "Pick a cuisine you've never tried and cook it together from scratch." },
  { title: "Board game café", description: "Discover new games and enjoy some friendly competition over coffee." },
  { title: "Stargazing", description: "Find a dark spot away from city lights and look for constellations." },
  { title: "Museum hopping", description: "Visit a museum you've never been to and discuss your favorite pieces." },
  { title: "Bookstore browsing", description: "Explore a bookstore and pick out books for each other." },
  { title: "Take a dance class", description: "Learn salsa, swing, or any dance style together." },
  { title: "Farmers market stroll", description: "Browse local produce and treats, then cook with your finds." },
  { title: "Karaoke night", description: "Sing your hearts out at a karaoke bar or at home." },
  { title: "Coffee shop crawl", description: "Visit 3 different coffee shops and compare notes on your favorites." },
  { title: "Hiking adventure", description: "Find a new trail and enjoy nature together." },
  { title: "Art at home", description: "Get supplies and paint, draw, or craft something together." },
  { title: "Wine & cheese tasting", description: "Create your own tasting at home or visit a local wine bar." },
  { title: "Arcade games", description: "Unleash your competitive side at a retro arcade." },
  { title: "Bike ride", description: "Explore your city or a nearby trail on two wheels." },
  { title: "Thrift store challenge", description: "Find the best outfit for each other under $20." },
  { title: "Breakfast for dinner", description: "Make pancakes, waffles, or a full breakfast spread for dinner." },
  { title: "Drive-in movie", description: "Catch a film at a drive-in theater with snacks in the car." },
  { title: "Volunteer together", description: "Give back to your community at a local charity or shelter." },
  { title: "Photography walk", description: "Take photos of interesting things you find around town." },
];

export default function DatesPage() {
  const [currentIdea, setCurrentIdea] = useState<typeof dateIdeas[0] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateIdea = () => {
    setIsGenerating(true);
    
    // Add a small delay for effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dateIdeas.length);
      setCurrentIdea(dateIdeas[randomIndex]);
      setIsGenerating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)' }}>
      <div className="flex flex-col items-center justify-center px-6 py-16 w-full">
        <div className="text-center max-w-2xl mx-auto space-y-8">
          <h1 
            className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]"
            style={{ color: 'var(--text)' }}
          >
            {currentIdea ? "Here's your date idea" : "Ready for something spontaneous?"}
          </h1>
          
          {currentIdea && (
            <div 
              className="card-shadow p-8 rounded-2xl space-y-4 transition-all"
              style={{ 
                background: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <h2 
                className="text-2xl md:text-3xl font-semibold"
                style={{ color: 'var(--text)' }}
              >
                {currentIdea.title}
              </h2>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: 'var(--muted)' }}
              >
                {currentIdea.description}
              </p>
            </div>
          )}

          <div className="pt-4">
            <button 
              onClick={generateIdea}
              disabled={isGenerating}
              className="group relative px-10 py-4 text-base font-semibold overflow-hidden transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                background: 'var(--primary)',
                color: 'white',
                borderRadius: 'var(--radius-pill)',
                transition: 'transform var(--transition-default), box-shadow var(--transition-default)'
              }}
              onMouseEnter={(e) => {
                if (!isGenerating) {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(31, 58, 55, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className="relative z-10">
                {isGenerating ? 'Thinking...' : currentIdea ? 'Get another idea' : 'Get a date idea'}
              </span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ 
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                  transition: 'opacity var(--transition-slow)'
                }}
              />
            </button>
          </div>

          {!currentIdea && (
            <p 
              className="text-sm"
              style={{ color: 'var(--muted)' }}
            >
              No overthinking. No endless scrolling. Just click and go.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

