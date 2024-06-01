const SepoliaRover = () => {
  return (
    <div className="p-[20px] bg-gradient-to-br from-[#335EAF] via-[#5A3D9A] to-[#5A3D9A]  rounded-md">
      <div className="flex justify-center py-5 border-b-2 border-[#000313]">
        <p className="text-3xl text-white tracking-wide">AdChain Development</p>
      </div>
      <div className="mt-10">
        <div className="grid lg:grid-cols-12 ">
          <div className="lg:col-span-2 lg:my-9 my-3">
            <div className="lg:flex justify-center">
              <p className="text-white opacity-80 text-xl tracking-wide">
                Objective
              </p>
            </div>
          </div>
          <div className="lg:col-span-10 bg-[#212850] p-3 rounded-md flex items-center justify-center">
            <p className="text-white leading-7 text-sm">
              AdChain was deployed to transform the advertising industry by
              combating ad fraud and fostering transparency. Our innovative
              solutions, like the adChain publisher registry and Ads.txt Plus,
              are designed to create a more trustworthy and efficient digital
              advertising ecosystem. Discover in-depth insights, product
              updates, and expert perspectives that showcase our commitement to
              revolutionizing ad tech.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-12  items-center ">
          <div className="lg:col-span-2 lg:mt-9">
            <div className="lg:flex justify-center items-center">
              <p className="text-white opacity-80 text-xl tracking-wide">
                Phases
              </p>
            </div>
          </div>
          <div className="lg:col-span-10">
            <div className="lg:mt-10 mt-5 p-3 rounded-md lg:grid grid-cols-11 bg-[#212850]">
              <div className="lg:col-span-4 my-2">
                <p className="text-xl tracking-wide">ADT Generation</p>
                <div className="mt-3">
                  <p className="text-white text-xs">JUNE. 26, 2017</p>
                </div>
              </div>
              <div className="lg:col-span-7 w-full h-full flex items-center">
                <p className="text-sm text-white">
                  AdChain introduced AdToken, a virtuous utility token designed
                  to empower transparency and trust in the digital advertising
                  industry through blockchain technology.
                </p>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-md lg:grid grid-cols-11 bg-[#212850]">
              <div className="lg:col-span-4 my-2">
                <p className="text-xl tracking-wide">AdChain Deployment</p>
                <div className="mt-3">
                  <p className="text-white text-xs">APRIL. 23, 2018</p>
                </div>
              </div>
              <div className="lg:col-span-7 w-full h-full flex items-center">
                <p className="text-sm text-white">
                  Experience a new era of transparent digital advertising with
                  adChain Registry on Ethereum Mainnet, ensuring trust and
                  accountability in ad placement. Our work gave birth to the
                  token curated registry (TCR).
                </p>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-md lg:grid grid-cols-11 bg-[#212850]">
              <div className="lg:col-span-4 my-2">
                <p className="text-xl tracking-wide">AdChain Audits</p>
                <div className="mt-3">
                  <p className="text-white text-xs">FEBRUARY. 21, 2019</p>
                </div>
              </div>
              <div className="lg:col-span-7 flex w-full h-full  items-center">
                <p className="text-sm text-white">
                  Introducing adChain Audits: Your Independent Shield Against Ad
                  Fraud, Ensuring Transparency and Trust in Digital Advertising.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SepoliaRover;
