interface PaymentOfferItemProps {
  bank: string;
  logo: string;
  discount: string;
  description: string;
  colorClass: string;
}

export default function PaymentOfferItem({
  bank,
  logo,
  discount,
  description,
  colorClass,
}: PaymentOfferItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden flex">
      <div className={`${colorClass} text-white p-4 flex items-center justify-center w-24 flex-shrink-0`}>
        <div className="text-center">
          <div className="text-xl font-bold transform -rotate-90 whitespace-nowrap origin-center">
            {discount}
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-red-600">{logo}</span>
            </div>
            <h3 className="font-bold text-lg text-black">{bank}</h3>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <button className="text-sm text-[#C17A4A] font-medium hover:underline">
          Read more
        </button>
      </div>
    </div>
  );
}