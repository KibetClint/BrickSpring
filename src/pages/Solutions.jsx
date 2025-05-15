import React from 'react';

export default function Solutions() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: '#FEFAEA' }} // warm cream page bg
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#1F6632]">
          Our Solutions
        </h2>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-base sm:text-lg leading-relaxed text-[#1F6632]/80">
            Many businesses rely on weight scales and computer systems that operate
            in isolation, leading to inaccurate data, wasted resources, and slow decision-making.
            Brickspring Enterprises addresses these challenges head-on by integrating
            weight-scale data with computing systems to ensure real-time accuracy and
            streamlined operations.
          </p>
        </div>

        {/* Solution Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Automated Scale Integration',
              desc: 'Our system automatically captures weight data from multiple scales, providing instant, reliable insights for faster analysis and decision-making.',
              items: ['Real-time data capture', 'Multi-scale synchronization', 'Centralized dashboard for monitoring'],
            },
            {
              title: 'Data Analytics & Insights',
              desc: 'Leverage advanced analytics to transform raw weight data into actionable business insights, optimizing resource allocation and operational efficiency.',
              items: ['Interactive charts and reports', 'Customizable alerts and notifications', 'Trend analysis and forecasting'],
            },
            {
              title: 'Sustainability & Efficiency',
              desc: 'By integrating scales and computing solutions, we help businesses optimize resource usage, reduce waste, and lower their carbon footprint for long-term sustainability.',
              items: ['Waste reduction strategies', 'Energy consumption monitoring', 'Automated compliance reporting'],
            },
            {
              title: 'Consultation & Support',
              desc: 'Our expert team provides personalized consultation and ongoing support to ensure your systems remain tailored, secure, and up-to-date.',
              items: ['Tailored implementation plans', '24/7 technical support', 'Regular system audits and updates'],
            },
          ].map((solution) => (
            <div
              key={solution.title}
              className="bg-[#FFFEFB] rounded-2xl shadow-lg p-6 flex flex-col"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#1F6632]">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base mb-4 flex-grow text-[#1F6632]/80">
                {solution.desc}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#1F6632]/80">
                {solution.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
