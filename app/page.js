"use client"
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentField, setCurrentField] = useState(0);
  const [currentPer, setCurrentPer] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    age: "",
    height: "",
    gender: "",
    weight: "",
    phone: "",
    address: "",
    scalpPhoto: null
  });

  const steps = [
    { 
      title: "About You", 
      fields: [
        { question: "What's your email?", placeholder: "Enter your email", key: "email" },
        { question: "What's your name?", placeholder: "Enter your name", key: "name" }
      ]
    },
    { 
      title: "Hair Health", 
      fields: [
        { question: "How old are you?", placeholder: "Enter your age", key: "age" },
        { question: "What's your height?", placeholder: "Enter height in cm", key: "height" }
      ]
    },
    { 
      title: "Your Lifestyle", 
      fields: [
        { question: "What's your gender?", placeholder: "Select gender", key: "gender" },
        { question: "What's your weight?", placeholder: "Enter weight in kg", key: "weight" }
      ]
    },
    { 
      title: "Scalp Assessment", 
      fields: [
        { question: "What's your phone number?", placeholder: "Enter phone number", key: "phone" },
        { question: "Upload scalp photo which will be used by doctor after you purchase the plan", placeholder: "Upload photo", key: "scalpPhoto" }
      ]
    }
  ];

  const progressPercentage = ((currentPer / (steps.length * 2)) * 100).toFixed(0);

  const handleChange = (e, key) => {
    if (key === "scalpPhoto") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
          setFormData({ ...formData, [key]: file });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [key]: e.target.value });
    }
  };

  const handleNext = () => {
    const currentFields = [steps[currentStep].fields[currentField]];
    const isFieldEmpty = currentFields.some(field => {
      if (field.key === "scalpPhoto") {
        return !formData[field.key];
      }
      return formData[field.key].trim() === "";
    });
    
    if (isFieldEmpty) return;
    
    if (currentField < steps[currentStep].fields.length - 1) {
      setCurrentField(currentField + 1);
      setCurrentPer(currentPer + 1);
    } else if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentField(0);
      setCurrentPer(currentPer + 1);
    } else {
      setCurrentPer(8);
      alert("Thank you! Here is your submitted data:\n" + JSON.stringify(formData, null, 2));
    }
  };

  const handlePrev = () => {
    if (currentField > 0) {
      setCurrentField(currentField - 1);
      setCurrentPer(currentPer - 1);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentField(steps[currentStep - 1].fields.length - 1);
      setCurrentPer(currentPer - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <header className="w-full h-[7rem] bg-[#414042] px-3 py-5">
        <p className="logo font-extrabold text-white text-3xl">Grorootzmd</p>
        <p className="text-white">This hair test is co-created with experts</p>
      </header>
      
      <div className="flex justify-between w-3/6 px-4 h-20 items-center">
        <div className="prv">
          <p className={(currentStep === 0 && currentField === 0) ? "hidden" : "cursor-pointer underline font-semibold"} onClick={handlePrev}>
            Previous
          </p>
        </div>
        <div className="exit">
          <p className="underline font-semibold cursor-pointer">
            Exit
          </p>
        </div>
      </div>

      <div className="w-3/6 bg-slate-50 flex justify-center gap-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${index === currentStep ? "w-full sm:py-4 sm:px-5 sm:mx-1 xs:mx-1 rounded-md bg-[#9BBA70] text-white" : "w-full sm:py-4 sm:px-5 sm:mx-1 xs:mx-1 rounded-md bg-gray-200 text-gray-900"}`}
          >
            {step.title}
          </div>
        ))}
      </div>

      <div className="h-10 w-3/6 mt-10">
        <div className="flex justify-center w-full">
          <div className="w-[80%] h-2 bg-[#dddddd] relative rounded-md overflow-hidden">
            <div className="h-full bg-[#9BBA70]" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <span className="text-sm">{progressPercentage}%</span>
        </div>
      </div>

      <div className="w-2/6 space-y-8">
        {[steps[currentStep].fields[currentField]].map((field, index) => (
          <div key={index} className="mt-6">
            <h2 className="text-2xl font-bold text-center mb-4">{field.question}</h2>
            {field.key === "gender" ? (
              <div className="custom-radio-group mt-4">
                <label className="custom-radio">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Male" 
                    onChange={(e) => handleChange(e, field.key)}
                  />
                  <span></span>
                  Male
                </label>
                <label className="custom-radio">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Female" 
                    className="w-full p-2 border-b mt-24 rounded-sm focus:border-[#9BBA70] focus:outline-none"
                    onChange={(e) => handleChange(e, field.key)}
                  />
                  <span></span>
                  Female
                </label>
              </div>
            ) : field.key === "scalpPhoto" ? (
              <div className="flex flex-col items-center">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="scalpPhoto"
                  onChange={(e) => handleChange(e, field.key)}
                />
                <label 
                  htmlFor="scalpPhoto"
                  className="cursor-pointer bg-[#9BBA70] text-white px-4 py-2 rounded-md"
                >
                  Choose Photo
                </label>
                {selectedImage && (
                  <div className="mt-4 w-48 h-48">
                    <img 
                      src={selectedImage} 
                      alt="Selected scalp" 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
            ) : (
              <input
                type="text"
                className="w-full p-2 border-b mt-24 rounded-sm focus:border-[#9BBA70] focus:outline-none"
                placeholder={field.placeholder}
                value={formData[field.key]}
                onChange={(e) => handleChange(e, field.key)}
              />
            )}
          </div>
        ))}

        <div className="button-group mt-10 flex items-center justify-center">
          <button 
            onClick={handleNext}
            className={`w-1/2 p-2 py-4 bg-[#414042] text-white rounded-md ${
              [steps[currentStep].fields[currentField]].some(field => {
                if (field.key === "scalpPhoto") {
                  return !formData[field.key];
                }
                return formData[field.key].trim() === "";
              })
                ? 'cursor-not-allowed' 
                : ''
            }`}
            disabled={[steps[currentStep].fields[currentField]].some(field => {
              if (field.key === "scalpPhoto") {
                return !formData[field.key];
              }
              return formData[field.key].trim() === "";
            })}
          >
            {currentStep === steps.length - 1 && currentField === steps[currentStep].fields.length - 1 ? "SUBMIT" : "NEXT →"}
          </button>
        </div>
      </div>
    </div>
  );
}
