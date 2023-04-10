
const GOOGLE_API_KEY = "AIzaSyBiVKrZai7KmIcKfpR5BUc-uUUf5xOXUe0"

// export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" + GOOGLE_API_KEY;


// note that this API by default show only 5 videos
//so if we want to show more videos on our page we can modify this above url by adding maxresults parameter
//maxResults=50
// then it will show 50 videos(ther is limit of only 50 videos for this API)
//regionCode=US instead we put reginCode=IN in url

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;
