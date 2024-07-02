import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    slider: {
        marginTop:"150px",
        position: 'relative',
        width: '90%',
        maxWidth: '100%',
        height:"300px",
        margin: 'auto',
        overflow: 'hidden',
        border: '2px solid #ddd',
        borderRadius: '10px',
    },
    sliderWrapper: {
        display: 'flex',
        transition: 'transform 0.5s ease-in-out',
    },
    slide: {
        minWidth: '100%',
        opacity: 0,
        transition: 'opacity 0.5s ease-in-out',
        '&.active': {
            opacity: 1,
        },
    },
    image: {
        width: '100%',
        height:'50%',
        borderRadius: '10px',
    },
    arrowButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        padding: theme.spacing(1),
        cursor: 'pointer',
        borderRadius: '50%',
        '&:hover': {
            background: 'rgba(0, 0, 0, 0.7)',
        },
    },
    leftArrow: {
        left: theme.spacing(1),
    },
    rightArrow: {
        right: theme.spacing(1),
    },
}));