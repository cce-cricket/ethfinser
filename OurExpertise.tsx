import { Building, ShoppingCart, Factory, Heart, Plane, Laptop } from 'lucide-react';

export function OurExpertise() {
  const industries = [
    {
      icon: Building,
      title: 'Real Estate',
      description: 'Property investment analysis, development financing, and portfolio optimization.',
      expertise: ['Investment Analysis', 'Development Finance', 'Asset Management', 'Market Research'],
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Financial strategies for traditional retail and digital commerce businesses.',
      expertise: ['Inventory Management', 'Cash Flow Optimization', 'Expansion Planning', 'Profitability Analysis'],
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Cost optimization, working capital management, and operational efficiency.',
      expertise: ['Cost Accounting', 'Supply Chain Finance', 'Capital Planning', 'Performance Metrics'],
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Specialized financial services for healthcare providers and medical practices.',
      expertise: ['Revenue Cycle Management', 'Compliance', 'Practice Valuation', 'Billing Optimization'],
    },
    {
      icon: Plane,
      title: 'Hospitality & Tourism',
      description: 'Financial planning and analysis for hotels, restaurants, and travel services.',
      expertise: ['Revenue Management', 'Seasonal Planning', 'Cost Control', 'Investment Analysis'],
    },
    {
      icon: Laptop,
      title: 'Technology & Startups',
      description: 'Growth strategies, fundraising support, and financial modeling for tech companies.',
      expertise: ['Fundraising Strategy', 'Financial Modeling', 'Valuation', 'Growth Planning'],
    },
  ];

  const certifications = [
    'Certified Public Accountant (CPA)',
    'Chartered Financial Analyst (CFA)',
    'Certified Management Accountant (CMA)',
    'Certified Financial Planner (CFP)',
    'Chartered Alternative Investment Analyst (CAIA)',
    'Financial Risk Manager (FRM)',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-slate-800 to-slate-700">
        <img
          src="https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5c2lzJTIwZGF0YXxlbnwxfHx8fDE3Njg5MTAyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Expertise"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Our Expertise</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Deep industry knowledge and professional certifications
            </p>
          </div>
        </div>
      </div>

      {/* Industry Expertise */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Industry Specializations</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We bring specialized knowledge and experience across diverse industries, understanding the unique financial challenges and opportunities in each sector.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.title}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-slate-700 hover:shadow-lg transition-all"
                >
                  <Icon className="w-12 h-12 text-slate-700 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.expertise.map((item) => (
                      <div key={item} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-slate-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-4">Professional Certifications</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Our team holds prestigious certifications demonstrating expertise and commitment to professional excellence
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-white p-4 rounded-lg shadow-sm text-center font-medium text-gray-800"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-700 mb-2">Financial Modeling</div>
              <p className="text-gray-600">Advanced Excel and financial modeling techniques for complex scenarios</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-700 mb-2">Data Analytics</div>
              <p className="text-gray-600">Leveraging cutting-edge tools for data-driven insights and decisions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-700 mb-2">Regulatory Compliance</div>
              <p className="text-gray-600">Expert knowledge of financial regulations and compliance requirements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}