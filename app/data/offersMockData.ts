// Mock data for offers page

export const mockRootProps = {
  sitewideOffers: [
    {
      code: 'LONGSTAY' as const,
      discountAmount: 1000,
      description: '5% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      colorClass: 'bg-[#C17A4A]'
    },
    {
      code: 'EARLYBIRD' as const,
      discountAmount: 3000,
      description: '5% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      colorClass: 'bg-[#C17A4A]'
    },
    {
      code: 'RUSHDEAL' as const,
      discountType: 'flat' as const,
      discountValue: 10,
      description: '10% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      colorClass: 'bg-[#C17A4A]'
    }
  ],
  bonusGiftCards: {
    maxAmount: 1000,
    amounts: [1000, 600],
    amountColors: ['from-orange-500 to-orange-600', 'from-blue-500 to-blue-600']
  },
  paymentOffer: {
    discountPercentage: 15,
    method: 'select payment method' as const
  },
  activeTab: 'coupons' as const
};