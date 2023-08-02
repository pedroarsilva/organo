import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = () => {
  return (
    <section className='formulario'>
      <form>
      <h2>Preencha os dados para criar o card do colaborador:</h2>
      <CampoTexto label="Nome" placeholder="Digite o nome" />
      <CampoTexto label="Cargo" placeholder="Digite o Cargo" />
      <CampoTexto label="Endereco" placeholder="Digite um endereço" />
      </form>
    </section>
  )
}


export default Formulario;