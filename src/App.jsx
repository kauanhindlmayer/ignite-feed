import { Header } from './components/Header';
import { Post } from './Post';
import './styles.css';

export function App() {
  return (
    <div>
      <Header />
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