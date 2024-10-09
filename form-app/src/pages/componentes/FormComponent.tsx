import { useState } from "react"

const FormComponent = () =>{
    const [input,setInputState] = useState("");
    const [inputPassword,setPasswordState] = useState("");


    return(
        <form 
        className="bg-slate-500 !w-1/3 h-2/5  flex flex-col gap-3 repsonsiveTablet:!w-96 repsonsiveTablet: justify-start repsonsiveTablet:gap-2 repsonsiveTablet:h-2/6 responsividadeCel:!w-screen">
            <div>
                <h1 className="text-center text-2xl font-bold">Login</h1>
                <div className="w-full h-px bg-black"></div>
            </div>
            <div className="flex flex-col gap-7 repsonsiveTablet: p-3">
            <input 
                className="rounded-xl p-2 "
                type="email"
                placeholder="Email"
                value={input}
                onChange={key => setInputState(key.target.value)}
            />
            <input 
                className="rounded-xl p-2 "
                type="password" 
                placeholder="Senha"
                value={inputPassword}
                onChange={key => setPasswordState(key.target.value)}
            />
            </div>
            <div className="flex justify-end repsonsiveTablet:text-sm ">
                <a href="" className="mr-3 text-fuchsia-50 ">
                    Esqueceu a Senha ?</a>
            </div>
            <div className="flex justify-center repsonsiveTablet: text-sm ">
            <button className="bg-amber-400 rounded-lg w-24 p-1 responsividadeCel:!p-3">Entrar</button>
            </div>
        </form>
    )
}

export{FormComponent}

/** Como não Pretendo passar esses dados não utilizarei o atributo "action"
 *  Quanto a validação deles posso pensar nisso depois.
 *  O intuito é utilizar os conceitos da aula.
 *  //TODO falta colocar Responsividade 
 */
