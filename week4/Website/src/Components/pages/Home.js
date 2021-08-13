


  import {Link} from 'react-router-dom'

  const posts= require("../data/Post.json")

  export default function Home(){

    const postData = posts.map(post =>{
      return (
        <div>
          {post.title}{post.slug}{post.content}
        </div>
      )
    })
      return(<header>
     Home
     {postData}
              </header>
          )
  }