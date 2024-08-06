import  { useEffect,useState } from 'react'
import service from '../../../appWrite_services/dtabaseService'
import Container from '../Container'
import Post from '../../Post'
function Home() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        service.getPosts().then((post)=>{
            if(post){
                setPosts(post);
            }
        
        })
    },[])
    if(posts){
  return (
    <div className='flex flex-wrap'>
        <Container>
            <Post {...posts}/>
        </Container>
    </div>
  )
}
}
export default Home