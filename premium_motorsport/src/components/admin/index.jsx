import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useNavigate } from "react-router";
import fundo from "../../imgs/bg-img.jpg";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (isStoring) {
      setFormData({
        marca: "",
        modelo: "",
        ano: "",
        preco: "",
        descricao: "",
      });
    } else {
      setFormData({
        id: "",
        marca: "",
        modelo: "",
        ano: "",
        preco: "",
        descricao: "",
      });
    }
  }, []);
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
        <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
          <ToggleButtonGroup
            value={isStoring ? "store" : "update"}
            exclusive
            onChange={(e, value) => {
              if (value === "store") {
                handleChangeToStore();
                setIsUpdatable(false);
              } else if (value === "update") {
                handleChangeToUpdate();
                setIsUpdatable(false);
              }
            }}
            sx={{
              borderRadius: "50px",
              overflow: "hidden",
              boxShadow: 2,
              bgcolor: "white",
            }}
          >
            <ToggleButton value="store" sx={{ px: 4, fontWeight: "bold" }}>
              Cadastro
            </ToggleButton>
            <ToggleButton value="update" sx={{ px: 4, fontWeight: "bold" }}>
              Edição
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
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
