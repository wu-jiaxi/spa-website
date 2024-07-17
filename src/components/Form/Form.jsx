import { useState, useRef } from "react";
import { createTicket } from "../services/api"; // Ensure this function handles file uploads
import "../Form/Form.css";
import { v4 as uuidv4 } from "uuid";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    attachment: null,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.description.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const currentDate = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      const formattedDate = currentDate.toLocaleString("en-US", options);

      const newFormData = new FormData();
      newFormData.append("name", formData.name);
      newFormData.append("email", formData.email);
      newFormData.append("description", formData.description);
      if (formData.attachment) {
        newFormData.append("attachment", formData.attachment);
      }
      newFormData.append("id", uuidv4());
      newFormData.append("created_at", formattedDate);

      await createTicket(newFormData);

      alert("Submitted");

      setFormData({
        name: "",
        email: "",
        description: "",
        attachment: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error submitting ticket", error);
      alert("Error submitting ticket");
    }
  };

  return (
    <div id="form-container">
      <form
        onSubmit={handleSubmit}
        action="POST"
        id="form"
        name="form"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          autoComplete="name-field"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          autoComplete="email-field"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          autoComplete="description-field"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
