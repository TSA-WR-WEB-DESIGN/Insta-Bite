import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users } from 'lucide-react';

const recipes = {
  beginner: [
    {
      title: "Classic Margherita Pizza",
      time: "30 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
      description: "A simple yet delicious Italian classic with fresh basil and mozzarella."
    },
    {
      title: "Spaghetti Aglio e Olio",
      time: "20 mins",
      servings: "2",
      image: "https://images.unsplash.com/photo-1589227365533-cee630bd59bd",
      description: "Simple pasta with garlic, olive oil, and red pepper flakes."
    },
    {
      title: "Avocado Toast",
      time: "10 mins",
      servings: "1",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d",
      description: "Creamy avocado on toasted bread with simple seasonings."
    },
    {
      title: "Greek Salad",
      time: "15 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      description: "Fresh Mediterranean salad with feta cheese and olives."
    },
    {
      title: "Scrambled Eggs",
      time: "10 mins",
      servings: "2",
      image: "https://images.unsplash.com/photo-1551185618-5d8656fd00b1",
      description: "Perfectly fluffy scrambled eggs with herbs."
    },
    {
      title: "Grilled Cheese Sandwich",
      time: "15 mins",
      servings: "1",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
      description: "Classic comfort food with melted cheese."
    },
    {
      title: "Fruit Smoothie Bowl",
      time: "10 mins",
      servings: "1",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
      description: "Healthy breakfast bowl with mixed fruits and granola."
    },
    {
      title: "Simple Pancakes",
      time: "20 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
      description: "Fluffy pancakes with maple syrup and butter."
    },
    {
      title: "Caprese Salad",
      time: "10 mins",
      servings: "2",
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5",
      description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze."
    },
    {
      title: "Tuna Sandwich",
      time: "10 mins",
      servings: "2",
      image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847",
      description: "Classic tuna salad sandwich with lettuce and tomato."
    },
    {
      title: "Vegetable Stir Fry",
      time: "20 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
      description: "Quick and healthy vegetable stir fry with soy sauce."
    },
    {
      title: "Microwave Baked Potato",
      time: "10 mins",
      servings: "1",
      image: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df",
      description: "Easy baked potato with your favorite toppings."
    },
    {
      title: "Garden Fresh Salad",
      time: "15 mins",
      servings: "2",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      description: "Mixed greens with fresh vegetables and vinaigrette."
    },
    {
      title: "Yogurt Parfait",
      time: "5 mins",
      servings: "1",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
      description: "Layered yogurt with granola and fresh berries."
    },
    {
      title: "Quesadilla",
      time: "15 mins",
      servings: "2",
      image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f",
      description: "Cheese quesadilla with optional vegetables."
    },
    {
      title: "Instant Ramen Upgrade",
      time: "10 mins",
      servings: "1",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
      description: "Elevated instant ramen with egg and vegetables."
    },
    {
      title: "Hummus Toast",
      time: "5 mins",
      servings: "1",
      image: "https://feelgoodfoodie.net/wp-content/uploads/2019/02/Hummus-Toast-4.jpg",
      description: "Toasted bread with hummus and toppings."
    },
    {
      title: "Cucumber Sandwiches",
      time: "10 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
      description: "Light and refreshing cucumber tea sandwiches."
    },
    {
      title: "Fruit Salad",
      time: "15 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea",
      description: "Mixed fresh fruits with honey-lime dressing."
    },
    {
      title: "Microwave Mac and Cheese",
      time: "10 mins",
      servings: "1",
      image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686",
      description: "Quick and easy microwave macaroni and cheese."
    },
    {
      title: "English Muffin Pizza",
      time: "15 mins",
      servings: "2",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      description: "Mini pizzas made on English muffins."
    },
    {
      title: "Banana Toast",
      time: "5 mins",
      servings: "1",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
      description: "Toast with sliced banana, honey, and cinnamon."
    },
    {
      title: "Simple Green Smoothie",
      time: "5 mins",
      servings: "2",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721",
      description: "Healthy smoothie with spinach and fruits."
    },
    {
      title: "Egg in a Hole",
      time: "10 mins",
      servings: "1",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
      description: "Egg cooked in toast with butter."
    },
    {
      title: "No-Bake Energy Balls",
      time: "15 mins",
      servings: "12",
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26",
      description: "Healthy snack balls with oats and peanut butter."
    }
  ],
  intermediate: [
    {
      title: "Beef Bourguignon",
      time: "3 hours",
      servings: "6",
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
      description: "Classic French beef stew braised in red wine."
    },
    {
      title: "Homemade Pasta",
      time: "1 hour",
      servings: "4",
      image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77",
      description: "Fresh pasta made from scratch with eggs and flour."
    },
    {
      title: "Thai Green Curry",
      time: "45 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
      description: "Aromatic curry with coconut milk and fresh herbs."
    },
    {
      title: "Risotto al Funghi",
      time: "40 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
      description: "Creamy mushroom risotto with Parmesan cheese."
    },
    {
      title: "Fish Tacos",
      time: "30 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd",
      description: "Fresh fish tacos with homemade slaw and sauce."
    },
    {
      title: "Chicken Marsala",
      time: "45 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      description: "Classic Italian chicken dish with mushroom wine sauce."
    },
    {
      title: "Pad Thai",
      time: "35 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
      description: "Traditional Thai stir-fried rice noodles."
    },
    {
      title: "Homemade Pizza Dough",
      time: "2 hours",
      servings: "4",
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      description: "From-scratch pizza dough for perfect homemade pizzas."
    },
    {
      title: "Chicken Tikka Masala",
      time: "1 hour",
      servings: "6",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
      description: "Creamy Indian curry with marinated chicken."
    },
    {
      title: "Beef Stir Fry",
      time: "30 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
      description: "Quick beef stir fry with vegetables and rice."
    },
    {
      title: "Homemade Gnocchi",
      time: "1.5 hours",
      servings: "4",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
      description: "Potato gnocchi from scratch with sage butter sauce."
    },
    {
      title: "Shrimp Scampi",
      time: "25 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
      description: "Garlic butter shrimp with white wine and pasta."
    },
    {
      title: "Eggplant Parmesan",
      time: "1.5 hours",
      servings: "6",
      image: "https://ahintofwine.com/wp-content/uploads/2017/11/Classic-Eggplant-Parmesan2.jpg",
      description: "Breaded eggplant with marinara and cheese."
    },
    {
      title: "Homemade Sushi Rolls",
      time: "1 hour",
      servings: "4",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
      description: "California rolls and vegetable sushi."
    },
    {
      title: "Chicken Fajitas",
      time: "40 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615",
      description: "Sizzling chicken fajitas with peppers and onions."
    },
    {
      title: "Homemade Ravioli",
      time: "2 hours",
      servings: "6",
      image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa",
      description: "Cheese-filled pasta with sage butter sauce."
    },
    {
      title: "Seafood Paella",
      time: "1 hour",
      servings: "6",
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
      description: "Spanish rice dish with mixed seafood."
    },
    {
      title: "Beef and Broccoli",
      time: "35 mins",
      servings: "4",
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
      description: "Chinese-style beef with broccoli stir fry."
    },
    {
      title: "Homemade Tortillas",
      time: "45 mins",
      servings: "12",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
      description: "Fresh corn and flour tortillas from scratch."
    },
    {
      title: "Chicken Cordon Bleu",
      time: "1 hour",
      servings: "4",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
      description: "Stuffed chicken breast with ham and cheese."
    },
    {
      title: "Pesto from Scratch",
      time: "20 mins",
      servings: "6",
      image: "https://images.unsplash.com/photo-1564844536308-50b114a1d946",
      description: "Fresh basil pesto with pine nuts and garlic."
    },
    {
      title: "Lamb Curry",
      time: "1.5 hours",
      servings: "6",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
      description: "Spicy Indian lamb curry with vegetables."
    },
    {
      title: "Homemade Dumplings",
      time: "1.5 hours",
      servings: "6",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d",
      description: "Asian dumplings with pork and vegetable filling."
    },
    {
      title: "Stuffed Bell Peppers",
      time: "1 hour",
      servings: "6",
      image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8",
      description: "Bell peppers stuffed with rice and ground meat."
    },
    {
      title: "Fish en Papillote",
      time: "30 mins",
      servings: "2",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      description: "Fish baked in parchment with vegetables."
    }
  ],
  advanced: [
    {
      title: "Beef Wellington",
      time: "4 hours",
      servings: "6",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
      description: "Classic British dish with beef tenderloin wrapped in pastry."
    },
    {
      title: "Soufflé au Chocolat",
      time: "1 hour",
      servings: "4",
      image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc",
      description: "Light and airy chocolate soufflé."
    },
    {
      title: "Lobster Thermidor",
      time: "2 hours",
      servings: "2",
      image: "https://lobsteranywhere.com/wp-content/uploads/2016/09/How-to-make-Lobster-Thermidor.jpg",
      description: "Classic French dish with lobster in rich sauce."
    },
    {
      title: "Duck à l'Orange",
      time: "3 hours",
      servings: "4",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
      description: "Classic French duck with orange sauce."
    },
    {
      title: "Croissants from Scratch",
      time: "24 hours",
      servings: "8",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
      description: "Traditional French pastry with laminated dough."
    },
    {
      title: "Baked Alaska",
      time: "3 hours",
      servings: "8",
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
      description: "Ice cream cake wrapped in meringue."
    },
    {
      title: "Cassoulet",
      time: "6 hours",
      servings: "8",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      description: "Traditional French bean and meat casserole."
    },
    {
      title: "Macarons",
      time: "3 hours",
      servings: "24",
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43",
      description: "French almond meringue sandwich cookies."
    },
    {
      title: "Bouillabaisse",
      time: "3 hours",
      servings: "6",
      image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b",
      description: "Provençal fish stew with rouille."
    },
    {
      title: "Turducken",
      time: "8 hours",
      servings: "12",
      image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98",
      description: "Chicken inside duck inside turkey."
    },
    {
      title: "Croquembouche",
      time: "4 hours",
      servings: "20",
      image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c",
      description: "Tower of cream puffs with caramel."
    },
    {
      title: "Paella Valencia",
      time: "2 hours",
      servings: "8",
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
      description: "Traditional Spanish rice dish with rabbit and snails."
    },
    {
      title: "Opera Cake",
      time: "5 hours",
      servings: "12",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      description: "French layer cake with coffee and chocolate."
    },
    {
      title: "Consommé",
      time: "6 hours",
      servings: "8",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
      description: "Clarified meat broth with garnishes."
    },
    {
      title: "Baumkuchen",
      time: "4 hours",
      servings: "16",
      image: "https://images.unsplash.com/photo-1621236378699-8597faf6a176",
      description: "German tree cake with many layers."
    },
    {
      title: "Galantine",
      time: "5 hours",
      servings: "10",
      image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637",
      description: "Stuffed and poached deboned poultry."
    },
    {
      title: "Coulibiac",
      time: "4 hours",
      servings: "8",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50",
      description: "Russian salmon pie with rice and mushrooms."
    },
    {
      title: "Baked St. Honoré",
      time: "5 hours",
      servings: "12",
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
      description: "French pastry with cream puffs and chiboust cream."
    },
    {
      title: "Turbot en Croûte",
      time: "3 hours",
      servings: "6",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      description: "Whole turbot baked in pastry crust."
    },
    {
      title: "Bombe Glacée",
      time: "6 hours",
      servings: "12",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
      description: "Molded frozen dessert with multiple layers."
    },
    {
      title: "Pâté en Croûte",
      time: "6 hours",
      servings: "12",
      image: "https://images.unsplash.com/photo-1547496502-affa22d38842",
      description: "Elaborate meat pie in pastry crust."
    },
    {
      title: "Gâteau St. Jacques",
      time: "4 hours",
      servings: "10",
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
      description: "French almond cake with buttercream."
    },
    {
      title: "Pressed Duck",
      time: "4 hours",
      servings: "4",
      image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637",
      description: "Classic French duck dish with pressed sauce."
    },
    {
      title: "Omelette Norvégienne",
      time: "3 hours",
      servings: "8",
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
      description: "French version of Baked Alaska."
    },
    {
      title: "Chartreuse",
      time: "5 hours",
      servings: "8",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50",
      description: "Complex French vegetable mold."
    }
  ]
};

export function RecipeList() {
  const { level } = useParams();
  const levelRecipes = recipes[level] || [];

  const levelTitles = {
    beginner: "Beginner Recipes",
    intermediate: "Intermediate Recipes",
    advanced: "Advanced Recipes"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-16"> {/* Added mt-16 for margin top */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
        <h2 className="text-3xl font-semibold text-gray-900">{levelTitles[level]}</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {levelRecipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
                <p className="text-gray-600 mt-2">{recipe.description}</p>
                <div className="flex mt-4 text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Clock className="mr-1" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-1" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}