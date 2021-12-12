import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {

    // after getting the response from API,
    // we make state and get/update it using state
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('LoL')
    }

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

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    }

    onVideoSelect = (video) => {
        console.log("From the App!", video);
        this.setState ({selectedVideo: video })
      };

    render(){
        return(
            <div className = "ui container ">
                <SearchBar onFormSubmit={this.onTermSubmit} />

                <div className="ui grid">
                    <div className="ui two column row">
                        <div className="elven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                            {/* Linking the Video List Component that will use our response VIDEOS from state to show video list */}
                        </div>
                        
                        <div className="five wide column">
                            <VideoList 
                            onVideoSelect={this.onVideoSelect} 
                            videos = {this.state.videos} 
                            />
                            {/* {this.state.videos.length}  */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;