import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CommentList from "./components/CommentList";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postId, setPostId] = useState(3);

  useEffect(() => {
    fetchComments(postId);
  }, [postId]);

  const fetchComments = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
    setLoading(false);
  };

  const generateRandomPostId = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    setPostId(randomId);
  };

  return (
    <div className="App">
      <Header generateRandomPostId={generateRandomPostId} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
}

export default App;
