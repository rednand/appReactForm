import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
//import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}
export default App;
