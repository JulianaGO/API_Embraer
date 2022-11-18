import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  function manipularEnvio(evento: any) {
    evento.preventDefault();

    Swal.fire({
      title: "Sucessful created Flap",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    });
  }

  const [Flap, setFlap] = useState("");
  const [Distancia, setDistancia] = useState("");
  const [Reversor, setReversor] = useState("");

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Flap</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Cadastro de flap
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="col-md-12">
              <div className="row">
                <div className="form-group col-md-3 flap">
                  <label>Flap</label>
                  <input
                    id="tipo_flap"
                    name="tipo_flap"
                    placeholder="Insert the aircraft flap"
                    value={Flap}
                    onChange={(e) => setFlap(e.target.value)}
                  />
                  <small></small>
                  <FormControlLabel
                    control={<Switch />}
                    label="Ice Accretion"
                  />
                </div>
                <div className="form-group col-md-3 flap">
                  <label>Referential distance</label>
                  <input
                    id="distancia_referencial"
                    name="distancia_referencial"
                    placeholder="Referential distance (m)"
                    type="number"
                    value={Distancia}
                    onChange={(e) => setDistancia(e.target.value)}
                  />
                  <small></small>
                </div>
                <div className="form-group col-md-3 flap">
                  <label>Reverser variation:</label>
                  <input
                    id="correcao_reversor_inoperante"
                    name="correcao_reversor_inoperante"
                    placeholder="Per rev inop (m)"
                    type="number"
                    value={Reversor}
                    onChange={(e) => setReversor(e.target.value)}
                  />
                  <small></small>
                </div>
              </div>
            </div>
            <div className="card-footer w-100 float-right">
              <button
                className="rounded btn btn-primary ml-2 float-end"
                type="submit"
                id="btn_registrar"
                name="submitButton"
                onClick={manipularEnvio}
              >
                <b>Register</b>
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
