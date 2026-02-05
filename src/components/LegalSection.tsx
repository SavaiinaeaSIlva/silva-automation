import ContactInfoBlock from './ContactInfoBlock';

type ListItemWithLabel = {
  label: string;
  text: string;
};

type Subsection = {
  label: string;
  text?: string;
  list?: string[];
};

type Section = {
  heading: string;
  content?: string;
  list?: (string | ListItemWithLabel)[];
  subsections?: Subsection[];
  footer?: string;
  showContact?: boolean;
  isBold?: boolean;
};

type LegalSectionProps = {
  section: Section;
};

function isListItemWithLabel(item: string | ListItemWithLabel): item is ListItemWithLabel {
  return typeof item === 'object' && item !== null && 'label' in item;
}

export default function LegalSection({ section }: LegalSectionProps) {
  return (
    <>
      <h3 className="text-xl font-bold text-white mt-6 mb-3">{section.heading}</h3>

      {section.content && <p className={section.isBold ? 'font-bold' : ''}>{section.content}</p>}

      {section.subsections?.map((sub, idx) => (
        <div key={idx}>
          <p>
            <strong>{sub.label}:</strong> {sub.text}
          </p>
          {sub.list && (
            <ul className="list-disc pl-6 space-y-2">
              {sub.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {section.list && (
        <ul className="list-disc pl-6 space-y-2">
          {section.list.map((item, idx) => (
            <li key={idx}>
              {isListItemWithLabel(item) ? (
                <>
                  <strong>{item.label}:</strong> {item.text}
                </>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      )}

      {section.footer && <p>{section.footer}</p>}

      {section.showContact && <ContactInfoBlock />}
    </>
  );
}
