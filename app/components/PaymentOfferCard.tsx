import { CreditCard } from 'lucide-react';

interface PaymentOfferCardProps {
  discountPercentage: number;
  method: string;
  onUnlockOffers: () => void;
}

export default function PaymentOfferCard({
  discountPercentage,
  method,
  onUnlockOffers,
}: PaymentOfferCardProps) {
  return (
    <section className="bg-pink-50 rounded-lg p-6 border border-pink-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-2 text-black">Payment offers:</h2>
          <p className="text-base font-semibold mb-1 text-black">upto {discountPercentage}% Off</p>
          <p className="text-sm text-gray-700 mb-4">on {method}</p>
          <button
            onClick={onUnlockOffers}
            className="bg-[#C17A4A] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#A66A3E] transition-colors text-sm"
          >
            Unlock offers →
          </button>
        </div>
        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center border border-gray-200">
          <CreditCard className="w-10 h-10 text-gray-400" />
        </div>
      </div>
    </section>
  );
}