import React, { useState } from "react";
import "./AddFoodData.css";
// Firebase imports
import { db, storage } from "../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddFoodData = () => {
  const [foodData, setFoodData] = useState({
    food_name: "",
    food_description: "",
    food_category: "",
    food_price: "",
    food_image: null,
    Restaurant_address: "",
    Restaurant_phone: "",
  });
  //   const [imageURL, setImageURL] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "food_image") {
      setFoodData({ ...foodData, [e.target.name]: e.target.files[0] });
    } else {
      setFoodData({
        ...foodData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(foodData);
    const {
      food_name,
      food_description,
      food_category,
      food_price,
      food_image,
      Restaurant_address,
      Restaurant_phone,
    } = foodData;

    // setting up image url
    if (food_image == null) {
      alert("Please select an image");
      return;
    } else {
      const imageRef = ref(storage, `FoodImages/${food_image.name}`);
      const data = await uploadBytes(imageRef, food_image);
      if (data) {
        // alert("Image successfully uploaded");
        const imgUrl = await getDownloadURL(imageRef);
        // setImageURL(imgUrl);
        // alert(imgUrl);

        const newFoodData = {
          food_name,
          food_description,
          food_category,
          imageURL: imgUrl,
          food_price,
          Restaurant_address,
          Restaurant_phone,
        };

        try {
          const docRef = await addDoc(collection(db, "foodData"), newFoodData);
          alert("document written with id " + docRef.id);
          console.log("document written with id ", docRef.id);
          setFoodData({
            food_name: "",
            food_description: "",
            food_category: "",
            food_price: "",
            food_image: "",
            Restaurant_address: "",
            Restaurant_phone: "",
          });
        } catch (error) {
          alert(error.message);
        }
      } else {
        alert("Image upload failed");
      }
    }
  };

  return (
    <div className="form-outer">
      <h1>Add Food data:</h1>
      <form className="form-inner">
        <label className="form-group">Food name</label>
        <input
          type="text"
          name="food_name"
          value={foodData.food_name}
          onChange={handleChange}
        />
        <br />
        <label className="form-group">food Description</label>
        <input
          type="text"
          name="food_description"
          value={foodData.food_description}
          onChange={handleChange}
        />
        <br />
        <label className="form-group">food category</label>
        <input
          type="text"
          name="food_category"
          value={foodData.food_category}
          onChange={handleChange}
        />
        <br />
        <label className="form-group">food Price</label>
        <input
          type="text"
          name="food_price"
          value={foodData.food_price}
          onChange={handleChange}
        />
        <br />
        <label className="form-group">food Image</label>
        <input
          type="file"
          name="food_image"
          //   value={foodData.food_image}
          onChange={handleChange}
        />
        <br />
        <label className="form-group">Restaurant address</label>
        <input
          type="text"
          name="Restaurant_address"
          value={foodData.Restaurant_address}
          onChange={handleChange}
        />
        <br />
        <label className="form-group">Restaurant phone number</label>
        <input
          type="number"
          name="Restaurant_phone"
          value={foodData.Restaurant_phone}
          onChange={handleChange}
        />
        <br />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add food
        </button>
      </form>
    </div>
  );
};

export default AddFoodData;
