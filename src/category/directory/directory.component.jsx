import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
import { Link, NavLink } from "react-router-dom";

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "shop/sneakers",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      linkUrl: "shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      linkUrl: "shop/mens",
    },
  ];
  return (
    <div className="home-main-container">
      <div className="directory-container">
        {categories.map((category) => (
          <Link to={`/shop/${category.title.toLowerCase()}`}>
            <CategoryItem key={category.id} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Directory;
