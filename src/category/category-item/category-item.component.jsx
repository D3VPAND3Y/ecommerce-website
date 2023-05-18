import './category-item.styles.scss'

const CategoryItem =({category})=>{
return (
    <div key={category.id} className="category-container">
    <div className='background-image' style={
      {backgroundImage: `url(${category.imageUrl})`}
    }/>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <span>Shop Now</span>
      </div>
    </div>
);

}

export default CategoryItem;