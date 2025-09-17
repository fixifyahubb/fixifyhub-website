"use client";

import { useState, useEffect, useRef } from "react";
import {
  Wrench,
  Palette,
  Rocket,
  Mail,
  Instagram,
  ArrowRight,
  ChevronDown,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 },
    );

    Object.values(sectionsRef.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-inter text-[#111827] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#06B6D4]">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"
            style={{
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#06B6D4]/50 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white/90 text-sm font-medium mb-6 animate-fadeInUp">
              ✨ Professional Web Solutions
            </div>
          </div>
          <h1 className="font-poppins font-bold text-white text-4xl md:text-6xl lg:text-7xl mb-6 animate-fadeInUp leading-tight">
            We Fix, Improve & Help Brands Grow 🚀
          </h1>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto animate-fadeInUp animation-delay-300 leading-relaxed">
            From website bugs to smooth user experiences, FixifyHub makes
            digital journeys seamless and helps brands shine online.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fadeInUp animation-delay-400">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-3">
              <div className="text-white font-bold text-2xl">Professional</div>
              <div className="text-white/80 text-sm">Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-3">
              <div className="text-white font-bold text-2xl">Fast</div>
              <div className="text-white/80 text-sm">Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-3">
              <div className="text-white font-bold text-2xl">24h</div>
              <div className="text-white/80 text-sm">Response</div>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="group bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#06B6D4]/50 animate-fadeInUp animation-delay-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Scroll to contact section"
          >
            Let's Work Together
            <ArrowRight
              className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300"
              size={20}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="text-white/70" size={32} />
        </button>
      </section>

      {/* About Us Section */}
      <section
        ref={(el) => (sectionsRef.current.about = el)}
        id="about"
        className="py-24 bg-[#F9FAFB] relative overflow-hidden"
      >
        {/* Curved Divider */}
        <div
          className="absolute top-0 left-0 w-full overflow-hidden"
          aria-hidden="true"
        >
          <svg
            className="relative block w-full h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 120L0 16.48V0h1200v120z" fill="#1E40AF" />
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible.about ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="w-full h-80 bg-gradient-to-br from-[#1E3A8A] to-[#06B6D4] rounded-3xl shadow-2xl relative overflow-hidden border border-white/20">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Palette
                      size={64}
                      className="mx-auto mb-4 filter drop-shadow-lg"
                      aria-hidden="true"
                    />
                    <h3 className="font-poppins font-bold text-2xl mb-2">
                      Creative Excellence
                    </h3>
                    <p className="text-white/90 text-sm">
                      Crafting digital experiences
                    </p>
                  </div>
                </div>
                <div
                  className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full"
                  aria-hidden="true"
                ></div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isVisible.about ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="inline-block px-4 py-2 bg-[#06B6D4]/10 text-[#06B6D4] rounded-full text-sm font-medium mb-4">
                About FixifyHub
              </div>
              <h2 className="font-poppins font-bold text-[#1E3A8A] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                Who We Are
              </h2>
              <p className="text-[#111827] text-lg leading-relaxed mb-6">
                At FixifyHub, we believe every brand deserves a flawless online
                presence. We don't just fix websites — we create experiences.
                With a friendly and collaborative approach, we help businesses
                grow by making their digital platforms smoother, faster, and
                more engaging.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Zap, text: "Lightning-fast solutions" },
                  { icon: Shield, text: "Reliable & secure fixes" },
                  { icon: TrendingUp, text: "Growth-focused approach" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#06B6D4]/10 rounded-full flex items-center justify-center">
                      <feature.icon
                        className="text-[#06B6D4]"
                        size={16}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[#111827] font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={(el) => (sectionsRef.current.services = el)}
        id="services"
        className="py-24 bg-white relative"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="font-poppins font-bold text-[#1E3A8A] text-3xl md:text-4xl lg:text-5xl mb-6">
              What We Do
            </h2>
            <p className="text-[#111827]/70 text-lg max-w-2xl mx-auto">
              We provide comprehensive solutions to make your digital presence
              flawless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Website Fixes",
                description:
                  "Eliminate bugs, errors, and performance issues so your site runs smoothly.",
                features: ["Bug Fixes", "Performance", "Security"],
              },
              {
                icon: Palette,
                title: "UX/UI Improvements",
                description:
                  "Create better user journeys, clean layouts, and engaging designs that customers love.",
                features: ["Modern Design", "User Experience", "Mobile First"],
              },
              {
                icon: Rocket,
                title: "Brand Growth Support",
                description:
                  "Provide creative strategies and improvements that help your brand expand online.",
                features: ["Strategy", "Analytics", "Growth Hacking"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#06B6D4]/20 ${
                  isVisible.services
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#06B6D4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon
                    className="text-white"
                    size={32}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-poppins font-bold text-[#1E3A8A] text-xl mb-4">
                  {service.title}
                </h3>
                <p className="text-[#111827]/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#06B6D4]/10 text-[#06B6D4] text-xs rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => (sectionsRef.current.contact = el)}
        id="contact"
        className="py-24 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#06B6D4] relative overflow-hidden"
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl"
            style={{
              transform: `translate(-50%, -50%) rotate(${scrollY * 0.1}deg)`,
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 bg-[#06B6D4]/50 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-float animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white/90 text-sm font-medium mb-6">
              ✨ Ready to Transform Your Brand?
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Let's Grow Together
            </h2>
            <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you! Tell us how we can support your brand
              and let's create something amazing together.
            </p>
          </div>

          {/* Enhanced Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:fixifyahubb@gmail.com"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:bg-white/15 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Send us an email"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={28} aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Email Us</h3>
                <p className="text-white/80 text-sm mb-4">
                  Get a response within 24 hours
                </p>
                <div className="text-white font-semibold text-lg group-hover:text-[#06B6D4] transition-colors duration-300">
                  fixifyahubb@gmail.com
                </div>
                <ArrowRight
                  className="absolute top-8 right-8 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                  size={20}
                  aria-hidden="true"
                />
              </div>
            </a>

            <a
              href="https://www.instagram.com/fixifyhubb/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:bg-white/15 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Follow us on Instagram"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Instagram
                    className="text-white"
                    size={28}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Follow Us</h3>
                <p className="text-white/80 text-sm mb-4">
                  See our latest work and updates
                </p>
                <div className="text-white font-semibold text-lg group-hover:text-[#06B6D4] transition-colors duration-300">
                  @FixifyHub
                </div>
                <ArrowRight
                  className="absolute top-8 right-8 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                  size={20}
                  aria-hidden="true"
                />
              </div>
            </a>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a
              href="https://ig.me/m/fixifyhubb"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white text-[#1E3A8A] font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/50 hover:scale-105 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Send us a direct message on Instagram"
            >
              <span className="relative z-10 flex items-center justify-center">
                Send us a DM on Instagram
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                  aria-hidden="true"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Social proof */}
            <div className="mt-8 text-white/80 text-sm">
              <p>Trusted by brands worldwide • Quick response guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #06B6D4;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #0891B2;
        }

        /* Glassmorphism effects */
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }

        /* Ensure smooth performance */
        * {
          box-sizing: border-box;
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp,
          .animate-float,
          .animate-pulse,
          .animate-ping,
          .animate-bounce {
            animation: none;
          }
          
          .transition-all,
          .transition-transform,
          .transition-colors,
          .transition-opacity {
            transition: none;
          }
        }

        /* Focus styles for accessibility */
        button:focus,
        a:focus {
          outline: 2px solid #06B6D4;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
