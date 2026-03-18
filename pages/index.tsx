import { useEffect, useState } from 'react'
import Page from '@/components/page'
import Section from '@/components/section'

const Index = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    // Replace with your actual backend URL
    fetch('http://localhost:8000/api/items/')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err))
  }, [])

  return (
    <Page>
      <Section>
        <h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
          Our Items from Django
        </h2>

        <div className='mt-4 space-y-2'>
          {items.length > 0 ? (
            items.map((item: any, index: number) => (
              <div key={index} className='p-3 border rounded border-zinc-200 dark:border-zinc-800'>
                <p className='text-zinc-900 dark:text-zinc-50 font-medium'>
                  {item.name || "Unnamed Item"}
                </p>
                {/* Adjust based on your Item model fields */}
              </div>
            ))
          ) : (
            <p className='text-zinc-600'>Loading items or no items found...</p>
          )}
        </div>
      </Section>
    </Page>
  )
}

export default Index