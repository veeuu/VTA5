import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Trophy, Users, DollarSign, Bot, CheckCircle, X, Mail, User, Phone, Building, Zap, Target, Globe, BarChart3, Calendar, Award, Star, Play, Circle, Sun, Rocket } from 'lucide-react';
import platformPreviewImage from '../assets/platformPreview.jpg';
import HyperSpeed from './HyperSpeed';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyfATxCSgfFsFNmTHYcbAnyVdXf69TBvw_vuz0WrR14d3ITZuNXaODO4u1Bd6HKHcJo/exec';

const VTA5LandingPage = () => {
  const [email, setEmail] = useState('');
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tradingExperience: '',
    interests: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleNotifyMe = () => {
    console.log('Email registered:', email);
    alert(`Thank you for your interest! We'll notify you at ${email}.`);
    setEmail('');
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.tradingExperience) errors.tradingExperience = 'Please select your experience level';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    let sheetsSuccess = false;

    console.log("Clean data being sent to Google Sheets:", formData);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('tradingExperience', formData.tradingExperience);
      formDataToSend.append('interests', formData.interests.join(', '));
      formDataToSend.append('firestoreId', 'FIRESTORE_DISABLED');

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Google Sheets response:', result);
        sheetsSuccess = result.success;
      } else {
        console.error('HTTP error:', response.status);
        sheetsSuccess = false;
      }
    } catch (sheetError) {
      console.warn('Google Sheets failed:', sheetError);
      sheetsSuccess = false;
    }

    if (sheetsSuccess) {
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
          tradingExperience: '',
          interests: []
        });
        setFormErrors({});
      }, 3000);
    } else {
      setIsSubmitting(false);
      alert('Sorry, there was an error submitting your information. Please try again.');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const vtaFeatures = [
    { icon: <DollarSign size={32} />, title: "Low Entry, High Rewards", description: "Start at just $5, earn up to 200%. No deposits required - just your entry fee." },
    { icon: <Play size={32} />, title: "Free Practice Tournaments", description: "Sharpen your skills with no risk in our free practice arenas." },
    { icon: <BarChart3 size={32} />, title: "Live Transparency", description: "Real-time leaderboard updates, no hidden scores or manipulation." },
    { icon: <Globe size={32} />, title: "Global Competition", description: "Face traders worldwide with same data and fair play guaranteed." },
    { icon: <Calendar size={32} />, title: "Daily Tournaments", description: "Multiple contests every day for every skill and entry level." },
    { icon: <Bot size={32} />, title: "All-in-One Platform", description: "Dashboard → Web Trader → Live Leaderboard in one seamless experience." }
  ];

  const howItWorksSteps = [
    { step: "1", title: "Pick Your Arena", description: "Choose between free practice tournaments or paid contests starting from $5 – available daily." },
    { step: "2", title: "Trade in Real Time", description: "Use live market data directly on our integrated web trader – every trade updates instantly." },
    { step: "3", title: "Climb & Conquer", description: "Rank higher, multiply your entry fee up to 200%, and unlock rewards." }
  ];

  const catchyTaglines = [
    "No Deposits. Just Skill.",
    "Turn $5 into Victory – Every Day.",
    "Your Trades. Your Arena. Your Glory.",
    "Daily Tournaments. Global Competition."
  ];

  const traderTypes = [
    { icon: <Sun size={40} style={{ color: 'yellow' }} />, title: "Beginners", description: "Free tournaments to practice, learn, and build confidence." },
    { icon: <Rocket size={40} style={{ color: 'cyan' }} />, title: "Pros", description: "Competitive paid arenas to prove your skills & win big." },
    { icon: <Trophy size={40} style={{ color: 'magenta' }} />, title: "Ambitious Players", description: "Daily contests to track your journey from dashboard → leaderboard → champion." }
  ];

  const earlyAccessBenefits = [
    { icon: <Zap size={24} />, title: "Priority Entry", description: "Get priority entry into the first daily tournaments." },
    { icon: <DollarSign size={24} />, title: "Bonus Credits", description: "Unlock bonus credits at launch." },
    { icon: <Award size={24} />, title: "Founding Trader", description: "Become a Founding Trader with lifetime recognition." }
  ];

  // Spinner component for loading state
  const Spinner = () => (
    <svg style={{ animation: 'spin 1s linear infinite', width: '20px', height: '20px', marginLeft: '10px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle style={{ opacity: '0.25' }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path style={{ opacity: '0.75' }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

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
        --color-error: #ef4444;
      }

      html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        overflow-x: hidden;
        background-color: rgba(0,0,0,0.15);
        height: auto;
      }

      *, *::before, *::after {
        box-sizing: inherit;
      }

      body {
        font-family: 'Inter', sans-serif;
        color: white;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .VTA5-container {
        width: 100%;
        margin: 0 auto;
        overflow-x: hidden;
        display: flex;
        padding-bottom: 0px;
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

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
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
        display: flex;
        align-items: center;
        justify-content: center;
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

      /* Default (Mobile First) Styles */
      .hero-title { 
        font-size: 2.5rem; 
        line-height: 1.1; 
        margin-bottom: 1rem;
      }
      .hero-subtitle { 
        font-size: 1.25rem; 
        margin-bottom: 1.5rem;
      }
      .catchy-taglines-grid { 
        grid-template-columns: 1fr; 
        gap: 0.75rem;
      }
      .features-grid, 
      .how-it-works-grid,
      .trader-types-grid,
      .rewards-grid,
      .benefits-grid { 
        grid-template-columns: 1fr; 
        gap: 2rem;
      }
      .preview-grid { 
        grid-template-columns: 1fr; 
        gap: 2rem;
      }
      .advantage-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      .advantage-pills {
        grid-template-columns: 1fr;
        gap: 0.75rem;
      }
      section { 
        padding: 3rem 0 !important; 
      }
      .VTA5-container {
        padding-bottom: 1rem;
      }
      .form-names-grid {
        grid-template-columns: 1fr !important;
        gap: 0 !important;
      }
      .form-group {
        margin-bottom: 1rem;
      }
      .interest-grid { 
        grid-template-columns: repeat(2, 1fr) !important; 
      }
      footer { 
        padding: 2rem 0 0.5rem; 
      }
      .footer-content { 
        flex-direction: column; 
        text-align: center; 
        gap: 2rem;
        align-items: center;
      }
      .footer-links { 
        flex-direction: column; 
        gap: 2rem;
        text-align: center;
      }
      .footer-links div {
        text-align: center;
      }
      .footer-bottom { 
        flex-direction: column; 
        gap: 0.75rem; 
        text-align: center;
      }


      /* Tablet Styles (min-width: 640px) */
      @media (min-width: 640px) {
        .hero-title { 
          font-size: 3.5rem; 
        }
        .hero-subtitle { 
          font-size: 1.75rem; 
        }
        .catchy-taglines-grid { 
          grid-template-columns: repeat(2, 1fr); 
          gap: 1rem;
        }
        .features-grid,
        .rewards-grid { 
          grid-template-columns: repeat(2, 1fr); 
        }
        .how-it-works-grid,
        .trader-types-grid,
        .benefits-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .advantage-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .advantage-pills {
          grid-template-columns: repeat(3, 1fr);
        }
        .form-names-grid {
          grid-template-columns: 1fr 1fr !important;
        }
        .footer-content { 
          flex-direction: row; 
          text-align: left; 
          align-items: flex-start;
        }
        .footer-links { 
          flex-direction: row; 
          text-align: left; 
        }
        .footer-links div {
          text-align: left;
        }
        .footer-bottom { 
          flex-direction: row;
        }
        .preview-grid {
          grid-template-columns: 1fr;
        }
      }

      /* Large Tablet / Small Desktop Styles (min-width: 1024px) */
      @media (min-width: 1024px) {
        .hero-title { 
          font-size: 4.5rem; 
        }
        .hero-subtitle { 
          font-size: 2rem; 
        }
        .catchy-taglines-grid { 
          grid-template-columns: repeat(4, 1fr); 
        }
        .features-grid { 
          grid-template-columns: repeat(3, 1fr); 
        }
        .how-it-works-grid,
        .trader-types-grid,
        .benefits-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .rewards-grid { 
          grid-template-columns: repeat(4, 1fr); 
        }
        .preview-grid { 
          grid-template-columns: 1fr 1fr; 
        }
        .advantage-grid {
          grid-template-columns: 1fr 1fr;
        }
        .advantage-pills {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      /* General Utility Classes */
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

      .form-group { 
        margin-bottom: 1.5rem; 
        position: relative;
      }
      .form-label { 
        display: block; 
        margin-bottom: 0.5rem; 
        color: var(--color-text-light); 
        font-weight: 600; 
        font-size: 0.875rem; 
      }
      .form-input { 
        width: 100%; 
        padding: 0.75rem 1rem; 
        background: rgba(255, 255, 255, 0.08); 
        backdrop-filter: blur(15px); 
        border: 1px solid var(--color-border-subtle); 
        border-radius: 8px; 
        color: var(--color-text-light); 
        outline: none; 
        transition: border-color 0.3s ease, box-shadow 0.3s ease; 
        font-size: 1rem; 
      }
      .form-input::placeholder { color: var(--color-text-faded); }
      .form-input:focus { 
        border-color: var(--color-primary-end); 
        box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3); 
      }
      .form-input.error {
        border-color: var(--color-error);
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.3);
      }
      .error-message {
        color: var(--color-error);
        font-size: 0.75rem;
        margin-top: 0.25rem;
        position: absolute;
        bottom: -1rem;
        left: 0;
      }
      .form-select { 
        width: 100%; 
        padding: 0.75rem 1rem; 
        background: rgba(255, 255, 255, 0.08); 
        backdrop-filter: blur(15px); 
        border: 1px solid var(--color-border-subtle); 
        border-radius: 8px; 
        color: var(--color-text-light); 
        outline: none; 
        transition: border-color 0.3s ease, box-shadow 0.3s ease; 
        font-size: 1rem; 
      }
      .form-select:focus { 
        border-color: var(--color-primary-end); 
        box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3); 
      }
      .form-select.error {
        border-color: var(--color-error);
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.3);
      }
      .interest-grid { 
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
        gap: 0.75rem; 
        margin-top: 0.5rem; 
      }
      .interest-checkbox { 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        padding: 0.75rem; 
        background: rgba(255, 255, 255, 0.05); 
        border: 1px solid var(--color-border-subtle); 
        border-radius: 8px; 
        cursor: pointer; 
        transition: all 0.3s ease; 
        font-size: 0.875rem; 
        text-align: center; 
      }
      .interest-checkbox.selected { 
        background: var(--color-primary-end); 
        border-color: var(--color-primary-end); 
        color: white; 
      }
      .interest-checkbox:hover { 
        background: rgba(139, 92, 246, 0.2); 
        border-color: var(--color-primary-end); 
      }
      .close-button { 
        position: absolute; 
        top: 1rem; 
        right: 1rem; 
        background: none; 
        border: none; 
        color: var(--color-text-faded); 
        cursor: pointer; 
        padding: 0.5rem; 
        border-radius: 50%; 
        transition: all 0.3s ease; 
      }
      .close-button:hover { 
        background: rgba(255, 255, 255, 0.1); 
        color: var(--color-text-light); 
      }
      .btn-primary:disabled { 
        opacity: 0.7; 
        cursor: not-allowed; 
        transform: none; 
        background: linear-gradient(to right, #9ca3af, #6b7280);
      }
      .btn-primary:disabled:hover { 
        transform: none; 
        box-shadow: none; 
      }
      
      .catchy-taglines-grid {
        display: grid;
        gap: 1rem;
        margin: 3rem 0;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        justify-items: stretch;
      }
      
      .tagline-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        text-align: center;
        width: 100%;
      }

      @keyframes modalFadeIn { to { opacity: 1; } }
      @keyframes modalScaleIn { to { transform: scale(1); } }

      .success-message { text-align: center; padding: 2rem; }
      .success-icon { width: 4rem; height: 4rem; background: linear-gradient(to right, #10b981, #22c55e); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; animation: successPulse 0.6s ease-out; }

      @keyframes successPulse {
        0% { transform: scale(0); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      
      footer {
        width: 100%;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
      }

      /* Mobile adjustments for modal and form */
      @media (max-width: 640px) {
        .modal-content {
          padding: 1.5rem;
        }
        .form-input, .form-select {
          padding: 1rem;
        }
        .btn-primary {
          padding: 1rem;
          font-size: 1rem;
        }
        .interest-checkbox {
          padding: 0.75rem;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="VTA5-container">
      {/* Background Animation */}
      <div className="background-container" style={{ height: '100%', width: '100%' }}>
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
              <span className="header-logo-text gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                Virtual Trading Arena
              </span>
            </div>
            <button
              className="btn-secondary header-signin-btn" 
              onClick={() => setShowWaitlistModal(true)} 
              style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }} 
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-24" style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-screen-xl px-6 text-center">
          <div style={{ animation: 'fadeIn 1s ease-out' }}>
            <h1 className="hero-title gradient-text" style={{ fontWeight: 'bold' }}>
              ⚡ Trade. Compete. Win Big.
            </h1>
            <p className="hero-subtitle" style={{ color: 'var(--color-text-light)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Step into the Virtual Trading Arena – the all-in-one platform with dashboard, live leaderboard, and web trader.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-faded)', marginBottom: '2rem', maxWidth: '900px', margin: '0 auto 2rem' }}>
              Join daily tournaments starting from $5 and win up to 4000% rewards + monthly prizes or practice in free contests.
            </p>
            
            {/* Key Note */}
            <div className="card-glass" style={{ padding: '1.5rem', margin: '2rem auto', maxWidth: '800px', background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-light)', margin: 0 }}>
                💡 <strong>Unlike traditional brokerage firms</strong> where you must deposit trading capital, at VTA5 your entry fee gives you full access to the tournament – no extra deposits required.
              </p>
            </div>

            {/* Catchy Taglines aligned in one line with transparent containers */}
            <div className="catchy-taglines-grid">
              {catchyTaglines.map((tagline, index) => (
                <div key={index} className="card-glass tagline-container">
                  <p style={{ margin: 0, fontWeight: '600', color: 'var(--color-text-light)' }}>{tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why VTA5 Section */}
      <section id="features" className="w-full py-24">
        <div className="max-w-screen-xl px-6">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Why VTA5?
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto' }}>
              Fast-paced highlights that set us apart from traditional trading platforms
            </p>
          </div>
          
          <div className="features-grid" style={{ display: 'grid', marginBottom: '4rem' }}>
            {vtaFeatures.map((feature, index) => (
              <div key={index} className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ color: 'var(--color-primary-end)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
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
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              How It Works
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto' }}>
              Three simple steps to start competing and winning
            </p>
          </div>
          
          <div className="how-it-works-grid" style={{ display: 'grid' }}>
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
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
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
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              The Arena Advantage
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Unlike traditional brokerage firms
            </p>
          </div>
          
          <div className="advantage-grid" style={{ display: 'grid', marginBottom: '3rem' }}>
            <div className="card-glass" style={{ padding: '2rem', border: '1px solid rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.05)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#ef4444' }}>
                ❌ Traditional Brokers
              </h3>
              <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                You deposit trading funds & carry risk. Your money is always at stake with every trade.
              </p>
            </div>
            <div className="card-glass" style={{ padding: '2rem', border: '1px solid rgba(34, 197, 94, 0.3)', background: 'rgba(34, 197, 94, 0.05)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#22c55e' }}>
                ✅ VTA5 Arena
              </h3>
              <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                Pay a small entry fee, access the tournament, and compete risk-free. No additional deposits required.
              </p>
            </div>
          </div>

          <div className="advantage-pills" style={{ display: 'grid', maxWidth: '800px', margin: '0 auto' }}>
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
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Leaderboard & Rewards
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto' }}>
              Multiple ways to win and get rewarded for your trading skills
            </p>
          </div>
          
          <div className="rewards-grid" style={{ display: 'grid' }}>
            <div className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
              <Trophy size={40} style={{ color: '#ffd700', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                🏆 Top Traders
              </h3>
              <p style={{ color: 'var(--color-text-faded)', lineHeight: '1.6' }}>
                Earn up to 4000% returns on your entry fee
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
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              For Every Trader
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto' }}>
              Whether you're just starting or a seasoned pro, we have the perfect arena for you
            </p>
            </div>
          
          <div className="trader-types-grid" style={{ display: 'grid' }}>
            {traderTypes.map((type, index) => (
              <div key={index} className="card-glass" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ marginBottom: '1rem' }}>{type.icon}</div>
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
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Early Access Benefits
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-faded)', maxWidth: '600px', margin: '0 auto' }}>
              Be among the first to experience the future of competitive trading
            </p>
          </div>
          
          <div className="benefits-grid" style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
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
          </div>
        </div>
      </section>

      {/* Platform Preview Section */}
      <section className="w-full py-24">
        <div className="max-w-screen-xl px-6">
          <div className="preview-grid" style={{ display: 'grid', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Experience Real-Time Trading Like Never Before
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-faded)', marginBottom: '2rem', lineHeight: '1.6' }}>
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
            <div className="card-glass" style={{ padding: '1.5rem', textAlign: 'center' }}>
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
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Your Trading Skills Deserve an Arena.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-faded)', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
            With daily tournaments, no deposits required, and an all-in-one trading platform, VTA5 turns trading into a thrilling competition. Whether you're practicing for free or aiming for daily cash rewards, this is where traders become champions.
          </p>
          
          <button 
            className="btn-primary" 
            style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
            onClick={() => setShowWaitlistModal(true)}
          >
            JOIN THE WAITLIST
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: 'rgba(10, 10, 10, 0.9)', 
        borderTop: '1px solid rgba(139, 92, 246, 0.2)', 
        padding: '3rem 0 1rem',
        width: '100%'
      }}>
        <div className="max-w-screen-xl px-6">
          <div className="footer-content flex justify-between items-start" style={{ marginBottom: '2rem' }}>
            <div>
              <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
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
              © 2025 Virtual Trading Arena. All rights reserved.
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
                  <div className="form-names-grid" style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className={`form-input ${formErrors.firstName ? 'error' : ''}`}
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                      {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className={`form-input ${formErrors.lastName ? 'error' : ''}`}
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                      {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className={`form-input ${formErrors.email ? 'error' : ''}`}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                    {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                  </div>   
                  
                  <div className="form-group">
                    <label className="form-label">
                      Phone Number 
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-faded)', marginLeft: '0.5rem' }}>(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Trading Experience</label>
                    <select
                      className={`form-select ${formErrors.tradingExperience ? 'error' : ''}`}
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
                    {formErrors.tradingExperience && <div className="error-message">{formErrors.tradingExperience}</div>}
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
                    {isSubmitting ? (
                      <>
                        <span>Joining Waitlist</span>
                        <Spinner />
                      </>
                    ) : 'Join Waitlist'}
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