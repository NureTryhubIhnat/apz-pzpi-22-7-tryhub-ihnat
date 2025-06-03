import React, { useState } from "react";

const DemoModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const demoFeatures = [
    {
      id: "overview",
      title: "Overview",
      description: "Get a quick overview of your health metrics and insights",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2xilchLa_Mpsv7m7CQNdI2UP6DolMR6rJC52a5buXVAIrdu6csNfqNyuC06nLWvyZnjRgV8CcNj4NOEmuwi5qx3FvmmCKcHc2RaXqwLKHwdKy75RossKMcSnWrsvRT3uzZEWQ7PYDBJBvBlUQvDc6hNyNfwS3B4z-fmiCcX7ZlF2sC6K4RXmP2UjINQtao8cT1dM_c6vqwRZ_lexZzabE_-xTAecBQydkU881QcASB3_2kN8jcNDMrf0wdaKaE3zlepdP_5t7l7M",
    },
    {
      id: "monitoring",
      title: "Real-time Monitoring",
      description: "Track your vital signs and health metrics in real-time",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2xilchLa_Mpsv7m7CQNdI2UP6DolMR6rJC52a5buXVAIrdu6csNfqNyuC06nLWvyZnjRgV8CcNj4NOEmuwi5qx3FvmmCKcHc2RaXqwLKHwdKy75RossKMcSnWrsvRT3uzZEWQ7PYDBJBvBlUQvDc6hNyNfwS3B4z-fmiCcX7ZlF2sC6K4RXmP2UjINQtao8cT1dM_c6vqwRZ_lexZzabE_-xTAecBQydkU881QcASB3_2kN8jcNDMrf0wdaKaE3zlepdP_5t7l7M",
    },
    {
      id: "ai",
      title: "AI Insights",
      description: "Get personalized health recommendations powered by AI",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2xilchLa_Mpsv7m7CQNdI2UP6DolMR6rJC52a5buXVAIrdu6csNfqNyuC06nLWvyZnjRgV8CcNj4NOEmuwi5qx3FvmmCKcHc2RaXqwLKHwdKy75RossKMcSnWrsvRT3uzZEWQ7PYDBJBvBlUQvDc6hNyNfwS3B4z-fmiCcX7ZlF2sC6K4RXmP2UjINQtao8cT1dM_c6vqwRZ_lexZzabE_-xTAecBQydkU881QcASB3_2kN8jcNDMrf0wdaKaE3zlepdP_5t7l7M",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#111518]">HealthAI Demo</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Demo Navigation */}
        <div className="flex gap-4 mb-6">
          {demoFeatures.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === feature.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="space-y-6">
          {demoFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`space-y-4 ${
                activeTab === feature.id ? "block" : "hidden"
              }`}
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#111518]">
                  {feature.title}
                </h3>
                <p className="text-[#637988]">{feature.description}</p>
              </div>
              {feature.id === "overview" && (
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-[#111518] mb-1">
                      Heart Rate
                    </h4>
                    <p className="text-2xl font-bold text-blue-500">72 BPM</p>
                    <p className="text-sm text-[#637988]">Normal</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-[#111518] mb-1">
                      Blood Pressure
                    </h4>
                    <p className="text-2xl font-bold text-green-500">120/80</p>
                    <p className="text-sm text-[#637988]">Normal</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-[#111518] mb-1">
                      Sleep Quality
                    </h4>
                    <p className="text-2xl font-bold text-purple-500">85%</p>
                    <p className="text-sm text-[#637988]">Good</p>
                  </div>
                </div>
              )}
              {feature.id === "monitoring" && (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-[#111518]">
                        Real-time Heart Rate
                      </h4>
                      <span className="text-sm text-green-500">Live</span>
                    </div>
                    <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="animate-pulse text-4xl font-bold text-blue-500">
                        72 BPM
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-[#111518]">
                        Activity Tracking
                      </h4>
                      <span className="text-sm text-green-500">Live</span>
                    </div>
                    <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="text-4xl font-bold text-green-500">
                        8,547 Steps
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {feature.id === "ai" && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-[#111518] mb-2">
                      AI Health Insights
                    </h4>
                    <p className="text-[#637988]">
                      Based on your recent activity patterns, our AI suggests:
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-blue-500 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-[#111518]">
                          Increase daily steps by 2,000 to reach your weekly
                          goal
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-blue-500 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-[#111518]">
                          Consider adding 15 minutes of meditation to your daily
                          routine
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-blue-500 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-[#111518]">
                          Your sleep quality has improved by 15% this week
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="primary-button">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
