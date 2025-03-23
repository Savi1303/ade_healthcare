import Image from "next/image";
import React, { FC } from "react";

interface FeatureCardProps {
    title: string;
    imageSrc: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, imageSrc }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="rounded-full p-4 flex items-center justify-center">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={100}
                    height={100}
                    className="w-[80px] sm:w-[100px] md:w-[120px] h-auto"
                />
            </div>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-bold text-gray-700">{title}</p>
        </div>
    );
};

export default FeatureCard;
