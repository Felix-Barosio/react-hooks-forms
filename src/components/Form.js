import React from "react";

function Form({ handleChangeFirstName, handleChangeLastName, handleNewsLetterChange, newsLetter, firstName, lastName }) {

  return (
    <form>
      <input type="text" onChange={handleChangeFirstName} value={firstName} />
      <input type="text" onChange={handleChangeLastName} value={lastName} />
      <label htmlFor="newsletter">Subscribe to our newsLetter</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsLetterChange}
        checked={newsLetter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;