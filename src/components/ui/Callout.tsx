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
      textColor: 'text-blue-100'
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-construction-yellow/10',
      borderColor: 'border-construction-yellow/30',
      iconColor: 'text-construction-yellow',
      textColor: 'text-construction-yellow'
    },
    tip: {
      icon: CheckCircle,
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      iconColor: 'text-green-400',
      textColor: 'text-green-100'
    },
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      iconColor: 'text-green-400',
      textColor: 'text-green-100'
    }
  };

  const { icon: IconComponent, bgColor, borderColor, iconColor, textColor } = config[type];

  return (
    <div className={`
      ${bgColor} ${borderColor} ${textColor}
      border rounded-2xl p-6 my-6
      backdrop-blur-sm
    `}>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <IconComponent className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="space-y-2">
          {title && (
            <h4 className="font-bold text-lg">{title}</h4>
          )}
          <div className="prose prose-invert prose-sm max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};