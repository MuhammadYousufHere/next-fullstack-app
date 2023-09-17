# Routing

### [id]

page/dynamicroute

### [...id]

page/catch/all/pages

### (stuff)

this is route group for organization structure of routes
i,e'

> > mypages > notes | services
> > these all pages comes inside mypages folder with round brackets
> > it does't have effect on the url - i.e url will be /notes - /service

### Parallel Routing

creates names slot that can be accessed in parent layout - allowing to render
multiple pages on the same routes.

{pro} {basic}
export default funtion Layout({children,pro,basic}){
return {

<div>
    {children}
    {pro}
    {basic}
  </div>
}
}
### Intercepting Routes (..)cart
### Intercepting Routes (..)cart/[id]
most complex routing
render the default page for server side rendering but then use entirely different page for client 
side rendering

===(..)photo/[id]
| \_\_\_page.tsx
|
| ---layout.tsx

## Layout

layout.tsx doesn't re render on route changes.
template.tsx re render on every mount. when you don;t want ui to persist.

# Rendering

main reason behind using meta framework to handle server-side-rendering for search engines optimizations.
site that are renderred on servers are easier to search bots to understand. oppose to SPA react apps etc. rendered with JS after initial page load.

next supports followings

> > SSR
> > ISR
> > Static Rendering
> > Client

every page can exorts variables to change nextjs behavioirs.

1 - export const dynamic = 'auto' | 'force-dynamic' | 'force-static'

'auto' => by default -
'force-dynamic' => SSR like getServerSideProps in next 12 - which always server side rendering without cahcing. - use when data changes
'force-static' => SSG like getStaticProps in next 12 - which tells the next to cache the page indefinately (always) - ideal for page where data never changes

1 - export const revalidate = 4900
this is incremental static regeneration ISR that allows you to regenerate the static page after time in seconds elapsed.

# SEO

export a metadata variable to tell next to optimze for seo
export const metadata = {
title:"",
description:"",
}
values will be added to the head of the document.

if data is dynamic you can do it to generate the metadata on the fly.

`export async function generateMetadata ({params}){
return {
  title:"..",
  description:"",
}
}`

# Data fetching

data fetching is dead simple in next 13 since all the pages by default are server rendered and server components.
so you can make pages async and have directly access to the server and server envs.
so you can use prisma and firbase along the fetch directly in your page.
it also does auto deduping which identifys the same data api endpoint being requested just like rtk and auto parallel requesting.

# Straming and Suspense.

first understand 5 steps involved in rendering the page.
1 - fetch data on the server
2 - render the react component in the html on the server.
3 - once have html server sends it to browser along with css.
3 - at first browser will render the css and html as non-interactive (first paint)
5 - execute the javaScript (Hyderation) make it fully interactive.

Now nest js handles streaming automatically but as a developer you can enhance the process.
-> by adding the loading.tsx file . under the hood react suspense does the heavy lifting. (ideal)
-> you can use Suspense in next direclty which give you the driver seat to accomplish desired result.
