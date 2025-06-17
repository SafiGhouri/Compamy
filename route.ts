import { NextResponse } from 'next/server';

// Define a simple service interface
interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

// Sample services data
const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'code',
    description: 'Custom web applications and websites built with the latest technologies for optimal performance and user experience.',
    features: [
      'Responsive website design',
      'Progressive web applications',
      'E-commerce solutions',
      'Content management systems',
      'Web portals and dashboards'
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    icon: 'smartphone',
    description: 'Native and cross-platform mobile applications for iOS and Android with intuitive interfaces and seamless functionality.',
    features: [
      'iOS app development',
      'Android app development',
      'Cross-platform solutions',
      'Mobile UI/UX design',
      'App maintenance and updates'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'trending-up',
    description: 'Strategic digital marketing services to boost your online presence, drive traffic, and increase conversions.',
    features: [
      'Search engine optimization (SEO)',
      'Pay-per-click advertising (PPC)',
      'Social media marketing',
      'Content marketing',
      'Email marketing campaigns'
    ]
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    icon: 'search',
    description: 'Comprehensive SEO strategies to improve your website visibility, rankings, and organic traffic.',
    features: [
      'Technical SEO audits',
      'On-page optimization',
      'Off-page SEO',
      'Local SEO',
      'SEO performance analytics'
    ]
  },
  {
    id: 'it-consultation',
    title: 'IT Consultation',
    icon: 'users',
    description: 'Expert IT consultation to help your business leverage technology for growth, efficiency, and competitive advantage.',
    features: [
      'Technology strategy planning',
      'IT infrastructure assessment',
      'Digital transformation',
      'Cloud migration strategy',
      'Cybersecurity consulting'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'layout',
    description: 'User-centered design solutions that enhance user satisfaction by improving the usability and accessibility of your digital products.',
    features: [
      'User experience research',
      'Interface design',
      'Prototyping & wireframing',
      'Usability testing',
      'Design systems'
    ]
  }
];

// GET handler for retrieving services
export async function GET() {
  return NextResponse.json(services);
} 