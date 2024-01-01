import { cloneElement, useEffect, useRef, useState } from "react";
import { CloseIcon } from "../../../icons/Icons";
import { iconsToFilter } from "../constants/icons";
// import { CloseIcon } from "../../../icons/Icons";

function FormFilter({
  tecnologiesForFilter /* Array con las tecnologias usadas */,
  filterForTecnologies /* Filtra los proyectos */,
}) {
  const [words, setWords] = useState([]); // palabras seleccionadas para filtrar
  const [currentWord, setCurrentWord] = useState(""); // palabra actual que se esta escribiendo

  const [messageToSuggestion, setMessageToSuggestion] = useState(
    "Tecnología no encontrada..."
  );

  const [suggestion, setSuggestion] = useState([]); // palabras de sugerencia para elegir
  const [showInput, setShowInput] = useState(false);

  const inputRef = useRef();

  /* filtrar las tecnologías sugeridas */
  function filterTecnologiesToSuggestion(letter) {
    const wordsKey = tecnologiesForFilter.filter((tec) => {
      /* Si la palabra y esta en las palabras sellecionadas que no la muestre en las sugerencias */
      const isExists = words.some((word) => {
        return tec === word;
      });
      if (!isExists) {
        return tec.toLowerCase().startsWith(letter.toLowerCase());
      }
    });

    if (wordsKey.length === 0) {
      setMessageToSuggestion("Tecnología no encontrada...");
    }
    setSuggestion(wordsKey);
  }

  function handleInput(e) {
    if (e.target.value.trim()) {
      setCurrentWord(e.target.value); // para guardar y seleccionar
      filterTecnologiesToSuggestion(e.target.value); // para mostrar las sugerencias
    }
    if (inputRef.current.value === "") {
      // si ha borrado todo del input
      setSuggestion([]);
      setCurrentWord("");
    }
  }

  /* Para agregar la tecnología */
  function selectWordSubmit(e) {
    e.preventDefault();
    setWords((prev) => prev.concat(suggestion)); // actualizar palabras seleccionadas
    setSuggestion([]);
    setCurrentWord("");
    e.target.reset();
  }

  /*  */
  function deleteWordSelected(word) {
    setWords((prev) => {
      const newWords = prev.filter((tec) => word !== tec);
      if (newWords.length === 0) filterForTecnologies([]); // si ha eliminado todas las sugerencias
      return newWords;
    });
  }

  function resetAll() {
    filterForTecnologies([]);
    setWords([]);
    setSuggestion([]);
    setCurrentWord("");
    inputRef.current.value = "";
  }

  useEffect(() => {
    if (words.length > 0) {
      filterForTecnologies(words); // filtrar el arreglo de proyectos
    }
    //eslint-disable-next-line
  }, [words]);

  return (
    <div className="w-[90%] max-w-[1240px] mx-auto flex flex-col md:flex-row justify-ende gap-2 md:gap-5 items-center md:pl-5  transition-all">
      <div className="flex flex-col gap-3">
        <form
          onSubmit={selectWordSubmit}
          className="  flex justify-start  md:pl-5 "
        >
          <label htmlFor="search" className="flex flex-col gap-1 min-w-[300px]">
            <span
              onClick={() => {
                if (showInput) {
                  resetAll();
                }
                setShowInput(!showInput);
              }}
              className=" z-50 cursor-pointer hover:scale-105 transition-transform hover:underline text-xl font-righteous"
            >
              Filtrar por tecnologías
            </span>
            <input
              onInput={handleInput}
              ref={inputRef}
              autoComplete="off"
              className={`
              p-2 rounded-sm shadow-lg outline-linkedin focus:outline-none font-poppins dark:text-slate-800
              ${
                showInput
                  ? "-translate-y-0 opacity-1 pointer-events-auto"
                  : "-translate-y-[100%] opacity-0 pointer-events-none "
              } transition-all `}
              type="text"
              placeholder="Empieza a escribir..."
              name="search"
            />
          </label>
        </form>
        {/* Mostrar las sugerencias  */}
        <div className="flex flex-wrap gap-2">
          {currentWord.trim().length > 0 &&
            (suggestion.length > 0 ? (
              suggestion.map((word, i) => (
                <p
                  className="py-1 flex gap-3 px-3 border rounded-md animate-pulse font-poppins text-sm"
                  key={`${word}${i.toString()}`}
                >
                  {word}

                  <button
                    aria-label="Añade la palabra a los filtros"
                    onClick={() => {
                      setSuggestion(
                        suggestion.filter((suggestion) => suggestion !== word)
                      );
                      setWords((prev) => prev.concat(word));
                    }}
                  >
                    ✅
                  </button>
                </p>
              ))
            ) : (
              <span className="font-poppins">{messageToSuggestion}</span>
            ))}
        </div>
      </div>

      {/* Mostramos las tecnologias seleccionadas */}
      <div className="flex  w-full  justify-between items-center">
        <div className="flex gap-2 flex-wrap items-center justify-center ">
          {words.map((tec, i) => (
            <span
              style={{
                animationDuration: "0.1s",
              }}
              className={`
              py-1 border-${tec.toLowerCase()} bg-slate-100 dark:bg-slate-900  font-poppins px-2 border rounded-lg flex items-center gap-3 fade-in-icon
              `}
              key={`${i.toString()}${tec}`}
            >
              {cloneElement(
                iconsToFilter.find(
                  (icon) => icon.name.toLowerCase() === tec.toLowerCase()
                ).icon,
                {
                  className: `w-[2em] `,
                }
              )}
              <button
                aria-label="Elimina la palabra seleccionada"
                onClick={() => {
                  deleteWordSelected(tec);
                }}
              >
                <CloseIcon className="w-4" />
              </button>
            </span>
          ))}
        </div>
        {/* Boton para limpiar los filtros */}

        {words.length > 0 && (
          <button
            aria-label="Limpia los filtros"
            onClick={resetAll}
            className="bg-react text-slate-900 font-righteous hover:bg-transparent hover:text-react border hover:border-react shadow-md rounded-md 
            
            transition-all py-1 px-2 fade-in-icon"
          >
            Limpiar filtros
          </button>
        )}
      </div>
    </div>
  );
}

export { FormFilter };
