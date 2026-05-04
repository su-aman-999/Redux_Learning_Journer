import React from "react";
import { useParams } from "react-router";
import { useGetPostByLimitQuery } from "../services/post";

function ByLimitPosts() {
  const { limit } = useParams("limit");
  const { isError, isLoading, data } = useGetPostByLimitQuery(limit);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : isError ? (
    <h3>Error...</h3>
  ) : (
    <div>
      {data.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid gray",
            margin: "12px",
            padding: "12px 24px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ByLimitPosts;
