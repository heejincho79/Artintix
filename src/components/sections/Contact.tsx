import * as React from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { db, handleFirestoreError, OperationType } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useLanguage } from "../../lib/LanguageContext";

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode, t: any }, { hasError: boolean, error: any }> {
  constructor(props: { children: React.ReactNode, t: any }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  render() {
    const { t } = this.props;
    if (this.state.hasError) {
      let message = t.contact.errorMessage;
      try {
        const errInfo = JSON.parse(this.state.error.message);
        if (errInfo.error.includes("permission")) {
          message = t.contact.errorPermission;
        }
      } catch (e) { /* not JSON */ }

      return (
        <div className="p-8 glass-card border-red-500/50 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">{t.contact.errorTitle}</h3>
          <p className="text-gray-400 mb-6">{message}</p>
          <button 
            onClick={() => window.location.reload()}
            className="text-brand-neon font-bold hover:underline"
          >
            {t.contact.btnReload}
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export function Contact() {
  const { t } = useLanguage();
  return (
    <ErrorBoundary t={t}>
      <ContactForm />
    </ErrorBoundary>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    interest: t.contact.interests[0],
    message: "",
    wantsAudit: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    const path = "inquiries";
    try {
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new"
      });
      
      // Construct mailto link
      const subject = encodeURIComponent(`[Artintix Inquiry] ${formData.interest} from ${formData.company}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n` +
        `Interest: ${formData.interest}\n` +
        `Free Audit Requested: ${formData.wantsAudit ? 'Yes' : 'No'}\n\n` +
        `Message:\n${formData.message}`
      );
      
      window.location.href = `mailto:inquiry@artintix.com?subject=${subject}&body=${body}`;
      
      setStatus("success");
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-brand-dark">
              {t.contact.title1} <br />
              <span className="text-brand-neon neon-text-glow">{t.contact.title2}</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              {t.contact.desc}
            </p>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-neon/10 flex items-center justify-center shrink-0">
                     <CheckCircle2 className="w-5 h-5 text-brand-dark" />
                  </div>
                  <div>
                     <h4 className="font-bold mb-1 text-brand-dark">{t.contact.auditTitle}</h4>
                     <p className="text-sm text-gray-500">{t.contact.auditDesc}</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                     <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                     <h4 className="font-bold mb-1 text-brand-dark">{t.contact.solutionTitle}</h4>
                     <p className="text-sm text-gray-500">{t.contact.solutionDesc}</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 border-gray-100">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-brand-neon rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-neon/20">
                   <CheckCircle2 className="w-10 h-10 text-brand-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">{t.contact.successTitle}</h3>
                <p className="text-gray-500">{t.contact.successDesc}</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-brand-dark font-bold hover:underline"
                >
                  {t.contact.btnNew}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.contact.labelName}</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-neon transition-colors text-brand-dark"
                      placeholder={t.contact.placeholderName}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.contact.labelEmail}</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-neon transition-colors text-brand-dark"
                      placeholder="example@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.contact.labelCompany}</label>
                  <input 
                    required
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-neon transition-colors text-brand-dark"
                    placeholder={t.contact.placeholderCompany}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.contact.labelInterest}</label>
                  <select 
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-neon transition-colors appearance-none text-brand-dark"
                  >
                    {t.contact.interests.map(interest => (
                      <option key={interest}>{interest}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.contact.labelMessage}</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-neon transition-colors text-brand-dark resize-none"
                    placeholder={t.contact.placeholderMessage}
                  />
                </div>
                <div className="flex items-center gap-3 p-4 bg-brand-neon/10 border border-brand-neon/20 rounded-lg">
                   <input 
                    type="checkbox" 
                    id="audit" 
                    checked={formData.wantsAudit}
                    onChange={(e) => setFormData({...formData, wantsAudit: e.target.checked})}
                    className="w-4 h-4 accent-brand-neon" 
                   />
                   <label htmlFor="audit" className="text-sm font-bold text-brand-dark cursor-pointer">
                      {t.contact.auditCheckbox}
                   </label>
                </div>
                <button 
                  disabled={status === "submitting"}
                  type="submit"
                  className="w-full py-4 bg-brand-neon text-brand-dark font-bold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-brand-neon/20"
                >
                  {status === "submitting" ? t.contact.btnSubmitting : t.contact.btnSubmit}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
