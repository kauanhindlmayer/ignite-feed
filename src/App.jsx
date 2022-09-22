import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post
        author="Kauan Hindlmayer"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
      />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
      />
    </div>
  )
}