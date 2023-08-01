/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

const Confetti = () => {
  const canvasRef = useRef(null);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const confettiColors = ['#ff0000', '#00ff00', '#0000ff']; // Customize the colors of the confetti

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pieces = [];

    canvas.width = width;
    canvas.height = height;

    // Confetti Particle class
    class ConfettiPiece {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.angle = Math.random() * 360;
        this.speed = 1 + Math.random() * 5;
        this.radius = 18 + Math.random() * 4;  // change width of the confetti pieces here 
        this.d = 2;
        this.tilt = Math.floor(Math.random() * 10) - 10;
      }

      update() {
        this.y += this.speed;
        this.x += Math.sin(this.angle) * 2;
        this.angle += this.tilt * 0.1;

        if (this.y <= height) {
          this.d += 0.1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.lineWidth = this.radius / 2;
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.x + this.tilt + this.radius / 4, this.y);
        ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.radius / 4);
        ctx.stroke();
      }
    }

    // Create confetti pieces
    const createConfetti = () => {
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        pieces.push(new ConfettiPiece(x, y, color));
      }
    };

    // Animate confetti
    const animateConfetti = () => {
      ctx.clearRect(0, 0, width, height);

      pieces.forEach((piece) => {
        piece.update();
        piece.draw();
      });

      requestAnimationFrame(animateConfetti);
    };

    createConfetti();
    animateConfetti();

    // Clean up
    return () => {
      pieces.length = 0;
    };
  }, [width, height, confettiColors]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0,  pointerEvents: 'none' }} />;
};

  
  export default Confetti
