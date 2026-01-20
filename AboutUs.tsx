import { Building2, Users, Target, Award } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-slate-800">
        <img
          src="https://images.unsplash.com/photo-1701657130332-a2124b9066a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwY29uc3VsdGluZyUyMG9mZmljZXxlbnwxfHx8fDE3Njg5MTAyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Office"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About EthFinser</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Your trusted partner in financial excellence and strategic growth
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              EthFinser is a premier financial consulting firm dedicated to empowering businesses with strategic financial guidance and innovative solutions. Founded in 2010, we have grown to become one of the most trusted names in the industry, serving clients across various sectors worldwide.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of seasoned professionals brings decades of combined experience in finance, accounting, risk management, and strategic planning. We pride ourselves on delivering personalized solutions that drive measurable results and sustainable growth for our clients.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Building2 className="w-12 h-12 text-slate-700 mb-4" />
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We uphold the highest standards of professional ethics and transparency in all our dealings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-slate-700 mb-4" />
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We work closely with our clients to understand their unique challenges and goals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Target className="w-12 h-12 text-slate-700 mb-4" />
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every project, delivering superior results consistently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Award className="w-12 h-12 text-slate-700 mb-4" />
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace cutting-edge technologies and methodologies to stay ahead of the curve.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800 rounded-lg p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-slate-300">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">14+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-slate-300">Expert Consultants</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}