import { RJSFSchema, UiSchema } from "@rjsf/utils";
export const e1Schema: RJSFSchema = {
  title: "Form",
  tipe: "object",
  required: ["section_1", "section_2", "section_s"],
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
        i_1_n: {
          type: "null",
          description: "Description",
          title: "ASDASD",
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
          type: "boolean",
          title: "Boolean Field",
        },
        i_2_1: {
          type: "string",
          title: "Select Field",
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
    section_s: {
      type: "object",
      title: "Separators demo",
      properties: {
        i_s_0: {
          type: "string",
          title: "ERP system (Required)",
          enum: ["Opt A", "Opt B", "Opt C", "Other"],
        },
        i_s_1: {
          type: "string",
          title: "ERP system if other",
        },
        i_s_2: {
          type: "string",
          title: "ERP system vewrsion Opcional",
        },
        s_s_0: {
          type: "null",
        },
        i_s_3: {
          type: "boolean",
          title: "Reporting tool and consolidation system",
          default: false,
          dependencies: {},
        },
        s_s_1: {
          type: "null",
        },
        i_s_5: {
          type: "string",
          title: "Data Extraction Tool (Required)",
          enum: ["Opt A", "Opt B", "Opt C"],
        },
        i_s_6: {
          type: "string",
          title: "Name Data Extraction Tool (Required)",
        },
        i_s_7: {
          type: "boolean",
          title: "Was ERP System Converted?",
        },
      },
      allOf: [
        {
          if: {
            properties: {
              i_s_0: {
                const: "Other",
              },
            },
          },
          then: {
            required: ["i_s_1"],
          },
        },
        {
          if: {
            properties: {
              i_s_3: {
                const: true,
              },
            },
          },
          then: {
            required: ["i_s_4"],
            properties: {
              i_s_4: {
                type: "string",
                title: "Reporting tool and consolidation system (required)",
              },
            },
          },
        },
      ],
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
  },
  "ui:order": ["section_s", "section_1", "section_3", "section_2"],
  section_1: {
    "ui:style": {
      background: "rgba(255,255,255,0.2",
      border: "1px #e1e1e6 solid",
      borderRadius: "0.5rem",
      padding: "1rem 1.5rem",
      marginBottom: "2rem",
      justifyContent: "center",
    },
    "ui:columnWidth": 12,
    "ui:fullWidthColumn": true,
    "ui:columnSpacing": "0",
    i_1_0: {
      "ui:columnWidth": 5,
      "ui:columnOffset": 1,
      "ui:help": "HELP",
      "ui:helpPosition": "right",
      // "ui:errorPosition": "absolute",
    },
    i_1_1: {
      "ui:columnWidth": 5,
      "ui:fullWidthColumn": true,
      "ui:help": "BOTTOM HELP",
      "ui:helpPosition": "bottom",
    },
    i_1_2: {
      "ui:columnWidth": 5,
      "ui:fullWidthColumn": true,
    },
    i_1_3: {
      "ui:columnWidth": 7,
      // "ui:fullWidthColumn": true,
    },
    i_1_n: {
      "ui:separator": true,
      "ui:help": "Separator",
    },
  },
  section_2: {
    "ui:columnWidth": 6,
    // "ui:help": "Section 2 Help",
    "ui:style": {
      background: "rgba(255,255,255,0.2)",
      border: "1px #e1e1e6 solid",
      borderRadius: "0.5rem",
      padding: "1rem 1.5rem",
      marginBottom: "2rem",
    },
    i_2_3: {
      "ui:inline": true,
      "ui:columnWidth": 6,
      "ui:style": {},
    },
    i_2_4: {
      "ui:columnWidth": 6,
      "ui:widget": "radio",
      "ui:inline": true,
      "ui:style": {},
    },
  },
  section_3: {
    "ui:style": {
      background: "rgba(255,255,255,0.2)",
      border: "1px #e1e1e6 solid",
      borderRadius: "0.5rem",
      padding: "1rem 1.5rem",
      marginBottom: "2rem",
    },

    "ui:columnWidth": 12,
    "ui:fullWidthColumn": true,
    sub_0: {
      "ui:columnWidth": 6,

      "ui:options": {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "red",
      },
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
  section_s: {
    "ui:style": {
      background: "rgba(255,255,255,0.2)",
      border: "1px #e1e1e6 solid",
      borderRadius: "0.5rem",
      padding: "1rem 1.5rem",
      marginBottom: "2rem",
    },
    i_s_0: {
      "ui:columnWidth": 4,
      "ui:columnOffset": 1,
    },
    i_s_1: {
      "ui:columnWidth": 4,
    },
    i_s_2: {
      "ui:columnWidth": 9,
    },
    s_s_0: {
      "ui:separator": true,
    },
    s_s_1: {
      "ui:separator": true,
    },
    "ui:order": ["i_s_0", "i_s_1", "i_s_2", "s_s_0", "i_s_3", "i_s_4", "*"],
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
