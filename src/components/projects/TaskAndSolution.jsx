"use client";

import React from "react";
import Image from "next/image";
import Container from "../Container";
import { useTranslations, useLocale } from "next-intl";
import motifMob from "../../../public/images/image/project-page/task-motif-mob.png";
import motifDesk from "../../../public/images/image/project-page/task-motif-desk.png";
import shadowMob from "../../../public/images/image/project-page/task-shadow-mob.png";
import shadowDesk from "../../../public/images/image/project-page/task-shadow-desk.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TaskAndSolution = ({ task, solution }) => {
  const t = useTranslations("projectPage");
  const locale = useLocale();

  if (!task || !solution) return null;

  const getDescription = (description) => {
    if (!description?.[locale]) return "";

    return description[locale]
      .map((block) => block.children.map((child) => child.text).join(""))
      .join(" ");
  };

  const taskCardRef = useRef(null);
  const solutionCardRef = useRef(null);
  const isTaskCardInView = useInView(taskCardRef, {
    once: true,
    margin: "-100px",
  });
  const isSolutionCardInView = useInView(solutionCardRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <Container className="pb-[94px] lg:pb-[150px] relative z-20">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8 lg:gap-5">
        {/* Task Card */}
        <motion.div
          ref={taskCardRef}
          initial={{ x: -100, opacity: 0 }}
          animate={isTaskCardInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full md:w-[310px] h-[402px] md:h-[400px] lg:w-[590px] lg:h-[583px] rounded-[20px] overflow-hidden group"
        >
          {task.image?.asset?.url && (
            <Image
              src={task.image.asset.url}
              alt={task.title?.[locale]}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 310px, (max-width: 1024px) 310px, 590px"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-[138px] lg:h-[189px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] py-4 pl-[25px] pr-10 lg:py-8 lg:pl-8 lg:pr-[92px]">
            <h3 className="font-arsenal font-normal text-base leading-[19px] text-primary-white uppercase mb-3 lg:text-[40px] lg:leading-[48px] lg:mb-5">
              {task.title?.[locale]}
            </h3>
            <p className="font-montserrat font-light text-xs leading-[15px] text-primary-white lg:text-base lg:leading-[19px]">
              {getDescription(task.description)}
            </p>
          </div>
        </motion.div>

        {/* Solution Card */}
        <motion.div
          ref={solutionCardRef}
          initial={{ x: 100, opacity: 0 }}
          animate={isSolutionCardInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full md:w-[310px] h-[402px] md:h-[400px] lg:w-[590px] lg:h-[583px] rounded-[20px] overflow-hidden group"
        >
          {solution.image?.asset?.url && (
            <Image
              src={solution.image.asset.url}
              alt={solution.title?.[locale]}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 310px, (max-width: 1024px) 310px, 590px"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-[138px] lg:h-[189px] backdrop-blur-[26px] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] bg-[rgba(18,18,18,0.26)] py-4 pl-[25px] pr-10 lg:py-8 lg:pl-8 lg:pr-[92px]">
            <h3 className="font-arsenal font-normal text-base leading-[19px] text-primary-white uppercase mb-3 lg:text-[40px] lg:leading-[48px] lg:mb-5">
              {solution.title?.[locale]}
            </h3>
            <p className="font-montserrat font-light text-xs leading-[15px] text-primary-white lg:text-base lg:leading-[19px]">
              {getDescription(solution.description)}
            </p>
          </div>
        </motion.div>
      </div>
      <Image
        src={motifMob}
        alt="motif"
        className="absolute bottom-[-85px] left-[-10px] md:hidden"
      />
      <Image
        src={motifDesk}
        alt="motif"
        className="absolute bottom-[-270px] lg:bottom-[-260px] right-[-300px] md:block hidden"
      />
      <Image
        src={shadowMob}
        alt="motif"
        className="absolute bottom-[-345px] left-[-10px] md:hidden"
      />
      <Image
        src={shadowDesk}
        alt="motif"
        className="absolute bottom-[-505px] right-[-280px] md:block hidden"
      />
    </Container>
  );
};

export default TaskAndSolution;
