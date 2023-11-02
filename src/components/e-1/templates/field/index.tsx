import { FieldTemplateProps, getSchemaType } from "@rjsf/utils";
import { ItemContainer, ObjectContainer } from "./wrapper";

export const FieldTemplate = (props: FieldTemplateProps) => {
  const { schema } = props;

  const schemaType = getSchemaType(schema);

  return schemaType === "object" ? (
    <ObjectContainer {...props} />
  ) : (
    <ItemContainer {...props} />
  );
};
export default FieldTemplate;
