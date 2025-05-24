import React from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  className = "",
}) => (
  <div className={`flex gap-4 ${className}`}>
    <div className="flex-shrink-0">
      <div className="h-12 w-12  dark:bg-white/50 !dark:text-white rounded flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      {description && (
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      )}
    </div>
  </div>
);

export default InfoCard;
