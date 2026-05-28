import { useEffect, useRef, useState } from "react";

const Fire = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [startFireworks, setStartFireworks] = useState(false);

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartFireworks(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fireworks animation
  useEffect(() => {
    if (!startFireworks) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = 250);

    const fireworks = [];

    class Firework {
      constructor() {
        this.x = Math.random() * width;
        this.y = height;
        this.targetY = Math.random() * (height / 2);
        this.radius = 2;
        this.color = `hsl(${Math.random() * 60 + 20}, 100%, 60%)`;
        this.speed = Math.random() * 3 + 4;
        this.particles = [];
        this.exploded = false;
      }

      update() {
        if (!this.exploded) {
          this.y -= this.speed;

          if (this.y <= this.targetY) {
            this.explode();
          }

          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        this.particles.forEach((particle, index) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.alpha -= 0.015;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,215,0,${particle.alpha})`;
          ctx.fill();

          if (particle.alpha <= 0) {
            this.particles.splice(index, 1);
          }
        });
      }

      explode() {
        this.exploded = true;

        for (let i = 0; i < 50; i++) {
          this.particles.push({
            x: this.x,
            y: this.y,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6,
            alpha: 1,
          });
        }
      }
    }

    let animationFrame;

    const animate = () => {
      ctx.fillStyle = "rgba(10, 6, 0, 0.2)";
      ctx.fillRect(0, 0, width, height);

      if (Math.random() < 0.05) {
        fireworks.push(new Firework());
      }

      fireworks.forEach((fw, index) => {
        fw.update();

        if (fw.exploded && fw.particles.length === 0) {
          fireworks.splice(index, 1);
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 250;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, [startFireworks]);

  return (
    <section ref={sectionRef} className="relative h-[250px] overflow-hidden bg-gradient-to-b from-[#120b00] via-[#2b1a00] to-[#120b00] flex items-end justify-center">
      
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center pb-10 px-4">
        <h4 className="text-[#f5d77a] italic text-xl md:text-3xl font-serif">
          Celebrating 50 Golden Years
        </h4>

        <p className="uppercase tracking-[0.3em] text-[#c89b3c] text-[10px] md:text-xs mt-2">
           A Life of Courage and Purpose
        </p>
      </div>
    </section>
  );
};

export default Fire;