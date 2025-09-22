import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Trophy, Users, DollarSign, Bot } from 'lucide-react';

const VTA5LandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 23,
    minutes: 59,
    seconds: 29
  });

  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotifyMe = () => {
    console.log('Email registered:', email);
    setEmail('');
  };

  const features = [
    {
      icon: <Trophy size={32} />,
      title: "Elite Tournaments",
      description: "Premium competitions with higher stakes"
    },
    {
      icon: <Shield size={32} />,
      title: "Advanced Security",
      description: "Military-grade encryption and protection"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Pro Analytics",
      description: "Deep market insights and trading analytics"
    },
    {
      icon: <Users size={32} />,
      title: "VIP Community",
      description: "Exclusive access to professional traders"
    },
    {
      icon: <DollarSign size={32} />,
      title: "Higher Rewards",
      description: "Up to 500% returns in premium tournaments"
    },
    {
      icon: <Bot size={32} />,
      title: "AI Assistant",
      description: "Smart trading suggestions and market analysis"
    }
  ];

  const tradingFeatures = [
    "Real-time market data from 50+ exchanges",
    "AI-powered trading suggestions",
    "Advanced charting tools and indicators",
    "One-click order execution",
    "Risk management tools"
  ];

  const metrics = [
    { value: "500%", label: "Max Tournament Returns" },
    { value: "<1ms", label: "Order Execution Speed" },
    { value: "24/7", label: "Global Market Access" },
    { value: "99.99%", label: "Platform Uptime" }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #581c87 0%, #374151 50%, #000000 100%)',
      color: 'white',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      position: 'relative',
      zIndex: 10,
      padding: '1rem 1.5rem'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1280px',
      margin: '0 auto'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoText: {
      fontSize: '1.25rem',
      fontWeight: 'bold'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      '@media (max-width: 7680px)': {
        display: 'none'
      }
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s',
      cursor: 'pointer'
    },
    navButtons: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    signInBtn: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      transition: 'color 0.3s'
    },
    getStartedBtn: {
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1.5rem',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      fontWeight: '500'
    },
    hero: {
      position: 'relative',
      padding: '5rem 1.5rem',
      textAlign: 'center'
    },
    comingSoonBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'rgba(139, 92, 246, 0.3)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      marginBottom: '2rem',
      fontSize: '0.875rem'
    },
    pulseDot: {
      width: '8px',
      height: '8px',
      background: '#a855f7',
      borderRadius: '50%',
      animation: 'pulse 2s infinite'
    },
    heroTitle: {
      fontSize: 'clamp(4rem, 10vw, 8rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(to right, #f472b6, #a855f7, #3b82f6)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    },
    heroDescription: {
      fontSize: '1.125rem',
      color: '#d1d5db',
      maxWidth: '800px',
      margin: '0 auto 3rem auto',
      lineHeight: '1.7'
    },
    countdownContainer: {
      background: 'rgba(31, 41, 55, 0.5)',
      backdropFilter: 'blur(10px)',
      border: '1px solid #374151',
      borderRadius: '1rem',
      padding: '2rem',
      maxWidth: '500px',
      margin: '0 auto 3rem auto'
    },
    countdownTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    },
    countdownGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem'
    },
    countdownItem: {
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      borderRadius: '12px',
      padding: '1rem',
      textAlign: 'center'
    },
    countdownValue: {
      fontSize: '1.875rem',
      fontWeight: 'bold'
    },
    countdownLabel: {
      fontSize: '0.875rem',
      opacity: 0.8
    },
    earlyAccess: {
      position: 'relative',
      padding: '4rem 1.5rem',
      background: 'linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
      backdropFilter: 'blur(10px)',
      textAlign: 'center'
    },
    earlyAccessTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    earlyAccessDescription: {
      color: '#d1d5db',
      marginBottom: '2rem'
    },
    emailForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '400px',
      margin: '0 auto',
      '@media (min-width: 768px)': {
        flexDirection: 'row'
      }
    },
    emailInput: {
      flex: 1,
      padding: '0.75rem 1rem',
      background: 'rgba(31, 41, 55, 0.5)',
      backdropFilter: 'blur(10px)',
      border: '1px solid #4b5563',
      borderRadius: '8px',
      color: 'white',
      outline: 'none',
      transition: 'border-color 0.3s'
    },
    notifyBtn: {
      padding: '0.75rem 2rem',
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'transform 0.2s'
    },
    features: {
      padding: '5rem 1.5rem'
    },
    featuresContainer: {
      maxWidth: '1152px',
      margin: '0 auto'
    },
    featuresHeader: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    featuresTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    featuresDescription: {
      color: '#d1d5db',
      fontSize: '1.125rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    featureCard: {
      background: 'rgba(31, 41, 55, 0.5)',
      backdropFilter: 'blur(10px)',
      border: '1px solid #374151',
      borderRadius: '12px',
      padding: '1.5rem',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    featureIcon: {
      width: '64px',
      height: '64px',
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem'
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    featureDescription: {
      color: '#d1d5db'
    },
    preview: {
      padding: '5rem 1.5rem'
    },
    previewContainer: {
      maxWidth: '1152px',
      margin: '0 auto'
    },
    previewHeader: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    previewGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      alignItems: 'center',
      '@media (min-width: 1024px)': {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    previewTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    },
    previewFeatures: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    previewFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    greenDot: {
      width: '8px',
      height: '8px',
      background: '#4ade80',
      borderRadius: '50%'
    },
    mockInterface: {
      position: 'relative'
    },
    mockContainer: {
      background: 'linear-gradient(to right, #1f2937, #111827)',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid #374151'
    },
    mockGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1rem'
    },
    mockChart1: {
      height: '80px',
      background: 'linear-gradient(to right, #4ade80, #3b82f6)',
      borderRadius: '8px',
      opacity: 0.8
    },
    mockChart2: {
      height: '80px',
      background: 'linear-gradient(to right, #ef4444, #ec4899)',
      borderRadius: '8px',
      opacity: 0.8
    },
    mockMainChart: {
      height: '128px',
      background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
      borderRadius: '8px',
      opacity: 0.6,
      marginBottom: '1rem'
    },
    mockControls: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0.5rem'
    },
    mockControl: {
      height: '32px',
      background: '#4b5563',
      borderRadius: '4px',
      opacity: 0.6
    },
    mockGlow: {
      position: 'absolute',
      inset: '-16px',
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      borderRadius: '12px',
      opacity: 0.2,
      filter: 'blur(20px)',
      zIndex: -1
    },
    metrics: {
      padding: '5rem 1.5rem'
    },
    metricsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      maxWidth: '1152px',
      margin: '0 auto'
    },
    metricCard: {
      background: 'rgba(31, 41, 55, 0.5)',
      backdropFilter: 'blur(10px)',
      border: '1px solid #374151',
      borderRadius: '12px',
      padding: '1.5rem',
      textAlign: 'center'
    },
    metricValue: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #f472b6, #a855f7)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      marginBottom: '0.5rem'
    },
    metricLabel: {
      color: '#d1d5db'
    },
    cta: {
      padding: '5rem 1.5rem',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    },
    ctaDescription: {
      fontSize: '1.125rem',
      color: '#d1d5db',
      marginBottom: '2rem'
    },
    ctaButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      justifyContent: 'center',
      '@media (min-width: 640px)': {
        flexDirection: 'row'
      }
    },
    ctaPrimary: {
      padding: '1rem 2rem',
      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '1.125rem',
      transition: 'transform 0.2s'
    },
    ctaSecondary: {
      padding: '1rem 2rem',
      border: '1px solid #8b5cf6',
      color: '#a855f7',
      background: 'transparent',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '1.125rem',
      transition: 'all 0.3s'
    },
    footer: {
      padding: '3rem 1.5rem',
      borderTop: '1px solid #1f2937'
    },
    footerContainer: {
      maxWidth: '1152px',
      margin: '0 auto'
    },
    footerContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '1rem'
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    footerDescription: {
      color: '#9ca3af'
    },
    footerLinks: {
      display: 'flex',
      gap: '1.5rem',
      marginTop: '1.5rem'
    },
    footerLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      transition: 'color 0.3s',
      cursor: 'pointer'
    },
    footerBottom: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingTop: '2rem',
      borderTop: '1px solid #1f2937',
      color: '#9ca3af',
      fontSize: '0.875rem',
      gap: '1rem',
      '@media (min-width: 640px)': {
        flexDirection: 'row'
      }
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          .email-input:focus {
            border-color: #8b5cf6;
          }
          
          .btn-hover:hover {
            transform: scale(1.05);
          }
          
          .nav-link:hover {
            color: #a855f7;
          }
          
          .feature-card:hover {
            background: rgba(31, 41, 55, 0.7);
            transform: scale(1.05);
          }
          
          .cta-secondary:hover {
            background: #8b5cf6;
            color: white;
          }
          
          .footer-link:hover {
            color: white;
          }
          
          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            
            .email-form {
              flex-direction: column;
            }
            
            .preview-grid {
              grid-template-columns: 1fr;
            }
            
            .cta-buttons {
              flex-direction: column;
            }
            
            .footer-bottom {
              flex-direction: column;
            }
          }
          
          @media (min-width: 768px) {
            .email-form {
              flex-direction: row;
            }
          }
          
          @media (min-width: 1024px) {
            .preview-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
          
          @media (min-width: 640px) {
            .cta-buttons {
              flex-direction: row;
            }
            
            .footer-bottom {
              flex-direction: row;
            }
          }
        `}
      </style>
      
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Shield size={24} color="white" />
            </div>
            <span style={styles.logoText}>TradeTournament</span>
          </div>
          
          <div className="nav-links" style={styles.navLinks}>
            <a href="#" className="nav-link" style={styles.navLink}>Home</a>
            <a href="#" className="nav-link" style={styles.navLink}>VTA5 Launch</a>
            <a href="#" className="nav-link" style={styles.navLink}>About</a>
          </div>
          
          <div style={styles.navButtons}>
            <button className="nav-link" style={styles.signInBtn}>Sign In</button>
            <button className="btn-hover" style={styles.getStartedBtn}>
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.comingSoonBadge}>
          <span style={styles.pulseDot}></span>
          <span>Coming Soon</span>
        </div>
        
        <h1 style={styles.heroTitle}>VTA5</h1>
        
        <h2 style={styles.heroSubtitle}>
          The Future of Trading Tournaments
        </h2>
        
        <p style={styles.heroDescription}>
          Experience the next generation of competitive trading with advanced AI analytics,
          premium tournaments, and unprecedented rewards. VTA5 takes trading competitions
          to a whole new level.
        </p>

        {/* Countdown */}
        <div style={styles.countdownContainer}>
          <h3 style={styles.countdownTitle}>Launch Countdown</h3>
          <div style={styles.countdownGrid}>
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <div key={index} style={styles.countdownItem}>
                <div style={styles.countdownValue}>{item.value.toString().padStart(2, '0')}</div>
                <div style={styles.countdownLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section style={styles.earlyAccess}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <h3 style={styles.earlyAccessTitle}>Get Early Access</h3>
          <p style={styles.earlyAccessDescription}>Be the first to know when VTA5 launches and get exclusive beta access</p>
          
          <div className="email-form" style={styles.emailForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="email-input"
              style={styles.emailInput}
            />
            <button
              onClick={handleNotifyMe}
              className="btn-hover"
              style={styles.notifyBtn}
            >
              Notify Me
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featuresContainer}>
          <div style={styles.featuresHeader}>
            <h3 style={styles.featuresTitle}>What's New in VTA5?</h3>
            <p style={styles.featuresDescription}>Revolutionary features that will transform your trading tournament experience</p>
          </div>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={styles.featureCard}>
                <div style={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h4 style={styles.featureTitle}>{feature.title}</h4>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section style={styles.preview}>
        <div style={styles.previewContainer}>
          <div style={styles.previewHeader}>
            <h3 style={styles.featuresTitle}>Platform Preview</h3>
            <p style={styles.featuresDescription}>Get a sneak peek at the VTA5 interface</p>
          </div>
          
          <div className="preview-grid" style={styles.previewGrid}>
            <div>
              <h4 style={styles.previewTitle}>Advanced Trading Interface</h4>
              <div style={styles.previewFeatures}>
                {tradingFeatures.map((feature, index) => (
                  <div key={index} style={styles.previewFeature}>
                    <div style={styles.greenDot}></div>
                    <span style={{ color: '#d1d5db' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={styles.mockInterface}>
              <div style={styles.mockContainer}>
                <div style={styles.mockGrid}>
                  <div style={styles.mockChart1}></div>
                  <div style={styles.mockChart2}></div>
                </div>
                <div style={styles.mockMainChart}></div>
                <div style={styles.mockControls}>
                  <div style={styles.mockControl}></div>
                  <div style={styles.mockControl}></div>
                  <div style={styles.mockControl}></div>
                </div>
              </div>
              <div style={styles.mockGlow}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section style={styles.metrics}>
        <div style={styles.previewContainer}>
          <div style={styles.previewHeader}>
            <h3 style={styles.featuresTitle}>Expected Performance Metrics</h3>
          </div>
          
          <div style={styles.metricsGrid}>
            {metrics.map((metric, index) => (
              <div key={index} style={styles.metricCard}>
                <div style={styles.metricValue}>
                  {metric.value}
                </div>
                <div style={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <h3 style={styles.ctaTitle}>Ready for the Future of Trading?</h3>
          <p style={styles.ctaDescription}>
            VTA5 will revolutionize competitive trading. Join the waitlist and be among the first to experience the future.
          </p>
          
          <div className="cta-buttons" style={styles.ctaButtons}>
            <button className="btn-hover" style={styles.ctaPrimary}>
              Join Waitlist
            </button>
            <button className="cta-secondary" style={styles.ctaSecondary}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerContent}>
            <div style={styles.footerLogo}>
              <div style={styles.logoIcon}>
                <Shield size={24} color="white" />
              </div>
              <span style={styles.logoText}>TradeTournament VTA5</span>
            </div>
            
            <p style={styles.footerDescription}>The next generation trading tournament platform. Coming soon.</p>
            
            <div style={styles.footerLinks}>
              <a href="#" className="footer-link" style={styles.footerLink}>Twitter</a>
              <a href="#" className="footer-link" style={styles.footerLink}>LinkedIn</a>
              <a href="#" className="footer-link" style={styles.footerLink}>Discord</a>
              <a href="#" className="footer-link" style={styles.footerLink}>Telegram</a>
            </div>
            
            <div className="footer-bottom" style={styles.footerBottom}>
              <p>© 2024 TradeTournament VTA5. All rights reserved.</p>
              <p>Made with Readdy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VTA5LandingPage;