import React from "react";

import { useGetPostByIdQuery } from "../services/post";
import { useParams } from "react-router";

function Post() {
  const { id } = useParams("id");
  const response = useGetPostByIdQuery(id);
  const { isError, isLoading, data } = response;
  console.log(isLoading);
  console.log(isError);

  console.log(data);

  return (
    <>
      <h2 style={{ margin: "100px 0px 0px 0px" }}>Post By Id: {id}</h2>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>Something Went Worng...</h2>
      ) : (
        <div
          style={{
            width: "440px",
            margin: "auto",
            border: "1px solid gray",
            borderRadius: "12px",
            padding: "12px 24px",
            marginTop: "28px",
          }}
        >
          <h3
            style={{
              textTransform: "capitalize",
              backgroundColor: "white",
              color: "black",
              padding: "6px 12px",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            {data.title}
          </h3>
          <p>{data.body}</p>
        </div>
      )}
    </>
  );
}

export default Post;
