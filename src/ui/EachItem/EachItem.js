import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteItem, editItem } from "./../../store/actions/actions";

const EachItem = ({ item }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const handleEditItem = (item) => {
   //  console.log("value", value);
   //  console.log("quantity", quantity);
   //  console.log("price", price); //it comes, but doesn't show itself.

    const updatedItem = {
      title: value,
      amount: quantity,
      cost: item.price,
      id: item.id,
    };
    dispatch(editItem(updatedItem));
    setEdit(false);
  };

  return (
    <Card style={{ marginTop: 10, marginBottom: 10 }}>
      <CardActionArea>
        <CardContent>
          {edit ? (
            <>
              <TextField
                fullWidth
                label="edit titile"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <TextField
                fullWidth
                label="edit amount"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
              <TextField
                fullWidth
                label="edit price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
              <Button
                size="small"
                color="primary"
                onClick={() => handleEditItem(item)}
              >
                save
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => setEdit(false)}
              >
                cancel
              </Button>
            </>
          ) : (
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {item.amount}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {item.cost}
              </Typography>
            </div>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleDeleteItem(item.id)}
        >
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            setEdit(true);
            setValue(item.title);
            setQuantity(item.amount);
            setPrice(item.cost); // it shows an amount of money on the 3rd time. try to edit and save price 3 times. i dont know why did this bug happen.
          }}
        >
          edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default EachItem;
