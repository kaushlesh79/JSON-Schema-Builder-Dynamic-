const buildJson = (fields) => {
  if (!Array.isArray(fields)) return {};
  const result = {};
  for (const field of fields) {
    if (field.type === "nested") {
      result[field.key] = buildJson(field.fields);
    } else {
      result[field.key] = field.type.toUpperCase();
    }
  }
  return result;
};



const JsonPreview = ({ fields }) => {
  const schema = buildJson(fields);
  return (
    <div className="preview-box">
      <h3>JSON Preview</h3>
      <pre>{JSON.stringify(schema, null, 2)}</pre>
    </div>
  );
};


export default JsonPreview;