// ProcessStep component - Single process step
function ProcessStep({ stepNumber, title, description }) {
  return (
    <article className="flex gap-4">
      <span className="step-circle">
        {stepNumber}
      </span>
      <div>
        <h3 className="font-heading text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-body mb-0">{description}</p>
      </div>
    </article>
  );
}

export default ProcessStep;
