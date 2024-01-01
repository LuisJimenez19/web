import { LinkGradient } from "../components/LinkGradient";
import { DefaultLayout } from "../layouts/DefaultLayout";

function ErrorPage() {
  return (
    <DefaultLayout>
      <div className=" w-full  h-[80vh] flex place-content-center border items-center flex-col">
        <div className="flex items-end">
          <h1
            className="font-bold text-[8em]
            bg-gradient-to-r from-linkedin to-wpp bg-clip-text text-transparent
            font-righteous  tracking-widest leading-none"
          >
            Ups
          </h1>
          <span className="text-[5em]">😲</span>
        </div>
        <p className="font-poppins text-xl">Ha ocurrido un error inesperado</p>

        <LinkGradient aria-label="Enlace al home del portafolio" href={"/"} text="Volver al inicio" />
      </div>
    </DefaultLayout>
  );
}

export { ErrorPage };
