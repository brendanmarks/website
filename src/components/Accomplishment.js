import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import ScrollAnimation from 'react-animate-on-scroll';
import '../CSS/Accomplishment.css';

class Accomplishment extends Component {
    
    render(){
        const styles = StyleSheet.create({
            imageStyle: {
                alignSelf: 'center',
                height:'100%', 
                width:'100%'
              }
          });
        const {link, image, alt, title, subtitle1, subtitle2, description} = this.props;
        return (
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="accomplishment">
                    <a className="card" target="_blank" rel="noopener noreferrer" href={link}><Image style={styles.imageStyle} resizeMode={'contain'} alt={alt} source={image}></Image></a>
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
