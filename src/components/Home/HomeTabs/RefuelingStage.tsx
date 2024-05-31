const RefuelingStage = () => {
  return (
    <div className="p-[20px] bg-gradient-to-br from-[#335EAF] via-[#5A3D9A] to-[#5A3D9A] rounded-md mt-10 h-full">
      <div className="flex justify-center py-5 border-b-2 border-[#000313]">
        <div>
          <p className="text-3xl text-white tracking-wide">
            Research & Development
          </p>
          <div className="flex justify-center mt-3">
            <p className="text-white text-xs">Sep. 14, 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid lg:grid-cols-12 ">
          <div className="lg:col-span-2 lg:mt-9 my-4 ">
            <div className="flex justify-center">
              <div>
                <p className="text-white opacity-80 text-xl tracking-wide">
                  Objective
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-10">
            <p className="text-white text-xl mb-4">
              Looking Ahead - Earn Rewards for Real Effort
            </p>
            <p className="text-white leading-7 text-sm">
              AdToken will ensure a fair distribution of rewards that directly
              correlates with the effort and resources invested in providing
              computation and content generation. This means that your hard work
              and creativity are recognized and rewarded proportionately,
              fostering a fair and motivating environment for all contributors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RefuelingStage;
