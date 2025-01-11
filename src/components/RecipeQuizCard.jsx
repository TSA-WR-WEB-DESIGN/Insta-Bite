import React, { useState } from 'react';
import { ChefHat, Clock, Book, ChevronRight, UtensilsCrossed, Star, ArrowLeft } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "What would you like to make?",
    icon: <UtensilsCrossed className="w-8 h-8" />,
    options: ["Breakfast", "Lunch", "Dinner", "Dessert"],
  },
  {
    id: 2,
    text: "How much time do you have?",
    icon: <Clock className="w-8 h-8" />,
    options: ["15 minutes", "30 minutes", "1 hour", "2+ hours"],
  },
  {
    id: 3,
    text: "What's your cooking level?",
    icon: <ChefHat className="w-8 h-8" />,
    options: ["Beginner", "Intermediate", "Advanced", "Expert"],
  },
  {
    id: 4,
    text: "Do you have dietary restrictions?",
    icon: <UtensilsCrossed className="w-8 h-8" />,
    options: ["None", "Vegetarian", "Vegan", "Halal", "Gluten-Free"],
  },
  {
    id: 5,
    text: "What cuisine are you craving?",
    icon: <Book className="w-8 h-8" />,
    options: ["Italian", "Mexican", "Indian", "Asian", "Mediterranean"],
  },
  {
    id: 6,
    text: "Do you prefer sweet or savory dishes?",
    icon: <ChefHat className="w-8 h-8" />,
    options: ["Sweet", "Savory", "Both", "Not Sure"],
  },
];

const allRecipes = [
  {
    id: 1,
    name: "Greek Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    time: "15 minutes",
    difficulty: "Beginner",
    cuisine: "Mediterranean",
    mealType: "Lunch",
    dietary: ["Vegetarian", "Gluten-Free"],
    taste: "Savory",
    rating: 4.8,
    description: "Fresh Mediterranean salad with feta cheese, olives, and olive oil dressing",
  },
  {
    id: 2,
    name: "Thai Green Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
    time: "30 minutes",
    difficulty: "Intermediate",
    cuisine: "Asian",
    mealType: "Dinner",
    dietary: ["Halal"],
    taste: "Savory",
    rating: 4.6,
    description: "A quick and flavorful curry with aromatic Thai basil and your choice of protein.",
  },
  {
    id: 3,
    name: "Classic Margherita Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    time: "1 hour",
    difficulty: "Intermediate",
    cuisine: "Italian",
    mealType: "Dinner",
    dietary: ["Vegetarian"],
    taste: "Savory",
    rating: 4.9,
    description: "A timeless Italian favorite with fresh mozzarella, tomatoes, and basil.",
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
    time: "30 minutes",
    difficulty: "Advanced",
    cuisine: "Italian",
    mealType: "Dessert",
    dietary: ["Vegetarian"],
    taste: "Sweet",
    rating: 4.7,
    description: "Decadent chocolate cake with a molten center, served warm.",
  },
  {
    id: 5,
    name: "Breakfast Burrito",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    time: "15 minutes",
    difficulty: "Beginner",
    cuisine: "Mexican",
    mealType: "Breakfast",
    dietary: ["None"],
    taste: "Savory",
    rating: 4.5,
    description: "Hearty breakfast burrito with eggs, cheese, and fresh salsa.",
  },
  {
    id: 6,
    name: "Vegan Buddha Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    time: "30 minutes",
    difficulty: "Beginner",
    cuisine: "Asian",
    mealType: "Lunch",
    dietary: ["Vegan", "Gluten-Free"],
    taste: "Both",
    rating: 4.8,
    description: "Nutritious bowl with quinoa, roasted vegetables, and tahini dressing.",
  }
];

function App() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleStart = () => setStarted(true);

  const handleAnswer = (answer) => {
    setAnswers([...answers, { questionId: questions[currentQuestion].id, answer }]);

    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleStartOver = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getMatchingRecipes = () => {
    return allRecipes.map(recipe => {
      const mealType = answers[0]?.answer;
      const timePreference = answers[1]?.answer;
      const skillLevel = answers[2]?.answer;
      const dietary = answers[3]?.answer;
      const cuisine = answers[4]?.answer;
      const taste = answers[5]?.answer;

      // Calculate match score (0-100)
      let score = 0;
      let maxScore = 0;

      // Meal type is crucial - weight: 25
      if (recipe.mealType === mealType) {
        score += 25;
      }
      maxScore += 25;

      // Time matching - weight: 20
      const getTimeInMinutes = (time) => {
        if (time === "15 minutes") return 15;
        if (time === "30 minutes") return 30;
        if (time === "1 hour") return 60;
        return 120; // 2+ hours
      };

      const recipeTimeMinutes = parseInt(recipe.time);
      const preferredTimeMinutes = getTimeInMinutes(timePreference);
      
      if (recipeTimeMinutes <= preferredTimeMinutes) {
        // Full points if within time limit
        score += 20;
      } else if (recipeTimeMinutes <= preferredTimeMinutes * 1.5) {
        // Partial points if only slightly over
        score += 10;
      }
      maxScore += 20;

      // Skill level matching - weight: 15
      const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
      const recipeDifficultyIndex = skillLevels.indexOf(recipe.difficulty);
      const userSkillIndex = skillLevels.indexOf(skillLevel);
      
      if (recipeDifficultyIndex === userSkillIndex) {
        score += 15;
      } else if (recipeDifficultyIndex < userSkillIndex) {
        // Recipe is easier than user's skill - partial points
        score += 10;
      }
      maxScore += 15;

      // Dietary restrictions - weight: 20
      if (dietary === "None" || recipe.dietary.includes(dietary)) {
        score += 20;
      }
      maxScore += 20;

      // Cuisine preference - weight: 10
      if (recipe.cuisine === cuisine) {
        score += 10;
      }
      maxScore += 10;

      // Taste preference - weight: 10
      if (taste === "Both" || taste === "Not Sure" || recipe.taste === taste) {
        score += 10;
      }
      maxScore += 10;

      // Calculate percentage match
      const matchPercentage = (score / maxScore) * 100;

      return {
        ...recipe,
        matchScore: matchPercentage,
        matchDetails: {
          mealTypeMatch: recipe.mealType === mealType,
          timeMatch: recipeTimeMinutes <= preferredTimeMinutes,
          skillMatch: recipeDifficultyIndex <= userSkillIndex,
          dietaryMatch: dietary === "None" || recipe.dietary.includes(dietary),
          cuisineMatch: recipe.cuisine === cuisine,
          tasteMatch: taste === "Both" || taste === "Not Sure" || recipe.taste === taste
        }
      };
    })
    .filter(recipe => recipe.matchScore >= 60) // Only show recipes with at least 60% match
    .sort((a, b) => b.matchScore - a.matchScore); // Sort by match score
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (showResults) {
    const matchingRecipes = getMatchingRecipes();

    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-orange-500">
          <div className="p-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                {matchingRecipes.length > 0 ? "Your Perfect Recipes" : "No Perfect Matches"}
              </h2>
              <button
                onClick={handleStartOver}
                className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Take Quiz Again
              </button>
            </div>
            {matchingRecipes.length > 0 ? (
              <div className="grid gap-8">
                {matchingRecipes.map((recipe) => (
                  <div key={recipe.id} className="flex gap-6 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                    <img src={recipe.image} alt={recipe.name} className="w-72 h-48 object-cover" />
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800">{recipe.name}</h3>
                          <div className="text-sm text-orange-500 font-medium">
                            {Math.round(recipe.matchScore)}% Match
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {renderStars(recipe.rating)}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{recipe.description}</p>
                      <div className="flex gap-4">
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {recipe.time}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                          <ChefHat className="w-4 h-4" />
                          {recipe.difficulty}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                          <Book className="w-4 h-4" />
                          {recipe.cuisine}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <ChefHat className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600 mb-4">
                  We couldn't find any recipes that match your preferences.
                </p>
                <p className="text-gray-500">
                  Try adjusting your preferences or start over to find more recipes!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-orange-500">
        {!started ? (
          <div className="p-12">
            <div className="flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-8 mx-auto">
              <Book className="w-12 h-12 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">Find Your Perfect Recipe</h1>
            <p className="text-center text-gray-600 text-xl mb-10">
              Answer a few quick questions to discover recipes tailored just for you
            </p>
            <div className="flex gap-4 mb-10">
              <div className="flex-1 text-center p-4 bg-orange-50 rounded-xl">
                <div className="flex justify-center mb-4">
                  <UtensilsCrossed className="w-10 h-10 text-orange-500" />
                </div>
                <h2 className="text-xl font-semibold text-orange-600 mb-2">What would you like to make?</h2>
                <p className="text-sm text-gray-600">Find your meal type</p>
              </div>
              <div className="flex-1 text-center p-4 bg-orange-50 rounded-xl">
                <div className="flex justify-center mb-4">
                  <Clock className="w-10 h-10 text-orange-500" />
                </div>
                <h2 className="text-xl font-semibold text-orange-600 mb-2">How much time do you have?</h2>
                <p className="text-sm text-gray-600">Choose your time</p>
              </div>
              <div className="flex-1 text-center p-4 bg-orange-50 rounded-xl">
                <div className="flex justify-center mb-4">
                  <ChefHat className="w-10 h-10 text-orange-500" />
                </div>
                <h2 className="text-xl font-semibold text-orange-600 mb-2">What's your cooking level?</h2>
                <p className="text-sm text-gray-600">Match your skills</p>
              </div>
            </div>
            <button
              onClick={handleStart}
              className="w-full py-5 px-8 bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-3"
            >
              Start Quiz <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        ) : (
          <div className="p-12">
            <div className="flex items-center gap-4 mb-8">
              {questions[currentQuestion].icon}
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {questions[currentQuestion].text}
              </h3>
            </div>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-orange-50 rounded-xl border-2 border-gray-200 hover:border-orange-200 transition-colors duration-200"
                  onClick={() => handleAnswer(option)}
                >
                  <span className="font-medium text-gray-700 text-xl">{option}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-between text-lg text-gray-500">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <button onClick={handleStartOver} className="text-orange-500 hover:text-orange-600">
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

