interface TabNavigationProps {
  activeTab: 'coupons' | 'giftcards' | 'payment';
  onTabChange: (tab: 'coupons' | 'giftcards' | 'payment') => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="flex px-4">
        <button
          onClick={() => onTabChange('coupons')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'coupons'
              ? 'border-[#C17A4A] text-[#C17A4A]'
              : 'border-transparent text-gray-500'
          }`}
        >
          Coupons
        </button>
        <button
          onClick={() => onTabChange('giftcards')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'giftcards'
              ? 'border-[#C17A4A] text-[#C17A4A]'
              : 'border-transparent text-gray-500'
          }`}
        >
          Giftcards
        </button>
        <button
          onClick={() => onTabChange('payment')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'payment'
              ? 'border-[#C17A4A] text-[#C17A4A]'
              : 'border-transparent text-gray-500'
          }`}
        >
          Payment Offers
        </button>
      </div>
    </div>
  );
}