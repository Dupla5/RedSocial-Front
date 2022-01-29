import { useSelector } from "react-redux";
import { ItemListPost } from "../items/ItemListPost"
import { PostPublished } from "./PostPublished";


export const FeedScreen = () => {
    const { post } = useSelector(state => state);


    return (
        <div>
            <h1>Bienvenido</h1>
                <PostPublished/>
                <ul className="container d-flex flex-wrap justify-content-center">
                    {post.map(post => (
                        <ItemListPost key={post.id_Post} {...post} />
                    ))}
                </ul>           
        </div>
    )
}
