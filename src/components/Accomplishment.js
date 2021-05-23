import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../CSS/Accomplishment.css';

class Accomplishment extends Component {
    render(){
        const {link, image, alt, title, subtitle1, subtitle2, description} = this.props;
        return (
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="accomplishment">
                    <a className="card" target="_blank" rel="noopener noreferrer" href={link}><img alt={alt} src={image}></img></a>
                    <div className="accomplishment-info">
                        <p className="accomplishment-title">{title}</p>
                        <p className="accomplishment-subtitle1">{subtitle1}</p>
                        <p className="accomplishment-subtitle2">{subtitle2}</p>
                        <p className="accomplishment-description">{description}</p>
                    </div>
                </div>
            </ScrollAnimation>
        );
    }
}

export default Accomplishment;
