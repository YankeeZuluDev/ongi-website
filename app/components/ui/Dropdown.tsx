type DropdownProps = {
  id: string,
  name: string,
  label: string,
  options: string[]
}

export default function Dropdown(dropdownProps: DropdownProps) {
  return (
    <div className="inline-block">
      <label htmlFor={dropdownProps.id} className="block text-xs mb-1 uppercase text-foreground/75">{dropdownProps.label}</label>
      <div className="relative">
        <select id="category" className="appearance-none px-4 pr-16 py-4 border border-foreground capitalize cursor-pointer">
          {dropdownProps.options.map(opt => (
            <option key={opt} value={opt} className="capitalize">{opt}</option>
          ))}
        </select>
        <span className="absolute pointer-events-none right-4 top-1/2 -translate-y-1/2 text-sm text-foreground">▼</span>
      </div>
    </div>
  );
}