import { rajdhani } from '@/app/layout'
import Image from 'next/image'
import BannerImg from '../../../../public/HeroBannerImage.jpg'
import TextBg from '../../../../public/TextBg.png'

const Banner = () => {
    return (
        <section className="relative h-[85vh] w-full overflow-hidden">

            {/* Background Image */}
            <Image
                src={BannerImg}
                alt="Hero Banner"
                fill
                priority
                className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Text Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="max-w-7xl px-6 md:px-12">

                    <div className="relative inline-block top-20">
                        <Image
                            src={TextBg}
                            alt="TextBg"
                            width={300}
                            height={50}
                            className="block"
                        />

                        <h4 className="
        absolute inset-0
        flex items-center justify-center
        text-white font-semibold tracking-widest text-sm
    ">
                            WELCOME TO AUTONEST
                        </h4>
                    </div>


                    <h1
                        className={`text-white text-4xl md:text-6xl font-bold ${rajdhani.className} text-left`}
                    >
                        Drive Your <span className="text-primary">Dream</span> Car Today
                    </h1>

                    <p className="mt-4 max-w-lg text-gray-300 text-left text-lg">
                        Browse verified car listings and connect with trusted sellers across the platform.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="btn btn-primary">Browse Cars</button>
                        <button className="btn btn-outline text-white hover:text-primary hover:border-2 hover:border-primary">Sell Your Car</button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Banner
