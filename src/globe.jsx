import React, { Component } from 'react';

class Globe extends Component {
  constructor() {
    super();
    this.canvasRef = React.createRef();
    this.state = {
      rotation: 0
    };
    this.radius = 200;
    this.centerX = 400;
    this.centerY = 400;
  }

  componentDidMount() {
    this.ctx = this.canvasRef.current.getContext('2d');
    this.startAnimation();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrame);
  }

  drawGlobe() {
    const { rotation } = this.state;
    this.ctx.clearRect(0, 0, 800, 800);

    // Draw main circle (globe)
    this.ctx.beginPath();
    this.ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
    this.ctx.stroke();

    // Draw longitude lines
    for (let i = 0; i < 360; i += 30) {
      const angle = i + rotation;
      const radians = angle * (Math.PI / 180);
      const x = this.centerX + this.radius * Math.cos(radians);
      const y = this.centerY + this.radius * Math.sin(radians);
      this.ctx.beginPath();
      this.ctx.moveTo(this.centerX, this.centerY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }

  startAnimation() {
    const animate = () => {
      this.setState((prevState) => ({
        rotation: prevState.rotation + 0.2
      }), () => {
        this.drawGlobe();
        this.animationFrame = requestAnimationFrame(animate);
      });
    };
    this.animationFrame = requestAnimationFrame(animate);
  }

  render() {
    return (
      <canvas ref={this.canvasRef} width={800} height={800} />
    );
  }
}

export default Globe;
