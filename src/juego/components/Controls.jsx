import { InputName } from "./InputName"

export const Controls = ({onCheckInput, attempts}) => {
  return (
    <>
      <InputName onCheckInput={onCheckInput}/>
      <p>llevas {attempts} intentos</p>
    </>
  )
}
