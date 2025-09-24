import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Trophy, Users, DollarSign, Bot, CheckCircle, X, Mail, User, Phone, Building, Zap, Target, Globe, BarChart3, Calendar, Award, Star, Play } from 'lucide-react';
import platformPreviewImage from '../assets/platformPreview.jpg';
import HyperSpeed from './HyperSpeed';

const VTA5LandingPage = () => {
  const [email, setEmail] = useState('');
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    tradingExperience: '',
    interests: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleNotifyMe = () => {
    console.log('Email registered:', email);
    alert(`Thank you for your interest! We'll notify you at ${email}.`);
    setEmail('');
  };

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Waitlist form submitted:', formData);
      const emailContent = {
        to: 'jigar@ectsasyventures.com',
        subject: 'New VTA5 Waitlist Registration',
        body: `
          New waitlist registration:
          Name: ${formData.firstName} ${formData.lastName}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Company: ${formData.company}
          Trading Experience: ${formData.tradingExperience}
          Interests: ${formData.interests.join(', ')}
          Registration Time: ${new Date().toLocaleString()}
        `
      };
      console.log('Email would be sent to jigar@ectsasyventures.com:', emailContent);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setShowWaitlistModal(false);
        setSubmitSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          tradingExperience: '',
          interests: []
        });
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const vtaFeatures = [    {      icon: <DollarSign size={32} />,      title: "Low Entry, High Rewards",      description: "Start at just $5, earn up to 200%. No deposits required - just your entry fee."    },    {      icon: <Play size={32} />,      title: "Free Practice Tournaments",      description: "Sharpen your skills with no risk in our free practice arenas."    },    {      icon: <BarChart3 size={32} />,      title: "Live Transparency",      description: "Real-time leaderboard updates, no hidden scores or manipulation."    },    {      icon: <Globe size={32} />,      title: "Global Competition",      description: "Face traders worldwide with same data and fair play guaranteed."    },    {      icon: <Calendar size={32} />,      title: "Daily Tournaments",      description: "Multiple contests every day for every skill and entry level."    },    {      icon: <Bot size={32} />,      title: "All-in-One Platform",      description: "Dashboard → Web Trader → Live Leaderboard in one seamless experience."    }  ];

  const howItWorksSteps = [    {      step: "1",      title: "Pick Your Arena",      description: "Choose between free practice tournaments or paid contests starting from $5 – available daily."    },    {      step: "2",       title: "Trade in Real Time",      description: "Use live market data directly on our integrated web trader – every trade updates instantly."    },    {      step: "3",      title: "Climb & Conquer",       description: "Rank higher, multiply your entry fee up to 200%, and unlock rewards."    }  ];

  const catchyTaglines = [    "No Deposits. Just Skill.",    "Turn $5 into Victory – Every Day.",    "Your Trades. Your Arena. Your Glory.",    "Daily Tournaments. Global Competition."  ];

  const traderTypes = [    {      icon: "🟢",      title: "Beginners",      description: "Free tournaments to practice, learn, and build confidence."    },    {      icon: "🔵",       title: "Pros",      description: "Competitive paid arenas to prove your skills & win big."    },    {      icon: "🟣",      title: "Ambitious Players",       description: "Daily contests to track your journey from dashboard → leaderboard → champion."    }  ];

  const earlyAccessBenefits = [    {      icon: <Zap size={24} />,      title: "Priority Entry",      description: "Get priority entry into the first daily tournaments."    },    {      icon: <DollarSign size={24} />,      title: "Bonus Credits",      description: "Unlock bonus credits at launch."    },    {      icon: <Award size={24} />,      title: "Founding Trader",      description: "Become a Founding Trader with lifetime recognition."    }  ];

  // Inject global styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --color-primary-start: #ec4899;
        --color-primary-end: #8b5cf6;
        --color-secondary: #a855f7;
        --color-gradient-text-start: #f472b6;
        --color-gradient-text-mid: #a855f7;
        --color-gradient-text-end: #3b82f6;
        --color-dark-bg-start: #0a0a0a;
        --color-dark-bg-mid: #1a082b;
        --color-dark-bg-end: #000000;
        --color-card-bg: rgba(255, 255, 255, 0.05);
        --color-card-border: rgba(139, 92, 246, 0.3);
        --color-text-light: #e0e7ff;
        --color-text-faded: #a78bfa;
        --color-border-subtle: rgba(100, 116, 139, 0.3);
      }

      html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        overflow-x: hidden;
        background-color: rgba(0,0,0,0.15);
      }

      *, *::before, *::after {
        box-sizing: inherit;
      }

      body {
        font-family: 'Inter', sans-serif;
        color: white;
        min-height: 100vh;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .VTA5-container {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 1;
      }

      .background-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
      }

      .background-container canvas {
        width: 100%;
        height: 100%;
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.05); }
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes glow {
        0% { box-shadow: 0 0 5px var(--color-secondary); }
        50% { box-shadow: 0 0 20px var(--color-primary-end); }
        100% { box-shadow: 0 0 5px var(--color-secondary); }
      }

      .gradient-text {
        background: linear-gradient(to right, var(--color-gradient-text-start), var(--color-gradient-text-mid), var(--color-gradient-text-end));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .btn-primary {
        background: linear-gradient(to right, var(--color-primary-start), var(--color-primary-end));
        color: white;
        border: none;
        padding: 0.75rem 2rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;
        z-index: 1;
      }

      .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
        transform: scale(0);
        opacity: 0;
        transition: transform 0.5s ease, opacity 0.5s ease;
        z-index: -1;
      }

      .btn-primary:hover::before {
        transform: scale(1.5);
        opacity: 1;
      }

      .btn-primary:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 10px 30px rgba(139, 92, 246, 0.5);
      }

      .btn-secondary {
        border: 1px solid var(--color-primary-end);
        color: var(--color-text-faded);
        background: transparent;
        padding: 0.75rem 2rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
      }

      .btn-secondary:hover {
        background: var(--color-primary-end);
        color: white;
        box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
        transform: translateY(-2px);
      }

      .input-field {
        flex: 1;
        padding: 0.9rem 1.2rem;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(15px);
        border: 1px solid var(--color-border-subtle);
        border-radius: 10px;
        color: var(--color-text-light);
        outline: none;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }

      .input-field::placeholder {
        color: var(--color-text-faded);
      }

      .input-field:focus {
        border-color: var(--color-primary-end);
        box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.4);
      }

      .card-glass {
        background: var(--color-card-bg);
        backdrop-filter: blur(15px);
        border: 1px solid var(--color-card-border);
        border-radius: 16px;
        transition: all 0.4s ease-out;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }

      .card-glass:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(139, 92, 246, 0.4);
      }

      .max-w-screen-xl { max-width: 2000px; margin: 0 auto; width: 100%; }
      .text-center { text-align: center; }
      .flex { display: flex; }
      .items-center { align-items: center; }
      .justify-between { justify-content: space-between; }
      .gap-4 { gap: 1rem; }
      .gap-8 { gap: 2rem; }
      .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
      .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
      .py-24 { padding-top: 6rem; padding-bottom: 6rem; }
      .w-full { width: 100%; }

      @media (max-width: 768px) {
        .nav-links { display: none; }
        .hero-title { font-size: 3rem !important; line-height: 1.1; }
        .hero-subtitle { font-size: 1.8rem !important; }
        .email-form { flex-direction: column; width: 100%; }
        .preview-grid { grid-template-columns: 1fr; }
        .cta-buttons { flex-direction: column; }
        .footer-content { flex-direction: column; text-align: center; }
        .footer-links { margin-top: 1rem; }
        .footer-bottom { flex-direction: column; gap: 0.5rem; }
        .header-logo-text { display: none; }
        .header-signin-btn { display: none; }
      }

      @media (min-width: 768px) {
        .email-form { flex-direction: row; }
        .features-grid { grid-template-columns: repeat(2, 1fr); }
        .metrics-grid { grid-template-columns: repeat(2, 1fr); }
        .header-logo-text { display: block; }
        .header-signin-btn { display: block; }
      }

      @media (min-width: 1024px) {
        .features-grid { grid-template-columns: repeat(3, 1fr); }
        .preview-grid { grid-template-columns: 1fr 1fr; }
        .metrics-grid { grid-template-columns: repeat(4, 1fr); }
      }

      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        animation: modalFadeIn 0.3s ease-out forwards;
      }

      .modal-content {
        background: var(--color-dark-bg-start);
        border: 1px solid var(--color-card-border);
        border-radius: 20px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        transform: scale(0.8);
        animation: modalScaleIn 0.3s ease-out 0.1s forwards;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
      }

      .form-group { margin-bottom: 1.5rem; }
      .form-label { display: block; margin-bottom: 0.5rem; color: var(--color-text-light); font-weight: 600; font-size: 0.875rem; }
      .form-input { width: 100%; padding: 0.75rem 1rem; background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(15px); border: 1px solid var(--color-border-subtle); border-radius: 8px; color: var(--color-text-light); outline: none; transition: border-color 0.3s ease, box-shadow 0.3s ease; font-size: 1rem; }
      .form-input::placeholder { color: var(--color-text-faded); }
      .form-input:focus { border-color: var(--color-primary-end); box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3); }
      .form-select { width: 100%; padding: 0.75rem 1rem; background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(15px); border: 1px solid var(--color-border-subtle); border-radius: 8px; color: var(--color-text-light); outline: none; transition: border-color 0.3s ease, box-shadow 0.3s ease; font-size: 1rem; }
      .form-select:focus { border-color: var(--color-primary-end); box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3); }
      .interest-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem; margin-top: 0.5rem; }
      .interest-checkbox { display: flex; align-items: center; padding: 0.5rem 0.75rem; background: rgba(255, 255, 255, 0.05); border: 1px solid var(--color-border-subtle); border-radius: 8px; cursor: pointer; transition: all 0.3s ease; font-size: 0.875rem; }
      .interest-checkbox.selected { background: var(--color-primary-end); border-color: var(--color-primary-end); color: white; }
      .interest-checkbox:hover { background: rgba(139, 92, 246, 0.2); border-color: var(--color-primary-end); }
      .close-button { position: absolute; top: 1rem; right: 1rem; background: none; border: none; color: var(--color-text-faded); cursor: pointer; padding: 0.5rem; border-radius: 50%; transition: all 0.3s ease; }
      .close-button:hover { background: rgba(255, 255, 255, 0.1); color: var(--color-text-light); }
      .btn-primary:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
      .btn-primary:disabled:hover { transform: none; box-shadow: none; }

      @keyframes modalFadeIn { to { opacity: 1; } }
      @keyframes modalScaleIn { to { transform: scale(1); } }

      .success-message { text-align: center; padding: 2rem; }
      .success-icon { width: 4rem; height: 4rem; background: linear-gradient(to right, #10b981, #22c55e); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; animation: successPulse 0.6s ease-out; }

      @keyframes successPulse {
        0% { transform: scale(0); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="VTA5-container">
      {/* Background Animation */}
      <div className="background-container">
        <HyperSpeed />
      </div>

      {/* Header */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        background: 'rgba(10, 10, 10, 0.9)', 
        backdropFilter: 'blur(20px)', 
        borderBottom: '1px solid rgba(139, 92, 246, 0.2)' 
      }}>
        <div className="max-w-screen-xl px-6" style={{ padding: '1rem 1.5rem' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', 
                borderRadius: '10px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: 'bold', 
                fontSize: '1.2rem' 
              }}>
                VTA5
              </div>
              <span className="header-logo-text gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                Virtual Trading Arena
              </span>
            </div>
            <nav className="nav-links flex items-center gap-8">
              <a href="#features" style={{ color: 'var(--color-text-faded)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Features</a>
              <a href="#how-it-works" style={{ color: 'var(--color-text-faded)', textDecoration: 'none', transition: 'color 0.3s ease' }}>How It Works</a>
              <a href="#tournaments" style={{ color: 'var(--color-text-faded)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Tournaments</a>
              <button className="btn-secondary header-signin-btn">Sign In</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-24" style={{ marginTop: '80px', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-screen-xl px-6 text-center">
          <div style={{ animation: 'fadeIn 1s ease-out' }}>
            <h1 className="hero-title gradient-text" style={{ fontSize: '4.5rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              ⚡ Trade. Compete. Win Big.
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '2rem', color: 'var(--color-text-light)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Step into the Virtual Trading Arena – the all-in-one platform with dashboard, live leaderboard, and web trader.
            </p>
            <p style={{ fontSize: '1.3rem', color: 'var(--color-text-faded)', marginBottom: '2rem', maxWidth: '900px', margin: '0 auto 2rem' }}>
              Join daily tournaments starting from $5 and win up to 200% rewards + monthly prizes or practice in free contests.
            </p>
            
            {/* Key Note */}
            <div className="card-glass" style={{ padding: '1.5rem', margin: '2rem auto', maxWidth: '800px', background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', margin: 0 }}>
                💡 <strong>Unlike traditional brokerage firms</strong> where you must deposit trading capital, at VTA5 your entry fee gives you full access to the tournament – no extra deposits required.
              </p>
            </div>

            {/* Catchy Taglines */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', margin: '3rem 0', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
              {catchyTaglines.map((tagline, index) => (
                <div key={index} className="card-glass" style={{ padding: '1rem', textAlign: 'center' }}>
                  <p style={{ margin: 0, fontWeight: '600', color: 'var(--color-text-light)' }}>{tagline}</p>
                </div>
              ))}
            </div>

            <div className="cta-buttons flex gap-4 justify-center" style={{ marginTop: '3rem' }}>
              <button 
                className="btn-primary" 
                style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}
                onClick={() => setShowWaitlistModal(true)}
              >
                🔥 Pre-Register Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why VTA5 Section */}
      <section id="features" className="w-full py-24">
        <div className="max-w-screen-xl px-6">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Why VTA5?
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto' }}>
              Fast-paced highlights that set us apart from traditional trading platforms
            </p>
          </div>
          
          <div className="features-grid" style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
            {vtaFeatures.map((feature, index) => (
              <div key={index} className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ color: 'var(--color-primary-end)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-24">
        <div className="max-w-screen-xl px-6">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              How It Works
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto' }}>
              Three simple steps to start competing and winning
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="card-glass" style={{ padding: '2rem', textAlign: 'center', position: 'relative' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  margin: '0 auto 1.5rem',
                  color: 'white'
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Arena Advantage Section */}
      <section className="w-full py-24">
        <div className="max-w-screen-xl px-6">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              The Arena Advantage
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Unlike traditional brokerage firms
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div className="card-glass" style={{ padding: '2rem', border: '1px solid rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#ef4444' }}>
                ❌ Traditional Brokers
              </h3>
              <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                You deposit trading funds & carry risk. Your money is always at stake with every trade.
              </p>
            </div>
            <div className="card-glass" style={{ padding: '2rem', border: '1px solid rgba(34, 197, 94, 0.3)', background: 'rgba(34, 197, 94, 0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#22c55e' }}>
                ✅ VTA5 Arena
              </h3>
              <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                Pay a small entry fee, access the tournament, and compete risk-free. No additional deposits required.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div className="card-glass" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <Target size={32} style={{ color: 'var(--color-primary-end)', margin: '0 auto 1rem' }} />
              <p style={{ margin: 0, fontWeight: '600', color: 'var(--color-text-light)' }}>🎯 Every move counts.</p>
            </div>
            <div className="card-glass" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <Trophy size={32} style={{ color: 'var(--color-primary-end)', margin: '0 auto 1rem' }} />
              <p style={{ margin: 0, fontWeight: '600', color: 'var(--color-text-light)' }}>🥇 Compete head-to-head in real tournaments.</p>
            </div>
            <div className="card-glass" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <Zap size={32} style={{ color: 'var(--color-primary-end)', margin: '0 auto 1rem' }} />
              <p style={{ margin: 0, fontWeight: '600', color: 'var(--color-text-light)' }}>⚡ Instant results, instant excitement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard & Rewards Section */}
      <section className="w-full py-24">
        <div className="max-w-screen-xl px-6">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Leaderboard & Rewards
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto' }}>
              Multiple ways to win and get rewarded for your trading skills
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
              <Trophy size={40} style={{ color: '#ffd700', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                🏆 Top Traders
              </h3>
              <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                Earn up to 200% returns on your entry fee
              </p>
            </div>
            
            <div className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
              <Award size={40} style={{ color: '#ec4899', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                🎁 Monthly Champions
              </h3>
              <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                Win exclusive rewards & gifts
              </p>
            </div>
            
            <div className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
              <Star size={40} style={{ color: '#8b5cf6', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                💎 Consistent Performers
              </h3>
              <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                Unlock loyalty perks and special privileges
              </p>
            </div>
            
            <div className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
              <Calendar size={40} style={{ color: '#22c55e', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                📅 Daily Winners
              </h3>
              <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                Every day brings new chances to compete & win
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Every Trader Section */}
      <section id="tournaments" className="w-full py-24">
        <div className="max-w-screen-xl px-6">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              For Every Trader
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto' }}>
              Whether you're just starting or a seasoned pro, we have the perfect arena for you
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {traderTypes.map((type, index) => (
              <div key={index} className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{type.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                  {type.title}
                </h3>
                <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Benefits Section */}
      <section className="w-full py-24">
        <div className="max-w-screen-xl px-6">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Early Access Benefits
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto' }}>
              Be among the first to experience the future of competitive trading
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {earlyAccessBenefits.map((benefit, index) => (
              <div key={index} className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ color: 'var(--color-primary-end)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {benefit.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              className="btn-secondary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
              onClick={() => setShowWaitlistModal(true)}
            >
              👉 Join the Waitlist – It's Free
            </button>
          </div>
        </div>
      </section>

      {/* Platform Preview Section */}
      <section className="w-full py-24">
        <div className="max-w-screen-xl px-6">
          <div className="preview-grid" style={{ display: 'grid', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Experience Real-Time Trading Like Never Before
              </h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-faded)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Our integrated platform combines powerful analytics, real-time data, and seamless execution in one comprehensive trading environment.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                  <CheckCircle size={20} style={{ color: '#22c55e', marginRight: '0.75rem' }} />
                  Live market data from major exchanges
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                  <CheckCircle size={20} style={{ color: '#22c55e', marginRight: '0.75rem' }} />
                  Real-time leaderboard updates
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                  <CheckCircle size={20} style={{ color: '#22c55e', marginRight: '0.75rem' }} />
                  Advanced charting and analysis tools
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                  <CheckCircle size={20} style={{ color: '#22c55e', marginRight: '0.75rem' }} />
                  Instant trade execution and results
                </li>
              </ul>
            </div>
            <div className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
              <img 
                src={platformPreviewImage} 
                alt="VTA5 Platform Preview" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }} 
              />
              <p style={{ marginTop: '1rem', color: 'var(--color-text-faded)', fontSize: '0.9rem' }}>
                Dashboard → Web Trader → Live Leaderboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="w-full py-24">
        <div className="max-w-screen-xl px-6 text-center">
          <h2 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Your Trading Skills Deserve an Arena.
          </h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--color-text-faded)', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
            With daily tournaments, no deposits required, and an all-in-one trading platform, VTA5 turns trading into a thrilling competition. Whether you're practicing for free or aiming for daily cash rewards, this is where traders become champions.
          </p>
          
          <button 
            className="btn-primary" 
            style={{ fontSize: '1.3rem', padding: '1.2rem 3rem' }}
            onClick={() => setShowWaitlistModal(true)}
          >
            🔥 Pre-Register Now & Be Among the First
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: 'rgba(10, 10, 10, 0.9)', 
        borderTop: '1px solid rgba(139, 92, 246, 0.2)', 
        padding: '3rem 0 1rem' 
      }}>
        <div className="max-w-screen-xl px-6">
          <div className="footer-content flex justify-between items-start" style={{ marginBottom: '2rem' }}>
            <div>
              <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', 
                  borderRadius: '10px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 'bold', 
                  fontSize: '1.2rem' 
                }}>
                  VTA5
                </div>
                <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  Virtual Trading Arena
                </span>
              </div>
              <p style={{ color: 'var(--color-text-faded)', maxWidth: '400px' }}>
                The future of competitive trading. Where skills meet rewards in daily tournaments.
              </p>
            </div>
            <div className="footer-links flex gap-8">
              <div>
                <h4 style={{ color: 'var(--color-text-light)', marginBottom: '1rem', fontSize: '1.1rem' }}>Platform</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: 'var(--color-text-faded)', textDecoration: 'none' }}>Tournaments</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: 'var(--color-text-faded)', textDecoration: 'none' }}>Leaderboard</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: 'var(--color-text-faded)', textDecoration: 'none' }}>Web Trader</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--color-text-light)', marginBottom: '1rem', fontSize: '1.1rem' }}>Support</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: 'var(--color-text-faded)', textDecoration: 'none' }}>Help Center</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: 'var(--color-text-faded)', textDecoration: 'none' }}>Contact Us</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: 'var(--color-text-faded)', textDecoration: 'none' }}>FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom flex justify-between items-center" style={{ 
            paddingTop: '2rem', 
            borderTop: '1px solid rgba(139, 92, 246, 0.2)' 
          }}>
            <p style={{ color: 'var(--color-text-faded)', margin: 0 }}>
              © 2024 Virtual Trading Arena. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" style={{ color: 'var(--color-text-faded)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'var(--color-text-faded)', textDecoration: 'none' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {showWaitlistModal && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowWaitlistModal(false)}>
          <div className="modal-content" style={{ position: 'relative' }}>
            <button 
              className="close-button"
              onClick={() => setShowWaitlistModal(false)}
            >
              <X size={20} />
            </button>
            
            {submitSuccess ? (
              <div className="success-message">
                <div className="success-icon">
                  <CheckCircle size={32} color="white" />
                </div>
                <h3 style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>Welcome to VTA5!</h3>
                <p style={{ color: 'var(--color-text-faded)' }}>
                  You're now on the waitlist. We'll notify you as soon as we launch!
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ color: 'var(--color-text-light)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                  Join the VTA5 Waitlist
                </h3>
                <p style={{ color: 'var(--color-text-faded)', marginBottom: '2rem' }}>
                  Be among the first to experience the future of competitive trading.
                </p>
                
                <form onSubmit={handleWaitlistSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Company (Optional)</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Trading Experience</label>
                    <select
                      className="form-select"
                      value={formData.tradingExperience}
                      onChange={(e) => handleInputChange('tradingExperience', e.target.value)}
                      required
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Interests (Select all that apply)</label>
                    <div className="interest-grid">
                      {['Day Trading', 'Swing Trading', 'Forex', 'Crypto', 'Stocks', 'Commodities'].map(interest => (
                        <div
                          key={interest}
                          className={`interest-checkbox ${formData.interests.includes(interest) ? 'selected' : ''}`}
                          onClick={() => handleInterestToggle(interest)}
                        >
                          {interest}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VTA5LandingPage;            