import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

const ProfileExprience = ({
  exprience: { company, title, current, to, from, description }
}) => {
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment>-{" "}
        {!to ? "now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>position:</strong>
        {title}
      </p>
      <p>
        <strong>Description:</strong>
        {description}
      </p>
    </div>
  );
};

ProfileExprience.propTypes = {
  exprience: PropTypes.object.isRequired
};

export default ProfileExprience;
