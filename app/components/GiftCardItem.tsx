interface GiftCardItemProps {
  brand: string;
  logo?: string;
  logoPath?: string;
  amount: number;
  colorClass: string;
  description: string;
  onCollect: () => void;
}

export default function GiftCardItem({
  brand,
  logo,
  logoPath,
  amount,
  colorClass,
  description,
  onCollect,
}: GiftCardItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden flex relative">
      {/* Left discount box with jagged edge */}
      <div className={`${colorClass} text-white p-4 flex items-center justify-center w-24 flex-shrink-0 relative`}>
        <div className="text-center">
          <div className="text-2xl font-bold transform -rotate-90 whitespace-nowrap origin-center">
            ₹{amount}
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
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
          <div className="w-2 h-1.5 bg-white -mr-1"></div>
        </div>
      </div>
      
      <div className="flex-1 p-4 bg-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {logoPath ? (
              <div className="bg-white rounded overflow-hidden">
                <img 
                  src={logoPath} 
                  alt={brand} 
                  className="h-12 w-auto object-contain"
                />
              </div>
            ) : logo ? (
              <div className="w-14 h-14 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-lg font-bold text-black">{logo}</span>
              </div>
            ) : null}
          </div>
          <button
            onClick={onCollect}
            className="text-sm text-[#C17A4A] font-semibold hover:underline"
          >
            Collect
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-3 mt-4">{description}</p>
        <button className="text-sm text-gray-500 font-medium hover:underline">
          Read more
        </button>
      </div>
    </div>
  );
}