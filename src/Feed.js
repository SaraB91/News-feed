import React, { Component } from 'react';
import styled from 'styled-components';
import { getTopHeadlines, getCompleteSources } from './API-SRC/top-headlines.js';

const selectDropDown = (key, sources) => <option key={key} value={sources[key].id}>{sources[key].name}</option>
const showList = (key, articles) => <li key={key}><a href={articles[key].url} target='_blank'><h3>{articles[key].title}</h3></a> <p>{articles[key].publishedAt} <span>{articles[key].author}</span></p></li>
const StyledApp = styled.div`
 text-align: center;
 padding:20px 50px;
 width: 70%;
 margin: 0 auto;
`;
const StyledHeading = styled.div`
 text-align:left;
 display:block;
 margin:30px auto;
`;
const TextHeading = styled.div`
 text-align:left;
 display:inline-block;
`;
const StyledDropDown = styled.div`
 float:right;
 display:inline-block;
 select{
  cursor:pointer;
  background-color: #fff;
  border: 4px solid #ddd;
  border-radius: 5px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image:
  linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, transparent, transparent);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
 }
`;
const ResultData = styled.div`
 width:55%;
 margin:50px auto;
 text-align: left;
 background: #fafafa;
 padding:30px;
 h4{
   margin:0;
   font-size:1.5rem;
   color:red;
   line-height:40px;;
  text-decoration:underline;
 }
 }

`;
const Button = styled.button`
  padding: 10px;
  background: #fff;
  border: 3px solid red;
  color: red;
  font-weight:bold;
  cursor:pointer;
`;
class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: {},
            sources: {},
            currentSource : 'abc-news', 
            view: 5,
            links:[],
            details:[],
        }
        this.selectSource = this.selectSource.bind(this);
        this.showMoreLinks = this.showMoreLinks.bind(this);
        
    }
    
    componentDidMount() {
    
      getTopHeadlines(this.state.currentSource).then(response => {
        this.setState({ articles: response.data.articles.slice(0, 5) })
        // console.log(response.data.articles);
      });
      
      getCompleteSources().then(res => {
        console.log(res.data.sources);
        this.setState({ sources: res.data.sources })
      })
    }
    
    selectSource(event) {
      getTopHeadlines(event.currentTarget.value).then(response => {
          this.setState({ articles: response.data.articles.slice(0, 5) })
      })
      this.setState({  currentSource : event.currentTarget.value});
    }
      showMoreLinks(event) {    
            getTopHeadlines(this.state.currentSource).then(response => { 
                const articles = this.state.view === 5 ? response.data.articles : response.data.articles.slice(0, 5);
                this.setState({ articles: articles });
                this.state.view === 5 ? this.setState({ view: 10 }) : this.setState({ view:5 });
            })
        }
    render() {
        const { articles, sources, view } = this.state
        return (
        <StyledApp>
        <ResultData>
        <StyledHeading>
          <TextHeading>
            <h4>News</h4>  
          </TextHeading>
          <StyledDropDown>
            <select onChange={this.selectSource}>
            <option  selected disabled hidden>Filter By Source</option>
            {
              Object.keys(sources).map(key => selectDropDown(key, sources))
            }           
            </select>
          </StyledDropDown>
        </StyledHeading> 
        <div>
          <ul>
            {
                Object.keys(articles).map((key) => showList(key, articles))
            }
          </ul>
        </div>
        <div>
        <Button onClick={this.showMoreLinks}>{view === 5 ? `Show More` : `Show Less`}</Button>
        </div>
        </ResultData>
      </StyledApp>
          );
    }
}

export default Feed;