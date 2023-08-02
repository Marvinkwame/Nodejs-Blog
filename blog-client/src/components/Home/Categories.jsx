import React from "react";
import newRequest from "../../utils/axiosRequest";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const getCategories = async () => {
      const res = await newRequest.get("/category");
      console.log(res);
      setCategories(res.data);
    };
    getCategories();
  }, []);

  return (
    <section className="py-8">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <h2 className="text-center underline text-3xl mb-9">CATEGORIES</h2>
        <div className="flex items-center justify-between">
            {categories.map((category) => (
                <Link to="" key={category._id}>
                    <p>{category.name}</p>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
