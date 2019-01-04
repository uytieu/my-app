module.exports = {
  siteMetadata: {
    title: 'Design + Code for Uy',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'

  },
  plugins: [ 
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '35m9iwl0r6ji',
        accessToken: '7ec8740fbe7ad8712c582209c771701d277c2cc36ad8ee059c304a1cbccec786'
      }
    }
  ],
}