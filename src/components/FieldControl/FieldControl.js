import React from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import Radio from "../Radio/Radio";
import Checkbox from "../Checkbox/Checkbox";
import DateTimePicker from "../DatePicker/DateTimePicker";
import AutoSuggest from "../AutoSuggest/AutoSuggest";

function FieldControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <DateTimePicker {...rest} />;
    case "autosuggest":
      return <AutoSuggest {...rest} />;
    default:
      return null;
  }
}

export default FieldControl;
