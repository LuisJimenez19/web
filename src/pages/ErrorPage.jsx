import { DefaultLayout } from "../layouts/DefaultLayout";

function ErrorPage() {
  return (
    <DefaultLayout>
      <h1>404</h1>
      <p>Página no encontrada</p>
    </DefaultLayout>
  );
}

export { ErrorPage };
