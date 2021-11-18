import React from "react";
import './formindex.css';

export const Form = ({ onSubmit }) => {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked(!checked);
  }
  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="Project Name">Project Name</label>
        <input 
        className="form-control" 
        id="projectName"
        placeholder="The best project ever!"
         />
      </div>
      <div className="form-group">
        <label htmlFor="Team Name">Team Name</label>
        <input
          className="form-control"
          id="teamName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date Added</label>
        <input
          className="form-control"
          id="dateAdded"
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Type</label>
        <input
          className="form-control"
          id="type"
        />
      </div>
      <div className="form-group">
        <label htmlFor="info">More info?</label>
        <input
          className="form-control"
          id="moreInfo"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
