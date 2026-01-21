// CalculatorResult component - Calculator results display
function CalculatorResult({ monthlyCost, yearlyCost }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/20">
      <div className="result-card">
        <span className="block text-sm text-body--muted mb-1">Monthly Admin Cost</span>
        <span className="block text-2xl font-bold text-white">{formatCurrency(monthlyCost)}</span>
      </div>
      <div className="result-card result-card--highlight">
        <span className="block text-sm text-white/80 mb-1">Yearly Revenue Leak</span>
        <span className="block text-2xl font-bold text-white">{formatCurrency(yearlyCost)}</span>
      </div>
    </div>
  );
}

export default CalculatorResult;
