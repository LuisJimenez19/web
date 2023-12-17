import { DefaultLayout } from "../layouts/DefaultLayout";

function NotFound() {
  return (
    <DefaultLayout>
      <div className=" w-full  h-[80vh] flex place-content-center border items-center flex-col">
        <h1
          className="font-bold text-[10em]
        bg-gradient-to-r from-linkedin to-wpp bg-clip-text text-transparent
        font-righteous  tracking-widest leading-none"
        >
          404
        </h1>
        <p className="font-poppins text-xl">Página no encontrada</p>
        <a
          className="border-linkedin border-b text-linkedin 
        dark:border-slate-100 dark:text-slate-50
        hover:text-slate-50 hover:bg-linkedin hover:border-slate-50
        dark:hover:bg-slate-50 dark:hover:text-linkedin dark:hover:border-linkedin hover:scale-95 transition-all 
        w-max py-2  px-3 rounded-xl text-sm  
        "
          href="/"
        >
          Volver al inicio
        </a>
      </div>
    </DefaultLayout>
  );
}

export { NotFound };
