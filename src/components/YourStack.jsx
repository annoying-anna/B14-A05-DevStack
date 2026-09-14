import { toast } from 'react-toastify';

function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="your-stack-panel rounded-2xl p-6 sticky top-24 h-fit">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#E8E8F0]">Your Stack</h2>
        <span className="gradient-text font-semibold text-sm">
          {stack.length === 0
            ? 'Empty'
            : `${stack.length} Tech${stack.length > 1 ? 's' : ''}`}
        </span>
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-[#0D0D1A] border-2 border-dashed border-[#2A2A45] flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#9494B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="text-[#E8E8F0] font-medium text-sm mb-1">No technologies added yet</p>
          <p className="text-[#9494B8] text-xs">Start building your stack by exploring technologies above.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#0D0D1A] border border-[#2A2A45] group hover:border-[#FF2E90]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1A1A2E] flex items-center justify-center flex-shrink-0 p-1.5">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[#E8E8F0] font-medium text-sm truncate">{tech.name}</p>
                <p className="text-[#9494B8] text-xs">{tech.category}</p>
              </div>
              <button
                onClick={() => {
                  onRemove(tech.id);
                  toast.success(`${tech.name} removed from your stack`, {
                    position: "bottom-right",
                    theme: "dark"
                  });
                }}
                className="w-7 h-7 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100"
                aria-label={`Remove ${tech.name}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
          <button
            onClick={() => {
              onRemoveAll();
              toast.info('All technologies removed from your stack', {
                position: "bottom-right",
                theme: "dark"
              });
            }}
            className="w-full py-2.5 rounded-xl border border-[#2A2A45] text-[#9494B8] hover:text-red-400 hover:border-red-500/30 font-medium text-sm transition-all mt-4"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}

export d