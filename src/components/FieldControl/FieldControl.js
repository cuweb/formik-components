import React from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import Radio from "../Radio/Radio";
import Checkbox from "../Checkbox/Checkbox";
import DatePicker from "../DatePicker/DatePicker";
import AutoSuggest from "../AutoSuggest/AutoSuggest";
import FileUpload from '../FileUpload/FileUpload';
import ImageUpload from '../ImageUpload/ImageUpload';

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
      return <DatePicker {...rest} />;
    case "autosuggest":
      return <AutoSuggest {...rest} />;
    case 'fileUpload':
      return <FileUpload {...rest} />
    case 'imageUpload':
      return <ImageUpload {...rest} />
    default:
      return null;
  }
}

export default FieldControl;
