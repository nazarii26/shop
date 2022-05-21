import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/actions";

const Form = () => {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const dispatch = useDispatch();

  const handleAddItem = (event) => {
    event.preventDefault();
    if (!value) return;

    const newItem = {
      title: value,
      amount: quantity,
      cost: price,
      id: Date.now().toString(),
    };

    dispatch(addItem(newItem));
    setValue("");
    setQuantity('');
    setPrice('');
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        type="text"
        fullWidth
        label="Goal title"
        id="standart-title"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        style={{ marginBottom: 10, marginTop: 10 }}
      />

      <TextField
        type="number"
        fullWidth
        label="Quantity"
        id="standart-title"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
        style={{ marginBottom: 10 }}
      />

      <TextField
        type="number"
        fullWidth
        label="Price"
        id="standart-title"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: 10 }}
        onClick={handleAddItem}
      >
        Save
      </Button>
    </form>
  );
};

export default Form;
