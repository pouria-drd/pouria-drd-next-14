function HomePage() {
    return (
        <section className="flex flex-col gap-2">
            <div className="bg-green-300 p-4">
                <div className="bg-blue-500 flex justify-center w-full md:w-3/5 p-2">
                    <div
                        className="transition-all shadow-inner overflow-clip
                        absolute top-1/2 md:top-24 md:left-16
                        rounded-full size-64 sm:size-80 md:size-[340px]">
                        <img
                            className="fade-in"
                            src="/trs-pouria.png"
                            alt="pouria image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* <h1>Home Page</h1>
            <div className="size-60 bg-black">home</div>
            <div className="size-60 bg-black">home</div>
            <div className="size-60 bg-black">home</div>
            <div className="size-60 bg-black">home</div>
            <div className="size-60 bg-black">home</div>
            <div className="size-60 bg-black">home</div> */}
        </section>
    );
}

export default HomePage;
