export interface Template {
  render(): string;
}
export const HomeComponent: Template = {
  render: () => {
    return `
    <main class="main">
      <div class="main-wrapper">
        <div class="start-card">
          <h1 class="start-card__text">Помогите бабушке нарядить елку</h1>
        </div>
        <a class="btn-start" href="#/page1">
          <span class="btn-start__text">Начать</span>
        </a>
      </div>
    </main>
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
