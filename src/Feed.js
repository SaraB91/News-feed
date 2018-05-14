import React, { Component } from 'react';
import styled from 'styled-components';

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
    render() {
        return (
        <StyledApp>
        <ResultData>
        <StyledHeading>
          <TextHeading>
            <h4>News</h4>  
          </TextHeading>
          <StyledDropDown>
            <select >
            <option  selected disabled hidden>Filter By Source</option>         
            </select>
          </StyledDropDown>
        </StyledHeading> 
        <div>
        <Button>Show more </Button>
        </div>
        </ResultData>
      </StyledApp>
          );
    }
}

export default Feed;