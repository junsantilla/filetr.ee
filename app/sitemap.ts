import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://filetr.ee'
  
  // Static pages
  const staticPages = [
    '',
    '/privacy',
    '/terms',
  ]

  // Programming language and framework pages
  const techPages = [
    '/angular-js',
    '/asp-net',
    '/aws-lambda',
    '/c-plus-plus',
    '/c-sharp',
    '/django',
    '/docker-projects',
    '/electron-js-apps',
    '/express-js',
    '/flask',
    '/flutter',
    '/go',
    '/godot',
    '/ionic',
    '/java',
    '/javascript',
    '/jupyter-notebooks-(python)',
    '/kotlin',
    '/kubernetes-configurations',
    '/laravel',
    '/nestjs',
    '/next-js',
    '/node-js',
    '/php',
    '/python',
    '/pytorch',
    '/r',
    '/react-js',
    '/react-native',
    '/ruby-on-rails',
    '/ruby',
    '/rust',
    '/shopify-app-development',
    '/solid-js',
    '/svelte',
    '/swift',
    '/tensorflow',
    '/typescript',
    '/unity-(c-sharp)',
    '/unreal-engine-(c-plus-plus)',
    '/vue-js',
    '/wordpress-plugin-development',
  ]

  // Combine all pages
  const allPages = [...staticPages, ...techPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}