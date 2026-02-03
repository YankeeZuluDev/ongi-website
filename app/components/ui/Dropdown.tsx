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
      <select id="category" className="px-4 py-4 border border-foreground capitalize">
        {dropdownProps.options.map(opt => (
          <option key={opt} value={opt} className="capitalize">{opt}</option>
        ))}
      </select>
    </div>
  );
}