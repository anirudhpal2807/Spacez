import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-gray-800 rounded"></div>
          <span className="text-xl font-semibold tracking-wider">SPACEZ</span>
        </div>
        <button className="p-2" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}