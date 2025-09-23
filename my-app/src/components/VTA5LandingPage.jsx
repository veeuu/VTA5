import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Trophy, Users, DollarSign, Bot, CheckCircle } from 'lucide-react';

const VT45LandingPage = () => {
    const [registeredUsers, setRegisteredUsers] = useState(154892); // Initial number matching the image
    const [email, setEmail] = useState('');

    // Effect for the dynamic registered user count
    useEffect(() => {
        const userCountInterval = setInterval(() => {
            setRegisteredUsers(prev => prev + Math.floor(Math.random() * 3) + 1); // Increase by 1-3 users
        }, 5000); // Every 5 seconds

        return () => clearInterval(userCountInterval);
    }, []);

    const handleNotifyMe = () => {
        console.log('Email registered:', email);
        alert(`Thank you for your interest! We'll notify you at ${email}.`);
        setEmail('');
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
            title: "VIP Community",
            description: "Exclusive access to professional traders and networking opportunities."
        },
        {
            icon: <DollarSign size={32} />,
            title: "Higher Rewards",
            description: "Achieve up to 500% returns in our premium, high-reward tournaments."
        },
        {
            icon: <Bot size={32} />,
            title: "AI Assistant",
            description: "Smart trading suggestions, personalized market analysis, and alerts."
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
        { value: "<1ms", label: "Order Execution Speed" },
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
            }

            *, *::before, *::after {
                box-sizing: inherit;
            }

            body {
                font-family: 'Inter', sans-serif; /* Using a more modern font */
                background: linear-gradient(135deg, var(--color-dark-bg-start) 0%, var(--color-dark-bg-mid) 50%, var(--color-dark-bg-end) 100%);
                color: white;
                min-height: 100vh;
                line-height: 1.6;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            .vt45-container {
                width: 100%;
                max-width: 100%;
                margin: 0 auto;
                overflow-x: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
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
                background: rgba(255, 255, 255, 0.08); /* Lighter translucent background */
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

                .header-logo-text { display: none; } /* Hide text on small screens */
                .header-signin-btn { display: none; } /* Hide sign-in on small screens */
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
        `;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="vt45-container">
            {/* Header */}
            <header className="w-full py-4 px-6 relative z-10 border-b border-[var(--color-border-subtle)]">
                <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-full flex items-center justify-center shadow-lg">
                            <Shield size={22} color="white" strokeWidth={2.5} />
                        </div>
                        <span className="text-2xl font-extrabold gradient-text header-logo-text">TradeTournament</span>
                    </div>

                    <div className="nav-links flex items-center gap-8">
                        <a href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-primary-end)] transition-colors duration-300 font-medium">Home</a>
                        <a href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-primary-end)] transition-colors duration-300 font-medium">VT45 Launch</a>
                        <a href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-primary-end)] transition-colors duration-300 font-medium">About</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-[var(--color-text-faded)] hover:text-[var(--color-primary-end)] transition-colors duration-300 bg-transparent border-none cursor-pointer font-medium header-signin-btn">Sign In</button>
                        <button className="btn-primary px-6 py-2">
                            Get Started
                        </button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="w-full text-center py-24 px-6 relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto animate-fadeIn">
                    <div className="inline-flex items-center gap-2 bg-[rgba(139,92,246,0.15)] backdrop-blur-md border border-[rgba(139,92,246,0.3)] px-5 py-2 rounded-full mb-8 text-sm text-[var(--color-text-faded)] font-medium">
                        <span className="w-2.5 h-2.5 bg-[var(--color-secondary)] rounded-full animate-pulse shadow-md shadow-[var(--color-secondary)]"></span>
                        <span>The Future is Here</span>
                    </div>

                    <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 gradient-text" style={{ lineHeight: '1.1' }}>VT45</h1>

                    <h2 className="hero-subtitle text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--color-text-light)]">
                        The Next Generation of Trading Tournaments
                    </h2>

                    <p className="text-lg text-[var(--color-text-faded)] max-w-3xl mx-auto mb-12 leading-relaxed">
                        Experience the next generation of competitive trading with advanced AI analytics,
                        premium tournaments, and unprecedented rewards. VT45 takes trading competitions
                        to a whole new level.
                    </p>

                    {/* Registered Users */}
                    <div className="card-glass p-8 max-w-md mx-auto mb-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        <div className="text-center">
                            <div className="text-6xl font-extrabold gradient-text mb-2 animate-glow">
                                {registeredUsers.toLocaleString()}
                            </div>
                            <div className="text-xl text-[var(--color-text-faded)] opacity-90">Registered Traders</div>
                        </div>
                        <p className="text-sm text-[var(--color-text-faded)] mt-4">Counting up in real-time. Don't miss out!</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full py-24 px-6">
                <div className="max-w-screen-xl mx-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-4 text-[var(--color-text-light)]">What's New in V35?</h3>
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

            {/* Performance Metrics */}
            <section className="w-full py-24 px-6">
                <div className="max-w-screen-xl mx-auto animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-4 text-[var(--color-text-light)]">Performance Metrics</h3>
                        <p className="text-xl text-[var(--color-text-faded)] max-w-3xl mx-auto">
                            Our platform is engineered for speed, security, and global accessibility.
                        </p>
                    </div>

                    <div className="metrics-grid grid gap-8 w-full">
                        {metrics.map((metric, index) => (
                            <div key={index} className="card-glass p-6 text-center hover:shadow-lg" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                                <div className="text-5xl font-extrabold gradient-text mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-lg text-[var(--color-text-faded)]">{metric.label}</div>
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
                        VT45 will revolutionize competitive trading. Join the waitlist and be among the first to experience the future.
                    </p>

                    <div className="cta-buttons flex justify-center gap-6">
                        <button className="btn-primary text-lg px-8 py-3">
                            Join Waitlist
                        </button>
                        <button className="btn-secondary text-lg px-8 py-3">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-12 px-6 border-t border-[var(--color-border-subtle)]">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col items-center justify-center gap-6 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-full flex items-center justify-center shadow-lg">
                                <Shield size={22} color="white" strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-extrabold gradient-text">TradeTournament VT45</span>
                        </div>

                        <p className="text-[var(--color-text-faded)] max-w-md text-center">The next generation trading tournament platform. Coming soon to redefine competitive trading.</p>

                        <div className="flex gap-6 mt-4">
                            <a href="#" className="text-[var(--color-text-faded)] hover:text-[var(--color-primary-end)] transition-colors duration-300 font-medium">Twitter</a>
                            <a href="#" className="text-[var(--color-text-faded)] hover:text-[var(--color-primary-end)] transition-colors duration-300 font-medium">LinkedIn</a>
                            <a href="#" className="text-[var(--color-text-faded)] hover:text-[var(--color-primary-end)] transition-colors duration-300 font-medium">Discord</a>
                            <a href="#" className="text-[var(--color-text-faded)] hover:text-[var(--color-primary-end)] transition-colors duration-300 font-medium">Telegram</a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center w-full pt-8 border-t border-[var(--color-border-subtle)] text-[var(--color-text-faded)] text-sm gap-4">
                        <p>© 2024 TradeTournament VT45. All rights reserved.</p>
                        <p>Designed with <span className="gradient-text">Passion</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default VT45LandingPage;