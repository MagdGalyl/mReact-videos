import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {

    // after getting the response from API,
    // we make state and get/update it using state
    state = { videos: [], selectedVideo: null };

    // Callback that will be called anytime user submit search
    // axios REQUESTs is ASYNC funtions
    onTermSubmit = async (term) => {
        // console.log(term)

        // now that we got the SearchTerm from (Child -SearchBar- using this callback as prop)
        // now we 'MAKE REQUEST TO the youtube API to FETCH data using our axios pre-config API'
        const response = await youtube.get('/search', {
            params: {
                q : term,
            }
        })

        // thats the request results
        // console.log(response)
        // thats the list of videos we got in the results
        // console.log(response.data.items)

        this.setState({ videos: response.data.items });
    }

    onVideoSelect = (video) => {
        console.log("From the App!", video);
      };

    render(){
        return(
            <div className = "ui container inverted segment primary">
                <SearchBar onFormSubmit={this.onTermSubmit} />

                {/* Linking the Video List Component that will use our response VIDEOS from state to show video list */}
                <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos = {this.state.videos} 
                />
                {/* {this.state.videos.length}  */}
            </div>
        )
    }
}

export default App;