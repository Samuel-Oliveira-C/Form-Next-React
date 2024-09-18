import "@/styles/globals.css";
import { FormComponent } from "./componentes/FormComponent";

export default function App() {
  return(
    <section className="flex w-screen h-screen bg-lime-200 justify-center items-center">
      <FormComponent />
    </section>
  );
}
