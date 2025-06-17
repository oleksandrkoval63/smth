type SortOption = {
  value: string;
  label: string;
};

const options: SortOption[] = [
  { value: 'hits', label: 'Хіти продажів' },
  { value: 'new', label: 'Новинки' },
  { value: 'cheap-first', label: 'Від дешевших до дорожчих' },
  { value: 'exp-first', label: 'Від дорожчих до дешевших' },
  { value: 'az', label: 'Від A до Я' },
  { value: 'za', label: 'Від Я до А' },
];

export default function SortDropdown({value,onChange}: {value: string, onChange: (v: string) => void}) {
  return (
    <label className="relative inline-flex items-center gap-2 text-sm font-medium">
      Сортування
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-w-[220px] appearance-none rounded border border-gray-300 bg-white px-3 py-2 pr-9 text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none"
        defaultValue="default"
      >
        <option value="default">Оберіть сортування...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
        ▼
      </span>
    </label>
  );
}
