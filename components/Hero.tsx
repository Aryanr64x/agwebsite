import CustomSlider from "./CustomSlider";

const Hero = () => {
  return (
    <section id="home" className="pt-20 md:pt-24">
      <div className="min-h-screen mx-4 sm:mx-6 md:mx-12 lg:mx-24">
        <div className="mt-8 md:mt-16">
          <CustomSlider
            slides={[
              /* Slide 1 */
              <div className="h-[60vh] md:h-[70vh] border border-fuchsia-950 flex justify-center items-center rounded-sm text-center px-4 md:px-12">
                <div>
                  <div className="text-3xl md:text-5xl text-fuchsia-900">"</div>

                  <div className="text-xl sm:text-2xl md:text-4xl italic mt-4 leading-relaxed">
                    Healing begins when someone listens— to the whispers beneath the noise.
                  </div>

                  <div className="text-lg sm:text-xl md:text-3xl mt-6 md:mt-8">
                    — Annesha Guha
                  </div>
                </div>
              </div>,

              /* Slide 2 */
              <div className="h-[60vh] md:h-[70vh] border border-fuchsia-950 flex items-center justify-center rounded-sm text-center px-4 md:px-12">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-5xl text-fuchsia-900">
                    What is mental health?
                  </div>

                  <div className="text-sm sm:text-base md:text-xl italic mt-6 md:mt-8 leading-relaxed">
                    According to American Psychological Association, mental health is a
                    state of mind characterized by emotional well-being, good behavioural
                    adjustment, relative freedom from anxiety and disabling symptoms, and a
                    capacity to establish constructive relationships and cope with the
                    ordinary demands and stresses of life.
                  </div>
                </div>
              </div>,

              /* Slide 3 */
              <div className="h-[60vh] md:h-[70vh] border border-fuchsia-950 flex items-center justify-center text-center rounded-sm px-4 md:px-16">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-5xl text-fuchsia-900">
                    Why Are Mental and Emotional Well-Being Important?
                  </div>

                  <div className="mt-4 text-sm sm:text-base md:text-lg">
                    Mental and emotional well-being are key for thriving and functioning
                    optimally in our daily lives.
                  </div>

                  <ul className="list-disc mt-6 md:mt-8 text-left text-sm sm:text-base md:text-xl space-y-3 px-4">
                    <li>
                      <b>Quality of life:</b> Mental and emotional health are directly linked
                      to life satisfaction.
                    </li>
                    <li>
                      <b>Physical health:</b> There is a strong connection between mental health and physical health, good mental health=good physical health
                    </li>
                    <li>
                      <b>Relationships:</b> Good mental health enables positive and healthy
                      relationships.
                    </li>
                  </ul>
                </div>
              </div>,

              /* Slide 4 */
              <div className="h-[60vh] md:h-[70vh] border border-fuchsia-950 flex items-center justify-center text-center rounded-sm px-4 md:px-16">
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl text-fuchsia-900">
                    Facilities
                  </div>

                  <div className="text-xl sm:text-2xl md:text-4xl italic mt-6 md:mt-8">
                    Psychotherapy and Counselling
                  </div>

                  <div className="mt-4 text-sm sm:text-base md:text-lg">
                    Professional online therapy services tailored to your unique needs
                  </div>
                </div>
              </div>,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
