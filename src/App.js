import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav>
        < Link to="/">Home</Link>
        < Link to="/launch">Launch</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function Launch() {
  return (
    <div>
      <h1>Launch</h1>

      <Outlet />
    </div>
  );
}

function LaunchIndex(){
  return (
    <ul>
      {Object.entries(shoes).map(([slug, {name, img}]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>
  }

  const {name, img} = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

const shoes = {
  "DAYBREAK": {
    name: "TOPAZ",
    img:
      "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ca54e328-b1c4-40b1-b20f-295835d52dc3/nike-daybreak-topaz-release-date.jpg"
  },
  "ZOOM VOMERO": {
    name: "SE",
    img:
      "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/c3212092-dbe1-4d65-90c0-5aafbf8e2fe5/zoom-vomero-5-se-release-date.jpg"
  },
  "SPACE HIPPIE 01 - VOLT": {
    name: "THIS IS TRASH",
    img:
      "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/832a7814-b0a2-4e8b-9331-cea7257e85eb/space-hippie-01-volt-this-is-trash-release-date.jpg"
  }
};