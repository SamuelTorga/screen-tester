import { useRouteError } from 'react-router-dom'

interface ErrorType {
  status: number
  statusText: string
  data: string
  internal: boolean
  error: {
    message: string
    stack: string
  }
}

const ErrorPage: React.FC = () => {
  const error = useRouteError()
  console.error(error)

  if ((error as ErrorType).status === 404) {
    return (
    <div id="error-page">
      <h1>Página não encontrada</h1>
      <p>A página solicitada não foi encontrada.</p>
    </div>
    )
  }

  return (
    <div id="error-page">
      <h1>Erro desconhecido</h1>
      <p>Houve um erro desconhecido ao carregar a página solicitada:</p>
      <p>{(error as ErrorType).data}</p>
    </div>
  )
}

export default ErrorPage
