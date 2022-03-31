import React from "react";
import styles from "./FormField.module.css";

function FormField({
  type,
  fieldIcon,
  placeholder,
  name,
  value,
  setter,
  misc,
  dropdownValues,
  info,
  isReadOnly = false,
  width = "normal",
}) {
  const renderFormField = () => {
    if (["text", "password"].includes(type)) {
      return (
        <>
          <div className={`${styles.formField}`}>
            <img
              src={fieldIcon}
              className={`${styles.formFieldIcon}`}
              alt={name}
            />
            <input
              type={type}
              placeholder={placeholder}
              value={value[name]}
              onChange={(e) =>
                setter({
                  key: name,
                  value: e.target.value,
                  memberNo: misc?.memberNo,
                })
              }
              readOnly={isReadOnly && "readonly"}
              // style={{ width: width === "normal" ? "275px" : "250px" }}
            />
          </div>
          {info && <p className={`${styles.info}`}>{info}</p>}
        </>
      );
    } else if (type === "dropdown") {
      return (
        <>
          <div className={`${styles.formField} ${styles.selectDiv}`}>
            <img
              src={fieldIcon}
              className={`${styles.formFieldIcon}`}
              alt={name}
            />
            <select
              value={value[name]}
              onChange={(e) =>
                setter({
                  key: name,
                  value: e.target.value,
                  memberNo: misc?.memberNo,
                })
              }
              // style={{ width: width === "normal" ? "275px" : "250px" }}
            >
              <option value="" disabled selected>
                {placeholder}
              </option>
              {dropdownValues.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {info && <p className={`${styles.info}`}>{info}</p>}
        </>
      );
    } else if (type === "textarea") {
      return (
        <>
          <div className={`${styles.formField}`}>
            <img
              src={fieldIcon}
              className={`${styles.formFieldIcon}`}
              alt={name}
            />
            <textarea
              placeholder={placeholder}
              className={`${styles.textarea}`}
              value={value[name]}
              onChange={(e) =>
                setter({
                  key: name,
                  value: e.target.value,
                })
              }
            />
          </div>
          {info && <p className={`${styles.info}`}>{info}</p>}
        </>
      );
    } else {
      return null;
    }
  };

  return <>{renderFormField()}</>;
}

export default FormField;
