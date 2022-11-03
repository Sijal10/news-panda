import React, { Component } from 'react'
export default class NewsItems extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, source, author,date } = this.props;
        return (
            <div className='my-3'>
                

                    <div className={`card text-${this.props.mode === 'light' ? 'dark' : 'light'} bg-${this.props.mode}`} >
                        <img src={imgUrl} className="card-img-top" alt="This Item Does Not Includes An Image" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5><span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source}
                    </span>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} Published on {date}</small></p>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
            </div>
        )
    }
}