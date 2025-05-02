import React from 'react';

export default function Solutions() {
  return (
    <section className="min-h-screen mx-auto px-8 py-4 bg-gray-50">
      {/* Page Header */}
      <h2 className="text-4xl font-bold text-center mb-8">Our Solutions</h2>

      {/* Introduction */}
      <div className="max-w-2xl mx-auto mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Many businesses rely on weight scales and computer systems that operate in isolation, leading to inaccurate data, wasted resources, and slow decision-making. Brickspring Enterprises addresses these challenges head-on by integrating weight-scale data with computing systems to ensure real-time accuracy and streamlined operations.
        </p>
      </div>

      {/* Solution Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Automated Scale Integration */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">Automated Scale Integration</h3>
          <p className="text-gray-600 mb-4">
            Our system automatically captures weight data from multiple scales, providing instant, reliable insights for faster analysis and decision-making.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Real-time data capture</li>
            <li>Multi-scale synchronization</li>
            <li>Centralized dashboard for monitoring</li>
          </ul>
        </div>

        {/* Data Analytics & Insights */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">Data Analytics & Insights</h3>
          <p className="text-gray-600 mb-4">
            Leverage advanced analytics to transform raw weight data into actionable business insights, optimizing resource allocation and operational efficiency.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Interactive charts and reports</li>
            <li>Customizable alerts and notifications</li>
            <li>Trend analysis and forecasting</li>
          </ul>
        </div>

        {/* Sustainability & Efficiency */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">Sustainability & Efficiency</h3>
          <p className="text-gray-600 mb-4">
            By integrating scales and computing solutions, we help businesses optimize resource usage, reduce waste, and lower their carbon footprint for long-term sustainability.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Waste reduction strategies</li>
            <li>Energy consumption monitoring</li>
            <li>Automated compliance reporting</li>
          </ul>
        </div>

        {/* Consultation & Support */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">Consultation & Support</h3>
          <p className="text-gray-600 mb-4">
            Our expert team provides personalized consultation and ongoing support to ensure your systems remain tailored, secure, and up-to-date.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Tailored implementation plans</li>
            <li>24/7 technical support</li>
            <li>Regular system audits and updates</li>
          </ul>
        </div>
      </div>
    </section>
);
}
