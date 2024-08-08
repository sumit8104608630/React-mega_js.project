import { useEffect, useState } from 'react';
import service from '../../../appWrite_services/dtabaseService';
import Container from '../Container';
import Post from '../../Post';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts().then((post) => {
            if (post && Array.isArray(post.documents)) {
                setPosts(post.documents);
            } else {
                setPosts([]);
            }
        }).catch(error => {
            console.error('Error fetching posts:', error);
            setPosts([]);
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <Post {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
