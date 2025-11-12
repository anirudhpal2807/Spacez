import { Copy } from 'lucide-react';

interface CouponCardProps {
  code: string;
  discount: string;
  description: string;
  colorClass: string;
  isExpanded: boolean;
  onCopy: (code: string) => void;
  onReadMore: () => void;
}

export default function CouponCard({
  code,
  discount,
  description,
  colorClass,
  isExpanded,
  onCopy,
  onReadMore,
}: CouponCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden flex relative">
      <div className={`${colorClass} text-white p-4 flex items-center justify-center w-24 flex-shrink-0 relative`}>
        <div className="text-center">
          <div className="text-xl font-bold transform -rotate-90 whitespace-nowrap origin-center">
            {discount}
          </div>
        </div>
        {/* Jagged/zigzag edge on right side of discount box */}
        <div className="absolute right-0 top-0 bottom-0 w-1 flex flex-col justify-around py-1">
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg text-black">{code}</h3>
          <button
            onClick={() => onCopy(code)}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#C17A4A] transition-colors"
          >
            <Copy className="w-4 h-4" />
            Copy
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <button
          onClick={onReadMore}
          className="text-sm text-[#C17A4A] font-medium hover:underline"
        >
          Read more
        </button>
        {isExpanded && (
          <div className="mt-3 p-3 bg-gray-50 rounded text-sm text-gray-700">
            <p className="font-semibold mb-1">Terms & Conditions:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Valid on all properties</li>
              <li>Cannot be combined with other offers</li>
              <li>Applicable on prepaid bookings only</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}