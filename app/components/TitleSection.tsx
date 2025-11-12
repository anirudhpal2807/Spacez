interface TitleSectionProps {
  onSignIn?: () => void;
}

export default function TitleSection({ onSignIn }: TitleSectionProps) {
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-2 text-black">Offers</h1>
      <p className="text-gray-600 text-sm mb-4">
        Sign in to unlock exclusive additional rewards
      </p>
      <button
        onClick={onSignIn}
        className="w-full bg-[#C17A4A] text-white py-3 rounded-lg font-semibold hover:bg-[#A66A3E] transition-colors"
      >
        Sign In
      </button>
    </div>
  );
}