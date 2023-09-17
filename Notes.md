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
