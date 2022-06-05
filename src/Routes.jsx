import { Route, Routes } from "react-router-dom";
import LoginPage from "./views/auth/login";
import Tools from "./views/tools/index";
import UserPage from "./views/user";
import MealTracking from "./views/mealTracking";
import RecipeTracking from "./views/recipeTracking";


const Routing = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Tools />}/>
      <Route path="/tools" element={<Tools />}/>
      <Route path="/mealtracker" element={<MealTracking />}/>
      <Route path="/recipetracker" element={<RecipeTracking />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/user/:userid" element={<UserPage />}/>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
    </>
      )

}

export default Routing;