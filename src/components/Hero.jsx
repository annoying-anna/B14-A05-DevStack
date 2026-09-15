import bannerImg from '../assets/banner-stack.png';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-[#E8E8F0]">Build Your</span>
              <br />
              <span className="gradient-text">Perfect Tech Stack</span>
            </h1>
            <p className="text-[#9494B8] text-lg leading-relaxed max-w-lg">
              Discover, compare, and assemble the best technologies for your next project.
              Curate your ideal development environment with tools trusted by millions
              of developers worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#technologies"
                className="gradient-btn text-white px-8 py-3.5 rounded-full font-semibold text-base inline-flex items-center gap-2"
              >
                Explore Technologies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <button className="border-2 border-[#2A2A45] text-[#E8E8F0] px-8 py-3.5 rounded-full font-semibold text-base hover:border-[#FF2E90] hover:text-[#FF2E90] transition-all">
                Learn More
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0D0D1A] bg-gradient-to-br from-[#FF6B35] to-[#7B2CBF] flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#E8E8F0] font-semibold text-sm">Trusted by 10,000+ developers</p>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-[#FF2E90] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[#9494B8] text-sm ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 via-[#FF2E90]/20 to-[#7B2CBF]/20 rounded-3xl blur-3xl"></div>
            <img
              src={bannerImg}
              alt="Technology stack illustration"
              className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
