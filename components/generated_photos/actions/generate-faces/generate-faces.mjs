import generatedPhotos from "../../generated_photos.app.mjs";
import constants from "../../common/constants.mjs";

export default {
  key: "generated_photos-generate-faces",
  name: "Generate Faces",
  description: "Generates faces using the Generated Photos API. [See the documentation](https://generated.photos/account#apikey)",
  version: "0.0.1",
  type: "action",
  props: {
    generatedPhotos,
    version: {
      type: "string",
      label: "Version",
      description: "Model version",
      options: constants.MODEL_VERSIONS,
      optional: true,
    },
    confidence: {
      type: "string",
      label: "Confidence",
      description: "Valid values: `0.0 - 1.0`. Since all of our faces are generated by AI, we’ve used several neural networks to classify images. This parameter controls the threshold of how confident were predictions.",
      optional: true,
    },
    emotion: {
      type: "string",
      label: "Emotion",
      description: "Emotion value",
      options: constants.EMOTION,
      optional: true,
    },
    gender: {
      type: "string",
      label: "Gender",
      description: "Gender value",
      options: constants.GENDER,
      optional: true,
    },
    age: {
      type: "string",
      label: "Age",
      description: "Age value",
      options: constants.AGE,
      optional: true,
    },
    ethnicity: {
      type: "string",
      label: "Ethnicity",
      description: "Ethnicity value",
      options: constants.ETHNICITY,
      optional: true,
    },
    eyeColor: {
      type: "string",
      label: "Eye Color",
      description: "Eye color value",
      options: constants.EYE_COLOR,
      optional: true,
    },
    hairColor: {
      type: "string",
      label: "Hair Color",
      description: "Hair color value",
      options: constants.HAIR_COLOR,
      optional: true,
    },
    hairLength: {
      type: "string",
      label: "Hair Length",
      description: "Hair length value",
      options: constants.HAIR_LENGTH,
      optional: true,
    },
    orderBy: {
      type: "string",
      label: "Order By",
      description: "Value to order the results by",
      options: constants.ORDER_BY,
      optional: true,
    },
    limit: {
      propDefinition: [
        generatedPhotos,
        "limit",
      ],
    },
  },
  async run({ $ }) {
    const { faces } = await this.generatedPhotos.generateFaces({
      params: {
        version: this.version,
        confidence: this.confidence,
        emotion: this.emotion,
        gender: this.gender,
        age: this.age,
        ethnicity: this.ethnicity,
        eye_color: this.eyeColor,
        hair_color: this.hairColor,
        hair_length: this.hairLength,
        order_by: this.orderBy,
        per_page: this.limit,
      },
      $,
    });

    if (faces?.length) {
      $.export("$summary", `Successfully generated ${faces.length} face${faces.length === 1
        ? ""
        : "s"}.`);
    }

    return faces;
  },
};
