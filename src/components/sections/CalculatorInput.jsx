// CalculatorInput component - Single calculator input field
function CalculatorInput({ label, value, onChange, min, max }) {
  return (
    <div className="mb-6">
      <label className="block">
        <span className="flex justify-between text-sm font-medium text-white mb-2">
          <span>{label}</span>
          <span className="text-[var(--color-accent)] font-semibold">{value}</span>
        </span>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="range-input"
        />
      </label>
    </div>
  );
}

export default CalculatorInput;
