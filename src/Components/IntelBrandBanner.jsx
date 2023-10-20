const IntelBrandBanner = () => {
    return (
        <>
        <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
                <img src="https://i.ibb.co/rdHfLb8/Intel-Core-i7-1165-G7-banner.jpg" className="w-full" />
            </div> 
            <div id="item2" className="carousel-item w-full">
                <img src="https://i.ibb.co/C1M0tfF/Intel-NUC-11-Enthusiast-Kit-NUC11-PHKi7-C-banner.jpg" className="w-full" />
            </div> 
            <div id="item3" className="carousel-item w-full">
                <img src="https://i.ibb.co/SrsZJWT/Intel-Core-i9-11900-K-banner.webp" className="w-full" />
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

export default IntelBrandBanner;