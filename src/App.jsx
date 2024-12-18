import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Bookings from "./pages/Bookings";
// import Contectus from "./pages/Contectus";
import { lazy, Suspense } from "react";
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Bookings = lazy(() => import("./pages/Bookings"));
const Contectus = lazy(() => import("./pages/Contectus"));
import Layout from "./components/UI/Layout";
import Location from "./components/Bookings/Location";
import Professional from "./components/Bookings/Professional";
import Services from "./components/Bookings/Services";
import Time from "./components/Bookings/Time";
import Spinner from "./components/UI/Spinner";
import PageNotFound from "./components/UI/PageNotFound";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const queryClient = new QueryClient();
  return (
    // <useContextMain>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="bookings" element={<Bookings />}>
                <Route index element={<Location />} />
                <Route path="professional" element={<Professional />} />
                <Route
                  path="professional/services/:id"
                  element={<Services />}
                />
                <Route
                  path="professional/services/:id/time"
                  element={<Time />}
                />
                {/* */}
              </Route>
              <Route path="contact" element={<Contectus />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#523939",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "#523939",
                secondary: "black",
              },
            },
            error: {
              duration: 3000,
              theme: {
                primary: "#523939",
                secondary: "red",
              },
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
