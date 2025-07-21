import React, { useState } from "react";
import JsonField from "./components/JsonField";
import JsonPreview from "./components/JsonPreview";
import "./styles/app.css";

const App = () => {
  const [fields, setFields] = useState([]);

  const handleChange = (path, updatedField) => {
    const update = (arr, path) => {
      if (path.length === 1) {
        arr[path[0]] = updatedField;
      } else {
        update(arr[path[0]].fields, path.slice(1));
      }
    };
    const newFields = [...fields];
    update(newFields, path);
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { key: "", type: "string" }]);
  };

  const handleDelete = (path) => {
    const remove = (arr, path) => {
      if (path.length === 1) {
        arr.splice(path[0], 1);
      } else {
        remove(arr[path[0]].fields, path.slice(1));
      }
    };
    const newFields = [...fields];
    remove(newFields, path);
    setFields(newFields);
  };

  return (
    <div className="container">
      <h1>JSON Schema Builder</h1>
      {fields.map((field, index) => (
        <JsonField
          key={index}
          field={field}
          path={[index]}
          onChange={handleChange}
          onDelete={handleDelete}
        />
      ))}
      <button onClick={handleAddField}>+ Add Field</button>
      <JsonPreview fields={fields} />
    </div>
  );
};

export default App;