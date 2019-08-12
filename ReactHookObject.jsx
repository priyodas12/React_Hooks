import React, { useState } from "react";

function ReactHookObject() {
  const [name, setName] = useState({ fname: "", dob: "", email: "", M: "" });
  return (
    <div>
      <form class="form-group">
        <input
          type="text"
          value={name.fname}
          onChange={e => setName({ ...name, fname: e.target.value })}
        />
        <input
          type="text"
          value={name.dob}
          onChange={e => setName({ ...name, dob: e.target.value })}
        />
        <input
          type="text"
          value={name.email}
          onChange={e => setName({ ...name, email: e.target.value })}
        />
        <input
          type="text"
          value={name.M}
          onChange={e => setName({ ...name, M: e.target.value })}
        />
        <h2>Name:{name.fname}</h2>
        <h2>Email:{name.email}</h2>
        <h2>Mob No:{name.M}</h2>
        <h2>Date of Birth:{name.dob}</h2>
        {/* <h3>{JSON.stringify(name)}</h3> */}
      </form>
    </div>
  );
}

export default ReactHookObject;
