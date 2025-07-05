import { Box, Card, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import fundo from "../../imgs/bg-img.jpg";
import { useState } from "react";
import TabelaCarros from "../tabelaCarros";
import Form from "../Form";

export default function AdminPage() {
  const navigate = useNavigate();
  const [isStoring, setIsStoring] = useState(true);
  const [isUpdatable, setIsUpdatable] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    marca: "",
    modelo: "",
    ano: "",
    preco: "",
    descricao: "",
  });

  function detectUpdateButtonOnClick(dados) {
    setFormData(dados);
  }

  function detectDeleteButtonOnClick(dados) {
    handleDelete(dados.id);
    window.location.reload();
  }

  function handleSubmit() {
    fetch("http://localhost:3000/cars", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      response.json();
      navigate("/");
    });
  }

  function handleUpdate() {
    fetch("http://localhost:3000/cars/" + formData.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      response.json();
      window.location.reload();
    });
  }

  function handleDelete(id) {
    fetch("http://localhost:3000/cars/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  function handleChange(event) {
    const value = event.target.value;

    setFormData({ ...formData, [event.target.name]: value });
  }

  function handleChangeToStore() {
    setIsStoring(true);
    setFormData({
      marca: "",
      modelo: "",
      ano: "",
      preco: "",
      descricao: "",
    });
  }

  function handleChangeToUpdate() {
    setIsStoring(false);
    setFormData({
      id: "",
      marca: "",
      modelo: "",
      ano: "",
      preco: "",
      descricao: "",
    });
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
        <button type="button" onClick={handleChangeToStore}>
          Store
        </button>
        <button type="button" onClick={() => {handleChangeToUpdate(); setIsUpdatable(false)}}>
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
              handleDelete={handleDelete}
              isUpdatable={true}
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
              isUpdatable={isUpdatable}
            />
            <TabelaCarros
              detectUpdate={detectUpdateButtonOnClick}
              detectDeleteButtonOnClick={detectDeleteButtonOnClick}
              showActions={true}
              setIsUpdatable={setIsUpdatable}
            />
          </>
        )}
      </Box>
    </>
  );
}
