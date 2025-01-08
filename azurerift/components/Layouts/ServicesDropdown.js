import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const ServicesDropdown = ({ currentPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      category: "Development",
      items: [
        { title: "Machine learning model development", icon: "🤖" },
        { title: "End-to-end product development", icon: "🔄" },
        { title: "Smart contract development", icon: "📝" },
        { title: "Full-stack development", icon: "💻" },
        { title: "Cross-platform development", icon: "📱" },
        { title: "CI/CD pipeline setup", icon: "⚙️" }
      ]
    },
    {
      category: "Solutions",
      items: [
        { title: "Natural Language Processing", icon: "📊" },
        { title: "MVP development", icon: "🚀" },
        { title: "Digital transformation", icon: "🔄" },
        { title: "Framework-specific development", icon: "⚛️" },
        { title: "IoT device integration", icon: "📡" },
        { title: "Infrastructure as Code", icon: "☁️" }
      ]
    },
    {
      category: "Specialized",
      items: [
        { title: "Computer vision", icon: "👁️" },
        { title: "Custom blockchain solutions", icon: "🔗" },
        { title: "Legacy system modernization", icon: "🔄" },
        { title: "Native app development", icon: "📱" },
        { title: "Wearable tech solutions", icon: "⌚" },
        { title: "Data warehousing", icon: "💾" }
      ]
    }
  ];

  return (
    <div
      className="relative static md:relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href="/services/"
        className={`nav-link flex items-center gap-1 ${
          currentPath === "/services/" ? "active" : ""
        }`}
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform ${isHovered ? 'rotate-180' : ''}`} />
      </Link>

      {isHovered && (
        <div className="fixed md:absolute left-0 md:left-1/2 top-full transform md:-translate-x-1/2 w-full md:w-max max-w-6xl mx-auto bg-white rounded-lg shadow-xl border border-gray-200 p-4 md:p-6 z-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {services.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((service, serviceIdx) => (
                    <li key={serviceIdx}>
                      <Link
                        href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-xl">{service.icon}</span>
                        <span className="text-gray-700 hover:text-gray-900">
                          {service.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;