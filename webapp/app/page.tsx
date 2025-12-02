'use client';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/*====== Required meta tags ======*/}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="FullCircle connects neighbours and helpers to get everyday tasks done - errands, companionship, odd jobs and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/*====== Title ======*/}
        <title>FullCircle - Local Helping Network</title>

        {/*====== Favicon Icon ======*/}
        <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/png" />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E99RMTBYZB"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-E99RMTBYZB');
          `
        }}></script>
      </Head>

      <style jsx global>{`
        :root {
          --teal-900-rgb: rgb(0, 61, 56);
          --teal-900: #003d38;
          --teal-700: #0ea39a;
          --teal-500: #14b8a6;
          --teal-300: #6ee7d8;
          --glass-tinted-bg: rgba(14, 163, 154, 0.45);
          --glass-bg: rgba(255, 255, 255, 0.45);
          --glass-border: rgba(255, 255, 255, 0.6);
          --glass-blur: 10px;
          --star-color: #ffc107;
          --star-inactive-color: #ddd;
        }

        /* Liquid glass effect for containers */
        .liquid-glass {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.08);
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .liquid-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05) 70%);
          pointer-events: none;
          border-radius: 16px;
        }

        /* Material You style buttons - overriding default .btn styles */
        .btn,
        .primary-btn,
        .btn-primary {
          background: var(--teal-500);
          border: none;
          border-radius: 8px !important;
          color: white;
          padding: 12px 24px;
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          z-index: 1;
          display: inline-block;
          text-decoration: none;
        }

        .btn:hover,
        .primary-btn:hover,
        .primary-btn:focus,
        .btn-primary:hover,
        .btn-primary:focus {
          background: var(--teal-700);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18), 0 2px 4px rgba(0, 0, 0, 0.22);
          transform: translateY(-2px);
          text-decoration: none;
          color: white;
        }

        /* WhatsApp quick message button following Material You standards */
        .whatsapp-btn {
          background: var(--teal-300);
          /* official WhatsApp dark green */
          border: none;
          border-radius: 8px !important;
          color: var(--teal-900);
          padding: 12px 24px;
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .whatsapp-btn i {
          font-size: 18px;
          line-height: 1;
          color: var(--teal-900);
        }

        /* Force icon color white inside the WhatsApp CTA to override template rules */
        .whatsapp-btn i,
        .whatsapp-btn .lni,
        .whatsapp-btn svg {
          color: var(--teal-900) !important;
        }

        .whatsapp-btn:hover,
        .whatsapp-btn:focus {
          background: #054C45;
          /* darker shade of WhatsApp green for consistency */
          text-decoration: none;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18), 0 2px 4px rgba(0, 0, 0, 0.22);
          transform: translateY(-2px);
        }
        .whatsapp-btn:hover i,
        .whatsapp-btn:hover .lni,
        .whatsapp-btn:hover svg {
          color: var(--white) !important;
        }

        /* Liquid glass service cards */
        .single-services {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.08);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .single-services::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05) 70%);
          pointer-events: none;
          border-radius: 16px;
        }

        .single-services:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px 0 rgba(31, 38, 135, 0.15);
          border-color: rgba(20, 184, 166, 0.3);
        }

        .service-icon {
          /* background: linear-gradient(135deg, var(--teal-700), var(--teal-500)) !important; */
          color: white;
          border-radius: 12px;
          position: relative;
          z-index: 1;
          min-height: 48px;
          /* reduced from 60px */
          width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
        }

        /* icon sizing inside service-icon - prefer CSS over inline styles */
        .service-icon i,
        .service-icon svg {
          font-size: 32px;
          /* width: 20px;
          height: 20px; */
        }

        .service-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Liquid glass contact items */
        .contact-item {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.08);
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .contact-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05) 70%);
          pointer-events: none;
          border-radius: 16px;
        }

        /* Liquid glass footer */
        .footer-widget {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.08);
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .footer-widget::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05) 70%);
          pointer-events: none;
          border-radius: 16px;
        }

        /* Liquid glass form elements */
        .form-control {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: var(--teal-900);
        }

        .form-control:focus {
          border-color: var(--teal-500);
          box-shadow: 0 0 0 0.2rem rgba(20, 184, 166, 0.25);
          background: var(--glass-bg);
        }

        /* Text elements */
        .lni,
        .text-primary {
          color: var(--teal-500) !important;
        }

        .section-title-five .content h2,
        .section-title-five .content h6 {
          color: var(--teal-900);
        }

        /* Text inside glass elements */
        .liquid-glass *,
        .single-services *,
        .contact-item *,
        .footer-widget *,
        .sidebar-content * {
          color: var(--teal-900);
        }

        /* Consistent card sizing for services section */
        .services .container .row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          /* tighter gap */
        }

        .services .single-services {
          height: 100%;
          min-height: 160px;
          /* reduced more to make cards noticeably smaller */
          display: flex;
          flex-direction: column;
          padding: 10px;
          /* tighter padding */
        }

        /* subtle entrance animation and polished transitions */
        .single-services {
          opacity: 0;
          transform: translateY(6px);
          animation: fadeInUp .36s ease forwards;
          transition: transform .18s ease, box-shadow .18s ease, opacity .18s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Avoid motion for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .single-services {
            animation: none;
            transition: none;
          }
        }

        /* Hover effects only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
          .single-services:hover {
            transform: translateY(-6px);
          }
        }

        /* On very small screens reduce height and tighten spacing further */
        @media (max-width: 576px) {
          .services .single-services {
            min-height: 130px;
            padding: 8px;
          }

          .service-icon {
            min-height: 40px;
            width: 40px;
          }

          .service-icon i,
          .service-icon svg {
            font-size: 32px;
            /* width: 18px;
            height: 18px; */
          }

          /* tighter spacing and touch feedback on small screens */
          .single-services {
            margin-bottom: 6px;
          }

          .single-services:active {
            transform: translateY(-2px) scale(0.995);
          }
        }

        /* reduce text sizes inside the small cards */
        .single-services .service-content h4 {
          font-size: 1rem;
          margin-bottom: 6px;
        }

        .single-services .service-content p {
          font-size: 0.9rem;
          line-height: 1.2;
          margin: 0;
        }

        .services .service-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Consistent card sizing for contact items */
        .contact-item-wrapper .row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .contact-item {
          height: 100%;
          min-height: 120px;
          display: flex;
          flex-direction: column;
        }

        /* Override any default blue colors in the template */
        .btn-outline-primary {
          color: var(--teal-500);
          border-color: var(--teal-500);
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
        }

        .btn-outline-primary:hover {
          background: var(--teal-500);
          color: white;
        }

        /* Liquid glass scroll-top button */
        .scroll-top {
          background: var(--glass-tinted-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.12);
        }

        .scroll-top::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05) 70%);
          pointer-events: none;
          border-radius: 50%;
          color: var(--white);
        }

        .scroll-top:hover {
          background: var(--glass-bg);
          transform: translateY(-3px);
          border-color: var(--teal-500);
          color: var(--teal-500);
        }

        .scroll-top i {
          color: var(--teal-500);
          font-size: 20px;
          position: relative;
          z-index: 1;
        }

        a,
        .nav-link {
          color: var(--teal-500);
        }

        a:hover,
        .nav-link:hover {
          color: var(--teal-700);
        }

        /* Navbar styling - initially transparent or with light background */
        .navbar-nine {
          background: transparent;
          color: white;
          transition: all 0.4s ease;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        /* Teal background when at top and not scrolled */
        .navbar-nine:not(.scrolled) {
          background: var(--teal-700);
          color: white;
        }

        /* Liquid glass effect when scrolled */
        .navbar-nine.scrolled {
          background: var(--glass-tinted-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--teal-300);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          position: relative;
          overflow: hidden;
          color: var(--teal-900);
        }

        .navbar-nine.scrolled::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(20, 184, 166, 0.05) 70%);
          pointer-events: none;
        }

        .navbar-nav .nav-link {
          color: rgba(255, 255, 255, 0.85) !important;
          transition: color 0.3s ease;
        }

        .navbar-nav .nav-link:hover {
          color: white !important;
        }

        .navbar-nine.scrolled .navbar-nav .nav-link {
          color: var(--teal-900) !important;
        }

        .navbar-nine.scrolled .navbar-nav .nav-link:hover {
          color: var(--teal-700) !important;
        }

        /* Sidebar with liquid glass effect */
        .sidebar-content {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border-radius: 16px;
          border: 1px solid var(--glass-border);
          box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.08);
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .sidebar-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05) 70%);
          pointer-events: none;
          border-radius: 16px;
        }

        /* ===== Vertical Timeline Styles ===== */
        .timeline-wrapper {
          position: relative;
          padding: 20px 0;
        }

        /* Center vertical line */
        .timeline-wrapper::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 28px;
          bottom: 28px;
          width: 3px;
          background: linear-gradient(180deg, var(--teal-500), var(--teal-700));
          border-radius: 2px;
        }

        .timeline-item {
          margin-bottom: 40px;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        /* Remove bottom margin from last item */
        .timeline-item:last-child {
          margin-bottom: 0;
        }

        /* Alternating left-right layout */
        .timeline-item:nth-child(odd) {
          flex-direction: row;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          flex-shrink: 0;
        }

        .step-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--teal-700), var(--teal-500));
          border: 4px solid white;
          border-radius: 50%;
          font-size: 24px;
          font-weight: bold;
          color: white;
          box-shadow: 0 4px 16px rgba(14, 163, 154, 0.3);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .step-number {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(14, 163, 154, 0.5);
        }

        .timeline-content {
          width: calc(50% - 40px);
          display: flex;
          flex-direction: column;
        }

        .timeline-card {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.08);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05) 70%);
          pointer-events: none;
          border-radius: 12px;
        }

        .timeline-item:hover .timeline-card {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px 0 rgba(31, 38, 135, 0.15);
          border-color: rgba(20, 184, 166, 0.3);
        }

        .timeline-card h4 {
          color: var(--teal-900);
          margin-bottom: 8px;
          font-weight: 700;
          font-size: 1.1rem;
          position: relative;
          z-index: 1;
        }

        .timeline-card p {
          color: var(--teal-900);
          margin-bottom: 12px;
          font-size: 0.95rem;
          position: relative;
          z-index: 1;
          line-height: 1.5;
        }

        .timeline-description {
          color: rgba(0, 61, 56, 0.75) !important;
          font-size: 0.9rem;
        }

        .timeline-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--teal-500);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .timeline-link:hover {
          color: var(--teal-700);
          gap: 12px;
        }

        .timeline-link i {
          font-size: 18px;
        }

        /* Mobile responsive - stack timeline vertically */
        @media (max-width: 992px) {
          .timeline-wrapper::before {
            left: 20px;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            flex-direction: column !important;
          }

          .timeline-marker {
            left: 20px;
            /* transform: translateX(-50%); */
          }

          .timeline-content {
            width: calc(100% - 80px);
            margin-left: 80px;
            box-sizing: border-box;
          }

          /* hide any accidental horizontal overflow inside the timeline on small screens */
          .timeline-wrapper {
            overflow-x: hidden;
          }

          .step-number {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }

        @media (max-width: 576px) {
          .timeline-wrapper {
            padding: 10px 0;
          }

          .timeline-item {
            margin-bottom: 32px;
          }

          .timeline-wrapper::before {
            left: 16px;
          }

          .timeline-marker {
            left: 16px;
          }

          /* Make sure timeline content fits within viewport on very small screens */
          .timeline-content {
            width: calc(100% - 72px);
            margin-left: 72px;
            box-sizing: border-box;
          }

          .timeline-card {
            padding: 16px;
          }

          .timeline-card h4 {
            font-size: 1rem;
          }

          .timeline-card p {
            font-size: 0.85rem;
          }

          .step-number {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }

        /* Floating WhatsApp Button Styles */
        .floating-whatsapp-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #25D366;
          /* WhatsApp green color */
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          transition: all 0.3s ease;
          opacity: 1;
          transform: translateY(0);
          border: none;
          cursor: pointer;
          text-decoration: none;
        }

        .floating-whatsapp-btn i {
          font-size: 28px;
          color: white !important;
        }

        .floating-whatsapp-btn:hover {
          background-color: #128C7E;
          /* Darker WhatsApp green on hover */
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        /* Hidden state for the floating button */
        .floating-whatsapp-btn.hidden {
          opacity: 0;
          transform: translateY(20px);
          visibility: hidden;
        }

        /* Star Rating CSS */
        .rating-section {
          text-align: center;
          margin: 15px 0;
        }

        .star-rating {
          display: inline-flex;
          flex-direction: row-reverse;
          justify-content: flex-end;
        }

        .star-rating input[type="radio"] {
          display: none;
        }

        .star-rating label {
          color: var(--star-inactive-color);
          font-size: 2.5rem;
          padding: 0 0.2rem;
          cursor: pointer;
          transition: color 0.2s;
          line-height: 1;
        }

        .star-rating label:hover,
        .star-rating label:hover ~ label,
        .star-rating input[type="radio"]:checked ~ label {
          color: var(--star-color);
        }
      `}</style>

      <div>
        {/*====== NAVBAR NINE PART START ======*/}

        <section className="navbar-area navbar-nine">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="#hero-area" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <img style={{width:'48px'}} src="/assets/images/logo-dark.png" alt="#" />
                    <span style={{color:'white'}}>FullCircle</span>
                  </a>
                  <button className="navbar-toggler hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
                    aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarNine">
                    <ul className="navbar-nav me-auto">
                      <li className="nav-item">
                        <a className="page-scroll active" href="#hero-area">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#get-started">Get Started</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#services">Services</a>
                      </li>
                    </ul>
                  </div>

                  <div className="navbar-btn d-none d-lg-inline-block hidden">
                    <a className="menu-bar" href="#side-menu-left"><i className="lni lni-menu"></i></a>
                  </div>
                </nav>
                {/* navbar */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
        </section>

        {/*====== NAVBAR NINE PART ENDS ======*/}

        {/*====== SIDEBAR PART START ======*/}

        <div className="sidebar-left">
          <div className="sidebar-close">
            <a className="close" href="#close"><i className="lni lni-close"></i></a>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-logo">
              <a href="#home">
                <span
                  style={{display:'inline-grid',placeItems:'center',width:'40px',height:'40px',borderRadius:'10px',background:'var(--teal-700)',color:'white',fontWeight:'800',fontSize:'16px'}}>FC</span>
                <div style={{color:'var(--teal-900)', fontWeight:'700', marginTop:'8px'}}>FullCircle</div>
              </a>
            </div>
            <p className="text">Connecting neighbors and helpers for everyday tasks - errands, companionship, odd jobs and more.
            </p>
            {/* logo */}
            <div className="sidebar-menu">
              <h5 className="menu-title">Quick Links</h5>
              <ul>
                <li><a href="#how" className="nav-link">How it works</a></li>
                <li><a href="#services" className="nav-link">Services</a></li>
                <li><a href="#contact" className="nav-link">Contact Us</a></li>
              </ul>
            </div>
            {/* menu */}
            <div className="sidebar-social align-items-center justify-content-center">
              <h5 className="social-title">Follow Us On</h5>
              <ul>
                <li>
                  <a href="https://wa.me/919121346777" target="_blank"><i className="lni lni-whatsapp"></i></a>
                </li>
                <li>
                  <a href="javascript:void(0)"><i className="lni lni-phone"></i></a>
                </li>
              </ul>
            </div>
            {/* sidebar social */}
          </div>
          {/* content */}
        </div>
        <div className="overlay-left"></div>

        {/*====== SIDEBAR PART ENDS ======*/}

        {/* Start header Area */}
        <section id="hero-area" className="header-area header-eight">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="header-content">
                  <h1>To make everyday work accessible to everyone</h1>
                  <p>
                    Book short tasks help from trusted local helpers: errands, elderly support, deliveries, housekeeping and
                    more - managed over WhatsApp and phone.
                  </p>
                  <div className="button">
                    <div className="d-flex flex-column flex-md-row gap-3 align-items-center justify-content-center">
                      <a href="#get-started" className="btn primary-btn page-scroll w-100 w-md-auto">Get Started</a>
                      <a href="https://wa.me/919121346777" id="banner-whatsapp-button" className="whatsapp-btn w-100 w-md-auto d-flex align-items-center justify-content-center" target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp">
                        <i className="lni lni-whatsapp"></i>Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="header-image">
                  <img src="/assets/images/helper.jpeg" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End header Area */}

        {/* ===== feature section start ===== */}
        <section className="services-area services-eight">
          {/*======  Start Section Title Five ======*/}
          <div className="section-title-five">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="content">
                    <h2 className="fw-bold">Why Choose FullCircle</h2>
                  </div>
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/*======  End Section Title Five ======*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-user"></i>
                  </div>
                  <div className="service-content">
                    <h4>Trusted &amp; Verified Helpers</h4>
                    <p>Helpers are profile-checked, rated by neighbors, and locally referenced for peace of mind.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-shield"></i>
                  </div>
                  <div className="service-content">
                    <h4>Safety-First Approach</h4>
                    <p>We prioritize safety with clear guidelines, secure handoffs, and responsive support if issues arise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-whatsapp"></i>
                  </div>
                  <div className="service-content">
                    <h4>Quick Response on WhatsApp</h4>
                    <p>Message us directly on WhatsApp for fast matches and real-time coordination—no new app needed.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-wallet"></i>
                  </div>
                  <div className="service-content">
                    <h4>Simple Pricing</h4>
                    <p>Transparent, easy-to-understand pricing so you know the cost up front—no surprises.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-users"></i>
                  </div>
                  <div className="service-content">
                    <h4>Community-Driven Service</h4>
                    <p>Local helpers and neighbors shape our network—repeat bookings and local referrals build trust.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== feature section end ===== */}

        {/* ===== How to Get Started section start ===== */}
        <section id="get-started" className="services-area services-eight">
          {/*======  Start Section Title Five ======*/}
          <div className="section-title-five">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="content">
                    <h2 className="fw-bold">How to Get Started</h2>
                    <p>Simple steps to connect with our helpers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*======  End Section Title Five ======*/}

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Vertical Timeline */}
                <div className="timeline-wrapper">
                  {/* Step 1 */}
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <span className="step-number">1</span>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-card">
                        <h4>Save the Number</h4>
                        <p><a href="tel:+919121346777"><strong>+91 91213 46777</strong></a></p>
                        <p className="timeline-description">Add our WhatsApp number to your contacts for quick access.</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <span className="step-number">2</span>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-card">
                        <h4>Send "Hi" on WhatsApp</h4>
                        <p className="timeline-description">Start a conversation with us. We'll respond quickly and guide you
                          through the next steps.</p>
                        <a href="https://wa.me/919121346777" className="timeline-link" target="_blank">
                          <i className="lni lni-whatsapp"></i> Open WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <span className="step-number">3</span>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-card">
                        <h4>Browse Our Service Catalogue</h4>
                        <p className="timeline-description">Explore the range of services we offer. From errands to companionship,
                          find what you need.</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <span className="step-number">4</span>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-card">
                        <h4>Call Us Directly for Help</h4>
                        <p><a href="tel:+919121346777"><strong>+91 91213 46777</strong></a></p>
                        <p className="timeline-description">Prefer to talk? Call us anytime for personalized assistance and quick
                          support.</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <span className="step-number">5</span>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-card">
                        <h4>Confirm the Task & Get Helper Assigned</h4>
                        <p className="timeline-description">Tell us the details of your task. We'll confirm the requirements and
                          assign a verified helper suited for the job.</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <span className="step-number">6</span>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-card">
                        <h4>Pay After the Job is Done</h4>
                        <p className="timeline-description">Complete peace of mind. You only pay after the task is completed
                          successfully (as applicable).</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Vertical Timeline */}
              </div>
            </div>
          </div>
        </section>
        {/* ===== How to Get Started section end ===== */}

        {/* ===== Coming Soon Banner section start ===== */}
        <section className="call-action"
          style={{background: 'linear-gradient(45deg, var(--teal-700), var(--teal-500))', margin: '40px 0', padding: '40px 0 0'}}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="inner-content text-white text-center">
                  <h2 className="mb-3 text-white fw-bold">One app for all your needs - launching soon</h2>
                  <p className="text-white mb-4 opacity-75">All your neighborhood help needs in one convenient app. Stay tuned for
                    our exciting app launch.</p>
                  <div className="mt-4">
                    <img src="/assets/images/comingsoon.png" alt="App Coming Soon"
                      style={{maxWidth: '60%', height: 'auto', borderRadius: '8px'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== Coming Soon Banner section end ===== */}

        {/* ===== service-area start ===== */}
        <section id="services" className="services-area services-eight">
          {/*======  Start Section Title Five ======*/}
          <div className="section-title-five">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="content">
                    <h2 className="fw-bold">How We Can Help</h2>
                    <p>
                      We connect you with trusted helpers for various tasks in your daily life.
                    </p>
                  </div>
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/*======  End Section Title Five ======*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-heart"></i>
                  </div>
                  <div className="service-content">
                    <h4>Care & Companionship</h4>
                    <p>
                      Elderly support, companionship visits, hospital visits, and motivational support (non-medical care).
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-users"></i>
                  </div>
                  <div className="service-content">
                    <h4>Children & Family Assistance</h4>
                    <p>
                      Child supervision, school pick & drop, and family home errands support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-ambulance"></i>
                  </div>
                  <div className="service-content">
                    <h4>Emergency Support</h4>
                    <p>
                      Medical emergency delivery, rescue assistance, blood pickup, and urgent item delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-shopping-basket"></i>
                  </div>
                  <div className="service-content">
                    <h4>Essential Errands</h4>
                    <p>
                      Grocery runs, market visits, bulk transport, water cylinder pickup and gift delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-gift"></i>
                  </div>
                  <div className="service-content">
                    <h4>Event & Occasion Support</h4>
                    <p>
                      Decoration help, event serving, guest management, and moving heavy items for occasions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-wallet"></i>
                  </div>
                  <div className="service-content">
                    <h4>Financial & Administrative Help</h4>
                    <p>
                      Bill payments, form filling, bank work assistance and administrative support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-grid-alt"></i>
                  </div>
                  <div className="service-content">
                    <h4>General On-field Assistance</h4>
                    <p>
                      Queue standing, late-night pickup, photography services, and on-site supervision.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-home"></i>
                  </div>
                  <div className="service-content">
                    <h4>Home & Shop Support</h4>
                    <p>
                      House watching, shop organizing, temporary supervision, and skill-based maintenance work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-briefcase"></i>
                  </div>
                  <div className="service-content">
                    <h4>Personal Productivity & Lifestyle</h4>
                    <p>
                      Home setup, fitness buddy, wardrobe organization, and personal errands.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-heart"></i>
                  </div>
                  <div className="service-content">
                    <h4>Pet Care Services</h4>
                    <p>
                      Dog and cat walking, pet feeding, veterinary visit escorts, and pet transportation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <div className="service-icon">
                    <i className="lni lni-car"></i>
                  </div>
                  <div className="service-content">
                    <h4>Transport & Mobility</h4>
                    <p>
                      Passenger transport, personal chauffeur services for daily or planned trips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== service-area end ===== */}

        {/* ========================= feedback-section start ========================= */}
        <section id="feedback" className="services-area services-eight">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title-five">
                  <div className="content">
                    <h2 className="fw-bold">Share Your Feedback</h2>
                    <p>Your input helps us improve our services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="liquid-glass contact-form-wrapper" style={{padding: '40px'}}>
                  <form id="feedbackForm" className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" className="form-control" id="name" name="fullname" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-6">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required />
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="col-md-12">
                        <div className="rating-section mb-4">
                          <label className="form-label">Overall Experience</label>
                          <div className="star-rating">
                            <input type="radio" id="star5" name="rating" value="5" />
                            <label htmlFor="star5" title="5 stars">☆</label>
                            <input type="radio" id="star4" name="rating" value="4" />
                            <label htmlFor="star4" title="4 stars">☆</label>
                            <input type="radio" id="star3" name="rating" value="3" />
                            <label htmlFor="star3" title="3 stars">☆</label>
                            <input type="radio" id="star2" name="rating" value="2" />
                            <label htmlFor="star2" title="2 stars">☆</label>
                            <input type="radio" id="star1" name="rating" value="1" />
                            <label htmlFor="star1" title="1 star">☆</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <textarea className="form-control" id="message" name="message" rows={5} placeholder="Your Feedback" required></textarea>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn primary-btn" style={{marginTop: '15px'}}>Submit Feedback</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================= feedback-section end ========================= */}

        {/* Start Footer Area */}
        <footer className="call-action footer-call-action">
          {/* Start Footer Top */}
          <div className="container">
            <div className="inner-content">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Single Widget */}
                  <div className="f-about text-center footer-about">
                    <div className="logo text-center">
                      <a href="#home">
                        <img className="footer-logo-img" src="/assets/images/logo-dark.png" alt="#" />
                        <div className="footer-logo-text">FullCircle</div>
                      </a>
                    </div>
                    <p className="text-center footer-text-centered">
                      To make everyday work accessible to everyone.
                    </p>
                    <p className="copyright-text text-center footer-copyright-text">
                      <span>© 2025 FullCircle.</span> All rights reserved.
                    </p>
                    <div className="footer-connect-heading text-center">
                      <p className="footer-connect-text">Connect with us</p>
                    </div>
                    <div className="contact-icons text-center mt-3">
                      <a href="tel:+919121346777" target="_blank" rel="noopener noreferrer" className="contact-icon-container">
                        <i className="lni lni-phone contact-icon"></i>
                      </a>
                      <a href="mailto:ourfullcircleservices@gmail.com" target="_blank" rel="noopener noreferrer"
                        className="contact-icon-container">
                        <i className="lni lni-envelope contact-icon"></i>
                      </a>
                      <a href="https://wa.me/919121346777" target="_blank" rel="noopener noreferrer"
                        className="contact-icon-container">
                        <i className="lni lni-whatsapp contact-icon"></i>
                      </a>
                      <a href="https://instagram.com/our_fullcircle" target="_blank" rel="noopener noreferrer"
                        className="contact-icon-container">
                        <i className="lni lni-instagram-original contact-icon"></i>
                      </a>
                    </div>
                  </div>
                  {/* End Single Widget */}
                </div>
              </div>
            </div>
          </div>
          {/*/ End Footer Top */}
        </footer>
        {/*/ End Footer Area */}

        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/919121346777" className="floating-whatsapp-btn" target="_blank" rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp">
          <i className="lni lni-whatsapp"></i>
        </a>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          //===== close navbar-collapse when a  clicked
          document.addEventListener('DOMContentLoaded', function () {
            let navbarTogglerNine = document.querySelector(
              ".navbar-nine .navbar-toggler"
            );
            if (navbarTogglerNine) {
              navbarTogglerNine.addEventListener("click", function () {
                navbarTogglerNine.classList.toggle("active");
              });
            }

            // ==== left sidebar toggle
            let sidebarLeft = document.querySelector(".sidebar-left");
            let overlayLeft = document.querySelector(".overlay-left");
            let sidebarClose = document.querySelector(".sidebar-close .close");
            let sideMenuLeftNine = document.querySelector(".menu-bar");

            if (overlayLeft) {
              overlayLeft.addEventListener("click", function () {
                if (sidebarLeft) sidebarLeft.classList.toggle("open");
                if (overlayLeft) overlayLeft.classList.toggle("open");
              });
            }

            if (sidebarClose) {
              sidebarClose.addEventListener("click", function () {
                if (sidebarLeft) sidebarLeft.classList.remove("open");
                if (overlayLeft) overlayLeft.classList.remove("open");
              });
            }

            if (sideMenuLeftNine) {
              sideMenuLeftNine.addEventListener("click", function () {
                if (sidebarLeft) sidebarLeft.classList.add("open");
                if (overlayLeft) overlayLeft.classList.add("open");
              });
            }

            // Track scroll position and add/remove 'scrolled' class
            window.addEventListener('scroll', function () {
              const navbar = document.querySelector('.navbar-nine');
              if (navbar) {
                if (window.scrollY > 50) {
                  navbar.classList.add('scrolled');
                } else {
                  navbar.classList.remove('scrolled');
                }
              }
            });

            // Floating WhatsApp Button functionality
            const floatingBtn = document.querySelector('.floating-whatsapp-btn');
            const whatsappBtn = document.querySelector('a[href="https://wa.me/919121346777"]');

            // Function to check if element is in viewport
            function isElementInViewport(el) {
              if (!el) return false; // If element doesn't exist, return false

              const rect = el.getBoundingClientRect();

              // Element is in viewport if it's not completely above or below the visible area
              return rect.top < window.innerHeight && rect.bottom > 0;
            }

            // Function to handle scroll events
            function handleScroll() {
              // Show the floating button only when main WhatsApp button is not in viewport
              // and user has scrolled down far enough that header is out of view
              const whatsappBtnVisible = isElementInViewport(whatsappBtn);

              if (floatingBtn && whatsappBtnVisible !== undefined && window.scrollY > 150) {
                if (!whatsappBtnVisible) {
                  floatingBtn.classList.remove('hidden');
                } else {
                  floatingBtn.classList.add('hidden');
                }
              }
            }

            // Initial check
            handleScroll();

            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);
          });
        `
      }}></script>
    </>
  );
}
