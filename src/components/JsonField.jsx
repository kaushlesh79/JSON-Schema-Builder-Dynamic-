import React from "react";

const JsonField = ({ field, path, onChange, onAdd, onDelete }) => {
  // yaha key change kr rhe input mei
  const handleKeyChange = (e) => {
    const updatedField = { ...field, key: e.target.value };
    onChange(path, updatedField);
  };

  // yaha dropdown se type change kr rhe, agar nested hua to uske andar fields array bhi de rhe
  const handleTypeChange = (e) => {
    const newType = e.target.value;
    let updatedField = { ...field, type: newType };

    if (newType === "nested") {
      updatedField.fields = field.fields || [];
    } else {
      delete updatedField.fields;
    }

    onChange(path, updatedField);
  };

  // nested field change ho rha to uske parent ko update kr rhe
  const handleNestedChange = (nestedPath, updatedNestedField) => {
    const updatedFields = [...(field.fields || [])];
    updatedFields[nestedPath[nestedPath.length - 1]] = updatedNestedField;
    const updatedField = { ...field, fields: updatedFields };
    onChange(path, updatedField);
  };

  // nested field delete kr rhe
  const handleDeleteNested = (nestedPath) => {
    const updatedFields = [...(field.fields || [])];
    updatedFields.splice(nestedPath[nestedPath.length - 1], 1);
    const updatedField = { ...field, fields: updatedFields };
    onChange(path, updatedField);
  };

  // nested field add kr rhe
  const handleAddNested = () => {
    const updatedFields = [...(field.fields || []), { key: "", type: "string" }];
    const updatedField = { ...field, fields: updatedFields };
    onChange(path, updatedField);
  };

  return (
    <div className="field-block" style={{ marginLeft: path.length * 20, marginBottom: 8 }}>
      {/* key ka input field */}
      <input
        type="text"
        value={field.key}
        onChange={handleKeyChange}
        placeholder="Key"
        style={{ marginRight: 8 }}
      />

      {/* type ka dropdown */}
      <select value={field.type} onChange={handleTypeChange} style={{ marginRight: 8 }}>
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
        <option value="nested">Nested</option>
      </select>

      {/* delete button */}
      <button
        onClick={() => onDelete(path)}
        style={{ marginLeft: 8 }}
      >
        Delete
      </button>

      {/* agar type nested hai to uske andar ke fields dikha rhe */}
      {field.type === "nested" && (
        <div className="nested-fields" style={{ marginLeft: 20, marginTop: 8 }}>
          {(field.fields || []).map((nestedField, index) => (
            <JsonField
              key={index}
              field={nestedField}
              path={[...path, index]}
              onChange={handleNestedChange}
              onAdd={onAdd}
              onDelete={handleDeleteNested}
            />
          ))}
          {/* nested ke andar naya field add krne ka button */}
          <button onClick={handleAddNested} style={{ marginTop: 6 }}>
            + Add in Nested Field
          </button>
        </div>
      )}
    </div>
  );
};

export default JsonField;
