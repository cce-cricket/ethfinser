import { TrendingUp, Shield, Calculator, PieChart, BarChart3, Users } from 'lucide-react';

export function WhatWeDo() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Financial Strategy',
      description: 'Develop comprehensive financial strategies aligned with your business objectives and market conditions.',
      features: ['Strategic Planning', 'Growth Forecasting', 'Market Analysis', 'Budget Optimization'],
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate financial risks to protect your business interests.',
      features: ['Risk Assessment', 'Compliance Management', 'Internal Controls', 'Crisis Planning'],
    },
    {
      icon: Calculator,
      title: 'Tax Planning',
      description: 'Optimize your tax position through strategic planning and compliance management.',
      features: ['Tax Strategy', 'Compliance Review', 'Tax Optimization', 'Audit Support'],
    },
    {
      icon: PieChart,
      title: 'Investment Advisory',
      description: 'Expert guidance on investment decisions and portfolio management strategies.',
      features: ['Portfolio Analysis', 'Investment Strategy', 'Asset Allocation', 'Performance Monitoring'],
    },
    {
      icon: BarChart3,
      title: 'Financial Analysis',
      description: 'In-depth analysis of financial data to drive informed business decisions.',
      features: ['Performance Metrics', 'Trend Analysis', 'Benchmarking', 'Reporting'],
    },
    {
      icon: Users,
      title: 'CFO Services',
      description: 'Fractional CFO services to provide strategic financial leadership.',
      features: ['Financial Leadership', 'Strategic Guidance', 'Team Management', 'Board Reporting'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">What We Do</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive financial consulting services tailored to your business needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-slate-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-slate-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">Understanding your business, challenges, and objectives</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Analysis</h3>
              <p className="text-gray-600 text-sm">Deep dive into your financial data and processes</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">Developing customized solutions and recommendations</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">Executing strategies with ongoing support and monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}