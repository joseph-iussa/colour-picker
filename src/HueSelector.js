import React from 'react';
import colourConvert from 'color-convert';

export default class HueSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOnCanvas = this.handleClickOnCanvas.bind(this);
        this.handleNumberDisplayChange = this.handleNumberDisplayChange.bind(this);
    }

    componentDidMount() {
        this.ctx = this.canvas.getContext('2d');
        let hueGradient = this.ctx.createLinearGradient(0, 0, this.props.width, 0);
        for (let hue = 0; hue <= 360; hue += 60) {
            let offset = hue / 360;
            let colour = `hsl(${hue}, 100%, 50%`;
            hueGradient.addColorStop(offset, colour);
        }
        this.ctx.fillStyle = hueGradient;
        this.ctx.fillRect(0, 0, this.props.width, this.props.height);
    }

    handleClickOnCanvas(e) {
        const clickX = e.clientX;
        const [r, g, b] = this.ctx.getImageData(clickX, 0, 1, 1).data;
        const selectedHue = Number.parseFloat(colourConvert.rgb.hsl.raw(r, g, b)[0].toFixed(1));
        this.props.onHueChange(selectedHue);
    }

    handleNumberDisplayChange(e) {
        // TODO: validation on number.
        this.props.onHueChange(Number.parseFloat(e.target.value));
    }

    render() {
        const numberDisplayStyle = {
            width: '5em',
            height: this.props.height,
            textAlign: 'right'
        }
        return (
            <div className='selector hueSelector'>
                <canvas
                    width={this.props.width}
                    height={this.props.height}
                    onClick={this.handleClickOnCanvas}
                    ref={canvas => this.canvas = canvas} />
                <input type='number' style={numberDisplayStyle}
                    min='0' max='360' step='0.1'
                    value={this.props.selectedHue}
                    onChange={this.handleNumberDisplayChange} />
            </div>
        );
    }
}