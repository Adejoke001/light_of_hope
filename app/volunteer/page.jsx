"use client";
import React, { useState } from "react";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    skills: "",
    availability: "",
    interest: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Volunteer application submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      skills: "",
      availability: "",
      interest: "",
      experience: "",
      message: "",
    });

    alert(
      "Thank you for your interest in volunteering! We will contact you soon."
    );
  };

  const skillOptions = [
    "Teaching/Tutoring",
    "Counseling",
    "Event Planning",
    "Fundraising",
    "Social Media",
    "Graphic Design",
    "Writing/Content",
    "Technical Support",
    "Administrative",
    "Medical/Health",
    "Legal Services",
    "Other",
  ];

  const interestAreas = [
    "Community Outreach",
    "Youth Programs",
    "Elderly Care",
    "Environmental Projects",
    "Education",
    "Crisis Support",
    "Event Volunteering",
    "Remote Volunteering",
    "Any Area",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-fuchsia-700">
          Join Our Volunteer Team
        </h2>
        <p className="text-gray-600 text-lg">
          Make a difference in your community
        </p>
        <div className="w-20 h-1 bg-fuchsia-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                placeholder="Your city"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              placeholder="Street address, ZIP code"
            />
          </div>
        </div>

        {/* Volunteer Preferences */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Volunteer Preferences
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Areas of Interest *
              </label>
              <select
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              >
                <option value="">Select an area</option>
                {interestAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability *
              </label>
              <select
                name="availability"
                required
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              >
                <option value="">Select availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="evenings">Evenings</option>
                <option value="flexible">Flexible</option>
                <option value="fulltime">Full-time</option>
              </select>
            </div>
          </div>

          {/* <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills & Expertise (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {skillOptions.map(skill => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="skills"
                    value={skill}
                    onChange={(e) => {
                      const selectedSkills = formData.skills.split(', ').filter(s => s);
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          skills: [...selectedSkills, skill].join(', ')
                        });
                      } else {
                        setFormData({
                          ...formData,
                          skills: selectedSkills.filter(s => s !== skill).join(', ')
                        });
                      }
                    }}
                    className="rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                  />
                  <span className="text-sm text-gray-700">{skill}</span>
                </label>
              ))}
            </div>
          </div> */}

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills & Expertise (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {skillOptions.map((skill) => (
                <label
                  key={skill}
                  className="flex items-center space-x-2 cursor-pointer hover:text-pink-600 transition-colors"
                >
                  <input
                    type="checkbox"
                    name="skills"
                    value={skill}
                    onChange={(e) => {
                      const selectedSkills = formData.skills
                        .split(", ")
                        .filter((s) => s);
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          skills: [...selectedSkills, skill].join(", "),
                        });
                      } else {
                        setFormData({
                          ...formData,
                          skills: selectedSkills
                            .filter((s) => s !== skill)
                            .join(", "),
                        });
                      }
                    }}
                    className="w-4 h-4 accent-pink-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">{skill}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Additional Information
          </h3>

          <div className="mb-4">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Previous Volunteer Experience
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={3}
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition resize-vertical"
              placeholder="Describe any previous volunteer experience..."
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Why do you want to volunteer with us? *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition resize-vertical"
              placeholder="Share your motivation and what you hope to achieve..."
            />
          </div>
        </div>

        <div className="text-center pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-pink-500 text-white font-semibold px-10 py-3 rounded-lg hover:bg-pink-600 transition disabled:bg-pink-300 disabled:cursor-not-allowed flex items-center justify-center mx-auto space-x-2 text-lg"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting Application...</span>
              </>
            ) : (
              <span>Apply to Volunteer</span>
            )}
          </button>
          <p className="text-gray-500 text-sm mt-3">
            * Required fields. We'll contact you within 2-3 business days.
          </p>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
