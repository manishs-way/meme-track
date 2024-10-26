import React from 'react';

interface CriteriaCardProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  description: string;
  color: string;
}

function CriteriaCard({ title, icon, items, description, color }: CriteriaCardProps) {
  const getGradient = (color: string) => {
    const gradients = {
      purple: 'from-purple-500/10 to-purple-500/5',
      blue: 'from-blue-500/10 to-blue-500/5',
      green: 'from-green-500/10 to-green-500/5',
      red: 'from-red-500/10 to-red-500/5'
    };
    return gradients[color as keyof typeof gradients];
  };

  const getBorder = (color: string) => {
    const borders = {
      purple: 'border-purple-500/20',
      blue: 'border-blue-500/20',
      green: 'border-green-500/20',
      red: 'border-red-500/20'
    };
    return borders[color as keyof typeof borders];
  };

  return (
    <div className={`rounded-xl bg-gradient-to-br ${getGradient(color)} 
      border ${getBorder(color)} p-6 backdrop-blur-sm transition-transform 
      hover:scale-105 duration-300`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="w-2 h-2 rounded-full bg-gray-500 mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CriteriaCard;