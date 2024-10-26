import React from 'react';
import { Trophy, Lightbulb, Code, Target, PresentationScreen } from 'lucide-react';
import CriteriaCard from './components/CriteriaCard';
import Header from './components/Header';

function App() {
  const criteria = [
    {
      title: "Innovation",
      icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
      items: ["Originality", "Creativity"],
      description: "Novel ideas and fresh perspectives on existing problems",
      color: "purple"
    },
    {
      title: "Technical Complexity",
      icon: <Code className="w-8 h-8 text-blue-500" />,
      items: ["Skill Level", "Implementation"],
      description: "Advanced coding and clean, efficient execution",
      color: "blue"
    },
    {
      title: "Functionality",
      icon: <Target className="w-8 h-8 text-green-500" />,
      items: ["Performance", "Usability"],
      description: "Smooth operation and intuitive user experience",
      color: "green"
    },
    {
      title: "Impact & Presentation",
      icon: <PresentationScreen className="w-8 h-8 text-red-500" />,
      items: ["Problem-Solving", "Scalability"],
      description: "Real-world applicability and growth potential",
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Meme Track Competition</h1>
            <p className="text-gray-300 text-lg">
              Showcase your creativity and technical skills in AIAchain's premier meme competition.
              Projects are evaluated across four key dimensions, with a maximum score of 20 points.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {criteria.map((criterion, index) => (
              <CriteriaCard key={index} {...criterion} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Scoring System</h2>
              <p className="text-gray-300 mb-4">
                Each category is scored on a scale of 1-5:
              </p>
              <div className="flex justify-center space-x-4">
                {[1, 2, 3, 4, 5].map((score) => (
                  <div key={score} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold
                      ${score <= 2 ? 'bg-red-500' : score <= 4 ? 'bg-yellow-500' : 'bg-green-500'}`}>
                      {score}
                    </div>
                    <span className="text-gray-400 text-sm mt-2">
                      {score === 1 ? 'Poor' : 
                       score === 2 ? 'Fair' : 
                       score === 3 ? 'Good' : 
                       score === 4 ? 'Great' : 'Excellent'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;