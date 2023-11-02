import { FieldTemplateProps, getSchemaType } from "@rjsf/utils";
import { ItemContainer, NullContainer, ObjectContainer } from "./wrapper";
import { FieldType } from "../../../../enums/field-type";

export const FieldTemplate = (props: FieldTemplateProps) => {
  const { schema } = props;

  const schemaType = getSchemaType(schema);

  switch (schemaType) {
    case FieldType.obj:
      return <ObjectContainer {...props} />;
    case FieldType.null:
      return <NullContainer {...props} />;
    default:
      return <ItemContainer {...props} />;
  }
};
export default FieldTemplate;
