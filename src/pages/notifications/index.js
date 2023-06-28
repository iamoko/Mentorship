import React, { useState, useRef, useCallback } from "react";
import NotificationItem from "../../components/notifications/notification";
import Footer from "../../layouts/footer/footer";
import usePosts from "../../hooks/usePosts";

function Index() {
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
      return <NotificationItem ref={lastPostRef} key={post.id} notification={post} />;
    }
    return <NotificationItem key={post.id} notification={post} />;
  });

  return (
    <div className="flex gap-5 pt-2 home-container">
      <div className="w-60">
        <div className="sticky p-4 mb-4 bg-white border rounded-lg top-16">
          <p className="font-bold">Manage your Notifications</p>
        </div>
      </div>
      <div className="w-1/2 mb-4 overflow-hidden bg-white border rounded-lg">
        {content}
        {isLoading && <p className="center">Loading More Posts...</p>}
      </div>
      <div className="w-80">
        <Footer />
      </div>
    </div>
  );
}

export default Index;
