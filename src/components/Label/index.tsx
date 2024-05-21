type Label = {
  htmlFor: string;
  content: string;
};

const Component = ({ htmlFor, content }: Label) => (
  <label htmlFor={htmlFor} className="mt-3">
    {content}
  </label>
);

export default Component;
