import { useEffect, useState } from 'react'
import { Form, Card } from 'react-bootstrap'

const CATEGORY_API_URL = 'https://opentdb.com/api_category.php'

function CategoryFilter({ selectedCategoryId, onCategoryChange }) {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    async function loadCategories() {
      setIsLoading(true)
      setErrorMessage('')

      try {
        const response = await fetch(CATEGORY_API_URL)

        if (!response.ok) {
          throw new Error('Failed to load categories.')
        }

        const data = await response.json()

        setCategories(data.trivia_categories ?? [])
      } catch {
        setErrorMessage('Unable to load categories.')
      } finally {
        setIsLoading(false)
      }
    }

    loadCategories()
  }, [])

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Filter by category</Card.Title>
        <Form.Select
          value={selectedCategoryId}
          onChange={(event) => onCategoryChange(event.target.value)}
          disabled={isLoading || Boolean(errorMessage)}
        >
          <option value="">Any category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
        {errorMessage && <div className="text-danger small mt-2">{errorMessage}</div>}
      </Card.Body>
    </Card>
  )
}

export default CategoryFilter
