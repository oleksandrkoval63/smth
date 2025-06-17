const Btn =
  'inline-flex h-9 w-9 items-center justify-center rounded border text-gray-600 hover:bg-gray-100';

export default function ViewToggle({mode,onToggle}: {mode: string, onToggle: (mode: string) => void;}) {
  return (
    <div className="flex gap-2">
      {/* GRID */}
      <button
        type="button"
        aria-label="Сітка"
        onClick={() => onToggle('grid')}
        className={`${Btn} cursor-pointer ${mode === 'grid' && 'bg-yellow-500 text-white'}`}
      >
        <svg width="20" height="20" fill="currentColor">
          <rect x="1"  y="1"  width="6" height="6" />
          <rect x="13" y="1"  width="6" height="6" />
          <rect x="1"  y="13" width="6" height="6" />
          <rect x="13" y="13" width="6" height="6" />
        </svg>
      </button>

      {/* LIST */}
      <button
        type="button"
        aria-label="Список"
        onClick={() => onToggle('list')}
        className={`${Btn} cursor-pointer ${mode === 'list' && 'bg-yellow-500 text-white'}`}
      >
        <svg width="20" height="20" fill="currentColor">
          <rect x="1" y="3" width="18" height="2" />
          <rect x="1" y="9" width="18" height="2" />
          <rect x="1" y="15" width="18" height="2" />
        </svg>
      </button>
    </div>
  );
}
