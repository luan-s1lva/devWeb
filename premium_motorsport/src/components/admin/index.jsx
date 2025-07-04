import { Box, Card, TextField } from "@mui/material";
import fundo from "../../imgs/bg-img.jpg";
import { useState } from "react";
import TabelaCarros from "../tabelaCarros";
import Form from "../Form";

export default function AdminPage() {
  const [isStoring, setIsStoring] = useState(true);
  const [formData, setFormData] = useState({
    id: "",
    marca: "",
    modelo: "",
    ano: "",
    preco: "",
    imagem: "",
    descricao: "",
  });

  function detectUpdateButtonOnClick(dados) {
    // console.log(dados)
    setFormData(dados);
  }

  function handleSubmit() {
    fetch("http://localhost:3000/cars", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json());
  }

  function handleUpdate() {
    fetch("http://localhost:3000/cars/" + formData.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json());
  }

  function handleChange(event) {
    const value = event.target.value;

    setFormData({ ...formData, [event.target.name]: value });
  }

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${fundo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          pb: 5,
        }}
      >
        <button type="button" onClick={() => setIsStoring(true)}>
          Store
        </button>
        <button type="button" onClick={() => setIsStoring(false)}>
          Update
        </button>
        {isStoring ? (
          <>
            <Form
              toStore={isStoring}
              handleChange={handleChange}
              formData={formData}
              handleSubmit={handleSubmit}
              handleUpdate={handleUpdate}
            />
          </>
        ) : (
          <>
            <Form
              toStore={isStoring}
              handleChange={handleChange}
              formData={formData}
              handleSubmit={handleSubmit}
              handleUpdate={handleUpdate}
            />
            <TabelaCarros detectUpdate={detectUpdateButtonOnClick} showActions={true}/>
          </>
        )}
      </Box>
    </>
  );
}
