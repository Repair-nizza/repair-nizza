"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useState } from "react";
import MainForm from "./MainForm";
import SoloInput from "./SoloInput";
import ThreeCards from "./ThreeCards";
import Container from "../Container";
import HeroPath from "./HeroPath";

const FormPath = () => {
  const t = useTranslations("leaveRequest.mainForm");
  const [selectedType, setSelectedType] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const validationSchema = Yup.object({
    phone: Yup.string()
      .required(t("validation.phoneRequired"))
      .min(8, t("validation.phoneInvalid")),
  });

  const initialValues = {
    customDescription: "",
    area: "",
    exactArea: "",
    budget: "",
    exactBudget: "",
    timeline: "",
    exactTimeline: "",
    name: "",
    phone: "",
    email: "",
    comment: "",
    repairType: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Форматируем данные для более читаемого вида в Telegram
      const formattedMessage = {
        form_type: "Leave Request Form",
        name: values.name || "Not provided",
        phone: values.phone,
        email: values.email || "Not provided",
        repair_type: selectedType || "Not selected",
        repair_description: values.customDescription || "Not provided",
        area_type: values.area || "Not selected",
        exact_area: values.exactArea || "Not provided",
        budget_range: values.budget || "Not selected",
        exact_budget: values.exactBudget || "Not provided",
        timeline: values.timeline || "Not selected",
        exact_timeline: values.exactTimeline || "Not provided",
        additional_comment: values.comment || "No comment",
      };

      const response = await axios.post("/api/send-message", formattedMessage);

      if (response.data.success) {
        resetForm();
        setSelectedType(null);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <HeroPath
            onTypeSelect={handleTypeSelect}
            selectedType={selectedType}
          />
          <SoloInput />
          <Container>
            <ThreeCards />
          </Container>
          <MainForm />
        </Form>
      </Formik>
      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300">
          {t("success")}
        </div>
      )}
    </>
  );
};

export default FormPath;
