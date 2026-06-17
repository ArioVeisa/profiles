'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const projects = [
  {
    id: 1,
    title: 'Sadhana ERP',
    category: 'Business Development',
    categoryColor: '#7cb798',
    bgColor: '#f5faf7',
    thumbnail: '/assets/images/projects/sadhana/sadhana-erp-dashboard.png',
    images: [
      '/assets/images/projects/sadhana/sadhana-erp-dashboard.png',
      '/assets/images/projects/sadhana/sadhana-landing-page.png',
      '/assets/images/projects/sadhana/sadhana-pos-dashboard-full.png',
    ],
    description:
      'An integrated ERP platform for managing inventory, production, purchasing, finance, HR, reporting, and multi-outlet operations. Built to improve internal workflows and support scalable business growth.',
    details: [
      'Multi-outlet operational dashboard with real-time sync',
      'Inventory and stock management across branches',
      'Production module with raw material tracking (HPP)',
      'Purchasing, supplier, and customer data management',
      'Finance reporting and cash flow per outlet',
      'Employee attendance and HR module',
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    link: 'https://sadhanaofficial.id',
  },
  {
    id: 2,
    title: 'GymFit Membership Program',
    category: 'Web Development',
    categoryColor: '#7b4df3',
    bgColor: '#f5f1ff',
    thumbnail: '/assets/images/projects/gymfit/gymfit-membership-dashboard.png',
    images: ['/assets/images/projects/gymfit/gymfit-membership-dashboard.png'],
    description:
      'An all-in-one gym membership system for fitness centers. Built to manage members, membership packages, online payments, QR code check-ins, automated notifications, and reporting in one platform.',
    details: [
      'Member data management with check-in history and status tracking',
      'Flexible membership package setup by duration and pricing',
      'Online payment flow for safer and faster transactions',
      'QR code check-in for quick member validation',
      'Analytics dashboard for member growth and revenue reports',
      'Automated reminders for payments, expired memberships, and important updates',
    ],
    tech: ['Next.js', 'Dashboard UI', 'Payment System', 'QR Check-in', 'Analytics'],
    link: null,
  },
  {
    id: 3,
    title: 'Bank App',
    category: 'App Development',
    categoryColor: '#3f78e0',
    bgColor: '#f1f5fd',
    thumbnail: '/assets/images/projects/bank-app/bank-app-mobile-preview.png',
    images: ['/assets/images/projects/bank-app/bank-app-mobile-preview.png'],
    description:
      'A web application that helps manage budgets and track inventory, designed to streamline business operations and improve cost efficiency with modern payment integration.',
    details: [
      'Budget management & expense tracking',
      'Transaction history with detailed reports',
      'PayPal & digital payment integration',
      'Fingerprint authentication security',
      'Responsive mobile-first design',
      'Real-time balance updates',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
    link: null,
  },
  {
    id: 4,
    title: 'POS System',
    category: 'POS System',
    categoryColor: '#2f7df6',
    bgColor: '#f4f8ff',
    thumbnail: '/assets/images/projects/sadhana/sadhana-pos-system-dashboard.png',
    images: ['/assets/images/projects/sadhana/sadhana-pos-system-dashboard.png'],
    description:
      'A point-of-sale system for outlet operations, covering product categories, menu selection, order cart, checkout flow, sales history, and stock availability for faster cashier transactions.',
    details: [
      'Product category and menu browsing for cashier workflow',
      'Order cart panel with selected items and checkout flow',
      'Stock availability status for sellable products',
      'Sales history and order tracking for outlet operations',
      'Responsive POS interface optimized for outlet devices',
      'Integrated with inventory data to reduce stock mismatch',
    ],
    tech: ['Next.js', 'POS System', 'Dashboard UI', 'Inventory Sync', 'Order Management'],
    link: null,
  },
  {
    id: 5,
    title: 'PawCare Veterinary Clinic Dashboard',
    category: 'Web Development',
    categoryColor: '#10a88a',
    bgColor: '#f0fffb',
    thumbnail: '/assets/images/projects/pawcare/pawcare-veterinary-clinic-dashboard.png',
    images: ['/assets/images/projects/pawcare/pawcare-veterinary-clinic-dashboard.png'],
    description:
      'A veterinary clinic dashboard for managing animal patients, owners, appointments, medical records, services, products, sales, finance, and reporting in one friendly workspace.',
    details: [
      'Daily appointment overview for veterinarians and clinic staff',
      'Animal patient and owner data management',
      'Medical record tracking for treatments and visits',
      'Stock and product monitoring for clinic supplies',
      'Revenue, finance, and service performance reports',
      'Reminder and notification panel for vaccines, check-ups, and low stock',
    ],
    tech: ['Next.js', 'Dashboard UI', 'Clinic System', 'Inventory', 'Analytics'],
    link: null,
  },
  {
    id: 6,
    title: 'GudangKu Inventory System',
    category: 'Web Development',
    categoryColor: '#00c781',
    bgColor: '#effcf7',
    thumbnail: '/assets/images/projects/gudangku/gudangku-inventory-dashboard.png',
    images: ['/assets/images/projects/gudangku/gudangku-inventory-dashboard.png'],
    description:
      'A warehouse inventory dashboard designed to monitor total items, stock levels, incoming and outgoing stock, low-stock warnings, categories, suppliers, warehouse capacity, and item status.',
    details: [
      'Inventory dashboard with total items and stock summaries',
      'Incoming and outgoing stock monitoring by month',
      'Low-stock warning list for fast restocking decisions',
      'Category breakdown and supplier management',
      'Latest item table with codes, locations, units, and statuses',
      'Warehouse capacity indicator for operational control',
    ],
    tech: ['Next.js', 'Inventory System', 'Dashboard UI', 'Stock Management', 'Reports'],
    link: null,
  },
  {
    id: 7,
    title: 'Distribu.ID Distributor System',
    category: 'Web Development',
    categoryColor: '#4a4a4a',
    bgColor: '#f7f7f7',
    thumbnail: '/assets/images/projects/distribu/distribu-id-dashboard.png',
    images: ['/assets/images/projects/distribu/distribu-id-dashboard.png'],
    description:
      'A distributor management system for monitoring sales, orders, distributors, products, delivery activity, stock, invoices, returns, and daily distribution performance in one operational dashboard.',
    details: [
      'Distributor dashboard with sales, orders, product, and delivery KPIs',
      'Sales chart and category performance overview',
      'Latest order tracking with payment and delivery status',
      'Product stock table with purchase and selling price data',
      'Distributor, invoice, return, and shipment management modules',
      'Daily distribution reporting for operational decisions',
    ],
    tech: ['Next.js', 'Distributor System', 'Dashboard UI', 'Sales Tracking', 'Inventory'],
    link: null,
  },
  {
    id: 8,
    title: 'PropertiCore Property Management System',
    category: 'Web Development',
    categoryColor: '#0b1a3a',
    bgColor: '#f3f7ff',
    thumbnail: '/assets/images/projects/properticore/properticore-management-system.png',
    images: ['/assets/images/projects/properticore/properticore-management-system.png'],
    description:
      'A property management system for managing property units, tenants, payments, bills, maintenance, occupancy data, and monthly revenue in one integrated platform.',
    details: [
      'Property and unit management with facility information',
      'Tenant management for lease agreements and payment history',
      'Billing and payment tracking for recurring property payments',
      'Maintenance request monitoring and repair progress tracking',
      'Occupancy and active tenant performance overview',
      'Monthly revenue dashboard for property business decisions',
    ],
    tech: ['Next.js', 'Property Management', 'Dashboard UI', 'Billing System', 'Maintenance Tracking'],
    link: null,
  },
  {
    id: 9,
    title: 'Eventora Event Organizer System',
    category: 'Web Development',
    categoryColor: '#9b4dff',
    bgColor: '#f8f1ff',
    thumbnail: '/assets/images/projects/eventora/eventora-event-organizer-system.png',
    images: ['/assets/images/projects/eventora/eventora-event-organizer-system.png'],
    description:
      'An event organizer system for planning, managing, and evaluating events through one integrated platform, including event schedules, participants, ticketing, payments, and analytics.',
    details: [
      'Event planning dashboard for schedules and activity management',
      'Participant registration, ticketing, and check-in tracking',
      'Payment and ticket transaction monitoring',
      'Event performance analytics and success rate overview',
      'Support for corporate gatherings, seminars, and public events',
      'Centralized workflow for managing events from planning to evaluation',
    ],
    tech: ['Next.js', 'Event Management', 'Ticketing System', 'Dashboard UI', 'Analytics'],
    link: null,
  },
  {
    id: 10,
    title: 'RestoMate Restaurant Management System',
    category: 'Web Development',
    categoryColor: '#17472c',
    bgColor: '#f8f3eb',
    thumbnail: '/assets/images/projects/restomate/restomate-restaurant-management-system.png',
    images: ['/assets/images/projects/restomate/restomate-restaurant-management-system.png'],
    description:
      'A restaurant management system for handling orders, inventory, employees, sales reports, and daily restaurant operations in one integrated platform.',
    details: [
      'Order management for dine-in and takeaway workflows',
      'Real-time stock and ingredient inventory monitoring',
      'Employee scheduling, attendance, and performance tracking',
      'Sales reporting and analytics for operational decisions',
      'Restaurant branch and user activity management',
      'Integrated dashboard for improving service speed and control',
    ],
    tech: ['Next.js', 'Restaurant System', 'Order Management', 'Inventory', 'Analytics'],
    link: null,
  },
  {
    id: 11,
    title: 'EduSmart School Management System',
    category: 'Web Development',
    categoryColor: '#6d5dfc',
    bgColor: '#f5f4ff',
    thumbnail: '/assets/images/projects/edusmart/edusmart-school-management-system.png',
    images: ['/assets/images/projects/edusmart/edusmart-school-management-system.png'],
    description:
      'A school management system for managing students, teachers, classes, academics, attendance, announcements, library data, finance, and school reports in one dashboard.',
    details: [
      'Student, teacher, and class management dashboard',
      'Attendance and student presence analytics',
      'Academic module for subjects, grades, and school activities',
      'Announcements and upcoming school events panel',
      'Finance summary for income, expenses, and balance tracking',
      'School reporting tools for administration decisions',
    ],
    tech: ['Next.js', 'School System', 'Dashboard UI', 'Attendance', 'Finance Reports'],
    link: null,
  },
  {
    id: 12,
    title: 'NurUmroh Travel Umroh System',
    category: 'Web Development',
    categoryColor: '#1f5137',
    bgColor: '#f6f1e8',
    thumbnail: '/assets/images/projects/nurumroh/nurumroh-travel-umroh-system-hero.png',
    images: [
      '/assets/images/projects/nurumroh/nurumroh-travel-umroh-system-hero.png',
      '/assets/images/projects/nurumroh/nurumroh-travel-umroh-system-home.png',
    ],
    description:
      'A travel umroh system for managing umroh packages, jamaah registration, payment flow, departure schedules, facilities, testimonials, and customer support in one integrated platform.',
    details: [
      'Umroh package catalog with pricing and duration details',
      'Jamaah registration and travel data management',
      'Payment tracking for transparent transaction flow',
      'Departure schedule and travel document information',
      'Facility, testimonial, and customer support sections',
      'Landing page optimized for trust, conversion, and consultation',
    ],
    tech: ['Next.js', 'Travel System', 'Booking Flow', 'Payment Tracking', 'Landing Page'],
    link: null,
  },
  {
    id: 13,
    title: 'FieldBook Field Booking System',
    category: 'Web Development',
    categoryColor: '#148b43',
    bgColor: '#effaf3',
    thumbnail: '/assets/images/projects/fieldbook/fieldbook-booking-lapangan-system.png',
    images: ['/assets/images/projects/fieldbook/fieldbook-booking-lapangan-system.png'],
    description:
      'A field booking system for helping customers find, reserve, and pay for sports fields online with real-time availability, secure transactions, and simple booking flow.',
    details: [
      'Online field catalog and booking flow for customers',
      'Real-time availability checking for each field schedule',
      'Secure payment flow for confirmed reservations',
      'Booking summary and customer reservation management',
      'Pricing and promotion support for field operators',
      'Landing page optimized for quick booking conversion',
    ],
    tech: ['Next.js', 'Booking System', 'Payment Flow', 'Availability Check', 'Landing Page'],
    link: null,
  },
  {
    id: 14,
    title: 'PlayField Padel Booking System',
    category: 'Web Development',
    categoryColor: '#0b8f43',
    bgColor: '#effaf3',
    thumbnail: '/assets/images/projects/playfield/playfield-padel-booking-system.png',
    images: ['/assets/images/projects/playfield/playfield-padel-booking-system.png'],
    description:
      'A padel field booking system for searching available courts, checking schedules, making reservations, and completing payments through a simple online booking experience.',
    details: [
      'Padel court availability and schedule checking',
      'Instant online reservation flow for customers',
      'Secure payment and booking confirmation process',
      'Customer booking history and reservation summary',
      'Promotional pricing and field package support',
      'Responsive landing page for booking conversion',
    ],
    tech: ['Next.js', 'Booking System', 'Padel Court', 'Payment Flow', 'Landing Page'],
    link: null,
  },
  {
    id: 15,
    title: 'Rental Mobil Dashboard',
    category: 'Web Development',
    categoryColor: '#2457ff',
    bgColor: '#f2f6ff',
    thumbnail: '/assets/images/projects/rental-mobil/rental-mobil-dashboard.png',
    images: ['/assets/images/projects/rental-mobil/rental-mobil-dashboard.png'],
    description:
      'A modern car rental dashboard for managing reservations, vehicles, customers, drivers, payments, reports, promotions, notifications, and daily rental activity.',
    details: [
      'Rental order dashboard with status and revenue KPIs',
      'Vehicle availability, customer, and driver management',
      'Reservation table with payment and rental status tracking',
      'Revenue chart and order status analytics',
      'Popular vehicle insights for fleet decisions',
      'Daily activity timeline for operational monitoring',
    ],
    tech: ['Next.js', 'Rental System', 'Dashboard UI', 'Fleet Management', 'Reports'],
    link: null,
  },
  {
    id: 16,
    title: 'KostHub Booking Kost System',
    category: 'Web Development',
    categoryColor: '#087a3b',
    bgColor: '#f2fbf5',
    thumbnail: '/assets/images/projects/kosthub/kosthub-management-system.png',
    images: ['/assets/images/projects/kosthub/kosthub-management-system.png'],
    description:
      'A kost search and booking system for helping users find verified rooms, compare facilities, filter prices, and book kost online with complete and trusted information.',
    details: [
      'Kost search flow by location, type, price, and facilities',
      'Verified kost information with photos and details',
      'Online booking process for room reservations',
      'Responsive customer support and inquiry flow',
      'Property availability and listing management',
      'Landing page optimized for search and booking conversion',
    ],
    tech: ['Next.js', 'Booking System', 'Property Listing', 'Search Filter', 'Landing Page'],
    link: null,
  },
  {
    id: 17,
    title: 'AbsensiPro Employee Attendance System',
    category: 'Web Development',
    categoryColor: '#315cff',
    bgColor: '#f2f6ff',
    thumbnail: '/assets/images/projects/absensi-karyawan/absensi-karyawan-system.png',
    images: ['/assets/images/projects/absensi-karyawan/absensi-karyawan-system.png'],
    description:
      'An employee attendance system for tracking presence, late arrivals, permissions, leave requests, work shifts, departments, and daily HR activity from one dashboard.',
    details: [
      'Employee attendance dashboard with live clock and status summary',
      'Check-in, check-out, late, leave, and absence tracking',
      'Attendance trend chart and percentage report',
      'Department attendance performance overview',
      'Leave, permission, and overtime request management',
      'Work shift schedule summary for HR operations',
    ],
    tech: ['Next.js', 'Attendance System', 'HR Dashboard', 'Shift Management', 'Reports'],
    link: null,
  },
  {
    id: 18,
    title: 'KlinikSehat Clinic Management System',
    category: 'Web Development',
    categoryColor: '#079b9b',
    bgColor: '#effafa',
    thumbnail: '/assets/images/projects/kliniksehat/kliniksehat-management-system-hero.png',
    images: [
      '/assets/images/projects/kliniksehat/kliniksehat-management-system-hero.png',
      '/assets/images/projects/kliniksehat/kliniksehat-management-system-full.png',
    ],
    description:
      'A clinic management system for handling patient registration, medical records, doctor schedules, medicine inventory, appointment flow, and reports for small clinics.',
    details: [
      'Patient registration and appointment booking flow',
      'Digital medical records for secure patient history',
      'Doctor schedule and queue management',
      'Medicine inventory monitoring and stock alerts',
      'Clinic analytics and operational reporting',
      'Landing page for clinic service registration and trust building',
    ],
    tech: ['Next.js', 'Clinic System', 'Medical Records', 'Inventory', 'Reports'],
    link: null,
  },
  {
    id: 19,
    title: 'BarberGo Barbershop Reservation System',
    category: 'Web Development',
    categoryColor: '#c9a24f',
    bgColor: '#fbf6eb',
    thumbnail: '/assets/images/projects/barbergo/barbergo-reservation-system-showcase.png',
    images: [
      '/assets/images/projects/barbergo/barbergo-reservation-system-showcase.png',
      '/assets/images/projects/barbergo/barbergo-reservation-system-home.png',
    ],
    description:
      'A barbershop reservation system for booking haircut services online, choosing barbers, selecting schedules, managing service packages, and improving customer reservation flow.',
    details: [
      'Online reservation flow for barbershop customers',
      'Barber and service selection before booking',
      'Schedule and time slot management',
      'Customer testimonials and trust-building landing page',
      'Reservation form for quick appointment confirmation',
      'Modern dark theme interface for premium brand positioning',
    ],
    tech: ['Next.js', 'Reservation System', 'Booking Flow', 'Landing Page', 'Service Management'],
    link: null,
  },
];

const categories = ['All', ...new Set(projects.map((project) => project.category))];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setActiveImage(0);
    document.body.style.overflow = '';
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return (
    <>
      <Header />

      <main>
        <section className="projects-page">
          <div className="container">
            {/* Page Header */}
            <div className="projects-page-header">
              <h1 className="h2 section-title">All Projects</h1>
              <p className="section-text">
                A collection of projects I&apos;ve worked on across security
                research, business development, web development, and digital
                forensics.
              </p>
            </div>

            {/* Category Filter */}
            <div className="projects-filter" aria-label="Project categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`projects-filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-grid-card"
                  style={{ backgroundColor: project.bgColor }}
                  onClick={() => openModal(project)}
                >
                  <div className="project-grid-card-img">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="project-grid-card-content">
                    <span
                      className="project-grid-tag"
                      style={{ color: project.categoryColor }}
                    >
                      {project.category}
                    </span>
                    <h3 className="h4 project-grid-title">{project.title}</h3>
                    <p className="project-grid-text">{project.description}</p>
                    <div className="project-grid-tech">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="tech-badge">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tech-badge tech-more">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="projects-page-cta">
              <Link href="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="project-modal-header">
              <div>
                <span
                  className="project-grid-tag"
                  style={{ color: selectedProject.categoryColor }}
                >
                  {selectedProject.category}
                </span>
                <h2 className="h3 project-modal-title">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                className="project-modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Modal Image Gallery */}
            <div className="project-modal-gallery">
              <div className="project-modal-main-img">
                <img
                  src={selectedProject.images[activeImage]}
                  alt={`${selectedProject.title} - screenshot ${activeImage + 1}`}
                />
              </div>
              {selectedProject.images.length > 1 && (
                <div className="project-modal-thumbs">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`project-modal-thumb ${idx === activeImage ? 'active' : ''}`}
                      onClick={() => setActiveImage(idx)}
                    >
                      <img
                        src={img}
                        alt={`${selectedProject.title} thumbnail ${idx + 1}`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Body */}
            <div className="project-modal-body">
              <p className="project-modal-desc">
                {selectedProject.description}
              </p>

              <div className="project-modal-details">
                <h4 className="project-modal-subtitle">Key Features</h4>
                <ul className="project-modal-list">
                  {selectedProject.details.map((detail, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={selectedProject.categoryColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-modal-tech-section">
                <h4 className="project-modal-subtitle">Tech Stack</h4>
                <div className="project-grid-tech">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary project-modal-link"
                >
                  Visit Project →
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
