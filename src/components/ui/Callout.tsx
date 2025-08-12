import React from 'react';
import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'tip' | 'success';
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ 
  type = 'info', 
  title,
  children 
}) => {
  const config = {
    info: {
      icon: Info,
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      textColor: 'text-white',
      textShadow: 'text-shadow-readability'
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-construction-yellow/10',
      borderColor: 'border-construction-yellow/30',
      iconColor: 'text-construction-yellow',
      textColor: 'text-gray-900',
      textShadow: 'text-shadow-readability-light'
    },
    tip: {
      icon: CheckCircle,
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      iconColor: 'text-green-400',
      textColor: 'text-white',
      textShadow: 'text-shadow-readability'
    },
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      iconColor: 'text-green-400',
      textColor: 'text-white',
      textShadow: 'text-shadow-readability'
    }
  };

  const { icon: IconComponent, bgColor, borderColor, iconColor, textColor, textShadow } = config[type];

  return (
    <div className={`
      ${bgColor} ${borderColor} ${textColor} ${textShadow}
      border rounded-2xl p-6 my-6
      backdrop-blur-sm
    `}>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <IconComponent className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="space-y-2">
          {title && (
            <h4 className={`font-bold text-lg ${textShadow}`}
                style={{
                  textShadow: type === 'warning' 
                    ? '0 1px 2px rgba(255, 255, 255, 0.4)'
                    : '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>{title}</h4>
          )}
          <div className={`prose prose-sm max-w-none ${textShadow}`}
               style={{
                 textShadow: type === 'warning' 
                   ? '0 1px 2px rgba(255, 255, 255, 0.4)'
                   : '0 1px 2px rgba(0, 0, 0, 0.3)'
               }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};