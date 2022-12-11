function App() {
    const [tweets, setTweets] = React.useState([
        {
            id: 0,
            icon:"💩",
            displayName:"ウンチ",
            accountName:"unti",
            content:"こんにちは",
        },
        {
            id: 1,
            icon:"🍇",
            displayName:"ブドウ",
            accountName:"budo",
            content:"ブドウです"
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