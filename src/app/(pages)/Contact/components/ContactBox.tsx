"use client";
import React, { useState } from "react";
import ButtonSub from "./ButtonSub";
import Swal from "sweetalert2";

const ContactBox = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target as HTMLFormElement;
    const formData = {
      firstName: (form.elements.namedItem("first-name") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("last-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset();
        Swal.fire({
          icon: "success",
          title: "Message sent",
          text: data?.message || "Thanks — we'll be in touch soon.",
          confirmButtonText: "OK",
        });
      } else {
        const errMsg = data?.error || "Something went wrong.";
        setStatus("❌ " + errMsg);
        Swal.fire({
          icon: "error",
          title: "Send failed",
          text: errMsg,
          confirmButtonText: "OK",
        });
      }
    } catch (err) {
      const message = (err as Error).message || "Unknown error";
      setStatus("❌ Error: " + message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg p-8 flex flex-col md:flex-row gap-8">
      {/* Left Side */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-gray-700 mb-4">Start the conversation</h2>
        <p className="text-gray-600 text-xl md:w-96">
          If none of the quick links above apply to you, please fill out the form. We'll be in touch.
        </p>
      </div>

      {/* Right Side (Form) */}
      <div className="flex-1">
        <form className="space-y-4 text-black" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-700">Name</label>
            <div className="flex gap-4">
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                className="w-1/2 h-14 p-2 border border-gray-200 focus:ring focus:ring-blue-200 focus:outline-none placeholder:text-gray-400"
                required
              />
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                className="w-1/2 h-14 p-2 border border-gray-200 focus:ring focus:ring-blue-200 focus:outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full h-14 p-2 border border-gray-200 focus:ring focus:ring-blue-200 focus:outline-none placeholder:text-gray-400"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full h-14 p-2 border border-gray-200 focus:ring focus:ring-blue-200 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 border border-gray-200 focus:ring focus:ring-blue-200 focus:outline-none placeholder:text-gray-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <ButtonSub text={loading ? "Sending..." : "Submit"} />
          </div>
        </form>

        {/* Status Message */}
        {status && (
          <p
            className={`mt-4 text-sm ${
              status.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactBox;
