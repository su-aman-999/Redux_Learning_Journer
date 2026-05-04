import { NavLink } from "react-router";
import Post from "./components/Post";

import {
  useDeletePostMutation,
  useGetAllPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./services/post";

function App() {
  const [a, b] = useUpdatePostMutation();
  console.log(a, b);

  const { isError, isLoading, data: datas } = useGetAllPostQuery();

  const [deletePost, resultDelApi] = useDeletePostMutation();

  const [createPost, resultCreateApi] = useCreatePostMutation();

  return isLoading ? (
    <h2 className="err-msg">Loading...</h2>
  ) : isError ? (
    <h2>Something went worng... </h2>
  ) : (
    <div>
      <h2 style={{ margin: "100px 0px 20px 0px" }}>Posts</h2>

      <div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const data = {
              id: formData.get("id"),
              userId: formData.get("userId"),
              title: formData.get("title"),
              body: formData.get("body"),
            };

            createPost(data);
          }}
        >
          <div>
            <label htmlFor="post-id">Enter ID:</label>
            <input type="number" id="post-id" name="id" />
          </div>

          <div>
            <label htmlFor="post-title">Enter Title: </label>
            <input type="text" id="post-title" name="title" />
          </div>

          <div>
            <label htmlFor="post-body">Enter Post Body: </label>
            <input type="text" id="post-body" name="body" />
          </div>

          <div>
            <label htmlFor="post-userId">Enter Post UserId: </label>
            <input type="number" id="userId" name="userId" />
          </div>

          <button
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            Add Post
          </button>
        </form>
      </div>

      <div className="posts-title">
        {datas.map(({ title, id }) => (
          <div key={id}>
            <NavLink
              to={`posts/${id}`}
              style={{ display: "flex", gap: "6px", textDecoration: "none" }}
            >
              <h3 className="post-title">
                {id} - {title}
              </h3>
            </NavLink>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deletePost(id);
              }}
              style={{
                backgroundColor: "black",
                padding: "8px 12px",
                margin: "8px 0px",
                borderRadius: "6px",
                cursor: "pointer",
                color: "white",
                outline: "none",
                border: "1px solid gray",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
