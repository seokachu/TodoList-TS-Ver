import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TodoContainer from '../components/todos/TodoContainer';

const Home = () => {
  return (
    <div>
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  );
};

export default Home;
