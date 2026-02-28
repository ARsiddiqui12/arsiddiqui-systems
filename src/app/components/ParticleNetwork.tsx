"use client";

import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas dimensions to window size
        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        // Particle class
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.5; // slow movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 1.5 + 0.5; // small points
            }

            update() {
                // Bounce off edges
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;

                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                const isDark = document.documentElement.classList.contains('dark');
                ctx.fillStyle = isDark ? "rgba(59, 130, 246, 0.4)" : "rgba(37, 99, 235, 0.2)"; // brand-500 / brand-600
                ctx.fill();
                ctx.closePath();
            }
        }

        const numParticles = Math.min(Math.floor((w * h) / 10000), 100);
        const particles: Particle[] = [];

        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            // Draw lines between close particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 - distance / 800})`; // Fade out line opacity with distance
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-20 opacity-50 transition-opacity duration-1000"
        />
    );
}
