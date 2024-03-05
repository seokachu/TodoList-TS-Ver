import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TodoController from '../components/todos/TodoController';

const Home = () => {
  return (
    <div>
      <Header />
      <TodoController />
      <Footer />
    </div>
  );
};

export default Home;
