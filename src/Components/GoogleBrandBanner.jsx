const GoogleBrandBanner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/dcL692c/Google-Pixel-5-banner.jpg" className="w-full" />
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/4T7tZkC/Google-Pixelbook-Go-banner.jpg" className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/CHHN8Fv/Google-Pixel-Watch-banner.jpg" className="w-full" />
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

export default GoogleBrandBanner;