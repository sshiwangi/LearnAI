import SparklesCore from "../components/Sparkles";

const SparklesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.7}
        maxSize={1.4}
        particleDensity={150}
        particleColor="#FFFFFF"
        className="h-[7rem] top-[-3rem] left-0"
      />
    </div>
  );
};

export default SparklesBackground;
