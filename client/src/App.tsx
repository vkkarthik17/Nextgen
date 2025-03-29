import { Route, Router, Switch } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import CoursePage from "@/pages/CoursePage";
import CoursesPage from "@/pages/CoursesPage"; // Added the new courses page
import ContactPage from "@/pages/ContactPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultingPage from "@/pages/ConsultingPage";
import PlacementsPage from "@/pages/PlacementsPage";
import BlogPage from "@/pages/BlogPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/courses" component={CoursesPage} /> {/* Added route for the courses listing page */}
            <Route path="/courses/:id" component={CoursePage} />
            <Route path="/consulting" component={ConsultingPage} />
            <Route path="/placements" component={PlacementsPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
