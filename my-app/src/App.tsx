import { AnimalCard } from './Components/AnimalCard'

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      <AnimalCard 
        name="Tigre de Bengala"
        species="Panthera tigris tigris"
        isDangerous={true}
      />

      <AnimalCard 
        name="Capivara"
        species="Hydrochoerus hydrochaeris"
        isDangerous={false}
      />

      <AnimalCard 
        name="Lobo Cinzento"
        species="Canis lupus"
        isDangerous={true}
      />

    </div>
  )
}