'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import holdingHandsOverACliff from '../../../public/Pretty-Health Website/Images/Image (5).png';
import womanAi from '../../../public/Pretty-Health Website/Images/Image (6).png';
import gloves from '../../../public/Pretty-Health Website/Images/Image (7).png';
import heart from '../../../public/Pretty-Health Website/Images/Icon (18).png';
import send from '../../../public/Pretty-Health Website/Images/Icon (17).png';

const SimilarNews = () => {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const newsData = [
        {
            id: 1,
            image: holdingHandsOverACliff,
            name: 'A Decisive Victory for Progressive Policies',
            category: 'Politics',
            likes: 2.2,
            comments: 60,
        },
        {
            id: 2,
            image: womanAi,
            name: 'Tech Giants Unveil Cutting-Edge AI Innovations',
            category: 'Technology',
            likes: 6,
            comments: 92,
        },
        {
            id: 3,
            image: gloves,
            name: 'COVID-19 Variants',
            category: 'Health',
            likes: 10,
            comments: 124,
        },
        {
            id: 4,
            image: holdingHandsOverACliff,
            name: 'A Decisive Victory for Progressive Policies',
            category: 'Politics',
            likes: 2.2,
            comments: 60,
        },
        {
            id: 5,
            image: womanAi,
            name: 'Tech Giants Unveil Cutting-Edge AI Innovations',
            category: 'Technology',
            likes: 6,
            comments: 92,
        },
        {
            id: 6,
            image: gloves,
            name: 'COVID-19 Variants',
            category: 'Health',
            likes: 10,
            comments: 124,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisibleCards((prev) =>
                                prev.includes(index) ? prev : [...prev, index]
                            );
                        }, index * 200); // 200ms staggered delay
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the card is visible
            }
        );

        const cards = containerRef.current?.querySelectorAll('.card');
        cards?.forEach((card) => {
            observer.observe(card);
        });

        return () => {
            cards?.forEach((card) => {
                observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div ref={containerRef} className="px-[20px] py-[50px] md:px-20">
            <div className="header flex justify-between mb-[30px] items-center">
                <h3 className="text-xl font-semibold">Similar News</h3>
                <button 
                  className="py-2 px-6 md:px-10 border border-blue-500 rounded-md flex gap-2 text-[13px] 
                              transition-all duration-300 ease-in-out 
                               hover:scale-105">
                    View All News
                    <ArrowUpRight
                     size={20}
                     className="text-blue-600  transition-transform duration-300 ease-in-out hover:translate-x-1"
                    />
                </button>
            </div>

            <div className="container grid gap-7 lg:grid-cols-3">
                {newsData.map((card, index) => (
                    <div
                        key={card.id}
                        data-index={index}
                        className={`card transform transition-all duration-700 ease-out ${
                            visibleCards.includes(index)
                                ? 'opacity-100 scale-100 rotate-0'
                                : 'opacity-0 scale-90 -rotate-6'
                        }`}
                    >
                        <Image
                            src={card.image}
                            width={100}
                            height={50}
                            alt="Card Image"
                            className="w-full mb-5 transform transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <article className="mb-6">
                            <h4 className="text-[16px] font-semibold">{card.name}</h4>
                            <p>{card.category}</p>
                        </article>
                        <div className="flex items-center justify-between">
                            <div className="engagements text-[13px] flex items-center gap-2">
                                <div className="flex gap-1 items-center py-1 px-3 border cursor-pointer border-blue-600 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-800 hover:bg-blue-100">
                                    <Image src={heart} alt="like" width={22} height={22} />
                                    {card.likes}k
                                </div>
                                <div className="flex gap-1 items-center py-1 px-3 border cursor-pointer border-blue-600 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-800 hover:bg-blue-100">
                                    <Image src={send} alt="message" width={22} height={22} />
                                    {card.comments}
                                </div>
                            </div>

                            <button className="
                              py-2 px-6 md:px-10 border border-blue-500 rounded-md flex gap-2 text-[13px] 
                              transition-all duration-300 ease-in-out 
                               hover:scale-105
                            ">
                              Read More
                              <ArrowUpRight
                                size={20}
                                className="text-blue-600  transition-transform duration-300 ease-in-out hover:translate-x-1"
                              />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarNews;
