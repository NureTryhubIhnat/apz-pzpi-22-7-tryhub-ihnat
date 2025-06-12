import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h1 className="text-[#111518] text-2xl font-bold leading-tight">
                  Contact Us
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h2 className="text-[#111518] text-xl font-bold mb-4">
                      Get in Touch
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <svg
                            className="w-5 h-5 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#111518] font-medium">Phone</h3>
                          <p className="text-[#637988] text-sm">
                            +1 (555) 123-4567
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <svg
                            className="w-5 h-5 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#111518] font-medium">Email</h3>
                          <p className="text-[#637988] text-sm">
                            support@healthai.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <svg
                            className="w-5 h-5 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#111518] font-medium">
                            Address
                          </h3>
                          <p className="text-[#637988] text-sm">
                            123 Health Street
                            <br />
                            Medical District
                            <br />
                            San Francisco, CA 94107
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h2 className="text-[#111518] text-xl font-bold mb-4">
                      Business Hours
                    </h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#637988]">Monday - Friday</span>
                        <span className="text-[#111518] font-medium">
                          9:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#637988]">Saturday</span>
                        <span className="text-[#111518] font-medium">
                          10:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#637988]">Sunday</span>
                        <span className="text-[#111518] font-medium">
                          Closed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-[#111518] text-xl font-bold mb-4">
                    Send us a Message
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#111518] mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#111518] mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[#111518] mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#111518] mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message..."
                      />
                    </div>
                    <button type="submit" className="primary-button w-full">
                      Send Message
                    </button>
                  </form>
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

export default Contact;
