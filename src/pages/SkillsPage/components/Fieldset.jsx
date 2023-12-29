/* eslint-disable react/prop-types */
import { cloneElement } from "react";
import { randomIndex } from "../../../helpers/randomIndex";
import { classColor } from "../constants/skills";
import { ProgressBarSkill } from "./ProgressBarSkill";

function Fieldset({ skills = [], legend = "", className = "" }) {
  return (
    <fieldset
      className={`flex-grow min-w-[200px] border p-2 rounded-xl bg-[#e3e3e3] dark:bg-transparent backdrop-blur-sm shadow-2xl ${className}`}
    >
      <legend className="text-3xl text-center font-righteous">{legend}</legend>
      <ul className="text-white flex flex-col justify-center h-full  gap-1">
        {skills.map((skill, i) => {
          const color = skill?.color || classColor[randomIndex(classColor)];

          return (
            <li
              className=" flex  items-center gap-5"
              key={`${skill?.name}${i}`}
            >
              {/* {skill?.icon} */}
              {cloneElement(skill.icon, {
                className: `stroke-${color} w-[2em] `,
              })}
              <ProgressBarSkill
                key={`${skill?.name}${i + 1}`}
                name={skill?.name}
                color={color}
                progress={skill?.progress}
              />
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

export default Fieldset;
