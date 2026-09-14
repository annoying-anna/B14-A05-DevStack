function TechCard({ tech, onAddToStack, isInStack }) {
  return (
    <div className="tech-card rounded-2xl p-6 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-[#0D0D1A] flex items-center justify-center p-2">
          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
        </div>
        <span className="category-chip px-3 py-1 rounded-full text-xs font-semibold">
          {tech.badge}
        </span>
      </div>
      <h3 className="text-xl font-bold text-[#E8E8F0] mb-2">{tech.name}</h3>
      <p className="text-[#9494B8] text-sm leading-relaxed flex-grow mb-4">
        {tech.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-[#2A2A45]">
        <div className="flex items-center gap-3">
          <span className="category-chip px-2.5 py-1 rounded-full text-xs font-medium">
            {tech.category}
          </span>
          <span className="text-[#9494B8] text-xs">{tech.difficulty}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-[#FF2E90] fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-[#E8E8F0] text-sm font-semibold">{tech.rating}</span>
        </div>
      </div>
      <button
        onClick={() => onAddToStack(tech)}
        disabled={isInStack}
        className={`mt-4 w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
          isInStack
            ? 'bg-green-500/20 text-green-400 cursor-not-allowed border border-green-500/30'
            : 'gradient-btn text-white hover:opacity-90'
        }`}
      >
        {isInStack ? '✓ Added to Stack' : '+ Add to Stack'}
      </button>
    </div>
  );
}

export default TechCard;
