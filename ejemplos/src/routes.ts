import { ReactQueryPage, ReactQueryTodoPage, TypescriptPage } from './examples'

export const routes = [
  {
    name: 'React Query',
    path: 'react-query',
    Component: ReactQueryPage
  },
  {
    name: 'React Query Todos',
    path: 'react-query-todos',
    Component: ReactQueryTodoPage
  },
  {
    name: 'Typescript',
    path: 'typescript',
    Component: TypescriptPage
  }
]
