import DocumentationTemplate from "./AutoDocs.mdx";
import "../public/assets/style/tailwind.css";

export default {
  parameters: {
    docs: {
      page: DocumentationTemplate,
      toc: true,
    },
  },
};
