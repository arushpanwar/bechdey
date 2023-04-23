import { useState } from 'react';
import { FormEventHandler } from 'react';


function RentalForm() {
    const [predictionResult, setPredictionResult] = useState('');
  const [formData, setFormData] = useState({
    cloth_type: [],
    size: [],
    color: [],
    fabric: [],
    brand: [],
    mrp: [],
    age_months: [],
    rental_duration: [],
    availability: [],
    condition: [],
    location: [],
    occasion: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value)
    // setFormData(prevState => ({
    //   ...prevState,
    //   [name]: [value]
    // }));
    setFormData(function (prevState){
        console.log(prevState);
        // prevState[name].push(value);
        // return prevState;
        return {
            ...prevState,
            [name]: [parseInt(value)]
        }
    })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Make the POST request to the Flask server
    fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPredictionResult(data.prediction);
        // Do something with the prediction result
      })
      .catch(error => console.error(error));
  }
  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="cloth_type">Cloth Type:</label>
      <input type="text" id="cloth_type" name="cloth_type" value={formData.cloth_type} onChange={handleChange} />

      <label htmlFor="size">Size:</label>
      <input type="text" id="size" name="size" value={formData.size} onChange={handleChange} />

      <label htmlFor="color">Color:</label>
      <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} />

      <label htmlFor="fabric">Fabric:</label>
      <input type="text" id="fabric" name="fabric" value={formData.fabric} onChange={handleChange} />

      <label htmlFor="brand">Brand:</label>
      <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} />

      <label htmlFor="mrp">MRP:</label>
      <input type="text" id="mrp" name="mrp" value={formData.mrp} onChange={handleChange} />

      <label htmlFor="age_months">Age (months):</label>
      <input type="text" id="age_months" name="age_months" value={formData.age_months} onChange={handleChange} />

      <label htmlFor="rental_duration">Rental Duration:</label>
      <input type="text" id="rental_duration" name="rental_duration" value={formData.rental_duration} onChange={handleChange} />

      <label htmlFor="availability">Availability:</label>
      <input type="text" id="availability" name="availability" value={formData.availability} onChange={handleChange} />

      <label htmlFor="condition">Condition:</label>
      <input type="text" id="condition" name="condition" value={formData.condition} onChange={handleChange} />

      <label htmlFor="location">Location:</label>
      <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />

      <label htmlFor="occasion">Occasion:</label>
      <input type="text" id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>

    {predictionResult && <p>Prediction Result: {predictionResult}</p>}

    </>
  );
}

export default RentalForm;
