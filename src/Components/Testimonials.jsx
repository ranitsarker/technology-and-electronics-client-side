const Testimonials = () => {
  return (
    <section
      className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left"
      style={{ backgroundImage: 'url(https://tecdn.b-cdn.net/img/Photos/Others/background2.jpg)' }}>
              <h1 className="text-2xl font-semibold mb-8 text-center text-white">Our Testimonials</h1>

      <div className="flex justify-center">
        <div className="max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20"
            >
              <div className="items-center">
                <div className="mx-auto mb-6 flex items-center justify-center w-12 h-12">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                    className="rounded-full w-12 h-12 shadow-md dark:shadow-black/30"
                    alt="woman avatar"
                  />
                </div>
                <div className="md:ml-6">
                  <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                    I was amazed by the quality of the products on this website. They offer the latest technology from top brands, and the prices are unbeatable. I highly recommend it!
                  </p>
                  <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Anna Smith
                  </p>
                  <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                  IT Professional
                  </p>
                </div>
              </div>
            </div>
            <div
              className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20"
            >
              <div className="items-center">
                <div className="mx-auto mb-6 flex items-center justify-center w-12 h-12">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2811%29.jpg"
                    className="rounded-full w-12 h-12 shadow-md dark:shadow-black/30"
                    alt="man avatar"
                  />
                </div>
                <div className="md:ml-6">
                  <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                  This website has become my go-to place for all things tech and electronics. The variety of products is impressive, and the customer service is outstanding.
                  </p>
                  <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    John Doe
                  </p>
                  <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                  Tech Enthusiast
                  </p>
                </div>
              </div>
            </div>
            <div
              className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20"
            >
              <div className="items-center">
                <div className="mx-auto mb-6 flex items-center justify-center w-12 h-12">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2812%29.jpg"
                    className="rounded-full w-12 h-12 shadow-md dark:shadow-black/30"
                    alt="woman avatar"
                  />
                </div>
                <div className="md:ml-6">
                  <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                  I have been a loyal customer of this website for years. They never disappoint with their selection of top-notch tech products. It is a one-stop-shop for all your electronic needs.
                  </p>
                  <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Emily Johnson
                  </p>
                  <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                  Software Engineer
                  </p>
                </div>
              </div>
            </div>
            <div
              className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20"
            >
              <div className="items-center">
                <div className="mx-auto mb-6 flex items-center justify-center w-12 h-12">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2813%29.jpg"
                    className="rounded-full w-12 h-12 shadow-md dark:shadow-black/30"
                    alt="man avatar"
                  />
                </div>
                <div className="md:ml-6">
                  <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                  The experience of shopping on this website is unmatched. Their user-friendly interface and quick delivery make it my preferred destination for tech purchases.
                  </p>
                  <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Mark Smith
                  </p>
                  <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                  Marketing Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
