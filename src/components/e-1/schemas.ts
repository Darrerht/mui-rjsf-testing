import { RJSFSchema, UiSchema } from "@rjsf/utils";
export const e1Schema: RJSFSchema = {
  title: "Form",
  tipe: "object",
  required: ["section_1", "section_2"],
  properties: {
    section_1: {
      type: "object",
      description: "Section_1",
      properties: {
        i_1_0: {
          type: "string",
          title: "Input 1",
        },
        i_1_1: {
          type: "string",
          title: "Input 2",
        },
        i_1_2: {
          type: "string",
          title: "Input 3",
        },
        i_1_3: {
          type: "string",
          title: "Input 4",
        },
      },
      required: ["i_1_0", "i_1_2", "i_1_3"],
    },
    section_2: {
      type: "object",
      title: "Section 2",
      description: "Section_2",
      properties: {
        i_2_0: {
          type: "string",
          title: "Boolean Field",
        },
        i_2_1: {
          type: "string",
          title: "Boolean Field",
          enum: ["Value 1", "Value 2", "Value 3"],
        },
        i_2_3: {
          type: "string",
          title: "Checkboxes",
          enum: ["Opt 1", "Opt 2", "Opt 3"],
        },
        i_2_4: {
          type: "string",
          title: "Radio Buttons",
          enum: ["Radio 1", "Radio 2", "Radio 3"],
        },
      },
      required: ["i_2_1"],
    },
    section_3: {
      type: "object",
      title: "Section 3",
      properties: {
        sub_0: {
          type: "object",
          title: "Subsection 1",
          properties: {
            i_3_0_0: {
              type: "string",
              title: "Subsection 1 Input 1",
            },
            i_3_0_1: {
              type: "string",
              title: "Subsection 1 Input 2",
            },
            i_3_0_2: {
              type: "string",
              title: "Subsection 1 Input 3",
            },
          },
        },
        sub_1: {
          type: "object",
          title: "Subsection 2",
          properties: {},
        },
        sub_2: {
          type: "object",
          title: "Subsection 3",
          properties: {},
        },
      },
    },
  },
};

export const e1UiSchema: UiSchema = {
  "ui:style": {
    // width: "100%",
    // @ts-ignore
    padding: "1rem 1.5rem",
  },
  "ui:options": {},
  section_1: {
    "ui:columnWidth": 12,
    "ui:fullWidthColumn": true,
    "ui:columnSpacing": "4rem",
    i_1_0: {
      "ui:columnWidth": 4,
      "ui:help": "ASDASD",
    },
    i_1_1: {
      "ui:columnWidth": 4,
    },
    i_1_2: {
      "ui:columnWidth": 5,
      // "ui:fullWidthColumn": true,
    },
    i_1_3: {
      "ui:columnWidth": 6,
      // "ui:fullWidthColumn": true,
    },
  },
  section_2: {
    "ui:columnWidth": 6,
    "ui:help": "Section 2 Help",
    i_2_1: {
      "ui:widget": "radio",
      "ui:inline": true,
      "ui:style": {},
    },
  },
  section_3: {
    "ui:options": {},
    "ui:columnWidth": 6,
    sub_0: {
      "ui:columnWidth": 6,
      "ui:options": {},
      i_3_0_0: {
        "ui:columnWidth": 6,
      },
      i_3_0_1: {
        "ui:columnWidth": 6,
      },
    },
    sub_1: {
      "ui:columnWidth": 6,
      "ui:options": {},
    },
  },
};

export const additionalSchema: RJSFSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
  },
  additionalProperties: {
    type: "number",
    enum: [1, 2, 3],
  },
  required: ["a1"],
};
