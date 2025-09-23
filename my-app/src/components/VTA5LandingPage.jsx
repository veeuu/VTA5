import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Trophy, Users, DollarSign, Bot, CheckCircle } from 'lucide-react';

const VTA5LandingPage = () => {
    const [registeredUsers, setRegisteredUsers] = useState(15340); // Initial number of users
    const [email, setEmail] = useState('');

    // Effect for the dynamic registered user count
    useEffect(() => {
        const userCountInterval = setInterval(() => {
            setRegisteredUsers(prev => prev + Math.floor(Math.random() * 3) + 2); // Increase by 2-4 users
        }, 10000); // Every 10 seconds

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

    return (
        <div className="vta5-container">
            {/* Global Styles */}
            <style jsx global>{`
                :root {
                    --color-primary-start: #ec4899; /* Pink */
                    --color-primary-end: #8b5cf6; /* Purple */
                    --color-secondary: #a855f7; /* Lighter Purple */
                    --color-gradient-text-start: #f472b6;
                    --color-gradient-text-mid: #a855f7;
                    --color-gradient-text-end: #3b82f6;
                    --color-dark-bg-start: #581c87;
                    --color-dark-bg-mid: #374151;
                    --color-dark-bg-end: #000000;
                    --color-card-bg: rgba(31, 41, 55, 0.5);
                    --color-card-border: #374151;
                    --color-text-light: #d1d5db;
                    --color-text-faded: #9ca3af;
                }

                html, body {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                *, *::before, *::after {
                    box-sizing: inherit;
                }

                body {
                    font-family: 'Inter', sans-serif; /* Using a more modern font */
                    background: linear-gradient(135deg, var(--color-dark-bg-start) 0%, var(--color-dark-bg-mid) 50%, var(--color-dark-bg-end) 100%);
                    color: white;
                    min-height: 100vh;
                    overflow-x: hidden;
                }

                .vta5-container {
                    width: 100%; /* Ensure full width */
                    overflow: hidden;
                }

                /* Keyframe Animations */
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
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
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .btn-primary:hover {
                    transform: translateY(-2px) scale(1.02);
                    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
                }

                .btn-secondary {
                    border: 1px solid var(--color-primary-end);
                    color: var(--color-secondary);
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
                }

                .input-field {
                    flex: 1;
                    padding: 0.75rem 1rem;
                    background: rgba(31, 41, 55, 0.5);
                    backdrop-filter: blur(10px);
                    border: 1px solid #4b5563;
                    border-radius: 8px;
                    color: white;
                    outline: none;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                }

                .input-field::placeholder {
                    color: var(--color-text-faded);
                }

                .input-field:focus {
                    border-color: var(--color-primary-end);
                    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
                }

                .card-glass {
                    background: var(--color-card-bg);
                    backdrop-filter: blur(10px);
                    border: 1px solid var(--color-card-border);
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }

                .card-glass:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
                }

                /* Utility Classes */
                .max-w-screen-xl { max-width: 1280px; margin: 0 auto; }
                .text-center { text-align: center; }
                .flex { display: flex; }
                .items-center { align-items: center; }
                .justify-between { justify-content: space-between; }
                .gap-4 { gap: 1rem; }
                .gap-8 { gap: 2rem; }
                .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
                .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
                .py-24 { padding-top: 6rem; padding-bottom: 6rem; }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .nav-links { display: none; }
                    .hero-title { font-size: 3rem !important; line-height: 1.1; }
                    .hero-subtitle { font-size: 1.8rem !important; }
                    .email-form { flex-direction: column; }
                    .preview-grid { grid-template-columns: 1fr; }
                    .cta-buttons { flex-direction: column; }
                    .footer-content { flex-direction: column; text-align: center; }
                    .footer-links { margin-top: 1rem; }
                    .footer-bottom { flex-direction: column; gap: 0.5rem; }
                }

                @media (min-width: 768px) {
                    .email-form { flex-direction: row; }
                    .features-grid { grid-template-columns: repeat(2, 1fr); }
                    .metrics-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (min-width: 1024px) {
                    .features-grid { grid-template-columns: repeat(3, 1fr); }
                    .preview-grid { grid-template-columns: 1fr 1fr; }
                    .metrics-grid { grid-template-columns: repeat(4, 1fr); }
                }
            `}</style>

            {/* Header */}
            <header className="py-4 px-6 relative z-10">
                <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-lg flex items-center justify-center">
                            <Shield size={24} color="white" />
                        </div>
                        <span className="text-xl font-bold">TradeTournament</span>
                    </div>

                    <div className="nav-links flex items-center gap-8">
                        <a href="#" className="text-white hover:text-[var(--color-secondary)] transition-colors duration-300">Home</a>
                        <a href="#" className="text-white hover:text-[var(--color-secondary)] transition-colors duration-300">VTA5 Launch</a>
                        <a href="#" className="text-white hover:text-[var(--color-secondary)] transition-colors duration-300">About</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-white hover:text-[var(--color-secondary)] transition-colors duration-300 bg-transparent border-none cursor-pointer">Sign In</button>
                        <button className="btn-primary px-6 py-2">
                            Get Started
                        </button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="text-center py-24 px-6 relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto animate-fadeIn">
                    <div className="inline-flex items-center gap-2 bg-[rgba(139,92,246,0.2)] backdrop-blur-md border border-[rgba(139,92,246,0.3)] px-4 py-2 rounded-full mb-8 text-sm">
                        <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-pulse"></span>
                        <span>The Future is Here</span>
                    </div>

                    <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 gradient-text" style={{ lineHeight: '1.1' }}>VTA5</h1>

                    <h2 className="hero-subtitle text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        The Next Generation of Trading Tournaments
                    </h2>

                    <p className="text-lg text-[var(--color-text-light)] max-w-3xl mx-auto mb-12 leading-relaxed">
                        Experience the next generation of competitive trading with advanced AI analytics,
                        premium tournaments, and unprecedented rewards. VTA5 takes trading competitions
                        to a whole new level.
                    </p>

                    {/* Registered Users */}
                    <div className="card-glass p-8 max-w-md mx-auto mb-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        <h3 className="text-2xl font-bold mb-6 text-white">Join Thousands of Traders!</h3>
                        <div className="text-center">
                            <div className="text-6xl font-extrabold gradient-text mb-2">
                                {registeredUsers.toLocaleString()}
                            </div>
                            <div className="text-xl opacity-80">Registered Traders</div>
                        </div>
                        <p className="text-sm text-[var(--color-text-faded)] mt-4">Counting up in real-time. Don't miss out!</p>
                    </div>
                </div>
            </section>

            {/* Early Access Section */}
            <section className="py-24 px-6 text-center bg-gradient-to-r from-[rgba(139,92,246,0.1)] to-[rgba(59,130,246,0.1)] backdrop-blur-md relative z-10">
                <div className="max-w-screen-xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <h3 className="text-3xl font-bold mb-4">Get Early Access & Exclusive Updates</h3>
                    <p className="text-lg text-[var(--color-text-light)] max-w-2xl mx-auto mb-10">
                        Be the first to know when VTA5 launches and get exclusive beta access.
                    </p>

                    <div className="email-form flex gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="input-field"
                        />
                        <button
                            onClick={handleNotifyMe}
                            className="btn-primary"
                        >
                            Notify Me
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6">
                <div className="max-w-screen-xl mx-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-4">What's New in VTA5?</h3>
                        <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
                            Revolutionary features that will transform your trading tournament experience.
                        </p>
                    </div>

                    <div className="features-grid grid gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card-glass p-6 text-center hover:shadow-lg hover:border-[var(--color-primary-end)]" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-xl flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                <p className="text-[var(--color-text-light)]">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Preview */}
            <section className="py-24 px-6">
                <div className="max-w-screen-xl mx-auto animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-4">Platform Preview</h3>
                        <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">Get a sneak peek at the intuitive and powerful VTA5 interface.</p>
                    </div>

                    <div className="preview-grid grid gap-12 items-center">
                        <div>
                            <h4 className="text-3xl font-bold mb-6">Advanced Trading Interface</h4>
                            <div className="flex flex-col gap-4">
                                {tradingFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle size={20} color="#4ade80" />
                                        <span className="text-lg text-[var(--color-text-light)]">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative p-4">
                            {/* Mock Interface Container */}
                            <div className="card-glass p-6 border-[var(--color-card-border)] relative z-10 shadow-xl">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="h-20 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] rounded-lg opacity-80"></div>
                                    <div className="h-20 bg-gradient-to-r from-[#ef4444] to-[#ec4899] rounded-lg opacity-80"></div>
                                </div>
                                <div className="h-32 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] rounded-lg opacity-60 mb-4"></div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="h-8 bg-[#4b5563] rounded-md opacity-60"></div>
                                    <div className="h-8 bg-[#4b5563] rounded-md opacity-60"></div>
                                    <div className="h-8 bg-[#4b5563] rounded-md opacity-60"></div>
                                </div>
                            </div>
                            {/* Subtle Glow Effect */}
                            <div className="absolute inset-[-16px] bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-xl opacity-20 blur-xl z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-24 px-6">
                <div className="max-w-screen-xl mx-auto animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-4">Unmatched Performance & Reliability</h3>
                        <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
                            Our platform is engineered for speed, security, and global accessibility.
                        </p>
                    </div>

                    <div className="metrics-grid grid gap-8">
                        {metrics.map((metric, index) => (
                            <div key={index} className="card-glass p-6 text-center hover:shadow-lg" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                                <div className="text-5xl font-extrabold gradient-text mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-lg text-[var(--color-text-light)]">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-screen-xl mx-auto animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                    <h3 className="text-4xl font-bold mb-6">Ready for the Future of Trading?</h3>
                    <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto mb-12">
                        VTA5 will revolutionize competitive trading. Join the waitlist and be among the first to experience the future.
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
            <footer className="py-12 px-6 border-t border-[#1f2937]">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col items-center justify-center gap-6 mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-lg flex items-center justify-center">
                                <Shield size={24} color="white" />
                            </div>
                            <span className="text-xl font-bold">TradeTournament VTA5</span>
                        </div>

                        <p className="text-[var(--color-text-faded)] max-w-md">The next generation trading tournament platform. Coming soon to redefine competitive trading.</p>

                        <div className="flex gap-6 mt-4">
                            <a href="#" className="text-[var(--color-text-faded)] hover:text-white transition-colors duration-300">Twitter</a>
                            <a href="#" className="text-[var(--color-text-faded)] hover:text-white transition-colors duration-300">LinkedIn</a>
                            <a href="#" className="text-[var(--color-text-faded)] hover:text-white transition-colors duration-300">Discord</a>
                            <a href="#" className="text-[var(--color-text-faded)] hover:text-white transition-colors duration-300">Telegram</a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center w-full pt-8 border-t border-[#1f2937] text-[var(--color-text-faded)] text-sm gap-4">
                        <p>© 2024 TradeTournament VTA5. All rights reserved.</p>
                        <p>Designed with <span className="gradient-text">Passion</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default VTA5LandingPage;