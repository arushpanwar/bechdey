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

<div className="flex justify-center items-center h-screen">
  <form onSubmit={handleSubmit} className="flex flex-col bg-white rounded-lg shadow-lg p-8">

  <div className="grid grid-cols-2 gap-4 mb-3">

    <div className="flex flex-col mb-3">
      <label htmlFor="cloth_type" className="block text-gray-700 font-bold mb-2">Cloth Type :</label>
      <input type="text" id="cloth_type" name="cloth_type" onBlur={handleBlur} className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>

    <div className="flex flex-col mb-3">
      <label htmlFor="size" className="block text-gray-700 font-bold mb-2">Size :</label>
      <input type="text" id="size" name="size" onBlur={handleBlur} className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    
    </div>

    <div className="grid grid-cols-2 gap-4 mb-3">

    <div className="flex flex-col mb-3">
      <label htmlFor="color" className="block text-gray-700 font-bold mb-2">Color :</label>
      <input type="text" id="color" name="color" onBlur={handleBlur} className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>

    <div className="flex flex-col mb-3">
      <label htmlFor="fabric" className="block text-gray-700 font-bold mb-2">Fabric :</label>
      <input type="text" id="fabric" name="fabric" onBlur={handleBlur} className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-3">
    <div className="flex flex-col mb-3">
      <label htmlFor="brand" className="block text-gray-700 font-bold mb-2">Brand :</label>
      <input type="text" id="brand" name="brand" onBlur={handleBlur} className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>

    <div className="flex flex-col mb-3">
      <label htmlFor="mrp" className="block text-gray-700 font-bold mb-2">MRP :</label>
      <input type="number" id="mrp" name="mrp" value={formData.mrp} onChange={handleChange}  className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-3">

    <div className="flex flex-col mb-3">
      <label htmlFor="age_months" className="block text-gray-700 font-bold mb-2">Age in Months :</label>
      <input type="number" id="age_months" name="age_months" value={formData.age_months} onChange={handleChange}  className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>

    <div className="flex flex-col mb-3">
      <label htmlFor="rental_duration" className="block text-gray-700 font-bold mb-2">Rental Duration :</label>
      <input type="number" id="rental_duration" name="rental_duration" value={formData.rental_duration} onChange={handleChange} className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>

    </div>

    <div className="grid grid-cols-2 gap-4 mb-3">
    
    <div className="flex flex-col mb-3">
      <label htmlFor="availability" className="block text-gray-700 font-bold mb-2">Availability :</label>
      <input type="text" id="availability" name="availability" onBlur={handleBlur} className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>

    <div className="flex flex-col mb-3">
      <label htmlFor="condition" className="block text-gray-700 font-bold mb-2">Condition :</label>
      <input type="text" id="condition" name="condition" onBlur={handleBlur} className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-3">
    <div className="flex flex-col mb-3">
      <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location :</label>
      <input type="text" id="location" name="location" onBlur={handleBlur} className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>

    <div className="flex flex-col mb-3">
      <label htmlFor="occasion" className="block text-gray-700 font-bold mb-2">Occasion :</label>
      <input type="text" id="occasion" name="occasion" onBlur={handleBlur} className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    </div>

    <button type="submit" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded shadow-md">Submit</button>
</form> 
</div> 


  {predictionResult && <p className="mt-4">Prediction Result: {predictionResult}</p>}
  <form onSubmit={handleSubmit} className="flex flex-col"></form>
    </>
  );
}

export default RentalForm;
