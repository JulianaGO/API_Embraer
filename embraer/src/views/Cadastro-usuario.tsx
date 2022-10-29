import React, { useState } from "react";
import Axios from "axios";
import axios from "axios";
import logo from "./logo.svg";
import "../css/CadastroUsuario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModuleResolutionKind } from "typescript";
import { monitorEventLoopDelay } from "perf_hooks";
import Swal from "sweetalert2";

function CriarUsuario() {

    const [values, setValues] = useState(Object);

    const handleChangeValues = (value: any) => {
        setValues((prevValue: any) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = (values: any) => {
        console.log(values);
        Axios.post("http://localhost:3002/criarusuario", {
            nivel_acesso: values.nivel_acesso,
            senha_acesso: values.senha_acesso,
            nome: values.nome,
            email: values.email,
            
        });
        Swal.fire({
            text: 'User registered successfully!',
        })
    };

    return (
        <div className="CriarUsuario">
            <div>
                <i><img className="logoAviaoCriar" src="loguinho.png" id="logoAviaozinho" alt="some text" /></i>
            </div>
            <form id="form_criar_aeronave">
                <div className="card card-custom gutter-b">
                    <div className="card-header">
                        <h3 id="h3Criar" className="card-title">User Registration</h3>
                        <div className="card-toolbar">
                        </div>
                    </div>
                    <div className="card-body col-md-12">
                        <div className="row">
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Username:</label>
                                <input id="nome" className="form-control" name="nome" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Email:</label>
                                <input id="email" type="email" className="form-control" name="email" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Password:</label>
                                <input id="senha_acesso" type="password" className="form-control" name="senha_acesso" placeholder="password max length = 15"onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>User Level:</label>
                                    <select title="nivel_acesso" id="NivelUsuario" className="form-control" name="nivel_acesso" onChange={handleChangeValues}>
                                        <option value="" selected disabled>Select</option>
                                        <option value="1">Administrator</option>
                                        <option value="2">User</option>
                                    </select> 
                            </div>
                        </div>
                    </div>
                        <div className="card-footer w-100 float-right">
                            <a className="rounded btn btn-primary ml-2 float-start" href="http://localhost:3000">
                                <b>Return</b>
                            </a>
                            <button className="rounded btn btn-primary ml-2 float-end" type="submit" id="btn_registrar" name="submitButton" onClick={() => handleClickButton(values)}>
                                <b>Register</b></button>
                        </div>
                </div>
            </form>

                <script src="../compile/build/Cadastro-usuario.js"></script>
        </div>
    );
};

export default CriarUsuario
 