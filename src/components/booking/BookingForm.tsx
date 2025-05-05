import React, { FormEvent, useState } from "react";
import { Car, User, MapPin, Phone, Mail } from "lucide-react";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";
import emailjs from "emailjs-com";

interface BookingFormProps {
  serviceName: string;
  onSubmit: (e: FormEvent) => void;
}

export function BookingForm({ serviceName, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    carPlate: "",
    carModel: "",
    washType: "standard",
  });

  const [statusMessage, setStatusMessage] = useState(""); // Store status message (success or failure)

  // Options for wash type
  const washTypes = [
    { value: "standard", label: "غسيل عادي" },
    { value: "premium", label: "غسيل مميز" },
  ];

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission and send data via EmailJS
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatusMessage("جاري إرسال البيانات...");

    try {
      // Send email to the admin
      const responseAdmin = await emailjs.send(
        "service_ux8xjba", // Your EmailJS service ID
        "template_ksh9byt", // Your EmailJS template ID for admin
        formData, // Data you want to send (booking details)
        "1LubalZVKkXpu38Im" // Your EmailJS user ID
      );

      // Send email to the customer
      const responseClient = await emailjs.send(
        "service_ux8xjba", // Same service ID
        "template_beefi9d", // Your EmailJS template ID for client
        formData, // Same form data
        "1LubalZVKkXpu38Im" // Same user ID
      );

      // Check if both emails were sent successfully
      if (responseAdmin.status === 200 && responseClient.status === 200) {
        setStatusMessage("تم إرسال الحجز بنجاح!");
      } else {
        console.error("API response error:", responseAdmin, responseClient);
        setStatusMessage("حدث خطأ أثناء إرسال الحجز.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("حدث خطأ أثناء إرسال الحجز.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Customer Name Field */}
      <Input
        label="اسم العميل"
        icon={User}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* Email Field */}
      <Input
        label="البريد الالكتروني"
        icon={Mail}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Phone Field */}
      <Input
        label="رقم الجوال"
        icon={Phone}
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      {/* Location Field */}
      <Input
        label="موقع العميل"
        icon={MapPin}
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      {/* Car Plate Field */}
      <Input
        label="لوحة السيارة"
        icon={Car}
        type="text"
        name="carPlate"
        value={formData.carPlate}
        onChange={handleChange}
        required
      />

      {/* Car Model Field */}
      <Input
        label="نوع السيارة وموديلها"
        name="carModel"
        value={formData.carModel}
        onChange={handleChange}
        required
      />

      {/* Wash Type Field */}
      <Select
        label="فئة الغسلة"
        options={washTypes}
        name="washType"
        value={formData.washType}
        onChange={handleChange}
        required
      />

      {/* Submit Button */}
      <Button type="submit" fullWidth>
        تأكيد الحجز
      </Button>

      {/* Display status message */}
      {statusMessage && (
        <p
          className={`mt-4 p-2 rounded ${
            statusMessage.includes("نجاح")
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
