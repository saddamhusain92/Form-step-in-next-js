"use client"
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPer, setCurrentPer] = useState(0);
  const [formData, setFormData] = useState({
    Email: "",
  age: "",
  gender: "",
    phone: "",
  });

  const steps = [
    { title: "About You", question: "Before we start, can we get your Email ?", placeholder: "Before we start, can we get your Email ?", key: "Email" },
    { title: "Hair Health", question: "How old are you?", placeholder: "How old are you?", key: "age" },
    { title: "Your Lifestyle", question: "Please enter your Gender", placeholder: "Please enter your Gender", key: "gender" },
    { title: "Scalp Assessment", question: "Finally, enter your phone number.", placeholder: "Phone Number", key: "phone" },
  ];

  const progressPercentage =((currentPer / (steps.length)) * 100).toFixed(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [steps[currentStep].key]: e.target.value });
  };

  const handleNext = () => {
    if (formData[steps[currentStep].key].trim() === "") return;
    if (currentStep < steps.length-1) {
      setCurrentStep(currentStep + 1);
      setCurrentPer(currentPer+1)
    } else {
      setCurrentPer(4)
      alert("Thank you! Here is your submitted data:\n" + JSON.stringify(formData, null, 2));
   
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setCurrentPer(currentPer-1)
    };
  };



  return (
    <div className="flex flex-col justify-center items-center h-full  w-full">
      {/* Header */}
      <header className="w-full h-[7rem] bg-[#414042] px-3 py-5">
        <p className="logo font-extrabold text-white text-3xl">Traya.</p>
        <p className="text-white">This hair test is co-created with experts</p>
      </header>
     {/* controll tab */}
     <div className="flex justify-between w-3/6 px-4 h-20 items-center ">
      <div className="prv">
      <p className={currentStep === 0?"hidden":" cursor-pointer underline font-semibold"} onClick={handlePrev}>
        Previous
      </p>
      </div>
      <div className="exit">
      <p className="underline font-semibold cursor-pointer">
        Exit
      </p>
      </div>
     </div>

      {/* Tabs */}
      <div className=" w-3/6 bg-slate-50 flex justify-center gap-3 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-full sm:py-4 sm:px-5  sm:mx-1 xs:mx-1 rounded-md bg-gray-200 text-gray-900 rounded-md bg-gray-200 text-gray-900 ${index === currentStep ? "bg-[#9BBA70] text-white" : ""}`}
          >
            {step.title}
          </div>
        ))}
      </div>
  
      <div className="h-10 w-3/6  mt-10">
      {/* progressbar */}
      <div className="flex justify-center w-full ">
      <div className="w-[80%] h-2 bg-[#dddddd] relative rounded-md overflow-hidden">
        <div className="h-full bg-[#9BBA70]" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <span className="text-sm">{progressPercentage}%</span>
      </div>

      {/*  */}
      </div>
      {/* Form #9BBA70 */}
      <div className=" w-2/6 ">
         {/* Progress Bar */}
      
        <h2 className="text-2xl font-bold text-center">{steps[currentStep].question}</h2>
        {currentPer!=2&&<input
          type="text"
          className="w-full p-2 border-b mt-24 rounded-sm focus:border-[#414042] focus:outline-none"
          placeholder={steps[currentStep].placeholder}
          value={formData[steps[currentStep].key]}
          onChange={handleChange}
        />}
        {currentPer==2&&<div className="custom-radio-group">
        <label className="custom-radio">
          <input type="radio" name="gender" value="Male" onChange={handleChange} />
          <span></span>
          Male
        </label>
        <label className="custom-radio">
          <input type="radio" name="gender" value="Female" onChange={handleChange} />
          <span></span>
          Female
        </label>
      </div>}
        

        <div className="button-group mt-10 flex items-center justify-center">
          <button onClick={handleNext}
          className={formData[steps[currentStep].key].trim() === ""?' cursor-not-allowed w-1/2 p-2 py-4 bg-[#414042] text-white rounded-md':`w-1/2 p-2 py-4 bg-[#414042] text-white rounded-md`}
          disabled={formData[steps[currentStep].key].trim() === ""}>
            {currentStep === steps.length - 1 ? "SUBMIT" : "NEXT →"}
          </button>
        </div>
      </div>
    </div>
  );
}

