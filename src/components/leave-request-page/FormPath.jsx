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
  const cardsT = useTranslations("leaveRequest.cards");
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

  // Функция для получения человекочитаемого значения радиокнопки
  const getRadioValue = (fieldName, value) => {
    if (!value) return "";

    if (fieldName === "timeline") {
      const timelineOptions = {
        asap: cardsT("timeline.options.asap"),
        month: cardsT("timeline.options.month"),
        threeMonths: cardsT("timeline.options.threeMonths"),
        notSure: cardsT("timeline.options.notSure"),
      };
      return timelineOptions[value] || value;
    } else {
      const options = {
        small: cardsT(`${fieldName}.options.small`),
        medium: cardsT(`${fieldName}.options.medium`),
        large: cardsT(`${fieldName}.options.large`),
        extraLarge: cardsT(`${fieldName}.options.extraLarge`),
      };
      return options[value] || value;
    }
  };

  // Функция для получения приоритетного значения (радиокнопка или пользовательский ввод)
  const getPriorityValue = (radioValue, exactValue, fieldName) => {
    if (exactValue && exactValue.trim() !== "") {
      return exactValue;
    }
    if (radioValue && radioValue.trim() !== "") {
      return getRadioValue(fieldName, radioValue);
    }
    return "";
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Форматируем данные для более читаемого вида в Telegram
      const formattedMessage = {
        Имя: values.name,
        Телефон: values.phone,
        Email: values.email,
        Ремонт: selectedType || values.customDescription,
        Площадь: getPriorityValue(values.area, values.exactArea, "area"),
        Бюджет: getPriorityValue(values.budget, values.exactBudget, "budget"),
        Сроки: getPriorityValue(
          values.timeline,
          values.exactTimeline,
          "timeline"
        ),
        Комментарий: values.comment,
      };

      // Приводим все значения к строке
      const stringifiedMessage = Object.fromEntries(
        Object.entries(formattedMessage).map(([key, value]) => [
          key,
          value !== undefined && value !== null ? String(value) : "",
        ])
      );

      // Фильтруем только непустые строки
      const filteredMessage = Object.fromEntries(
        Object.entries(stringifiedMessage).filter(
          ([key, value]) => value.trim() !== ""
        )
      );

      const response = await axios.post("/api/send-message", filteredMessage);

      if (response.data.success) {
        resetForm();
        setSelectedType(null);
        setShowSuccess(true);
        // Прокручиваем страницу вверх
        window.scrollTo({ top: 0, behavior: "smooth" });
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
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-500 animate-slide-up z-50 w-[300px] md:w-[400px] lg:w-[500px] text-center">
          {t("success")}
        </div>
      )}
    </>
  );
};

export default FormPath;
