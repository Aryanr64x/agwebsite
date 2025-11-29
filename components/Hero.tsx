import CustomSlider from "./CustomSlider"


const Hero = () => {

    return (
        <section id="#home">
            <div className="min-h-screen mx-24">
                <div className="mt-16">
                    <CustomSlider
                        slides={[
                            <div className="h-[70vh] border border-fuchsia-950 flex justify-center items-center  rounded-sm text-center">
                               <div>
                                     <div className="text-5xl text-fuchsia-900">
                                    "
                                </div>
                                <div className="text-5xl italic mt-4">
                                    Healing begins when someone listens— to the whispers beneath the noise.
                                </div>
                                <div className="text-3xl mt-8">
                                    — Annesha Guha
                                </div>  
                               </div>
                            </div>,

                            <div className="h-[70vh] border border-fuchsia-950  flex items-center justify-center rounded-sm text-center ">
                                 <div>
                                <div className="text-5xl text-fuchsia-900">
                                    What is mental health ?
                                </div>
                                <div className="text-xl italic mt-8 px-8">
                                   According to American Psychological Association, Mental health is a state of mind characterized by emotional well-being, good behavioural adjustment, relative freedom from anxiety and disabling symptoms, and a capacity to establish constructive relationships and cope with the ordinary demands and stresses of life.
                                </div>
                                
                               </div>
                            </div>,
                            <div className="h-[70vh] border border-fuchsia-950  flex items-center justify-center text-center rounded-sm ">
                                 <div className="px-16">
                                <div className="text-5xl text-fuchsia-900">
                                    Why Are Mental and Emotional Well-Being So Important?
                                </div>
                                <div className="mt-4">
                                    Mental and emotional well-being are key for thriving and functioning optimally in our daily lives.
                                </div>
                                <div className="text-xl italic mt-8  text-left">
                                   <ul className="list-disc">
                                        <li>Quality of life: Mental and emotional health are directly linked to the quality of our lives and our levels of life satisfaction.</li>
                                        <li>Physical health: There is a strong connection between mental health and physical health. Stress, for example, can lead to chronic conditions like heart disease.</li>
                                        <li>Relationships: Our mental and emotional state affects how we interact with others. Being in a good mental state allows us to form positive and healthy relationships.</li>
                                   </ul>
                                </div>
                                
                               </div>
                            </div>,
                             <div className="h-[70vh] border border-fuchsia-950  flex items-center justify-center text-center rounded-sm ">
                                 <div className="px-16">
                                <div className="text-5xl text-fuchsia-900">
                                  Facilities
                                </div>
                               
                                <div className="text-5xl italic mt-8  text-left">
                                   Psychotherapy and Counselling
                                </div>

                                 <div className="mt-4">
                                   Professional online therapy services tailored to your unique needs
                                </div>
                                
                               </div>
                            </div>
                        ]}
                    />
                </div>
            </div>
        </section>
    )

}

export default Hero