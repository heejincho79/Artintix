import * as React from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { db, handleFirestoreError, OperationType } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: any }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      let message = "문제가 발생했습니다. 잠시 후 다시 시도해 주세요.";
      try {
        const errInfo = JSON.parse(this.state.error.message);
        if (errInfo.error.includes("permission")) {
          message = "권한이 없습니다. 관리자에게 문의하세요.";
        }
      } catch (e) { /* not JSON */ }

      return (
        <div className="p-8 glass-card border-red-500/50 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">오류 발생</h3>
          <p className="text-gray-400 mb-6">{message}</p>
          <button 
            onClick={() => window.location.reload()}
            className="text-brand-neon font-bold hover:underline"
          >
            페이지 새로고침
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export function Contact() {
  return (
    <ErrorBoundary>
      <ContactForm />
    </ErrorBoundary>
  );
}

function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    interest: "데이터센터 최적화",
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
              전문가와 함께 <br />
              <span className="text-brand-neon neon-text-glow">에너지 효율을 점검해 보세요</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              알틴틱스의 AI 솔루션이 귀사의 비즈니스에 어떤 가치를 더할 수 있는지 
              상세히 안내해 드립니다.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-neon/10 flex items-center justify-center shrink-0">
                     <CheckCircle2 className="w-5 h-5 text-brand-dark" />
                  </div>
                  <div>
                     <h4 className="font-bold mb-1 text-brand-dark">무료 에너지 진단</h4>
                     <p className="text-sm text-gray-500">현재 운영 중인 시스템의 비효율 요소를 분석해 드립니다.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                     <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                     <h4 className="font-bold mb-1 text-brand-dark">맞춤형 솔루션 제안</h4>
                     <p className="text-sm text-gray-500">산업별 특성에 최적화된 AI 도입 로드맵을 제공합니다.</p>
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
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">문의가 접수되었습니다</h3>
                <p className="text-gray-500">빠른 시일 내에 전문가가 연락드리겠습니다. 감사합니다.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-brand-dark font-bold hover:underline"
                >
                  새로운 문의 작성하기
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">이름</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-neon transition-colors text-brand-dark"
                      placeholder="홍길동"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">이메일</label>
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
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">회사명</label>
                  <input 
                    required
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-neon transition-colors text-brand-dark"
                    placeholder="Artintix"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">관심 분야</label>
                  <select 
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-neon transition-colors appearance-none text-brand-dark"
                  >
                    <option>데이터센터 최적화</option>
                    <option>건물 에너지 관리</option>
                    <option>전력 수요 예측</option>
                    <option>제조 공정 에너지 최적화</option>
                    <option>기타</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">문의 내용</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-neon transition-colors text-brand-dark resize-none"
                    placeholder="문의하실 내용을 상세히 입력해 주세요."
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
                      무료 에너지 진단을 원합니다 (우선 순위 상담)
                   </label>
                </div>
                <button 
                  disabled={status === "submitting"}
                  type="submit"
                  className="w-full py-4 bg-brand-neon text-brand-dark font-bold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-brand-neon/20"
                >
                  {status === "submitting" ? "전송 중..." : "문의 보내기"}
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
