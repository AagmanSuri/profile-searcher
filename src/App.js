import React,{Component} from 'react';
import CardList from './CardList';
import {Profile} from './Profile'
import SearchBox from './SearchBox';
import Scroll from './Scroll'

class App extends Component{ 
    constructor(props){
        super();
        this.state={
            Profile:Profile,
            searchfield:""
        }
    }
    //user defined function to get the searched value
     onSearchChange=(event)=>{
        this.setState({
            searchfield:event.target.value
        })
    }

    render(){

        const FilteredArray=this.state.Profile.filter((arraydb)=>{
         return (
             //the filtering of array is being done here

             (arraydb.name.toLowerCase()).includes(this.state.searchfield.toLowerCase()) 
             || (arraydb.standard.includes(this.state.searchfield))
             || (arraydb.CodingLvl.toLowerCase().includes(this.state.searchfield.toLowerCase()))
             || (arraydb.Language.toLowerCase().includes(this.state.searchfield.toLowerCase()))
             );
        }
        );
        if(this.state.Profile.length===0){
            return<h1>Loading</h1>
        }
        else{
            return(
            <div className="tc">
                <h1 className="">Shortlisted Profile's</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList Profile={FilteredArray}/>
                </Scroll>
            </div>
        );}
    }
}

        
export default App;