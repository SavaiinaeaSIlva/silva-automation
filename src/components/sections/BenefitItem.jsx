// BenefitItem component - Single benefit list item
import CheckIcon from "../ui/CheckIcon";

function BenefitItem({ text }) {
  return (
    <li className="list-item-icon">
      <CheckIcon className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
      {text}
    </li>
  );
}

export default BenefitItem;
