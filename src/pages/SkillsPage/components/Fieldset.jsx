/* eslint-disable react/prop-types */
import { cloneElement } from "react";
import { randomIndex } from "../../../helpers/randomIndex";
import { classColor } from "../constants/skills";
import { ProgressBarSkill } from "./ProgressBarSkill";

function Fieldset({ skills = [], legend = "", className = "" }) {
  return (
    <fieldset
      className={`flex-grow min-w-[200px] border p-2 rounded-xl backdrop-blur-sm shadow-2xl ${className}`}
    >
      <legend className="text-3xl text-center font-righteous">{legend}</legend>
      <ul className="text-white flex flex-col justify-center h-full ">
        {skills.map((skill) => {
          const color = skill.color
            ? skill.color
            : classColor[randomIndex(classColor)];

          return (
            <li className="flex gap-1 items-center" key={skill?.name}>
              {/* {skill?.icon} */}
              {cloneElement(skill.icon, {
                className: `stroke-${color}`,
              })}
              <ProgressBarSkill
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

export { Fieldset };
