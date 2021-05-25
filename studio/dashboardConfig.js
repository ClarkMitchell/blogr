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
                  buildHookId: '60ad7c054f6166109340faa0',
                  title: 'Sanity Studio',
                  name: 'blogr-studio',
                  apiId: 'a13784a9-c591-4f10-913c-9c2b195e2a24'
                },
                {
                  buildHookId: '60ad7c054f616613b340fd1f',
                  title: 'Landing pages Website',
                  name: 'blogr-web',
                  apiId: 'ef344f6f-14b3-4e2c-8d7f-afa9cf687884'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ClarkMitchell/blogr',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blogr-web.netlify.app', category: 'apps'}
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
