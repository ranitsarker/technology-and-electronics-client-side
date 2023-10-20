const MicrosoftBrandBanner = () => {
    return (
        <>
        <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
                <img src="https://i.ibb.co/L9dgCgt/Microsoft-SQ1-and-SQ2-processors-banner.jpg" className="w-full h-full object-contain" />
            </div> 
            <div id="item2" className="carousel-item w-full">
                <img src="https://i.ibb.co/qNDdr2x/Microsoft-Surface-Book-3-banner.jpg" className="w-full" />
            </div> 
            <div id="item3" className="carousel-item w-full">
                <img src="https://i.ibb.co/VTsP7Xs/Microsoft-Surface-Pro-7-banner.jpg" className="w-full" />
            </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a>
            </div>
    </>
    );
};

export default MicrosoftBrandBanner;