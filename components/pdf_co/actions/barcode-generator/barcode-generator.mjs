import app from "../../pdf_co.app.mjs";
import constants from "../common/constants.mjs";

export default {
  name: "Barcode Generator",
  description: "Generate high quality barcode images. Supports QR Code, DataMatrix, Code 39, Code 128, PDF417 and many other barcode types. [See docs here](https://apidocs.pdf.co/40-barcode-generator?utm_referer=https://app.pdf.co/#post-barcodegenerate)",
  key: "pdf_co-barcode-generator",
  version: "0.0.5",
  type: "action",
  props: {
    app,
    value: {
      type: "string",
      label: "Value",
      description: "Sets the value to be converted to the barcode.",
      optional: false,
    },
    type: {
      type: "string",
      label: "Type",
      description: "Sets barcode type. QRCode is default.",
      options: constants.BARCODE_GENERATOR_TYPE_OPTS,
      optional: true,
    },
    name: {
      type: "string",
      label: "Name",
      description: "File name for generated output.",
      optional: true,
    },
    expiration: {
      type: "integer",
      label: "Expiration",
      description: "Output link expiration in minutes. Default is 60 (i.e. 60 minutes or 1 hour).",
      optional: true,
    },
    inline: {
      type: "boolean",
      label: "Inline",
      description: "Set to true to generate DataUri url instead of file.",
      optional: true,
    },
    decorationImage: {
      type: "string",
      label: "Decoration Image",
      description: "Expects a public URL. Works for QR Code only. Set this to the image that you want to be inserted logo inside QR Code barcode.",
      optional: true,
    },
    async: {
      type: "boolean",
      label: "Async",
      description: "Runs processing asynchronously. Returns JobId.",
      optional: true,
    },
    profiles: {
      type: "any",
      label: "Profiles",
      description: "Use this parameter to set additional configuration for fine tuning and extra options. [Explore PDF.co](https://apidocs.pdf.co/kb/OCR/how-to-add-profile-to-pdfco-request) for profile examples.",
      optional: true,
    },
  },
  async run({ $ }) {
    const param = {
      value: this.value,
      type: this.type,
      name: this.name,
      expiration: this.expiration,
      inline: this.inline,
      decorationImage: this.decorationImage,
      async: this.async,
      profiles: this.profiles,
    };
    const response = await this.app.generateBarcode(
      $,
      param,
    );
    $.export("$summary", `Successfully generated barcode from: ${param.value}`);
    return response;
  },
};
