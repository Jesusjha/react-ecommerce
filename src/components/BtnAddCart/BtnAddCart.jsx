import { Button } from '@nextui-org/react'

const BtnAddCart = ({ addProduct }) => {

  return (
    <Button onClick={addProduct} size='xs' bordered color='error' auto>{' '}ADD CART{' '}</Button>
  )
}

export default BtnAddCart