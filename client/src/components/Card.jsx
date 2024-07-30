
import PropTypes from "prop-types";



export default function Card( { image, link, title }){

    return(
        <div className={'card'}>
            <div className={'cardTop'}>
                <img className={'cardImage'} src={image}/>
            </div>
            <div className={'cardBottom'}>
                <a href={`${ link }`}>{ title }</a>
            </div>
        </div>
    );

}



Card.propTypes = {
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}