import './styles/Card.css';

export default function Card({imgUrl, altText, title, subTitle, desc}){
    return(
        <div>
            <div  className="card">
                <img className='card-img' alt={altText} src={imgUrl} />
                <h2 className='card-title'>{title}</h2>
                
                <div className="card-inner">
                    <h2 className='inner-title'>{subTitle}</h2>
                    <p className='inner-desc'>{desc}</p>
                </div>
            </div>
        </div>
    )
}