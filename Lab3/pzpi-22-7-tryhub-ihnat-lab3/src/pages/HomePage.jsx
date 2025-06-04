import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage: `linear-gradient(
                      rgba(0, 0, 0, 0.1) 0%,
                      rgba(0, 0, 0, 0.4) 100%
                    ),
                    url('https://lh3.googleusercontent.com/aida-public/AB6AXuA43s_WeV_Bkpws3PJyX-pGAs1ia0oTIxwc-QdCOKaPwc7paJ8TShokLne364JTD0i42zqzoUQwadE3EFyrNJbslq0xo34vajjYeU5MbEvymgJIP89u2QFeihc2Y1ZeMO796Oa6NipmH5kUTUPr2MrgSIenRap18YjZCCLqpyyI37V17ndL8EL7sZO85ajoHFViNvNZG6tWcrPeeKto22GMlYPq7ulKL1vcZ3cs86w10HYG9Bo5jx_dOYIRx1XteJ5-dmp2EE_QPH8')`,
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      AI-Powered Health Monitoring
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Revolutionizing personal health management with
                      intelligent insights and proactive care.
                    </h2>
                  </div>
                  <div className="flex-wrap gap-3 flex">
                    <button className="primary-button">
                      <span className="truncate">Start Monitoring</span>
                    </button>
                    <button className="secondary-button">
                      <span className="truncate">See Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Key Features
            </h2>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#111518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Comprehensive Health Metrics
                </h1>
                <p className="text-[#111518] text-base font-normal leading-normal max-w-[720px]">
                  Track vital health metrics with precision and ease.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                {/* Feature cards */}
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2xilchLa_Mpsv7m7CQNdI2UP6DolMR6rJC52a5buXVAIrdu6csNfqNyuC06nLWvyZnjRgV8CcNj4NOEmuwi5qx3FvmmCKcHc2RaXqwLKHwdKy75RossKMcSnWrsvRT3uzZEWQ7PYDBJBvBlUQvDc6hNyNfwS3B4z-fmiCcX7ZlF2sC6K4RXmP2UjINQtao8cT1dM_c6vqwRZ_lexZzabE_-xTAecBQydkU881QcASB3_2kN8jcNDMrf0wdaKaE3zlepdP_5t7l7M')`,
                    }}
                  />
                  <div>
                    <p className="text-[#111518] text-base font-medium leading-normal">
                      Heart Rate
                    </p>
                    <p className="text-[#637988] text-sm font-normal leading-normal">
                      Monitor your heart rate in real-time for optimal
                      cardiovascular health.
                    </p>
                  </div>
                </div>
                {/* Add more feature cards here */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
