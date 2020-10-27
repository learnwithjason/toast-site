import { sourceMdx } from '@toastdotdev/mdx';

export const sourceData = async ({ setDataForSlug }) => {
  await sourceMdx({
    setDataForSlug,
    directory: './content',
    slugPrefix: '/posts',
  });

  setDataForSlug('/about', {
    component: {
      mode: 'source',
      value: `
        import { h } from "preact";
        export default (props)=><div>{JSON.stringify(props, null, 2)}</div>;
      `,
    },
    data: {
      some: 'boops',
    },
  });

  return;
};
