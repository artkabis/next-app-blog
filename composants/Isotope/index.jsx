import React, { useEffect, useState } from "react";
import View from "./View";
const BlogList = () => {
  const [blogCount, setBlogCount] = useState(6);
  const [blogs, setBlogs] = useState([]);
  const [filterValue, setFilterValue] = useState("All");

  // useEffect(() => {
  //   setBlogs(allBlogs.slice(0, 6))
  // }, [allBlogs])

  const _handleBlogs = () => {
    const newBlogCount = blogCount + 3;
    setBlogCount(newBlogCount);
  };

  return (
    <div>
      <View
        blogs={blogs}
        handleBlogs={_handleBlogs}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
    </div>
  );
};

export default BlogList;
