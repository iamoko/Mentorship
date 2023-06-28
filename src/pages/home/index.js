import React, { useState, useRef, useCallback } from "react";
import Dummy from "../dummy";
import Footer from "../../layouts/footer/footer";
import usePosts from "../../hooks/usePosts";
import Post from "../../components/post/post";

export default function Index() {
  const [pageNum, setPageNum] = useState(1);

  const { isLoading, isError, error, results, hasNextPage } = usePosts(pageNum);

  const intObserver = useRef();

  
  const lastPostRef = useCallback(
    (post) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!");
          setPageNum((prev) => prev + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isLoading, hasNextPage]
  );

  if (isError) return <p className="center">Error: {error.message}</p>;

  const content = results.map((post, i) => {
    if (results.length === i + 1) {
      return <Post ref={lastPostRef} key={post.id} post={post} />;
    }
    return <Post key={post.id} post={post} />;
  });

  return (
    <div className="flex gap-5 pt-2 home-container">
      <div className="w-60">
        <div className="p-4 mb-4 bg-red-600 rounded-lg">
          <Dummy />
        </div>

        <div className="sticky p-4 mt-3 mb-4 bg-orange-600 rounded-lg top-16">
          <Dummy />
        </div>
      </div>
      <div className="w-1/2 mb-4">
        {content}
        {isLoading && <p className="center">Loading More Posts...</p>}
      </div>
      <div className="w-80">
        <div className="p-4 mb-4 bg-white border rounded-lg">
          <Dummy />
        </div>

        <Footer />
      </div>
    </div>
  );
}
