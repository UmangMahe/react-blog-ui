import './styles/meta.css'

const MetaDisplay = (props) => {
    return(
        <div className="meta-container">
            <span className="meta">
                <p className="type">{props.meta['blog-type']}</p>
                <div className="date">
                    <p>/</p>
                    <p>{props.meta.date}</p>
                </div>
                                    
            </span>
        </div>
    )
}

export default MetaDisplay