import React from 'react';

interface Stat {
  label: string;
  value: string;
  description?: string;
}

interface StatsProps {
  title?: string;
  stats: Stat[];
  className?: string;
}

export const Stats: React.FC<StatsProps> = ({ title, stats, className = '' }) => {
  return (
    <div className={`my-8 ${className}`}>
      {title && (
        <h3 className="text-xl font-bold text-construction-yellow mb-6 text-center"
            style={{
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-dark-steel/40 backdrop-blur-md rounded-2xl p-6 text-center border border-construction-yellow/20 hover:border-construction-yellow/40 transition-colors"
          >
            <div className="text-3xl font-bold text-construction-yellow mb-2"
                 style={{
                   textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                 }}>
              {stat.value}
            </div>
            <div className="text-aluminum font-medium mb-1"
                 style={{
                   textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                 }}>
              {stat.label}
            </div>
            {stat.description && (
              <div className="text-sm text-aluminum/70"
                   style={{
                     textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                   }}>
                {stat.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};