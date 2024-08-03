
import PropTypes from "prop-types";
import {Link} from "react-router-dom";



export default function Card( { image, link, title }){




    return(
        <div className={'card'}>
            <div className={'cardTop'}>
                <img className={'cardImage'} src={image} alt={'picture'}/>
            </div>
            <div className={'cardBottom'}>
                <Link to={'/ProfilePage'}>{link}</Link>
            </div>
        </div>
    );

}



Card.propTypes = {
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}