"use client";

import styles from "./particles.module.css";
import { loadSlim } from "@tsparticles/slim";
import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {},
        []
    );

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: false,
            },
            fpsLimit: 60,
            interactivity: {
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 90,
                        duration: 0.4,
                    },
                },
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
            },
            particles: {
                color: {
                    value: "#878994", // Default color
                    animation: {
                        enable: false,
                        speed: 1, // Speed of color transition
                        sync: true, // If true, all particles change color at the same time
                    },
                },
                links: {
                    color: {
                        value: "#B4B6C2", // Default color for links
                        animation: {
                            enable: true,
                            speed: 1, // Speed of color transition
                            sync: true, // If true, all links change color at the same time
                        },
                    },
                    distance: 150,
                    enable: true,
                    opacity: 0.25,
                    width: 0.5,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 100,
                    },
                    value: 200,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (init) {
        return (
            <Particles
                id="particles"
                options={options}
                className={styles.particles}
                particlesLoaded={particlesLoaded}
            />
        );
    }
};

export default ParticlesBackground;
