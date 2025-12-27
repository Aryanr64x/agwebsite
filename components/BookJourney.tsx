
export default function BookJourney() {
  return (
    <section className="w-full py-20 px-4 flex justify-center">
      <div className="max-w-5xl w-full bg-white/30 backdrop-blur-md rounded-3xl p-10 md:p-16 shadow-xl text-center space-y-6">
      
        <h3 className="text-2xl md:text-3xl font-semibold text-fuchsia-700">
          "
        </h3>

        <p className="text-2xl md:text-4xl font-medium text-black italic">
          Healing begins when someone listens— to the whispers beneath the noise
        </p>

        <p className="text-lg md:text-xl text-gray-900">
          (Let me be that someone who listens, holds space, and reminds you that you are not alone.)
        </p>
            <p className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto">
          So come, embark on this journey with me, a journey of returning home to yourself. A journey that feels safe, because your mental health matters.
        </p>

        <h3 className="text-3xl md:text-4xl font-bold text-fuchsia-700 pt-4">
          YOU MATTER!
        </h3>
      <a href="#bookyoursession">
           <button className="mt-6 px-8 py-3 bg-fuchsia-700 text-white rounded-xl text-lg font-semibold hover:bg-fuchsia-800 transition-all">
          Begin your journey
        </button>
      </a>
       
      </div>
    </section>
  );
}