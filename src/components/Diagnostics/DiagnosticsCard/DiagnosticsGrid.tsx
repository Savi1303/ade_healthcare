import React from "react";
import DiagnosticsCard from "./DiagnosticsCard";

const testData = [
    { title: "Food Handler's Test", price: "₦12,550" },
    { title: "Chemical Handlers Test", price: "₦38,000" },
    { title: "Female Annual Medical Test", price: "₦64,710" },
    { title: "Steward Medical Screening", price: "₦15,100" },
    { title: "Pre-Nuptial Test", price: "₦14,850" },
    { title: "Male Annual Medical Screening", price: "₦65,610" },
    { title: "Pre-Employment Screening", price: "₦18,500" },
    { title: "Pre-Admission Screening", price: "₦12,550" },
];

const DiagnosticsGrid: React.FC = () => {
    return (
        <div className="bg-gray-100 py-12 px-6">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-8 max-w-6xl mx-auto">
                {testData.map((test, index) => (
                    <DiagnosticsCard key={index} {...test} />
                ))}
            </div>
        </div>
    );
};

export default DiagnosticsGrid;
