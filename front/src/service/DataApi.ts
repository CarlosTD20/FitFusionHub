import axios, { AxiosError } from 'axios'

export enum ResourceType {
  MUSCLES = 'muscles',
  EXERCISES = 'exercises',
  ROUTINES = 'routines'
}

const API_URL = 'http://localhost:8080'

export const fetchData = async <T>(type: ResourceType): Promise<T[]> => {
  try {
    const response = await axios.get<T[]>(`${API_URL}/${type}`)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchItemById = async <T>(type: ResourceType, id: number): Promise<T | null> => {
    try {
        const response = await axios.get<T>(`${API_URL}/${type}/${id}`)
        return response.data
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError
          if (axiosError.response && axiosError.response.status === 404) {
            console.error(`${type} with ID ${id} not found`)
            return null
          }
          console.error('Error fetching item by ID:', error)
          throw error
        } else {
          console.error('Unknown error:', error)
          throw error
        }
      }
}

export const addItem = async <T>(type: ResourceType, newItem: T): Promise<void> => {
  try {
    await axios.post(`${API_URL}/${type}`, newItem)
  } catch (error) {
    console.error('Error adding item:', error)
    throw error
  }
}

export const updateItem = async <T>(type: ResourceType, id: number, newValue: T): Promise<void> => {
  try {
    await axios.put(`${API_URL}/${type}/${id}`, newValue)
  } catch (error) {
    console.error('Error updating item:', error)
    throw error
  }
}

export const deleteItem = async (type: ResourceType, id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${type}/${id}`)
  } catch (error) {
    console.error('Error deleting item:', error)
    throw error
  }
}