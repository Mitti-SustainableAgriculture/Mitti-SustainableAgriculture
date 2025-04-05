import React from "react";
import Image from "next/image";
import aboutImage from "/public/assets/about.jpg";
import ministryImage from "/public/assets/ministryGov.svg";

const Aboutus = () => {
    return (
        <>
            <div className="min-h-screen relative">
                <Image
                    src={aboutImage}
                    alt="About Background"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
                <div className="absolute inset-0 bg-white opacity-40 z-10"></div>
                <section className="relative z-20">
                    <h1 className="text-center text-6xl font-bold mb-6 text-green-900 pt-8">About Us</h1>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center px-5 pt-24 sm:px-10">
                        <section className="text-lg font-semibold text-justify space-y-5 max-w-5xl">
                            <p>
                                At <b>Mitti</b>, we believe that the future of agriculture lies at the intersection of
                                <b> technology, sustainability, and empowerment</b>. Our mission is to equip farmers with
                                intelligent, data-driven tools that promote <b>sustainable farming practices</b>, improve
                                <b> crop yields</b>, and protect the health of our soil.
                            </p>
                            <p>
                                We are developing the <b>Smart Fertilizer Optimization System</b> — a solution that
                                analyzes <b>real-time soil health data</b>, <b>weather conditions</b>, and <b>crop-specific
                                    needs</b> to recommend precise fertilizer usage. By optimizing inputs, we help reduce
                                environmental impact, improve productivity, and support the financial wellbeing of farmers.
                            </p>
                            <p>
                                Supported by leading agricultural institutions and powered by modern technologies such as
                                <b> IoT sensors</b>, <b>machine learning models</b>, and <b>cloud-based platforms</b>,
                                <b> Mitti</b> bridges the gap between traditional agriculture and modern innovation.
                            </p>
                            <p>
                                Our solution aligns with national goals of sustainable rural development and aims to create
                                a measurable impact on <b>soil conservation</b>, <b>resource efficiency</b>, and
                                <b> climate resilience</b> — ensuring that the land we cultivate today remains fertile for
                                generations to come.
                            </p>
                            <p>
                                We are not just building an app — we are cultivating a movement for
                                <b> smart, sustainable, and inclusive agriculture</b>.
                            </p>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Aboutus;
