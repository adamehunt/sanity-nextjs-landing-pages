export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4579de08bada26d52f18e3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-93ftyrgv',
                  apiId: '76999f77-e9b1-4d2e-827c-aeca8bbfb691'
                },
                {
                  buildHookId: '5e4579dfc68a6f21acd0904c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fxt4btha',
                  apiId: '254dc5ea-fab0-423d-ad5a-8f17f5cad079'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamehunt/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fxt4btha.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
