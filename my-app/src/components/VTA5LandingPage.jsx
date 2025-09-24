import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Trophy, Users, DollarSign, Bot, CheckCircle, X, Mail, User, Phone, Building } from 'lucide-react';
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
    
        // Simulate API call
        setTimeout(() => {
            console.log('Waitlist form submitted:', formData);
            
            // Simulate sending email
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
            
            // Reset form after 3 seconds
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
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };
    
    const handleInterestToggle = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const features = [
        {
            icon: <Trophy size={32} />,
            title: "Elite Tournaments",
            description: "Premium competitions with higher stakes and exclusive access."
        },
        {
            icon: <Shield size={32} />,
            title: "Advanced Security",
            description: "Military-grade encryption and robust protection for your assets."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Pro Analytics",
            description: "Deep market insights and sophisticated trading analytics tools."
        },
        {
            icon: <Users size={32} />,
            title: "Real Rewards",
            description: "Win real money prizes, sponsorship opportunities, and exclusive rewards based on your tournament performance."
        },
        {
            icon: <DollarSign size={32} />,
            title: "Global Community",
            description: "Connect with traders worldwide, share strategies, and learn from the best in our active community."
        },
        {
            icon: <Bot size={32} />,
            title: "Real-Time Trading",
            description: "Trade with live market data from major exchanges. Experience real market conditions without any financial risk."
        }
    ];

    const tradingFeatures = [
        "Real-time market data from 50+ exchanges",
        "AI-powered trading suggestions and strategies",
        "Advanced charting tools with custom indicators",
        "One-click order execution with minimal latency",
        "Comprehensive risk management tools and alerts"
    ];

    const metrics = [
        { value: "500%", label: "Max Tournament Returns" },
        { value: "24/7", label: "Global Market Access" },
        { value: "99.99%", label: "Platform Uptime" }
    ];

    // Inject global styles
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            :root {
                --color-primary-start: #ec4899; /* Pink */
                --color-primary-end: #8b5cf6; /* Purple */
                --color-secondary: #a855f7; /* Lighter Purple */
                --color-gradient-text-start: #f472b6;
                --color-gradient-text-mid: #a855f7;
                --color-gradient-text-end: #3b82f6;
                --color-dark-bg-start: #0a0a0a; /* Almost black */
                --color-dark-bg-mid: #1a082b; /* Deep purplish dark */
                --color-dark-bg-end: #000000; /* Black */
                --color-card-bg: rgba(255, 255, 255, 0.05); /* Lighter translucent */
                --color-card-border: rgba(139, 92, 246, 0.3); /* Subtle purple border */
                --color-text-light: #e0e7ff; /* Soft white */
                --color-text-faded: #a78bfa; /* Faded purple */
                --color-border-subtle: rgba(100, 116, 139, 0.3); /* Subtle grey border */
            }

            html, body {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                width: 100%;
                overflow-x: hidden;
                background-color: rgba(0,0,0,0.15); /* Changed to transparent */
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
                z-index: 1; /* Ensure content is above background */
            }

            /* Background Animation Container */
            .background-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1; /* Place behind all content */
                overflow: hidden;
            }

            .background-container canvas {
                width: 100%;
                height: 100%;
            }

            /* Keyframe Animations */
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

            /* Reusable Classes */
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

            /* Utility Classes */
            .max-w-screen-xl { 
                max-width: 2000px; 
                margin: 0 auto; 
                width: 100%;
            }
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

            /* Responsive Design */
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

            /* Modal Styles */
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

            .form-input::placeholder {
                color: var(--color-text-faded);
            }

            .form-input:focus {
                border-color: var(--color-primary-end);
                box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
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

            .interest-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 0.75rem;
                margin-top: 0.5rem;
            }

            .interest-checkbox {
                display: flex;
                align-items: center;
                padding: 0.5rem 0.75rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid var(--color-border-subtle);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.875rem;
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
            }

            .btn-primary:disabled:hover {
                transform: none;
                box-shadow: none;
            }

            @keyframes modalFadeIn {
                to { opacity: 1; }
            }

            @keyframes modalScaleIn {
                to { transform: scale(1); }
            }

            .success-message {
                text-align: center;
                padding: 2rem;
            }

            .success-icon {
                width: 4rem;
                height: 4rem;
                background: linear-gradient(to right, #10b981, #22c55e);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
                animation: successPulse 0.6s ease-out;
            }

            @keyframes successPulse {
                0% { transform: scale(0); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="VTA5-container">
            {/* Background Animation Container */}
            <div className="background-container">
                <HyperSpeed />
            </div>

            {/* Hero Section */}
            <section className="w-full text-center py-24 px-6 relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto animate-fadeIn">
                    <div className="inline-flex items-center gap-2 bg-[rgba(139,92,246,0.15)] backdrop-blur-md border border-[rgba(139,92,246,0.3)] p-10 rounded-full mb-8 text-sm text-[var(--color-text-faded)] font-medium">
                        <span className="w-2.5 h-2.5 p-10 min-w-[150px] rounded-full animate-pulse shadow-md shadow-[var(--color-secondary)]">🚀 Coming Soon</span>
                    </div>

                    <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 gradient-text" style={{ lineHeight: '1.1' }}>VTA5</h1>

                    <h2 className="hero-subtitle text-6xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--color-text-light)]">
                    Master Trading with Real-Time Competitions
                    </h2>

                    <p className="text-lg text-[var(--color-text-faded)] max-w-3xl mx-auto mb-12 leading-relaxed">
                        Experience the next generation of competitive trading with advanced AI analytics,
                        premium tournaments, and unprecedented rewards. VTA5 takes trading competitions
                        to a whole new level.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full py-24 px-6">
                <div className="max-w-screen-xl mx-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-4 text-[var(--color-text-light)]">Why Choose Our Platform?</h3>
                        <p className="text-xl text-[var(--color-text-faded)] max-w-3xl mx-auto">
                            Revolutionary features that will transform your trading tournament experience.
                        </p>
                    </div>

                    <div className="features-grid grid gap-8 w-full">
                        {features.map((feature, index) => (
                            <div key={index} className="card-glass p-6 text-center hover:shadow-lg hover:border-[var(--color-primary-end)]" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-full flex items-center justify-center mb-6 shadow-md">
                                    {React.cloneElement(feature.icon, { size: 30, color: "white", strokeWidth: 2.5 })}
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-[var(--color-text-light)]">{feature.title}</h4>
                                <p className="text-[var(--color-text-faded)]">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Preview Section */}
            <section className="w-full py-24 px-6">
                <div className="max-w-screen-xl mx-auto grid preview-grid items-center gap-16">
                    {/* Left Side: Text Content */}
                    <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                        <h3 className="text-4xl font-bold mb-4 text-[var(--color-text-light)]">Platform Preview</h3>
                        <p className="text-lg text-[var(--color-text-faded)] mb-8">
                            Get a sneak peek at the VTA5 interface
                        </p>

                        <div>
                            <h4 className="text-2xl font-bold mb-4 text-[var(--color-text-light)]">Advanced Trading Interface</h4>
                            <ul className="space-y-4 text-[var(--color-text-faded)] text-base">
                                {tradingFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle size={20} color="#22c55e" className="mt-1" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                            
                    {/* Right Side: Image */}
                    <div className="animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                        <img 
                            src={platformPreviewImage} 
                            alt="Trading Interface Preview" 
                            className="w-full rounded-2xl shadow-xl border border-[var(--color-card-border)]" 
                        />
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="w-full py-24 px-6">
                <div className="max-w-screen-xl mx-auto animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-4 text-[var(--color-text-light)]">Performance Metrics</h3>
                        <p className="text-xl text-[var(--color-text-faded)] max-w-3xl mx-auto">
                            Our platform is engineered for speed, security, and global accessibility.
                        </p>
                    </div>

                    <div className="metrics-grid flex flex-wrap justify-center gap-8">
                        {metrics.map((metric, index) => (
                            <div key={index} className="card-glass p-10 text-center hover:shadow-lg min-w-[280px]" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                                <div className="text-5xl font-extrabold gradient-text mb-4">
                                    {metric.value}
                                </div>
                                <div className="text-lg text-[var(--color-text-faded)] px-2">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-24 px-6 text-center">
                <div className="max-w-screen-xl mx-auto animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                    <h3 className="text-4xl font-bold mb-6 text-[var(--color-text-light)]">Ready for the Future of Trading?</h3>
                    <p className="text-xl text-[var(--color-text-faded)] max-w-3xl mx-auto mb-12">
                        VTA5 will revolutionize competitive trading. Join the waitlist and be among the first to experience the future.
                    </p>

                    <div className="cta-buttons flex justify-center gap-6">
                    <button 
                        className="btn-primary text-lg px-8 py-3"
                        onClick={() => setShowWaitlistModal(true)}
                    >
                        Join Waitlist
                    </button>
                    </div>
                </div>
            </section>

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
                                <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-light)]">Success!</h3>
                                <p className="text-[var(--color-text-faded)] mb-2">
                                    Thank you for joining the VTA5 waitlist!
                                </p>
                                <p className="text-sm text-[var(--color-text-faded)]">
                                    Your details have been sent to jigar@ectsasyventures.com
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-6">
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-full flex items-center justify-center">
                                            <Mail size={24} color="white" />
                                        </div>
                                        <h2 className="text-2xl font-bold gradient-text">Join VTA5 Waitlist</h2>
                                    </div>
                                    <p className="text-[var(--color-text-faded)]">
                                        Be among the first to experience the future of competitive trading
                                    </p>
                                </div>

                                <form onSubmit={handleWaitlistSubmit}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                <User size={16} className="inline mr-2" />
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="John"
                                                required
                                                value={formData.firstName}
                                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Last Name *</label>
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="Doe"
                                                required
                                                value={formData.lastName}
                                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">
                                            <Mail size={16} className="inline mr-2" />
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="john@example.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">
                                            <Phone size={16} className="inline mr-2" />
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-input"
                                            placeholder="+1 (555) 123-4567"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">
                                            <Building size={16} className="inline mr-2" />
                                            Company/Organization
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Your Company Name"
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
                                        >
                                            <option value="">Select your experience level</option>
                                            <option value="beginner">Beginner (0-1 years)</option>
                                            <option value="intermediate">Intermediate (1-3 years)</option>
                                            <option value="advanced">Advanced (3-5 years)</option>
                                            <option value="expert">Expert (5+ years)</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Areas of Interest</label>
                                        <div className="interest-grid">
                                            {['Tournaments', 'AI Analytics', 'Real-time Trading', 'Community Features', 'Educational Content', 'Mobile App'].map((interest) => (
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

                                    <div className="flex gap-4 mt-8">
                                        <button
                                            type="button"
                                            className="btn-secondary flex-1"
                                            onClick={() => setShowWaitlistModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn-primary flex-1"
                                            disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="w-full py-6 px-6 border-t border-[var(--color-border-subtle)]">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col items-center justify-center gap-4 mb-2">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-extrabold gradient-text">Virtual Trading Arena (VTA5)</span>
                        </div>

                        <p className="text-[var(--color-text-faded)] max-w-md text-center">The next generation trading tournament platform. Coming soon to redefine competitive trading.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center w-full pt-4 border-t border-[var(--color-border-subtle)] text-[var(--color-text-faded)] text-sm gap-4">
                        <p>© 2025 VTA5. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default VTA5LandingPage;