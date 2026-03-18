import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [fruit, setFruit] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/fruits")
      .then((res) => setFruit(res.data))
      .catch((err) => console.error(err));
  }, []);
  if (!fruit) return <p>Loading</p>;
  return (
    <div className="container">
      <h1 className="fw-bold">List Fruit</h1>
      <div className="row">
        {fruit.map((f) => (
          <div className="col-md-3 mb-4" key={f.id}>
            <div className="card h-100 my-3">
              <img src={f.image} alt={f.name} className="card-img top"></img>
              <div className="card-body">
                <h3 className="fw-bold">{f.name}</h3>
                <p>
                  <span className="fw-bold">Price:</span>
                  {f.price}
                </p>
                <p>
                  <span className="fw-bold">Stock:</span>
                  {f.stock}
                </p>
                <p>{f.description}</p>
                <Link to={`/fruit/${f.id}`} className="btn btn-primary">
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
