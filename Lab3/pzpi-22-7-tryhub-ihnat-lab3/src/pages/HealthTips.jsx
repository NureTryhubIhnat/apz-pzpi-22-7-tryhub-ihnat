import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HealthTips = () => {
  const healthTips = [
    {
      id: 1,
      title: "10 Ways to Improve Your Sleep Quality",
      category: "Sleep",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2xilchLa_Mpsv7m7CQNdI2UP6DolMR6rJC52a5buXVAIrdu6csNfqNyuC06nLWvyZnjRgV8CcNj4NOEmuwi5qx3FvmmCKcHc2RaXqwLKHwdKy75RossKMcSnWrsvRT3uzZEWQ7PYDBJBvBlUQvDc6hNyNfwS3B4z-fmiCcX7ZlF2sC6K4RXmP2UjINQtao8cT1dM_c6vqwRZ_lexZzabE_-xTAecBQydkU881QcASB3_2kN8jcNDMrf0wdaKaE3zlepdP_5t7l7M",
      description:
        "Learn effective strategies to enhance your sleep quality and wake up feeling refreshed.",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Importance of Regular Exercise",
      category: "Fitness",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2xilchLa_Mpsv7m7CQNdI2UP6DolMR6rJC52a5buXVAIrdu6csNfqNyuC06nLWvyZnjRgV8CcNj4NOEmuwi5qx3FvmmCKcHc2RaXqwLKHwdKy75RossKMcSnWrsvRT3uzZEWQ7PYDBJBvBlUQvDc6hNyNfwS3B4z-fmiCcX7ZlF2sC6K4RXmP2UjINQtao8cT1dM_c6vqwRZ_lexZzabE_-xTAecBQydkU881QcASB3_2kN8jcNDMrf0wdaKaE3zlepdP_5t7l7M",
      description:
        "Discover how regular physical activity can improve your overall health and well-being.",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Healthy Eating Habits",
      category: "Nutrition",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2xilchLa_Mpsv7m7CQNdI2UP6DolMR6rJC52a5buXVAIrdu6csNfqNyuC06nLWvyZnjRgV8CcNj4NOEmuwi5qx3FvmmCKcHc2RaXqwLKHwdKy75RossKMcSnWrsvRT3uzZEWQ7PYDBJBvBlUQvDc6hNyNfwS3B4z-fmiCcX7ZlF2sC6K4RXmP2UjINQtao8cT1dM_c6vqwRZ_lexZzabE_-xTAecBQydkU881QcASB3_2kN8jcNDMrf0wdaKaE3zlepdP_5t7l7M",
      description:
        "Essential tips for maintaining a balanced and nutritious diet.",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h1 className="text-[#111518] text-2xl font-bold leading-tight">
                  Health Tips & Articles
                </h1>
                <div className="flex gap-3">
                  <button className="primary-button">
                    <span className="truncate">Subscribe to Updates</span>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                  All
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Sleep
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Fitness
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Nutrition
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Mental Health
                </button>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {healthTips.map((tip) => (
                  <div
                    key={tip.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm"
                  >
                    <div
                      className="w-full h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${tip.image})` }}
                    />
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-blue-500 text-sm font-medium">
                          {tip.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">
                          {tip.readTime}
                        </span>
                      </div>
                      <h3 className="text-[#111518] text-lg font-bold mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-[#637988] text-sm mb-4">
                        {tip.description}
                      </p>
                      <button className="text-blue-500 text-sm font-medium hover:text-blue-600">
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-50 rounded-xl p-6 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-[#111518] text-xl font-bold mb-2">
                      Stay Updated with Health Tips
                    </h3>
                    <p className="text-[#637988] text-sm">
                      Subscribe to our newsletter for weekly health tips and
                      insights.
                    </p>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="primary-button whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HealthTips;
