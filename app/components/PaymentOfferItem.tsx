interface PaymentOfferItemProps {
  bank: string;
  logo?: string;
  logoPath?: string;
  discount: string;
  description: string;
  colorClass: string;
}

export default function PaymentOfferItem({
  bank,
  logo,
  logoPath,
  discount,
  description,
  colorClass,
}: PaymentOfferItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden flex relative">
      {/* Left discount box with jagged edge */}
      <div className={`${colorClass} text-white p-4 flex items-center justify-center w-20 flex-shrink-0 relative`}>
        <div className="text-center">
          <div className="text-base font-bold transform -rotate-90 whitespace-nowrap origin-center">
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
                  alt={bank} 
                  className="h-10 w-auto object-contain"
                />
              </div>
            ) : logo ? (
              <div className="w-12 h-12 bg-white border-2 border-red-600 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-900 rounded-sm"></div>
              </div>
            ) : null}
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-3 mt-8">{description}</p>
        <button className="text-sm text-gray-500 font-medium hover:underline">
          Read more
        </button>
      </div>
    </div>
  );
}