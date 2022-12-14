function App() {
    const [tweets, setTweets] = React.useState([
        {
            id: 0,
            icon:"๐ฉ",
            displayName:"ใฆใณใ",
            accountName:"unti",
            content:"ใใใซใกใฏ",
        },
        {
            id: 1,
            icon:"๐",
            displayName:"ใใใฆ",
            accountName:"budo",
            content:"ใใใฆใงใ"
        }
    ])

    const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);
    return (
        <div>
            <TweetInput addTweet={addTweet}/>
            <Timeline tweets={tweets}/>
        </div>
    )
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);