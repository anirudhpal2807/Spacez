import { Gift } from 'lucide-react';

interface BonusGiftCardsSectionProps {
  maxAmount: number;
  amounts: number[];
  amountColors: string[];
  onClaimGiftCards: () => void;
}

export default function BonusGiftCardsSection({
  maxAmount,
  amounts,
  amountColors,
  onClaimGiftCards,
}: BonusGiftCardsSectionProps) {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold mb-1 text-black">Bonus gift cards:</h2>
          <p className="text-sm text-gray-700">Assured vouchers up to</p>
          <div className="flex items-center gap-3 mt-2">
            {amounts.map((amount, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${amountColors[index]} text-white px-4 py-2 rounded-md`}
              >
                <span className="text-2xl font-bold">₹{amount}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-2">on choice of trending brands</p>
        </div>
        <Gift className="w-12 h-12 text-orange-600" />
      </div>
      <button
        onClick={onClaimGiftCards}
        className="w-full bg-[#C17A4A] text-white py-3 rounded-lg font-semibold hover:bg-[#A66A3E] transition-colors"
      >
        Claim gift cards
      </button>
    </section>
  );
}