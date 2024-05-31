const Colonization = () => {
  return (
    <div className="p-[20px] bg-gradient-to-br from-[#335EAF] via-[#5A3D9A] to-[#5A3D9A] rounded-md mt-10">
      <div className="flex justify-center py-5 border-b-2 border-[#000313]">
        <p className="text-3xl text-white tracking-wide">Ai Colonization</p>
      </div>
      <div className="mt-10">
        <div className="grid lg:grid-cols-12 ">
          <div className="lg:col-span-2 lg:my-9 my-4">
            <div className="lg:flex justify-center">
              <p className="text-white opacity-80 text-xl tracking-wide">
                Mission
              </p>
            </div>
          </div>
          <div className="lg:col-span-10">
            <p className="text-white leading-7 text-sm">
              In a world where AI drives innovation and efficiency, we believe
              that true progress comes when you hold the power to shape your
              destiny. Our platform is designed to put the control of AI-powered
              applications back into your hands, ensuring that the future is not
              just built for you, but by you.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 items-center ">
          <div className="lg:col-span-2 mt-9">
            <div className="lg:flex justify-center my-5">
              <p className="text-white opacity-80 text-xl tracking-wide">
                Phases
              </p>
            </div>
          </div>
          <div className="col-span-10">
            <div className="lg:mt-10 p-4 bg-[#212850] rounded-md lg:grid grid-cols-11">
              <div className="lg:col-span-4 my-2">
                <p className="text-white tracking-widest text-xl">
                  GenAI Integrations
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm text-white">
                  Introducing the next phase of innovation with GenAI
                  integration into Web3 technology: AdToken. AdToken empowers
                  users to generate high-quality content that meets
                  AdPrompt.Ai’s foundational requirements while incentivizing
                  superior engagement and content quality. Our advanced system
                  ensures that as Large Language Models (LLMs) and content
                  performance improve, so do your rewards.
                </p>
              </div>
            </div>

            <div className="mt-5 p-3 bg-[#212850] rounded-md lg:grid grid-cols-11">
              <div className="lg:col-span-4 my-2">
                <p className="text-white tracking-widest text-xl">
                  ADT Lift-Off
                </p>
                <p className="text-white opacity-80 text-xs mt-3">
                  2024 - Future
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm text-white">
                  This new Lift-Off phase marks the launch of AdPrompt.AI and a
                  new course for additional utility functions for ADT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Colonization;
