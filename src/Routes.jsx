import { Route, Routes } from "react-router-dom";
import LoginPage from "./views/auth/login";
import Tools from "./views/tools/index";
import UserPage from "./views/user";
import MealTracking from "./views/mealTracking";
import RecipesPage from "./views/recipes";
import CommunityPage from "./views/community";

const Routing = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Tools />}/>
      <Route path="/tools" element={<Tools />}/>
      <Route path="/mealtracker" element={<MealTracking />}/>
      <Route path="/recipes" element={<RecipesPage />}/>
      <Route path="/recipes/:id" element={<RecipesPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/user/:userid" element={<UserPage />}/>
      <Route path="/community" element={<CommunityPage />}/>

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