import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LayoutHome from "./LayoutHome";
import "../App.css";
import { getitem } from "../services/api";

const usestyles = makeStyles({});
const HomePage = () => {
  const [items, setItems] = useState([]);
  const classes = usestyles();
  useEffect(() => {
    getitems();
  }, []);
  const getitems = async () => {
    const res = await getitem();
    setItems(res.data);
    // console.log(res.data);
    // console.log(setItems)
  };
  const buyHandler = () => {
    console.log("buy");
  };

  return (
    <LayoutHome>
      <Container fixed>
        <div className="main-div">
          <div className="row">
            {items.map((item) => {
              const imgpath =
                "http://localhost:8000/public/images/" + item.profile;
              return (
                <div className="column" key={item._id}>
                  <div className="card">
                    <div className="l">
                      <div>
                        <img src={imgpath} alt="Avatar" className="image" />
                        <div className="container">
                          <h4>
                            <b>{item.name}</b>
                          </h4>
                          <p>{item.description}</p>
                          <b>${item.price}</b>
                        </div>
                        <Button variant="contained" color="primary">
                          buy
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ marginLeft: 10 }}
                        >
                          add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </LayoutHome>
  );
};

export default HomePage;
