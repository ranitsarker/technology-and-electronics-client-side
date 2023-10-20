
const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(/banner-bg.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Your Tech Journey Starts Here</h1>
                    <p className="mb-5">Uncover the Best in Electronics and Technology from Leading Brands like Apple, Samsung, Sony, Google, Intel, and Microsoft.</p>
                    </div>
                </div>
                </div>
        </>
    );
};

export default Banner;