"use client"
import { useState } from "react";
import hairloss1 from './assets/image_m_1 (1).webp';
import hairloss2 from './assets/image_m_1 (2).webp';
import hairloss3 from './assets/image_m_1 (3).webp';
import hairloss4 from './assets/image_m_1.webp';
import hairloss5 from './assets/image_m_2 (1).webp';
import hairloss6 from './assets/image_m_2.webp';
export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentField, setCurrentField] = useState(0);
  const [currentPer, setCurrentPer] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  // Add to formData state initialization
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    age: "",
    height: "",
    gender: "",
    weight: "",
    phone: "",
    address: "",
    hairLossType: "",
    scalpPhoto: null,
    sleepQuality: "",
    familyHistory: "",
    healthIssues: "", // Add this line
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    hairLossType: "",
    familyHistory: "",
    healthIssues: "",
    sleepQuality: "",
    scalpPhoto: "",
  });
  const steps = [
    { 
      title: "About You", 
      fields: [
   
        { question: "Before we start, can we get your name?", placeholder: "Enter your name", key: "name" },
        { question: "What's your phone number?", placeholder: "Enter phone number", key: "phone" },
        { question: "What's your email?", placeholder: "Enter your email", key: "email" },
        { question: "How old are you?", placeholder: "Enter your age", key: "age" },
        { question: "What's your gender?", placeholder: "Select gender", key: "gender" },
      
      ]
    },
    { 
      title: "Hair Health", 
      fields: [
        { 
          question: "Which image best describes your hair loss?", 
          key: "hairLossType",
          options: [
            { value: "Stage-1", images: [hairloss1, hairloss2], label: "Stage-1" },
            { value: "Stage-2", images: [hairloss3, hairloss4], label: "Stage-2" },
            { value: "Stage-3", images: [hairloss5, hairloss6], label: "Stage-3" },
            { value: "Stage-4", images: [hairloss1, hairloss2], label: "Stage-4" },
            { value: "Stage-5", images: [hairloss3, hairloss4], label: "Stage-5" },
            { value: "Stage-6", images: [hairloss5, hairloss6], label: "Stage-6" },
            { value: "Coin-Size-Patch", images: [hairloss1, hairloss2], label: "Coin Size Patch" },
            { value: "Heavy-Hair-Fall", images: [hairloss3, hairloss4], label: "Heavy Hair Fall" }
          ]
        },
        {
          question: "Do you have a family history of hair loss?",
          key: "familyHistory",
          type: "radio",
          options: [
            { value: "mother-side", label: "Mother or anyone from mother's side of the family" },
            { value: "father-side", label: "Father or anyone from father's side of the family" },
            { value: "both", label: "Both" },
            { value: "none", label: "None" }
          ],
          renderInput: (field, handleChange, formData) => (
            <div className="flex flex-col gap-4 mt-6">
              {field.options.map((option, idx) => (
                <div key={idx} className="relative">
                  <label className="flex items-center p-4 cursor-pointer">
                    <input
                      type="radio"
                      name="familyHistory"
                      value={option.value}
                      checked={formData.familyHistory === option.value}
                      onChange={(e) => handleChange(e, field.key)}
                      className="w-4 h-4 border-gray-300 text-[#9BBA70] focus:ring-[#9BBA70]"
                    />
                    <span className="ml-3 text-gray-700">{option.label}</span>
                  </label>
                  {idx !== field.options.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          )
        },
        {
          question: "Have you experienced any of the below in the last 1 year?",
          key: "healthIssues",
          type: "radio",
          options: [
            { value: "none", label: "None" },
            { value: "severe-health", label: "Severe Health issues (Dengue, Malaria, Typhoid or Covid)" },
            { value: "weight-changes", label: "Heavy weight loss / heavy weight gain" },
            { value: "surgery", label: "Surgery / heavy medication" }
          ],
          renderInput: (field, handleChange, formData) => (
            <div className="flex flex-col gap-4 mt-6">
              {field.options.map((option, idx) => (
                <div key={idx} className="relative">
                  <label className="flex items-center p-4 cursor-pointer">
                    <input
                      type="radio"
                      name="healthIssues"
                      value={option.value}
                      checked={formData.healthIssues === option.value}
                      onChange={(e) => handleChange(e, field.key)}
                      className="w-4 h-4 border-gray-300 text-[#9BBA70] focus:ring-[#9BBA70]"
                    />
                    <span className="ml-3 text-gray-700">{option.label}</span>
                  </label>
                  {idx !== field.options.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          )
        }
      ]
    },
    { 
      title: "Your Lifestyle", 
      fields: [
      
        // { question: "What's your weight?", placeholder: "Enter weight in kg", key: "weight" },
        { 
          question: "How well do you sleep?",
          key: "sleepQuality",
          type: "radio",
          options: [
            { value: "good", label: "Good (7-9 hours of sound sleep)", id: "sleep-good" },
            { value: "moderate", label: "Moderate (5-7 hours)", id: "sleep-moderate" },
            { value: "poor", label: "Poor (Less than 5 hours)", id: "sleep-poor" },
            { value: "very-poor", label: "Very Poor (Irregular sleep pattern)", id: "sleep-very-poor" },
            { value: "excellent", label: "Excellent (8-10 hours of uninterrupted sleep)", id: "sleep-excellent" }
          ],
          renderInput: (field, handleChange, formData) => (
            <div className="custom-radio-group mt-4">
              {field.options.map((option) => (
                <label key={option.id} className="custom-radio px-4">
                  <input
                    type="radio"
                    name="sleepQuality"
                    id={option.id}
                    value={option.value}
                    checked={formData.sleepQuality === option.value}
                    onChange={(e) => handleChange(e, field.key)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          )
        }
      ]
    },
    { 
      title: "Scalp Assessment", 
      fields: [
        { question: "Upload scalp photo which will be used by doctor after you purchase the plan", placeholder: "Upload photo", key: "scalpPhoto" }
      ]
    }
  ];
  const validateField = (key, value) => {
    switch (key) {
      case "name":
        return value.length < 4 ? "Name must be at least 4 characters long" : "";
      case "phone":
        return !/^\d{10}$/.test(value) ? "Phone number must be 10 digits" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : "";
      case "age":
        const age = parseInt(value);
        return !age || age < 18 || age > 100 ? "Age must be between 18 and 100" : "";
      case "gender":
        return !value ? "Please select your gender" : "";
      case "hairLossType":
        return !value ? "Please select a hair loss type" : "";
      case "familyHistory":
        return !value ? "Please select your family history" : "";
      case "healthIssues":
        return !value ? "Please select your health condition" : "";
      case "sleepQuality":
        return !value ? "Please select your sleep quality" : "";
      case "scalpPhoto":
        return !value ? "Please upload a scalp photo" : "";
      default:
        return "";
    }
  };
  // Calculate total number of questions across all steps
  const totalQuestions = steps.reduce((total, step) => total + step.fields.length, 0);
  
  // Update progress percentage calculation
  const progressPercentage = ((currentPer / totalQuestions) * 100).toFixed(0);

  const handleChange = (e, key) => {
    let value;
    
    if (key === "scalpPhoto") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
          setFormData({ ...formData, [key]: file });
          setValidationErrors({ ...validationErrors, [key]: "" });
        };
        reader.readAsDataURL(file);
      }
      return;
    } else if (key === "phone") {
      value = e.target.value.replace(/\D/g, '').slice(0, 10);
    } else {
      value = e.target.value;
    }
  
    setFormData({ ...formData, [key]: value });
    const error = validateField(key, value);
    setValidationErrors({ ...validationErrors, [key]: error });
  };

  // Update the handleNext function
  const handleNext = () => {
    const currentFields = [steps[currentStep].fields[currentField]];
    const currentKey = currentFields[0].key;
    
    // Validate current field
    const error = validateField(currentKey, formData[currentKey]);
    setValidationErrors({ ...validationErrors, [currentKey]: error });
    
    if (error) return;
  
    if (currentField < steps[currentStep].fields.length - 1) {
      setCurrentField(currentField + 1);
      setCurrentPer(currentPer + 1);
    } else if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentField(0);
      setCurrentPer(currentPer + 1);
    } else {
      setCurrentPer(totalQuestions);
      // Validate all fields before final submission
      const allErrors = {};
      let hasErrors = false;
      
      Object.keys(formData).forEach(key => {
        const error = validateField(key, formData[key]);
        if (error) {
          allErrors[key] = error;
          hasErrors = true;
        }
      });
  
      if (hasErrors) {
        setValidationErrors(allErrors);
        alert("Please fill all fields correctly before submitting");
        return;
      }
  
      alert("Thank you! Here is your submitted data:\n" + JSON.stringify(formData, null, 2));
    }
  };

  // Update the handlePrev function
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
        <p className="logo font-extrabold text-white text-3xl"> Groroot . </p>
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
            <a href="http://grorootzmd.com">
            Exit
            </a>
          </p>
        </div>
      </div>

      <div className=" bg-slate-50 flex justify-center gap-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${index === currentStep ? "w-full sm:py-4 sm:px-5 sm:mx-1 xs:mx-1 rounded-md bg-[#9BBA70] text-white" : "w-full sm:py-4 sm:px-5 sm:mx-1 xs:mx-1 rounded-md bg-gray-200 text-gray-900"}`}
          >
            <p className="sm:text-md text-sm">{step.title}</p>
          </div>
        ))}
      </div>

      <div className="h-10 w-full sm:w-3/6 mt-10">
        <div className="flex justify-center w-full items-center gap-2">
          <div className="w-[80%] h-2 bg-[#dddddd] relative rounded-md overflow-hidden">
            <div 
              className="h-full bg-[#9BBA70] transition-all duration-300" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium">{progressPercentage}%</span>
        </div>
      </div>

      <div className="sm:w-3/6 w-full space-y-8">
        {[steps[currentStep].fields[currentField]].map((field, index) => (
          <div key={index} className="mt-6">
<h2 className="text-2xl font-bold text-center mb-4">{field.question}</h2>
            {field.key === "gender" ? (
              <div className="flex justify-center gap-4 mt-4">
                <button
                  type="button"
                  className={`px-8 py-3 rounded-md border-2 transition-all ${
                    formData.gender === "Male"
                      ? 'bg-[#9BBA70] text-white border-[#9BBA70]'
                      : 'border-gray-300 hover:border-[#9BBA70]'
                  }`}
                  onClick={() => handleChange({ target: { value: "Male" } }, field.key)}
                >
                  Male
                </button>
                <button
                  type="button"
                  className={`px-8 py-3 rounded-md border-2 transition-all ${
                    formData.gender === "Female"
                      ? 'bg-[#9BBA70] text-white border-[#9BBA70]'
                      : 'border-gray-300 hover:border-[#9BBA70]'
                  }`}
                  onClick={() => handleChange({ target: { value: "Female" } }, field.key)}
                >
                  Female
                </button>
              </div>
            ) : field.key === "hairLossType" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {field.options.map((option, idx) => (
                  <div 
                    key={idx} 
                    className={`relative flex items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all ${
                      formData.hairLossType === option.value ? 'bg-gray-100' : ''
                    }`}
                  >
                    <label className="flex items-center w-full cursor-pointer">
                      <input
                        type="radio"
                        name="hairLossType"
                        value={option.value}
                        checked={formData.hairLossType === option.value}
                        onChange={(e) => handleChange(e, field.key)}
                        className="hidden"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                        formData.hairLossType === option.value 
                          ? 'border-[#9BBA70]' 
                          : 'border-gray-300'
                      }`}>
                        {formData.hairLossType === option.value && (
                          <div className="w-3 h-3 rounded-full bg-[#9BBA70]"></div>
                        )}
                      </div>
                      <span className={`flex-1 ${
                        formData.hairLossType === option.value 
                          ? 'text-[#414042] font-semibold' 
                          : 'text-gray-600'
                      }`}>{option.label}</span>
                      <div className="flex gap-2 ml-auto">
                        {option.images.map((image, imageIdx) => (
                          <img 
                            key={imageIdx}
                            src={image.src} 
                            alt={`${option.label} ${imageIdx === 0 ? 'front' : 'back'} view`} 
                            className="w-10 h-10 md:w-12 md:h-12 object-contain"
                          />
                        ))}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            ) : field.key === "familyHistory" ? (
              <div className="flex flex-col gap-4 mt-8">
                {field.options.map((option, idx) => (
                  <div key={idx} className="relative">
                    <label className="flex items-center cursor-pointer p-4">
                      <input
                        type="radio"
                        name="familyHistory"
                        value={option.value}
                        checked={formData.familyHistory === option.value}
                        onChange={(e) => handleChange(e, field.key)}
                        className="hidden"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                        formData.familyHistory === option.value 
                          ? 'border-[#9BBA70]' 
                          : 'border-gray-300'
                      }`}>
                        {formData.familyHistory === option.value && (
                          <div className="w-3 h-3 rounded-full bg-[#9BBA70]"></div>
                        )}
                      </div>
                      <span className={`${
                        formData.familyHistory === option.value 
                          ? 'text-[#414042] font-semibold' 
                          : 'text-gray-600'
                      }`}>{option.label}</span>
                    </label>
                    {idx !== field.options.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            ) :field.key === "healthIssues" ? (
              <div className="flex flex-col gap-4 mt-8">
                {field.options.map((option, idx) => (
                  <div key={idx} className="relative">
                    <label className="flex items-center cursor-pointer p-4">
                      <input
                        type="checkbox"
                        name="healthIssues"
                        value={option.value}
                        checked={formData.healthIssues.includes(option.value)}
                        onChange={(e) => handleChange(e, field.key)}
                        className="hidden"
                      />
                      <div className={`w-5 h-5 border-2 flex items-center justify-center mr-3 ${
                        formData.healthIssues.includes(option.value)
                          ? 'border-[#9BBA70] bg-[#9BBA70]'
                          : 'border-gray-300'
                      }`}>
                        {formData.healthIssues.includes(option.value) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`${
                        formData.healthIssues.includes(option.value)
                          ? 'text-[#414042] font-semibold'
                          : 'text-gray-600'
                      }`}>{option.label}</span>
                    </label>
                    {idx !== field.options.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            ): field.key === "sleepQuality" ? (
              <div className="flex flex-col gap-4 mt-8">
                {field.options.map((option) => (
                  <label key={option.id} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="sleepQuality"
                      value={option.value}
                      checked={formData.sleepQuality === option.value}
                      onChange={(e) => handleChange(e, field.key)}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                      formData.sleepQuality === option.value 
                        ? 'border-[#9BBA70]' 
                        : 'border-gray-300'
                    }`}>
                      {formData.sleepQuality === option.value && (
                        <div className="w-3 h-3 rounded-full bg-[#9BBA70]"></div>
                      )}
                    </div>
                    <span className={`${
                      formData.sleepQuality === option.value 
                        ? 'text-[#414042] font-semibold' 
                        : 'text-gray-600'
                    }`}>{option.label}</span>
                  </label>
                ))}
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
              <div>
              <input
                type="text"
                className={`w-full p-2 border-b mt-24 rounded-sm focus:border-[#9BBA70] focus:outline-none 
                }`}
                placeholder={field.placeholder}
                value={formData[field.key]}
                onChange={(e) => handleChange(e, field.key)}
              />
              {validationErrors[field.key] && (
                <p className="text-[#9BBA70] text-sm mt-1">{validationErrors[field.key]}</p>
              )}
            </div>
            )}
          </div>
        ))}

        <div className="button-group mt-10 flex items-center justify-center">
        <button 
  onClick={handleNext}
  className={`w-1/2 p-2 py-4 bg-[#414042] text-white rounded-md ${
    validationErrors[steps[currentStep].fields[currentField].key]
      ? 'opacity-50 cursor-not-allowed' 
      : ''
  }`}
  disabled={!!validationErrors[steps[currentStep].fields[currentField].key]}
>
  {currentStep === steps.length - 1 && currentField === steps[currentStep].fields.length - 1 ? "SUBMIT" : "NEXT →"}
</button>
        </div>
         <div className="text-center text-gray-500">
         <small>*Your contact details will be used by Traya hair coach to reach out to you via call/sms/whatsapp.</small>
         </div>
      </div>
    </div>
  );
}
