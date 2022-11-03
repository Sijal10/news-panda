import React, { Component } from 'react'
import NewsItems from './NewsItem';
import Spinner from './Spinner';
export default class News extends Component {
    articles = [];
    constructor() {
        super();
        this.state = {
            page:1,
            articles: this.articles,
            loading:false
        }
    }
    HandleNextClick= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=352db0bc8132403d86e88e3ede13c168&page=${this.state.page+1}`
        this.setState ({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles,
            loading: false
        })  
    }
    HandlePrevClick= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=352db0bc8132403d86e88e3ede13c168&page=${this.state.page-1}`
        this.setState ({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles,
            loading: false
        })
        
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=352db0bc8132403d86e88e3ede13c168&page=1`
        this.setState ({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
    }
    
    render() {
        return (
            <div className='container my-3'>
                <h3 className={`text-${this.props.mode==='light'?'dark':'light'}`} style={{marginTop :"5rem"}}>News Panda - Top {this.props.category} Headlines</h3>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (<div className="col-md-4" key={element.url}>
                            <NewsItems source={element.source.name} title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} mode={this.props.mode} date={element.publishedAt} author={element.author} />
                        </div>)
                    })}
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.HandlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.HandleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}