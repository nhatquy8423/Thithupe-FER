import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FruitDetail = () => {
  const { id } = useParams();
  const [fruit, setFruit] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/fruits/${id}`)
      .then((res) => setFruit(res.data))
      .catch((err) => console.error(err));
  }, [id]);
  if (!fruit) return <p>Loading</p>;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <img
            src={`/${fruit.image}`}
            alt={fruit.name}
            className="border image-fluid"
          />
        </div>
        <div className="col-md-6 mt-5">
          <h2>{fruit.name}</h2>
          <p>
            {" "}
            <span className="fw-bold">Price:</span> {fruit.price}
          </p>
          <p>
            <span className="fw-bold">Stock:</span>
            {fruit.stock}
          </p>
          <p>Nutrition: {fruit.nutrition}</p>
          <p>{fruit.description}</p>
          <Link to={"/"} className="btn btn-success">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FruitDetail;
