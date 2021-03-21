import axios from 'axios'
import React, { useState } from 'react'
import CustomTitle from '../components/CustomTitle'

function TopicNews() {
    const [news, setNews] = useState([]);  
    const makeReq = async () => {
    const res = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=69B37vF2XwUQnMPhUn9NB8GOJEe0ptNg")
    setNews(res.data.response.docs);
    }

    React.useEffect(() => {
        makeReq()
    }, [])

    return (
        <div>
            <CustomTitle page="News"/>
            {
                news.map(item => {
                    return <p>{item.abstract}</p>

                })
            }
        </div>
    )
}

export default TopicNews
 