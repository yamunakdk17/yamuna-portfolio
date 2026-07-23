import React from "react";

const RadialGradientBackground = ({ variant = "hero", gradients = [] }) => {
    const variants = {
        hero: {
            position: "top-1 left-1 -translate-x-1/2 -translate-y-1/2",
            size: "w-[1400px] h-[1400px]",
            
                colors: [
                    { color: "rgba(99, 102, 241, 0.10)", stop: "20%" },
                    { color: "rgba(99, 102, 241, 0.20)", stop: "35%" },
                    { color: "rgba(99, 102, 241, 0.30)", stop: "50%" },
                    { color: "rgba(99, 102, 241, 0.20)", stop: "65%" },
                    { color: "rgba(99, 102, 241, 0.10)", stop: "80%" },
                
            ],
            blur: "0px",
            opacity: 3
        },

        second: {
            position:  "top-1 right-1 translate-x- 1/2 -translate - y-1/2",
            size: "w-[1400px] h-[1400px]",
            colors: [
                { color: "rgba(99, 102, 241, 0.10)", stop: "20%" },
                { color: "rgba(99, 102, 241, 0.20)", stop: "35%" },
                { color: "rgba(99, 102, 241, 0.30)", stop: "50%" },
                { color: "rgba(99, 102, 241, 0.20)", stop: "65%" },
                { color: "rgba(99, 102, 241, 0.10)", stop: "80%" }
            ],
            blur: "0px",
            opacity: 3
        },

        third: {
            position: "bottom-1 right-1",
            size: "w-[1300px] h-[1300px]",
            colors: [
                { color: "rgba(99, 102, 241, 0.25)", stop: "100%" },
                { color: "rgba(99, 102, 241, 0.45)", stop: "100%" },
                { color: "rgba(99, 102, 241, 0.5)", stop: "100%" },
                { color: "rgba(99, 102, 241, 0.45)", stop: "100%" },
                { color: "rgba(99, 102, 241, 0.25)", stop: "100%" }
            ],
            blur: "0px",
            opacity: 0.5
        },

        about: {
            position: "bottom-0 left-[75%]",
            size: "w-[700px] h-[700px]",
            colors: [
                { color: "rgba(99, 102, 241, 0.25)", stop: "100%" },
                { color: "rgba(99, 102, 241, 0.45)", stop: "100%" },
                { color: "rgba(99, 102, 241, 0.5)", stop: "100%" },
                { color: "rgba(99, 102, 241, 0.45)", stop: "100%" },
                { color: "rgba(99, 102, 241, 0.25)", stop: "100%" }
            ],
            blur: "0px",
            opacity: 3,
        },
    };

    const activeGradients =
        variant === "custom"
            ? gradients
            : [variants[variant] || variants.hero];

    const generateGradient = (colors) => {
        const colorStops = colors
            .map(({ color, stop }) => `${color} ${stop}`)
            .join(", ");

     return `radial-gradient(
    circle at center,
    transparent 0%,
    rgba(99,102,241,0.05) 20%,
    rgba(99,102,241,0.12) 40%,
    rgba(99,102,241,0.20) 60%,
    rgba(99,102,241,0.10) 80%,
    transparent 100%
)`;
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {activeGradients.map((gradient, index) => (
                <div
                    key={index}
                    className={`absolute ${gradient.position} ${gradient.size}`}
                    style={{
                        background: generateGradient(gradient.colors),
                        filter: `blur(${gradient.blur})`,
                        opacity: gradient.opacity,
                        borderRadius: "50%",
                    }}
                />
            ))}

        </div>
    );
};

export default RadialGradientBackground;