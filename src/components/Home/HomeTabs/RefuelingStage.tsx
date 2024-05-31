const RefuelingStage = () => {
  return (
    <div className="p-[20px] bg-[#1B2040] rounded-md mt-10 h-full">
      <div className="flex justify-center py-5 border-b-2 border-[#000313]">
        <div>
          <p className="text-3xl text-[#0C8DFF] tracking-wide">
            Research & Development
          </p>
          <div className="flex justify-center mt-3">
            <p className="text-[#0C8DFF] text-xs">APRIL. 23, 2018</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid lg:grid-cols-12 ">
          <div className="lg:col-span-2 lg:mt-9 my-4 ">
            <div className="flex justify-center">
              <div>
                <p className="text-[#0C8DFF] opacity-80 text-xl tracking-wide">
                  OBJECTIVE
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-10">
            <p className="text-[#0C8DFF] text-xl mb-4 font-normal">
              Looking Ahead - Earn Rewards for Real Effort
            </p>
            <p className="text-[#95A0C5] leading-7 text-sm">
              AdToken will ensure a fair distribution of rewards that directly
              correlates with the effort and resources invested in providing
              computation and content generation. This means that your hard work
              and creativity are recognized and rewarded proportionately,
              fostering a fair and motivating environment for all contributors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RefuelingStage;
