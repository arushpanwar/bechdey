import { useState } from 'react';
import { FormEventHandler } from 'react';
import mappedData from './mappedData';

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
    setFormData(function (prevState){
          return {
            ...prevState,
            [name]: [parseInt(value)]
          }
    })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value)
    // console.log(mappedData[String(value)])
    setFormData(prevState => ({
      ...prevState,
      [name]: [mappedData[String(value)]]
    }));
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
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="cloth_type" >Cloth Type:</label>
      <input type="text" id="cloth_type" name="cloth_type" onBlur={handleBlur} />

      <label htmlFor="size">Size:</label>
      <input type="text" id="size" name="size"  onBlur={handleBlur} />

      <label htmlFor="color">Color:</label>
      <input type="text" id="color" name="color"  onBlur={handleBlur} />

      <label htmlFor="fabric">Fabric:</label>
      <input type="text" id="fabric" name="fabric"  onBlur={handleBlur} />

      <label htmlFor="brand">Brand:</label>
      <input type="text" id="brand" name="brand"  onBlur={handleBlur} />

      <label htmlFor="mrp">MRP:</label>
      <input type="number" id="mrp" name="mrp" value={formData.mrp} onChange={handleChange} />

      <label htmlFor="age_months">Age (months):</label>
      <input type="number" id="age_months" name="age_months" value={formData.age_months} onChange={handleChange} />

      <label htmlFor="rental_duration">Rental Duration:</label>
      <input type="number" id="rental_duration" name="rental_duration" value={formData.rental_duration} onChange={handleChange} />

      <label htmlFor="availability">Availability:</label>
      <input type="text" id="availability" name="availability" onBlur={handleBlur} />

      <label htmlFor="condition">Condition:</label>
      <input type="text" id="condition" name="condition"  onBlur={handleBlur}/>

      <label htmlFor="location">Location:</label>
      <input type="text" id="location" name="location"  onBlur={handleBlur}/>

      <label htmlFor="occasion">Occasion:</label>
      <input type="text" id="occasion" name="occasion"  onBlur={handleBlur}/>

      <button type="submit">Submit</button>
    </form>

    {predictionResult && <p>Prediction Result: {predictionResult}</p>}

    </>
  );
}

export default RentalForm;
