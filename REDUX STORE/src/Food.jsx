import './Food.css'

const Food = () => {

    const foods  = [
      { id: 1, name: 'Pizza', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/330px-Pizza-3007395.jpg' },
      { id: 2, name: 'Burger', url: 'https://www.foodandwine.com/thmb/jldKZBYIoXJWXodRE9ut87K8Mag=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg' },
      { id: 5, name: 'Sushi', url: 'https://elavegan.com/wp-content/uploads/2021/06/vegan-sushi-on-a-white-plate-from-above.jpg' },
      { id: 6, name: 'Biryani', url: 'https://recipes.net/wp-content/uploads/2023/05/air-fryer-chicken-biryani-recipe_6968eb6ab4a5ae22d136dab86c9ea8af.jpeg' },
      { id: 7, name: 'Steak', url: 'https://www.allrecipes.com/thmb/tb61Fhkmb7CZ_AbSe7hQ8ggtknQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/143809-best-steak-marinade-in-existence-ARMag-3x2-1-8d7d61255c1e43aba092552e45c9d88d.jpg' },
      { id: 8, name: 'Ramen', url: 'https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-1-.jpg' },
      { id: 9, name: 'Ice Cream', url: 'https://carveyourcraving.com/wp-content/uploads/2024/01/eggless-brownnie-mousse-trifle-180x180.jpg' },
      { id: 10, name: 'Chicken Wings', url: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Spicy-Chicken.jpg' }
    ];
    return (
        <div className="flex">
        <h1>List of Food Items</h1>
        <ul>
          {foods.map(food => (
            <li key={food.id}>
              <img src={food.url} alt={food.name} />
              <p>{food.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  export default Food;
  