import createPost from './createPost';
import postData from './postData';
import './styles.scss';

const Post = () => {
  const post = postData;
  
  return (
    <div className='post-wrapper'>
      { post.map(createPost) }
    </div>
  );
}

export default Post;