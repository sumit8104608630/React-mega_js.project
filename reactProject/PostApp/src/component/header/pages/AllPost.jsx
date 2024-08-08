import React,{useEffect, useState} from 'react'
import service from '../../../appWrite_services/dtabaseService'
//import Button from '../../Button'
import Post from "../../Post"
import "../../../App.css"
import Container from '../Container'
function AllPost() {
    const [post,setPost]=useState([]);
    useEffect(()=>{
      service.getPosts([]).then((posts) => {
        if (posts) {
          setPost(posts.documents)
        }
    })
    },[])

  return (
    <div>
        <Container>
            <div className='flex flex-wrap'>
            <Post>{post.map((item)=><div key={item.$id}>{item}</div>)}</Post>
         </div>
        </Container>
    </div>
  )
}

export default AllPost