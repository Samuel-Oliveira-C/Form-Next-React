import { useState } from "react"

const FormComponent = () =>{
    const [input,setInputState] = useState("");
    const [inputPassword,setPasswordState] = useState("");


    return(
        <form className="bg-slate-500 w-2/5 h-2/3 flex flex-col gap-2">
            <input 
                type="email"
                placeholder="Email"
                value={input}
                onChange={key => setInputState(key.target.value)}
            />
            <input 
                type="password" 
                placeholder="Senha"
                value={inputPassword}
                onChange={key => setPasswordState(key.target.value)}
            />
            <a href="">Esqueceu a Senha ?</a>

            <button>Entrar</button>
        </form>
    )
}

export{FormComponent}

/** Como não Pretendo passar esses dados não utilizarei o atributo "action"
 *  Quanto a validação deles posso pensar nisso depois.
 *  O intuito é utilizar os conceitos da aula.
 */
