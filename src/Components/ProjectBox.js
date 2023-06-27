import './styles/ProjectBox.css';

export default function ProjectBox({imgUrl, altText, title, desc, proLink, repoLink}){
    return(
        <div>
            <div className='project-card'>
                <div className='img-flex'>
                    <img className='project-img' alt={altText} src={imgUrl} />
                    <div className='text-flex'>
                        <h2 className='project-title'>{title}</h2>
                        <p className='project-desc'>{desc}</p>
                        <div className='card-link'>
                            <a className='project-link' href={proLink} target='_blank'>To The Project</a>
                            <a className='repo-link' href={repoLink} target='_blank'>To The Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}