import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import techData from './data/technologies.json';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologies(techData.technologies);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const addToStack = (tech) => {
    if (stack.find((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: "bottom-right",
        theme: "dark"
      });
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: "bottom-right",
      theme: "dark"
    });
  };

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const removeAllFromStack = () => {
    setStack([]);
  };

  const categories = [...new Set(technologies.map((tech) => tech.category))];

  return (
    <div className="min-h-screen bg-[#0D0D1A]">
      <ToastContainer />
      <Navbar />
      <Hero />
      
      <section id="technologies" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E8E8F0] mb-4">
              Explore <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-[#9494B8] max-w-2xl mx-auto">
              Browse through our curated collection of cutting-edge technologies. 
              Click &quot;Add to Stack&quot; to build your perfect development environment.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button className="gradient-btn text-white px-5 py-2 rounded-full text-sm font-medium">
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-medium border border-[#2A2A45] text-[#9494B8] hover:border-[#FF2E90]/50 hover:text-[#FF2E90] transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-8 items-start">
            {/* Technology cards grid */}
            <div className="flex-grow">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-12 h-12 border-4 border-[#2A2A45] border-t-[#FF2E90] rounded-full animate-spin mb-4"></div>
                  <p className="text-[#9494B8] text-sm">Loading technologies...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech) => (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAddToStack={addToStack}
                      isInStack={stack.some((item) => item.id === tech.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Your Stack sidebar */}
            <div className="w-72 flex-shrink-0 hidden lg:block">
              <YourStack
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAllFromStack}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Your Stack - shown as a modal or bottom sheet */}
      <section className="lg:hidden py-8 border-t border-[#2A2A45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <YourStack
            stack={stack}
            onRemove={removeFromStack}
            onRemoveAll={removeAllFromStack}
          />
        </div>
      </section>

      {/* Projects section placeholder */}
      <section id="projects" className="py-20 border-t border-[#2A2A45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#E8E8F0] mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-[#9494B8] max-w-2xl mx-auto">
            Discover real-world projects built with the technologies you love. 
            Get inspired and see what you can create with your custom stack.
          </p>
        </div>
      </section>

      {/* About section placeholder */}
      <section id="about" className="py-20 border-t border-[#2A2A45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#E8E8F0] mb-6">
                About <span className="gradient-text">DevStack</span>
              </h2>
              <p className="text-[#9494B8] leading-relaxed mb-6">
                DevStack was born from the idea that building a tech stack shouldn't be overwhelming. 
                We help developers discover, compare, and assemble the best tools for their projects.
              </p>
              <p className="text-[#9494B8] leading-relaxed">
                Whether you're a seasoned engineer or just starting out, our platform provides 
                the insights and comparisons you need to make informed decisions about your 
                technology choices.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Technologies', value: '50+' },
                { label: 'Developers', value: '10K+' },
                { label: 'Stacks Created', value: '25K+' },
                { label: 'Ratings', value: '4.9/5' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#1E1E32] border border-[#2A2A45] rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-[#9494B8] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
