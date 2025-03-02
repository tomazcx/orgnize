import { CardProvider } from "./contexts"
import { AuthProvider } from "./contexts/auth"
import { AppRouter } from "./routes"

function App() {
  return (
    <AuthProvider>
      <CardProvider>
        <AppRouter />
      </CardProvider>
    </AuthProvider>
  )
}

export default App
