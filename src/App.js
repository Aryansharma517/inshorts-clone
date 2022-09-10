
import { useState,useEffect } from 'react';
import axios from "axios";
import './App.css';
import NavInshorts from './components/NavInshorts';
import NewsContent from './components/NewsContent/NewsContent';
import apiKey from './data/config';
import Footer from './components/Footer/Footer';

function App() {

  const [category,setCategory]=useState("general");
  const [newsArray,setNewsArray]=useState([]);
  const [newsResults,setNewsResults]=useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async()=>{
    try{

      const news = await axios.get(`http://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      
    }catch(error){
      console.log(error);
    }

  };

  // console.log(newsArray);

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  },[newsResults,category,loadMore,]);
  
  return (
    <div className="App" id="#home">
      <NavInshorts setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
