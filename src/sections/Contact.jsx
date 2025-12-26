import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Mail, Phone, AlertCircle } from 'lucide-react';
import { SectionHeading } from '../components/ui';

const FAQ_DATA = [
  { q: "How long does a typical project take?", a: "Most projects run 2–6 weeks depending on scope. You'll get a clear schedule before we start." },
  { q: "Do I need technical knowledge?", a: "No. I translate your workflow goals into automation and explain everything plainly." },
  { q: "Who owns the automations?", a: "You do. Everything runs in your cloud with docs and handoff so you're not locked in." },
  { q: "What happens after launch?", a: "You get documentation, training, and 90 days of support to fine-tune and stabilize." },
  { q: "How much does it cost?", a: "Most small business automations land between $3k–$15k depending on complexity and integrations." },
];

export default function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [status, setStatus] = useState(null); // 'sending', 'success', or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      date: new Date().toISOString()
    };

    try {
     // Your specific n8n webhook
     const response = await fetch('https://n8n.silvaautomation.com/webhook/6e7ec181-0a86-4d00-ace6-db03a7c0df28', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="Questions? Let's Talk." 
          subtitle="Clear answers and direct communication. No sales scripts."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
          
          {/* FAQ COLUMN */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm h-fit">
            <h3 className="text-xl font-bold mb-6 text-primary">Frequently Asked Questions</h3>
            <div className="flex flex-col gap-3">
              {FAQ_DATA.map((item, index) => (
                <div key={index} className="border border-slate-100 rounded-xl bg-slate-50 overflow-hidden transition-colors hover:border-slate-300">
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-700 hover:text-primary"
                  >
                    <span>{item.q}</span>
                    {openFaqIndex === index ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>
                  {openFaqIndex === index && (
                    <div className="p-5 pt-0 text-slate-600 leading-relaxed text-sm">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FORM COLUMN */}
          <div>
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl h-full flex flex-col justify-center relative overflow-hidden">
              
              {/* Form Success State */}
              {status === 'success' ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Message Received!</h3>
                  <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                    Mahalo for reaching out. I will review your message and get back to you within one business day.
                  </p>
                  <button 
                    onClick={() => setStatus(null)}
                    className="text-sm text-slate-400 hover:text-primary underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                // Normal Form State
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-primary">Send a Message</h3>
                    <p className="text-slate-600">Did the FAQ miss something? I'll reply within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="Your Name" 
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400" 
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="Email Address" 
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400" 
                      />
                    </div>
                    <div>
                      <textarea 
                        name="message" 
                        required 
                        rows="4" 
                        placeholder="How can I help you?" 
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={status === 'sending'}
                      className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'error' && (
                      <div className="flex items-center justify-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm mt-4 font-medium">
                        <AlertCircle size={16} />
                        Something went wrong. Please call me at 808-726-6422.
                      </div>
                    )}
                  </form>
                </>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}