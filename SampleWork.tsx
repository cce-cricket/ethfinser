import { CheckCircle, TrendingUp, DollarSign, Award } from 'lucide-react';

export function SampleWork() {
  const caseStudies = [
    {
      title: 'Manufacturing Company Turnaround',
      client: 'Global Manufacturing Inc.',
      challenge: 'A mid-sized manufacturer faced declining profitability and cash flow issues.',
      solution: 'Implemented comprehensive cost reduction program and working capital optimization.',
      results: [
        '35% reduction in operating costs',
        '50% improvement in cash flow',
        'Returned to profitability within 12 months',
        'Secured $10M in additional financing',
      ],
      image: 'https://images.unsplash.com/photo-1762279389020-eeeb69c25813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydHMlMjBncmFwaHxlbnwxfHx8fDE3Njg5MTAyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Tech Startup Funding Success',
      client: 'InnovateTech Solutions',
      challenge: 'Early-stage tech startup needed to raise Series A funding.',
      solution: 'Developed comprehensive financial model, prepared investor presentations, and facilitated due diligence.',
      results: [
        'Raised $15M Series A funding',
        'Achieved 3x pre-money valuation target',
        'Successfully closed with top-tier VC firms',
        'Streamlined financial operations',
      ],
      image: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2ODgzMTk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Retail Chain Expansion',
      client: 'National Retail Chain',
      challenge: 'Retail company wanted to expand from 50 to 100 locations while maintaining profitability.',
      solution: 'Created detailed expansion model, optimized capital allocation, and implemented performance tracking systems.',
      results: [
        'Successfully opened 52 new locations',
        'Maintained 18% profit margins',
        '$75M in new revenue generated',
        'Improved same-store sales by 12%',
      ],
      image: 'https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzY4ODg0ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const testimonials = [
    {
      quote: 'EthFinser transformed our financial operations. Their strategic insights were invaluable during our growth phase.',
      author: 'Sarah Johnson',
      position: 'CEO, TechVentures Inc.',
    },
    {
      quote: 'The team\'s expertise in financial modeling helped us secure the funding we needed. Highly recommended!',
      author: 'Michael Chen',
      position: 'Founder, InnovateTech',
    },
    {
      quote: 'Professional, knowledgeable, and results-driven. EthFinser exceeded our expectations in every way.',
      author: 'Emily Rodriguez',
      position: 'CFO, Retail Solutions Group',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Sample Work</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Real results from real clients - see how we've made a difference
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <img
                  src={study.image}
                  alt={study.title}
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                <div className="mb-4">
                  <span className="text-sm text-slate-700 font-semibold">Client: {study.client}</span>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2">Challenge:</h3>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2">Solution:</h3>
                  <p className="text-gray-700">{study.solution}</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3">Results:</h3>
                  <ul className="space-y-2">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-slate-800 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Across All Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">87%</div>
              <div className="text-slate-300">Average ROI Improvement</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">$500M+</div>
              <div className="text-slate-300">Client Revenue Growth</div>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-slate-300">Client Retention Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}