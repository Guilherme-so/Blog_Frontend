import { useEffect, useState } from "react";
import Loading from "../components/postsLoading";
import Posts from "../components/Posts";

import styles from "../styles/Home.module.css";

const Home = () => {
  const PostLoading = Loading(Posts);
  const [appState, setAppState] = useState<{loading: boolean, posts: any }>({ loading: false, posts: null });

  useEffect(() => {
    try {
      const apiUrl = "http://127.0.0.1:8000/api/";
      setAppState({ loading: true, posts: null });
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.detail)
          setAppState( {loading:false, posts:data} )
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.App}>
      <h1>Latest Posts</h1>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  );
};

export default Home;
