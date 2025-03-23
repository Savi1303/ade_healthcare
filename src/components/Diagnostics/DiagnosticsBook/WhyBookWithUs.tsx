import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
    { title: "Convenience", imageSrc: "/Pretty-Health Website/Images/Icon (8).png" },
    { title: "Reduced Wait Times", imageSrc: "/Pretty-Health Website/Images/Icon (8).png" },
    { title: "Continuity of Care", imageSrc: "/Pretty-Health Website/Images/Icon (8).png" },
    { title: "Privacy", imageSrc: "/Pretty-Health Website/Images/Icon (8).png" },
];

const WhyBookWithUs: React.FC = () => {
    return (
        <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24">
            {/* Title Section */}
            <div className="max-w-4xl lg:text-left text-center mx-auto lg:mx-0 lg:w-[550px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-tight">
                    Why should you <span className="text-black font-extrabold">book</span> a
                    <span className="text-black font-extrabold"> diagnostic test</span> with{" "}
                    <span className="text-black font-extrabold">Us?</span>
                </h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 justify-center items-center mt-10">
                {features.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} imageSrc={feature.imageSrc} />
                ))}
            </div>
        </section>
    );
};

export default WhyBookWithUs;
