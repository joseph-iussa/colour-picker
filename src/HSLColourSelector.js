import React from 'react';
import HueSelector from './HueSelector';

export default class HSLColourSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hue: 0,
            saturation: 100,
            lightness: 50
        };
        this.selectorWidth = 500;
        this.selectorHeight = 50;

        this.handleHueChange = this.handleHueChange.bind(this);
    }

    handleHueChange(hue) {
        this.setState({ hue: hue });
    }

    render() {
        const { hue, saturation, lightness } = this.state;
        const colourString = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        return (
            <div className='hslColourSelector'>
                <HueSelector
                    width={this.selectorWidth}
                    height={this.selectorHeight}
                    onHueChange={this.handleHueChange}
                    selectedHue={this.state.hue} />
                <div
                    className='colourDisplay'
                    style={{ backgroundColor: colourString }} />
            </div>
        );
    }
}