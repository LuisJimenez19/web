import { LinkGradient } from "../components/LinkGradient";
import { DefaultLayout } from "../layouts/DefaultLayout";

function NotFound() {
  return (
    <DefaultLayout>
      <div className=" w-full  h-[80vh] flex place-content-center  items-center flex-col">
        <h1
          className="font-bold text-[10em]
        bg-gradient-to-r from-linkedin to-wpp bg-clip-text text-transparent
        font-righteous  tracking-widest leading-none"
        >
          404
        </h1>
        <p className="font-poppins text-xl">Página no encontrada</p>

        <LinkGradient href={"/"} aria-label="Enlace al home del portafolio" text="Volver al inicio" />
      </div>
    </DefaultLayout>
  );
}

export { NotFound };
