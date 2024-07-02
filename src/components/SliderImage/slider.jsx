import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import useStyles from "./styles";



const ImageSlider = ({ images }) => {
    const classes = useStyles();
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Thay đổi slide sau mỗi 3 giây

        return () => clearInterval(interval); // Xóa interval khi component bị hủy
    }, [images.length]);
    return (
        <div className={classes.slider}>
            <div className={classes.sliderWrapper} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

                {images.map((image, index) => (
                    <div
                        className={`${classes.slide} ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                    >
                        <img src={image} alt={`Slide ${index}`} className={classes.image} />
                    </div>
                ))}
            </div>
            <Button className={`${classes.arrowButton} ${classes.leftArrow}`} onClick={prevSlide}>❮</Button>
            <Button className={`${classes.arrowButton} ${classes.rightArrow}`} onClick={nextSlide}>❯</Button>
        </div>
    );
};

export default ImageSlider;
