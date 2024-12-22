import React from "react";
import * as Icons from "react-icons/fa6";

interface KPICardProps {
  range: string;
  type: string;
  value: string;
  icon: string;
}

const KPICard: React.FC<KPICardProps> = ({ type, value, icon, range }) => {
  const IconComponent = Icons[icon as keyof typeof Icons];

  return (
    <div className="relative p-4 border rounded-lg shadow-lg flex items-center justify-between flex-1 even:bg-blue-100 odd:bg-blue-200">
      <div className="absolute flex items-center left-2 top-2 bg-white rounded-full px-2 py-1">
        <span className="text-[10px]">{range}</span>
      </div>
      <div>
        <div className="text-lg text-blue-950 font-semibold mt-5 mb-2">{value}</div>
        <div className="text-gray-500 text-sm">{type}</div>
      </div>
      {IconComponent && <IconComponent className="text-[32px] text-blue-600" />}
    </div>
  );
};

export default KPICard;
