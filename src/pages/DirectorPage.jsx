import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Award } from "lucide-react";

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className}
      style={{ opacity: visible ? undefined : 0, animation: visible ? `fadeUp 0.65s ease ${delay}s both` : "none" }}>
      {children}
    </div>
  );
}

export default function DirectorPage() {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Dark hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "320px", background: "linear-gradient(135deg,#0f172a,#1e1b4b)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,#ffffff 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-white/20">
            Director Statement
          </span>
          <h1 className="text-5xl md:text-6xl text-white mb-4" style={{ fontFamily: "'DM Serif Display',serif" }}>
            A Message from<br />
            <span style={{ background: "linear-gradient(135deg,#fca5a5,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Our Founder
            </span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">Duncan O. Ngao — Founder & Director, Big Dee Security Solutions</p>
        </div>
      </div>

      {/* Main Statement */}
      <section className="py-24" style={{ background: "linear-gradient(135deg,#0f172a,#1e1b4b)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <Reveal>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "3/4" }}>
                  <img src="/director-duncan.jpg" alt="Duncan O. Ngao"
                    className="w-full h-full object-cover object-top"
                    onError={e => { e.target.style.background = "#1e293b"; }} />
                </div>
                <div className="p-5 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="text-white font-bold text-lg">Duncan O. Ngao</div>
                  <div className="text-red-400 text-sm font-medium mt-1">Founder & Director</div>
                  <div className="text-white/40 text-xs mt-1">Big Dee Security Solutions</div>
                  <div className="flex items-center justify-center gap-2 mt-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-white/70 text-xs font-medium">35+ Years Industry Experience</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="text-red-400 opacity-60">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <blockquote className="text-white text-2xl leading-relaxed font-medium" style={{ fontFamily: "'DM Serif Display',serif" }}>
                  "I founded Big Dee Security Solutions to provide quality services to our clients as we safeguard their homes, work premises and products. We are pleased and honored to contribute and support this journey with our expertise."
                </blockquote>

                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>In our Company, we will never compromise on the quality of our service as we keep on innovation and to bring the best one can hope for. That is why we decided to partner with international companies: to equip our clients with the best solutions available. This is also why we are investing significantly to develop the talents of our employees continuously.</p>
                  <p>Developing a business responsibly is challenging in a country like Kenya. Fortunately, at Big Dee Security Solutions, we are all driven by our vision, our mission and our values. Likewise our commitment to uphold compliance and our zero-tolerance approach on corruption signal how we want to operate and conduct our business: ethically and responsibly.</p>
                  <p className="text-white/70 leading-relaxed">We aim to provide our employees with a respectful workplace. Being transparent and adapted to Good Corporate Governance — with strong commitment of BODs and team members, we are committed to perform better in the future. You can count on us.</p>
                  <p></p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      "Zero-tolerance on corruption",
                      "Ethical & responsible conduct",
                      "International partnerships",
                      "Continuous employee development",
                      "Good Corporate Governance",
                      "Respectful workplace culture",
                    ].map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                        <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                        {c}
                      </div>
                    ))}
                  </div>
                  <button onClick={() => navigate("/contact")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
                    style={{ background: "linear-gradient(135deg,#dc2626,#991b1b)" }}>
                    Work With Us <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Light CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl text-gray-900 mb-4" style={{ fontFamily: "'DM Serif Display',serif" }}>
              Guided by Vision, Mission & Values
            </h2>
            <p className="text-gray-500 mb-8">
              At Big Dee Security Solutions, every decision — from hiring to service delivery — is guided by our founder's commitment to excellence and ethical conduct.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg,#dc2626,#1e3a8a)" }}>
                About Us <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                Get a Free Quote
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}