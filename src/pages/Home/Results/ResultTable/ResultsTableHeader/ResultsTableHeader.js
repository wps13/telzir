import React from "react";
import PropType from "prop-types";

const ResultsTableHeader = ({ planValue }) => (
  <thead>
    <tr>
      <th>Origem</th>
      <th>Destino</th>
      <th>Tempo da ligação (min)</th>
      <th>Custo sem FaleMais {planValue}</th>
      <th>Custo com FaleMais {planValue}</th>
    </tr>
  </thead>
);

export default ResultsTableHeader;

ResultsTableHeader.propTypes = {
  planValue: PropType.number.isRequired
};
