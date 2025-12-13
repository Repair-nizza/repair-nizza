"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const FeedbackForm = ({ service }) => {
  const t = useTranslations("feedbackForm");
  const locale = useLocale();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const formRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isDescriptionInView = useInView(descriptionRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, t("validation.name")),
    phone: Yup.string()
      .min(8, t("validation.phone"))
      .max(15, t("validation.phone"))
      .required(t("validation.required")),
    message: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setIsSubmitting(true);
    try {
      const formattedMessage = {
        Имя: values.name,
        Телефон: values.phone,
        Сообщение: values.message,
      };

      if (service) {
        const serviceTitle = service.title?.[locale] || service.title?.ru || service.title?.en || "";
        if (serviceTitle) {
          formattedMessage["Сервис"] = serviceTitle;
        }
      }

      const stringifiedMessage = Object.fromEntries(
        Object.entries(formattedMessage).map(([key, value]) => [
          key,
          value !== undefined && value !== null ? String(value) : "",
        ])
      );

      const filteredMessage = Object.fromEntries(
        Object.entries(stringifiedMessage).filter(
          ([key, value]) => value.trim() !== ""
        )
      );

      const response = await axios.post("/api/send-message", filteredMessage);

      if (response.data.success) {
        resetForm();
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        locale === "ru"
          ? "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз."
          : locale === "fr"
          ? "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer."
          : "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="mb-[100px] lg:mt-[135px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="mb-8 lg:mb-0 lg:pl-[62px]">
            <motion.h2
              ref={titleRef}
              initial={{ x: -100, opacity: 0 }}
              animate={isTitleInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-arsenal text-[32px] leading-[125%] lg:text-[64px] uppercase mb-4 lg:mb-[9px] lg:w-[572px]"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              ref={descriptionRef}
              initial={{ y: 20, opacity: 0 }}
              animate={isDescriptionInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="font-montserrat font-light text-base lg:text-[20px] leading-[125%] max-w-[265px] lg:max-w-[429px]"
            >
              {t("description")}
            </motion.p>
          </div>

          <motion.div
            ref={formRef}
            initial={{ x: 100, opacity: 0 }}
            animate={isFormInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="lg:flex-shrink-0 lg:w-[317px] lg:mr-[62px]"
          >
            <Formik
              initialValues={{ name: "", phone: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="flex flex-col gap-[14px]">
                  <div className="relative">
                    <Field
                      type="text"
                      name="name"
                      placeholder={t("placeholders.name")}
                      className="px-4 py-[10px] border border-[#989898] w-full rounded-[32px] font-montserrat text-sm bg-primary-white placeholder:font-montserrat placeholder:font-normal placeholder:text-xs placeholder:text-[#989898]"
                    />
                    {errors.name && touched.name && (
                      <div className="text-red-500 text-[10px] absolute bottom-[-14px] left-0">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <Field
                      type="tel"
                      name="phone"
                      placeholder={t("placeholders.phone")}
                      className="px-4 py-[10px] border border-[#989898] w-full rounded-[32px] font-montserrat text-sm bg-primary-white placeholder:font-montserrat placeholder:font-normal placeholder:text-xs placeholder:text-[#989898]"
                    />
                    {errors.phone && touched.phone && (
                      <div className="text-red-500 text-[10px] absolute bottom-[-14px] left-0">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="h-32 lg:h-[112px]">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder={t("placeholders.message")}
                      className="px-4 py-2 border border-[#989898] w-full rounded-lg font-montserrat text-sm h-32 lg:h-[112px] resize-none bg-primary-white placeholder:font-montserrat placeholder:font-normal placeholder:text-xs placeholder:text-[#989898]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary-black text-primary-white font-montserrat font-normal w-full h-[52px] text-sm mt-3 rounded-[32px] hover:bg-primary-white hover:text-primary-black hover:border-primary-black border transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t("submitting") : t("button")}
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 w-[300px] md:w-[400px] lg:w-[500px] text-center"
          >
            <p className="font-montserrat font-normal text-sm md:text-base">
              {t("success")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackForm;

