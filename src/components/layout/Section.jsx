// Section component - Wrapper for page sections
function Section({ id, children }) {
  return (
    <section id={id} className="py-32 md:py-44">
      <div className="container-main">
        {children}
      </div>
    </section>
  );
}

export default Section;
