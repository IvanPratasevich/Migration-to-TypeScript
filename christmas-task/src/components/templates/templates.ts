export interface Template {
  render(): string;
}
export const HomeComponent: Template = {
  render: () => {
    return `
      <section>
        <h1>Home</h1>
        <p>This is just a test</p>
      </section>
    `;
  },
};

export const Page1Component: Template = {
  render: () => {
    return `
      <section>
        <h1>Page 1</h1>
      </section>
    `;
  },
};

export const Page2Component: Template = {
  render: () => {
    return `
      <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
      </section>
    `;
  },
};

export const ErrorComponent: Template = {
  render: () => {
    return `
      <section>
        <h1>Error</h1>
        <p>This is just a test</p>
      </section>
    `;
  },
};
