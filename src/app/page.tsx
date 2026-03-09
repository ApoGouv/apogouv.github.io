import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white px-6">
      <div className="flex flex-col items-center text-center max-w-2xl space-y-10">
        {/* Logo Container with Smooth Transition */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 transition-all duration-500 ease-out hover:scale-105 group">
          <Image
            src="/logo.svg"
            alt="CubeDesigns Logo"
            fill
            priority
            className="drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-500"
          />
        </div>

        <div className="space-y-5">
          <h1 className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 px-2 tracking-tight font-black text-5xl md:text-8xl">
            {/* CUBE Group */}
            <div className="flex flex-col items-center group relative">
              <span className="bg-gradient-to-r from-cube-orange-light via-cube-orange to-cube-orange-dark bg-clip-text text-transparent z-10">
                CUBE
              </span>
              <span
                aria-hidden="true"
                className="reflection-wave select-none pointer-events-none opacity-30 group-hover:blur-[1px] scale-y-[-1] -mt-2 md:-mt-3 bg-gradient-to-r from-cube-orange-light via-cube-orange to-cube-orange-dark bg-clip-text text-transparent"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 20%, black 90%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 20%, black 90%)",
                }}
              >
                CUBE
              </span>
            </div>

            {/* DESIGNS Group */}
            <div className="flex flex-col items-center group relative">
              <span className="bg-gradient-to-r from-cube-blue-light via-cube-blue to-cube-blue-dark bg-clip-text text-transparent z-10">
                DESIGNS
              </span>
              <span
                aria-hidden="true"
                className="reflection-wave select-none pointer-events-none opacity-30 group-hover:blur-[1px] scale-y-[-1] -mt-2 md:-mt-3 bg-gradient-to-r from-cube-blue-light via-cube-blue to-cube-blue-dark bg-clip-text text-transparent"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 20%, black 90%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 20%, black 90%)",
                }}
              >
                DESIGNS
              </span>
            </div>
          </h1>
        </div>

        {/* Decorative Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cube-blue to-transparent opacity-50" />

        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Coming later in 2026
          </p>
          <div className="flex space-x-4 pt-4">
            {/* Add your social links later */}
            <div className="w-2 h-2 rounded-full bg-cube-blue-dark animate-ping" />
          </div>
        </div>
      </div>
    </main>
  );
}
