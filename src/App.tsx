import './App.css'
import GuestLayout from './layouts/GuestLayout'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div className='w-full h-lvh'>
      <GuestLayout>
        <AppRoutes></AppRoutes>
      </GuestLayout>
    </div>
  )
}

export default App
