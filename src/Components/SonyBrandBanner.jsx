const SonyBrandBanner = () => {
    return (
    <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/SfTnRff/Sony-VAIO-Z-banner.jpg" className="w-full" />
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/8gxn9Db/Sony-WH-1000-XM4-banner.jpg" className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/jzvtLbZ/Sony-Xperia-1-III-banner.jpg" className="w-full" />
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

export default SonyBrandBanner;