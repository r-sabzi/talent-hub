import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import { connect } from "react-redux";

const Exprience = ({ exprience }) => {
  const expriences = exprience.map(exp => (
    <tr key={exp.id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment>-{" "}
        {exp.to === null ? "now" : <Moment format="YYY/MM/DD">{exp.to}</Moment>}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));
  return (
    <>
      <h2 className="my-2">Exprience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{expriences}</tbody>
      </table>
    </>
  );
};

Exprience.propTypes = {
  exprience:PropTypes.array.isRequired
};

export default Exprience;
