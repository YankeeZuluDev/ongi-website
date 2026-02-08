export type DropdownOption = {
  id: string,
  text: string
}

type DropdownProps = {
  id: string,
  label: string,
  options: DropdownOption[],
  onSelect: (value : string) => void
}

export default function Dropdown({ id, label, options, onSelect }: DropdownProps) {
  return (
    <div className="inline-block">
      <label htmlFor={id} className="block text-xs mb-1 uppercase text-foreground/75">{label}</label>
      <div className="relative">
        <select onChange={(e) => onSelect(e.target.value)} id={id} className="appearance-none px-4 pr-16 py-4 border border-foreground capitalize cursor-pointer">
          {options.map(opt => (
            <option key={opt.id} value={opt.id} className="capitalize">{opt.text}</option>
          ))}
        </select>
        <span className="absolute pointer-events-none right-4 top-1/2 -translate-y-1/2 text-sm text-foreground">▼</span>
      </div>
    </div>
  );
}