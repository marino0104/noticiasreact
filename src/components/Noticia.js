import React from 'react';
import PropTypes from 'prop-types';

const Noticia = (props) => {
    const{description,title,url, urlToImage, source}=props.noticia;
    const imagen=(urlToImage) ? <div className="card-image"><img src={urlToImage} alt={title}/><span className="card-title">{source.name}</span></div> : '';
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                    {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} rel="" target="_blank" className="waves-effect waves-light btn">
                        Leer más
                    </a>
                </div>
            </div>
        </div>
    );
};
Noticia.propTypes={
    noticia:PropTypes.shape({
        urlToImage:PropTypes.string,
        url:PropTypes.string,
        title:PropTypes.string,
        description:PropTypes.string,
        source:PropTypes.object,
    }),
}
export default Noticia;