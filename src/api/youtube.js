import axios from "axios";

const KEY = "AIzaSyBNZK_Er9BkBZRqT969HMmtqOV1tMXdsB8";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
