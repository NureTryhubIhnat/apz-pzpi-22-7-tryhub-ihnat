import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h1 className="text-[#111518] text-2xl font-bold leading-tight">
                  Health Dashboard
                </h1>
                <div className="flex gap-3">
                  <button className="primary-button">
                    <span className="truncate">Add New Metric</span>
                  </button>
                  <button className="secondary-button">
                    <span className="truncate">Export Data</span>
                  </button>
                </div>
              </div>

              {/* Health Metrics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="text-[#637988] text-sm font-medium">
                    Heart Rate
                  </h3>
                  <p className="text-[#111518] text-2xl font-bold">72 BPM</p>
                  <p className="text-green-500 text-sm">Normal</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="text-[#637988] text-sm font-medium">
                    Blood Pressure
                  </h3>
                  <p className="text-[#111518] text-2xl font-bold">120/80</p>
                  <p className="text-green-500 text-sm">Normal</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="text-[#637988] text-sm font-medium">Steps</h3>
                  <p className="text-[#111518] text-2xl font-bold">8,547</p>
                  <p className="text-yellow-500 text-sm">75% of goal</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="text-[#637988] text-sm font-medium">Sleep</h3>
                  <p className="text-[#111518] text-2xl font-bold">7.5 hrs</p>
                  <p className="text-green-500 text-sm">Good</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-[#111518] text-xl font-bold mb-4">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-[#111518] font-medium">
                        Morning Exercise
                      </p>
                      <p className="text-[#637988] text-sm">
                        30 minutes of cardio
                      </p>
                    </div>
                    <span className="text-[#637988] text-sm ml-auto">
                      2 hours ago
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-[#111518] font-medium">
                        Blood Pressure Check
                      </p>
                      <p className="text-[#637988] text-sm">120/80 mmHg</p>
                    </div>
                    <span className="text-[#637988] text-sm ml-auto">
                      4 hours ago
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="text-[#111518] font-medium">Water Intake</p>
                      <p className="text-[#637988] text-sm">2 liters</p>
                    </div>
                    <span className="text-[#637988] text-sm ml-auto">
                      6 hours ago
                    </span>
                  </div>
                </div>
              </div>

              {/* Health Insights */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-[#111518] text-xl font-bold mb-4">
                  AI Health Insights
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-[#111518] font-medium">
                      Exercise Recommendation
                    </p>
                    <p className="text-[#637988] text-sm">
                      Based on your recent activity, consider increasing your
                      daily steps by 2,000 to reach your weekly goal.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-[#111518] font-medium">
                      Sleep Pattern Analysis
                    </p>
                    <p className="text-[#637988] text-sm">
                      Your sleep quality has improved by 15% this week. Keep
                      maintaining your current sleep schedule.
                    </p>
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

export default Dashboard;
