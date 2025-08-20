import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Booking() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Project Type");
  const [dropUp, setDropUp] = useState(false);
  const dropdownRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const options = ["Web Development", "Mobile App", "UI/UX Design", "SEO", "Other"];

  // Detect available space to toggle dropdown direction
  useEffect(() => {
    if (open && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      setDropUp(rect.bottom + 220 > viewportHeight); // check if dropdown fits below
    }
  }, [open]);

  // Validate form
  useEffect(() => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (selected === "Select Project Type") newErrors.project = "Project type is required";
    if (!form.budget.trim()) newErrors.budget = "Budget is required";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [form, selected]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("Form submitted:", { ...form, projectType: selected });
      alert("Form submitted successfully ✅");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-full gap-4">
          {/* Name */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="font-medium">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`bg-gray-100 rounded-xl p-3 max-w-full outline-none focus:ring-2 ${
                errors.name ? "focus:ring-red-400" : "focus:ring-blue-400"
              }`}
              placeholder="e.g Timothy Hammed"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`bg-gray-100 rounded-xl p-3 max-w-full outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-400" : "focus:ring-blue-400"
              }`}
              placeholder="e.g timothy@mail.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Project Type (Custom Dropdown) */}
          <div className="flex flex-col gap-2 relative mb-6" ref={dropdownRef}>
            <label className="font-medium">
              Project Type <span className="text-red-500">*</span>
            </label>
            <div
              className={`bg-gray-100 rounded-xl p-3 flex justify-between items-center cursor-pointer select-none transition ${
                errors.project ? "border border-red-400" : "hover:bg-gray-200"
              }`}
              onClick={() => setOpen(!open)}
            >
              <span className={selected === "Select Project Type" ? "text-gray-400" : ""}>
                {selected}
              </span>
              {open ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>

            {open && (
              <ul
                className={`absolute w-full bg-white shadow-lg rounded-xl border border-gray-200 z-10 overflow-hidden transition-all duration-200
                ${dropUp ? "bottom-full mb-2" : "top-full mt-2"}`}
              >
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`p-3 cursor-pointer transition ${
                      selected === option
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
            {errors.project && <p className="text-red-500 text-sm">{errors.project}</p>}
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="font-medium">
              Budget <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className={`bg-gray-100 rounded-xl p-3 max-w-full outline-none focus:ring-2 ${
                errors.budget ? "focus:ring-red-400" : "focus:ring-blue-400"
              }`}
              placeholder="Enter your budget"
            />
            {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 max-w-full mt-6">
          <label className="font-medium">Message (Optional)</label>
          <textarea
            rows={6}
            cols={40}
            name="message"
            value={form.message}
            onChange={handleChange}
            className="bg-gray-100 rounded-xl p-3 max-w-full outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write something"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full px-6 py-3 rounded-xl font-medium transition ${
              isValid
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
