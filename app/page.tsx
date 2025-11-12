"use client";

import { useState } from 'react';
import Header from './components/Header';
import TitleSection from './components/TitleSection';
import TabNavigation from './components/TabNavigation';
import CouponCard from './components/CouponCard';
import BonusGiftCardsSection from './components/BonusGiftCardsSection';
import PaymentOfferCard from './components/PaymentOfferCard';
import GiftCardItem from './components/GiftCardItem';
import PaymentOfferItem from './components/PaymentOfferItem';
import BottomNavigation from './components/BottomNavigation';
import Toast from './components/Toast';
import { mockRootProps } from './data/offersMockData';

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState<'coupons' | 'giftcards' | 'payment'>('coupons');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [expandedOffer, setExpandedOffer] = useState<string | null>(null);

  const showSuccessToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    showSuccessToast(`Coupon code "${code}" copied successfully!`);
  };

  const handleReadMore = (offerId: string) => {
    setExpandedOffer(expandedOffer === offerId ? null : offerId);
  };

  const sitewideOffers = [
    {
      id: 'LONGSTAY',
      code: 'LONGSTAY',
      discount: '₹1,000',
      description: '5% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      colorClass: 'bg-[#C17A4A]',
    },
    {
      id: 'EARLYBIRD',
      code: 'EARLYBIRD',
      discount: '₹3,000',
      description: '5% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      colorClass: 'bg-[#C17A4A]',
    },
    {
      id: 'RUSHDEAL',
      code: 'RUSHDEAL',
      discount: 'Flat 10%',
      description: '10% off when you book for 5 days or more and 20% off when you book for 30 days or more.',
      colorClass: 'bg-[#C17A4A]',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />

      <main className="max-w-md mx-auto bg-white min-h-screen">
        <TitleSection onSignIn={() => showSuccessToast('Sign in feature coming soon!')} />

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'coupons' && (
          <div className="px-4 py-6 space-y-6">
            <section>
              <h2 className="text-lg font-semibold mb-4 text-black">Sitewide coupons:</h2>
              <div className="space-y-4">
                {sitewideOffers.map((offer) => (
                  <CouponCard
                    key={offer.id}
                    code={offer.code}
                    discount={offer.discount}
                    description={offer.description}
                    colorClass={offer.colorClass}
                    isExpanded={expandedOffer === offer.id}
                    onCopy={handleCopy}
                    onReadMore={() => handleReadMore(offer.id)}
                  />
                ))}
              </div>
            </section>

            <BonusGiftCardsSection
              maxAmount={mockRootProps.bonusGiftCards.maxAmount}
              amounts={mockRootProps.bonusGiftCards.amounts}
              amountColors={mockRootProps.bonusGiftCards.amountColors}
              onClaimGiftCards={() => showSuccessToast('Claim gift cards feature coming soon!')}
            />

            <PaymentOfferCard
              discountPercentage={mockRootProps.paymentOffer.discountPercentage}
              method={mockRootProps.paymentOffer.method}
              onUnlockOffers={() => showSuccessToast('Unlock offers feature coming soon!')}
            />
          </div>
        )}

        {activeTab === 'giftcards' && (
          <div className="px-4 py-6 space-y-4">
            <GiftCardItem
              brand="MYNTRA"
              logoPath="/LOGO/Myntra-Logo-2.svg"
              amount={1500}
              colorClass="bg-gradient-to-b from-pink-500 to-pink-600"
              description="Get this gift voucher on booking above ₹5000"
              onCollect={() => showSuccessToast('Gift card collected!')}
            />
            <GiftCardItem
              brand="HAMMER"
              logoPath="/LOGO/hammer-logo.svg"
              amount={1000}
              colorClass="bg-black"
              description="Get this gift voucher on booking above ₹3500"
              onCollect={() => showSuccessToast('Gift card collected!')}
            />
          </div>
        )}

        {activeTab === 'payment' && (
          <div className="px-4 py-6 space-y-6">
            <section>
              <h2 className="text-lg font-semibold mb-4 text-black">Payment offers:</h2>
              <PaymentOfferItem
                bank="HDFC BANK"
                logoPath="/LOGO/hdfc-bank-logo.svg"
                discount="10% OFF"
                description="Get 10% off on booking above ₹1500"
                colorClass="bg-gradient-to-b from-blue-500 to-blue-600"
              />
            </section>
          </div>
        )}
      </main>

      <BottomNavigation
        activeItem="offers"
        onNavigate={(item) => showSuccessToast(`Navigate to ${item}`)}
      />

      <Toast message={toastMessage} show={showToast} />
    </div>
  );
}
