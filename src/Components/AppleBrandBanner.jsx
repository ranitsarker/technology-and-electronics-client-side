const AppleBrandBanner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/3CmppGP/Air-Pods-Max-banner.jpg" className="w-full" />
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/jD4hfWJ/Apple-Watch-Series-7-banner.jpg" className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/WHxzNvn/i-Phone-13-Pro-banner.jpg" className="w-full" />
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

export default AppleBrandBanner;