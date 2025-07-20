import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-200">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 py-8 md:py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-rose-800 mb-6 leading-tight">
            Togetha Foreva ✨
          </h1>
          <p className="text-xl md:text-2xl text-rose-700 mb-6 leading-relaxed">
            Can't decide what to do? Let us pick the perfect spontaneous date for you!
          </p>
          
          {/* Problem Statement */}
          
          {/* Main CTA */}
          <div className="my-10">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-15 max-w-2xl mx-auto">
              <p className="text-lg text-rose-800 italic">
                No more "I don't know, what do you want to do?" 🤷‍♀️
              </p>
            </div>
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
            Stop Being Indecisive - Start Now! 🎯
            </button>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-6xl mt-7 mx-auto w-full">
          <h2 className="text-3xl font-bold text-rose-800 text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl">
              <div className="text-4xl mb-3">😴</div>
              <h3 className="text-xl font-bold text-rose-800 mb-2">1. You're Bored</h3>
              <p className="text-rose-700 text-sm">
                Sitting at home, scrolling phones, can't decide what to do together
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl">
              <div className="text-4xl mb-3">🎲</div>
              <h3 className="text-xl font-bold text-rose-800 mb-2">2. We Decide</h3>
              <p className="text-rose-700 text-sm">
                Hit the button and get an instant, random date idea - no more arguing!
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl">
              <div className="text-4xl mb-3">💕</div>
              <h3 className="text-xl font-bold text-rose-800 mb-2">3. Have Fun</h3>
              <p className="text-rose-700 text-sm">
                Go do it! No overthinking, no endless discussions, just spontaneous fun
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
