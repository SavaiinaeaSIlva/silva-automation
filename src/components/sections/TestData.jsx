// Test component to verify data
import { faqContent } from "../../data";

function TestData() {
  console.log("=== FAQ DATA TEST ===");
  console.log("Total questions:", faqContent.questions.length);
  console.log("First 5 questions:", faqContent.questions.slice(0, 5).map(q => ({ id: q.id, question: q.question.substring(0, 50) + "..." })));
  
  return (
    <div style={{ display: 'none' }}>
      Data loaded: {faqContent.questions.length} questions
    </div>
  );
}

export default TestData;