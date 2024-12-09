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
import Layout from "./components/Layout";
import Location from "./components/Bookings/Location";
import Professional from "./components/Bookings/Professional";
import Services from "./components/Bookings/Services";
import Time from "./components/Bookings/Time";
import Spinner from "./components/Spinner";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="bookings" element={<Bookings />}>
              <Route index element={<Location />} />
              <Route path="professional" element={<Professional />} />
              <Route path="professional/services" element={<Services />} />
              <Route path="professional/services/time" element={<Time />} />
            </Route>
            <Route path="contact" element={<Contectus />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    // <Spinner />
  );
}

export default App;
// App.jsx
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import Spinner from "./components/Spinner";
// import Layout from "./components/Layout"; // Not lazy-loaded

// // Lazy-loaded components
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Bookings = lazy(() => import("./pages/Bookings"));
// const ContactUs = lazy(() => import("./pages/Contectus"));
// const NotFound = lazy(() => import("./components/PageNotFound"));

// const Location = lazy(() => import("./components/Bookings/Location"));
// const Professional = lazy(() => import("./components/Bookings/Professional"));
// const Services = lazy(() => import("./components/Bookings/Services"));
// const Time = lazy(() => import("./components/Bookings/Time"));

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Assuming ErrorBoundary is correctly set */}
//       <Routes>
//         <Route element={<Layout />}>
//           <Route
//             index
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <Home />
//               </Suspense>
//             }
//           />
//           <Route
//             path="about"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <About />
//               </Suspense>
//             }
//           />
//           <Route
//             path="bookings"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <Bookings />
//               </Suspense>
//             }
//           >
//             <Route
//               index
//               element={
//                 <Suspense fallback={<Spinner />}>
//                   <Location />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="professional"
//               element={
//                 <Suspense fallback={<Spinner />}>
//                   <Professional />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="professional/services"
//               element={
//                 <Suspense fallback={<Spinner />}>
//                   <Services />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="professional/services/time"
//               element={
//                 <Suspense fallback={<Spinner />}>
//                   <Time />
//                 </Suspense>
//               }
//             />
//           </Route>
//           <Route
//             path="contact"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <ContactUs />
//               </Suspense>
//             }
//           />
//           {/* Catch-all route for 404 */}
//           <Route
//             path="*"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <NotFound />
//               </Suspense>
//             }
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
