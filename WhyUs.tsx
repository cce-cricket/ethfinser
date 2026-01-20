import { Star, Users, Clock, Shield, TrendingUp, Award } from 'lucide-react';

export function WhyUs() {
  const advantages = [
    {
      icon: Star,
      title: 'Proven Track Record',
      description: 'Over 14 years of delivering exceptional results for clients across diverse industries.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly qualified professionals with extensive experience and prestigious certifications.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and consistently deliver projects on schedule without compromising quality.',
    },
    {
      icon: Shield,
      title: 'Confidentiality',
      description: 'Your data and business information are protected with the highest security standards.',
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your bottom line and business growth.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning service recognized by leading industry organizations and publications.',
    },
  ];

  const differentiators = [
    {
      title: 'Customized Solutions',
      description: 'We don\'t believe in one-size-fits-all. Every solution is tailored to your specific needs, challenges, and goals.',
    },
    {
      title: 'Hands-On Approach',
      description: 'We work alongside your team, providing practical guidance and support throughout the engagement.',
    },
    {
      title: 'Technology-Enabled',
      description: 'We leverage cutting-edge financial technologies and analytics tools to deliver superior insights.',
    },
    {
      title: 'Long-Term Partnership',
      description: 'We\'re committed to building lasting relationships, serving as your trusted advisor for the long haul.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-slate-800 to-slate-700">
        <img
          src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzY4ODMyODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Partnership"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Why Choose EthFinser</h1>
            <p className="text-xl max-w-3xl mx-auto">
              The trusted choice for businesses seeking financial excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Advantages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We combine expertise, experience, and innovation to deliver unparalleled value to our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <div
                key={advantage.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-slate-700"
              >
                <Icon className="w-12 h-12 text-slate-700 mb-4" />
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            );
          })}
        </div>

        {/* Differentiators */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Unique Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              At EthFinser, we are committed to your success. We understand that choosing a financial consultant is a significant decision, and we take that responsibility seriously.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our team is dedicated to providing you with the highest level of service, transparency, and expertise. We work tirelessly to ensure that every engagement delivers tangible value and measurable results.
            </p>
            <p className="text-lg text-gray-700">
              When you partner with EthFinser, you gain more than a consultant – you gain a trusted advisor committed to your long-term success.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our expert guidance
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}