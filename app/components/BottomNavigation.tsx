import { Search, Gift, Calendar, Heart, User } from 'lucide-react';

interface BottomNavigationProps {
  activeItem?: string;
  onNavigate?: (item: string) => void;
}

export default function BottomNavigation({ activeItem = 'offers', onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'explore', label: 'Explore', icon: Search },
    { id: 'offers', label: 'Offers', icon: Gift },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'signin', label: 'Sign In', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
                className={`flex flex-col items-center gap-1 py-2 px-4 transition-colors ${
                  isActive ? 'text-[#C17A4A]' : 'text-gray-600 hover:text-[#C17A4A]'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className={`text-xs ${isActive ? 'font-semibold' : ''}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}